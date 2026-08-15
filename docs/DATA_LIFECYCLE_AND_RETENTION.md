# DATA_LIFECYCLE_AND_RETENTION — Delete, anonymize, retain

Engineering policy; legal/privacy review can adjust periods but not bypass explicit lifecycle ownership.

| Data class | Account deletion | Default engineering disposition | Exception |
|---|---|---|---|
| Public/private profile | delete/anonymize | prompt workflow | legal hold/security need |
| Auth/device/push | revoke/delete | prompt | limited fraud/security evidence |
| Interests/preferences | delete | prompt | none expected |
| Connections/blocks | delete/anonymize relationship | prompt | safety case reference |
| Future participation | cancel/remove | immediate workflow | none |
| Past attendance aggregates | pseudonymize/anonymize | retained only if needed for marketplace metrics | active safety/legal case |
| Community events authored | preserve event history where useful but detach/anonymize author | policy | legal/safety |
| Messages | user-facing deletion policy + pseudonymization; not guaranteed to erase other participants' conversation history instantly | retention policy | reported evidence snapshot/legal hold |
| Feedback/reputation | remove public attribution and recompute derived projections | workflow | safety evidence |
| Media | delete unreferenced user-owned assets | workflow/object lifecycle | protected moderation evidence copy |
| Reports/moderation | retain minimized case/evidence for policy period, pseudonymize where possible | e.g. 180d default after closure pending legal review | legal hold/severe safety |
| Audit | retain, pseudonymize actor where lawful without destroying security meaning | e.g. 365d default | security/legal policy |
| Analytics | delete/pseudonymize user mapping where supported; aggregate facts may remain | vendor/warehouse workflow | lawful aggregate data |
| Backups | age out by backup schedule, no active reuse of deleted data | ~35d initial | disaster recovery only |

## Deletion orchestration
`account_deletion_requests` drives idempotent steps across DB, media, auth provider, notification provider and analytics mappings. Each step records outcome/retry; partial deletion is visible operationally.

## Restore after deletion
Disaster restore may temporarily reintroduce records from backup; post-restore deletion ledger/jobs must reapply deletions before ordinary processing where feasible.

## Data export
Export is generated from current accessible personal data, encrypted/private, expires automatically and never includes staff-only security secrets or unrelated third-party personal data.
