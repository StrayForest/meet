# Analytics event catalog — initial contract

Server mutations authoritative; client events exposure/intent. Admission and Meet participation are separate event families.

Onboarding/client: public_discovery_started, onboarding_started/steps, auth_completed, user_onboarded, permission prompt/result, triggering_action_resumed, update prompt/force update, unsupported request. No mandatory-interest completion event.

Discovery: impression/opened/occurrence selected/search/filter/map/saved, recommendation reason/exploration bucket where privacy-safe. An impression alone is not a durable preference signal.

Social confidence: social_context_viewed, company_group_flow_opened, join_abandoned, join_completed and optional standardized decline_reason. Do not collect free-text sensitive explanations by default and never fabricate social proof.

Admission: external clicked/unavailable; never implies ownership.
Participation: join started/requested/confirmed/waitlisted/cancelled, waitlist offer created/accepted, checked in.
Attendance/recommendation: credible attendance/no-show/repeat are server/domain truth where available and may feed privacy-safe affinity models; derived affinity is not public profile data.
Supply: event/occurrence created/cancelled, ingestion imported/merged/alias/source fetch. Operational source diagnostics include connector/normalizer versions in operational telemetry, not arbitrary user analytics.
Social: pod/member/message metadata/connection/realtime reconnect/recovery.
Safety: report/case/action/appeal/identity verification. Never include evidence body/exact location/raw device-integrity verdict.
B2B: claim/verified/event published/check-in.

OperationalFlag/audit/security/crypto events are authoritative security/audit records, not PostHog truth.

Common context: schema version, pseudonymous actor/session, surface/platform/app/runtime/capabilities, coarse country/city, Event/Occurrence/source type, experiment, correlation ID, timestamp.