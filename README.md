# Meet — IRL Social Platform

Meet is the implementation repository for an **event-first IRL social network / real-world social marketplace** launching in Finland and designed for Nordic/EU expansion.

## Start here

For Codex/engineering:
1. `AGENTS.md` — short agent map and golden invariants.
2. `ARCHITECTURE.md` — technical system map.
3. `docs/00_INDEX.md` — progressive documentation map.
4. `docs/product-specs/` — task-sized product contracts.
5. `docs/DESIGN.md` + `docs/design-docs/` — UI/UX source of truth.
6. `docs/09_FIXED_ARCHITECTURE_DECISIONS.md` — frozen decisions.
7. `docs/exec-plans/` — active/completed multi-step plans.
8. `docs/10_IMPLEMENTATION_BACKLOG.md` — phased build sequence.
9. `docs/11_DEFINITION_OF_DONE.md` — quality bar.

First Codex instruction: `CODEX_BOOTSTRAP_PROMPT.md`.

## Product promise

**Discover what is happening nearby, find people to go with, or create an activity yourself.**

Imported and official events make the product useful before community density. Participation, Pods, attendance, trusted connections and community events create the proprietary social layer.

## Fixed technical baseline

React Native + Expo · Next.js · NestJS/Fastify · TypeScript · PostgreSQL/PostGIS · Valkey · GCP Finland · Cloud Run · Pub/Sub/Cloud Tasks · Cloud Storage · Cloudflare · Terraform · PostHog/BigQuery · OpenTelemetry/Sentry.

## Design baseline

The design is event-first, calm and practical: restrained light/dark themes, clear hierarchy, one dominant CTA, no dating swipe/person-browsing metaphors. Machine-readable tokens live in `design/tokens.json`; open `design/DESIGN_SYSTEM_PREVIEW.html` for a visual reference.

## Development principle

The repository is the system of record. Codex works from small relevant specs and execution plans rather than one giant chat prompt. Physical infrastructure may scale, but domain boundaries/contracts/data ownership are designed to evolve without an avoidable rewrite.