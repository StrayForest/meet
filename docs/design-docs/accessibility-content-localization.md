# Accessibility, content and localization UX

## Accessibility target
WCAG 2.2 AA for web and equivalent mobile behavior. Test automated and manually; accessible components do not guarantee an accessible whole flow.

## Core requirements
- logical heading hierarchy;
- 4.5:1 normal text contrast, 3:1 large text/non-text UI where WCAG applies;
- 48 logical px default interactive target;
- visible focus;
- screen-reader labels and ordered navigation;
- text scaling without clipping/overlap;
- no color-only meaning;
- reduced-motion support;
- landscape/tablet basic support;
- content remains usable around 320 CSS px web width;
- form error summary for long web/admin forms.

## Plain-language principle
Finnish public digital design emphasizes clarity and cognitive accessibility. Meet copy should be short, literal and actionable.

Avoid:
- hype (“Amazing! You unlocked…”);
- ambiguous cute labels for critical states;
- unnecessary English inside Finnish UI;
- safety/legal jargon in primary copy;
- repeated exclamation marks.

## Voice
Calm, friendly, adult, neutral. Never pitying.

Examples:
- FI: `Liity` / `Pyydä mukaan` / `Liity jonoon` / `Luo tapahtuma`.
- EN: `Join` / `Request to join` / `Join waitlist` / `Create event`.
- RU: `Присоединиться` / `Запросить участие` / `Встать в очередь` / `Создать событие`.

Final translations require native-language QA; these examples define intent, not every final string.

## Finnish locale behavior
- 24-hour clock.
- locale formatting through platform/Intl, not hand-built date strings.
- Finnish UI may use forms such as `la 15.8. klo 18.30` where appropriate to product copy.
- distances: metres/kilometres.
- names/addresses preserve source spelling.

## Text expansion
Design for Russian/English strings substantially longer than Finnish labels. Buttons must not rely on fixed text widths.

## Accessibility design reviews
Required before Finland launch:
- screen reader critical-flow pass iOS and Android;
- keyboard-only web/B2B/admin;
- 200% web zoom/reflow;
- large mobile text sizes;
- contrast scan both themes;
- manual cognitive walkthrough with older users.

## Finnish usability validation
Do not substitute “Nordic aesthetic” assumptions for research. Test at least three age bands (18–30, 31–50, 51+) and include Finnish-first plus international residents. Key tasks: find event, understand source, join, waitlist, inspect participants, create event, private-home safety, report/block.