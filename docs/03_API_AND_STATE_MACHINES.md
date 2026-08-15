# 03 — API contracts, client policy and state machines

## 1. API style
- Base path `/v1`.
- REST + JSON UTF-8.
- OpenAPI validated in CI; typed clients generated.
- Problem Details-style errors with stable `code`.
- Cursor pagination for growing mutable collections.
- Server remains backward-compatible across the documented mobile compatibility window; see `CLIENT_COMPATIBILITY.md`.

## 2. Auth/authorization
Every endpoint declares auth requirement, actor type, domain/resource permission, organization role if applicable, safety/account restrictions and feature/country gates. UI authorization never substitutes server authorization.

## 3. Client bootstrap/config
- `GET /v1/client/bootstrap`
Returns safe public/runtime configuration needed by clients:
  - minimum supported app version by platform
  - recommended/latest version
  - native/runtime compatibility identifiers
  - supported API capabilities
  - maintenance/degraded-mode signals
  - operationally safe public feature availability
  - country/localization bootstrap

The endpoint does not expose secret/admin kill-switch details.

## 4. User endpoints
- `GET /v1/me`
- `PATCH /v1/me/profile`
- `GET/PATCH /v1/me/preferences`
- `GET /v1/me/verifications`
- device/push registration endpoints
- legal acceptance endpoints where needed
- `POST /v1/me/data-export`
- `GET /v1/me/data-export/{id}`
- `DELETE /v1/me` starts durable deletion workflow
- `GET /v1/me/deletion-status`

## 5. Discovery
- `GET /v1/feed`
- `GET /v1/map/events`
- `GET /v1/search`
- `GET /v1/categories`
- `GET /v1/cities`

Responses carry occurrence freshness/version metadata sufficient for client revalidation decisions.

## 6. Events
- `GET /v1/events/{eventId}` resolves aliases to canonical event
- `POST /v1/events`
- `PATCH /v1/events/{eventId}`
- `POST /v1/events/{eventId}/publish`
- `POST /v1/events/{eventId}/cancel`
- `GET /v1/events/{eventId}/occurrences`
- `GET /v1/occurrences/{occurrenceId}`
- occurrence override/cancel endpoints for authorized hosts/organizations

Occurrence DTO separates:
- `admission`
- `socialParticipation`
- `waitlist`
- `location`

Generic occurrence DTO never contains exact private-home address.

## 7. Participation
- `POST /v1/occurrences/{id}/join`
- `POST /v1/occurrences/{id}/leave`
- approval request approve/reject
- participant list
- waitlist list/offer accept/decline
- check-in

Participation mode is `OPEN | APPROVAL_REQUIRED | INVITE_ONLY | DISABLED`.
External ticket acquisition is not a participation state.

## 8. Admission/tickets
V1 read model may expose:
- mode `NONE | FREE | EXTERNAL_TICKET`
- external URL/provider/price display

Future internal ticket endpoints are feature-gated and not implied by V1 social participation APIs.

## 9. Pods
Pods target one occurrence and use social ParticipationMode only. No ticket/admission semantics.

## 10. Safety/private location
- report/block/share-plans endpoints
- exact private location is fetched via a dedicated authorized endpoint after current membership/verification/disclosure policy is revalidated
- never embed exact private location into feed/map/general event payloads

## 11. Organizations/admin
Organization endpoints enforce RBAC. Admin endpoints use separate staff identity/scopes and audited domain commands.

## 12. Idempotency
Retry-prone mutations accept `Idempotency-Key`. Same actor scope + operation + key + different request hash → conflict.

## 13. Event state
Event: DRAFT, PENDING_REVIEW, PUBLISHED, CANCELLED, COMPLETED, REMOVED, ARCHIVED.

Occurrence: SCHEDULED, JOIN_CLOSED, CANCELLED, COMPLETED, REMOVED.

An imported update cannot resurrect a safety-removed event/occurrence.

## 14. Participation state
REQUESTED, WAITLISTED, SLOT_OFFERED, CONFIRMED, REJECTED, EXPIRED, CANCELLED_BY_USER, REMOVED_BY_HOST, ATTENDED, NO_SHOW.

Capacity-safe transition to CONFIRMED. Waitlist offer expires deterministically. Safety restrictions can force removal.

## 15. Admission is not state machine participation
Admission mode can change independently from Meet participation where source/organizer rules permit. Example: EXTERNAL_TICKET + OPEN.

## 16. Pod state
Pod: DRAFT, OPEN, FULL, CLOSED, CANCELLED, COMPLETED, REMOVED.
Membership: REQUESTED, CONFIRMED, REJECTED, LEFT, REMOVED.

## 17. Organization/identity/moderation
Organization: UNCLAIMED, CLAIM_PENDING, VERIFIED, SUSPENDED, CLOSED.
Identity verification: CREATED, PENDING, VERIFIED, FAILED, EXPIRED, REVOKED.
Moderation report/case/appeal states remain command-driven, never arbitrary raw status patches.

## 18. Notification state
Logical Notification: ACTIVE/READ/ARCHIVED semantics as applicable.
NotificationDelivery: QUEUED, SENT, DELIVERED where provider supports, FAILED_RETRYABLE, FAILED_FINAL, SUPPRESSED.
Delivery status never changes canonical event/participation truth.

## 19. WebSocket contract
Detailed source: `REALTIME.md`.
WebSocket is a transport for durable and ephemeral updates, never source of truth. Reconnect always reauthenticates/resubscribes and durable recovery occurs via REST/cursors.

## 20. Caching and stale truth
Clients may cache discovery/event data for UX, but before high-impact actions they revalidate:
- join/leave/approval
- ticket/action CTA if source freshness is uncertain
- imminent event cancellation/material time/location changes
- exact private-home address access

A stale cached event cannot override current server state.
