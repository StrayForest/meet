# ADR-0002 — TypeScript modular monolith, PostgreSQL/PostGIS and outbox

Status: ACCEPTED

## Context
The founding team needs high implementation speed, strong AI-agent legibility and transactional correctness for participation, safety and event ingestion. Premature distributed systems would add failure modes and coordination overhead.

## Decision
- TypeScript end-to-end.
- NestJS + Fastify backend as modular monolith.
- PostgreSQL 18 + PostGIS is authoritative transactional store.
- Drizzle for schema/migrations/ordinary CRUD; parameterized SQL for geospatial/hot paths.
- REST + OpenAPI typed clients.
- Transactional outbox for durable async effects; Pub/Sub/Cloud Tasks for delivery/scheduling.
- Valkey is ephemeral only.
- Module-owned persistence and architecture tests prevent unauthorized cross-module access.

## Alternatives considered
- Microservices: rejected before measured scaling/ownership need.
- MongoDB primary store: rejected because core data is relational/transactional/geospatial.
- GraphQL as primary API: rejected because REST/OpenAPI gives simpler explicit contracts and generated clients for this product.
- Event sourcing as source of truth: rejected as unnecessary complexity.

## Consequences
Positive: transactional correctness, simple local development, one language/toolchain, clear extraction seams.

Cost: single database requires disciplined module ownership and connection/capacity management. Future service extraction must preserve contracts/data migration explicitly.

## Extraction rule
A module is extracted only for measured independent scaling, reliability isolation or ownership/deployment need, preferably through a new ADR.
