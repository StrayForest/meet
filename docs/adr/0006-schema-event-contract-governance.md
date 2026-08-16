# ADR-0006 — Executable schema and durable event-contract governance

Status: ACCEPTED
Date: 2026-08-16
Owner: Data/backend architecture

## Context
Maintaining DBML, ORM definitions, migrations and prose as equal authorities creates drift. Durable outbox events may become future service/extraction seams and therefore require explicit compatibility rules before they cross module/process boundaries.

## Decision
Until P0-006, `schemas/database.dbml` is the authoritative pre-migration design blueprint and must match active MVP scope. At P0-006 authority cuts over to Drizzle schema definitions + ordered migrations + database-native constraints/functions/triggers required for invariants. DBML then becomes generated/verified documentation.

Durable domain events use typed/versioned contracts with event/schema version, aggregate identity/version, correlation/causation metadata and idempotent consumer semantics. HTTP DTOs and durable event contracts are separate contracts.

## Alternatives
- Manually maintain DBML and ORM forever: rejected because drift is inevitable.
- Migrations only with no declarative schema: rejected because developer/tooling ergonomics and generated documentation suffer.
- Event sourcing: rejected because the product does not require an immutable event log as authoritative state.
- Unversioned JSON outbox payloads: rejected because future consumers would have no safe compatibility boundary.

## Compatibility impact
A schema change requires migration/rollout compatibility, not prose-only edits. Durable event breaking changes require a new event version; old consumers cannot be forced to reinterpret existing fields.

## Migration
P0-006 implements the MVP-required Drizzle schema from the cleaned DBML blueprint, explicitly excluding legacy `interests`/`user_interests`. P0-007 generates/verifies DBML from executable truth. Existing design-only fields remain only where their future-safe cost/risk is justified by accepted architecture.

## Rollback
Before cutover, revert the blueprint through normal review. After cutover, rollback uses forward-compatible/down migration strategy appropriate to the migration; generated DBML is never hand-edited. Event versions are deprecated through consumer migration rather than mutating old semantics.

## Validation
CI checks schema/generated-doc drift, zero→latest migrations, supported previous→latest path where relevant, native invariants/concurrency tests and typed event-schema compatibility. Pre-cutover CI rejects legacy preference tables and other known source-of-truth contradictions.

## Approval
Existing Architecture 1.3 ACCEPTED decision retained. Changing schema authority, identifier/aggregate ownership model or durable-event compatibility policy requires a superseding accepted ADR.
