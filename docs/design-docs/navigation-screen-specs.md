# Navigation and screen specifications — Architecture 1.3

## Mobile navigation
Home, Map, Create, Chats, Profile. Notification inbox from Home; Search available from discovery surfaces.

## Home
City/area + notifications; search; Now/Today/Weekend/date chips. Feed prioritizes Now near you → For you → Today → weekend/collections. Low-density widens radius/date, explains it, uses official/imported physical supply, then offers Create.

## Event card
16:9 event image/fallback; source/trust badge; selected EventOccurrence time; title; public venue/area+distance; language/social capacity; facepile/Pod count; dominant social CTA. Admission action/indicator is independent. `Get tickets` and `I'm going` can coexist.

## Map
Clusters/pins + selected bottom card. Private-home uses deliberate coarse public point/label only. Location permission optional.

## Event detail
Image → selected occurrence date/time + Event title → public place/distance → Meet social CTA → separate admission action → social capacity → people/Pods → organizer → description/restrictions → safety/source → report/share. Recurring Event exposes occurrence selector and material location/capacity changes.

## Create event
Autosaved wizard:
1. category/title;
2. one-time or supported recurrence;
3. physical place: **Public Venue / Outdoor / Private Home**;
4. admission;
5. Meet participation/capacity/waitlist/audience/language;
6. details/media/accessibility;
7. preview + safety/verification + publish.

No ONLINE/HYBRID V1 creation. Recurring publication writes series defaults/template plus recurrence; generated occurrences can be overridden individually.

## Private home
Immediately explain strong verification and address privacy. UI stores/displays public coarse label separately from encrypted exact location. Exact address is never an ordinary offline/map field.

## B2B/Admin
Desktop density/traceability. Staff actions are visibly privileged/audited and never consumer impersonation. Operational experiments, first-party OperationalFlags and client policy are visually separate.
