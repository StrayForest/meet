# OPERATIONS — Environments, releases and runbooks

## Environments
Local → dev → staging → production. Production GCP project/data/secrets isolated. Staging mirrors topology sufficiently for migrations/integrations without production personal data.

## Release classes
### Backend/web
Immutable Cloud Run revisions. Backward-compatible DB migrations. Canary/traffic rollback.

### Mobile
Follow `MOBILE_RELEASES.md`: EAS Build/Submit binaries, runtime-compatible EAS Update only, app-store asynchronous adoption, server compatibility window.

### Operational flags
Safety/core kill switches are first-party PostgreSQL-backed, Valkey-cached and audited. PostHog outage must not prevent disabling private-home/event creation/payments/connectors.

## Rollback
- app service: shift Cloud Run traffic to known-good revision;
- web: previous immutable deploy/revision;
- mobile JS: known-good compatible EAS update;
- mobile native: emergency new binary + operational flag mitigation while store rollout completes;
- feature: first-party kill switch/flag;
- DB: prefer forward-fix; destructive contract only after compatibility window/backup validation.

## Incident priorities
SEV1: broad auth/API outage, data integrity, active serious security breach, private-address authorization failure, safety kill-switch failure.
SEV2: major discovery/realtime/queue/DB/source degradation or widespread stale event truth.
SEV3: localized non-critical impairment.

Incident flow: declare owner → mitigate harm → preserve evidence → flag/rollback → restore → integrity verify → communicate → postmortem → repository guardrail/test/doc update.

## Required runbooks before launch
- DB PITR/restore + drill;
- DB connection exhaustion/Cloud Run autoscaling containment;
- compromised staff credential;
- private-address incident;
- severe moderation/safety escalation;
- operational flag/control-plane failure;
- event source outage/stale data;
- dedupe/merge rollback or incorrect canonicalization;
- queue backlog/DLQ;
- KYC/auth provider outage;
- mobile emergency OTA/binary release;
- forced client-version deprecation;
- Universal/App Link misconfiguration;
- payment webhook outage once monetized.

## Provider degradation
Analytics failure does not block product. Recommender falls back deterministic. KYC outage blocks new verification, not existing valid result. Event-source outage follows freshness policy. Valkey outage degrades cache/realtime but PostgreSQL stays authoritative. Push failure leaves durable in-app notification.

## Mobile compatibility operations
Dashboard active users/requests by app version/runtime/capability. Before increasing minimum supported version, verify replacement binary store availability and active-version distribution. Force update requires documented reason.

## Data operations
Backfills resumable/idempotent/observable. No unbounded production repair scripts from a laptop. Canonical event merges are auditable and preserve aliases.

## Support tooling
Admin actions use domain commands, reason codes and audit. Do not directly edit production rows for routine support.
