# ADR-0001 — Event-first physical domain
Status: ACCEPTED

## Context
Imported supply, recurring series and social participation need stable identity without confusing tickets, dates or joins.

## Decision
Event = stable identity. EventOccurrenceTemplate = defaults required to materialize a physical occurrence. EventRecurrence = limited local-time recurrence. EventOccurrence = concrete physical attendance unit. Admission and Meet participation are independent. V1 places are PUBLIC_VENUE/OUTDOOR/PRIVATE_HOME only; no online/hybrid placeholder.

## Alternatives
Single row/date, one ticket+join mode, full RFC5545 and generic online/hybrid model were rejected as ambiguous or premature.

## Consequences
More explicit tables, but recurring generation/location/ticket/social semantics are deterministic and extensible.
