# Product spec — Company finding, occurrence chat and evidence-gated connections

## Company-finding group
Internal/domain name may remain `Pod`, but consumer V1 copy must use plain validated language such as `Find company`, `Join group` or equivalent fi/en/ru wording.

A group is attached to one EventOccurrence, including imported/ticketed events. Purpose is practical coordination: arrive together, first-timers, language-compatible company, meet beforehand or similar occurrence-specific needs.

Fields may include title/purpose, meeting point, language, capacity, ParticipationMode and members.

Groups never contain AdmissionMode/ticket ownership semantics. A group around a ticketed concert coordinates people; it does not sell/verify the concert ticket.

## Chat
Launch chat is occurrence/group-scoped and requires current authorized membership. Messages: text, emoji, image where justified, meeting-point/system messages. No arbitrary file/voice/video.

The UI must keep event/occurrence context visible so the inbox does not become a generic social or dating surface.

## Persistent connections — NOT core V1
No random/open DMs. Persistent connection storage/domain support may exist, but consumer connection/DM UX is **Phase 7B / H7 evidence-gated**. Do not make it a launch dependency.

If enabled after evidence:
- connection requires mutual explicit consent;
- storage uses one canonical unordered user pair;
- messaging requires current mutual connection and block checks;
- product prompts should prefer a useful next IRL action over collecting abstract connections.

If users obtain value from event-scoped company and do not want durable relationships, the product must preserve that mode rather than forcing a social graph.

## Realtime
Follow `../REALTIME.md`. Message persistence precedes durable fanout. Connection loss is expected; reconnect reauthenticates/resubscribes and REST recovers durable state/cursor. Presence/typing are approximate. Managed realtime complexity must remain proportional to current proof-loop needs.

## Safety
Block immediately revokes communication/subscription eligibility. Reports are available per message/user/group. Rate limits are trust/risk-aware. Participants cannot discover or contact arbitrary users merely because they attended the same event.

## UX
- consumer term is action-first, not `Pod` by default;
- show why the group exists and which occurrence it belongs to;
- avoid swipeable people grids/follower mechanics;
- expose only privacy-safe participant context needed for coordination/confidence;
- allow easy leave/mute/report;
- archive/de-emphasize occurrence chat after the coordination window unless a validated reason requires retention visibility.

## Acceptance
- group schema cannot accept EXTERNAL_TICKET/admission mode;
- conversation context DB constraint valid;
- unauthorized WebSocket subscription test;
- membership revocation/reconnect test;
- duplicate delivery safe;
- report evidence retained;
- forced disconnect recovers durable messages/state via REST;
- no random DM route;
- persistent connection/DM consumer route remains disabled unless the H7/Phase 7B gate is explicitly enabled.