# Visual QA and design acceptance

## Principle
UI is not accepted because it compiles. Codex must drive/see deterministic states and compare them to the active design/product contract.

## Reference pack
Consumer V1 uses only `design/screens/consumer-v1-data.js` and the IDs documented in `screen-reference-pack.md`. Historical `consumer-data*.js` files are not acceptance references. B2B/admin continue to use their active packs.

When a matching example exists, record the ID in the task/PR and compare hierarchy/state against that reference. Do not bulk-load the entire pack.

## Reference viewports
Web: 390×844, 768×1024, 1440×900.
Native: representative modern iPhone, representative mid-range Android, one large-text pass.

## Required V1 reference states once apps exist
- public discovery before signup;
- Discover populated + low-density;
- Map discovery mode with selected public event;
- Event detail normal/open;
- Event detail **EXTERNAL_TICKET + OPEN social participation** showing separate actions;
- recurring Event with two occurrences having materially different public location/capacity;
- Event detail full/waitlist;
- cancelled/materially changed occurrence;
- progressive onboarding after an identity-requiring action;
- create wizard for **PUBLIC_VENUE / OUTDOOR**;
- waitlist slot offer;
- `Find company` / occurrence-scoped group state;
- occurrence-scoped chat;
- My plans;
- lightweight attendance confirmation;
- realtime reconnect/recovery visible state where UI changes;
- Profile/verification;
- client soft-update and force-update surfaces;
- Report flow;
- B2B event list/detail required by validated pilot scope;
- Admin moderation/operational flag state required for launch.

PRIVATE_HOME disclosure screens, persistent connections/DMs and generic `Pod` UX are not V1 acceptance requirements. If later activated through their evidence/ADR gates, add dedicated reviewed reference states then.

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
- no dating-like person-first emphasis;
- no consumer PRIVATE_HOME path in V1;
- consumer social copy uses plain action language rather than internal `Pod` jargon;
- unsupported/old client UX is clear and non-looping.

## Agent workflow
1. for consumer V1, search only `design/screens/consumer-v1-data.js` for the target screen ID/title;
2. boot isolated app/worktree and seed deterministic fixture;
3. navigate target flow/deep link;
4. capture screenshot at reference viewport;
5. compare to that reference + approved contracts/checklist;
6. fix visible defects before review.

## Visual regression
Add screenshot regression once stable. Tolerate known platform font/raster differences, but never blindly accept changed baseline.
