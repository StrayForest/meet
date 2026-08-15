# AGENTS.md — Meet

Meet is an **event-first IRL social network / real-world social marketplace**. This file is the agent map, not the full manual.

## Read first
1. `ARCHITECTURE.md` — short system map.
2. `docs/00_INDEX.md` — progressive documentation map.
3. Product task → relevant `docs/product-specs/`.
4. UI task → `docs/DESIGN.md`, `docs/FRONTEND.md`, relevant `docs/design-docs/`.
5. Domain/data/API → `docs/BACKEND.md`, `docs/02_DOMAIN_AND_DATABASE.md`, `docs/03_API_AND_STATE_MACHINES.md`, `docs/SCHEMA_GOVERNANCE.md`.
6. Async/domain events → `docs/EVENT_CONTRACTS.md`.
7. Mobile/release → `docs/MOBILE_RELEASES.md`, `docs/MOBILE_PRIVACY_COMPLIANCE.md`, `docs/CLIENT_COMPATIBILITY.md`, `docs/DEEP_LINKS_SEO.md`.
8. Realtime → `docs/REALTIME.md`.
9. Infra/security/reliability → `docs/06_INFRASTRUCTURE_DEVOPS.md`, `docs/ORIGIN_SECURITY.md`, `docs/DISASTER_RECOVERY.md`, `docs/SLO_SLI_ERROR_BUDGETS.md`, `docs/SUPPLY_CHAIN_SECURITY.md`, `docs/SECURITY.md`.
10. Privacy/data → `docs/DATA_LIFECYCLE_AND_RETENTION.md`, `docs/CRYPTOGRAPHY_KEY_MANAGEMENT.md`, `docs/AUDIT_LOGGING.md`.
11. Scaling/cost → `docs/CAPACITY_AND_COST_MODEL.md`.
12. Before architectural change → `docs/09_FIXED_ARCHITECTURE_DECISIONS.md` + accepted `docs/adr/`.
13. Multi-step/risky work → `docs/PLANS.md` + `docs/exec-plans/`.

## Golden invariants — Architecture 1.3
- `Event` is stable canonical/series identity.
- `EventOccurrenceTemplate` contains defaults needed to materialize concrete occurrences.
- `EventOccurrence` is the concrete **physical** unit people attend.
- V1 is physical-only. Do not add ONLINE/HYBRID semantics without an accepted ADR.
- Admission/ticketing and Meet participation are independent policies.
- Participation, waitlist, Pods, attendance/check-in and occurrence chat target EventOccurrence.
- Native recurrence is intentionally limited and preserves local wall-clock + IANA timezone across DST.
- Canonical merge preserves aliases, deep links and provenance.
- Exact private-home data is occurrence-scoped, envelope-encrypted and never returned by generic DTOs.
- Initial public network is 18+, no dating positioning/sexual solicitation/random DMs.
- Staff identity is separate from consumer User; privileged access requires MFA and audit.
- Backend: NestJS + Fastify TypeScript modular monolith.
- Mobile: React Native + Expo; web/B2B/admin: Next.js.
- PostgreSQL/PostGIS authoritative; Valkey ephemeral.
- REST + OpenAPI typed clients; transactional outbox + Pub/Sub/Cloud Tasks; consumers idempotent.
- Domain event contracts are versioned and governed by `EVENT_CONTRACTS.md`.
- GCP primary `europe-north1`, DR target `europe-north2`; Cloud Run/Cloud SQL/Memorystore/Storage; Cloudflare edge; Terraform.
- Imported records preserve rights/source identity and connector/normalizer versions.
- UUIDv7; UTC + IANA timezone; money integer minor units + ISO currency.
- Country differences live in country config.
- Product experiments are not operational/safety controls.
- Safety-critical OperationalFlags are first-party, versioned, audited and concurrency-safe.
- Push/WebSocket/cache are not source of truth.
- Supported old mobile clients remain inside compatibility policy.
- No public 1–5 star human rating.
- UI consumes `design/tokens.json`; no ad-hoc design system.
- User-visible changes require visual/accessibility verification.
- Audit/security evidence is append-oriented and tamper-evident by design.
- Production builds use protected PR/release governance; Codex must not directly redesign or bypass review gates.

## Schema source-of-truth rule
Before P0-006, `schemas/database.dbml` is the authoritative **design blueprint**.
After P0-006, executable Drizzle schema + applied migrations become authoritative; DBML and schema docs are generated/verified artifacts. See `docs/SCHEMA_GOVERNANCE.md`.

## Codex workflow
1. Read the smallest relevant indexed specs.
2. If multi-step/risky, create/update an execution plan.
3. Confirm task uses Architecture 1.3 model.
4. Implement within module ownership boundaries.
5. Add validation, authorization, idempotency, safety/abuse controls, telemetry and docs.
6. Run lint/typecheck/tests/build and applicable visual/accessibility/security checks.
7. Never silently redesign. Conflict → stop affected path and reconcile spec/ADR before code or migration.
8. Prefer one reviewable backlog item/PR over a giant phase-sized commit.

## Definition of done
Read `docs/11_DEFINITION_OF_DONE.md`. CI green is necessary but insufficient.
