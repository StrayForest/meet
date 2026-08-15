# 11 — Definition of Done — Architecture 1.3

A task is done only when applicable requirements pass.

## Architecture/data
Correct module; Event/Template/Recurrence/Occurrence semantics; physical-only V1; admission!=participation; executable schema/generated DBML consistent; migration/index/constraint and backward rollout addressed.

## API/contracts
Validation/auth/stable errors/OpenAPI; idempotency/pagination; old-client compatibility; domain-event contract/version updated if emitted.

## Safety/privacy
Abuse/rate limit; blocks/restrictions; PII/log review; private-location encryption/leak analysis; lifecycle/retention; privileged audit; OperationalFlag strategy.

## Reliability/operations
Failure/degraded behavior, SLI impact, retry/duplicate safety, provider outage, rollout/rollback, relevant runbook/kill switch.

## Supply chain
Deterministic dependency update, CI action pinned policy, no secret leakage, artifact provenance/SBOM path where applicable.

## Tests
Unit/application, real DB integration, concurrency/authorization/contract/migration, E2E/visual/accessibility/realtime as relevant.

## Documentation
Product/design/backend/ADR/exec plan/generated docs updated. No silent debt; record approved shortcut.
