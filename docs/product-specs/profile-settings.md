# Product spec — Profile, preferences and settings

## Goal
Give enough identity/trust context for participation while keeping profile secondary to activities and minimizing self-description requirements.

## Own profile
Nickname/avatar, age display per policy, city/area, languages, optional bio, verification center, activity/reputation summary, hosted/upcoming/history, connections, preferences, blocked users, legal/data controls.

There is no required public `interests` list. Meet learns recommendation affinity primarily from explicit current filters/search and privacy-safe behavioural/attendance evidence. If a future user-facing preference control is added, it must be optional and framed as recommendation control, not identity truth.

## Other profile
Only policy-visible fields, shared event context, trust badges/positive aggregates, Connect if eligible, Block/Report. No follower counters, popularity leaderboard, large dating-style gallery or public human star score.

## Editing
Nickname/bio/avatar/languages/city/preferences editable subject to moderation/rate limits. DOB changes follow identity/safety policy and cannot be abused to bypass eligibility. Gender, if collected for a justified future feature, is optional unless a documented safety/legal use case requires otherwise; it is not a default profile-completion gate.

## Participation visibility
Joining an event must make the audience and consequence understandable before confirmation. Product supports simple policy-defined choices such as visible to participants/public where the event requires social visibility, or privacy-preserving participation where compatible. Do not expose attendance more broadly than the user reasonably expects.

Avoid a settings maze: choose safe defaults, show concise contextual explanations at the action, and keep advanced controls discoverable in Privacy.

## Privacy
Controls define relevant attendee/profile visibility. Exact contact info, DOB and verification-provider details are private. Behavioural recommendation features must have clear privacy/data controls and must not expose inferred affinities as public profile labels.

## Settings
Notifications/quiet hours, discovery travel preference/radius, event languages, recommendation/privacy controls, interface language/theme, sessions/devices, blocked users, data export, delete account, terms/privacy versions.

## Acceptance
FI/EN/RU; block enforcement; verification state factual; inaccessible private fields never reach client DTO; account deletion/export links clear; no mandatory interest questionnaire; participation visibility is understandable at the moment of commitment.