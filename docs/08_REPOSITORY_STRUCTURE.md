# 08 — Final repository structure

```text
/
├─ AGENTS.md
├─ README.md
├─ CODEX_BOOTSTRAP_PROMPT.md
├─ project-manifest.json
├─ package.json
├─ pnpm-workspace.yaml
├─ turbo.json
├─ tsconfig.base.json
├─ .editorconfig
├─ .github/
│  └─ workflows/
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
├─ infra/
│  ├─ modules/
│  └─ envs/
├─ docs/
└─ schemas/
```

## API module layout

```text
apps/api/src/modules/
  auth/
  users/
  identity-verification/
  organizations/
  venues/
  events/
  event-ingestion/
  discovery/
  participation/
  pods/
  chat/
  connections/
  reputation/
  safety/
  moderation/
  notifications/
  billing/
  analytics/
  admin/
  platform/
```

Recommended module internals:
```text
module/
  domain/
  application/
  infrastructure/
  presentation/
  module.ts
```

Do not create ceremonial empty abstractions merely to satisfy folder shape. Preserve dependency direction and ownership.

## Shared contracts

`packages/contracts` owns:
- DTO schemas;
- API error codes;
- event envelopes;
- safe enums/value types;
- generated-client inputs.

It must not own:
- server business logic;
- DB repositories;
- secrets;
- provider-specific implementations.

## Database package

`packages/database` owns:
- Drizzle schema;
- migrations;
- DB connection factories;
- test DB helpers;
- PostGIS helpers where truly generic.

Domain repositories remain in their module infrastructure layer.

## UI package

Share:
- design tokens;
- primitives;
- icon wrappers;
- accessibility helpers.

Do not force mobile and web to share giant screen components.

## Workers

`apps/workers` hosts deployable consumers/jobs, but imports application/module interfaces rather than duplicating business rules.

Potential worker entry points:
- outbox-publisher;
- ingestion;
- notifications;
- media;
- moderation;
- maintenance/backfill.
