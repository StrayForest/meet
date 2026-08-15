# 03 — API contracts and state machines — Architecture 1.3

## API
REST JSON `/v1`, OpenAPI in CI, generated clients, Problem Details stable codes, cursor pagination. Backward compatibility follows `CLIENT_COMPATIBILITY.md`.

## Client bootstrap
`GET /v1/client/bootstrap`: min/recommended/latest versions, runtime/capabilities, maintenance/degraded state, public feature availability and country/localization bootstrap.

## Event DTOs
Event returns stable identity/series data. Occurrence DTO returns concrete physical start/end/timezone, public location label/coarse geography, admission, social participation, waitlist/capacity and version. It never contains exact private-home payload.

`EventOccurrenceTemplate` is primarily host/organization management data; materialized occurrence is public participation truth.

## Event endpoints
GET/POST/PATCH Event, publish/cancel, list occurrences; occurrence detail/override/cancel. Alias IDs resolve centrally to canonical identity.

## Participation
Join/leave, approval, participant list, waitlist/offer accept/decline, check-in. ParticipationMode = OPEN|APPROVAL_REQUIRED|INVITE_ONLY|DISABLED. External tickets never become participation state.

## Safety/private location
Dedicated exact-location endpoint revalidates current occurrence, confirmed/approved participation, verification and disclosure window every access.

## Idempotency
Retry-prone mutations accept Idempotency-Key; same actor_scope+operation+key with different request hash conflicts.

## State machines
Event: DRAFT, PENDING_REVIEW, PUBLISHED, CANCELLED, COMPLETED, REMOVED, ARCHIVED.
Occurrence: SCHEDULED, JOIN_CLOSED, CANCELLED, COMPLETED, REMOVED.
Participation: REQUESTED, WAITLISTED, SLOT_OFFERED, CONFIRMED, REJECTED, EXPIRED, CANCELLED_BY_USER, REMOVED_BY_HOST, ATTENDED, NO_SHOW.
Pod: DRAFT, OPEN, FULL, CLOSED, CANCELLED, COMPLETED, REMOVED.

## Async
Domain events are not implied by HTTP DTOs; durable event contracts follow `EVENT_CONTRACTS.md`.
