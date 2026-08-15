# Product spec — Pods, chat and connections

## Pod
Small social group attached to an EventOccurrence, including imported events. Purpose is practical coordination: travel together, language group, first-timers, meet beforehand.

Fields: title, short purpose, meeting point, language, capacity, join mode, members.

## Chat
Event/Pod chats require current authorized membership. Launch messages: text, emoji, image, meeting point/system. No arbitrary file/voice/video.

## Direct messages
No random DMs. Connection DM exists only after mutual connection/post-event consent.

## Safety
Block immediately revokes communication paths. Reports available per message/user/Pod. Rate limits are trust-aware. Message persistence precedes durable fan-out for important messages.

## UX
Conversation rows retain event context/time; do not become a generic dating inbox. Pod member presentation is compact, not a swipeable people grid.

## Acceptance
Unauthorized WebSocket subscription test; membership revocation test; duplicate delivery safe; report evidence reference retained; reconnect recovers durable state via REST.