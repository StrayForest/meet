# AUDIT_LOGGING — Security and privileged audit trail

## Purpose
Audit is evidence for privileged/safety actions, not ordinary debug logging.

## Must audit
- staff authentication/role changes;
- moderation actions/appeals;
- exact private-location exceptional staff access;
- OperationalFlag changes/approvals;
- ClientPolicy force/min-version changes;
- organization claims/role changes;
- canonical merges/dedupe overrides;
- sensitive data export/deletion administrative actions;
- security/key-management administrative events where available.

## Integrity
Application role has INSERT only on audit table; no normal UPDATE/DELETE. Retention/purge occurs through a separate controlled maintenance role/process.

Each row includes `previous_hash` and `entry_hash` for a logical audit stream/partition using canonical serialized fields. Hash chaining is tamper-evidence, not a substitute for access control.

Critical audit is periodically exported to an independent immutable/retention-controlled sink (for example Cloud Logging/Storage retention mechanism selected during Phase 10). A DB administrator should not be able to invisibly rewrite both primary and external evidence with one application credential.

## Privacy
Metadata is minimized; do not place message bodies/exact addresses/KYC documents in general audit metadata. Reference protected evidence IDs instead.

## Access
Audit search is privileged, least-privilege and itself auditable for highly sensitive evidence access.
