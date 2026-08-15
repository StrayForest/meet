# 05 — Trust, identity, security, privacy and compliance

This is an engineering specification and must be reviewed by qualified legal/privacy counsel before launch.

## 1. Safety posture

The platform facilitates offline meetings between strangers, including optional private-home events. Trust & Safety is a first-class domain.

## 2. Age

Initial public network is 18+.

DOB self-declaration is required. Higher-trust age/identity verification is external.

A future Youth Mode is a separate product architecture/policy review, not a simple feature flag on the adult network.

## 3. Trust levels

Suggested internal levels:
- authenticated;
- email verified;
- phone verified;
- photo/liveness verified;
- strong identity/age verified;
- verified organization authority.

Do not expose one numeric “social credit” score.

## 4. Identity provider abstraction

Finland:
- provider capable of strong Finnish eID / FTN-compatible verification.

International:
- provider capable of document/liveness/age verification.

Persist only:
- provider;
- provider reference;
- type;
- result/status;
- country;
- age threshold result;
- identity verified yes/no;
- timestamps;
- limited reason codes where lawful.

Never store passport scans or passport numbers.

## 5. Strong verification mandatory for

- private-home host;
- organization owner/claim owner where policy requires;
- staff;
- account escalated by safety policy.

## 6. Private-home exact location

Controls:
- exact address in separate restricted table;
- application-level envelope encryption using KMS;
- public card returns only neighborhood/coarse point;
- exact location disclosed only to confirmed/approved participants and only according to disclosure policy/window;
- authorization tests specifically target leakage;
- sensitive access can be audited where appropriate.

## 7. Home-event protections

- strong host identity;
- phone verification;
- participant cap;
- safety notice;
- Share My Plans;
- heightened moderation/risk thresholds;
- report/block/remove controls;
- configurable participant trust minimum;
- private address disclosure scheduling.

## 8. Report and moderation architecture

`Report / classifier signal → triage → evidence snapshot → case → review → action → reasoned notice → appeal → closure`

AI may:
- classify;
- prioritize;
- pre-screen;
- suggest reason codes.

AI should not be sole final authority for irreversible high-impact action where meaningful human review is appropriate.

## 9. Moderation evidence

Evidence references can include:
- reported message snapshot/reference;
- event/profile content version;
- relevant audit records;
- limited structured account history.

Do not indiscriminately collect unrelated private content.

## 10. Action requirements

Every action stores:
- action type;
- reason code;
- target;
- actor/system;
- evidence reference;
- start/end;
- appealability;
- audit record.

## 11. Dating/sexual solicitation safety

The product does not position as dating.

Prohibited:
- explicit sexual solicitation;
- event-as-dating-ad behavior;
- repeated romantic/sexual cold outreach;
- unwanted sexual follow-up.

Enforcement combines rules, classifier signals, reports and behavior history.

## 12. Authentication/security

Consumer:
- Google Cloud Identity Platform;
- short-lived credentials/session practices;
- revoke sessions;
- device records.

Staff:
- isolated privileged auth path;
- mandatory MFA;
- hardware/security-key support preferred;
- least privilege;
- short sessions;
- audited privileged actions.

## 13. Authorization

- centralized guards/policies;
- deny by default;
- organization RBAC;
- resource membership checks;
- safety/account restrictions;
- staff scopes;
- horizontal/vertical escalation tests.

## 14. Edge/API security

Cloudflare:
- DNS;
- WAF;
- rate limiting;
- bot controls;
- Turnstile for selected risk-prone flows;
- CDN for safe public assets.

Backend:
- validation;
- body limits;
- per-route rate limits;
- CORS allowlist;
- CSRF defense for cookie-authenticated mutations;
- webhook signatures;
- idempotency;
- SSRF-safe URL fetch architecture;
- request correlation IDs.

## 15. Media security

Flow:
`signed upload → quarantine → MIME/size validation → re-encode/EXIF handling → malware check if applicable → moderation → publish derivative`

Clients never receive permanent write credentials.

## 16. Secrets

- GCP Secret Manager;
- Cloud KMS;
- GitHub Actions → GCP via Workload Identity Federation;
- no long-lived service-account JSON keys where avoidable;
- never commit secrets.

## 17. Privacy minimization

Do not collect/store by default:
- continuous GPS history;
- exact home address history;
- contact-book upload;
- unnecessary sensitive traits;
- raw identity-provider payloads.

Current precise location used for discovery can be ephemeral; analytics gets coarse geography unless a specific lawful need exists.

## 18. GDPR engineering work before launch

- records of processing;
- DPIA;
- privacy policy;
- terms;
- community guidelines;
- vendor DPAs;
- retention schedule;
- source-license register;
- user export/delete flows;
- incident response process.

## 19. DSA-ready moderation architecture

Engineering must support:
- user reporting;
- reasoned moderation decisions;
- appeals;
- audit trail;
- transparency metrics/export capability.

Actual legal obligations are reviewed before launch and as scale/jurisdiction changes.

## 20. Retention engineering defaults

Central configuration/policy, not scattered constants.
Initial engineering assumptions subject to legal review:
- operational logs ~30 days;
- audit logs ~365 days;
- backups ~35 days;
- moderation evidence ~180 days after case closure unless legal hold/other lawful basis;
- analytics retention according to privacy policy and minimization.

## 21. Account deletion/export

Delete account is an orchestrated job across:
- operational DB;
- object storage;
- auth provider;
- analytics identifiers;
- notification providers;
- retained safety/legal exceptions.

Export includes user-owned/personal data in a machine-readable form where applicable.

## 22. Threat-model priorities

- credential stuffing;
- fake-account farms;
- harassment/stalking;
- malicious hosts;
- exact-address leakage;
- IDOR;
- source poisoning;
- malicious URLs/SSRF;
- media abuse;
- capacity race;
- duplicate async processing;
- organization account compromise;
- admin compromise;
- analytics privacy leakage;
- dependency/supply-chain compromise.

## 23. Launch security gates

Before public launch:
- SAST/dependency/container scanning;
- authorization test suite;
- OWASP API review;
- mobile configuration review;
- abuse/rate-limit tests;
- backup restore test;
- external penetration test before broad private-home rollout.
