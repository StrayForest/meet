# BACKEND — Engineering contract

## Shape
NestJS + Fastify TypeScript modular monolith. Domain boundaries are more important than folder ceremony.

Dependency direction: `presentation → application → domain`; infrastructure implements ports. Domain code does not import NestJS, HTTP, Cloud SDKs, Drizzle or provider clients.

## Core domain invariants
- Event = canonical/series identity.
- EventOccurrence = physical participation unit.
- AdmissionMode and ParticipationMode are independent.
- No online-only V1 occurrence type.
- Private exact location is occurrence-scoped/restricted.
- Event merges preserve aliases/provenance.

Any backend code introducing `EXTERNAL_TICKET` as a ParticipationMode/join state is architecturally invalid.

## Controllers
Thin: auth context, validation, application command/query, response mapping. No business transactions/permission shortcuts.

## Application services
Own use-case orchestration, authorization, transaction boundaries and outbox emission.

## Repositories
Module-owned. Direct cross-module table access prohibited except explicit platform/read-model infrastructure covered by architecture tests. Discovery may read projections but does not mutate authoritative events.

## Transactions
Use DB transactions for capacity, waitlist promotion, role changes, alias merge and outbox writes. Avoid external network calls inside long DB transactions.

## Database connection policy
Use bounded pools from infrastructure config. Launch defaults from `06_INFRASTRUCTURE_DEVOPS.md` (API 8, realtime/worker lower). Do not increase pool/max instances without connection-budget calculation.

## Errors
Domain/application errors map to stable Problem Details codes. Do not leak SQL/provider errors.

## Async
Transactional outbox mandatory for durable side effects after authoritative mutation. Consumers idempotent; processed-event semantics where necessary. Never assume global Pub/Sub ordering.

## Realtime
`REALTIME.md` is contract. WebSocket gateway is transport; durable writes precede fanout; reconnect/recovery via REST.

## Client compatibility
`CLIENT_COMPATIBILITY.md` is mandatory. Additive/backward-compatible API evolution for supported mobile clients. Server bootstrap/capability policy is first-party domain/platform config.

## Configuration
Typed runtime config; startup fails clearly on missing production config. No scattered `process.env` reads.

First-party OperationalFlags are DB-backed/audited and independent of PostHog product experiments.

## External providers
Every provider uses port/adapter/test fake: auth, email, push, maps/geocoding, KYC, moderation AI, analytics, payments, event connectors, mobile release integrations where automation touches backend tooling.

## Logging
Structured/correlation-aware, no sensitive payloads. Safe IDs/reason codes rather than message bodies, DOB, tokens or exact private addresses.

## Query performance
Avoid N+1; bounded lists; cursor pagination; explicit indexes; explain/analyze hot SQL. PostGIS/hot SQL integration-tested.

## Migrations
Expand → backfill/migrate → contract. Old/new Cloud Run revisions and supported mobile clients overlap safely. Long backfills are resumable jobs.

## Code conventions
- explicit public/module-boundary types;
- avoid `any`; validate unknown external data;
- inject providers/clock/ID generator for deterministic tests;
- no hidden singleton mutable state;
- commands mutate, queries read without unnecessary CQRS framework ceremony;
- comments explain why/invariants.

## Schema conflict rule
`schemas/database.dbml` V2 + accepted ADRs + indexed prose must agree before migration implementation. Codex does not choose one silently if they diverge.
