#!/usr/bin/env node
import { lstatSync, readdirSync, readFileSync } from 'node:fs';
import { basename, extname, join, relative } from 'node:path';

const root = process.cwd();
const failures = [];
const ignoredDirs = new Set(['.git', 'node_modules', '.next', 'dist', 'build', 'coverage']);
const forbiddenNames = [
  /^\.env($|\.)/i,
  /^id_(rsa|dsa|ecdsa|ed25519)$/i,
  /\.(p12|pfx|key)$/i
];
const secretPatterns = [
  /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/,
  /\bghp_[A-Za-z0-9]{36}\b/,
  /\bgithub_pat_[A-Za-z0-9_]{40,}\b/,
  /\bAKIA[0-9A-Z]{16}\b/,
  /\bAIza[0-9A-Za-z_-]{35}\b/,
  /\bsk-proj-[A-Za-z0-9_-]{20,}\b/
];
const textExtensions = new Set(['.md', '.txt', '.json', '.js', '.mjs', '.cjs', '.ts', '.tsx', '.js', '.jsx', '.yml', '.yaml', '.toml', '.ini', '.conf', '.env', '.sh', '.ps1', '.dbml', '.mmd', '.html', '.css']);

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

    if (forbiddenNames.some(pattern => pattern.test(basename(entry.name)))) {
      failures.push(`public repository contains sensitive filename: ${rel}`);
    }

    const size = lstatSync(abs).size;
    const ext = extname(entry.name).toLowerCase();
    const shouldScan = textExtensions.has(ext) || ext === '';
    if (!shouldScan || size > 1024 * 1024) continue;

    let body;
    try { body = readFileSync(abs, 'utf8'); } catch { continue; }
    for (const pattern of secretPatterns) {
      if (pattern.test(body)) failures.push(`${rel} matches secret pattern ${pattern}`);
    }
  }
}

walk(root);

if (failures.length) {
  console.error('Public repository hygiene check failed:\n' + [...new Set(failures)].map(x => `- ${x}`).join('\n'));
  process.exit(1);
}

console.log('Public repository hygiene check passed (sensitive filenames and high-confidence secret patterns absent).');
