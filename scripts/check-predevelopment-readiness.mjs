#!/usr/bin/env node
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const failures = [];
const read = rel => existsSync(join(root, rel)) ? readFileSync(join(root, rel), 'utf8') : '';
const requireFile = rel => {
  if (!existsSync(join(root, rel))) failures.push(`missing ${rel}`);
};

const threatModels = [
  'docs/security/threat-models/account-takeover.md',
  'docs/security/threat-models/host-event-abuse.md',
  'docs/security/threat-models/moderation-abuse.md',
  'docs/security/threat-models/staff-compromise.md',
  'docs/security/threat-models/media-upload.md',
  'docs/security/threat-models/ingestion-ssrf.md',
  'docs/security/threat-models/realtime-abuse.md',
  'docs/security/threat-models/private-home-disclosure.md'
];

const adrs = [
  'docs/adr/0001-event-first-domain.md',
  'docs/adr/0002-backend-data.md',
  'docs/adr/0003-mobile-expo.md',
  'docs/adr/0004-gcp-runtime.md',
  'docs/adr/0005-safety-identity.md',
  'docs/adr/0006-schema-event-contract-governance.md',
  'docs/adr/0007-reliability-dr-slo.md',
  'docs/adr/0008-supply-chain-origin-governance.md'
];

for (const rel of [
  'schemas/database.dbml',
  'project-manifest.json',
  'docs/validation/ASSUMPTION_REGISTER.md',
  'docs/design-docs/accessibility-content-localization.md',
  '.github/workflows/predevelopment-contracts.yml',
  ...threatModels,
  ...adrs
]) requireFile(rel);

const dbml = read('schemas/database.dbml');
for (const forbidden of [/\bTable\s+interests\s*\{/i, /\bTable\s+user_interests\s*\{/i]) {
  if (forbidden.test(dbml)) failures.push(`schemas/database.dbml contains forbidden legacy preference table matching ${forbidden}`);
}

try {
  const manifest = JSON.parse(read('project-manifest.json'));
  const locales = manifest?.launch?.locales;
  if (JSON.stringify(locales) !== JSON.stringify(['fi', 'en', 'ru'])) failures.push('project-manifest launch locales must be exactly fi/en/ru');

  const optional = manifest?.capabilities?.optional_or_evidence_gated;
  if (!optional) {
    failures.push('project-manifest must classify optional/evidence-gated capabilities explicitly');
  } else {
    const expected = {
      valkey: 'optional',
      pubsub: 'deferred',
      cloud_tasks: 'deferred',
      bigquery: 'deferred',
      stockholm_dr: 'deferred',
      custom_ml_recommendations: 'post-pmf',
      service_extraction: 'post-evidence'
    };
    for (const [key, status] of Object.entries(expected)) {
      if (optional?.[key]?.status !== status) failures.push(`project-manifest ${key}.status must be ${status}`);
      if (!optional?.[key]?.activation_gate) failures.push(`project-manifest ${key} must name an activation_gate`);
    }
  }
} catch (error) {
  failures.push(`project-manifest.json is not valid JSON: ${error.message}`);
}

const assumptions = read('docs/validation/ASSUMPTION_REGISTER.md');
for (const required of ['| Owner |', 'Evidence status', '## Evidence log', 'Evidence reference', 'UNMEASURED']) {
  if (!assumptions.includes(required)) failures.push(`ASSUMPTION_REGISTER missing governance field: ${required}`);
}

const requiredThreatSections = [
  '## Scope',
  '## Assets',
  '## Adversaries',
  '## Trust boundaries',
  '## Attack paths',
  '## Preventive controls',
  '## Detection',
  '## Response and recovery',
  '## Residual risk',
  '## Validation mapping'
];
for (const rel of threatModels) {
  const body = read(rel);
  for (const heading of requiredThreatSections) {
    if (!body.includes(heading)) failures.push(`${rel} missing section ${heading}`);
  }
}
if (!read('docs/security/threat-models/private-home-disclosure.md').includes('NOT V1')) {
  failures.push('private-home threat model must remain explicitly NOT V1');
}

const requiredAdrSections = [
  '## Context',
  '## Decision',
  '## Alternatives',
  '## Compatibility impact',
  '## Migration',
  '## Rollback',
  '## Validation',
  '## Approval'
];
for (const rel of adrs) {
  const body = read(rel);
  if (!body.includes('Status: ACCEPTED')) failures.push(`${rel} must retain explicit ACCEPTED status`);
  for (const heading of requiredAdrSections) {
    if (!body.includes(heading)) failures.push(`${rel} missing section ${heading}`);
  }
}

const accessibility = read('docs/design-docs/accessibility-content-localization.md');
if (!accessibility.includes('PRIVATE_HOME is explicitly NOT a V1 usability/launch acceptance task')) {
  failures.push('accessibility launch contract must explicitly exclude PRIVATE_HOME from V1 acceptance');
}
if (/Key V1 tasks:[\s\S]{0,600}private-home safety/i.test(accessibility)) {
  failures.push('accessibility V1 tasks still include private-home safety');
}

const workflow = read('.github/workflows/predevelopment-contracts.yml');
for (const command of [
  'check-context-budget.mjs',
  'check-architecture-contracts.mjs',
  'check-business-contracts.mjs',
  'check-validation-scope.mjs',
  'check-predevelopment-readiness.mjs',
  'check-doc-links.mjs',
  'check-public-repo-hygiene.mjs'
]) {
  if (!workflow.includes(command)) failures.push(`predevelopment workflow must execute ${command}`);
}
if (/uses:\s+[^\s]+@(v\d+|main|master)\b/i.test(workflow)) {
  failures.push('GitHub Actions must be pinned to full commit SHAs, not floating tags/branches');
}

if (failures.length) {
  console.error('Predevelopment readiness check failed:\n' + failures.map(x => `- ${x}`).join('\n'));
  process.exit(1);
}

console.log(`Predevelopment readiness check passed (${threatModels.length} threat models, ${adrs.length} accepted ADRs, manifest/schema/CI governance aligned).`);
