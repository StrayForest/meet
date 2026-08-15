# Meet — IRL Social Platform

Meet is an **event-first IRL social network / real-world social marketplace** launching in Finland and designed for Nordic/EU expansion.

## Current architecture
Architecture generation: **1.2**.

Core domain:
`Event (canonical/series) → EventOccurrence (physical instance) → social participation / Pods / attendance`.

Ticket/admission is separate from Meet participation. The V2 schema and accepted ADRs supersede any earlier illustrative model.

## Start here
For Codex/engineering:
1. `AGENTS.md`
2. `ARCHITECTURE.md`
3. `docs/00_INDEX.md`
4. `docs/09_FIXED_ARCHITECTURE_DECISIONS.md` + accepted `docs/adr/`
5. `schemas/database.dbml` for V2 data blueprint
6. `docs/exec-plans/active/phase-0-foundation.md`
7. `docs/10_IMPLEMENTATION_BACKLOG.md`
8. `docs/11_DEFINITION_OF_DONE.md`

For product/design:
- `docs/PRODUCT_SENSE.md`
- `docs/01_PRODUCT_AND_FEATURES.md`
- `docs/product-specs/`
- `docs/DESIGN.md`
- `docs/design-docs/`
- `design/DESIGN_SYSTEM_PREVIEW.html`

Mobile/runtime-specific:
- `docs/MOBILE_RELEASES.md`
- `docs/CLIENT_COMPATIBILITY.md`
- `docs/REALTIME.md`
- `docs/DEEP_LINKS_SEO.md`

## Fixed stack
React Native + Expo, Next.js, NestJS + Fastify, PostgreSQL 18 + PostGIS, Valkey, GCP Finland/Cloud Run/Cloud SQL, Cloudflare, Terraform, PostHog + BigQuery, OpenTelemetry + Sentry.

## Codex start command
Give Codex:

> Read AGENTS.md, ARCHITECTURE.md and docs/00_INDEX.md. Use architecture 1.2 / schemas/database.dbml V2. Execute docs/exec-plans/active/phase-0-foundation.md and Phase 0 of docs/10_IMPLEMENTATION_BACKLOG.md in dependency order. Do not redesign fixed ADRs or implement obsolete join_mode/ticket semantics.

## Conflict rule
If ADR/prose/DBML conflict, implementation stops until documentation is reconciled. Chat history is never higher authority than indexed repository specs.
