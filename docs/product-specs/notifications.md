# Product spec — Notifications

## Channels
Durable in-app notification plus optional push/email delivery channels. Logical notification is created before channel delivery attempts.

## Categories
Safety/mandatory, transactional, social, organizer, marketing.

## Critical events
Join approved/rejected, waitlist slot, cancellation/material occurrence update, imminent reminder, safety/moderation decision. Social: Pod/chat/connection/organization announcement according to preferences.

## Truth model
Push/email are delivery mechanisms, not source of truth. Failure or absence of push cannot make a cancelled occurrence appear valid. Critical cancellation/material update remains in durable in-app state and current EventOccurrence API.

## Delivery model
`Notification` = logical durable item.
`NotificationDelivery` = per-channel attempt/status/provider reference.

One channel may fail while another succeeds. Duplicate job does not duplicate user-visible logical notification or uncontrolled provider delivery.

## Rules
- dedup key per logical reason/recipient/resource;
- quiet hours in user timezone;
- safety/material cancellation may bypass ordinary quiet hours where lawful/policy permits;
- marketing consent separate;
- retries idempotent;
- localized stable template keys;
- revoked membership suppresses irrelevant future chat/social deliveries.

## Realtime
A realtime notification event may accelerate display, but client reconciles durable inbox/current resource state after reconnect.

## UX
Notification opens canonical relevant Event/Occurrence/Pod/Case deep link. Material cancellation/safety decision is never toast-only.

## Acceptance
- duplicate task/event safe;
- push failure + in-app success represented correctly;
- provider retry does not duplicate logical notification;
- revoked membership suppression;
- current occurrence truth wins over stale notification payload;
- locale/quiet-hour behavior tested.
