# BACKEND — Engineering contract — Architecture 1.3

## Shape
NestJS + Fastify TypeScript modular monolith. presentation → application → domain; infrastructure implements ports. Domain imports no Nest/HTTP/Cloud/Drizzle/provider clients.

## Event invariants
Event = stable identity. EventOccurrenceTemplate = materialization defaults. EventOccurrence = concrete physical unit. V1 physical-only. Admission and participation independent. Private exact location is encrypted/restricted.

## Modules/repositories
Module-owned persistence; no cross-module write access. Discovery reads projections only. Organization membership supports multiple roles.

## Transactions
Capacity/waitlist, role changes, merges and outbox commit transactionally. No slow external network calls inside DB transaction.

## Async
Transactional outbox follows `EVENT_CONTRACTS.md`; idempotent consumers; no global Pub/Sub ordering assumption. Aggregate version enables stale/gap detection where needed.

## Schema
Follow `SCHEMA_GOVERNANCE.md`. After P0-006 Drizzle schema+migrations are executable truth and DBML is generated.

## Runtime
Bounded DB pools, typed config, no hidden global mutable state, stable Problem Details errors, cursor pagination, explain/analyze hot SQL.

## Security/reliability
Authorization deny-by-default; sensitive ciphertext via crypto service; privileged audit through append-only audit writer; operational flags use optimistic concurrency; mobile compatibility respected; provider failure/degraded behavior explicit.

## Testing
Real Postgres/PostGIS for constraints/concurrency, event-contract compatibility, migration generation/drift, ingestion parser versions, private-location leak tests and waitlist final-slot races.
