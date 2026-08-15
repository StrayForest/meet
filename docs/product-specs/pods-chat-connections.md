# Product spec — Pods, chat and connections

## Pod
Small social group attached to one EventOccurrence, including imported/ticketed events. Purpose is practical coordination: travel together, language group, first-timers, meet beforehand.

Fields: title, short purpose, meeting point, language, capacity, **ParticipationMode**, members.

Pods never contain AdmissionMode/ticket ownership semantics. A Pod around a ticketed concert coordinates people; it does not sell/verify the concert ticket.

## Chat
EventOccurrence/Pod chats require current authorized membership. Launch messages: text, emoji, image, meeting point/system. No arbitrary file/voice/video.

## Direct messages
No random DMs. Connection DM exists only after mutual connection/post-event consent. Connection storage uses one canonical unordered user pair, preventing duplicate A↔B rows.

## Realtime
Follow `../REALTIME.md`. Message persistence precedes durable fanout. Connection loss is expected; reconnect reauthenticates/resubscribes and REST recovers durable state/cursor. Presence/typing are approximate.

## Safety
Block immediately revokes communication paths/subscription eligibility. Reports available per message/user/Pod. Rate limits trust-aware.

## UX
Conversation rows retain occurrence context/time; do not become generic dating inbox. Pod members are compact, not swipeable people grid.

## Acceptance
- Pod schema cannot accept EXTERNAL_TICKET/admission mode;
- conversation context DB constraint valid;
- unauthorized WebSocket subscription test;
- membership revocation/reconnect test;
- duplicate delivery safe;
- report evidence retained;
- forced disconnect recovers durable messages/state via REST.
