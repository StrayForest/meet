# Documentation index

The repository is the system of record. Use progressive disclosure: read the map plus only documents relevant to the task.

## Core maps
1. `../AGENTS.md`
2. `../ARCHITECTURE.md`
3. `PRODUCT_SENSE.md`
4. `09_FIXED_ARCHITECTURE_DECISIONS.md`
5. accepted rationale under `adr/`

## Product
- `01_PRODUCT_AND_FEATURES.md` — complete inventory/reference.
- `product-specs/index.md` — task-sized behavior/acceptance contracts.

## Design/frontend/mobile
- `DESIGN.md`
- `FRONTEND.md`
- `design-docs/index.md`
- `../design/tokens.json`
- `../design/DESIGN_SYSTEM_PREVIEW.html`
- `MOBILE_RELEASES.md` — EAS build/submit/update/runtime lifecycle.
- `CLIENT_COMPATIBILITY.md` — old mobile client/API compatibility.
- `DEEP_LINKS_SEO.md` — canonical URLs, Universal/App Links, SEO.

## Backend/data/API/realtime
- `BACKEND.md`
- `02_DOMAIN_AND_DATABASE.md`
- `03_API_AND_STATE_MACHINES.md`
- `04_EVENT_INGESTION_AND_DISCOVERY.md`
- `REALTIME.md`
- `../schemas/database.dbml` — V2 authoritative blueprint before migrations.

## Safety/security/reliability/operations
- `05_TRUST_SECURITY_PRIVACY.md`
- `SECURITY.md`
- `RELIABILITY.md`
- `OPERATIONS.md`
- `06_INFRASTRUCTURE_DEVOPS.md`

## Testing/analytics/i18n/scaling
- `TESTING.md`
- `07_ANALYTICS_I18N_SCALING.md`
- `references/analytics-event-catalog.md`

## Repository/execution/governance
- `08_REPOSITORY_STRUCTURE.md`
- `PLANS.md`
- `exec-plans/index.md`
- `10_IMPLEMENTATION_BACKLOG.md`
- `11_DEFINITION_OF_DONE.md`
- `QUALITY_SCORE.md`
- `adr/README.md`

## Accepted ADRs
- `adr/0001-event-first-domain.md`
- `adr/0002-backend-data.md`
- `adr/0003-mobile-expo.md`
- `adr/0004-gcp-runtime.md`
- `adr/0005-safety-identity.md`

## References/generated
- `references/research-sources.md`
- `references/finland-event-sources.md`
- `references/design-system-reference-llms.txt`
- `references/permission-matrix.md`
- `references/error-codes.md`
- `references/data-classification.md`
- `references/config-secret-registry.md`
- `references/provider-register.md`
- `generated/README.md`
- diagrams under `../schemas/`

## Documentation rules
Stable decisions belong in indexed docs, not chat history. Complex tasks keep progress/decision logs under `exec-plans/`. Generated docs are regenerated, not hand-edited. CI validates links, architecture boundaries, schema/document consistency and generated freshness as implementation appears.

If prose, accepted ADR and DBML conflict, implementation stops until the source-of-truth set is reconciled. Never silently pick one interpretation in code.
