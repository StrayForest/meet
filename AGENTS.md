# AGENTS.md — Meet

Meet is an **event-first IRL social network / real-world social marketplace**. This file is the agent map, not the full manual.

## Read first
1. `ARCHITECTURE.md` — system map and boundaries.
2. `docs/00_INDEX.md` — progressive documentation map.
3. Product task → relevant `docs/product-specs/`.
4. UI task → `docs/DESIGN.md`, `docs/FRONTEND.md`, relevant `docs/design-docs/`.
5. Domain/data/API → `docs/BACKEND.md`, `docs/02_DOMAIN_AND_DATABASE.md`, `docs/03_API_AND_STATE_MACHINES.md`, `schemas/database.dbml`.
6. Mobile/release work → `docs/MOBILE_RELEASES.md`, `docs/CLIENT_COMPATIBILITY.md`, `docs/DEEP_LINKS_SEO.md`.
7. Realtime → `docs/REALTIME.md`.
8. Infra/reliability/security → `docs/06_INFRASTRUCTURE_DEVOPS.md`, `docs/RELIABILITY.md`, `docs/SECURITY.md`.
9. Before architectural change → `docs/09_FIXED_ARCHITECTURE_DECISIONS.md` + accepted `docs/adr/`.
10. Multi-step/risky work → `docs/PLANS.md` + `docs/exec-plans/`.

## Golden invariants
- `Event` is stable canonical/series identity; `EventOccurrence` is the concrete physical participation unit.
- Admission/ticketing and Meet social participation are separate policies. Never recreate a combined `join_mode` containing ticket semantics.
- V1 discovery is physical/hybrid; no online-only primary event supply.
- Native recurrence is intentionally limited; local wall-clock + IANA timezone semantics are preserved across DST.
- Event merge/dedupe preserves stable aliases, deep links and provenance.
- Initial public network is 18+, no dating positioning/sexual solicitation/random DMs.
- Strong identity required for private-home hosts; exact address is occurrence-scoped, separately encrypted and never in generic DTOs.
- Staff identity is separate from consumer User identity; staff MFA/audit mandatory.
- Backend: NestJS + Fastify TypeScript modular monolith.
- Mobile: React Native + Expo; web/B2B/admin: Next.js.
- PostgreSQL 18 + PostGIS authoritative; Valkey ephemeral.
- REST + OpenAPI typed clients; transactional outbox + Pub/Sub/Cloud Tasks; consumers idempotent.
- GCP `europe-north1`, Cloud Run/Cloud SQL/Memorystore/Storage, Cloudflare edge, Terraform.
- Imported events preserve rights/source/raw identity.
- UUIDv7; UTC + IANA timezone; money integer minor units + ISO currency.
- Country differences live in country config.
- PostHog experiments are not operational safety kill switches. First-party operational flags are PostgreSQL-backed/audited.
- Mobile clients are not assumed current: maintain compatibility/capabilities/minimum-version policy.
- Push/WebSocket are transport/notification, not source of truth.
- No public 1–5 star human rating.
- UI consumes `design/tokens.json`; no ad-hoc visual system.
- User-visible layout changes require visual/accessibility verification.

## Codex workflow
Before a task:
1. Read smallest relevant specs from index.
2. If multi-step/risky, create/update execution plan.
3. Confirm task uses V2 Event/Occurrence/admission/participation model.
4. Implement within module boundaries.
5. Add validation, authorization, idempotency, safety/abuse controls, telemetry and docs.
6. Run lint/typecheck/tests/build plus visual/accessibility checks for UI.
7. Never silently redesign. Proposed conflict with accepted contract → ADR/spec decision first.

## Definition of done
Read `docs/11_DEFINITION_OF_DONE.md`. CI green is necessary but insufficient.

## Conflict rule
If accepted ADR, indexed prose and `schemas/database.dbml` disagree, do **not** choose one silently. Stop the affected implementation path and reconcile documentation before generating/merging migration/code.

## Nested instructions
Future app/package `AGENTS.md` files may add local commands/constraints but cannot contradict root architecture/design/domain contracts.
