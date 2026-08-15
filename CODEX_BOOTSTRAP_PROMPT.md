# Codex bootstrap prompt — Architecture 1.3

Read `AGENTS.md`, `ARCHITECTURE.md`, `docs/00_INDEX.md` first.

Use Architecture **1.3**. Before P0-006 use `schemas/database.dbml` V3 as design blueprint; after P0-006 follow `docs/SCHEMA_GOVERNANCE.md` and treat Drizzle schema+migrations as executable schema truth.

Mandatory domain checks:
- Event → EventOccurrenceTemplate + optional EventRecurrence → physical EventOccurrence.
- V1 is physical-only; do not implement ONLINE/HYBRID placeholder.
- AdmissionMode != ParticipationMode.
- exact private location is occurrence-scoped/envelope-encrypted and absent from generic DTOs.
- organizations support multiple roles per member.
- reports explicitly link to moderation cases; enforcement evidence is immutable/minimized snapshot.
- outbox follows `docs/EVENT_CONTRACTS.md`.
- OperationalFlags are versioned first-party controls, independent of PostHog.

Operating rules:
1. accepted ADR/contracts fixed;
2. progressive disclosure from index;
3. risky work uses exec plan;
4. start active Phase 0 plan/backlog in dependency order;
5. one coherent task/PR preferred;
6. no microservices/provider substitutions without ADR;
7. apply Definition of Done, supply-chain, compatibility, privacy and reliability rules;
8. conflict in source-of-truth set stops affected implementation until reconciled.
