# SECURITY — Architecture 1.3 map

Detailed trust/privacy: `05_TRUST_SECURITY_PRIVACY.md`.

Golden invariants:
- managed consumer auth; separate staff identity/MFA;
- deny-by-default authorization and organization multi-role RBAC;
- physical EventOccurrence public location is separate from envelope-encrypted exact private location;
- identity documents/payment card data are not stored;
- signed upload→quarantine→validate/re-encode/moderate→publish;
- SSRF-safe connectors/external URLs;
- first-party versioned OperationalFlags independent from PostHog;
- old supported mobile clients remain safe;
- app/device integrity is risk signal, not sole trust decision;
- privileged audit is insert-only/tamper-evident with independent copy;
- CI/release follow `SUPPLY_CHAIN_SECURITY.md`;
- Cloudflare/origin path follows `ORIGIN_SECURITY.md`;
- encryption/key rotation follows `CRYPTOGRAPHY_KEY_MANAGEMENT.md`;
- data deletion/retention follows `DATA_LIFECYCLE_AND_RETENTION.md`.
