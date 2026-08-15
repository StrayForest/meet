# AGENTS.md — IRL Social Platform

This repository is governed by the specifications in `docs/`. Codex must read `docs/00_INDEX.md` before implementation.

## Non-negotiable architecture

1. Product category: **event-first IRL social network / real-world social marketplace**. Event is the core product entity.
2. Initial public product: **18+ only**, no dating positioning, no sexual solicitation, no random DMs.
3. Backend: **modular monolith**, not microservices, until an accepted ADR explicitly authorizes extraction.
4. Runtime/tooling: Node.js 24 LTS, pnpm 11, Turborepo, TypeScript strict mode.
5. Mobile: React Native + Expo + Expo Router + TypeScript.
6. Web/B2B/Admin: Next.js + TypeScript.
7. API/Workers: NestJS + Fastify + TypeScript.
8. Primary data store: PostgreSQL 18 + PostGIS. PostgreSQL is the source of truth.
9. ORM/query layer: Drizzle for schema/migrations/ordinary CRUD, hand-written SQL for PostGIS and hot queries.
10. Cache/realtime helper: Valkey. Never authoritative.
11. API: REST + OpenAPI. Generate typed clients from shared contracts.
12. Async: transactional outbox + Pub/Sub + Cloud Tasks. Consumers must be idempotent.
13. Cloud: GCP, primary region `europe-north1` Finland. Cloud Run, Cloud SQL, Memorystore for Valkey, Cloud Storage, Pub/Sub, Cloud Tasks, Secret Manager, KMS, BigQuery, Artifact Registry.
14. Edge: Cloudflare DNS/WAF/rate limiting/Turnstile/CDN.
15. Infrastructure as code: Terraform.
16. Maps: MapLibre client with provider abstraction.
17. Analytics: PostHog + BigQuery. Observability: OpenTelemetry + Sentry.
18. Consumer auth: Google Cloud Identity Platform. Staff auth is isolated and requires MFA.
19. Strong identity/age: external provider abstraction. Do not store passport scans or numbers.
20. Private-home hosts require strong identity verification. Exact home address is never public.
21. Imported event data must preserve source provenance, source ID, rights/license metadata and fetch history.
22. All first-party domain IDs use UUIDv7.
23. Store UTC timestamps plus IANA timezone where local scheduling semantics matter.
24. Money uses integer minor units + ISO 4217 currency.
25. Country behavior belongs in centralized country configuration, not scattered country conditionals.
26. No public 1–5 star rating of people. Reputation is structured and safety-oriented.
27. Recommendation objective is successful real-world attendance, not CTR or screen time.
28. Admin/moderation capabilities are isolated from consumer surfaces and sensitive actions are audited.
29. Every retry-prone mutation must be idempotent.
30. Do not replace a fixed framework/provider/database/cloud choice without an accepted ADR.

## Codex workflow

Before any feature:
1. Read `docs/00_INDEX.md`.
2. Read the relevant specification files.
3. Read `docs/09_FIXED_ARCHITECTURE_DECISIONS.md`.
4. Locate the task in `docs/10_IMPLEMENTATION_BACKLOG.md`.
5. Implement only inside the defined module boundaries.
6. Add tests, validation, authorization, telemetry, rate-limit/abuse handling and documentation.
7. Run lint, typecheck, tests and build.
8. Never silently redesign. If the spec truly conflicts with reality, propose an ADR instead.

## Definition of done

A task is not done until:
- code is implemented in the correct module;
- migrations and indexes are complete;
- API/contracts are updated;
- authorization and abuse controls are implemented;
- unit/integration/E2E coverage is appropriate;
- analytics/observability is present;
- privacy/safety impacts are addressed;
- documentation is updated;
- CI is green.
