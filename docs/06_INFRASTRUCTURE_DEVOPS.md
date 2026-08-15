# 06 — Fixed infrastructure, deployment and DevOps

## 1. Fixed topology
Primary cloud: **Google Cloud Platform**. Primary region: **`europe-north1` Finland**. Edge: **Cloudflare**.

Application code is OCI-containerized and Terraform-managed. Physical scaling may evolve without changing domain/API ownership.

## 2. Environments
Separate GCP projects: `meet-dev`, `meet-staging`, `meet-prod`. Production data/secrets are never shared with non-production.

## 3. Edge/origin
Cloudflare: DNS, TLS edge, WAF, bot controls, route-specific rate limits, Turnstile, eligible public CDN caching.

Origin: GCP HTTPS Load Balancer + origin protection/ingress policy so Cloud Run is not trivially bypassed.

## 4. Compute
Cloud Run services:
- `api`
- `realtime`
- `worker-general`

Specialized worker deployments when workload isolation is useful: ingestion, outbox publisher, notifications, moderation/media.

Cloud Run Jobs: recurrence materialization, backfills/maintenance, scheduled import jobs where appropriate.

## 5. PostgreSQL connection budget — fixed baseline
Cloud SQL PostgreSQL 18 + PostGIS, HA production, private networking, PITR/backups.

Initial connection strategy:
- application-level `pg`/Drizzle-compatible pool per Cloud Run instance;
- API pool max default **8** connections/instance;
- realtime pool max default **4** connections/instance;
- general worker pool max default **4** connections/instance;
- specialized worker defaults 2–4 unless measured need;
- Cloud Run max instances are set from a documented DB connection budget, leaving headroom for admin/migrations/maintenance;
- pool acquisition timeout and query timeout are explicit;
- no unbounded pool defaults.

Before changing concurrency/max instances, calculate worst-case connection count and compare to Cloud SQL capacity/headroom.

Managed connection pooling/PgBouncer-like additional layer is **not required at launch**. Introduce only when measured connection pressure justifies it and after compatibility review/ADR if architecture semantics change.

## 6. Valkey
Memorystore for Valkey, private network/HA production. Uses: cache, backend rate counters, short locks, realtime presence/PubSub. Never source of truth.

## 7. Async
Pub/Sub for versioned domain/integration messages, DLQs, idempotent consumers, correlation/causation IDs.
Cloud Tasks for waitlist expiry, reminders, delayed disclosure commands, controlled retries/webhooks.

## 8. Storage/crypto
Cloud Storage: env-separated, quarantine/published media, signed uploads, lifecycle rules, raw ingestion objects where needed.
Secret Manager + Cloud KMS. High-risk fields use application-level envelope encryption when specified.

## 9. Analytics vs operational controls — strict separation
PostHog is for:
- product analytics
- experiments
- non-safety product feature flags

First-party OperationalFlags are for:
- event creation enabled
- private-home publishing enabled
- Pods enabled
- chat image upload enabled
- identity enrollment enabled
- payments/promotions enabled
- individual ingestion connectors enabled
- emergency maintenance/read-only modes where implemented

OperationalFlags:
- source of truth PostgreSQL;
- short cache Valkey;
- auditable Admin changes;
- safe server-side defaults;
- critical safety controls continue to resolve conservatively if PostHog is unavailable.

PostHog must never be the only kill switch for a safety/payment/core operational capability.

## 10. Mobile delivery
Source of truth: `MOBILE_RELEASES.md` and `CLIENT_COMPATIBILITY.md`.
Use EAS Build/Submit and controlled EAS Update for runtime-compatible changes. Backend deployment never assumes immediate app-store adoption.

## 11. Realtime
Source of truth: `REALTIME.md`. Cloud Run/WebSocket connections are disposable; clients reconnect, reauthenticate, resubscribe and recover durable state over REST.

## 12. Terraform
```text
infra/
  modules/
    network/
    cloud-run-service/
    cloud-sql/
    valkey/
    pubsub/
    storage/
    secrets-kms/
    load-balancer/
    monitoring/
  envs/dev/
  envs/staging/
  envs/prod/
```
State: restricted/versioned GCS backend, separate per environment.

## 13. CI/CD
1. install pinned Node/pnpm
2. docs/index/generated checks
3. architecture/design boundary checks
4. lint/typecheck
5. unit/integration/contract tests
6. migration zero→latest + compatibility checks
7. build
8. dependency/container/security scan
9. deploy staging/preview
10. E2E + visual/accessibility where applicable
11. protected production deploy
12. post-deploy smoke checks

GitHub → GCP auth through Workload Identity Federation.

## 14. Deploy/migrations
Immutable Cloud Run revisions, canary/gradual rollout, fast rollback. DB changes use expand → migrate/backfill → contract and remain compatible with old/new revisions and supported mobile clients.

## 15. Local development
Containerized Postgres/PostGIS + Valkey; fake/emulated async, storage, email/push/identity/maps/payment adapters. Production interfaces stay identical.

## 16. Cost controls
Budgets/alerts, Cloud Run max instances, DB connection budget, provider quota metrics, storage lifecycle, log retention/sampling, later cost per successful IRL participation.

## 17. SLO baseline after mature launch
- API availability 99.9%
- ordinary read p95 <300ms where feasible
- ordinary mutation p95 <500ms
- cold feed p95 <700ms
- critical notification enqueue <5s
- source freshness source-specific

## 18. Identity Platform compliance gate
Consumer auth remains Google Cloud Identity Platform, but before public launch legal/privacy review must record:
- data processing terms/DPA
- data location/residency characteristics for used auth features
- phone-auth processing if enabled
- subprocessors/retention/security controls
- deletion/export integration behavior

Do not infer auth-data residency from Cloud Run region alone.

## 19. Incident/kill-switch readiness
SEV1 includes auth/API outage, data integrity, serious security breach, private-address/safety control failure. Operational flags must be usable without redeploy. Quarterly DB restore drill after production launch.
