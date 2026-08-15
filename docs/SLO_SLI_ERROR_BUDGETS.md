# SLO_SLI_ERROR_BUDGETS — User-journey reliability

## Principle
HTTP uptime alone is not product reliability. Meet can be 'up' while sending a user to a cancelled event or assigning the final slot twice.

## Tier-0 SLIs
1. **Join correctness**: valid join/approval/waitlist-accept commands resulting in correct durable outcome / valid attempts.
2. **Imminent event truth**: authoritative imminent event detail reads returning current time/location/cancellation version / eligible reads.
3. **Cancellation propagation**: material cancellations/changes durably visible to affected users within target window.
4. **Private-location authorization correctness**: unauthorized exact-location disclosures must be zero; authorized retrieval availability measured separately.
5. **Safety control availability**: report/block/critical OperationalFlag commands succeed within target.
6. **Durable chat send**: accepted message mutations persisted once and recoverable even if realtime delivery fails.

## Initial SLO targets after mature launch
- Tier-0 mutation availability: 99.9% monthly unless stricter safety invariant applies.
- Private-location unauthorized disclosure: 0 tolerated; any confirmed leak = SEV1.
- Ordinary API availability: 99.9% monthly.
- Read latency p95 <300 ms for ordinary API; mutation p95 <500 ms where feasible.
- Cold feed p95 <700 ms target.
- Critical notification enqueue <5 s target; delivery-provider latency reported separately.

## Error budgets
For a 99.9% monthly SLO, budget is approximately 0.1% failed eligible events. Track burn rate over short and long windows.

Policy:
- sustained fast burn → page/on-call and halt risky rollout;
- exhausted Tier-0 budget → reliability work takes priority over non-critical launch features;
- SEV1 safety/data-integrity incident → deploy freeze except mitigation/recovery until owner clears it;
- SLO changes require evidence, not target gaming.

## Measurement rules
Exclude clearly invalid/unauthorized requests from denominator but do not exclude server mistakes. Define queries/dashboards as code where possible. Monitor by country/client version/provider so aggregate health does not hide localized failure.
