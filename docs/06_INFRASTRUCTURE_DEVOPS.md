# 06 — Infrastructure, deployment and DevOps — Architecture 1.3

## Fixed topology
GCP primary `europe-north1` Finland; Cloudflare edge; preferred DR region `europe-north2` Stockholm. OCI containers + Terraform.

## Environments
Separate meet-dev / meet-staging / meet-prod projects and data/secrets.

## Edge/origin
Cloudflare DNS/WAF/bot/rate limiting/Turnstile/CDN → GCP External Application Load Balancer → Cloud Run.

Cloud Run public services use `internal-and-cloud-load-balancing` ingress and default `run.app` public endpoint is disabled where integration compatibility is confirmed. Exact Cloudflare→LB origin authentication and fallback are defined in `ORIGIN_SECURITY.md`.

## Compute/data
Cloud Run api/realtime/workers/jobs; Cloud SQL PostgreSQL/PostGIS HA; Memorystore Valkey; Pub/Sub + Cloud Tasks; Cloud Storage; Secret Manager/KMS; Artifact Registry; BigQuery.

## DB connection budget
Bounded pools: API default max 8/instance; realtime ~4; workers 2–4. Cloud Run max instances derive from DB connection headroom. No unbounded pool. Additional managed pool introduced only on evidence.

## Operational controls
PostHog = analytics/experiments. OperationalFlags = first-party DB state cached in Valkey, versioned/audited. Safety-critical re-enable can require two-person approval.

## CI/CD and supply chain
Follow `SUPPLY_CHAIN_SECURITY.md` and `REPOSITORY_GOVERNANCE.md`: pinned actions, least permissions, WIF, deterministic lockfile, scans, SBOM/provenance where supported, immutable image digest, protected promotion.

## Deploy/migrations
Cloud Run immutable revisions/canary/rollback. DB expand→backfill→contract and old/new client/revision compatibility. Schema governance in `SCHEMA_GOVERNANCE.md`.

## Reliability
SLIs/error budgets in `SLO_SLI_ERROR_BUDGETS.md`; DR in `DISASTER_RECOVERY.md`; workload/cost triggers in `CAPACITY_AND_COST_MODEL.md`. Scaling decisions are not based on MAU thresholds.

## Cryptography/audit
Sensitive field encryption follows `CRYPTOGRAPHY_KEY_MANAGEMENT.md`. Privileged audit follows `AUDIT_LOGGING.md`.

## Mobile
EAS lifecycle + client compatibility + store privacy compliance remain release gates.
