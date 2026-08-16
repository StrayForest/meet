# ADR-0007 — Reliability, error budgets and DR are business-impact driven

Status: ACCEPTED
Date: 2026-08-16
Owner: Reliability/platform architecture

## Context
HTTP uptime alone does not represent Meet reliability: the service may answer requests while assigning capacity incorrectly, showing stale cancellation/location truth or making safety controls unavailable. Regional DR also has real cost and complexity.

## Decision
Use user-journey/data-integrity SLIs and error budgets. Tier-0 includes join correctness, imminent-event truth, cancellation propagation, safety controls and durable chat when activated. Reliability work takes priority when the applicable error budget is exhausted or a safety/data-integrity SEV requires it.

Primary deployment is Finland; Stockholm is the preferred regional recovery path. Launch baseline is HA/PITR/backups, reproducible stateless infrastructure and tested restore. Continuous cross-region replication/warm standby is activated when measured RTO/RPO, safety or business impact requires it. Mature target is RPO ≤5 minutes / RTO ≤60 minutes once the corresponding recovery tier is actually activated and demonstrated.

## Alternatives
- Measure only HTTP availability: rejected because it hides correctness/staleness failures.
- Active-active from launch: rejected due to consistency/operational cost without evidence.
- No regional recovery design until an outage: rejected because recovery seams and backup/restore discipline need early design.
- Scale architecture by MAU/valuation thresholds: rejected because workload and failure impact are the relevant signals.

## Compatibility impact
Critical product commands need observable correctness and explicit degraded modes. Infrastructure changes must report SLI/error-budget impact; provider outages cannot relax authorization/safety invariants.

## Migration
Implement observability and restore evidence proportional to each phase. Add continuous Stockholm recovery only through an implementation plan with measured target, cost and failover procedure.

## Rollback
Application revisions roll back normally; bad database migrations follow the migration recovery contract. DR activation can be stepped back only if the current documented/achieved business RTO/RPO remains acceptable.

## Validation
Dashboards/queries define denominators explicitly, restore drills record achieved RPO/RTO, degraded-mode tests preserve Tier-0 invariants, and load/capacity tests drive scaling changes. Targets are changed only with evidence, never to make a failing system appear healthy.

## Approval
Existing Architecture 1.3 ACCEPTED decision retained. Active-active topology, weaker safety/data-integrity SLO semantics or materially different recovery strategy requires a superseding accepted ADR.
