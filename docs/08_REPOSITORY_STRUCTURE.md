# 08 — Repository structure — Architecture 1.3

```text
/
├─ AGENTS.md
├─ ARCHITECTURE.md
├─ CODEX_BOOTSTRAP_PROMPT.md
├─ apps/{mobile,web,b2b,admin,api,workers}/
├─ packages/{contracts,database,config,auth,analytics,observability,i18n,ui,testing}/
├─ design/{tokens.json,DESIGN_SYSTEM_PREVIEW.html,screens/}
├─ infra/
├─ scripts/{check-context-budget.mjs,check-architecture-contracts.mjs,architecture/}
├─ docs/
│  ├─ 00_INDEX.md
│  ├─ TOKEN_EFFICIENCY.md
│  ├─ ARCHITECTURE_FITNESS_FUNCTIONS.md
│  ├─ DATA_CLASSIFICATION.md
│  ├─ CONCURRENCY_AND_CONSISTENCY.md
│  ├─ DEGRADED_MODES.md
│  ├─ EXTERNAL_DEPENDENCY_POLICY.md
│  ├─ MODULE_OWNERSHIP.md
│  ├─ VISUAL_REGRESSION_CONTRACT.md
│  ├─ ARCHITECTURE_MATURITY_LADDER.md
│  ├─ security/threat-models/
│  ├─ adr/
│  ├─ design-docs/
│  ├─ product-specs/
│  ├─ exec-plans/{active,completed}/
│  ├─ references/
│  └─ generated/
└─ schemas/{database.dbml,*.mmd}
```

API modules: `auth, users, staff, identity-verification, organizations, venues, media, events, event-ingestion, discovery, participation, pods, chat, connections, reputation, safety, moderation, notifications, billing, analytics, admin, platform`.

Events owns `Event`, `EventOccurrenceTemplate`, `EventRecurrence`, `EventOccurrence` and private-location assignment. Platform owns country config, OperationalFlags, ClientPolicies, idempotency, outbox and audit infrastructure.

Before P0-006 DBML is schema design blueprint. After P0-006 Drizzle + migrations + DB-native constraints are executable truth; DBML/docs are generated/verified.

Agent rule: root `AGENTS.md` stays small; task context is progressively disclosed through `00_INDEX.md`. Phase 0 CI enforces context budgets, architecture contracts, module/schema/generated/contracts checks.
