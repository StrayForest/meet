# Context router — Architecture 1.3

**Rule:** pick the smallest pack for the task. Add another pack only when the diff crosses that boundary.

| Pack | Use | Read |
|---|---|---|
| `R` | repo/tooling/structure | `08_REPOSITORY_STRUCTURE.md`, `REPOSITORY_GOVERNANCE.md`, relevant exec-plan section |
| `DB` | schema/migration | `02_DOMAIN_AND_DATABASE.md`, `SCHEMA_GOVERNANCE.md`, targeted `../schemas/database.dbml` section |
| `API` | endpoint/application logic | relevant `product-specs/*`, `BACKEND.md`, `03_API_AND_STATE_MACHINES.md` |
| `EV` | Event/recurrence/participation | relevant product spec, `02_DOMAIN_AND_DATABASE.md`; add `CONCURRENCY_AND_CONSISTENCY.md` for critical mutations |
| `UI` | consumer/B2B/admin UI | relevant product spec, relevant `design-docs/*`, `../design/tokens.json`; add `VISUAL_REGRESSION_CONTRACT.md` only for visual QA |
| `MOB` | Expo/release/client lifecycle | `MOBILE_RELEASES.md`, `CLIENT_COMPATIBILITY.md`; add privacy/deep-links only if touched |
| `RT` | chat/realtime | `product-specs/pods-chat-connections.md`, `REALTIME.md`; add dependency/degraded policy only for failure behavior |
| `ING` | event import/discovery supply | `04_EVENT_INGESTION_AND_DISCOVERY.md`; add `EXTERNAL_DEPENDENCY_POLICY.md` for connector failure semantics |
| `ASY` | durable domain events | `EVENT_CONTRACTS.md` + owning module/product spec |
| `SAFE` | safety/private-home/moderation | relevant safety product spec + `SECURITY.md`; add `DATA_CLASSIFICATION.md` and targeted `security/threat-models/*` only when touched |
| `CTRL` | flags/client policy/privileged controls | `SECURITY.md` + exactly the named control doc (`CLIENT_COMPATIBILITY.md` or `AUDIT_LOGGING.md`) |
| `OPS` | infra/reliability/observability | `06_INFRASTRUCTURE_DEVOPS.md` + at most one specialist doc: origin, DR, SLO, supply-chain, capacity, degraded modes or external dependency policy |
| `ARCH` | architecture boundaries | `ARCHITECTURE_FITNESS_FUNCTIONS.md`, targeted module contract; `MODULE_OWNERSHIP.md` only for ownership metadata |
| `TEST` | tests/QA | `TESTING.md` + the contract being tested |
| `AN` | analytics/i18n | `07_ANALYTICS_I18N_SCALING.md` + named reference only if needed |
| `BIZ` | PMF/GTM/liquidity/economics/competition | start with `business/PMF_HYPOTHESES.md`; add exactly one relevant business source (`BEACHHEAD_MARKET`, `GTM_AND_DISTRIBUTION`, `CITY_LIQUIDITY_MODEL`, `NETWORK_EFFECTS_AND_MOAT`, `BUSINESS_MODEL_AND_UNIT_ECONOMICS`, `COMPETITIVE_POSITIONING`, `INVESTOR_MILESTONES`) |
| `ADR` | architecture change | `09_FIXED_ARCHITECTURE_DECISIONS.md` + relevant accepted ADR |

## Large/rare sources
- Full `database.dbml`: schema-wide work only; otherwise search table names/read bounded spans.
- `01_PRODUCT_AND_FEATURES.md`: inventory only; use task-sized `product-specs/*`.
- `MASTER_*`, completed plans, competitor research and `references/`: on-demand only.
- `DESIGN_SYSTEM_PREVIEW.html` and full screen data files: visual reference only; search one screen ID/title.
- `ARCHITECTURE_MATURITY_LADDER.md`: roadmap/scale decision only, never routine task context.
- Business docs are decision/evidence contracts, not default engineering context. Load `BIZ` only for product/growth/economics decisions.

If accepted ADR/product/business contract/schema truth disagree, stop the affected path and reconcile; do not solve conflicts by loading the entire repository.
