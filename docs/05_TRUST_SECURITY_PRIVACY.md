# 05 — Trust, identity, security, privacy and compliance

Engineering specification; legal/privacy counsel reviews launch obligations.

## Safety posture
Meet facilitates physical meetings between strangers. Initial public network 18+; no dating positioning, sexual solicitation or random DMs.

## Identity
Strong verification required for private-home hosts and other explicit high-risk policies. Meet stores provider result/reference, not passport/document image/number.

## Exact private location
Occurrence-scoped. Public label/coarse point live on EventOccurrence. Exact address/coordinate/access instructions are one versioned encrypted payload using envelope encryption defined in `CRYPTOGRAPHY_KEY_MANAGEMENT.md`.

Exact location is fetched only through dedicated current authorization/disclosure policy. Generic event/feed/map DTOs cannot contain it.

## Staff
Separate StaffAccount, mandatory MFA, explicit roles/scopes, short sessions and audited privileged commands. Hardware/security key preferred.

## Moderation/evidence
Report → triage → case → immutable/minimized evidence snapshot → action → notice → appeal. Multiple reports may link to one case. Evidence snapshots record source entity/version/hash/object reference so later edit/delete cannot erase the reviewed evidence.

AI is triage/pre-screening, not sole irreversible authority for high-impact actions.

## App/device integrity
App Attest/Play Integrity may be used as risk signals for abuse-prone actions; never as a social-credit score or sole permanent-ban reason. See `DEVICE_APP_INTEGRITY.md`.

## Audit
Privileged/safety audit follows `AUDIT_LOGGING.md`: application insert-only, tamper-evident chain, independent evidence export.

## Security controls
Deny-by-default authorization, organization multi-role RBAC, route limits, CORS/CSRF as applicable, webhook signatures, idempotency, SSRF-safe fetchers, signed/quarantined media, Secret Manager/KMS, WIF CI.

## Privacy lifecycle
Data minimization and lifecycle/deletion rules are in `DATA_LIFECYCLE_AND_RETENTION.md`. No continuous GPS history/contact-book import by default.

## Mobile/store privacy
Apple privacy manifests/App Store disclosures and Google Play Data Safety are release gates; see `MOBILE_PRIVACY_COMPLIANCE.md`.

## GDPR/DSA launch work
DPIA, RoPA, legal docs, vendor DPAs, source-license register, retention schedule, export/delete flows, incident process, moderation reasons/appeals/transparency and provider data-location review.

## Launch security gates
SAST/dependency/container scanning, supply-chain controls, authorization suite, OWASP API review, mobile release/privacy review, abuse/rate-limit tests, restore drill and external pentest before broad private-home rollout.
