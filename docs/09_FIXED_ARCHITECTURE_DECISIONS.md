# 09 — Fixed architecture decisions

These decisions are ACCEPTED and frozen for implementation.

| ID | Decision | Status |
|---|---|---|
| ADR-001 | Event-first IRL social marketplace | ACCEPTED |
| ADR-002 | TypeScript-first monorepo | ACCEPTED |
| ADR-003 | React Native + Expo mobile | ACCEPTED |
| ADR-004 | Next.js web/B2B/admin | ACCEPTED |
| ADR-005 | NestJS + Fastify backend | ACCEPTED |
| ADR-006 | Modular monolith first | ACCEPTED |
| ADR-007 | PostgreSQL 18 + PostGIS | ACCEPTED |
| ADR-008 | Drizzle + targeted handwritten SQL | ACCEPTED |
| ADR-009 | REST + OpenAPI typed clients | ACCEPTED |
| ADR-010 | Transactional outbox + Pub/Sub | ACCEPTED |
| ADR-011 | Valkey is ephemeral only | ACCEPTED |
| ADR-012 | GCP `europe-north1` primary | ACCEPTED |
| ADR-013 | Cloud Run runtime | ACCEPTED |
| ADR-014 | Cloudflare edge/WAF/rate limiting | ACCEPTED |
| ADR-015 | Cloud Storage media | ACCEPTED |
| ADR-016 | Identity Platform consumer auth | ACCEPTED |
| ADR-017 | External strong identity/KYC abstraction | ACCEPTED |
| ADR-018 | MapLibre client + map-provider abstraction | ACCEPTED |
| ADR-019 | PostHog + BigQuery analytics | ACCEPTED |
| ADR-020 | OpenTelemetry + Sentry observability | ACCEPTED |
| ADR-021 | Terraform | ACCEPTED |
| ADR-022 | Stripe payment/billing provider boundary | ACCEPTED |
| ADR-023 | 18+ initial network | ACCEPTED |
| ADR-024 | No random DM | ACCEPTED |
| ADR-025 | No public star rating for people | ACCEPTED |
| ADR-026 | Strong identity for private-home host | ACCEPTED |
| ADR-027 | Country-config expansion architecture | ACCEPTED |
| ADR-028 | Imported event provenance mandatory | ACCEPTED |
| ADR-029 | UUIDv7 first-party IDs | ACCEPTED |
| ADR-030 | Attendance-oriented recommendation objective | ACCEPTED |

## Allowed without ADR

- compatible dependency upgrades;
- GCP resource sizing;
- Cloud Run min/max instances;
- DB indexes/query tuning;
- cache TTLs;
- retry/timeout tuning;
- feature-flag rollout;
- adding a connector behind existing interface.

## Requires ADR

- change cloud provider;
- replace PostgreSQL;
- replace NestJS/TypeScript backend;
- replace React Native/Expo;
- adopt GraphQL as primary API;
- microservices rewrite;
- event sourcing as source of truth;
- self-host identity documents/KYC;
- change product away from events-first;
- admit minors into adult network;
- introduce random unsolicited DMs.

## ADR template

Any proposed architectural change must document:
1. measured problem;
2. decision;
3. at least two alternatives;
4. compatibility impact;
5. migration;
6. rollback;
7. evidence;
8. explicit approval.
