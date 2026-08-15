# Navigation and screen specifications

## Mobile navigation
Persistent tabs: Home, Map, Create, Chats, Profile. Notification inbox from Home; Search visible on Home/Map/deep-linkable. Back follows platform conventions.

## Home
Header: city/area + notifications. Search field: “Search events, activities or places”. Quick time filters: Now · Today · Weekend · Pick date.

Feed hierarchy: Now near you → For you → Today → This weekend → useful collections. Low-density widens radius, shows official/imported supply, explains distance, then offers Create; never blank by default when broader supply exists.

## Event card
- 16:9 event image/category fallback;
- source/trust badge where relevant;
- start/date first metadata;
- title max 2 lines;
- venue/area + distance;
- language/social capacity when decision-relevant;
- attendee facepile/count or Pod count;
- **social CTA**: Join / Request / Waitlist / Joined / View;
- independent admission indicator/action: Free / Tickets / Register where relevant.

A ticketed event may show `Get tickets` and `I'm going` simultaneously. Never imply ticket ownership from Meet participation.

## Map
Full-screen map; search/filter chips; clusters; selected pin bottom card; List preserves query/filter context; private-home only coarse area; location permission optional because city-based discovery remains usable.

## Event detail
Order:
1. image/gallery;
2. selected EventOccurrence date/time + Event title;
3. venue/area/distance + map;
4. primary **Meet social CTA**;
5. admission/ticket action/info if separate;
6. Meet social capacity/availability;
7. attendees/Pods;
8. organizer + verification;
9. description;
10. language/accessibility/age/audience/cost;
11. safety/source;
12. report/share.

Recurring series provides occurrence switcher/next dates without hiding concrete location/capacity changes. Cancellation/material update banner overrides normal content.

## Join
- OPEN → Join / I'm going.
- APPROVAL_REQUIRED → Request to join.
- full + waitlist enabled → Join waitlist.
- INVITE_ONLY → invite state/action.
- DISABLED → no social join CTA.
- EXTERNAL_TICKET admission → separate Get tickets/Register external action; does not replace social CTA.

Before high-impact CTA completes, current server occurrence state is revalidated.

## Pod
Displayed after core occurrence/social context. Pod card: title, purpose/meeting point, members, capacity, language, social participation mode. No ticket semantics or dating-like member grid.

## Create event
Progressive autosaved wizard:
1. What are you doing? category + title.
2. When? one-time or supported recurrence.
3. Where? Public Venue / Outdoor / Private Home / Hybrid.
4. Admission? None / Free / External ticket-registration.
5. Who can join in Meet? Open / Approval / Invite only / Disabled + capacity/waitlist/audience/language.
6. Details/media/accessibility.
7. Preview + safety/verification + publish.

No online-only V1 option. Private Home immediately explains strong verification and exact-address privacy. Occurrence overrides are explicit for recurring series.

## Chats
Upcoming EventOccurrence/Pod chats prioritized. Rows show event context/time, not only avatar/name. Connection DMs secondary.

## Profile
Nickname/avatar, city, languages/interests, verification, activity history. No follower vanity counters.

## Onboarding
Approximately five grouped stages after auth: identity/18+; city/languages; interests; optional photo/trust; permissions/preferences + legal acceptance. Ask notification/location contextually.

## Deep links
Canonical HTTPS event/organization URL opens native route via Universal/App Links when installed and public web otherwise. Alias links resolve canonical.

## Web
Public web prioritizes SEO/event detail/share/account handoff; not a desktop clone of all mobile features.

## B2B/Admin
Desktop left navigation, tables/detail panels. Safety/admin prioritizes density/traceability. Staff actions are visibly privileged/audited and never represented as consumer impersonation.
