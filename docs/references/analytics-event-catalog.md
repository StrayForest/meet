# Analytics event catalog — initial contract

Server mutation events are authoritative. Client events describe exposure/intent.

## Onboarding
`mobile.onboarding.started`, `mobile.onboarding.step_completed`, `server.user.onboarded`, `mobile.permission.prompted`, `mobile.permission.result`.

## Discovery
`mobile.event.impression`, `mobile.event.opened`, `mobile.search.submitted`, `mobile.filter.applied`, `mobile.map.opened`, `mobile.map.event_selected`, `mobile.event.saved`.

## Participation
`mobile.participation.join_started`, `server.participation.requested`, `server.participation.confirmed`, `server.participation.waitlisted`, `server.participation.cancelled`, `server.waitlist.offer_created`, `server.waitlist.offer_accepted`, `server.attendance.checked_in`.

## Supply
`server.event.created`, `server.event.published`, `server.event.cancelled`, `server.ingestion.event_imported`, `server.ingestion.event_merged`, `server.source.fetch_completed`.

## Social
`server.pod.created`, `server.pod.member_confirmed`, `server.message.sent` (metadata only), `server.connection.created`.

## Safety
`server.report.created`, `server.moderation.action_created`, `server.appeal.created`, `server.identity.verified`. Never include sensitive evidence/body.

## B2B
`b2b.organization.claim_started`, `server.organization.verified`, `b2b.event.published`, `server.checkin.completed`.

## Required common context
Schema version, pseudonymous actor/session where applicable, surface, app/release version, country/city coarse context, occurrence/source type, experiment assignment, correlation ID and timestamp.

Final payload schemas become generated/typed contracts in Phase 0/feature implementation; this catalog prevents ad-hoc naming.