# SECURITY — Short security map

Detailed source of truth: `05_TRUST_SECURITY_PRIVACY.md`.

## Golden invariants
- Managed authentication; staff MFA mandatory.
- Authorization is server-side and deny-by-default.
- Exact private-home address is separately stored, encrypted and authorization-gated.
- Identity documents are never stored by Meet.
- User-generated media follows signed-upload → quarantine → validation → moderation → publish.
- External URLs/connectors are SSRF-safe.
- Secrets live in Secret Manager/KMS; CI uses Workload Identity Federation.
- Admin and moderation actions are audited.
- Logs/analytics exclude tokens, DOB, private address, identity docs and message bodies.
- Every social feature has report/block and abuse-rate considerations.

## Security docs that must exist with code
As implementation grows, keep threat-model test cases and authorization matrix close to relevant modules. Security invariants should graduate from prose into tests/lints wherever mechanically enforceable.