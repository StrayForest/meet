# CAPACITY_AND_COST_MODEL — Scale by workload, not MAU

MAU is a business metric, not a capacity trigger.

## Capacity dimensions
Track and forecast:
- API peak/steady RPS by route class;
- join/approval/waitlist writes per second and contention per occurrence;
- concurrent WebSockets, subscriptions and messages/sec;
- feed/map/PostGIS QPS and rows scanned;
- DB CPU, memory, storage, IOPS, connections, replication lag;
- raw event records/day and connector bursts;
- queue oldest-age/backlog and tasks/min;
- notifications/min and provider quotas;
- media uploads/GB/day and CDN egress;
- analytics events/day and BigQuery bytes scanned;
- cache memory/hit rate;
- cost per successful IRL participation and per active city.

## Extraction triggers
A module may be separately deployed/extracted only when evidence shows at least one:
- independent scaling dominates shared runtime;
- failure isolation materially improves Tier-0 reliability;
- deployment/ownership cadence is independently constrained;
- DB/resource contention cannot be resolved economically inside current boundary.

No extraction based only on MAU threshold.

## Load profiles
Maintain repeatable load scenarios for:
- city evening discovery peak;
- popular-event final-slot join storm;
- mass event cancellation notification fanout;
- major ticket-event ingestion burst;
- reconnect storm after realtime deploy/network interruption;
- moderation/report spike.

## Cost governance
Budgets and unit-cost dashboards are required before paid growth. Provider cost changes must be evaluated against successful IRL participation, not raw requests alone.
