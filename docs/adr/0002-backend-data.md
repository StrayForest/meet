# ADR-0002 — TypeScript modular monolith, PostgreSQL/PostGIS and governed outbox

Status: ACCEPTED
Date: 2026-08-16
Owner: Backend architecture

## Context
Meet needs fast iteration, strong transactional correctness for participation/capacity/moderation, geospatial discovery and explicit future extraction seams without paying distributed-systems cost before measured need.

## Decision
Use TypeScript end-to-end. Backend default is NestJS + Fastify in a modular monolith. PostgreSQL + PostGIS is authoritative state. Drizzle plus targeted SQL owns executable relational access after schema cutover. Public/application API is REST + OpenAPI with generated clients. Durable asynchronous side effects use a transactional outbox and versioned/idempotent domain-event contracts.

Managed transports such as Pub/Sub/Cloud Tasks and Valkey-based coordination are **activation-gated implementation options**, not mandatory pre-PMF runtime dependencies.

## Alternatives
- Microservices from day one: rejected because cross-service transactions, deployments and observability add cost before independent scaling/ownership need exists.
- NoSQL primary store: rejected because core invariants are relational/transactional and discovery requires strong PostgreSQL/PostGIS support.
- Graph database as primary social store: rejected because persistent graph value is an unproven product hypothesis.
- GraphQL first: rejected because REST/OpenAPI provides simpler stable client contracts for current flows.
- Synchronous external side effects inside business transactions: rejected because provider failures would couple correctness to external availability.

## Compatibility impact
Modules own their persistence/rules; consumers cannot reach through another module's tables. Database constraints remain race-condition backstops. Domain events are separate versioned contracts from HTTP DTOs.

## Migration
P0 creates monorepo/module boundaries, executable Drizzle schema/migrations, OpenAPI/client generation and only the outbox/events actually required by active phases. Add managed transport/cache only through evidence-backed implementation work.

## Rollback
Framework/library choices are changeable through a superseding ADR while the modular/domain/API contracts remain intact. Replacing PostgreSQL or aggregate ownership after production data requires explicit data migration and compatibility analysis.

## Validation
Architecture fitness tests enforce module dependency/persistence boundaries; zero-to-latest migrations and concurrency tests pass; OpenAPI/client drift is checked; outbox commits atomically with authoritative mutations; duplicate event delivery is safe when transport is activated.

## Approval
Existing Architecture 1.3 ACCEPTED decision retained. Service extraction, primary datastore change, API paradigm change or mandatory managed-transport activation requires measured evidence and a superseding accepted ADR.
