#!/usr/bin/env node
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const required = [
  'docs/business/PMF_HYPOTHESES.md',
  'docs/business/PRODUCT_STRATEGY.md',
  'docs/business/BEACHHEAD_MARKET.md',
  'docs/business/GTM_AND_DISTRIBUTION.md',
  'docs/business/CITY_LIQUIDITY_MODEL.md',
  'docs/business/NETWORK_EFFECTS_AND_MOAT.md',
  'docs/business/BUSINESS_MODEL_AND_UNIT_ECONOMICS.md',
  'docs/business/COMPETITIVE_POSITIONING.md',
  'docs/business/INVESTOR_MILESTONES.md',
  'docs/business/OPERATING_MODEL.md'
];

const failures = required.filter(rel => !existsSync(join(root, rel))).map(rel => `missing ${rel}`);

const launchFiles = ['AGENTS.md', 'docs/01_PRODUCT_AND_FEATURES.md', 'docs/07_ANALYTICS_I18N_SCALING.md', 'docs/business/BEACHHEAD_MARKET.md'];
for (const rel of launchFiles) {
  if (!existsSync(join(root, rel))) { failures.push(`missing ${rel}`); continue; }
  const text = readFileSync(join(root, rel), 'utf8').toLowerCase();
  for (const token of ['fi', 'en', 'ru']) {
    if (!text.includes(token)) failures.push(`${rel} must preserve launch language: ${token}`);
  }
}

const index = join(root, 'docs/00_INDEX.md');
if (existsSync(index)) {
  const text = readFileSync(index, 'utf8');
  for (const rel of ['business/PMF_HYPOTHESES.md', 'PRODUCT_STRATEGY', 'OPERATING_MODEL']) {
    if (!text.includes(rel)) failures.push(`00_INDEX missing business contract reference: ${rel}`);
  }
}

const product = join(root, 'docs/01_PRODUCT_AND_FEATURES.md');
if (existsSync(product)) {
  const text = readFileSync(product, 'utf8');
  for (const phrase of ['who actually does things with whom', 'minimum proof loop', 'Helsinki metro first']) {
    if (!text.toLowerCase().includes(phrase.toLowerCase())) failures.push(`product strategy invariant missing: ${phrase}`);
  }
}

const agents = join(root, 'AGENTS.md');
if (existsSync(agents)) {
  const text = readFileSync(agents, 'utf8');
  if (!text.includes('Architecture 1.3 is sufficiently specified')) failures.push('AGENTS must prevent speculative architecture expansion');
}

if (failures.length) {
  console.error('Business contract check failed:\n' + failures.map(x => `- ${x}`).join('\n'));
  process.exit(1);
}
console.log(`Business contract check passed (${required.length} business sources; fi/en/ru + product/PMF discipline preserved).`);
