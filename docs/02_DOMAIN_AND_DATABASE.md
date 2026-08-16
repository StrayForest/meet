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
Optional limited recurrence: DAILY/WEEKLY/MONTHLY + INTERVAL/BYDAY/COUNT/UNTIL, local DTSTART + IANA timezone.

### EventOccurrence
Concrete physical instance users attend. Owns start/end/timezone, public physical location, private-location assignment when applicable, admission, participation, waitlist/capacity, current state and version.

Participation, waitlist, company-finding groups, check-in, attendance and occurrence chat always target EventOccurrence.

## Physical place types vs product rollout
The domain supports `PUBLIC_VENUE | OUTDOOR | PRIVATE_HOME` so exact private-location safety semantics are explicit and future-compatible. **Consumer V1 exposes PUBLIC_VENUE and OUTDOOR only. PRIVATE_HOME is not a V1 creation/discovery capability and remains unreachable unless a later evidence/safety/legal/ops gate is accepted.** No ONLINE/HYBRID placeholder.

Domain support must never be interpreted as product authorization; `validation/MVP_BOUNDARY.md` controls rollout.

## Admission vs participation
`AdmissionMode = NONE | FREE | EXTERNAL_TICKET | INTERNAL_TICKET`
`ParticipationMode = OPEN | APPROVAL_REQUIRED | INVITE_ONLY | DISABLED`
`WaitlistPolicy = DISABLED | ENABLED`

Ticket ownership/acquisition is independent of Meet participation. `INTERNAL_TICKET` may remain a future-compatible enum/state but native ticketing is evidence/legal/payment-gated and not V1 scope.

## Location boundary
Generic occurrence owns:
- `public_location_label`
- `public_geography`
- optional venue

Private exact location contains no public fields and is stored as self-describing envelope ciphertext. Generic feed/map/event DTOs never join/decrypt it. This boundary remains testable even while PRIVATE_HOME is disabled to prevent future unsafe shortcuts.

## Organizations
Membership and roles are separate. One member can have multiple roles through `organization_member_roles`; V1 UI exposes only roles required by validated organizer workflows.

## Moderation
Reports link explicitly to moderation cases through `moderation_case_reports`. Evidence used for enforcement is an immutable/minimized snapshot/reference, not an assumption that mutable content still exists unchanged.

## Capacity/waitlist/reputation invariants
- unique user+occurrence participation;
- capacity transition is transactional;
- unique waitlist `(occurrence,ordinal)` and `(occurrence,user)`;
- at most one active waitlist offer per entry through partial unique index;
- person feedback unique per `(occurrence,author,subject)` where that evidence-gated feature is enabled;
- canonical connection pair unique if/when persistent connection scope is enabled.

Schema support for an evidence-gated future feature does not require user-facing implementation pre-PMF.

## Async/outbox
See `EVENT_CONTRACTS.md`. Outbox envelope includes aggregate type/version, actor context, optional country, correlation/causation and versioned payload. Managed transports activate only when current phases require them.

## Ingestion provenance
Every import run records connector/normalizer/classifier code versions so affected records can be traced after parser bugs.

## Operational flags
Versioned with optimistic concurrency. Safety-critical re-enable can require separate requester/approver when current risk justifies the workflow.

## Audit
Privileged audit must meet launch/security policy; more advanced tamper-evident/independent-sink maturity is activated according to `09_FIXED_ARCHITECTURE_DECISIONS.md` and actual risk.

## Schema governance
Before P0-006 `schemas/database.dbml` is authoritative design blueprint. After P0-006 executable Drizzle schema+migrations are authoritative; DBML is generated/verified. See `SCHEMA_GOVERNANCE.md`.

## Recovery
HA/PITR plus recovery architecture in `DISASTER_RECOVERY.md`; mature RPO/RTO and active DR topology are evidence/SLO-driven rather than assumed pre-PMF.