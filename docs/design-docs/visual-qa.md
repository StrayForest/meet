# Visual QA and design acceptance

## Principle
A UI implementation is not accepted solely because tests compile. Codex must be able to see/drive the result and compare it against the design contract.

## Reference viewports
Web screenshots:
- 390×844 mobile web smoke;
- 768×1024 tablet;
- 1440×900 desktop.

Native app verification:
- representative modern iPhone;
- representative mid-range Android;
- one large-text accessibility pass.

## Required reference screens
Maintain screenshots once apps exist:
- onboarding;
- Home populated;
- Home low-density/empty;
- Map selected event;
- Event detail open/full/cancelled/private-home;
- create wizard;
- waitlist slot offer;
- Pod detail/chat;
- Profile/verification;
- Report flow;
- B2B event list/detail;
- Admin moderation case.

## Review checklist
- tokens only, no accidental raw styles;
- correct typography hierarchy;
- one dominant CTA;
- touch targets;
- text truncation only where specified;
- FI/EN/RU expansion;
- dark theme;
- focus/keyboard web;
- loading/empty/error states;
- privacy-sensitive data absent from unauthorized screenshots;
- no dating-like visual emphasis on individual profiles.

## Agent workflow
For frontend PRs:
1. boot isolated app/worktree;
2. seed deterministic fixture data;
3. navigate target flow;
4. capture screenshots;
5. compare with reference/checklist;
6. fix visible defects before requesting review.

## Visual regression
Once stable screens exist, add screenshot regression with tolerant thresholds for platform font/raster differences. Do not blindly update baselines; changed baselines require intentional review.