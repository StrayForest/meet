# Active plan — Phase 0 Foundation — Architecture 1.3

## Goal
Create production-shaped monorepo and executable contracts before product implementation.

## Required specs
AGENTS, ARCHITECTURE, 00_INDEX, BACKEND, 02_DOMAIN_AND_DATABASE, SCHEMA_GOVERNANCE, EVENT_CONTRACTS, database.dbml V3, DESIGN/FRONTEND, MOBILE_RELEASES/PRIVACY/CLIENT_COMPATIBILITY, SECURITY/SUPPLY_CHAIN/ORIGIN, accepted ADRs, backlog.

## Milestones
1. pnpm/Turborepo/Node24 strict workspace.
2. design token pipeline/primitives.
3. local Postgres18+PostGIS/Valkey/fakes.
4. V3 Drizzle schema/migration with all CHECK/unique/partial indexes.
5. schema governance cutover + generated DBML verification.
6. shared API/value/error/idempotency/client contracts.
7. typed durable event registry/contracts.
8. first-party OperationalFlag optimistic concurrency/change approvals + ClientPolicy.
9. architecture boundary tests.
10. OTel/Sentry/PostHog adapters.
11. Expo/EAS + mobile privacy/SDK inventory skeleton.
12. repository/supply-chain controls and WIF design.
13. Terraform primary/DR/origin/DB-budget skeleton.
14. CI docs/generated/schema/event-contract/architecture/migration/security/build checks.
15. deterministic fixtures/visual QA shell.

## Critical assertions
- EventOccurrenceTemplate can materialize duration/location/policies;
- no HYBRID/ONLINE V1 enum/path;
- external ticket not ParticipationMode;
- exact private location not generic DTO;
- report→case relationship exists;
- org multi-role exists;
- waitlist ordinal/active-offer and feedback uniqueness enforced;
- outbox envelope matches EVENT_CONTRACTS;
- ingestion run records code versions;
- OperationalFlag uses version + optional two-person enable;
- audit application writer cannot update/delete;
- generated DBML matches executable schema after cutover.

## Acceptance
Fresh checkout boots; V3 zero→latest succeeds; generated docs consistent; root checks green; no product UI built on obsolete model.
