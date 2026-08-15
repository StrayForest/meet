# RELIABILITY — Product and platform reliability

## Reliability principle
The app may degrade, but it must fail **honestly and safely**. A stale event or incorrect join confirmation can send a person to the wrong place; social correctness matters as much as server uptime.

## Critical journeys
Tier 0:
- authentication/account access;
- event detail truth for imminent events;
- join/cancel/approval state;
- event cancellation/material update delivery;
- private-home address authorization;
- report/block/safety enforcement.

Tier 1:
- feed/search/map;
- chat;
- waitlist/notifications;
- organization event management.

Tier 2:
- analytics;
- recommendations beyond deterministic fallback;
- promotions.

## Availability and latency targets
See `06_INFRASTRUCTURE_DEVOPS.md`. SLOs are measured per journey, not only global HTTP uptime.

## Data correctness invariants
- no double booking of final capacity slot;
- idempotent join/payment/webhook/message side effects;
- cancelled event cannot appear as joinable;
- source update cannot resurrect safety-removed event;
- unauthorized client never receives private exact address;
- block/restriction is enforced on every communication path;
- async duplicate delivery is safe.

## Degraded modes
- Recommendation unavailable → deterministic nearby/time ranker.
- Valkey unavailable → correctness from PostgreSQL; non-critical cache/realtime features degrade.
- PostHog/BigQuery unavailable → user flow continues.
- identity provider unavailable → new verification blocked; existing valid verification remains readable.
- one event source unavailable → keep last-known event with freshness metadata; do not fabricate updates.

## Operational requirements
- request/correlation IDs;
- OTel traces;
- structured logs without PII;
- Sentry release correlation;
- queue age/backlog alerts;
- source freshness dashboards;
- DB restore drills;
- feature kill switches.

## Reliability review
Every launch-critical product spec includes failure behavior. Every SEV incident updates either docs, tests, tooling or architecture guardrails.