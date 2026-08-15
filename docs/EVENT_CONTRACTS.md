# EVENT_CONTRACTS — Durable async/domain event governance

## Goal
Outbox events are future extraction seams. Treat them as versioned contracts even while the backend is a modular monolith.

## Envelope
Every durable event contains:
- `eventId` UUIDv7
- `eventType` including semantic version suffix, e.g. `participation.confirmed.v1`
- `schemaVersion`
- `aggregateType`
- `aggregateId`
- `aggregateVersion` when the aggregate has a monotonic version
- `actorType` and optional `actorId`
- optional `countryCode`
- `occurredAt`
- `correlationId`
- optional `causationId`
- payload

## Compatibility
- Additive optional fields may remain the same event version.
- Removing/renaming fields, changing meaning/type or new mandatory semantics requires a new event version.
- Old consumers are never forced to reinterpret an existing field.
- A consumer that does not support a version must fail/route visibly, not silently misparse it.
- Contract schemas are typed, checked into the repo and validated in CI.

## Ordering/gaps
No global ordering is assumed. Where entity ordering matters, consumers compare `aggregateVersion` and re-read authoritative state when a gap or stale version is detected.

## Delivery
Transactional outbox commits with authoritative mutation. Pub/Sub/Tasks are at-least-once from the application's perspective; consumers are idempotent.

## Retention/replay
Outbox transport retention is operational. Long-term replay is not an event-sourcing guarantee. Rebuildable projections must also support snapshot/backfill from authoritative DB.

## Ownership
Producing domain module owns event semantics. Consumers may not mutate producer-owned tables directly because an event was received.
