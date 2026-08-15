# TESTING — Verification strategy

## Philosophy
Test business invariants at the cheapest reliable layer, then protect critical journeys end-to-end. Mocks do not replace real Postgres/PostGIS concurrency/constraint tests or provider contract fixtures.

## Layers
1. domain unit: state transitions, admission/participation policy, recurrence, ranking, safety policy;
2. application: authorization/orchestration with fakes;
3. repository integration: real PostgreSQL/PostGIS + Valkey;
4. API contract: auth, validation, errors, idempotency, pagination, client compatibility;
5. connector/provider contracts;
6. E2E mobile/web/B2B/admin;
7. realtime reconnect/recovery;
8. visual/accessibility;
9. load/resilience.

## Determinism
Inject clock/UUID/provider fakes where needed. Stable fixture times/locations/IDs. No critical test depends on production third-party APIs or current wall clock.

## Mandatory domain/data invariants
- EventOccurrence is participation/check-in/Pod unit;
- EXTERNAL_TICKET + OPEN social participation works;
- Pod cannot use admission/ticket semantics;
- final social capacity slot assigned once;
- waitlist offer once/atomic;
- recurring local time remains correct across DST;
- unsupported recurrence rejected/expanded by connector policy, not silently misinterpreted;
- private exact location never serialized without current authorization;
- recurring occurrences can use different private/public locations;
- canonical connection pair prevents A↔B duplicates;
- conversation DB context/type XOR constraint;
- idempotency actor_scope works for user/system/anonymous scopes;
- notification push failure does not remove durable in-app notification;
- dedupe merge preserves alias/deep-link resolution/provenance;
- duplicate outbox/PubSub/Task delivery safe;
- safety-removed event cannot be resurrected by import;
- operational safety flag works independently of PostHog.

## Mobile compatibility tests
Maintain fixtures/contracts for:
- latest client;
- minimum supported client;
- capability negotiation;
- deprecated field/enum transition;
- force-update/bootstrap state;
- EAS runtimeVersion compatibility configuration validation.

Backend PR introducing contract change proves supported old-client behavior or follows deliberate deprecation process.

## Realtime tests
Force connection termination and assert:
- reconnect with backoff;
- reauthentication/resubscription;
- durable message/state recovery via REST cursor;
- duplicate realtime events deduped;
- revoked membership cannot resubscribe;
- presence/typing expiry safely;
- slow-consumer/backpressure behavior.

## API/security tests
Auth, IDOR/horizontal access, org role escalation, staff scopes, private location leak, blocked-user contact, unauthorized WS channel, webhook signatures, upload validation, rate limits.

## Mobile E2E
Onboarding, discovery, deep link, external-ticket + social join, approval/waitlist, create/recurrence, private-home gating, Pod/chat, report, check-in, verification and stale/cancelled event refresh.

## Web E2E
Public canonical/alias redirects, SEO/noindex privacy, B2B/admin keyboard/focus/RBAC.

## Visual/accessibility
Follow `design-docs/visual-qa.md`; test themes/locales/large text/reduced motion/screen reader/keyboard/contrast.

## Load/resilience
k6-equivalent profiles for feed/map, popular-event join storm, chat/realtime reconnect, queue backlog and ingestion batch. Assert correctness as well as latency.

## CI
Lint/type/unit fast; integration/contracts/migrations/schema checks/security always. E2E/visual progressively mandatory as apps exist. Critical flaky tests are bugs, not permanent retries.
