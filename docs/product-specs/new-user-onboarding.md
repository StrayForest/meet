# Product spec — New user onboarding

## Goal
Get an adult user from first launch to useful event discovery with minimum friction while collecting enough information for safe, relevant recommendations.

## Required outcome
Authenticated internal User with: age >=18, nickname, DOB private, gender, home city/area, languages, interests, accepted legal versions.

## Flow
1. Welcome/value proposition: activities, not dating.
2. Sign in: email/Google/Apple where applicable.
3. Basic identity + DOB/18+ gate.
4. City/area + languages.
5. Interests (multi-select; suggest 5+, no hard requirement beyond configured minimum).
6. Optional profile photo with explanation of trust benefit.
7. Finish; contextual permission prompts happen when feature first needs location/notifications.

## UX
Approximately 5 grouped stages after auth; progress visible but not punitive. Back preserves input. Do not request precise GPS before explaining why. No contact-book upload.

## Errors
Under 18: explain current service is 18+ and do not create adult profile access. Auth/network failure preserves safe local onboarding input where appropriate.

## Analytics
onboarding_started, auth_completed, age_gate_failed, profile_step_completed, interests_completed, photo_skipped/uploaded, onboarding_completed.

## Acceptance
FI/EN/RU; large text; screen reader; no hidden mandatory photo/phone; server enforces 18+; legal acceptance version/timestamp stored.