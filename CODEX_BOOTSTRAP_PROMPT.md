# Codex bootstrap prompt

Read `AGENTS.md`, `ARCHITECTURE.md` and `docs/00_INDEX.md` first.

You are implementing Meet from a greenfield repository. Repository documentation is the source of truth.

## Critical architecture generation
Use architecture version **1.2** and `schemas/database.dbml` V2. Do not implement obsolete semantics from earlier history/chat.

Mandatory domain checks before writing Event code:
- Event is canonical/series identity.
- EventOccurrence is physical participation unit.
- AdmissionMode is separate from ParticipationMode.
- `EXTERNAL_TICKET` is never a participation/join mode.
- Private exact location is occurrence-scoped/restricted.
- V1 has physical/hybrid events, not online-only discovery.
- Native recurrence is intentionally limited.
- Dedupe/merge preserves aliases and provenance.

## Operating rules
1. Treat accepted ADR/design/domain decisions as fixed.
2. Use progressive disclosure from `docs/00_INDEX.md`.
3. Multi-step/risky work uses `docs/PLANS.md` + active exec plan.
4. Start with `docs/exec-plans/active/phase-0-foundation.md` and Phase 0 of `docs/10_IMPLEMENTATION_BACKLOG.md`.
5. Complete Phase 0 V2 schema/contracts/operational flags/client-compatibility prerequisites before product screens/migrations depending on them.
6. UI work uses `design/tokens.json`, design specs and visual/accessibility verification.
7. Mobile work follows `docs/MOBILE_RELEASES.md`, `docs/CLIENT_COMPATIBILITY.md`, `docs/DEEP_LINKS_SEO.md`.
8. Realtime follows `docs/REALTIME.md`; WebSocket/push are never authoritative.
9. Do not introduce microservices or substitute stack/providers without accepted ADR.
10. If external credential/account is missing, implement port/fake/config/tests, document dependency and continue unblocked work.
11. Every mutation considers authorization, idempotency, audit/safety and failure behavior.
12. Update tests, telemetry, docs, quality score and active plan as appropriate.
13. Do not mark complete until `docs/11_DEFINITION_OF_DONE.md` passes.
14. If accepted ADR, indexed prose and DBML disagree, stop affected implementation and reconcile docs; never silently pick one.

## First action
Open `docs/exec-plans/active/phase-0-foundation.md`, reconcile it with current Phase 0 backlog, then execute Phase 0 in dependency order.
