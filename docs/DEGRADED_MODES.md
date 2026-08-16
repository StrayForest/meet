# Degraded Modes — Architecture 1.3

The product must fail selectively. Non-critical dependency loss must not unnecessarily disable Tier-0 journeys.

| Failure | Required behavior |
|---|---|
| PostHog unavailable | product remains usable; analytics buffered/dropped per policy; no OperationalFlag impact |
| Recommendation/ranker unavailable | deterministic basic/chronological discovery fallback |
| Valkey unavailable | bounded DB-backed or feature-degraded behavior; no safety/auth bypass |
| Realtime unavailable | persisted chat remains authoritative; reconnect/polling fallback where supported |
| Push provider unavailable | in-app state remains authoritative; queued retry within notification policy |
| Event ingestion unavailable | existing authoritative events remain; freshness health degrades visibly to ops |
| Map/geocoding provider unavailable | list/detail still works; map/address enrichment degrades |
| Identity provider unavailable | existing verification status remains; new high-risk verification is delayed, never bypassed |
| Payment provider unavailable | free journeys remain; paid mutation fails closed without double charge |
| AI moderation unavailable | human/rules workflow remains; no irreversible moderation dependency on AI |

## Rules
- Each external dependency has timeout, retry, circuit-breaker/fallback and alert ownership defined by `EXTERNAL_DEPENDENCY_POLICY.md`.
- Degraded mode must preserve authorization, privacy and data-integrity invariants.
- Safety-critical uncertainty fails closed when disclosure/action would create material harm.
- Recovery from degradation is tested; queued replay must be duplicate-safe.
