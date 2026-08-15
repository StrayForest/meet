# SCHEMA_GOVERNANCE — Executable schema and generated documentation

## Problem
Maintaining DBML, ORM schema, migrations and prose manually as equal authorities creates inevitable drift.

## Lifecycle
### Greenfield design stage — until P0-006
`schemas/database.dbml` is the authoritative schema **design blueprint**. Codex must not generate a migration from conflicting prose.

### After P0-006
Authoritative executable truth becomes:
1. Drizzle schema definitions;
2. ordered, reviewed migrations actually applied from zero;
3. database-native constraints/indexes not representable directly in Drizzle declarations.

`schemas/database.dbml` then becomes a generated/verified documentation artifact and must carry a generated header. CI fails when generated DBML/docs drift from executable schema.

## Rules
- Never hand-edit generated DBML after cutover.
- Every migration must have forward rollout and compatibility analysis.
- Destructive changes use expand → backfill → contract.
- CI tests zero→latest and previous-supported→latest migration paths when relevant.
- Production hotfix SQL must become a repository migration immediately; no undocumented permanent drift.
- Schema inspection in production is read-only outside controlled migration/support procedures.

## Contract separation
DB schema is not a mobile/public API contract. API/domain event contracts are governed separately.

## Decision records
Any change to core aggregate ownership, datastore technology, identifier strategy or schema-authority model requires ADR.
