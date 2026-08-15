# TESTING — Verification strategy — Architecture 1.3

## Layers
Domain unit; application; real PostgreSQL/PostGIS+Valkey integration; API contracts; connector/provider contracts; mobile/web/B2B/admin E2E; realtime; visual/accessibility; load/resilience; recovery/security drills.

## Mandatory V3 invariants
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

## Reliability/security tests
Origin bypass test, forced realtime disconnect, queue duplication/backlog, DB restore drill, region-recovery tabletop/automation as maturity grows, supply-chain workflow checks, mobile privacy/SDK inventory gate.

## CI
Schema/generated-doc drift, pinned Actions policy, lint/type/unit/integration/contracts/migrations/security/build; E2E/visual as apps exist. Critical flaky tests are bugs.
