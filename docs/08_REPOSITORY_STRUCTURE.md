# 08 — Final repository structure

```text
/
├─ AGENTS.md
├─ ARCHITECTURE.md
├─ README.md
├─ CODEX_BOOTSTRAP_PROMPT.md
├─ project-manifest.json
├─ package.json
├─ pnpm-workspace.yaml
├─ turbo.json
├─ tsconfig.base.json
├─ .github/workflows/
├─ apps/
│  ├─ mobile/
│  ├─ web/
│  ├─ b2b/
│  ├─ admin/
│  ├─ api/
│  └─ workers/
├─ packages/
│  ├─ contracts/
│  ├─ database/
│  ├─ config/
│  ├─ auth/
│  ├─ analytics/
│  ├─ observability/
│  ├─ i18n/
│  ├─ ui/
│  └─ testing/
├─ design/
│  ├─ tokens.json
│  └─ DESIGN_SYSTEM_PREVIEW.html
├─ infra/
├─ docs/
│  ├─ adr/
│  ├─ design-docs/
│  ├─ product-specs/
│  ├─ exec-plans/{active,completed}/
│  ├─ references/
│  ├─ generated/
│  ├─ DESIGN.md
│  ├─ FRONTEND.md
│  ├─ BACKEND.md
│  ├─ MOBILE_RELEASES.md
│  ├─ CLIENT_COMPATIBILITY.md
│  ├─ REALTIME.md
│  ├─ DEEP_LINKS_SEO.md
│  ├─ PRODUCT_SENSE.md
│  ├─ OPERATIONS.md
│  ├─ PLANS.md
│  ├─ QUALITY_SCORE.md
│  ├─ RELIABILITY.md
│  └─ SECURITY.md
└─ schemas/
   ├─ database.dbml
   └─ *.mmd
```

## API modules
`auth, users, staff, identity-verification, organizations, venues, media, events, event-ingestion, discovery, participation, pods, chat, connections, reputation, safety, moderation, notifications, billing, analytics, admin, platform`.

Events module owns Event/EventRecurrence/EventOccurrence policies. Platform owns OperationalFlags, ClientPolicies, idempotency/outbox/audit/country runtime configuration. Staff privileged identity is not a flag on Users.

Recommended dependency direction: `presentation → application → domain`; infrastructure implements ports. Do not create ceremonial abstractions with no value.

## Shared contracts
DTO schemas, error codes, event envelopes and safe enums/value types only. No business logic/provider implementations. AdmissionMode and ParticipationMode are distinct exported contract types.

## UI
`packages/ui` owns generated design tokens, primitives, icons/accessibility helpers. Mobile/web share primitives/contracts, not giant screens.

## Mobile
`apps/mobile` owns Expo Router routes and EAS app configuration; build/release automation follows `MOBILE_RELEASES.md`. Server compatibility logic is not duplicated per screen; it lives in shared client/bootstrap infrastructure.

## Agent legibility
Local `AGENTS.md` only where app/package-specific commands/constraints materially help. Root rules always win on product/architecture/domain contracts.

## Mechanical enforcement
Phase 0 structural checks cover module dependency direction, raw design-token violations, generated/doc links, DBML/prose architecture checks, obsolete combined join/ticket semantics and client-compatibility contract drift.
