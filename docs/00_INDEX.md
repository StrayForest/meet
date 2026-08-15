# Context router — Architecture 1.3

**Rule:** pick the smallest pack for the task. Add another pack only when the diff crosses that boundary.

| Pack | Use | Read |
|---|---|---|
| `R` | repo/tooling/structure | `08_REPOSITORY_STRUCTURE.md`, `REPOSITORY_GOVERNANCE.md`, relevant exec-plan section |
| `DB` | schema/migration | `02_DOMAIN_AND_DATABASE.md`, `SCHEMA_GOVERNANCE.md`, targeted `../schemas/database.dbml` section |
| `API` | endpoint/application logic | relevant `product-specs/*`, `BACKEND.md`, `03_API_AND_STATE_MACHINES.md` |
| `EV` | Event/recurrence/participation | relevant product spec, `02_DOMAIN_AND_DATABASE.md`; add `DB` only for schema changes |
| `UI` | consumer/B2B/admin UI | relevant product spec, relevant `design-docs/*`, `../design/tokens.json` |
| `MOB` | Expo/release/client lifecycle | `MOBILE_RELEASES.md`, `CLIENT_COMPATIBILITY.md`; add privacy/deep-links only if touched |
| `RT` | chat/realtime | `product-specs/pods-chat-connections.md`, `REALTIME.md` |
| `ING` | event import/discovery supply | `04_EVENT_INGESTION_AND_DISCOVERY.md`; add `DB` only for persistence changes |
| `ASY` | durable domain events | `EVENT_CONTRACTS.md` + owning module/product spec |
| `SAFE` | user safety/private-home/moderation | relevant safety product spec + `SECURITY.md`; add crypto/audit/lifecycle only if touched |
| `CTRL` | flags/client policy/privileged controls | `SECURITY.md` + exactly the named control doc (`CLIENT_COMPATIBILITY.md` or `AUDIT_LOGGING.md`) |
| `OPS` | infra/reliability/observability | `06_INFRASTRUCTURE_DEVOPS.md` + at most one specialist doc if relevant: origin, DR, SLO, supply-chain or capacity |
| `TEST` | tests/QA | `TESTING.md` + the contract being tested |
| `AN` | analytics/i18n | `07_ANALYTICS_I18N_SCALING.md` + named reference only if needed |
| `ADR` | architecture change | `09_FIXED_ARCHITECTURE_DECISIONS.md` + relevant accepted ADR |

## Large/rare sources
- Full `database.dbml`: only schema-wide work such as P0-006/audit; otherwise search table names and read bounded spans.
- `01_PRODUCT_AND_FEATURES.md`: inventory only; use task-sized `product-specs/*` for implementation.
- `MASTER_*`, completed plans, competitor research and `references/`: on-demand only, never routine preload.
- `DESIGN_SYSTEM_PREVIEW.html`: visual reference only.

If accepted ADR/product contract/schema truth disagree, stop the affected path and reconcile; do not solve conflicts by loading the entire repository.
