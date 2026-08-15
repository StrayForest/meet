# ADR-0001 — Event-first domain and occurrence-centric participation

Status: ACCEPTED

## Context
Meet must support imported public events, community activities, recurring series, external ticketing and a proprietary social layer without collapsing them into one ambiguous event record.

A physical visit has different lifecycle/overrides from a stable event/series identity. Ticket/admission mechanics also differ from Meet social participation.

## Decision
- `Event` is stable canonical/social identity and may represent a recurring series.
- `EventOccurrence` is the concrete physical instance users attend.
- Participation, waitlist, check-in, Pods and occurrence chat target EventOccurrence.
- Admission and Meet participation are independent:
  - AdmissionMode: NONE/FREE/EXTERNAL_TICKET/INTERNAL_TICKET
  - ParticipationMode: OPEN/APPROVAL_REQUIRED/INVITE_ONLY/DISABLED
- V1 excludes online-only discovery; physical/hybrid occurrences are required.
- Native recurrence supports a deliberately limited DAILY/WEEKLY/MONTHLY subset with local DTSTART + timezone.

## Alternatives considered
1. Single Event row for every date: simpler initially but weak recurring-series identity and organizer editing.
2. One `join_mode` including EXTERNAL_TICKET: rejected because ticket ownership and social participation are orthogonal.
3. Full RFC5545 recurrence engine: rejected for V1 complexity and edge-case surface.

## Consequences
Positive: clear domain boundaries, external ticket events can still have Meet social participation, recurring occurrence overrides are natural.

Cost: more tables and mapping logic; imported providers need event/occurrence normalization.

## Migration/rollback
Greenfield decision: implement V2 schema before first production migration. Any future replacement requires ADR and data migration plan.
