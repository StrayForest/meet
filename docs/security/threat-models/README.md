# Threat Models — Architecture 1.3

Threat modeling is mandatory for high-risk boundaries. Each model records assets, attacker, attack paths, impact, preventive controls, detection, recovery and residual risk.

## Required launch models

| Boundary | Primary threats | Mandatory controls |
|---|---|---|
| Account takeover | credential/session theft, recovery abuse | strong auth/session lifecycle, rate limits, revocation, anomaly/audit signals |
| Private-home disclosure | DTO/log/cache/authz leak, scraping | isolated encrypted payload, dedicated authorization, no generic joins, access audit |
| Host/event abuse | deceptive venue/event, unsafe organizer behavior | verification/risk gates, reports, limits, moderation, emergency OperationalFlags |
| Moderation abuse | malicious reports, staff overreach, evidence tamper | case linkage, immutable evidence, scoped staff RBAC/MFA, append-only audit, appeals |
| Staff compromise | stolen privileged session/key | separate StaffAccount, MFA/security keys, short sessions, least privilege, two-person high-risk control |
| Media upload | malware/polyglot/content abuse | signed upload, type/size validation, quarantine/scan, safe transforms, separate serving origin |
| Ingestion/SSRF | hostile source URL/parser payload | allowlisted connectors, SSRF-safe fetcher, egress policy, parser isolation, provenance/version trace |
| Payment abuse | duplicate charge/refund/webhook spoof | provider idempotency, signed webhooks, ledger/entitlement separation, reconciliation |
| Realtime abuse | auth bypass, spam, reconnect storm | authenticated subscriptions, authorization per conversation, rate/backpressure, durable source of truth |

A high-risk feature cannot launch with only a checklist; its concrete model must be reviewed against implementation and tests.
