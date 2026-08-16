# Active plan — Phase 0 Foundation — Architecture 1.3

Goal: production-shaped monorepo and executable contracts **only to the level needed to build/measure the product safely**. Phase 0 is not permission to keep polishing architecture before PMF.

**One row = one coherent task/PR. Do not load all packs up front.** Use `docs/00_INDEX.md` per row.

| Status | Task | Pack | Milestone |
|---|---|---|---|
| [x] | P0-000 | `R` + `ADR` + `VAL` | docs/link/ADR/business/validation-contract consistency + executable guards |
| [ ] | P0-001 | `R` | pnpm/Turborepo app/package/infra skeleton |
| [ ] | P0-002 | `R` | Node24/pnpm11/strict TS/tooling |
| [ ] | P0-003 | `UI` | design-token pipeline/primitives |
| [ ] | P0-004 | `API` | shared API/value/error/client contracts |
| [ ] | P0-005 | `OPS` | local Postgres18+PostGIS/Valkey/fakes |
| [ ] | P0-006 | `DB` | V3 Drizzle schema/migration + DB-native invariants needed by MVP |
| [ ] | P0-007 | `DB` | schema-governance cutover + generated DBML verification |
| [ ] | P0-008 | `R` | architecture boundary checks |
| [ ] | P0-009 | `ASY` | typed durable event registry only for events used by active phases + compatibility tests |
| [ ] | P0-010 | `OPS` | OTel/Sentry observability baseline proportional to launch |
| [ ] | P0-011 | `AN` | analytics baseline incl. acquisition → Opportunity Success → IRL outcome + fi/en/ru/liquidity cells |
| [ ] | P0-012 | `CTRL` | minimum OperationalFlag path required for safe rollout; advanced approvals only when risk requires |
| [ ] | P0-013 | `CTRL` | client compatibility/bootstrap policy service |
| [ ] | P0-014 | `MOB` | Expo/EAS + privacy/SDK inventory skeleton |
| [ ] | P0-015 | `UI` + `TEST` | deterministic fixtures/visual-QA shell using active V1 design pack |
| [ ] | P0-016 | `R` + `OPS` | repository/supply-chain baseline; WIF only when required by actual deployment workflow |
| [ ] | P0-017a | `OPS` | Terraform primary/runtime + DB connection-budget foundation; no speculative service activation |
| [ ] | P0-017b | `OPS` | recovery configuration/skeleton only; no active Stockholm DR deployment requirement pre-PMF |
| [ ] | P0-017c | `OPS` | Terraform origin-security skeleton |
| [ ] | P0-018 | `R` + `TEST` | CI incl. context-budget/architecture/business/validation/pre-dev checks, then code/schema/security checks as implementation lands |

## MVP-required assertions
These are required before the proof-loop implementation can rely on the foundation:
- EventOccurrence materializes the accepted duration/location/policy semantics needed by active V1 flows.
- No ONLINE/HYBRID V1 semantics.
- Admission/ticketing != Meet participation.
- PUBLIC_VENUE/OUTDOOR are the only consumer V1 place modes.
- If private-location fields remain future-compatible in schema/domain, exact data is never present in generic discovery DTOs/logs/analytics.
- Critical active mutations have DB-backed consistency/idempotency semantics.
- External ingestion provenance/version needed for launch sources persists.
- `fi/en/ru` launch contract remains intact.
- Active consumer design/UX remains within `validation/MVP_BOUNDARY.md`.
- The five pre-development/contract checks remain green.

## Deferred-on-activation assertions
These become mandatory only when the relevant capability is actually enabled; they must not force pre-PMF scope:
- consumer PRIVATE_HOME end-to-end lifecycle and disclosure;
- persistent connections/general social graph/community mechanics;
- advanced organization multi-role UI beyond validated pilot needs;
- sophisticated feedback/reputation systems;
- advanced privileged/audit workflows beyond launch-risk requirements;
- managed Pub/Sub/Cloud Tasks/Valkey activation where simpler mechanisms suffice;
- active Stockholm DR / advanced multi-region topology;
- service extraction/microservices;
- native ticketing or consumer premium.

## P0-000 completion evidence
Completed by repository-wide reconciliation of product/business/validation/ADR/design/testing contracts, creation of `docs/validation/PRE_DEV_GATE.md`, installation of GitHub Actions CI, and executable checks:

```bash
node scripts/check-context-budget.mjs
node scripts/check-architecture-contracts.mjs
node scripts/check-business-contracts.mjs
node scripts/check-validation-scope.mjs
node scripts/check-pre-dev-gate.mjs
```

Acceptance for Phase 0 as a whole remains: fresh checkout boots; applicable schema zero→latest succeeds once schema implementation exists; generated docs are consistent; relevant tests/checks pass; no product UI uses obsolete semantics. **On acceptance, stop extending Phase 0 and move into the minimum proof loop plus day-1 business validation track.**
