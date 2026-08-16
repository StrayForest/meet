# 11 — Definition of Done — Architecture 1.3

A task is done only when applicable requirements pass.

- **Architecture/data:** correct module/domain semantics; architecture fitness checks pass; migration/index/constraints/backward rollout; executable schema/generated DBML consistent; ownership metadata updated when module boundaries change. Before P0-006 the DBML blueprint itself must pass the predevelopment readiness guard and contain no legacy `interests`/`user_interests` tables.
- **API/contracts:** validation/auth/stable errors/OpenAPI; idempotency/pagination; old-client and domain-event compatibility; concurrency/consistency contract respected for critical commands.
- **Safety/privacy:** abuse/blocks/rate limits; data classification and PII/log/analytics review; private-location/lifecycle/audit/OperationalFlag implications; targeted threat model updated for high-risk boundary changes. A reachable high-risk boundary is not Done with only the threat-model index/checklist; its concrete model is mapped to implementation/tests.
- **Reliability/ops:** degraded behavior defined/tested; external dependency timeout/retry/idempotency policy; duplicate safety, SLI impact, provider outage, rollout/rollback/runbook/kill switch. Do not activate infrastructure complexity solely because the architecture supports it.
- **Product/business:** for user-visible/growth/B2B work, name the PMF/liquidity/GTM/organizer hypothesis affected and the measurable downstream outcome. Do not treat installs, registrations, page views or time-in-app as success when the goal is IRL participation. Preserve `fi/en/ru` launch support where the flow is user-visible.
- **Evidence:** product assumption gates reference an evidence-log entry in `validation/ASSUMPTION_REGISTER.md`; architecture/expert/synthetic review cannot be relabeled as measured user evidence.
- **Scope discipline:** new architecture/features require a concrete product, safety, legal, reliability or measured-scale reason. Prefer the smallest change that advances the minimum proof loop; speculative completeness is not Done. Active consumer V1 must remain within `validation/MVP_BOUNDARY.md` unless an evidence/ADR gate explicitly changes it.
- **Supply chain:** deterministic dependencies, pinned CI actions by full SHA, no secrets, artifact provenance/SBOM path where applicable. Public-repository hygiene check passes.
- **Tests:** focused tests first; DB/concurrency/auth/contract/migration/E2E/visual/accessibility/realtime as relevant; broad gate suites when required. Documentation links must resolve.
- **Docs:** update only affected source-of-truth docs/plan/generated artifacts; do not duplicate specs.

## Repository contract gates
The following must pass on a fresh checkout:

- `node scripts/check-context-budget.mjs`
- `node scripts/check-architecture-contracts.mjs`
- `node scripts/check-business-contracts.mjs`
- `node scripts/check-validation-scope.mjs`
- `node scripts/check-predevelopment-readiness.mjs`
- `node scripts/check-doc-links.mjs`
- `node scripts/check-public-repo-hygiene.mjs`

The GitHub workflow `.github/workflows/predevelopment-contracts.yml` is the repository-level independent execution of these predevelopment contracts. Once branch rules are available/configured, its `predevelopment-contracts` job is a required status check for protected `main` changes.
