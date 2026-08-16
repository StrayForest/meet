# Threat model — Private-home exact-location disclosure

Status: **DESIGN-ONLY / NOT V1**

This model exists to preserve a safe domain boundary. It does **not** authorize PRIVATE_HOME creation, discovery or disclosure. Any future user-facing activation requires separate product evidence, legal/privacy/ops review, an accepted scope/ADR change and a fresh implementation review of this model.

## Scope
Future exact private-home address/coordinates/access instructions, host assignment, participant authorization, disclosure timing and audit.

## Assets
A person's exact home location and access instructions, household safety, participant identity/trust state, disclosure audit and encrypted key material.

## Adversaries
Scrapers, unauthorized users, rejected/removed participants, blocked users, compromised accounts/staff, insiders with database/log access and attackers exploiting generic event/feed/map DTOs or caches.

## Trust boundaries
Generic EventOccurrence public data ↔ isolated private-location ciphertext; application authorization ↔ dedicated exact-location retrieval; application ↔ KMS; participant state/block/verification ↔ disclosure decision; private-location response ↔ client display/cache.

## Attack paths
- generic feed/map/event DTO accidentally joins/decrypts exact location;
- direct-object-reference request retrieves another occurrence's location;
- user joins, obtains address, then is removed/blocked but retains server access;
- disclosure occurs before required participation/verification/time window;
- exact address enters logs, analytics, crash reports, notifications or generic cache;
- database dump reveals plaintext or reusable unbound ciphertext;
- staff/support tools expose location without need-to-know authorization;
- share/export functionality includes exact location by default;
- key rotation/recovery failure creates either data loss or unsafe bypass.

## Preventive controls
- exact location stored only as self-describing envelope ciphertext in a dedicated structure; generic occurrence rows contain only public label/coarse geography/reference;
- dedicated retrieval command/endpoint revalidates current occurrence, participation, verification, block/safety state and disclosure window on every access;
- ciphertext/AAD binds the payload to the intended context/version; keys managed through KMS with least privilege and rotation procedure;
- generic feed/map/search/event DTO code paths cannot import/decrypt the private-location representation; architecture fitness and negative tests enforce this boundary;
- `HIGHLY_SENSITIVE` classification forbids exact location in logs, analytics and generic event payloads;
- staff access is explicit, need-to-know and audited; no consumer impersonation shortcut;
- notifications/shares default to public meeting context and never include exact location without a separately reviewed policy;
- cached exact-location responses are minimized/short-lived or avoided and never placed in shared/public caches.

## Detection
Alert/audit every exact-location retrieval, authorization denial anomaly, bulk access pattern, staff access and any detection of private-location fields in generic DTO/log/analytics scanning.

## Response and recovery
Disable PRIVATE_HOME/disclosure globally, revoke compromised sessions/keys, rotate affected encryption material where required, identify every access from audit data, notify affected users/regulators when legally required, preserve incident evidence and block reactivation until model/control review passes.

## Residual risk
Once an authorized participant legitimately sees an address, they can copy or disclose it outside the system. Cryptography cannot remove this human disclosure risk; eligibility, timing, safety policy and product decision must justify the residual exposure.

## Validation mapping
No V1 launch test may require PRIVATE_HOME to be enabled. Before any future activation, add implementation tests for DTO non-leakage, authorization revocation, block/removal changes, disclosure window, encryption/AAD/rotation, KMS recovery, staff access, logging/analytics exclusion and incident kill switch. External security review is required before broad rollout.
