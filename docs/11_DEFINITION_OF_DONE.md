# 11 — Definition of Done — Architecture 1.3

A task is done only when applicable requirements pass.

- **Architecture/data:** correct module/domain semantics; architecture fitness checks pass; migration/index/constraints/backward rollout; executable schema/generated DBML consistent; ownership metadata updated when module boundaries change.
- **API/contracts:** validation/auth/stable errors/OpenAPI; idempotency/pagination; old-client and domain-event compatibility; concurrency/consistency contract respected for critical commands.
- **Safety/privacy:** abuse/blocks/rate limits; data classification and PII/log/analytics review; private-location/lifecycle/audit/OperationalFlag implications; targeted threat model updated for high-risk boundary changes.
- **Reliability/ops:** degraded behavior defined/tested; external dependency timeout/retry/idempotency policy; duplicate safety, SLI impact, provider outage, rollout/rollback/runbook/kill switch. Do not activate infrastructure complexity solely because the architecture supports it.
- **Product/business:** for user-visible/growth/B2B work, name the PMF/liquidity/GTM/organizer hypothesis affected and the measurable downstream outcome. Do not treat installs, registrations, page views or time-in-app as success when the goal is IRL participation. Preserve `fi/en/ru` launch support where the flow is user-visible.
- **Scope discipline:** new architecture/features require a concrete product, safety, legal, reliability or measured-scale reason. Prefer the smallest change that advances the minimum proof loop; speculative completeness is not Done. Active consumer V1 must remain within `validation/MVP_BOUNDARY.md` unless an evidence/ADR gate explicitly changes it. No task is Done if it violates a validation/business contract.
- **Supply chain:** deterministic dependencies, pinned CI policy, no secrets, artifact provenance/SBOM path where applicable.
- **Tests:** focused tests first; DB/concurrency/auth/contract/migration/E2E/visual/accessibility/realtime as relevant; broad gate suites when required.
- **Docs:** update only affected source-of-truth docs/plan/generated artifacts; do not duplicate specs.
- **Contract checks:** `node scripts/check-context-budget.mjs`, `node scripts/check-architecture-contracts.mjs`, `node scripts/check-business-contracts.mjs`, `node scripts/check-validation-scope.mjs` and `node scripts/check-pre-dev-gate.mjs` pass. GitHub Actions must run these checks on pull requests and pushes to `main`.
