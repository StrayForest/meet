# TESTING — Verification strategy

## Philosophy
Test business invariants at the cheapest reliable layer, then protect critical journeys end-to-end. Mocks do not replace integration tests for PostgreSQL/PostGIS, concurrency or provider contracts.

## Layers
1. Domain unit: state transitions, eligibility, ranking math, policy.
2. Application: authorization/orchestration with fakes.
3. Repository integration: real PostgreSQL/PostGIS/Valkey test environment.
4. API contract: auth, validation, stable errors, idempotency, pagination.
5. Provider/connector contract: fixtures, retries, cancellation, malformed data.
6. E2E: critical mobile/web/B2B/admin journeys.
7. Visual/accessibility: approved reference screens, themes/locales/large text.
8. Load/resilience: join storm, feed/map, chat bursts, queue backlog/failure.

## Determinism
Inject clock/UUID/provider fakes where required. Seed fixture data with stable IDs/times/locations. Tests must not depend on current wall-clock or third-party production APIs.

## Critical invariants
- final event slot assigned once;
- waitlist offer once/atomic;
- duplicate async delivery safe;
- cancelled event not joinable;
- blocked user communication denied;
- exact home location never serialized without authorization;
- organization role escalation denied;
- payment webhook idempotent when billing exists;
- source merge retains provenance;
- recurrence correct across DST.

## Mobile E2E
Use a Maestro-class framework against dev/test builds. Cover onboarding, discovery, join/approval/waitlist, create, Pod/chat, report, check-in, verification gating.

## Web E2E
Playwright for public web, B2B and admin. Include keyboard/focus and role-based routes.

## Visual QA
Follow `design-docs/visual-qa.md`; references are intentional artifacts. A changed baseline is reviewed, not blindly accepted.

## Accessibility
Automated scanners plus manual critical-flow tests. Test screen readers, keyboard, large text/zoom, reduced motion, contrast and locale expansion.

## Performance/load
k6 or equivalent profiles use realistic read/write mixes. Load tests assert correctness as well as latency.

## CI
Fast unit/type/lint on every PR; integration/contracts/migrations/build/security always; E2E/visual jobs targeted then increasingly mandatory as apps stabilize. Flaky critical tests are bugs, not permanently retried away.