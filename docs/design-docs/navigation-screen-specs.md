# Navigation and screen specifications — Architecture 1.3

## Mobile navigation
Primary V1 tabs: **Discover, My plans, Social, Profile**.

- Discover owns Home/search/filter/map and public event discovery.
- My plans owns Saved, Going and Past.
- Social owns only occurrence-scoped company-finding/chats for upcoming/recent events; it is not a generic social feed.
- Profile owns account/preferences and provides entry points to create/host where appropriate.
- Map is a discovery mode, not a required dedicated primary tab.
- Create is a contextual action, not proof of value for every user and not required as a permanent central tab.

Notification inbox is reachable from Discover/My plans.

## Progressive entry
Public discovery must be usable before account creation. Welcome may explain the value proposition, but the default first-use path should allow immediate event browsing. Account/onboarding starts when an identity-requiring action is chosen and then resumes that action.

No mandatory interests, gender, photo, phone or long profile questionnaire before discovery value.

## Discover
City/area + notifications; search; Today/Nearby/Weekend/Free/date chips and `What should I do today?`. Low-density may widen radius/date with explicit explanation and use licensed public physical supply.

## Event card
16:9 image/fallback; source/organizer trust; occurrence time; title; public venue/area + distance; event language; price/admission. Social context appears only when decision-useful and privacy-safe.

Do not expose `Pod` counts as primary vocabulary and do not show `0 going`. Preferred social CTA language is action-based, e.g. `Find company` / `Join group` where enabled. Admission/ticket action remains independent from `I'm going`.

## Event detail
Recommended hierarchy:
1. title;
2. when;
3. public place/distance;
4. price/admission;
5. event language;
6. concise description / who it is for;
7. reliable accessibility facts;
8. organizer/source trust;
9. arrival confidence: meeting point, how to recognize host/group, what happens first, newcomer/solo context where defensible;
10. privacy-safe social context;
11. primary `I'm going` action;
12. secondary `Find company` where enabled;
13. external ticket action when relevant;
14. report/share/safety details.

Recurring Event exposes occurrence selector and material location/capacity changes.

## My plans
Saved / Going / Past. Past events may request lightweight attendance confirmation or offer a next relevant IRL action; do not force connection-building.

## Social
Upcoming event groups/chats remain visibly tied to the EventOccurrence. Do not become a generic dating-style inbox. Persistent connections/DM are hidden unless the H7/Phase 7B evidence gate is met.

## Create event
Autosaved V1 wizard:
1. category/title;
2. one-time or supported recurrence;
3. physical place: **Public Venue / Outdoor**;
4. admission;
5. Meet participation/capacity/waitlist/audience/language;
6. details/media/accessibility;
7. preview + safety + publish.

`PRIVATE_HOME` is not a V1 consumer option. No ONLINE/HYBRID V1 creation.

## B2B/Admin
Desktop density/traceability. Staff actions are visibly privileged/audited and never consumer impersonation. Operational controls, product experiments and client policy are visually separate. B2B UI implements only workflows justified by validated organizer pilots.

## Accessibility
Every reference must have a non-map route, scalable text, screen-reader semantics, sufficient touch targets/contrast, reduced-motion behavior where relevant and no color-only meaning.