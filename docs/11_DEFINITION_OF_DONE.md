# 11 — Definition of Done — Architecture 1.3

A task is done only when applicable requirements pass.

- **Architecture/data:** correct module/domain semantics; migration/index/constraints/backward rollout; executable schema/generated DBML consistent.
- **API/contracts:** validation/auth/stable errors/OpenAPI; idempotency/pagination; old-client and domain-event compatibility.
- **Safety/privacy:** abuse/blocks/rate limits; PII/log review; private-location/lifecycle/audit/OperationalFlag implications.
- **Reliability/ops:** degraded behavior, retry/duplicate safety, SLI impact, provider outage, rollout/rollback/runbook/kill switch.
- **Supply chain:** deterministic dependencies, pinned CI policy, no secrets, artifact provenance/SBOM path where applicable.
- **Tests:** focused tests first; DB/concurrency/auth/contract/migration/E2E/visual/accessibility/realtime as relevant; broad gate suites when required.
- **Docs:** update only affected source-of-truth docs/plan/generated artifacts; do not duplicate specs. `node scripts/check-context-budget.mjs` passes.
