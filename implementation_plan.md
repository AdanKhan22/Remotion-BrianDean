# Implementation Plan: Fix Beats 1-5

## Issues Found

### Across ALL 5 files (one.tsx–five.tsx):
1. **Wrong COLORS** — INK_PRIMARY is `#11100C` instead of `#1E1B16`, INK_SECONDARY is `#2B261D` instead of `#5C564A`, ACCENT_HERO is `#C98B10` instead of `#B8862E`, ACCENT_DETAIL is `#2A5D60` instead of `#3C6E71` — mismatched with beats 6-8
2. **Wrong FONTS** — one.tsx, two.tsx, three.tsx use `FONTS.main = '"Inter", "DM Sans", sans-serif'` — missing Poppins heading font
3. **Double dashes `--`** — found in six.tsx footer text: `"The S&P 500 prunes losers automatically -- no action required from you."` — also likely in other files
4. **Long paragraph body text** — same issue as beats 6-8; sentences in body text should be max 6-8 words or removed

### Per-file specific issues:

#### one.tsx (Block 2 — 1999 Diversification)
- FONTS.main instead of FONTS.heading/body
- INK colors wrong vs system
- Beat 2: industry cards sub-label `fontSize: '28px'` is too small for 4K canvas (min 44px)
- Beat 3: long body text "No single company exceeded 5% weight" and "Total tech weight during the bubble" — should be shortened

#### two.tsx (Block 3 — AI Concentration)
- FONTS.main instead of FONTS.heading/body
- INK/ACCENT colors wrong
- Beat 2: arrow uses unicode `➔` (could render wrong), `fontSize: '32px'` on "Flows To" label too small
- Beat 1: "Massive single-sector concentration" body text on red bg — should be shortened

#### three.tsx (Block 4 — Balancing Risk)
- FONTS.main instead of FONTS.heading/body
- INK/ACCENT colors wrong
- Beat 1: long paragraph text "We don't want to abandon the S&P 500. It remains one of the greatest wealth-building tools available." — too much text
- Beat 2: long paragraph "We add complementary ETFs to dampen volatility without sacrificing returns." — should be shortened

#### four.tsx (Block 6 — Bogleheads Framework)
- FONTS already correct (Poppins/Inter)! Colors still wrong (different ACCENT values)
- Need to verify double-dashes and body text

#### five.tsx (Block 7 — Core 60% Sleeve)
- FONTS already correct (Poppins/Inter)! Colors still wrong
- Need to verify body text and double-dashes

## Proposed Changes

### All 5 files — standardize COLORS to match beats 6-8:
```ts
INK_PRIMARY:    '#1E1B16'  // was #11100C
INK_SECONDARY:  '#5C564A'  // was #2B261D
INK_TERTIARY:   '#8C8474'  // was #4A4333
ACCENT_HERO:    '#B8862E'  // was #C98B10
ACCENT_DETAIL:  '#3C6E71'  // was #2A5D60
DARK_SLAB:      '#1A1714'  // add this (missing from beats 1-5)
```

### one.tsx, two.tsx, three.tsx — update FONTS:
```ts
const FONTS = {
  heading: "Poppins, Inter, Helvetica Neue, Helvetica, Arial, sans-serif",
  body:    "Inter, Roboto, Helvetica Neue, Helvetica, Arial, sans-serif",
};
```
And update all `fontFamily: FONTS.main` → `FONTS.heading` (for titles/stats) or `FONTS.body` (for captions)

### Text fixes (all files):
- Replace `--` with `-` (single hyphen)
- Shorten body text paragraphs to max 6-8 words
- Remove sentences that just restate narration

### Font size bumps in old files:
- one.tsx Beat 2: `'28px'` sector labels → `'46px'`
- two.tsx: `'32px'` "Flows To" → `'46px'`

---

> **Note**: beats 1-5 were originally fixed by the user. I will only update the COLORS/FONTS system and fix readability issues — I will NOT redesign the layouts.

## Open Questions

> [!IMPORTANT]
> The color values for beats 1-5 are slightly different shades from beats 6-8. Should I standardize them to exactly match the beats 6-8 palette (`#B8862E` gold, `#3C6E71` teal) or keep them slightly different? **Recommended: standardize for visual consistency.**
