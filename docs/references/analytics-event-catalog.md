# Analytics event catalog — initial contract

Server mutation events are authoritative. Client events describe exposure/intent. Admission/ticket interactions and Meet participation are separate event families.

## Onboarding/client lifecycle
`mobile.onboarding.started`, `mobile.onboarding.step_completed`, `server.user.onboarded`, `mobile.permission.prompted`, `mobile.permission.result`, `mobile.client.update_prompted`, `mobile.client.force_update_shown`, `server.client.unsupported_request`.

## Discovery
`mobile.event.impression`, `mobile.event.opened`, `mobile.occurrence.selected`, `mobile.search.submitted`, `mobile.filter.applied`, `mobile.map.opened`, `mobile.map.event_selected`, `mobile.event.saved`.

## Admission
`mobile.admission.external_clicked`, `mobile.admission.external_unavailable`.

These events never imply confirmed ticket ownership unless future verified ticket integration emits a distinct server-authoritative ticket event.

## Participation
`mobile.participation.join_started`, `server.participation.requested`, `server.participation.confirmed`, `server.participation.waitlisted`, `server.participation.cancelled`, `server.waitlist.offer_created`, `server.waitlist.offer_accepted`, `server.attendance.checked_in`.

## Supply/canonicalization
`server.event.created`, `server.event.published`, `server.occurrence.created`, `server.occurrence.cancelled`, `server.ingestion.event_imported`, `server.ingestion.event_merged`, `server.ingestion.alias_created`, `server.source.fetch_completed`.

## Social/realtime
`server.pod.created`, `server.pod.member_confirmed`, `server.message.sent` (metadata only), `server.connection.created`, `mobile.realtime.reconnected`, `mobile.realtime.recovery_completed`.

## Safety
`server.report.created`, `server.moderation.action_created`, `server.appeal.created`, `server.identity.verified`. Never include sensitive evidence/body/exact location.

## B2B
`b2b.organization.claim_started`, `server.organization.verified`, `b2b.event.published`, `server.checkin.completed`.

## Operations
Operational safety flag changes are **audit/security events**, not ordinary product analytics. Do not rely on PostHog analytics delivery as the source of operational-flag audit truth.

## Required common context
Schema version, pseudonymous actor/session where applicable, surface, platform, app version/build/runtime/capabilities, country/city coarse context, event/occurrence/source type, experiment assignment, correlation ID and timestamp.

Do not send DOB, exact private address, message body, KYC evidence or auth tokens.

Final payload schemas become generated/typed contracts during Phase 0/feature implementation.
