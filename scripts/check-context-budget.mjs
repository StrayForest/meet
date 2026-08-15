#!/usr/bin/env node
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = process.cwd();
const failures = [];

function bytes(path) { return Buffer.byteLength(readFileSync(join(root, path))); }
function check(path, max) {
  if (!existsSync(join(root, path))) return failures.push(`${path}: missing`);
  const n = bytes(path);
  console.log(`${path}: ${n}/${max} bytes`);
  if (n > max) failures.push(`${path}: ${n} > ${max}`);
}
function walk(dir) {
  for (const name of readdirSync(dir)) {
    if (name === '.git' || name === 'node_modules') continue;
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (name === 'AGENTS.md') check(relative(root, p) || 'AGENTS.md', 4096);
  }
}

walk(root);
check('CODEX_BOOTSTRAP_PROMPT.md', 1024);
check('docs/00_INDEX.md', 4096);

if (failures.length) {
  console.error('\nContext budget failed:\n- ' + failures.join('\n- '));
  process.exit(1);
}
