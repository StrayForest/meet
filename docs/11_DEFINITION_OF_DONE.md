# 11 — Definition of Done

A backlog item is DONE only when all applicable sections are satisfied.

## Architecture/domain
- implemented in correct module;
- accepted ADR/domain model followed;
- Event/Occurrence/admission/participation semantics preserved where relevant;
- no silent architecture substitution;
- DBML/prose/contracts remain consistent.

## Code/data
- strict TypeScript passes;
- migration/index/constraint added where needed;
- backward-compatible rollout considered;
- schema change follows expand→migrate→contract;
- data retention/classification considered.

## API/mobile compatibility
- validation/authorization/stable errors;
- OpenAPI/shared contracts updated;
- idempotency/pagination where relevant;
- latest and minimum-supported mobile compatibility considered/tested;
- capability/version bootstrap updated if semantics require;
- no force-update shortcut without release decision.

## Safety/security
- abuse/rate-limit analysis;
- block/restriction behavior;
- PII/logging review;
- private location leak review where relevant;
- privileged action audit;
- operational kill-switch impact for high-risk capability.

## Reliability
- failure/degraded behavior defined;
- push/WebSocket not treated as truth;
- retries/duplicate async delivery safe;
- high-impact stale event state revalidated;
- external provider outage behavior considered.

## Analytics/observability
- server/product analytics event where required;
- logs/traces/metrics;
- errors visible in observability;
- no sensitive payload leakage.

## Tests
- unit/application tests;
- real DB integration where invariants matter;
- E2E for critical journey;
- concurrency for capacity/idempotency;
- compatibility test for changed client contract;
- realtime reconnect/recovery test where relevant;
- authorization/security tests.

## UX
- loading/refreshing/empty/stale/error/restricted/success states;
- accessibility;
- localization;
- visual QA/screenshots for layout changes;
- deep-link behavior for public/shareable entities where relevant.

## Documentation
- relevant product/design/backend docs updated;
- ADR if architecture changes;
- active exec plan/progress updated;
- tech debt recorded if an approved shortcut remains.

## Delivery
- CI green;
- staging verification;
- rollout/rollback considered;
- feature/operational flag strategy appropriate;
- mobile binary/OTA compatibility respected.
