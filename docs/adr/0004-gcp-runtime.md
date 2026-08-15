# ADR-0004 — GCP Finland runtime, Stockholm DR path and explicit origin control
Status: ACCEPTED

Primary `europe-north1`; preferred recovery `europe-north2`; Cloud Run, Cloud SQL/PostGIS, Valkey, Pub/Sub/Tasks, Storage, KMS/Secret Manager, BigQuery; Cloudflare edge; Terraform.

Cloud Run public bypass is restricted (`internal-and-cloud-load-balancing`, default URL disabled where compatible). Cloudflare→GCP LB origin authentication/restriction follows `ORIGIN_SECURITY.md`.

DR maturity and capacity are driven by RTO/RPO/business/workload evidence, not MAU.
