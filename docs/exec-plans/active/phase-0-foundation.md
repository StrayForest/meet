# Active plan — Phase 0 Foundation — Architecture 1.3

Goal: production-shaped monorepo and executable contracts before product implementation.

**One row = one coherent task/PR. Do not load all packs up front.** Use `docs/00_INDEX.md` per row.

| Task | Pack | Milestone |
|---|---|---|
| P0-000 | `R` + `ADR` | docs/link/ADR consistency |
| P0-001 | `R` | pnpm/Turborepo app/package/infra skeleton |
| P0-002 | `R` | Node24/pnpm11/strict TS/tooling |
| P0-003 | `UI` | design-token pipeline/primitives |
| P0-004 | `API` | shared API/value/error/client contracts |
| P0-005 | `OPS` | local Postgres18+PostGIS/Valkey/fakes |
| P0-006 | `DB` | V3 Drizzle schema/migration + DB-native invariants |
| P0-007 | `DB` | schema-governance cutover + generated DBML verification |
| P0-008 | `R` | architecture boundary checks |
| P0-009 | `ASY` | typed durable event registry + compatibility tests |
| P0-010 | `OPS` | OTel/Sentry observability baseline |
| P0-011 | `AN` | analytics/PostHog baseline; experiments != ops flags |
| P0-012 | `CTRL` + `DB` | OperationalFlag concurrency/change approvals |
| P0-013 | `CTRL` | client compatibility/bootstrap policy service |
| P0-014 | `MOB` | Expo/EAS + privacy/SDK inventory skeleton |
| P0-015 | `UI` + `TEST` | deterministic fixtures/visual-QA shell |
| P0-016 | `R` + `OPS` | repository/supply-chain baseline + WIF design |
| P0-017 | `OPS` | Terraform primary/DR/origin/DB-budget foundation |
| P0-018 | `R` + `TEST` | CI incl. context-budget/docs/schema/contracts/security/build checks |

Critical assertions: Template materializes duration/location/policies; no ONLINE/HYBRID V1; ticket != ParticipationMode; private exact location never generic; report→case and org multi-role exist; waitlist/feedback invariants hold; outbox matches `EVENT_CONTRACTS`; ingestion versions persist; flags are versioned; audit writer cannot update/delete; generated DBML matches executable schema.

Acceptance: fresh checkout boots; V3 zero→latest succeeds; generated docs consistent; context-budget and root checks pass; no product UI uses obsolete semantics.
