# Data Classification — Architecture 1.3

Every persisted field, event payload, log field, analytics property and exported dataset must have an effective classification.

| Class | Examples | Baseline controls |
|---|---|---|
| `PUBLIC` | published event title, public venue label | public delivery allowed; integrity still required |
| `INTERNAL` | non-sensitive operational metadata | staff/service access; no public exposure |
| `PERSONAL` | email, user ID linkages, IP/device identifiers | GDPR lifecycle, purpose limitation, access control, log minimization |
| `SENSITIVE` | moderation evidence, safety reports, reputation evidence | need-to-know RBAC, encryption, audited access, strict retention |
| `HIGHLY_SENSITIVE` | exact private-home location, identity-verification result metadata | dedicated authorization path, envelope encryption where specified, no generic DTO/log/analytics |
| `SECURITY_SECRET` | credentials, tokens, signing/KMS material | secret manager/HSM/KMS path only; never persisted in app DB/logs/analytics |

## Derived policy
Classification determines logging, analytics eligibility, retention, export/delete behavior, encryption, access review and audit requirements. A downstream copy may not silently downgrade classification.

## Hard rules
- Exact private location = `HIGHLY_SENSITIVE`.
- Auth/session/signing secrets = `SECURITY_SECRET`.
- Moderation evidence is at least `SENSITIVE`.
- IP/device identifiers are `PERSONAL` unless a stricter context applies.
- Unknown new data defaults to the stricter plausible class until reviewed.
