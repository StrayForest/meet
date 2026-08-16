# CLIENT_COMPATIBILITY — Mobile/API compatibility contract

## Principle
Web deploys with backend; mobile does not. The backend must assume supported mobile clients can be weeks/months behind latest production binary.

## 1. Version policy
Track per platform:
- `minimum_supported_version`
- `recommended_version`
- `latest_known_version`
- `minimum_runtime_version` where relevant
- `force_update` + reason/effective time

Routine feature rollout must not require immediate force update.

## 2. Compatibility window
Default engineering target: maintain API compatibility for at least the currently supported store major/minor range and no less than 90 days after a client version is superseded, unless security/platform constraints require shorter support.

Before dropping compatibility:
1. measure active-version distribution;
2. ensure replacement binary is available in stores;
3. notify/soft-prompt users;
4. set minimum supported version only after documented review;
5. retain rollback path.

Exact window is operational policy and may be extended; shortening it is a release decision, not an incidental API refactor.

## 3. Capability negotiation
Prefer additive capability flags for behavior differences rather than parsing versions throughout business code.

Active capability names should exist only for features actually implemented or entering controlled rollout. Examples for current-scope mechanics may include:
- `event_admission_v2`
- `waitlist_offer_v1`
- `realtime_cursor_v1`

Names such as `private_home_v1`, persistent-connections capabilities or generic `pods_v1` are **reserved examples only** until their evidence/ADR gates explicitly activate those products. Do not add them to bootstrap responses, client code or rollout logic preemptively.

Client sends supported capabilities; server bootstrap returns only capabilities relevant to active/supported behavior.

## 4. API evolution rules
- Add fields/endpoints/state values compatibly where old clients can ignore them.
- Never repurpose existing enum meaning silently.
- Breaking semantics require a new field/version/capability or API version.
- Unknown enum values must degrade safely in generated/client decoding strategy where applicable.
- Removal follows measured deprecation period.

## 5. High-impact action revalidation
Before actions where stale data can cause physical harm/confusion, client must use current server truth for active features:
- join/approval/waitlist acceptance
- event cancellation/material time/location change
- ticket/action link when source freshness is questionable
- check-in/attendance confirmation where implemented

If PRIVATE_HOME is later activated, exact-address retrieval is added to this list and receives its own compatibility/security contract before rollout.

Push/WebSocket never override REST/server authoritative state.

## 6. Offline/stale UI
Cached discovery is permitted for browsing.
A stale card/detail must:
- carry last-updated/freshness internally;
- refresh opportunistically;
- show a clear error/degraded state if critical truth cannot be verified;
- never claim a successful join/cancellation until server confirms durable mutation.

## 7. Client bootstrap endpoint
`GET /v1/client/bootstrap` is cacheable only for a short controlled TTL and returns:
- version policy
- active capability policy
- maintenance/degraded state
- public operational availability
- country/localization bootstrap

## 8. Server telemetry
Measure:
- requests by platform/version/runtime
- active users by version
- failures by capability/version
- force-update/upgrade funnel
- deprecated endpoint usage

This data is required before removing compatibility.

## 9. Contract tests
CI/test matrix includes at least:
- latest client contract
- minimum supported client contract/fixtures
- one version transition scenario when API semantics evolve

## 10. Emergency incompatibility
Security/safety incident may force update. Document reason, affected versions, store availability, fallback/kill-switch behavior and support communication.
