#!/usr/bin/env node
import { existsSync, lstatSync, readdirSync, readFileSync } from 'node:fs';
import { dirname, extname, join, normalize, relative, resolve } from 'node:path';

const root = process.cwd();
const failures = [];
const markdownFiles = [];
const ignoredDirs = new Set(['.git', 'node_modules', '.next', 'dist', 'build', 'coverage']);

function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory() && ignoredDirs.has(entry.name)) continue;
    const abs = join(dir, entry.name);
    if (entry.isDirectory()) walk(abs);
    else if (entry.isFile() && extname(entry.name).toLowerCase() === '.md') markdownFiles.push(abs);
  }
}

walk(root);

const linkPattern = /\[[^\]]*\]\(([^)]+)\)/g;
for (const file of markdownFiles) {
  const body = readFileSync(file, 'utf8');
  let match;
  while ((match = linkPattern.exec(body))) {
    let target = match[1].trim();
    if (!target || target.startsWith('#') || /^(https?:|mailto:|tel:|data:)/i.test(target)) continue;

    if (target.startsWith('<') && target.endsWith('>')) target = target.slice(1, -1);
    else target = target.split(/\s+["']/)[0];

    target = target.split('#')[0].split('?')[0];
    if (!target) continue;

    try { target = decodeURIComponent(target); } catch { /* keep literal path */ }

    const resolved = normalize(resolve(dirname(file), target));
    if (!resolved.startsWith(normalize(root + '/')) && resolved !== normalize(root)) {
      failures.push(`${relative(root, file)} links outside repository: ${match[1]}`);
      continue;
    }

    if (!existsSync(resolved)) {
      failures.push(`${relative(root, file)} has broken local link: ${match[1]}`);
      continue;
    }

    if (target.endsWith('/') && !lstatSync(resolved).isDirectory()) {
      failures.push(`${relative(root, file)} expects directory link but target is not a directory: ${match[1]}`);
    }
  }
}

if (failures.length) {
  console.error('Documentation link check failed:\n' + failures.map(x => `- ${x}`).join('\n'));
  process.exit(1);
}

console.log(`Documentation link check passed (${markdownFiles.length} Markdown files scanned).`);
