# Meet

Event-first IRL social platform. **Architecture 1.3** is frozen for greenfield implementation.

Start: `AGENTS.md` → `ARCHITECTURE.md` → `docs/00_INDEX.md` → active Phase 0 exec plan.

Core model: `Event → EventOccurrenceTemplate + optional EventRecurrence → physical EventOccurrence → participation/Pods/attendance`.

Do not implement from old chat/history. Before P0-006 DBML V3 is the schema design blueprint; after P0-006 schema truth moves to Drizzle+migrations and DBML is generated/verified.

Codex bootstrap: `CODEX_BOOTSTRAP_PROMPT.md`.
