# ADR-0004 — GCP Finland, Cloud Run and first-party operational controls

Status: ACCEPTED

## Context
Meet launches in Finland/Nordics, needs managed infrastructure, low operations overhead and a clean path from small traffic to large regional scale.

## Decision
- GCP primary region `europe-north1`.
- Cloud Run for API/realtime/workers, Cloud SQL PostgreSQL, Memorystore Valkey, Pub/Sub/Cloud Tasks, Cloud Storage, Secret Manager/KMS, BigQuery.
- Cloudflare is edge/WAF/rate-limit/Turnstile layer.
- Terraform manages infrastructure.
- Initial DB pools are deliberately small and Cloud Run max instances respect explicit connection budget.
- PostHog experiments are separate from first-party operational/safety flags stored in PostgreSQL and cached in Valkey.

## Alternatives considered
- Cheapest VPS/self-managed stack: rejected for this safety-sensitive consumer product because managed HA/backups/identity/networking reduce operational risk as the system grows.
- AWS/Azure: viable, but GCP Finland/serverless/data combination is selected for launch.
- PostHog as universal kill-switch authority: rejected because safety/core availability must not depend on analytics SaaS.

## Consequences
Positive: low platform-ops burden, Finland region, managed scaling/backups/queues.
Cost: cloud/vendor cost and provider-specific infrastructure; OCI/domain/provider boundaries preserve migration options.
