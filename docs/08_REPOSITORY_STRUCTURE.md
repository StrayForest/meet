# 08 — Repository structure — Architecture 1.3

```text
/
├─ AGENTS.md                 # short default agent map
├─ ARCHITECTURE.md           # cross-domain map, on-demand
├─ CODEX_BOOTSTRAP_PROMPT.md
├─ apps/{mobile,web,b2b,admin,api,workers}/
├─ packages/{contracts,database,config,auth,analytics,observability,i18n,ui,testing}/
├─ design/{tokens.json,DESIGN_SYSTEM_PREVIEW.html}
├─ infra/
├─ scripts/check-context-budget.mjs
├─ docs/
│  ├─ 00_INDEX.md            # task → smallest context pack
│  ├─ TOKEN_EFFICIENCY.md
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

Agent rule: root `AGENTS.md` stays small; task context is progressively disclosed through `00_INDEX.md`. Phase 0 CI enforces context budgets plus module/schema/generated/contracts checks.
