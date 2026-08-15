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

### Concurrent writers
Hash-chain insertion for one `stream_key` must be serialized so two concurrent writes cannot both read the same previous head. Implementation uses one documented DB-safe mechanism such as transaction-scoped PostgreSQL advisory lock keyed by stream, or a locked stream-head row. The audit insert and chain-head advance happen in one transaction. Concurrency tests must prove a valid linear chain under parallel writes.

A chain verifier periodically recomputes hashes and alerts on gap/mismatch. Hash algorithm/canonical-serialization version is versioned so future migration is possible.

## Independent evidence
Critical audit is periodically/streamingly exported to an independent immutable or retention-controlled sink selected during Phase 10. A single application/database credential must not be able to invisibly rewrite both primary and independent evidence.

## Privacy
Metadata is minimized; do not place message bodies/exact addresses/KYC documents in general audit metadata. Reference protected evidence IDs instead.

## Access
Audit search is privileged, least-privilege and itself audited for highly sensitive evidence access.