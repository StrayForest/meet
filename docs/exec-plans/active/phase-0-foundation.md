# Active plan — Phase 0 Foundation — Architecture 1.3

Goal: create the production-shaped monorepo and executable contracts before product implementation.

**Do not load all packs up front.** Use `docs/00_INDEX.md` for each milestone.

| # | Pack | Milestone |
|---|---|---|
| 1 | `R` | pnpm/Turborepo/Node24 strict workspace + app/package skeleton |
| 2 | `UI` | design-token pipeline/primitives |
| 3 | `OPS` | local Postgres18+PostGIS/Valkey/fakes |
| 4 | `DB` | V3 Drizzle schema/migration + CHECK/unique/partial indexes |
| 5 | `DB` | schema-governance cutover + generated DBML verification |
| 6 | `API` | shared API/value/error/idempotency/client contracts |
| 7 | `ASY` | typed durable event registry + compatibility tests |
| 8 | `SAFE` + `DB` | OperationalFlag concurrency/change approvals + ClientPolicy |
| 9 | `R` | architecture boundary checks |
| 10 | `OPS` | OTel/Sentry adapters; `AN` only for PostHog/analytics baseline |
| 11 | `MOB` | Expo/EAS + privacy/SDK inventory skeleton |
| 12 | `R` + `OPS` | repository/supply-chain controls + WIF design |
| 13 | `OPS` | Terraform primary/DR/origin/DB-budget skeleton |
| 14 | `R` + `TEST` | CI: context-budget/docs/generated/schema/contracts/boundary/lint/type/test/migration/security/build |
| 15 | `UI` + `TEST` | deterministic fixtures/visual-QA shell |

Critical assertions: EventOccurrenceTemplate materializes duration/location/policies; no ONLINE/HYBRID V1; ticket != ParticipationMode; private exact location never generic; report→case and org multi-role exist; waitlist/feedback invariants hold; outbox matches `EVENT_CONTRACTS`; ingestion versions persist; flags are versioned; audit writer cannot update/delete; generated DBML matches executable schema.

Acceptance: fresh checkout boots; V3 zero→latest succeeds; generated docs consistent; context-budget check and root checks pass; no product UI uses obsolete semantics.
