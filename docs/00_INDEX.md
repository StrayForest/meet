# Documentation index

## Required reading order

1. `01_PRODUCT_AND_FEATURES.md` — complete product definition and feature inventory.
2. `02_DOMAIN_AND_DATABASE.md` — modules, entities, persistence and data ownership.
3. `03_API_AND_STATE_MACHINES.md` — API conventions, endpoint families and state transitions.
4. `04_EVENT_INGESTION_AND_DISCOVERY.md` — external supply, dedupe, map/search/ranking.
5. `05_TRUST_SECURITY_PRIVACY.md` — identity, moderation, private-home safety, GDPR/DSA engineering.
6. `06_INFRASTRUCTURE_DEVOPS.md` — fixed production topology, CI/CD, Terraform, deployment.
7. `07_ANALYTICS_I18N_SCALING.md` — analytics, localization, country expansion and scale path.
8. `08_REPOSITORY_STRUCTURE.md` — final monorepo layout.
9. `09_FIXED_ARCHITECTURE_DECISIONS.md` — decisions Codex cannot alter without ADR.
10. `10_IMPLEMENTATION_BACKLOG.md` — exact implementation order.
11. `11_DEFINITION_OF_DONE.md` — completion standard.

## Schemas and diagrams

- `../schemas/database.dbml`
- `../schemas/system-context.mmd`
- `../schemas/deployment.mmd`
- `../schemas/event-ingestion.mmd`
- `../schemas/join-sequence.mmd`
- `../schemas/moderation-flow.mmd`

## Visual plan

- `../MASTER_ARCHITECTURE_BOARD.html`

## Change policy

Architecture decisions are frozen unless a new ADR explicitly explains:
- measured problem;
- alternatives;
- compatibility impact;
- migration;
- rollback;
- approval.

Resource sizing, indexes, cache TTLs and compatible dependency upgrades do not constitute architecture redesign.
