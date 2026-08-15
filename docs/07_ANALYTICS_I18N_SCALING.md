# 07 — Analytics, i18n, country expansion and scaling

## 1. Analytics/experiments
PostHog: product events, funnels, cohorts, retention, **product experiment flags**, experiments.
BigQuery: long-term warehouse, marketplace/growth/safety/finance analysis, ML datasets later.

Server mutation events are authoritative. See `references/analytics-event-catalog.md`.

**Operational/safety kill switches are not PostHog flags.** They use first-party OperationalFlags described in `06_INFRASTRUCTURE_DEVOPS.md`.

## 2. Required analytics context
Where lawful/necessary: pseudonymous actor/session, platform, app version/build/runtime/capabilities, country/city coarse context, event/occurrence/source type, experiment assignment, correlation ID, timestamp.

Never send raw DOB, exact private address, KYC evidence/documents, tokens or message bodies.

## 3. Dashboards
Marketplace: active physical supply, social join conversion, fill, show-up, waitlist, time to first participation, repeat participation.

Supply: imported/org/community, source freshness, cancellations, coverage city/category/day, dedupe/alias rate.

Trust: reports/10k participations, severe incidents, no-show, moderation SLA, appeals/overturn.

Growth: activation, D1/D7/D30, referrals, city liquidity, org acquisition.

Client health: active users/requests by platform/app/build/runtime, unsupported/deprecated clients, update funnel, realtime reconnect/recovery rate.

## 4. Launch localization
Locales: fi/en/ru. Stable translation keys.

Event translations store locale/title/description/source locale/translation source (ORIGINAL/ORGANIZER/MACHINE/HUMAN)/updated timestamp. Machine translation visibly labeled.

## 5. Time/recurrence
Absolute stored times UTC. EventOccurrence stores IANA timezone. Native recurrence uses local DTSTART + timezone and only documented V1 subset. DST behavior tested.

## 6. Country configuration
Central config/domain data defines country, locales, currency, timezone defaults, age policy, identity providers, event connectors, payment availability, legal versions, private-home policy, moderation configuration and country-specific feature availability.

Do not scatter `if country === 'FI'` through domain code.

OperationalFlags are environment/runtime controls and are separate from country product configuration and PostHog experiments.

## 7. Expansion checklist
Per new country: legal/privacy/platform review; country config; identity/age support; source/license support; localization; payment/tax readiness if monetized; moderation/support; city activation; analytics; incident/safety wording; app-store/deep-link/domain configuration.

Nordic hypothesis: Sweden, Norway, Denmark, then broader EU/EEA based on market/event-data/competition/CAC/regulatory cost.

## 8. Scaling stages
### Stage A — launch to ~50k MAU
Cloud Run API/realtime/workers; HA Cloud SQL; Valkey; Pub/Sub/Tasks; Postgres FTS/PostGIS; Cloud Storage. Enforce explicit DB connection budget.

### Stage B — ~50k to 500k MAU
Read replicas if measured, worker isolation, hot projection cache, partition append-heavy tables, stronger connection control, dedicated realtime scaling.

### Stage C — ~500k to 5M MAU
Possible extraction behind existing interfaces: search, chat, recommendation, notification, ingestion, richer read models, ML pipelines. Extract only for measured scaling/contention/reliability/ownership need.

### Stage D — 5M+ / multi-region
Regional app stacks, residency/routing strategy, regional chat/search/recommendation, DB topology from measured write patterns.

Guarantee is no avoidable domain/API rewrite, not immutable physical infrastructure.

## 9. Scale safeguards from day one
UUIDv7; cursor pagination; bounded APIs; proper indexes; no N+1; query budgets; partition-friendly append tables; outbox; resumable backfills; stable canonical aliases; caches/read models replaceable without changing authority; supported-client compatibility measured before breaking changes.

## 10. Rate/abuse quotas
Configuration-driven: event creation/day, joins/minute, chat/minute, uploads/day, report abuse threshold, org member actions, connector concurrency, realtime subscription/message limits. Trust/history may increase limits.
