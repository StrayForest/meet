#!/usr/bin/env node
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const failures = [];

const requiredFiles = [
  '.github/workflows/ci.yml',
  'AGENTS.md',
  'docs/00_INDEX.md',
  'docs/09_FIXED_ARCHITECTURE_DECISIONS.md',
  'docs/11_DEFINITION_OF_DONE.md',
  'docs/exec-plans/active/phase-0-foundation.md',
  'docs/validation/MVP_BOUNDARY.md',
  'docs/validation/ASSUMPTION_REGISTER.md',
  'docs/validation/PRE_DEV_GATE.md',
  'scripts/check-context-budget.mjs',
  'scripts/check-architecture-contracts.mjs',
  'scripts/check-business-contracts.mjs',
  'scripts/check-validation-scope.mjs'
];

for (const rel of requiredFiles) {
  if (!existsSync(join(root, rel))) failures.push(`missing ${rel}`);
}

const read = rel => existsSync(join(root, rel)) ? readFileSync(join(root, rel), 'utf8') : '';
const lower = rel => read(rel).toLowerCase();

const gate = lower('docs/validation/PRE_DEV_GATE.md');
if (gate.includes('- [ ]')) failures.push('PRE_DEV_GATE.md contains unchecked items');
for (const phrase of [
  'persistent irl social graph is a hypothesis',
  'not v1 user-facing scope',
  'public discovery is available before signup',
  'p0-000 documentation/contract consistency audit is complete',
  'github actions ci runs all pre-development contract checks'
]) {
  if (!gate.includes(phrase)) failures.push(`PRE_DEV_GATE.md missing: ${phrase}`);
}

const plan = lower('docs/exec-plans/active/phase-0-foundation.md');
if (!plan.includes('| [x] | p0-000 |')) failures.push('P0-000 must be marked complete before development starts');
if (!plan.includes('mvp-required assertions')) failures.push('Phase 0 plan must distinguish MVP-required assertions');
if (!plan.includes('deferred-on-activation assertions')) failures.push('Phase 0 plan must distinguish deferred assertions');

const ci = lower('.github/workflows/ci.yml');
for (const script of [
  'check-context-budget.mjs',
  'check-architecture-contracts.mjs',
  'check-business-contracts.mjs',
  'check-validation-scope.mjs',
  'check-pre-dev-gate.mjs'
]) {
  if (!ci.includes(script)) failures.push(`CI missing ${script}`);
}

const dod = lower('docs/11_DEFINITION_OF_DONE.md');
if (!dod.includes('check-pre-dev-gate.mjs')) failures.push('Definition of Done must include check-pre-dev-gate.mjs');

const arch = lower('docs/09_FIXED_ARCHITECTURE_DECISIONS.md');
for (const label of ['## locked', '## default', '## deferred']) {
  if (!arch.includes(label)) failures.push(`architecture decision classification missing ${label}`);
}

if (failures.length) {
  console.error('Pre-development gate failed:\n' + failures.map(x => `- ${x}`).join('\n'));
  process.exit(1);
}

console.log(`Pre-development gate passed (${requiredFiles.length} required sources).`);
