# OPERATIONS — Environments, releases and runbooks

## Release path
Branch/PR → required CI/review → staging → protected production promotion. Backend/web deploy immutable Cloud Run artifacts; mobile follows EAS compatibility lifecycle.

## Rollback
Cloud Run traffic rollback; web previous artifact; mobile compatible OTA rollback or emergency binary + operational mitigation; DB prefers forward-fix; safety flag can disable risky flow without redeploy.

## Required runbooks before launch
- DB PITR/restore;
- primary-region recovery per `DISASTER_RECOVERY.md`;
- DB connection exhaustion;
- compromised staff credential;
- private-address incident/crypto-key incident;
- severe moderation escalation;
- operational flag control-plane failure/two-person re-enable;
- source outage/parser bug by connector version;
- incorrect dedupe merge;
- queue/DLQ backlog;
- KYC/auth outage;
- mobile emergency release/forced deprecation;
- origin-auth/Cloudflare failure;
- supply-chain/build compromise;
- payment webhook outage when monetized.

## Incident policy
SEV1 safety/data-integrity event triggers mitigation, evidence preservation and deployment freeze except recovery/mitigation until owner clears it. Error-budget policy follows `SLO_SLI_ERROR_BUDGETS.md`.

## Data operations
Backfills resumable/idempotent/observable. No permanent console/laptop DB edits. Deletion ledger reapplied after disaster restore. Audit retention/purge uses controlled maintenance role.
