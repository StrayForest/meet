# 02 — Domain architecture and database

## 1. Backend architecture
Use a **modular monolith**. Modules own rules and persistence. Dependency direction: `presentation → application → domain`; infrastructure implements ports.

Cross-module effects:
- synchronous application call for same decision/transaction where required;
- transactional outbox + versioned domain event for asynchronous side effects.

## 2. Core domain correction: Event vs Occurrence

### Event
Stable canonical/social identity. Owns:
- origin/access
- organizer/owner
- category
- translations/media
- default eligibility/safety/admission/participation policies
- recurrence definition reference
- source provenance

### EventOccurrence
Concrete physical instance users attend. Owns/overrides:
- starts/ends/timezone
- venue/location
- state
- capacity
- admission mode
- participation mode
- waitlist policy
- join close time
- private-home location assignment
- occurrence-level eligibility/policy overrides

Participation, check-in, Pods, attendee chat and successful IRL participation always target EventOccurrence.

### EventRecurrence
Separate recurrence record. V1 native subset:
- DAILY/WEEKLY/MONTHLY
- INTERVAL
- BYDAY
- COUNT/UNTIL
- local DTSTART + IANA timezone

Materialization creates a rolling horizon of occurrences. DST tests are mandatory. Imported complex schedules may be represented as concrete source occurrences rather than unsupported editable RRULEs.

## 3. Admission vs participation
Separate types:

`AdmissionMode = NONE | FREE | EXTERNAL_TICKET | INTERNAL_TICKET`

`ParticipationMode = OPEN | APPROVAL_REQUIRED | INVITE_ONLY | DISABLED`

`WaitlistPolicy = DISABLED | ENABLED`

External ticket acquisition and Meet social participation are independent. Pods use ParticipationMode only.

## 4. Place model
`PUBLIC_VENUE | OUTDOOR | PRIVATE_HOME | HYBRID`.
Online-only is excluded from V1 discoverable supply.

## 5. Module ownership
### Auth
Managed consumer auth subject mapping, bootstrap boundary, staff auth adapter boundary.

### Users
User lifecycle, profile, preferences, devices/push registrations, legal acceptances, export/deletion orchestration.

### Staff
StaffAccount, roles/scopes, privileged session policy. Separate identity from consumer users.

### IdentityVerification
Provider abstraction, attempts/results, trust policy. No document storage.

### Organizations
Organization, source mappings, claims, members/RBAC, verification.

### Venues
Venue identity, source mappings, geo/address, dedupe.

### Events
Event, EventRecurrence, EventOccurrence, translations, media, policies, private-location assignment, lifecycle.

### EventIngestion
Source registry, import runs, raw records, normalization, source links, dedupe candidates, aliases/merge history, reconciliation.

### Discovery
Feed/map/search/ranking/read models. No authoritative event writes.

### Participation
Participation, approvals, waitlist/offers, invitations, check-ins, attendance.

### Pods
Pod lifecycle/membership/capacity/meeting point.

### Chat
Conversations, memberships, messages, realtime authorization.

### Connections
Canonical mutual connection pair and permissions.

### Reputation
Structured feedback and derived reliability projections.

### Safety
Reports, blocks, restrictions, risk signals, Share My Plans.

### Moderation
Cases, evidence, actions, appeals, staff queue.

### Notifications
Logical in-app notification + channel delivery attempts/preferences.

### Billing
Subscriptions, entitlements, promotions, transactions, provider references.

### Platform
Country/region/city, operational flags, client compatibility policy, audit, idempotency, outbox.

## 6. IDs/time/money
- first-party IDs UUIDv7;
- external IDs strings scoped by provider/source;
- UTC `timestamptz` + IANA timezone for local scheduling;
- money integer minor units + ISO 4217 currency.

## 7. Geo/private location
Public/outdoor/venue occurrence: exact `geography(Point,4326)` with GiST index.

Private-home:
- public coarse area/point belongs to occurrence projection;
- exact location lives in `private_locations` and is KMS-envelope encrypted;
- occurrence references exact private location;
- generic event/occurrence DTO is structurally unable to serialize exact location;
- disclosure is a dedicated authorized query/command path.

## 8. Capacity correctness
Confirmed social participation count cannot exceed occurrence social capacity.
Use transaction + lock/constraint-safe counter strategy. User+occurrence participation unique. Pods have equivalent capacity protection.

## 9. Connections
Store canonical pair:
- `user_low_id`
- `user_high_id`
with check `user_low_id < user_high_id` using deterministic UUID ordering in application/DB-compatible representation and unique pair constraint. No A→B/B→A duplicates.

## 10. Conversations
Conversation context is explicit. For EVENT occurrence, POD or CONNECTION context, DB constraints/application invariants require exactly the correct context columns; impossible combinations are rejected. Do not use nullable polymorphism without checks.

## 11. Notifications
Separate:
- `notifications` = durable logical in-app item;
- `notification_deliveries` = push/email/in-app delivery attempts/status/provider reference.
One failed push must not mark the logical notification failed.

## 12. Media
`media_assets` is authoritative metadata for uploads/derivatives/moderation state. Profile/event/message media reference it. Upload path: signed upload → quarantine → validation/re-encode/moderation → publish.

## 13. Legal/account rights
Persist versioned legal acceptances. Export/deletion are durable jobs/workflows, not fire-and-forget HTTP actions.

## 14. Source identity and merges
External source identity is preserved. Canonical merges create `event_aliases`/merge history; old public/internal IDs resolve to canonical IDs. Deep links and foreign references must survive dedupe merges.

## 15. Transactional outbox
Business mutation + outbox row commit atomically. Publisher delivers to Pub/Sub and marks published. Consumers are idempotent and never assume global ordering.

Envelope:
- event_id
- event_type/schema_version
- aggregate_id
- occurred_at
- actor_id if applicable
- correlation_id/causation_id
- country_code
- payload

## 16. Idempotency
Retry-prone mutations require Idempotency-Key.
Store a non-null `actor_scope` string (`user:<uuid>`, `system:<name>`, `anon:<scope>`) + operation + key + request hash + outcome + expiry.
Unique `(actor_scope, operation, key)`.

## 17. Operational flags
Safety/kill switches are first-party operational config in PostgreSQL, cached in Valkey, audited and controllable from Admin. They are **not** PostHog experiment flags.

## 18. Client compatibility
Server stores minimum/recommended client versions, runtime/capability requirements and force-update policy. See `CLIENT_COMPATIBILITY.md`.

## 19. Required blueprint
`../schemas/database.dbml` is the V2 authoritative implementation blueprint. If prose and DBML conflict, implementation stops and the docs are reconciled before migration generation.

## 20. Required indexes/constraints
At minimum:
- GiST discoverable occurrence geo;
- occurrence `(state, starts_at)` and `(event_id, starts_at)`;
- unique source `(source_id, source_event_id)`;
- unique participation `(occurrence_id,user_id)`;
- unique org member `(organization_id,user_id)`;
- unique canonical connection pair;
- message `(conversation_id,created_at,id)`;
- event alias uniqueness;
- notification dedup where applicable;
- FTS GIN + pg_trgm indexes for discovery documents where plans justify.

## 21. Migrations
Expand → backfill/migrate → contract. Old/new Cloud Run revisions must overlap safely. Backfills are chunked, resumable and observable.

## 22. Recovery
HA Cloud SQL, PITR, automated backups, documented restore drills. Mature targets: RPO ≤5m core data, RTO ≤60m, subject to measured architecture/cost review.
