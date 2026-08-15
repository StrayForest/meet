# 08 — Repository structure — Architecture 1.3

```text
/
├─ AGENTS.md
├─ ARCHITECTURE.md
├─ README.md
├─ CODEX_BOOTSTRAP_PROMPT.md
├─ project-manifest.json
├─ .github/
│  ├─ CODEOWNERS
│  ├─ PULL_REQUEST_TEMPLATE.md
│  └─ workflows/
├─ apps/{mobile,web,b2b,admin,api,workers}/
├─ packages/{contracts,database,config,auth,analytics,observability,i18n,ui,testing}/
├─ design/{tokens.json,DESIGN_SYSTEM_PREVIEW.html}
├─ infra/
├─ docs/
│  ├─ adr/
│  ├─ design-docs/
│  ├─ product-specs/
│  ├─ exec-plans/{active,completed}/
│  ├─ references/
│  ├─ generated/
│  ├─ BACKEND.md
│  ├─ FRONTEND.md
│  ├─ DESIGN.md
│  ├─ SCHEMA_GOVERNANCE.md
│  ├─ EVENT_CONTRACTS.md
│  ├─ MOBILE_RELEASES.md
│  ├─ MOBILE_PRIVACY_COMPLIANCE.md
│  ├─ CLIENT_COMPATIBILITY.md
│  ├─ DEVICE_APP_INTEGRITY.md
│  ├─ REALTIME.md
│  ├─ DEEP_LINKS_SEO.md
│  ├─ SECURITY.md
│  ├─ CRYPTOGRAPHY_KEY_MANAGEMENT.md
│  ├─ AUDIT_LOGGING.md
│  ├─ DATA_LIFECYCLE_AND_RETENTION.md
│  ├─ RELIABILITY.md
│  ├─ SLO_SLI_ERROR_BUDGETS.md
│  ├─ DISASTER_RECOVERY.md
│  ├─ ORIGIN_SECURITY.md
│  ├─ SUPPLY_CHAIN_SECURITY.md
│  ├─ REPOSITORY_GOVERNANCE.md
│  └─ CAPACITY_AND_COST_MODEL.md
└─ schemas/
   ├─ database.dbml
   └─ *.mmd
```

## API modules
`auth, users, staff, identity-verification, organizations, venues, media, events, event-ingestion, discovery, participation, pods, chat, connections, reputation, safety, moderation, notifications, billing, analytics, admin, platform`.

Events owns `Event`, `EventOccurrenceTemplate`, `EventRecurrence`, `EventOccurrence` and private-location assignment policy. Platform owns country runtime config, OperationalFlags, ClientPolicies, idempotency, outbox and audit infrastructure. Staff identity is never a User flag.

## Shared contracts
DTO schemas, stable error codes, durable event envelopes and safe value types/enums. No server business logic/provider implementation.

## Schema authority
Before P0-006 DBML is design blueprint. After P0-006 `packages/database` Drizzle schema + ordered migrations are executable truth and DBML/schema docs are generated/verified. See `SCHEMA_GOVERNANCE.md`.

## Mechanical enforcement
Phase 0 validates module dependencies, design-token use, docs/index links, generated freshness, domain-event contracts, obsolete ticket/join semantics, physical-only V1, mobile compatibility and schema drift.
