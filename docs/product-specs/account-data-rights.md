# Product spec — Account lifecycle, export and deletion

## Account states
ACTIVE, RESTRICTED, SUSPENDED, DELETION_PENDING, DELETED.

## Sessions
User can inspect/revoke active sessions/devices where provider capabilities support it. Security changes may revoke all sessions.

## Export
Request creates an asynchronous export job. Deliver a time-limited authenticated download in machine-readable/common formats. Include applicable profile, events, participation, connections, preferences and user content; document exclusions/legal limitations.

## Delete
Clear explanation → re-authentication where appropriate → deletion request → immediate account access restriction → orchestrated deletion/anonymization across DB, media, auth, analytics/vendor identifiers subject to documented legal/safety retention exceptions.

Hosted future events require policy decision: cancel/reassign organization-owned events; user community events are cancelled or anonymized according to state and participant impact.

## Safety retention
Do not promise instant erasure of evidence that has a valid retention/legal basis. Access is restricted and retention policy documented.

## Acceptance
Idempotent requests; job progress; no orphaned public PII; vendor deletion failures retried/audited; export/delete available without contacting support.