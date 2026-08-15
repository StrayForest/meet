# 05 — Trust, identity, security, privacy and compliance

This is an engineering specification and must be reviewed by qualified legal/privacy counsel before launch.

## 1. Safety posture
Meet facilitates offline meetings between strangers, including optional private-home events. Trust & Safety is a first-class domain.

## 2. Age
Initial public network is 18+. DOB self-declaration is required. Higher-trust age/identity verification is external. Future Youth Mode requires separate product/architecture/legal review, not a feature flag on the adult network.

## 3. Trust levels
Internal trust signals may include authenticated, email verified, phone verified, liveness/photo verified, strong identity/age verified and verified organization authority. Do not expose one numeric social-credit score.

## 4. Identity provider abstraction
Finland: FTN/strong Finnish eID-capable provider. International: document/liveness/age provider.

Persist only provider, provider reference, type, status/result, country, age-threshold result, identity/age verified booleans, timestamps and limited lawful reason codes. Never store passport/document images or passport numbers.

Provider DPA/data-processing/data-location/subprocessor/retention behavior is explicitly reviewed before production; do not infer it from the application GCP region.

## 5. Strong verification mandatory for
- private-home host;
- organization owner/claim owner where policy requires;
- staff privileged identity policy;
- account escalated by safety policy.

## 6. Private-home exact location — occurrence scoped
Exact private location belongs to a concrete physical occurrence/location assignment, not automatically to every occurrence in a recurring Event series.

Controls:
- exact address/location in `private_locations` restricted store;
- application-level envelope encryption using KMS;
- EventOccurrence references private location;
- public Event/Occurrence DTO returns only neighborhood/coarse point;
- exact location fetched through dedicated authorized path only after current occurrence, participation, verification and disclosure-window checks;
- authorization/leak tests mandatory;
- exceptional sensitive access may be audited.

## 7. Home-event protections
Strong host identity + phone verification, participant cap, safety notice, Share My Plans, heightened moderation/risk thresholds, report/block/remove controls, configurable participant trust minimum and disclosure policy/window.

First-party operational flag can disable private-home publishing/disclosure-related risky flow without depending on PostHog.

## 8. Staff identity
StaffAccount is separate from consumer User. No privileged authorization is derived from a consumer profile flag.

Staff:
- isolated privileged auth path;
- mandatory MFA;
- hardware/security-key support preferred;
- explicit roles/scopes;
- short sessions;
- all sensitive actions audited;
- disabled staff account loses privileged access independent of consumer account state.

## 9. Report/moderation architecture
`Report / classifier signal → triage → evidence snapshot → case → review → action → reasoned notice → appeal → closure`.

AI may classify, prioritize, pre-screen and suggest reason codes. It is not the sole final authority for irreversible high-impact action where meaningful human review is appropriate.

## 10. Moderation evidence
Evidence may include reported message reference/snapshot, event/profile content version, relevant audit records and limited structured account history. Do not indiscriminately collect unrelated private content.

## 11. Action requirements
Every action stores type, reason code, target, actor/system, evidence reference, start/end, appealability and audit record.

## 12. Dating/sexual solicitation
Product does not position as dating. Prohibited: explicit sexual solicitation, event-as-dating-ad behavior, repeated romantic/sexual cold outreach and unwanted sexual follow-up. Enforcement combines rules, classifier signals, reports and behavior history.

## 13. Consumer authentication
Google Cloud Identity Platform; short-lived credential/session practices; revoke sessions; device records. Identity Platform compliance/vendor review is a public-launch gate.

## 14. Authorization
Centralized deny-by-default policies; organization RBAC; resource membership; safety/account restrictions; staff scopes; horizontal/vertical escalation tests.

## 15. Edge/API security
Cloudflare: DNS/WAF/rate limiting/bot controls/Turnstile/safe CDN.
Backend: validation, body limits, per-route rate limits, CORS allowlist, CSRF for cookie-auth mutations, webhook signatures, idempotency, SSRF-safe fetchers and request correlation IDs.

## 16. Media security
`signed upload → quarantine → MIME/size validation → re-encode/EXIF handling → malware check if applicable → moderation → published derivative`.
Clients never receive permanent write credentials.

## 17. Secrets
Secret Manager/KMS; GitHub Actions via Workload Identity Federation; no long-lived service-account JSON where avoidable; never commit secrets.

## 18. Privacy minimization
Do not collect/store continuous GPS history, exact home-address history, contact-book upload by default, unnecessary sensitive traits or raw identity-provider payloads. Discovery location may be ephemeral; analytics gets coarse geography unless justified.

## 19. GDPR engineering before launch
Records of processing, DPIA, privacy/terms/community guidelines, vendor DPAs, retention schedule, source-license register, export/delete flows, incident process and provider data-location/processing review.

## 20. DSA-ready moderation
Support user reporting, reasoned decisions, appeals, audit trail and transparency metrics/export. Actual legal obligations reviewed before launch and as scale/jurisdiction changes.

## 21. Retention defaults
Central policy/config, subject to legal review. Initial assumptions: operational logs ~30d; audit ~365d; backups ~35d; moderation evidence ~180d after closure unless legal hold/other basis; analytics according to privacy/minimization.

## 22. Account deletion/export
Durable orchestrated jobs across operational DB, media/storage, auth provider, analytics identifiers, notification providers and documented safety/legal exceptions. Requests/status are persisted in DB.

## 23. Threat priorities
Credential stuffing, fake farms, harassment/stalking, malicious hosts, private-address leakage, IDOR, source poisoning, SSRF, media abuse, capacity race, duplicate async processing, organization/admin compromise, analytics privacy leakage and dependency compromise.

## 24. Launch security gates
- SAST/dependency/container scanning;
- authorization suite;
- OWASP API review;
- mobile config/release review;
- provider DPA/data-processing review;
- abuse/rate-limit tests;
- backup restore test;
- external pentest before broad private-home rollout.
