# Product spec — Notifications

## Channels
In-app, push, email. Logical notification is created before delivery attempts.

## Categories
Safety/mandatory, transactional, social, organizer, marketing.

## Critical events
Join approved/rejected, waitlist slot, cancellation/material update, imminent reminder, safety/moderation decision. Social: Pod/chat/connection/organization announcement according to preferences.

## Rules
- dedup key per event+recipient+reason;
- quiet hours in user timezone;
- safety/material cancellation may bypass ordinary quiet hours where policy permits;
- marketing consent separate;
- retries idempotent;
- notification text is localized from stable template keys.

## UX
Notification opens exact relevant state/deep link. A push is never the only durable record of a critical cancellation/moderation decision.

## Acceptance
Duplicate job does not duplicate user-visible notification; revoked membership suppresses irrelevant chat notifications; user preferences honored.