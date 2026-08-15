# SECURITY — Short security map

Detailed source of truth: `05_TRUST_SECURITY_PRIVACY.md`.

## Golden invariants
- Managed consumer authentication; staff identity is separate and staff MFA mandatory.
- Authorization is server-side and deny-by-default.
- Exact private-home location is bound to the concrete EventOccurrence/location assignment, separately encrypted and fetched only through current authorization; it never appears in generic Event/feed/map DTOs.
- Identity documents are never stored by Meet.
- User-generated media follows signed-upload → quarantine → validation/re-encode/moderation → publish.
- External URLs/connectors are SSRF-safe; external ticket links are validated and never treated as proof of ticket ownership.
- Secrets live in Secret Manager/KMS; CI uses Workload Identity Federation.
- Admin/moderation/operational-flag/client-policy changes are audited.
- Logs/analytics exclude tokens, DOB, private exact location, identity documents, message bodies and push tokens.
- Every social feature has report/block and abuse-rate considerations.
- Operational safety kill switches are first-party and do not depend on PostHog availability.
- Supported old mobile clients remain within the documented API compatibility policy; a backend change cannot silently make them unsafe.

## Security docs that must exist with code
As implementation grows, keep threat-model test cases and authorization matrices close to relevant modules. Security invariants should graduate from prose into DB constraints, tests, structural checks and runtime guardrails wherever mechanically enforceable.
