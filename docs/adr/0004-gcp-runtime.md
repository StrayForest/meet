# ADR-0004 — GCP Finland runtime, Stockholm DR path and explicit origin control

Status: ACCEPTED
Date: 2026-08-16
Owner: Platform architecture

## Context
Meet is Finland-first, handles personal/safety-sensitive data and needs a production path that is operable by a small team. Infrastructure must preserve an EU/EEA recovery path without forcing premature multi-region complexity.

## Decision
Production preference is GCP `europe-north1` with Cloud Run, Cloud SQL/PostgreSQL/PostGIS, Cloud Storage, Secret Manager/KMS and Terraform as required by active product scope. Cloudflare is the public edge. Cloud Run public services use restricted ingress/default URL behavior where integration compatibility permits; Cloudflare → GCP load-balancer origin controls follow `ORIGIN_SECURITY.md`.

`europe-north2` Stockholm is the preferred recovery region. Valkey/Memorystore, Pub/Sub, Cloud Tasks, BigQuery and continuously replicated Stockholm infrastructure are activation-gated capabilities, not mandatory pre-PMF deployments.

## Alternatives
- AWS/Azure: viable, but rejected to keep one cloud control plane and the selected Finland-region deployment preference.
- Kubernetes/GKE: rejected before workloads/ownership require cluster-level control.
- Active-active multi-region from launch: rejected because it creates consistency/operations cost before RTO/RPO/business need is measured.
- Direct public Cloud Run endpoint behind DNS only: rejected because edge/origin policy would be bypassable.

## Compatibility impact
Infrastructure modules must allow dev/staging/prod isolation and future recovery without embedding provider-specific details into domain contracts. Provider outages must not weaken authorization/safety gates.

## Migration
P0 creates the minimal Terraform/primary deployment skeleton. Add each managed optional service only when an implementation task names its measured reliability/workload reason and rollback path.

## Rollback
Cloud Run revisions are immutable/rollbackable. Terraform changes are reviewed and reversible where provider semantics allow. Database migrations follow expand/backfill/contract rather than infrastructure rollback assumptions. Optional managed services must retain a path back to authoritative PostgreSQL or simpler execution when feasible.

## Validation
Origin-bypass tests, least-privilege/WIF checks, restore drill, primary-region recreation evidence and cost/connection budgets are required at the applicable maturity stage. Activation of Stockholm continuous recovery is validated against achieved—not merely documented—RPO/RTO.

## Approval
Existing Architecture 1.3 ACCEPTED decision retained. Cloud/provider change, active-active topology, mandatory optional service activation or origin-security model change requires a superseding accepted ADR.
