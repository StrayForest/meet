# Product spec — Organizations and B2B2C

## Goal
Organizations increase trustworthy event supply first; monetization comes after consumer activity proof.

## Organization lifecycle
UNCLAIMED → CLAIM_PENDING → VERIFIED → SUSPENDED/CLOSED.

Imported organizations retain source mappings through claim/verification.

## Claim
Request → relationship evidence → claimant strong identity where policy requires → staff/automated review → owner role → audit.

## Roles
OWNER, ADMIN, EVENT_MANAGER, MODERATOR, ANALYST, BILLING with explicit server-side permissions.

## Event management model
Organizations manage stable Event identity/series and concrete EventOccurrences.

For recurring activities:
- series/default edits are distinct from occurrence overrides;
- concrete occurrence can change venue/location/capacity/cancellation without rewriting every future occurrence.

Admission and Meet social participation are separate:
- AdmissionMode: None / Free / External ticket / future internal ticket;
- ParticipationMode: Open / Approval / Invite / Disabled;
- social capacity/waitlist apply to Meet participation, not external ticket inventory.

## Launch B2B
Organization switcher, profile, team/RBAC, events/recurrence, attendee approval/removal, QR check-in, announcements, basic analytics.

## UX
Desktop information-dense but clear. Consumer event appearance remains consistent regardless of source. “Official/verified” is factual, not paid prestige.

## Monetization later
Organization Pro, promoted events, affiliate ticket links, native ticketing. Paid promotion is labeled and cannot bypass safety/eligibility.

## Acceptance
- tenant isolation and role escalation tests;
- all sensitive changes audited;
- imported unclaimed profile can be claimed without losing source provenance;
- organization recurring occurrence override tests;
- external ticket and Meet participation remain independent;
- B2B never infers ticket ownership from Meet participation/check-in unless future verified integration provides it.
