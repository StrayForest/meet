#!/usr/bin/env node
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const required = [
  'docs/ARCHITECTURE_FITNESS_FUNCTIONS.md',
  'docs/DATA_CLASSIFICATION.md',
  'docs/CONCURRENCY_AND_CONSISTENCY.md',
  'docs/DEGRADED_MODES.md',
  'docs/EXTERNAL_DEPENDENCY_POLICY.md',
  'docs/ARCHITECTURE_MATURITY_LADDER.md',
  'docs/VISUAL_REGRESSION_CONTRACT.md',
  'docs/MODULE_OWNERSHIP.md',
  'docs/security/threat-models/README.md',
  'docs/validation/MVP_BOUNDARY.md',
  'docs/validation/ASSUMPTION_REGISTER.md',
  'docs/00_INDEX.md',
  'docs/10_IMPLEMENTATION_BACKLOG.md',
  'docs/11_DEFINITION_OF_DONE.md'
];

const failures = [];
for (const rel of required) {
  if (!existsSync(join(root, rel))) failures.push(`missing ${rel}`);
}

const mustReference = {
  'docs/00_INDEX.md': [
    'ARCHITECTURE_FITNESS_FUNCTIONS.md',
    'DATA_CLASSIFICATION.md',
    'CONCURRENCY_AND_CONSISTENCY.md',
    'DEGRADED_MODES.md',
    'validation/MVP_BOUNDARY.md'
  ],
  'docs/10_IMPLEMENTATION_BACKLOG.md': [
    'validation/MVP_BOUNDARY.md',
    'data-classification',
    'threat models',
    'no consumer PRIVATE_HOME'
  ],
  'docs/11_DEFINITION_OF_DONE.md': [
    'architecture fitness',
    'data classification',
    'degraded',
    'validation/business contract'
  ]
};

for (const [rel, needles] of Object.entries(mustReference)) {
  if (!existsSync(join(root, rel))) continue;
  const text = readFileSync(join(root, rel), 'utf8').toLowerCase();
  for (const needle of needles) {
    if (!text.includes(needle.toLowerCase())) failures.push(`${rel} missing reference: ${needle}`);
  }
}

if (failures.length) {
  console.error('Architecture contract check failed:\n' + failures.map(x => `- ${x}`).join('\n'));
  process.exit(1);
}
console.log(`Architecture contract check passed (${required.length} required sources; MVP/validation boundary preserved).`);
