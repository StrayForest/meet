# Analytics event catalog — initial contract

Server mutations authoritative; client events exposure/intent. Admission and Meet participation are separate event families.

Onboarding/client: onboarding started/steps, user onboarded, permission prompt/result, update prompt/force update, unsupported request.
Discovery: impression/opened/occurrence selected/search/filter/map/saved.
Admission: external clicked/unavailable; never implies ownership.
Participation: join started/requested/confirmed/waitlisted/cancelled, waitlist offer created/accepted, checked in.
Supply: event/occurrence created/cancelled, ingestion imported/merged/alias/source fetch. Operational source diagnostics include connector/normalizer versions in operational telemetry, not arbitrary user analytics.
Social: pod/member/message metadata/connection/realtime reconnect/recovery.
Safety: report/case/action/appeal/identity verification. Never include evidence body/exact location/raw device-integrity verdict.
B2B: claim/verified/event published/check-in.

OperationalFlag/audit/security/crypto events are authoritative security/audit records, not PostHog truth.

Common context: schema version, pseudonymous actor/session, surface/platform/app/runtime/capabilities, coarse country/city, Event/Occurrence/source type, experiment, correlation ID, timestamp.
