# SCHEMA_GOVERNANCE — Executable schema and generated documentation

## Problem
Maintaining DBML, ORM schema, migrations and prose manually as equal authorities creates inevitable drift.

## Lifecycle
### Greenfield design stage — until P0-006
`schemas/database.dbml` is the authoritative schema **design blueprint** together with the mandatory database-native invariants listed below. Codex must not generate a migration from conflicting prose.

### After P0-006
Authoritative executable truth becomes:
1. Drizzle schema definitions;
2. ordered, reviewed migrations actually applied from zero;
3. database-native constraints/indexes/triggers or functions not representable directly in Drizzle declarations.

`schemas/database.dbml` then becomes a generated/verified documentation artifact and carries a generated header. CI fails when generated DBML/docs drift from executable schema.

## Environment isolation
Dev, staging and production use separate databases/projects. `operational_flags.key` is therefore unique **inside one environment database**. Its `environment` column is a defensive/audit marker and must match the deployed environment; it is not a cross-environment namespace. Do not combine prod/staging flags into one shared database.

## Mandatory migration-native invariants
DBML notation is not sufficient for every PostgreSQL rule. P0-006 migrations/tests must additionally enforce, where applicable:
- private-home template/occurrence ↔ private-location consistency and physical-only place types;
- `ends_at > starts_at`, positive duration/capacity/recurrence interval constraints;
- canonical distinct ordered connection pair;
- conversation context/type XOR;
- exactly one valid subscription/billing subject where the model requires user XOR organization;
- unique waitlist `(occurrence_id, ordinal)` and at most one **active** waitlist offer per entry using a partial unique index;
- notification logical dedup using a partial unique index such as `(user_id,dedup_key) WHERE dedup_key IS NOT NULL` when a dedup key is supplied;
- delivery channel rules, including required destination reference for external push/email channels;
- feedback uniqueness plus `author_user_id <> subject_user_id`;
- alias self/cycle prevention/flattening invariant;
- unique `(platform, environment, effective_at)` ClientPolicy history point and deterministic current-policy selection;
- OperationalFlag optimistic-version update and requester != approver for two-person changes;
- audit application role cannot UPDATE/DELETE audit rows;
- outbox/idempotency invariants and processed-event uniqueness.

If a database-native invariant is intentionally implemented by a trigger/function/advisory-lock protocol rather than CHECK/index, it has an integration/concurrency test and explanatory migration comment.

## Rules
- Never hand-edit generated DBML after cutover.
- Every migration has forward rollout and compatibility analysis.
- Destructive changes use expand → backfill → contract.
- CI tests zero→latest and previous-supported→latest paths when relevant.
- Production hotfix SQL becomes a repository migration immediately; no undocumented permanent drift.
- Schema inspection in production is read-only outside controlled migration/support procedures.
- No persistent production table/constraint may exist only as an undocumented console change.

## Contract separation
DB schema is not a mobile/public API or durable domain-event contract. Those are governed separately.

## Decision records
A change to core aggregate ownership, datastore technology, identifier strategy or schema-authority model requires ADR.