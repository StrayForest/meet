# Product spec — New user onboarding

## Goal
Get an adult user to useful event discovery with the least possible disclosure and setup. **Show value before asking the user to describe themselves.**

## Cold-start principle
Meet does not ask users to select hobbies/interests during onboarding. Stated interests are cheap signals and add friction; observed event behaviour and especially credible attendance are stronger recommendation evidence.

Public event/city/category discovery should be available before account creation where the surface can safely be public. Authentication/profile creation is requested at the first action that genuinely needs identity (join/save/social participation, creation, etc.).

## Required outcome after account creation
Authenticated internal User with: age >=18, nickname, private DOB/age evidence as policy requires, city/area, interface/event languages, accepted legal versions. Gender is not a default onboarding requirement. Photo is optional.

## Flow
1. Welcome/value proposition: activities, not dating; immediately offer useful local discovery.
2. Browse/search/filter public events without mandatory account where allowed.
3. On identity-requiring action, sign in: email/Google/Apple where applicable.
4. Minimum identity + DOB/18+ gate.
5. City/area + languages; event-language choices are distinct from interface locale.
6. Optional profile photo with explanation of trust benefit.
7. Finish the requested action; contextual permission prompts happen only when the feature first needs location/notifications.

Do not add an `interests` step merely to improve recommendation cold start. Cold start uses explicit search/filter/session intent, time, coarse location/city, event languages, event quality/freshness and safe popularity/social signals.

## UX
No long profile questionnaire before first value. Progress is visible only after account creation and is not punitive. Back preserves input. Do not request precise GPS before explaining why. No contact-book upload. No mandatory bio/photo/gender/interests.

## Errors
Under 18: explain current service is 18+ and do not create adult profile access. Auth/network failure preserves safe local onboarding input where appropriate and should not destroy the public discovery context that led to signup.

## Analytics
public_discovery_started, onboarding_started, auth_completed, age_gate_failed, profile_step_completed, photo_skipped/uploaded, onboarding_completed, onboarding_action_resumed. Do not emit an `interests_completed` milestone.

## Acceptance
FI/EN/RU; large text; screen reader; public value before unnecessary signup; no hidden mandatory photo/phone/gender/interests; server enforces 18+; legal acceptance version/timestamp stored; the triggering join/save action resumes after onboarding.