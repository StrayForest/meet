# Active plan — Phase 0 Foundation — Architecture 1.3

Goal: production-shaped monorepo and executable contracts **only to the level needed to build/measure the product safely**. Phase 0 is not permission to keep polishing architecture before PMF.

**One row = one coherent task/PR. Do not load all packs up front.** Use `docs/00_INDEX.md` per row.

| Status | Task | Pack | Milestone |
|---|---|---|---|
| [ ] | P0-000 | `R` + `ADR` | docs/link/ADR/business-contract consistency |
| [ ] | P0-001 | `R` | pnpm/Turborepo app/package/infra skeleton |
| [ ] | P0-002 | `R` | Node24/pnpm11/strict TS/tooling |
| [ ] | P0-003 | `UI` | design-token pipeline/primitives |
| [ ] | P0-004 | `API` | shared API/value/error/client contracts |
| [ ] | P0-005 | `OPS` | local Postgres18+PostGIS/Valkey/fakes |
| [ ] | P0-006 | `DB` | V3 Drizzle schema/migration + DB-native invariants |
| [ ] | P0-007 | `DB` | schema-governance cutover + generated DBML verification |
| [ ] | P0-008 | `R` | architecture boundary checks |
| [ ] | P0-009 | `ASY` | typed durable event registry + compatibility tests |
| [ ] | P0-010 | `OPS` | OTel/Sentry observability baseline |
| [ ] | P0-011 | `AN` | analytics baseline incl. acquisition → IRL outcome + fi/en/ru/city cohorts |
| [ ] | P0-012 | `CTRL` + `DB` | OperationalFlag concurrency/change approvals |
| [ ] | P0-013 | `CTRL` | client compatibility/bootstrap policy service |
| [ ] | P0-014 | `MOB` | Expo/EAS + privacy/SDK inventory skeleton |
| [ ] | P0-015 | `UI` + `TEST` | deterministic fixtures/visual-QA shell |
| [ ] | P0-016 | `R` + `OPS` | repository/supply-chain baseline + WIF design |
| [ ] | P0-017a | `OPS` | Terraform primary/runtime + DB connection-budget foundation; no speculative service activation |
| [ ] | P0-017b | `OPS` | Terraform DR variables/recovery skeleton; load DR specialist only |
| [ ] | P0-017c | `OPS` | Terraform origin-security skeleton; load origin specialist only |
| [ ] | P0-018 | `R` + `TEST` | CI incl. context-budget/docs/schema/contracts/security/business checks |

Critical assertions: Template materializes duration/location/policies; no ONLINE/HYBRID V1; ticket != ParticipationMode; private exact location never generic; report→case and org multi-role exist; waitlist/feedback invariants hold; outbox matches `EVENT_CONTRACTS`; ingestion versions persist; flags are versioned; audit writer cannot update/delete; generated DBML matches executable schema; fi/en/ru launch contract remains intact.

Acceptance: fresh checkout boots; V3 zero→latest succeeds; generated docs consistent; context/business/architecture checks pass; no product UI uses obsolete semantics. **On acceptance, stop extending Phase 0 and move into the minimum proof loop plus day-1 business validation track.**
