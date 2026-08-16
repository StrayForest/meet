#!/usr/bin/env node
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const required = [
  'docs/business/PMF_HYPOTHESES.md',
  'docs/business/BEACHHEAD_MARKET.md',
  'docs/business/GTM_AND_DISTRIBUTION.md',
  'docs/business/CITY_LIQUIDITY_MODEL.md',
  'docs/business/NETWORK_EFFECTS_AND_MOAT.md',
  'docs/business/BUSINESS_MODEL_AND_UNIT_ECONOMICS.md',
  'docs/business/COMPETITIVE_POSITIONING.md',
  'docs/business/INVESTOR_MILESTONES.md'
];

const failures = required.filter(rel => !existsSync(join(root, rel))).map(rel => `missing ${rel}`);

const launchFiles = ['docs/01_PRODUCT_AND_FEATURES.md', 'docs/07_ANALYTICS_I18N_SCALING.md', 'docs/business/BEACHHEAD_MARKET.md'];
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
  if (!text.includes('business/PMF_HYPOTHESES.md')) failures.push('00_INDEX missing business context pack');
}

if (failures.length) {
  console.error('Business contract check failed:\n' + failures.map(x => `- ${x}`).join('\n'));
  process.exit(1);
}
console.log(`Business contract check passed (${required.length} business sources; fi/en/ru preserved).`);
