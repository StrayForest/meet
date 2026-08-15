# AGENTS.md — Meet

Meet is an **event-first IRL social network / real-world social marketplace**. This file is a map, not the full manual.

## Read first
1. `ARCHITECTURE.md` — system map and boundaries.
2. `docs/00_INDEX.md` — progressive documentation map.
3. For product work: relevant file under `docs/product-specs/`.
4. For UI work: `docs/DESIGN.md`, `docs/FRONTEND.md` and relevant `docs/design-docs/`.
5. For backend/data work: `docs/02_DOMAIN_AND_DATABASE.md`, `docs/03_API_AND_STATE_MACHINES.md`.
6. For infrastructure/reliability/security: `docs/06_INFRASTRUCTURE_DEVOPS.md`, `docs/RELIABILITY.md`, `docs/SECURITY.md`.
7. Before architectural changes: `docs/09_FIXED_ARCHITECTURE_DECISIONS.md`.
8. For multi-step implementation: `docs/PLANS.md` + `docs/exec-plans/`.

## Golden invariants
- Event is the core product entity; optimize for successful IRL attendance, not screen time.
- Initial public network is 18+, no dating positioning/sexual solicitation/random DMs.
- Backend is a NestJS + Fastify TypeScript modular monolith until an accepted ADR says otherwise.
- Mobile: React Native + Expo. Web/B2B/Admin: Next.js.
- PostgreSQL 18 + PostGIS is authoritative. Valkey is ephemeral.
- REST + OpenAPI typed clients. Transactional outbox + Pub/Sub/Cloud Tasks; consumers idempotent.
- GCP `europe-north1`, Cloud Run/Cloud SQL/Memorystore/Storage, Cloudflare edge, Terraform.
- Imported events preserve provenance, rights/license and raw source identity.
- UUIDv7 first-party IDs; UTC + IANA timezone; money in minor units + ISO currency.
- Country differences live in country configuration, not scattered conditionals.
- Strong identity required for private-home hosts; exact home address never public; identity documents never stored.
- No public 1–5 star human rating.
- Admin/moderation is isolated and audited.
- UI consumes `design/tokens.json`; no ad-hoc visual system. Event-first hierarchy and 5-tab navigation are design contracts.
- Large frontend changes require visual verification/screenshots, not compile-only approval.

## Codex workflow
Before a task:
1. Read the smallest relevant specs from the index.
2. If multi-step/risky, create or update an execution plan.
3. Implement within defined module boundaries.
4. Add validation, authorization, safety/abuse controls, telemetry and docs.
5. Run lint/typecheck/tests/build plus visual/accessibility checks when UI changes.
6. Never silently redesign. Propose an ADR/design decision if a fixed contract conflicts with measured reality.

## Definition of done
Read `docs/11_DEFINITION_OF_DONE.md`. CI green is necessary but not sufficient; user-visible work must also satisfy design/accessibility and visual QA.

## When code exists
Nested package/app `AGENTS.md` files may add local commands and constraints, but cannot contradict root architecture/design contracts.