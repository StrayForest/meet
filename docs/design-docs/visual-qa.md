# Visual QA and design acceptance

## Principle
UI is not accepted because it compiles. Codex must drive/see deterministic states and compare them to the design/product contract.

## Reference pack
`design/screens/` contains stable example IDs. When a matching example exists, record the ID in the task/PR (for example `M21 Event detail`, `B07 Attendees`, `A03 Moderation case`) and compare hierarchy/state against that one reference. Do not bulk-load the entire pack.

## Reference viewports
Web: 390×844, 768×1024, 1440×900.
Native: representative modern iPhone, representative mid-range Android, one large-text pass.

## Required reference states once apps exist
- onboarding;
- Home populated + low-density;
- Map selected event;
- Event detail normal/open;
- Event detail **EXTERNAL_TICKET + OPEN social participation** showing separate actions;
- recurring Event with two occurrences having materially different location/capacity;
- Event detail full/waitlist;
- cancelled/materially changed occurrence;
- private-home unauthorized vs authorized disclosure state;
- create wizard admission step + social participation step;
- waitlist slot offer;
- Pod detail/chat;
- realtime reconnect/recovery visible state where UI changes;
- Profile/verification;
- client soft-update and force-update surfaces;
- Report flow;
- B2B event list/detail;
- Admin moderation/operational flag state.

## Review checklist
- tokens only/no accidental raw visual system;
- correct hierarchy;
- social primary CTA and external admission action are not conflated;
- occurrence-specific time/location/capacity shown correctly;
- one dominant action per local decision area without hiding required secondary ticket action;
- touch targets/accessibility;
- FI/EN/RU text expansion;
- dark theme;
- focus/keyboard web;
- loading/empty/stale/error/restricted states;
- private exact location absent from unauthorized screenshots/HTML;
- no dating-like person-first emphasis;
- unsupported/old client UX is clear and non-looping.

## Agent workflow
1. search `design/screens/*-data.js` for the target screen ID/title;
2. boot isolated app/worktree and seed deterministic fixture;
3. navigate target flow/deep link;
4. capture screenshot at reference viewport;
5. compare to that reference + approved contracts/checklist;
6. fix visible defects before review.

## Visual regression
Add screenshot regression once stable. Tolerate known platform font/raster differences, but never blindly accept changed baseline.
