# Documentation index — Architecture 1.3

The repository is the system of record. Read only the smallest relevant set.

## Core
1. `../AGENTS.md`
2. `../ARCHITECTURE.md`
3. `PRODUCT_SENSE.md`
4. `09_FIXED_ARCHITECTURE_DECISIONS.md`
5. accepted rationale under `adr/`

## Product/design
- `01_PRODUCT_AND_FEATURES.md`
- `product-specs/index.md`
- `DESIGN.md`, `FRONTEND.md`, `design-docs/index.md`
- `../design/tokens.json`

## Backend/data/contracts
- `BACKEND.md`
- `02_DOMAIN_AND_DATABASE.md`
- `03_API_AND_STATE_MACHINES.md`
- `SCHEMA_GOVERNANCE.md`
- `EVENT_CONTRACTS.md`
- `04_EVENT_INGESTION_AND_DISCOVERY.md`
- `REALTIME.md`
- `../schemas/database.dbml` — pre-P0-006 design blueprint; generated/verified after schema cutover

## Mobile
- `MOBILE_RELEASES.md`
- `MOBILE_PRIVACY_COMPLIANCE.md`
- `CLIENT_COMPATIBILITY.md`
- `DEEP_LINKS_SEO.md`
- `DEVICE_APP_INTEGRITY.md`

## Security/privacy/reliability
- `05_TRUST_SECURITY_PRIVACY.md`
- `SECURITY.md`
- `CRYPTOGRAPHY_KEY_MANAGEMENT.md`
- `AUDIT_LOGGING.md`
- `DATA_LIFECYCLE_AND_RETENTION.md`
- `SUPPLY_CHAIN_SECURITY.md`
- `ORIGIN_SECURITY.md`
- `RELIABILITY.md`
- `SLO_SLI_ERROR_BUDGETS.md`
- `DISASTER_RECOVERY.md`
- `OPERATIONS.md`
- `06_INFRASTRUCTURE_DEVOPS.md`

## Scaling/quality/governance
- `CAPACITY_AND_COST_MODEL.md`
- `TESTING.md`
- `07_ANALYTICS_I18N_SCALING.md`
- `REPOSITORY_GOVERNANCE.md`
- `PLANS.md`, `exec-plans/index.md`
- `10_IMPLEMENTATION_BACKLOG.md`
- `11_DEFINITION_OF_DONE.md`
- `QUALITY_SCORE.md`

## References
`references/` contains analytics catalog, data classification, permissions, provider/config/source/research registries.

## Conflict rule
Before P0-006, accepted ADR + indexed prose + DBML must agree. After P0-006, executable Drizzle schema+migrations supersede DBML as schema truth, while API/event/product contracts remain governed separately. A conflict stops the affected implementation path until reconciled.
