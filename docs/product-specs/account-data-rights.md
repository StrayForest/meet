# Product spec — Account and data rights

User can request data export and account deletion. Both are durable jobs, not fire-and-forget HTTP actions.

Deletion follows `DATA_LIFECYCLE_AND_RETENTION.md`: profile/credentials removed, future participation cancelled, authored public history handled by preservation/anonymization policy, messages/feedback/safety evidence treated according to third-party rights and legal/safety retention, analytics identifiers deleted/pseudonymized where supported, media cleaned when unreferenced.

After disaster restore, deletion ledger/workflows must be reapplied before restored deleted data becomes ordinary active data.

Export is private, expiring and excludes unrelated third-party/security/admin secrets.
