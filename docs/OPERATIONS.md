# OPERATIONS — Environments, releases and runbooks

## Environments
Local → dev → staging → production. Production GCP project/data/secrets are isolated. Staging mirrors topology closely enough for migrations/integrations without using production personal data.

## Releases
Immutable container revisions. Database changes are backward compatible. High-risk behavior behind feature flags. Production promotion requires green gates and protected approval until mature automation replaces it.

## Rollback
App: shift Cloud Run traffic to known-good revision. Feature: kill switch/flag. DB: prefer forward-fix; destructive migrations only after compatibility window and backup validation.

## Incident priorities
SEV1: auth/API widespread outage, data integrity, active serious security breach, safety/private-address control failure.
SEV2: major discovery/queue/DB/source degradation.
SEV3: localized non-critical impairment.

Incident flow: declare owner → mitigate harm → preserve evidence → rollback/flag → restore → integrity verify → communicate → postmortem → repository guardrail/test/doc update.

## Required runbooks before launch
- DB PITR/restore and quarterly drill;
- compromised staff credential;
- private-address/security incident;
- severe moderation/safety escalation;
- event source outage/stale data;
- queue backlog/DLQ;
- payment webhook outage once monetized;
- KYC provider outage;
- app-store emergency release.

## External provider degradation
Correctness must not depend on analytics. Recommendation falls back deterministic. KYC outage blocks new verification, not existing valid status. Event-source outage preserves last-known records with freshness/cancellation caution. Valkey outage may degrade cache/realtime but PostgreSQL keeps authority.

## Data operations
Backfills are resumable/idempotent and progress visible. Never run unbounded production repair scripts from a laptop without review/audit.

## Support tooling
Admin actions use domain commands, reason codes and audit. Do not directly edit production rows to solve routine support cases.