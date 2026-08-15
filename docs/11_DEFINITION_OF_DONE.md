# 11 — Definition of done and quality gates

A task is DONE only when applicable items are complete.

## Code
- implemented in correct module;
- TypeScript strict passes;
- no architecture substitution;
- failure paths handled;
- no secrets/debug hacks.

## Data
- migration exists;
- indexes/constraints considered;
- rollout backward-compatible;
- privacy/retention classification considered.

## API/contracts
- validation;
- authorization;
- stable error codes;
- OpenAPI/shared contracts updated;
- idempotency where required;
- cursor pagination for growing lists.

## Safety/security
- abuse/rate-limit review;
- block/restriction behavior;
- PII/logging review;
- private-address/location leak review if applicable;
- audit event for privileged action.

## Analytics/observability
- authoritative server event where appropriate;
- traces/logs/metrics;
- Sentry/error visibility;
- no sensitive payload leak.

## Tests
- unit tests for domain rules;
- integration tests for repositories/PostGIS/concurrency;
- API tests for auth/errors;
- E2E for critical flow;
- authorization tests;
- idempotency/concurrency tests where relevant.

## UX
- loading;
- empty;
- error;
- retry/offline behavior where relevant;
- accessibility;
- localization.

## CI gates
PR cannot merge if:
- lint/typecheck fail;
- required tests fail;
- OpenAPI/contracts drift;
- migration validation fails;
- critical security scan fails;
- build fails.

## Testing baseline
- ESLint + Prettier;
- Vitest;
- real PostgreSQL/PostGIS and Valkey integration tests using containers/test environment;
- Playwright for web/B2B/admin;
- Maestro-class mobile E2E;
- k6 load tests;
- CodeQL/SAST;
- dependency/container scans.

## Critical concurrency tests
- last event slot cannot double-book;
- waitlist offer happens once;
- duplicate Pub/Sub delivery does not duplicate side effects;
- duplicate payment webhook does not duplicate entitlement;
- repeated client join retry returns same logical result.

## Critical E2E flows
1. onboarding;
2. discovery;
3. instant join;
4. approval join;
5. waitlist/slot offer;
6. create event;
7. private-home protections;
8. Pod;
9. chat/report;
10. check-in/feedback;
11. connection/DM;
12. claim organization;
13. moderation/appeal.
