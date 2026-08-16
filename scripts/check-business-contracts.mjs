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
  'docs/business/OPERATING_MODEL.md',
  'docs/validation/MVP_BOUNDARY.md',
  'docs/validation/ASSUMPTION_REGISTER.md'
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
  for (const rel of ['business/PMF_HYPOTHESES.md', 'PRODUCT_STRATEGY', 'OPERATING_MODEL', 'validation/MVP_BOUNDARY.md']) {
    if (!text.includes(rel)) failures.push(`00_INDEX missing business/validation contract reference: ${rel}`);
  }
}

const product = join(root, 'docs/01_PRODUCT_AND_FEATURES.md');
if (existsSync(product)) {
  const text = readFileSync(product, 'utf8').toLowerCase();
  for (const phrase of ['minimum proof loop', 'helsinki metro first', 'long-term hypothesis', 'public browsing requires no phone verification']) {
    if (!text.includes(phrase)) failures.push(`product strategy invariant missing: ${phrase}`);
  }
  for (const forbidden of ['social graph is the long-term destination', 'mandatory interests']) {
    if (text.includes(forbidden)) failures.push(`stale product strategy invariant present: ${forbidden}`);
  }
}

const agents = join(root, 'AGENTS.md');
if (existsSync(agents)) {
  const text = readFileSync(agents, 'utf8');
  if (!text.includes('Architecture 1.3 is sufficiently specified')) failures.push('AGENTS must prevent speculative architecture expansion');
  if (!text.includes('persistent IRL social graph is a **hypothesis**')) failures.push('AGENTS must keep persistent social graph evidence-gated');
}

if (failures.length) {
  console.error('Business contract check failed:\n' + failures.map(x => `- ${x}`).join('\n'));
  process.exit(1);
}
console.log(`Business contract check passed (${required.length} business/validation sources; fi/en/ru + evidence-gated PMF discipline preserved).`);
