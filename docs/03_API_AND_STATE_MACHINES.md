# 03 — API contracts and state machines

## 1. API style

- Base path: `/v1`.
- REST + JSON UTF-8.
- OpenAPI validated in CI.
- Typed clients generated for mobile/web/B2B/admin.
- No GraphQL as primary API.
- Errors use stable machine code and Problem Details-style shape.

Example:
```json
{
  "type": "https://errors.example.com/event-capacity-full",
  "title": "Event capacity is full",
  "status": 409,
  "code": "EVENT_CAPACITY_FULL",
  "detail": "No confirmed places remain.",
  "request_id": "..."
}
```

## 2. Auth/authorization

Consumer request:
1. verify Identity Platform credential/session;
2. map auth subject → internal UUIDv7 user;
3. enforce account/safety status;
4. enforce domain permission/resource membership.

Every endpoint must declare:
- authentication requirement;
- actor type;
- resource/domain permission;
- organization role if relevant;
- safety/account restriction;
- country/feature gate.

Never rely on UI authorization.

## 3. Pagination

Cursor-based only for growing mutable collections.
Parameters:
- `limit`
- `cursor`

Cursor contains/encodes stable ordered fields + ID tie-breaker.

## 4. Endpoint families

### Me/User
- `GET /v1/me`
- `PATCH /v1/me/profile`
- `GET /v1/me/preferences`
- `PATCH /v1/me/preferences`
- `GET /v1/me/verifications`
- `POST /v1/me/data-export`
- `DELETE /v1/me`
- device/push token endpoints

### Discovery
- `GET /v1/feed`
- `GET /v1/map/events`
- `GET /v1/search`
- `GET /v1/categories`
- `GET /v1/cities`

### Events
- `GET /v1/events/{eventId}`
- `POST /v1/events`
- `PATCH /v1/events/{eventId}`
- `POST /v1/events/{eventId}/publish`
- `POST /v1/events/{eventId}/cancel`
- `GET /v1/events/{eventId}/occurrences`
- `GET /v1/occurrences/{occurrenceId}`

### Participation
- `POST /v1/occurrences/{id}/join`
- `POST /v1/occurrences/{id}/leave`
- `POST /v1/occurrences/{id}/join-requests/{requestId}/approve`
- `POST /v1/occurrences/{id}/join-requests/{requestId}/reject`
- `GET /v1/occurrences/{id}/participants`
- `GET /v1/occurrences/{id}/waitlist`
- `POST /v1/waitlist-offers/{id}/accept`
- `POST /v1/waitlist-offers/{id}/decline`
- `POST /v1/occurrences/{id}/check-in`

### Pods
- `GET /v1/occurrences/{id}/pods`
- `POST /v1/occurrences/{id}/pods`
- `GET /v1/pods/{podId}`
- `POST /v1/pods/{podId}/join`
- `POST /v1/pods/{podId}/leave`
- `POST /v1/pods/{podId}/requests/{id}/approve`
- `POST /v1/pods/{podId}/requests/{id}/reject`

### Chat
- `GET /v1/conversations`
- `GET /v1/conversations/{id}/messages`
- `POST /v1/conversations/{id}/messages`
- `POST /v1/messages/{id}/report`

### Connections
- `GET /v1/connections`
- `POST /v1/connections/{userId}`
- `DELETE /v1/connections/{userId}`
- `POST /v1/users/{userId}/block`
- `DELETE /v1/users/{userId}/block`

### Feedback
- `POST /v1/occurrences/{id}/attendance-feedback`
- `POST /v1/occurrences/{id}/people/{userId}/feedback`

### Safety
- `POST /v1/reports`
- `POST /v1/safety/share-plans`
- `DELETE /v1/safety/share-plans/{id}`
- public expiring share token endpoint with minimal fields

### Organizations
- `GET /v1/organizations/{id}`
- `POST /v1/organizations`
- `PATCH /v1/organizations/{id}`
- `POST /v1/organizations/{id}/claim`
- `GET /v1/organizations/{id}/members`
- `POST /v1/organizations/{id}/members`
- `PATCH /v1/organizations/{id}/members/{userId}`
- organization event/attendee/check-in/analytics endpoints

### Admin
All under `/v1/admin/...` and staff-only:
- reports;
- moderation cases;
- appeals;
- users;
- events;
- organizations/claims;
- ingestion/source health;
- dedupe;
- verification status;
- feature controls;
- audit search.

## 5. WebSocket

Initial authenticated realtime endpoint.
Authorized channel classes:
- `conversation:{id}`
- `occurrence:{id}:participants`
- `occurrence:{id}:waitlist`
- `pod:{id}`
- `user:{id}:notifications`

Events are versioned:
- `message.created.v1`
- `message.deleted.v1`
- `participant.updated.v1`
- `waitlist.slot_offered.v1`
- `event.updated.v1`
- `event.cancelled.v1`

Durable recovery uses REST. WebSocket is transport, not source of truth.

## 6. Event state machine

Event:
- DRAFT
- PENDING_REVIEW
- PUBLISHED
- CANCELLED
- COMPLETED
- REMOVED
- ARCHIVED

Occurrence:
- SCHEDULED
- JOIN_CLOSED
- CANCELLED
- COMPLETED
- REMOVED

Rules:
- publishing requires validation/policy pass;
- cancellation is distinct from moderation removal;
- completed occurrence cannot reopen;
- imported update cannot override safety removal.

## 7. Participation state machine

States:
- REQUESTED
- WAITLISTED
- SLOT_OFFERED
- CONFIRMED
- REJECTED
- EXPIRED
- CANCELLED_BY_USER
- REMOVED_BY_HOST
- ATTENDED
- NO_SHOW

Rules:
- unique user + occurrence;
- capacity-safe transition to CONFIRMED;
- waitlist offer has expiry;
- accepting expired offer fails deterministically;
- attendance/no-show only after appropriate event/check-in rules;
- safety/block can force removal/restriction.

## 8. Pod state machine

Pod:
- DRAFT
- OPEN
- FULL
- CLOSED
- CANCELLED
- COMPLETED
- REMOVED

Membership:
- REQUESTED
- CONFIRMED
- REJECTED
- LEFT
- REMOVED

## 9. Organization state machine

- UNCLAIMED
- CLAIM_PENDING
- VERIFIED
- SUSPENDED
- CLOSED

## 10. Identity verification state

- CREATED
- PENDING
- VERIFIED
- FAILED
- EXPIRED
- REVOKED

## 11. Moderation state

Report:
- SUBMITTED
- TRIAGED
- LINKED_TO_CASE
- CLOSED

Case:
- OPEN
- TRIAGED
- INVESTIGATING
- ACTIONED
- APPEALED
- CLOSED

Appeal:
- SUBMITTED
- UNDER_REVIEW
- UPHELD
- OVERTURNED
- PARTIALLY_OVERTURNED
- CLOSED

Transitions occur through domain commands, never raw status patches.

## 12. Notification state

- QUEUED
- SENT
- DELIVERED where provider supports
- FAILED_RETRYABLE
- FAILED_FINAL
- SUPPRESSED

All delivery jobs have deduplication keys.
