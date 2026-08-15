# ADR-0002 — TypeScript modular monolith, PostgreSQL/PostGIS and governed outbox
Status: ACCEPTED

## Decision
TypeScript end-to-end; NestJS+Fastify modular monolith; PostgreSQL/PostGIS authoritative; Drizzle+targeted SQL; REST+OpenAPI; transactional outbox; Pub/Sub/Cloud Tasks; Valkey ephemeral. Durable events follow `EVENT_CONTRACTS.md` including versioned envelope/aggregate version and idempotent consumers.

## Why
Fast implementation and transactional correctness without premature distributed complexity.

## Extraction
Only for measured independent scaling, reliability isolation or ownership/deployment need.
