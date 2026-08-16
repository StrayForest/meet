#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import { existsSync, lstatSync, readdirSync, readFileSync } from 'node:fs';
import { basename, extname, join, relative } from 'node:path';

const root = process.cwd();
const failures = [];
const ignoredDirs = new Set(['.git', 'node_modules', '.next', 'dist', 'build', 'coverage']);
const safeEnvTemplates = new Set(['.env.example', '.env.sample', '.env.template']);
const secretPatterns = [
  /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/,
  /\bghp_[A-Za-z0-9]{36}\b/,
  /\bgithub_pat_[A-Za-z0-9_]{40,}\b/,
  /\bAKIA[0-9A-Z]{16}\b/,
  /\bAIza[0-9A-Za-z_-]{35}\b/,
  /\bsk-proj-[A-Za-z0-9_-]{20,}\b/
];
const textExtensions = new Set(['.md', '.txt', '.json', '.js', '.mjs', '.cjs', '.ts', '.tsx', '.jsx', '.yml', '.yaml', '.toml', '.ini', '.conf', '.env', '.sh', '.ps1', '.dbml', '.mmd', '.html', '.css']);
const requiredIgnoreRules = ['.env', '.env.*', 'node_modules/', '.terraform/', '*.tfstate', '*.tfvars', '*.key', '*.p12', '*.pfx'];

function isSensitiveFilename(path) {
  const name = basename(path).toLowerCase();
  if (safeEnvTemplates.has(name)) return false;
  return /^\.env($|\.)/i.test(name)
    || /^id_(rsa|dsa|ecdsa|ed25519)$/i.test(name)
    || /\.(p12|pfx|key)$/i.test(name);
}

function scanSecrets(label, body) {
  for (const pattern of secretPatterns) {
    if (pattern.test(body)) failures.push(`${label} matches secret pattern ${pattern}`);
  }
}

function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory() && ignoredDirs.has(entry.name)) continue;
    const abs = join(dir, entry.name);
    const rel = relative(root, abs);
    if (entry.isDirectory()) {
      walk(abs);
      continue;
    }
    if (!entry.isFile()) continue;

    if (isSensitiveFilename(rel)) failures.push(`current tree contains sensitive filename: ${rel}`);

    const size = lstatSync(abs).size;
    const ext = extname(entry.name).toLowerCase();
    const shouldScan = textExtensions.has(ext) || ext === '';
    if (!shouldScan || size > 1024 * 1024) continue;

    let body;
    try { body = readFileSync(abs, 'utf8'); } catch { continue; }
    scanSecrets(rel, body);
  }
}

function checkGitignore() {
  const path = join(root, '.gitignore');
  if (!existsSync(path)) {
    failures.push('missing root .gitignore for public repository safety baseline');
    return;
  }
  const rules = new Set(readFileSync(path, 'utf8')
    .split(/\r?\n/)
    .map(line => line.trim())
    .filter(line => line && !line.startsWith('#')));
  for (const rule of requiredIgnoreRules) {
    if (!rules.has(rule)) failures.push(`.gitignore missing required safety rule: ${rule}`);
  }
  if (!rules.has('!.env.example')) failures.push('.gitignore must explicitly allow a sanitized .env.example template');
}

function checkHistory() {
  let shallow;
  try {
    shallow = execFileSync('git', ['rev-parse', '--is-shallow-repository'], { cwd: root, encoding: 'utf8' }).trim();
  } catch (error) {
    failures.push(`cannot verify git history: ${error.message}`);
    return;
  }
  if (shallow === 'true') {
    failures.push('history-aware secret scan requires a full git checkout (fetch-depth: 0)');
    return;
  }

  let names = '';
  let patches = '';
  try {
    names = execFileSync('git', ['log', '--all', '--format=', '--name-only'], {
      cwd: root,
      encoding: 'utf8',
      maxBuffer: 16 * 1024 * 1024
    });
    patches = execFileSync('git', ['log', '--all', '--format=commit:%H', '--patch', '--no-ext-diff', '--text'], {
      cwd: root,
      encoding: 'utf8',
      maxBuffer: 64 * 1024 * 1024
    });
  } catch (error) {
    failures.push(`git history scan failed: ${error.message}`);
    return;
  }

  for (const raw of names.split(/\r?\n/)) {
    const name = raw.trim();
    if (!name) continue;
    if (isSensitiveFilename(name)) failures.push(`git history contains sensitive filename: ${name}`);
  }
  scanSecrets('git history', patches);
}

walk(root);
checkGitignore();
checkHistory();

if (failures.length) {
  console.error('Public repository hygiene check failed:\n' + [...new Set(failures)].map(x => `- ${x}`).join('\n'));
  process.exit(1);
}

console.log('Public repository hygiene check passed (current tree + full git history scanned for sensitive filenames/high-confidence secret patterns).');
