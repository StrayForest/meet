# Navigation and screen specifications

## Mobile navigation
Persistent bottom tabs:
1. Home
2. Map
3. Create
4. Chats
5. Profile

Notification inbox is top-level from Home header; Search is visible on Home/Map and deep-linkable. Back behavior follows platform conventions.

## Home
### Header
- current city/area chip;
- notification icon with accessible unread state.

### Search
Full-width search field: “Search events, activities or places”.

### Quick time filters
Now · Today · Weekend · Pick date.

### Feed hierarchy
1. `Now near you` when supply exists.
2. `For you` personalized but deterministic/explainable V1.
3. `Today`.
4. `This weekend`.
5. category/organization/editorial collections only when useful.

Low-density: widen radius, show official/imported supply, explain distance, then offer “Create an activity”. Never blank.

## Event card
Preferred mobile list card:
- 16:9 event image/category fallback;
- source/trust badge over image only if readable;
- start time/date is first text metadata;
- title max 2 lines;
- venue/area + distance;
- language/capacity only when decision-relevant;
- attendee facepile + count or Pod count;
- contextual CTA: Join / Request / Tickets / Full / View.

No bio text or large person portrait dominates an event card.

## Map
- full-screen map;
- search and compact filter chips at top safe area;
- map pins cluster;
- selecting pin opens bottom card/sheet;
- List toggle returns same query/filter context;
- private-home events show coarse area only;
- location permission can be denied; city-based map remains usable.

## Event detail
Order:
1. image/gallery;
2. date/time + title;
3. venue/area/distance + map affordance;
4. primary CTA/sticky bottom action;
5. availability/capacity;
6. attendee/Pod social context;
7. organizer + verification;
8. description;
9. practical info: language, accessibility, age/audience, cost/ticketing;
10. safety/source info;
11. report/share.

Material cancellation/update banner must appear above normal content.

## Join
Open event: CTA → lightweight confirmation only if needed → confirmed state.
Approval event: CTA → optional host-required answers → request sent.
Full event: CTA → Join waitlist.
External ticket: `Get tickets` opens trusted external flow; “I’m going” social intent must be distinguishable from ticket ownership if supported.

## Pod
Event detail shows Pods after core join context. Pod card: title, purpose/meeting point, members, capacity, language, join mode. Do not use dating-like member grid.

## Create event
Mobile wizard uses progressive steps and autosaved draft:
1. What are you doing? category + title.
2. When? date/time/recurrence.
3. Where? venue/outdoor/home/online.
4. Who can join? capacity, approval, age/audience, language.
5. Details/media/accessibility/cost.
6. Preview + safety/verification checks + publish.

Private-home selection immediately explains verification/address privacy before later steps.

## Chats
Conversation list prioritizes upcoming event/Pod chats. Each row shows event context and event time, not only avatar/name. Connection DMs are visually secondary.

## Profile
Own profile starts with practical identity/trust: nickname/avatar, city, languages/interests, verification, activity history. No follower/following vanity counters.

## Onboarding
Keep to approximately 5 grouped stages after auth:
1. basic identity/18+;
2. city + languages;
3. interests;
4. photo optional + trust explanation;
5. permissions/preferences + final terms confirmation.

Ask notification/location permissions contextually, not all at first launch.

## Web
Public web prioritizes SEO/event detail/share and account handoff. It is not a desktop clone of every mobile feature initially.

## B2B/Admin
Desktop information architecture uses left navigation, tables and detail panels. Safety/admin pages prioritize density and traceability over consumer card styling.