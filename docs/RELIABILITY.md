# RELIABILITY — Product and platform reliability

Meet may degrade, but it must fail honestly and safely.

## Tier 0
Auth/account access; imminent occurrence truth; join/cancel/approval/waitlist; cancellation/material update; private exact-location authorization; report/block; operational safety controls.

## Invariants
Final slot once; admission != participation; cancelled occurrence not joinable; safety removal not resurrected by ingestion; alias/deep-link preserved; no unauthorized private location; block/restriction enforced; async duplicates safe; old supported client semantics safe.

## Degraded modes
Recommendation→deterministic; Valkey outage→Postgres correctness with cache/realtime degradation; analytics outage→core continues; identity outage→new verification blocked; source outage→freshness policy; realtime outage→REST recovery.

## Formal reliability
Source of truth for SLIs/error budgets: `SLO_SLI_ERROR_BUDGETS.md`. DR: `DISASTER_RECOVERY.md`. Capacity: `CAPACITY_AND_COST_MODEL.md`.

Reliability decisions and service extraction are driven by measured workload/failure impact, not MAU.
