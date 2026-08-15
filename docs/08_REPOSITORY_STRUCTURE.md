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
│  ├─ design-docs/
│  ├─ product-specs/
│  ├─ exec-plans/{active,completed}/
│  ├─ references/
│  ├─ generated/
│  ├─ DESIGN.md
│  ├─ FRONTEND.md
│  ├─ PRODUCT_SENSE.md
│  ├─ PLANS.md
│  ├─ QUALITY_SCORE.md
│  ├─ RELIABILITY.md
│  └─ SECURITY.md
└─ schemas/
```

## API modules
`auth, users, identity-verification, organizations, venues, events, event-ingestion, discovery, participation, pods, chat, connections, reputation, safety, moderation, notifications, billing, analytics, admin, platform`.

Recommended module dependency direction: `presentation → application → domain`; infrastructure implements ports. Do not create ceremonial abstractions with no value.

## Shared contracts
DTO schemas, error codes, event envelopes and safe enums/value types only; no server business logic/provider implementations.

## UI
`packages/ui` owns generated design tokens, primitives, icons/accessibility helpers. Mobile/web share primitives and contracts, not giant screens.

## Agent legibility
As code appears, place local `AGENTS.md` only where package/app-specific commands or constraints materially help. Root rules always win on product/architecture contracts.

## Mechanical enforcement
Phase 0 adds structural lint/tests for module dependency direction, raw design-token violations, generated-doc freshness and documentation links.