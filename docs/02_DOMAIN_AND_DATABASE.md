# 02 — Domain architecture and database

## 1. Backend architecture

Use a **modular monolith**. Modules own their domain rules and persistence. Controllers never implement business rules directly.

Dependency direction:
`presentation → application → domain`

Infrastructure implements ports used by application/domain.

Cross-module side effects:
- direct application service call when one synchronous transaction/decision is required;
- transactional outbox + domain event for asynchronous effects.

## 2. Modules and ownership

### Auth
- managed-auth subject validation/mapping;
- account bootstrap boundary;
- staff auth boundary.

### Users
- User lifecycle/status;
- public/private profile;
- interests/languages/preferences;
- device registration;
- deletion orchestration.

### IdentityVerification
- provider abstraction;
- verification attempts/status;
- trust policy evaluation.

### Organizations
- organization state;
- claims;
- members/roles;
- verification.

### Venues
- venue identity;
- public address/geo;
- source mappings/dedupe.

### Events
- Event;
- EventOccurrence;
- translations/media/restrictions;
- recurrence;
- private/public location model;
- lifecycle.

### EventIngestion
- source connectors;
- raw records;
- normalization;
- source provenance;
- dedupe candidates;
- canonical reconciliation.

### Discovery
- feed/map/search query orchestration;
- deterministic ranking/read models.
It does not own event writes.

### Participation
- join request;
- participation;
- waitlist;
- slot offers;
- invitations;
- check-in/attendance.

### Pods
- Pod lifecycle;
- membership/capacity;
- meeting point.

### Chat
- conversations;
- membership;
- messages;
- realtime authorization.

### Connections
- mutual connections;
- relationship permissions.

### Reputation
- structured feedback;
- public reliability projections;
- no-show/attendance aggregates.

### Safety
- reports;
- block enforcement;
- risk signals;
- safety restrictions;
- share-my-plans.

### Moderation
- cases;
- evidence references;
- actions;
- appeals;
- human queue.

### Notifications
- logical notifications;
- preferences;
- push/email/in-app delivery requests.

### Billing
- subscriptions;
- entitlements;
- promotions;
- transactions;
- Stripe references.

### Analytics
- canonical analytics schema and publishing.
No operational business decision depends on BigQuery availability.

### Admin
- privileged orchestration only;
- never bypasses domain services;
- every sensitive action audited.

### Platform
- country/region/city;
- feature configuration;
- AuditLog;
- idempotency records;
- transactional outbox.

## 3. IDs and time

- First-party entity IDs: UUIDv7.
- External IDs: strings scoped by source/provider.
- All stored timestamps: UTC `timestamptz`.
- Events/recurrence also store IANA timezone.
- Cursor pagination uses stable sort + UUID tie-breaker.

## 4. Money

Never use floating point.
Store:
- `amount_minor bigint`
- `currency char(3)` ISO 4217.

## 5. Database

PostgreSQL 18 + PostGIS.

Drizzle:
- schema;
- migrations;
- ordinary CRUD.

Hand-written parameterized SQL:
- PostGIS radius/viewport;
- feed hot paths;
- complex ranking;
- concurrency-sensitive participation queries.

## 6. Geo

### Public venue/outdoor event
Store exact `geography(Point,4326)` with GiST index.

### Private-home event
Split:
- coarse public city/neighborhood label and deliberately coarse map point;
- exact address/location in restricted table, application-encrypted using KMS envelope encryption.

Generic Event DTO must be structurally incapable of including exact private location.

## 7. Recurrence

- Recurrence definition is RFC 5545 RRULE-compatible.
- Concrete `EventOccurrence` rows are materialized in a rolling horizon.
- Worker extends horizon.
- Individual occurrences can be cancelled/overridden without destroying series.

## 8. Capacity correctness

Participation confirmation must be transactionally capacity-safe.
Possible implementation:
- transaction;
- lock occurrence/capacity counter or use constraint-safe counter update;
- check existing user participation;
- atomically reserve/confirm;
- insert outbox event in same transaction.

Must pass concurrency test where many users race for the final slot.

## 9. Messages

Start in PostgreSQL.
Design for future extraction:
- conversation membership separate;
- append-friendly IDs;
- index `(conversation_id, created_at, id)`;
- schema compatible with future partitioning;
- edits/deletes explicit;
- moderation evidence possible.

Do not promise end-to-end encryption because safety moderation/investigation requires server-side capabilities.

## 10. Transactional outbox

Every durable domain side effect:
1. business mutation and `outbox_events` row in one DB transaction;
2. publisher reads pending rows;
3. publishes versioned event to Pub/Sub;
4. marks published;
5. retries safely.

Consumers are idempotent.

Event envelope:
- event_id;
- event_type;
- schema_version;
- aggregate_id;
- occurred_at;
- actor_id if applicable;
- correlation_id;
- causation_id;
- country_code;
- payload.

Naming:
`<domain>.<entity>.<action>.v<version>`

Examples:
- `events.event.published.v1`
- `participation.participant.confirmed.v1`
- `participation.waitlist.slot_offered.v1`
- `safety.report.created.v1`
- `moderation.case.actioned.v1`

## 11. Idempotency

Retry-prone writes accept `Idempotency-Key`.
Store:
- actor scope;
- operation;
- key;
- request hash;
- logical outcome/response reference;
- expiry.

Same key + different request body → conflict.

Mandatory for:
- create event;
- publish event;
- join/leave;
- approve/reject;
- create/join Pod;
- reports where client retry likely;
- payment operations/webhooks.

## 12. PII separation

Operational/public-profile queries do not join sensitive PII by default.
Sensitive repositories require explicit application authorization.

Never put in generic logs/analytics:
- DOB;
- exact home address;
- ID document data;
- access tokens;
- private message bodies.

## 13. Primary table groups

See `../schemas/database.dbml` for full blueprint.

Groups:
- Users/Profile/Preferences/Languages/Interests
- IdentityVerifications
- Countries/Regions/Cities
- Organizations/Members/Claims
- Venues
- Events/Occurrences/Translations/Media/Sources/RawRecords
- Participations/Waitlists/Offers/Invitations/CheckIns
- Pods/Members
- Conversations/Members/Messages
- Connections/Blocks
- Feedback/Reputation projections
- Reports/Cases/Actions/Appeals
- Notifications
- Subscriptions/Entitlements/Transactions
- AuditLogs/Outbox/Idempotency

## 14. Required indexes

At minimum:
- GiST on discoverable occurrence geography;
- B-tree on occurrence status/start time;
- `(event_id, starts_at)`;
- unique `(source_key, source_event_id)`;
- unique `(occurrence_id, user_id)` participation;
- unique `(organization_id, user_id)` membership;
- `(conversation_id, created_at, id)` messages;
- FTS GIN index for event localized search documents;
- pg_trgm indexes for title/organizer/venue fuzzy matching where query plan proves useful.

## 15. Migrations

Production migration strategy:
**expand → migrate/backfill → contract**.

Never deploy a destructive schema change that breaks the previous Cloud Run revision during rolling/canary deployment.

Backfills:
- resumable;
- chunked;
- observable;
- never unbounded inside request path.

## 16. Backups/recovery

Production baseline:
- HA Cloud SQL;
- automated backups;
- PITR;
- initial backup retention ~35 days;
- EU/EEA recovery copy policy as configured;
- quarterly restore drill.

Operational targets after mature launch:
- RPO ≤ 5 minutes for core transactional data;
- RTO ≤ 60 minutes.
