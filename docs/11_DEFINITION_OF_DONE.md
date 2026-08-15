# 11 — Definition of done and quality gates

A task is DONE only when applicable items are complete.

## Product/spec
- behavior matches relevant `product-specs/` acceptance criteria;
- design/frontend contracts read for user-facing work;
- no undocumented scope substitution.

## Code/data/API
- correct module and strict TypeScript;
- migrations/indexes/constraints complete and backward-compatible;
- validation, authorization, stable errors, OpenAPI/contracts;
- idempotency/cursor pagination where applicable;
- failure paths handled; no secrets/debug hacks.

## Safety/security/privacy
- abuse/rate-limit review;
- block/restriction behavior;
- PII/logging review;
- private location leak review if relevant;
- audit event for privileged action;
- threat model/tests updated when new abuse surface is added.

## Analytics/observability
- authoritative server analytics event where appropriate;
- traces/logs/metrics and Sentry visibility;
- no sensitive payload leakage.

## Tests
- domain unit tests;
- repository/PostGIS/integration tests;
- API auth/error tests;
- E2E for critical journey;
- authorization tests;
- concurrency/idempotency tests where relevant.

## UX/design
- uses `design/tokens.json`, not ad-hoc visual values;
- loading, refreshing, empty, error and retry/offline behavior;
- FI/EN/RU text expansion;
- light + dark theme;
- accessibility semantics/targets/contrast/focus/text scaling;
- screenshot/visual QA for changed reference surfaces;
- event-first hierarchy/no dating visual drift.

## Documentation
- relevant specs updated;
- active execution plan progress/decision log updated;
- generated docs refreshed when affected;
- quality score/tech debt updated if gap remains.

## CI gates
PR cannot merge when lint/typecheck/required tests/build/contracts/migrations/critical security scans fail. Once implemented, docs link/freshness and architecture-boundary checks also block drift.

## Critical concurrency
Last slot cannot double-book; waitlist offer once; duplicate Pub/Sub/task/payment webhook safe; repeated client mutation idempotent.

## Critical E2E
Onboarding, discovery, join/approval/waitlist, create event, private-home protections, Pod/chat/report, check-in/feedback, connection DM, organization claim, moderation/appeal.