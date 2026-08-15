# 07 — Analytics, i18n, country expansion and scaling

## 1. Analytics stack

PostHog:
- product events;
- funnels;
- cohorts;
- retention;
- feature flags;
- experiments.

BigQuery:
- long-term warehouse;
- marketplace analysis;
- growth/safety/finance reporting;
- ML datasets later.

Server-side events are authoritative for completed mutations.

## 2. Canonical analytics naming

`<surface>.<entity>.<action>`

Examples:
- `mobile.event.impression`
- `mobile.event.opened`
- `server.participation.joined`
- `server.participation.cancelled`
- `server.attendance.checked_in`
- `server.pod.created`
- `server.connection.created`
- `server.report.created`
- `b2b.event.published`

## 3. Required analytics context

Where lawful and necessary:
- pseudonymous user/session ID;
- app/version;
- country/city coarse context;
- event/occurrence/source type;
- experiment assignment;
- correlation ID;
- timestamp.

Never send raw DOB, exact private address, identity documents, access tokens or message bodies.

## 4. Dashboards

### Marketplace
- active event supply;
- join conversion;
- fill rate;
- show-up;
- waitlist utilization;
- time to first join;
- repeat participation.

### Supply
- imported vs organization vs community;
- source freshness;
- cancellations;
- coverage by city/category/day.

### Trust
- reports / 10k participations;
- severe incidents;
- no-show rate;
- moderation SLA;
- appeals/overturn rate.

### Growth
- activation;
- D1/D7/D30;
- referrals;
- city liquidity;
- organization acquisition.

## 5. Launch localization

Locales:
- fi
- en
- ru

UI uses stable translation keys.

Event translation stores:
- locale;
- title;
- description;
- source locale;
- translation source: ORIGINAL / ORGANIZER / MACHINE / HUMAN;
- updated timestamp.

Machine translations are visibly labeled.

## 6. Time/local scheduling

- persisted absolute timestamps are UTC;
- event occurrence stores IANA timezone;
- recurrence is interpreted in local event timezone;
- display follows user/event context;
- DST behavior covered by tests.

## 7. Country configuration

Central config/domain data defines:
- country code;
- supported locales;
- currency;
- timezone defaults;
- age policy;
- identity providers;
- event-source connectors;
- payment availability;
- legal document versions;
- private-home policy;
- moderation policy configuration;
- feature flags.

Do not scatter `if country === 'FI'` through domain code.

## 8. Expansion checklist

For every new country:
1. legal/privacy/local platform review;
2. country config;
3. identity/age verification support;
4. event source/license support;
5. localization;
6. payment/tax readiness if monetized;
7. moderation/support coverage;
8. city activation plan;
9. analytics dashboard;
10. incident/safety wording.

Nordic hypothesis:
- Sweden;
- Norway;
- Denmark;
then broader EU/EEA based on market size, social need, event data, competition, CAC and regulatory cost.

## 9. Scaling stages

### Stage A — launch to ~50k MAU
- Cloud Run API/realtime/workers;
- one HA Cloud SQL primary;
- Valkey;
- Pub/Sub/Tasks;
- Postgres FTS/PostGIS;
- Cloud Storage.

### Stage B — ~50k to 500k MAU
- read replicas where measured;
- dedicated worker deployments;
- cache hot projections;
- partition append-heavy tables where needed;
- stronger DB pooling/connection control;
- dedicated realtime service scaling.

### Stage C — ~500k to 5M MAU
Possible extractions behind existing interfaces:
- search index/service;
- Chat service;
- Recommendation service;
- Notification service;
- Ingestion service;
- richer read models;
- ML pipelines.

Extraction criteria:
- independent scaling need;
- measurable contention;
- reliability isolation;
- independent deployment/ownership need.

### Stage D — 5M+ / multi-region
- regional application stacks;
- data-residency/routing strategy;
- regional chat/search/recommendation;
- database topology reviewed from measured write patterns.

No credible architecture can promise immutable physical infrastructure at global scale. The guarantee is no avoidable domain/API rewrite.

## 10. Scale safeguards from day one

- UUIDv7;
- cursor pagination;
- bounded APIs;
- proper indexes;
- no N+1;
- query budgets;
- partition-friendly append tables;
- transactional outbox;
- resumable backfills;
- caches/materialized read models can be replaced without changing authority.

## 11. Rate/abuse quotas

Configuration-driven initial quotas:
- event creation/day;
- joins/minute;
- chat messages/minute;
- image uploads/day;
- reports/day abuse threshold;
- organization member actions;
- connector concurrency.

Trust/account history can increase limits.
