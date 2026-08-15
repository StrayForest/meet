# BACKEND — Engineering contract

## Shape
NestJS + Fastify TypeScript modular monolith. Domain boundaries are more important than folder ceremony.

## Dependency direction
`presentation → application → domain`; infrastructure implements ports. Domain code must not import NestJS, HTTP, Cloud SDKs, Drizzle or provider clients.

## Controllers
Thin: authentication context, request validation, command/query call, response mapping. No business transactions or permission shortcuts in controllers.

## Application services
Own use-case orchestration, authorization policy invocation, transaction boundaries and domain-event/outbox emission.

## Repositories
Module-owned. Cross-module direct table access is prohibited except explicit platform/read-model infrastructure approved by architecture tests. Discovery may read optimized projections but does not own authoritative event mutations.

## Transactions
Use DB transactions for invariants such as capacity, waitlist promotion, role changes and outbox writes. External network calls do not occur inside long DB transactions unless unavoidable and explicitly designed.

## Errors
Domain/application errors map to stable Problem Details codes from `references/error-codes.md`. Do not leak SQL/provider error strings to clients.

## Async
Transactional outbox is mandatory for durable side effects after authoritative mutations. Consumers are idempotent and observable. Pub/Sub delivery order is never assumed globally.

## Configuration
Typed runtime configuration; startup fails clearly on missing required production config. No `process.env` reads scattered through domain code.

## External providers
Every provider has a port/adapter and test fake: auth, email, push, maps/geocoding, KYC, moderation AI, analytics, payments, event-source connectors.

## Logging
Structured, correlation-aware, no sensitive payloads. Use safe IDs/reason codes rather than message bodies, DOB, tokens or exact private addresses.

## Query performance
Avoid N+1; bounded lists; cursor pagination; explicit indexes; explain/analyze hot SQL during optimization. PostGIS/hot-path SQL may be handwritten and must have integration tests.

## Migrations
Expand → backfill/migrate → contract. Production rollout must permit old/new app revision overlap. Long backfills run as resumable jobs.

## Code conventions
- explicit types at public/module boundaries;
- avoid `any`; validate unknown external data;
- dependency injection for providers/clock/ID generator where deterministic tests need it;
- no hidden singleton mutable state;
- commands mutate, queries read; do not force CQRS framework ceremony;
- comments explain non-obvious why/invariants, not restate code.