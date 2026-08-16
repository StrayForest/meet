# 03 — API contracts and state machines — Architecture 1.3

## API
REST JSON `/v1`, OpenAPI in CI, generated clients, Problem Details stable codes, cursor pagination. Backward compatibility follows `CLIENT_COMPATIBILITY.md`.

## Client bootstrap
`GET /v1/client/bootstrap`: min/recommended/latest versions, runtime/capabilities, maintenance/degraded state, public feature availability and country/localization bootstrap. Feature/capability presence must not be interpreted as permission to expose evidence-gated product scope.

## Event DTOs
Event returns stable identity/series data. Occurrence DTO returns concrete physical start/end/timezone, public location label/coarse geography, admission, Meet participation, waitlist/capacity and version. It never contains an exact private-home payload.

`EventOccurrenceTemplate` is primarily host/organization management data; materialized occurrence is public participation truth.

## Event endpoints
GET/POST/PATCH Event, publish/cancel, list occurrences; occurrence detail/override/cancel. Alias IDs resolve centrally to canonical identity.

Consumer V1 create/discovery policy accepts PUBLIC_VENUE/OUTDOOR only. PRIVATE_HOME representation may remain in domain/schema contracts for future compatibility but normal V1 API policy must reject or hide user-facing creation/discovery unless an accepted future gate explicitly enables it.

## Participation
Join/leave, approval, participant list, waitlist/offer accept/decline, lightweight attendance/check-in evidence where enabled. ParticipationMode = OPEN|APPROVAL_REQUIRED|INVITE_ONLY|DISABLED. External tickets never become participation state.

## Company finding / occurrence chat
The internal domain may retain `Pod` state/object names for compatibility, but public consumer API/client copy maps the concept to company-finding/group coordination for one EventOccurrence. It never carries ticket ownership/admission semantics.

Internal group state: DRAFT, OPEN, FULL, CLOSED, CANCELLED, COMPLETED, REMOVED.

Persistent connection/DM endpoints are Phase 7B/H7 evidence-gated. Domain/schema support does not require V1 routes to be publicly enabled.

## Safety/private location — future-gated
If PRIVATE_HOME is later enabled, a dedicated exact-location endpoint must revalidate current occurrence, approved/confirmed participation, verification, disclosure policy/window and block/safety state on every access. **This endpoint is not a normal consumer V1 capability.** Generic event/feed/map/participant DTOs never include exact private location.

## Idempotency
Retry-prone mutations accept Idempotency-Key; same actor_scope+operation+key with different request hash conflicts.

## State machines
Event: DRAFT, PENDING_REVIEW, PUBLISHED, CANCELLED, COMPLETED, REMOVED, ARCHIVED.
Occurrence: SCHEDULED, JOIN_CLOSED, CANCELLED, COMPLETED, REMOVED.
Participation: REQUESTED, WAITLISTED, SLOT_OFFERED, CONFIRMED, REJECTED, EXPIRED, CANCELLED_BY_USER, REMOVED_BY_HOST, ATTENDED, NO_SHOW.
Company-finding group/internal Pod: DRAFT, OPEN, FULL, CLOSED, CANCELLED, COMPLETED, REMOVED.

## Async
Domain events are not implied by HTTP DTOs; durable event contracts follow `EVENT_CONTRACTS.md`. Managed transports are activated only when the current implementation/reliability need justifies them.

## Scope authority
For pre-PMF endpoint exposure, `validation/MVP_BOUNDARY.md` and `business/PMF_HYPOTHESES.md` override mere schema/domain capability.