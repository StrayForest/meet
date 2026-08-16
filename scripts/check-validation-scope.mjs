#!/usr/bin/env node
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const failures = [];
const required = [
  'AGENTS.md',
  'docs/validation/MVP_BOUNDARY.md',
  'docs/validation/ASSUMPTION_REGISTER.md',
  'docs/01_PRODUCT_AND_FEATURES.md',
  'docs/10_IMPLEMENTATION_BACKLOG.md',
  'docs/product-specs/new-user-onboarding.md',
  'docs/design-docs/navigation-screen-specs.md',
  'docs/design-docs/screen-state-matrix.md',
  'docs/design-docs/visual-qa.md',
  'docs/TESTING.md',
  'design/screens/consumer.html',
  'design/screens/consumer-v1-data.js'
];

for (const rel of required) if (!existsSync(join(root, rel))) failures.push(`missing ${rel}`);
const text = rel => existsSync(join(root, rel)) ? readFileSync(join(root, rel), 'utf8').toLowerCase() : '';

const mustContain = {
  'AGENTS.md': ['private_home', 'not v1 user-facing scope', 'persistent irl social graph is a **hypothesis**', 'no mandatory hobbies/interests/gender/phone'],
  'docs/validation/MVP_BOUNDARY.md': ['public discovery before signup', 'private_home', 'explicitly not v1', 'custom ml'],
  'docs/01_PRODUCT_AND_FEATURES.md': ['public browsing requires no phone verification', 'private_home is not v1', 'find company', 'long-term hypothesis'],
  'docs/10_IMPLEMENTATION_BACKLOG.md': ['no consumer private_home', 'public discovery + progressive identity', 'find company + occurrence-scoped chat', 'persistent connections experiment (evidence-gated)'],
  'docs/product-specs/new-user-onboarding.md': ['public event/city/category discovery should be available before account creation', 'no mandatory bio/photo/gender/interests'],
  'docs/design-docs/navigation-screen-specs.md': ['discover, my plans, social, profile', 'private_home is not a v1 consumer option'],
  'docs/design-docs/screen-state-matrix.md': ['private_home has no v1 consumer screen/map/disclosure state', 'find company'],
  'docs/design-docs/visual-qa.md': ['consumer-v1-data.js', 'private_home disclosure screens', 'not v1 acceptance requirements'],
  'docs/TESTING.md': ['v1 consumer creation rejects private_home', 'deferred-on-activation invariants']
};

for (const [rel, needles] of Object.entries(mustContain)) {
  const body = text(rel);
  for (const needle of needles) if (!body.includes(needle)) failures.push(`${rel} missing scope invariant: ${needle}`);
}

const consumerHtml = text('design/screens/consumer.html');
if (!consumerHtml.includes('consumer-v1-data.js')) failures.push('consumer.html must load consumer-v1-data.js');
for (const stale of ['consumer-data.js', 'consumer-edge-data.js', 'consumer-variants-data.js']) {
  if (consumerHtml.includes(stale)) failures.push(`consumer.html must not load historical pack: ${stale}`);
}

if (failures.length) {
  console.error('Validation scope check failed:\n' + failures.map(x => `- ${x}`).join('\n'));
  process.exit(1);
}
console.log(`Validation scope check passed (${required.length} active MVP sources).`);
