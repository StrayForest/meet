# Meet — IRL Social Platform

This repository is the implementation workspace for an **event-first IRL social network / real-world social marketplace**.

The product launches in Finland and is designed from the beginning for Nordic/EU expansion without a domain-architecture rewrite.

## Start here

1. Read `AGENTS.md`.
2. Read `MASTER_SPEC.md`.
3. Read `docs/00_INDEX.md` in the specified order.
4. Treat `docs/09_FIXED_ARCHITECTURE_DECISIONS.md` as frozen architecture.
5. Execute `docs/10_IMPLEMENTATION_BACKLOG.md` phase by phase.
6. Use `docs/11_DEFINITION_OF_DONE.md` before marking work complete.

For the first Codex run, use `CODEX_BOOTSTRAP_PROMPT.md`.

## Product

**Discover what is happening nearby, find people to go with, or create an activity yourself.**

The core entity is an Event. Imported and official events solve cold start; participation, Pods, attendance, trusted connections and community-created events create the proprietary social network.

## Fixed baseline

React Native + Expo · Next.js · NestJS/Fastify · TypeScript · PostgreSQL/PostGIS · Valkey · GCP Finland · Cloud Run · Pub/Sub/Cloud Tasks · Cloud Storage · Cloudflare · Terraform · PostHog/BigQuery · OpenTelemetry/Sentry.

## Architecture guarantee

The specification is designed to avoid avoidable rewrites. Physical sizing/topology may evolve at very large scale, but domain boundaries, contracts, data ownership and provider abstractions are deliberately fixed so scaling is an extension rather than a rewrite.
