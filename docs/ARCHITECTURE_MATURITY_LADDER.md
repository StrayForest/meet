# Architecture Maturity Ladder — Architecture 1.3

Scale infrastructure by measured workload, safety and ownership pressure; never by valuation theatre or MAU alone.

## Stage A — pre-launch
Cloud Run modular monolith/workers, Cloud SQL HA/PITR, Valkey, Pub/Sub/Tasks, single Finland primary, reproducible Terraform, restore drills, basic regional recovery path.

## Stage B — Finland scale
Tune read models/indexes/caching, activate stronger cross-region DB recovery when RTO/RPO require it, isolate hot queues/workloads, formalize on-call/error budgets and cost-per-successful-participation dashboards.

## Stage C — Nordic scale
Country configuration/connectors, measured workload extraction, stronger regional failover, localization/compliance operations and ownership boundaries where team topology requires them.

## Stage D — EU scale
Regional data/residency controls where legally/product-required, multi-region traffic only where measured reliability/latency justify it, independently scaled services only for proven bottlenecks or ownership isolation.

Promotion between stages requires evidence from `CAPACITY_AND_COST_MODEL.md`, SLO/error budgets, DR drills and team ownership. No stage is a mandatory architecture rewrite.
