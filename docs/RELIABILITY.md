# RELIABILITY — Product and platform reliability

## Principle
Meet may degrade, but it must fail honestly and safely. Incorrect time/location/join state can send a person to the wrong physical place; social correctness is as important as HTTP uptime.

## Tier 0 journeys
- authentication/account access
- imminent event detail truth
- join/cancel/approval/waitlist acceptance
- event cancellation/material update
- exact private-home address authorization
- report/block/safety enforcement
- operational safety kill switches

Tier 1: feed/search/map, chat, notifications, organization event management.
Tier 2: analytics, advanced recommendations, promotions.

## Data correctness invariants
- final social capacity slot assigned once
- external ticket/admission state never conflated with Meet participation state
- cancelled/removed occurrence never joinable
- source update cannot resurrect safety-removed canonical event
- dedupe merge preserves stable aliases/deep links/provenance
- unauthorized actor never receives private exact location
- block/restriction enforced on every communication path
- duplicate async delivery is safe
- old supported mobile client receives compatible semantics

## Event truth/freshness
Discovery may use cached/read-model data. High-impact/imminent actions revalidate authoritative occurrence state.

If source freshness is degraded:
- keep last-known event only when policy allows;
- expose internal freshness/degraded signal to UI logic;
- never invent cancellation/confirmation;
- external ticket CTA may be withheld/marked unavailable when current truth cannot be trusted.

Push/WebSocket are not authoritative. Missing push does not erase durable cancellation/update in app.

## Degraded modes
- recommendation unavailable → deterministic ranker
- Valkey unavailable → PostgreSQL correctness; cache/realtime degrade
- PostHog/BigQuery unavailable → user flow continues; operational safety flags remain first-party
- identity provider unavailable → new verification blocked; existing valid verification remains readable
- event source unavailable → last-known records governed by freshness policy
- realtime unavailable → REST refresh/polling paths preserve durable state

## Mobile compatibility
Backend monitors active app versions/capabilities and supports the compatibility policy in `CLIENT_COMPATIBILITY.md`. A backend release is not reliable if it only works with unreleased/latest mobile code.

## Operational requirements
- request/correlation IDs
- OTel traces
- structured logs without PII
- Sentry release correlation
- queue age/backlog alerts
- source freshness dashboards
- DB connection saturation alerts
- DB restore drills
- feature kill switches
- client-version distribution dashboard

## Reliability review
Every launch-critical spec includes failure behavior. Every SEV incident adds/updates a test, runbook, tooling guardrail or architecture decision.
