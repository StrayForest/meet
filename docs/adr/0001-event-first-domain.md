# ADR-0001 — Event-first physical domain
Status: ACCEPTED

## Context
Imported supply, recurring series and social participation need stable identity without confusing tickets, dates or joins.

## Decision
Event = stable identity. EventOccurrenceTemplate = defaults required to materialize a physical occurrence. EventRecurrence = limited local-time recurrence. EventOccurrence = concrete physical attendance unit. Admission and Meet participation are independent.

The physical domain supports `PUBLIC_VENUE`, `OUTDOOR` and `PRIVATE_HOME` as place types so future private-location safety semantics do not require a destructive domain migration. **Consumer V1 exposes PUBLIC_VENUE and OUTDOOR only. PRIVATE_HOME is domain-supported but explicitly evidence-gated and NOT a V1 creation/discovery surface.** No online/hybrid placeholder is introduced.

## Alternatives
Single row/date, one ticket+join mode, full RFC5545 and generic online/hybrid model were rejected as ambiguous or premature. Removing all private-home representation from the domain was also rejected because exact-location isolation is a distinct safety boundary worth preserving even while rollout is deferred.

## Consequences
More explicit tables, but recurring generation/location/ticket/social semantics are deterministic and extensible. Product scope remains governed independently by `validation/MVP_BOUNDARY.md`; domain support does not authorize rollout.