# 09 — Fixed architecture decision index

This file is an **index of frozen decisions**, not a substitute for rationale. Accepted rationale lives in `docs/adr/`.

## Core accepted ADRs

| ADR | Scope | Status |
|---|---|---|
| `adr/0001-event-first-domain.md` | Event/Occurrence, admission vs participation, recurrence, IRL-only V1 | ACCEPTED |
| `adr/0002-backend-data.md` | TypeScript modular monolith, PostgreSQL/PostGIS, REST/OpenAPI, outbox | ACCEPTED |
| `adr/0003-mobile-expo.md` | React Native/Expo, EAS delivery, mobile compatibility | ACCEPTED |
| `adr/0004-gcp-runtime.md` | GCP Finland, Cloud Run, DB connection budget, operational flags | ACCEPTED |
| `adr/0005-safety-identity.md` | 18+, strong identity, private-home, staff separation, moderation | ACCEPTED |

## Frozen implementation decisions
- TypeScript-first pnpm/Turborepo monorepo.
- React Native + Expo mobile; Next.js consumer web/B2B/admin.
- NestJS + Fastify modular monolith.
- PostgreSQL 18 + PostGIS authoritative; Drizzle + targeted SQL.
- REST + OpenAPI typed clients.
- transactional outbox + Pub/Sub/Cloud Tasks; consumers idempotent.
- Valkey ephemeral only.
- GCP `europe-north1`, Cloud Run/Cloud SQL/Memorystore/Storage/BigQuery, Terraform.
- Cloudflare edge/WAF/rate limits/Turnstile.
- Identity Platform consumer auth with explicit launch compliance review.
- external strong identity/KYC adapter; identity documents never stored.
- MapLibre + map provider abstraction.
- PostHog analytics/experiments; **not** operational safety flag authority.
- first-party operational flags in PostgreSQL + Valkey cache + Admin audit.
- OpenTelemetry + Sentry.
- Stripe provider boundary for monetization.
- UUIDv7 first-party IDs.
- country-config expansion.
- imported-event provenance + stable canonical aliases after merge.
- EventOccurrence is physical participation unit.
- admission/ticket and Meet social participation are separate policies.
- V1 physical/hybrid discovery only; no online-only supply.
- native recurrence deliberately limited to DAILY/WEEKLY/MONTHLY subset.
- EAS Build/Submit; EAS Update only with compatible runtimeVersion.
- mobile/API compatibility window + capability negotiation.
- no random DM; no public human star rating.
- strong identity for private-home hosts; exact address occurrence-scoped and separately encrypted.
- staff identity separate from consumer User identity.
- attendance-oriented recommendation objective.

## Allowed without new ADR
- compatible dependency upgrades;
- GCP resource sizing within documented architecture/DB connection budget;
- indexes/query tuning;
- cache TTLs;
- retry/timeouts;
- experiment rollout;
- operational-flag value changes;
- new connector behind existing ingestion interface;
- provider vendor selection inside an already-fixed provider abstraction after compliance/cost review.

## Requires ADR
- change cloud provider/core database/core backend/mobile framework;
- GraphQL as primary API;
- microservices rewrite;
- event sourcing as source of truth;
- self-host identity documents/KYC;
- merge admission and participation semantics again;
- change EventOccurrence away from the physical participation unit;
- admit minors into adult network;
- enable online-only events in primary V1 discovery model;
- introduce random unsolicited DMs;
- make analytics vendor the sole safety/core operational kill-switch authority;
- remove mobile backward-compatibility policy.

## New ADR requirements
Use `adr/TEMPLATE.md` and include context, measured problem, decision, alternatives, consequences, compatibility impact, migration, rollback and approval.
