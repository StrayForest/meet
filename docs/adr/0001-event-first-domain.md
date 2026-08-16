# ADR-0001 — Event-first physical domain

Status: ACCEPTED
Date: 2026-08-16
Owner: Product architecture

## Context
Imported supply, recurring series and social participation need stable identity without confusing tickets, dates or joins. The product must optimize concrete real-world participation while preserving recurrence and source identity.

## Decision
`Event` is stable identity. `EventOccurrenceTemplate` owns defaults required to materialize a physical occurrence. `EventRecurrence` defines the accepted local-time recurrence subset. `EventOccurrence` is the concrete physical attendance/participation unit. Admission/ticketing and Meet participation are independent.

The domain represents `PUBLIC_VENUE`, `OUTDOOR` and `PRIVATE_HOME` so exact-location safety semantics can remain isolated without a later destructive domain migration. Consumer V1 exposes **PUBLIC_VENUE/OUTDOOR only**. PRIVATE_HOME is explicitly evidence-gated and NOT a V1 creation/discovery surface. No ONLINE/HYBRID placeholder is introduced.

## Alternatives
- Event row per date: rejected because canonical identity, source dedupe and recurrence edits become ambiguous.
- One Event row with joins/tickets directly on it: rejected because users attend occurrences, not an abstract series.
- Full RFC5545 recurrence: rejected as unnecessary implementation breadth for V1.
- Generic physical/online/hybrid model: rejected because virtual semantics are not product scope.
- Remove PRIVATE_HOME from domain entirely: rejected because its exact-location isolation is a distinct future safety boundary; domain representation still does not authorize rollout.

## Compatibility impact
Clients/APIs must distinguish Event identity from occurrence truth. Participation, waitlist, attendance and occurrence-scoped social features always target EventOccurrence. Existing/future source aliases must resolve separately for Event and Occurrence.

## Migration
Greenfield: implement only the MVP-required schema subset while preserving the Event → Template/Recurrence → Occurrence boundary. PRIVATE_HOME fields may exist only where cheap/safe to preserve and remain unreachable through V1 product/API policy.

## Rollback
Before production data, rollback is a schema/design change through a superseding ADR. After persistent Event/Occurrence data exists, collapsing these concepts is destructive and requires explicit data/API migration; therefore this ADR is LOCKED.

## Validation
Recurrence materialization inherits template duration/location/policies; DST behavior is correct; admission and participation can coexist independently; all V1 create/discovery routes reject/hide PRIVATE_HOME and ONLINE/HYBRID; generic DTOs cannot leak exact-location payloads.

## Approval
Existing Architecture 1.3 ACCEPTED decision retained. Any change to stable identity, occurrence participation unit, physical-only scope or admission separation requires a superseding accepted ADR.
