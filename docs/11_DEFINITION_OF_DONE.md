# 11 — Definition of Done — Architecture 1.3

A task is done only when applicable requirements pass.

- **Architecture/data:** correct module/domain semantics; architecture fitness checks pass; migration/index/constraints/backward rollout; executable schema/generated DBML consistent; ownership metadata updated when module boundaries change.
- **API/contracts:** validation/auth/stable errors/OpenAPI; idempotency/pagination; old-client and domain-event compatibility; concurrency/consistency contract respected for critical commands.
- **Safety/privacy:** abuse/blocks/rate limits; data classification and PII/log/analytics review; private-location/lifecycle/audit/OperationalFlag implications; targeted threat model updated for high-risk boundary changes.
- **Reliability/ops:** degraded behavior defined/tested; external dependency timeout/retry/idempotency policy; duplicate safety, SLI impact, provider outage, rollout/rollback/runbook/kill switch.
- **Supply chain:** deterministic dependencies, pinned CI policy, no secrets, artifact provenance/SBOM path where applicable.
- **Tests:** focused tests first; DB/concurrency/auth/contract/migration/E2E/visual/accessibility/realtime as relevant; broad gate suites when required.
- **Docs:** update only affected source-of-truth docs/plan/generated artifacts; do not duplicate specs. `node scripts/check-context-budget.mjs` and `node scripts/check-architecture-contracts.mjs` pass.
