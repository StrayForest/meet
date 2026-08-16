# TESTING — Verification strategy — Architecture 1.3

## Layers
Domain unit; application; real PostgreSQL/PostGIS+Valkey integration; API contracts; connector/provider contracts; mobile/web/B2B/admin E2E; realtime; visual/accessibility; load/resilience; recovery/security drills.

## Mandatory invariants
- recurrence materializer gets duration/location/policies from EventOccurrenceTemplate;
- local recurrence DST correctness;
- V1 rejects ONLINE/HYBRID creation;
- private exact location never in generic DTO/read model;
- encrypted payload roundtrip/wrong-AAD/rotation;
- external ticket + independent social join;
- organization member can hold multiple roles without duplicate role;
- report links exactly to appropriate case workflow;
- immutable evidence snapshot survives source edit/delete;
- final capacity slot once;
- waitlist ordinal unique and at most one active offer;
- feedback one row per occurrence/author/subject;
- connection pair unique;
- conversation context XOR;
- outbox envelope matches governed contract and duplicate delivery is safe;
- aggregate version gap handling where used;
- ingestion run records code versions;
- operational flag optimistic concurrency + two-person rule;
- audit writer cannot UPDATE/DELETE and hash-chain verification detects tamper;
- supported old client remains compatible.

## Architecture/security/reliability tests
- architecture fitness functions fail on forbidden dependency direction, cross-module persistence reach-through, server-only client import and exact-location DTO leakage;
- critical command race tests follow `CONCURRENCY_AND_CONSISTENCY.md`;
- provider contract tests verify timeouts, retry classification, idempotency, webhook replay protection and finite retry horizon;
- degraded-mode tests prove provider/Valkey/realtime/analytics outages preserve Tier-0 and safety invariants;
- threat-model controls for private-home, staff, media, ingestion/SSRF, payment and realtime have mapped tests;
- visual regression uses deterministic fixture/screen metadata from `VISUAL_REGRESSION_CONTRACT.md`;
- origin bypass, forced realtime disconnect, queue duplication/backlog, DB restore, region recovery, supply-chain workflow and mobile privacy/SDK inventory are exercised at the appropriate maturity stage.

## CI
Schema/generated-doc drift, architecture-contract check, static architecture boundaries, pinned Actions policy, lint/type/unit/integration/contracts/migrations/security/build; E2E/visual as apps exist. Critical flaky tests are bugs.
