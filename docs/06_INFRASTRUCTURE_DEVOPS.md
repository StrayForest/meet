# 06 — Fixed infrastructure, deployment and DevOps

## 1. Fixed cloud topology

Primary cloud: **Google Cloud Platform**
Primary region: **`europe-north1` Finland**
Edge: **Cloudflare**

Application code is OCI-containerized and Terraform-managed. Physical scaling may evolve, but domain/API/data ownership must not require an application rewrite.

## 2. Environment isolation

Separate GCP projects:
- `irl-dev`
- `irl-staging`
- `irl-prod`

Never share production DB/cache/secrets with non-production.

## 3. Edge

Cloudflare:
- DNS;
- TLS edge;
- WAF;
- bot controls;
- route-specific rate limits;
- Turnstile;
- eligible public CDN caching.

## 4. Origin/load balancing

- GCP external HTTPS Load Balancer;
- origin access/protection strategy so Cloud Run is not trivially bypassed;
- Cloud Run ingress configured to intended load-balancer path;
- Cloud Armor/origin policy as appropriate.

## 5. Compute

Cloud Run services:
- `api`;
- `realtime` (may initially share codebase/artifact but separately scalable target when useful);
- `worker-general`;
- later specialized worker deployments without domain rewrite:
  - ingestion;
  - outbox publisher;
  - notifications;
  - moderation/media.

Cloud Run Jobs:
- recurrence materialization;
- resumable maintenance/backfills;
- scheduled source syncs where appropriate.

## 6. PostgreSQL

Cloud SQL PostgreSQL 18 + PostGIS:
- HA production configuration;
- private networking;
- PITR/backups;
- query monitoring;
- controlled connections;
- connection pooling strategy suitable for Cloud Run concurrency.

## 7. Valkey

Memorystore for Valkey:
- private network;
- HA in production;
- cache;
- rate-limit counters where backend-side;
- short-lived locks;
- WebSocket presence;
- Pub/Sub fan-out.

Never source of truth.

## 8. Async

Pub/Sub:
- versioned domain/integration messages;
- DLQs;
- idempotent consumers;
- correlation/causation IDs.

Cloud Tasks:
- waitlist offer expiry;
- reminders;
- controlled delayed/retry operations;
- private-address disclosure scheduling if implemented as delayed command;
- webhooks requiring controlled retry.

## 9. Storage

Cloud Storage:
- environment-separated buckets;
- quarantine/published media separation;
- signed uploads;
- lifecycle rules;
- immutable/raw ingestion objects where used;
- public derivatives through appropriate CDN/cache.

## 10. Secrets/crypto

- Secret Manager;
- Cloud KMS;
- application-level encryption only for selected high-risk fields;
- least-privilege service accounts.

## 11. Artifact registry

All production deploys reference immutable container digest/revision.

## 12. Analytics/observability

- PostHog for product analytics/feature flags/experiments;
- BigQuery warehouse;
- OpenTelemetry traces/metrics/log correlation;
- Sentry client/server errors and release health.

## 13. Terraform structure

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
  envs/
    dev/
    staging/
    prod/
```

Terraform state:
- GCS backend;
- versioning;
- restricted IAM;
- separate state per environment.

## 14. CI/CD

GitHub Actions pipeline:
1. install pinned Node/pnpm;
2. lint;
3. typecheck;
4. unit tests;
5. integration tests;
6. OpenAPI/contract validation;
7. migration validation;
8. build;
9. container build;
10. dependency/container/security scan;
11. deploy preview/staging;
12. E2E;
13. protected production deploy;
14. post-deploy smoke checks.

GitHub → GCP auth via Workload Identity Federation.

## 15. Deployment strategy

Cloud Run revisions:
- immutable builds;
- canary/gradual traffic for high-risk changes;
- fast rollback;
- feature flags for risky product behavior.

DB migration must remain compatible with old and new revision during rollout.

## 16. Local development

Local containerized dependencies:
- PostgreSQL 18 + PostGIS;
- Valkey;
- async test adapter/emulator;
- local/fake object storage adapter;
- fake notification/email/identity providers.

Production service interfaces remain identical.

## 17. Cost controls

- GCP budgets/alerts;
- initial Cloud Run max instances;
- external API quota metrics;
- storage lifecycle;
- log retention/sampling;
- cost per successful IRL participation dashboard later.

Do not remove safety/reliability controls solely to reduce cost.

## 18. SLO baseline after mature launch

- API availability: 99.9%;
- ordinary core read p95 target <300ms when not dependent on third party;
- ordinary core mutation p95 target <500ms;
- cold feed p95 target <700ms;
- critical notification enqueue <5s;
- source freshness source-specific.

These are targets to measure/tune, not promises before real load data.

## 19. Operational kill switches

Feature flags/ops controls for:
- event creation;
- private-home publishing;
- Pods;
- chat images;
- identity enrollment;
- payments/promotions;
- each external event source.

Kill switch must not require redeployment.

## 20. Incident priorities

SEV1:
- broad auth/API outage;
- data integrity issue;
- serious active security breach;
- safety system unavailable.

SEV2:
- major city discovery outage;
- safety/notification queue backlog;
- DB/cache severe degradation;
- major event source outage.

Quarterly DB restore drill required after production launch.
