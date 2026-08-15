# Visual language

Machine values: `../../design/tokens.json`.

## Brand personality
Calm · capable · open · human · local · trustworthy.

Not: romantic · exclusive · luxury · childish · hyperactive · corporate-governmental.

## Color
### Light
- Brand / Lake: `#245BFF` — primary action/link, white text allowed.
- Pine: `#0F766E` — trust/accent, white text allowed.
- Ink: `#111827` — main text.
- Slate: `#596273` — secondary text.
- Snow: `#FFFFFF` — raised surfaces.
- Cloud: `#F7F8FA` — app background.
- Mist: `#EEF2F6` — subtle containers.
- Border: `#D8DEE8`.
- Success: `#167A46`; Warning: `#9A5B13`; Danger: `#B42318`.
- Warm highlight `#F2A65A` is decorative/non-small-text only.

### Dark
- Background `#0B1017`; surface `#121A24`; elevated `#182230`.
- Text `#F4F7FA`; secondary `#AEB8C7`; border `#283445`.
- Primary `#7EA2FF` with dark ink text.
- Accent `#5DD3C1` with dark ink text.

No status relies on color alone.

## Typography
Use Inter Variable where bundled/self-hosted consistently; fall back to system sans. Must support Finnish, English and Cyrillic.

Scale:
- Display 40/48 semibold — marketing only.
- H1 32/40 semibold.
- H2 24/32 semibold.
- H3 20/28 semibold.
- Title 18/24 semibold.
- Body 16/24 regular.
- Body small 14/20 regular.
- Label 14/20 medium.
- Caption 12/16 medium; never use for essential long content.

Do not use all-caps paragraphs. Numbers/time may use tabular numerals when supported.

## Spacing
4px base: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64.
Default mobile screen horizontal padding: 16. Tablet/web content padding increases responsively.

## Radius
- controls 10–12;
- cards 16;
- sheets 24 top corners;
- pills 999.

Prefer borders/tonal surfaces to deep shadows. Card elevation is subtle and used only when hierarchy needs it.

## Iconography
Single cross-platform outline family (Lucide-compatible) with consistent 1.75–2px stroke. Primary nav icons always paired with labels. Avoid emoji as functional icons.

## Photography
- authentic real activities and places;
- mixed ages/backgrounds without tokenistic staging;
- natural light, ordinary Finnish/Nordic environments where relevant;
- groups doing something, not dating-style portraits;
- avoid stock-photo handshakes, artificial party neon and sexualized imagery.

Event cards may fall back to category illustration/color block when licensed image is unavailable.

## Motion
- functional, short and understated;
- 120ms micro feedback, 180–220ms standard transition, 280ms sheet transition;
- ease-out entering, ease-in leaving;
- respect reduced motion;
- no mandatory parallax, autoplay decorative video or celebratory animation for routine joins.

## Theme
Default follows OS/system theme. User can override later. Both themes ship together; dark mode is not a post-launch repaint.