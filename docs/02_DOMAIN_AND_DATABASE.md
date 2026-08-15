# 02 — Domain architecture and database — Architecture 1.3

## Backend shape
NestJS + Fastify TypeScript **modular monolith**. Modules own rules and persistence. Dependency direction: presentation → application → domain; infrastructure implements ports.

## Event model
### Event
Stable canonical/social identity/series. Owns origin/access, organizer/owner, category, translations/media, high-level audience/accessibility defaults and version.

### EventOccurrenceTemplate
One per Event. Contains the defaults required to materialize concrete physical occurrences:
- duration;
- venue/place/location label/coarse geography/private-location reference;
- admission;
- Meet participation;
- waitlist/capacity;
- join-close offset.

### EventRecurrence
Optional limited V1 recurrence: DAILY/WEEKLY/MONTHLY + INTERVAL/BYDAY/COUNT/UNTIL, local DTSTART + IANA timezone.

### EventOccurrence
Concrete physical instance users attend. Owns start/end/timezone, public physical location, private-location assignment when applicable, admission, participation, waitlist/capacity, current state and version.

Participation, waitlist, Pods, check-in, attendance and occurrence chat always target EventOccurrence.

V1 is physical-only: PUBLIC_VENUE | OUTDOOR | PRIVATE_HOME. No ONLINE/HYBRID placeholder.

## Admission vs participation
`AdmissionMode = NONE | FREE | EXTERNAL_TICKET | INTERNAL_TICKET`
`ParticipationMode = OPEN | APPROVAL_REQUIRED | INVITE_ONLY | DISABLED`
`WaitlistPolicy = DISABLED | ENABLED`

Ticket ownership/acquisition is independent of Meet participation.

## Location boundary
Generic occurrence owns:
- `public_location_label`
- `public_geography`
- optional venue

Private exact location contains no public fields and is stored as self-describing envelope ciphertext. Generic feed/map/event DTOs never join/decrypt it.

## Organizations
Membership and roles are separate. One member can have multiple roles through `organization_member_roles`.

## Moderation
Reports link explicitly to moderation cases through `moderation_case_reports`. Evidence used for enforcement is an immutable/minimized snapshot/reference, not an assumption that mutable content still exists unchanged.

## Capacity/waitlist/reputation invariants
- unique user+occurrence participation;
- capacity transition is transactional;
- unique waitlist `(occurrence,ordinal)` and `(occurrence,user)`;
- at most one active waitlist offer per entry through partial unique index;
- person feedback unique per `(occurrence,author,subject)`;
- canonical connection pair unique.

## Async/outbox
See `EVENT_CONTRACTS.md`. Outbox envelope includes aggregate type/version, actor context, optional country, correlation/causation and versioned payload.

## Ingestion provenance
Every import run records connector/normalizer/classifier code versions so affected records can be traced after parser bugs.

## Operational flags
Versioned with optimistic concurrency. Safety-critical re-enable can require separate requester/approver.

## Audit
Privileged audit is append-only for application role, hash-chained/tamper-evident and exported to independent retention-controlled evidence sink.

## Schema governance
Before P0-006 `schemas/database.dbml` is authoritative design blueprint. After P0-006 executable Drizzle schema+migrations are authoritative; DBML is generated/verified. See `SCHEMA_GOVERNANCE.md`.

## Recovery
HA/PITR plus DR architecture in `DISASTER_RECOVERY.md`; mature core target RPO ≤5m/RTO ≤60m is evidence-driven, not assumed.
