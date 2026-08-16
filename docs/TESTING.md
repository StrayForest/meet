# TESTING — Verification strategy — Architecture 1.3

## Principle
Tests follow active product scope. Future-safe schema/security boundaries may be preserved without forcing deferred features into implementation. `validation/MVP_BOUNDARY.md` is the gate.

## Layers
Domain unit; application; real PostgreSQL/PostGIS integration; API contracts; connector/provider contracts; mobile/web/B2B/admin E2E; realtime where used; visual/accessibility; load/resilience; recovery/security drills proportional to current maturity.

## Mandatory MVP invariants
- recurrence materializer gets duration/location/policies from EventOccurrenceTemplate;
- local recurrence DST correctness;
- V1 rejects ONLINE/HYBRID creation;
- V1 consumer creation rejects PRIVATE_HOME;
- generic DTO/read models cannot leak any preserved private exact-location field;
- external ticket + independent social join;
- final capacity slot once;
- waitlist ordinal unique and at most one active offer;
- occurrence-scoped company-finding/chat membership and block rules where Phase 6 is implemented;
- attendance evidence reconciliation where Phase 7 is implemented;
- ingestion run records code/parser versions;
- report links to the appropriate moderation case workflow;
- immutable moderation evidence snapshot survives source edit/delete where that workflow exists;
- supported old client remains compatible;
- no mandatory interests/gender/phone gate for public browsing;
- active consumer visual references come only from the V1 pack.

## Deferred-on-activation invariants
The following become mandatory only when their feature/architecture gate is explicitly activated:
- PRIVATE_HOME encryption/disclosure authorization, AAD/rotation and private-location threat-model controls;
- persistent connection pair uniqueness and post-event DM rules;
- advanced conversation-context invariants beyond occurrence-scoped chat;
- durable outbox/queue duplicate-delivery semantics when an async transport is activated;
- advanced operational flag two-person workflows where risk policy requires them;
- multi-region recovery/DR drills beyond the launch-required backup/restore tier;
- payment/native ticketing security tests when those products enter scope.

## Architecture/security/reliability tests
- architecture fitness functions fail on forbidden dependency direction, cross-module persistence reach-through, server-only client import and exact-location DTO leakage;
- critical command race tests follow `CONCURRENCY_AND_CONSISTENCY.md`;
- provider contract tests verify timeouts, retry classification, idempotency, webhook replay protection and finite retry horizon for providers actually used;
- degraded-mode tests prove active provider/realtime/analytics outages preserve Tier-0 and safety invariants;
- threat-model controls are mapped to tests for currently reachable high-risk boundaries; deferred threat models remain design inputs, not launch blockers;
- visual regression uses deterministic fixture/screen metadata from `VISUAL_REGRESSION_CONTRACT.md` and the active V1 screen pack;
- origin bypass, DB restore, supply-chain workflow and mobile privacy/SDK inventory are exercised at the appropriate maturity stage.

## CI
Schema/generated-doc drift, architecture-contract check, business/validation-boundary checks, static architecture boundaries, pinned Actions policy, lint/type/unit/integration/contracts/migrations/security/build; E2E/visual as apps exist. Critical flaky tests are bugs.
