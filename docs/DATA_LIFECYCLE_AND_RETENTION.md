# DATA_LIFECYCLE_AND_RETENTION — Delete, anonymize, retain

Engineering policy; legal/privacy review can adjust periods but not bypass explicit lifecycle ownership.

| Data class | Account deletion | Default engineering disposition | Exception |
|---|---|---|---|
| Public/private profile | delete/anonymize | prompt workflow | legal hold/security need |
| Auth/device/push | revoke/delete | prompt | limited fraud/security evidence |
| Explicit discovery/privacy preferences | delete | prompt | none expected |
| Derived recommendation affinity | delete/pseudonymize user mapping | prompt; derived features have documented TTL/decay | lawful aggregate model-quality data only |
| Search/filter/open behavioural history | delete/pseudonymize user mapping | minimized/TTL-bound; do not retain indefinitely merely for personalization | safety/legal evidence only when independently justified |
| Connections/blocks | delete/anonymize relationship | prompt | safety case reference |
| Future participation | cancel/remove | immediate workflow | none |
| Past attendance aggregates | pseudonymize/anonymize | retained only if needed for marketplace/model metrics | active safety/legal case |
| Community events authored | preserve event history where useful but detach/anonymize author | policy | legal/safety |
| Messages | user-facing deletion policy + pseudonymization; not guaranteed to erase other participants' conversation history instantly | retention policy | reported evidence snapshot/legal hold |
| Feedback/reputation | remove public attribution and recompute derived projections | workflow | safety evidence |
| Media | delete unreferenced user-owned assets | workflow/object lifecycle | protected moderation evidence copy |
| Reports/moderation | retain minimized case/evidence for policy period, pseudonymize where possible | e.g. 180d default after closure pending legal review | legal hold/severe safety |
| Audit | retain, pseudonymize actor where lawful without destroying security meaning | e.g. 365d default | security/legal policy |
| Analytics | delete/pseudonymize user mapping where supported; aggregate facts may remain | vendor/warehouse workflow | lawful aggregate data |
| Backups | age out by backup schedule, no active reuse of deleted data | ~35d initial | disaster recovery only |

## Recommendation data principles
Observed behaviour is stronger product evidence than declared interests, but it is still personal behavioural data. Collect only signals with a documented purpose, minimize raw-history retention, prefer derived/decayed features where possible, provide personalization controls/reset, and never expose inferred affinity as public identity.

Attendance/no-show truth used for safety/operations is distinct from recommendation inference and follows its own authorization/retention policy.

## Deletion orchestration
`account_deletion_requests` drives idempotent steps across DB, media, auth provider, notification provider and analytics mappings. Each step records outcome/retry; partial deletion is visible operationally.

## Restore after deletion
Disaster restore may temporarily reintroduce records from backup; post-restore deletion ledger/jobs must reapply deletions before ordinary processing where feasible.

## Data export
Export is generated from current accessible personal data, encrypted/private, expires automatically and never includes staff-only security secrets or unrelated third-party personal data.