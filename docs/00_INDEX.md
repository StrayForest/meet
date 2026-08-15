# Documentation index

The repository is the system of record. Use progressive disclosure: read only the map plus documents relevant to the task.

## Core maps
1. `../AGENTS.md`
2. `../ARCHITECTURE.md`
3. `PRODUCT_SENSE.md`
4. `09_FIXED_ARCHITECTURE_DECISIONS.md`

## Product
- `01_PRODUCT_AND_FEATURES.md` — complete inventory/reference.
- `product-specs/index.md` — task-sized behavior/acceptance contracts.

## Design/frontend
- `DESIGN.md` — visual/product design source of truth.
- `FRONTEND.md` — frontend engineering rules.
- `design-docs/index.md` — design decisions, screens/components/accessibility/visual QA.
- `../design/tokens.json` — machine-readable tokens.
- `../design/DESIGN_SYSTEM_PREVIEW.html` — visual reference.

## Backend/data/API
- `02_DOMAIN_AND_DATABASE.md`
- `03_API_AND_STATE_MACHINES.md`
- `04_EVENT_INGESTION_AND_DISCOVERY.md`
- `../schemas/database.dbml`

## Safety/security/reliability
- `05_TRUST_SECURITY_PRIVACY.md`
- `SECURITY.md`
- `RELIABILITY.md`
- `06_INFRASTRUCTURE_DEVOPS.md`

## Analytics/i18n/scaling
- `07_ANALYTICS_I18N_SCALING.md`

## Repository and execution
- `08_REPOSITORY_STRUCTURE.md`
- `PLANS.md`
- `exec-plans/index.md`
- `10_IMPLEMENTATION_BACKLOG.md`
- `11_DEFINITION_OF_DONE.md`
- `QUALITY_SCORE.md`

## References/generated
- `references/`
- `generated/`
- architecture diagrams under `../schemas/`

## Documentation rules
- Stable decisions belong in indexed docs, not chat history.
- Complex tasks keep progress/decision logs under `exec-plans/`.
- Generated docs are regenerated, not hand-edited.
- CI will eventually lint links, architecture boundaries and generated-doc freshness.
- When implementation disproves a spec, update the spec/decision intentionally; never allow silent drift.