# Remotion Animation Design Guide
## Brian Dean — The BEST 3 ETF Portfolio for 2026

> **Purpose:** Load this guide at the start of every new chat. It captures all design decisions, user feedback, and rules so you never have to re-explain anything.

---

## 1. Project Stack & Canvas

| Property | Value |
|---|---|
| Framework | Remotion (React + TypeScript) |
| Canvas size | 3840 x 2160 (4K UHD) |
| FPS | 30 |
| Icons | lucide-react only |
| Audio | `<Audio src={staticFile("pop-sfx.mp3")} volume={0.4} />` per beat |

---

## 2. Font Stack (USER-MANDATED)

```ts
const FONTS = {
  heading: "Poppins, Inter, Helvetica Neue, Helvetica, Arial, sans-serif",
  body:    "Inter, Roboto, Helvetica Neue, Helvetica, Arial, sans-serif",
};
```
- FONTS.heading: all headlines, stats, numbers, labels
- FONTS.body: sub-labels, captions, supporting text

---

## 3. Color System

```ts
const COLORS = {
  BG_BASE:         "#F3EEE4",
  BG_ELEVATED:     "#FAF6EC",
  BG_RECESSED:     "#EAE3D3",
  INK_PRIMARY:     "#1E1B16",
  INK_SECONDARY:   "#5C564A",
  INK_TERTIARY:    "#8C8474",
  ACCENT_HERO:     "#B8862E",   // gold
  ACCENT_NEGATIVE: "#B5533C",   // rust red
  ACCENT_DETAIL:   "#3C6E71",   // teal - ONLY on light bg
  DARK_SLAB:       "#1A1714",
};
```

### Critical Color Rules (USER FEEDBACK)
| Background | Allowed text | NEVER use |
|---|---|---|
| DARK_SLAB / INK_PRIMARY | #FFFFFF, ACCENT_HERO (gold) | ACCENT_DETAIL teal - unreadable! |
| ACCENT_DETAIL (teal bg) | #FFFFFF, rgba(255,255,255,0.8+) | Dark ink |
| ACCENT_HERO (gold bg) | #FFFFFF, INK_PRIMARY | Teal |
| ACCENT_NEGATIVE (red bg) | #FFFFFF, rgba(255,255,255,0.9) | Any dark color |
| BG_BASE / BG_ELEVATED | INK_PRIMARY, INK_SECONDARY, accents | White (invisible) |

---

## 4. Animation System

```ts
const SPRING_CONFIG = { damping: 200, stiffness: 120, mass: 0.8 };
```

### Stagger pattern (25-30 frames between elements)
```ts
const elem1Pop = spring({ frame: frame - 0,  fps, config: SPRING_CONFIG });
const elem2Pop = spring({ frame: frame - 30, fps, config: SPRING_CONFIG });
const elem3Pop = spring({ frame: frame - 60, fps, config: SPRING_CONFIG });
```

### Entry animation types (vary them - no two beats should have the same entrance)
```ts
// Slide up (headers)
opacity: pop, transform: `translateY(${interpolate(pop, [0,1], [40, 0])}px)`

// Slide from left (lists, bars)
opacity: pop, transform: `translateX(${interpolate(pop, [0,1], [-80, 0])}px)`

// Scale in (hero slabs)
opacity: pop, transform: `scale(${interpolate(pop, [0,1], [0.9, 1])})`

// Width grow (bar charts)
width: `${interpolate(pop, [0,1], [0, targetPct])}%`
```

---

## 5. Layout Architecture

### Left Zone (ALWAYS use this wrapper)
```tsx
const LeftZone: React.FC<{children: React.ReactNode}> = ({children}) => (
  <div style={{
    position: "absolute", left: 0, top: 0,
    width: "2304px",   // 60% of 3840px canvas
    height: "100%",
    display: "flex", flexDirection: "column", justifyContent: "center",
    paddingLeft: "130px", paddingRight: "130px",
    boxSizing: "border-box",
    borderRight: `4px solid ${COLORS.BG_RECESSED}`,
  }}>
    {children}
  </div>
);
```

### Background (include in every block - use unique SVG pattern id per block)
```tsx
const EditorialBackground: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: COLORS.BG_BASE }}>
    <svg style={{ position: "absolute", width: "100%", height: "100%", opacity: 0.12 }}>
      <defs>
        <pattern id="grid-BLOCK_UNIQUE_ID" ...>
          <circle cx="6" cy="6" r="2.5" fill={COLORS.INK_TERTIARY} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-BLOCK_UNIQUE_ID)" />
    </svg>
  </AbsoluteFill>
);
```
> WARN: Each block needs a unique pattern id (grid-b6, grid-b7, etc). Duplicates break rendering.

---

## 6. Sequence Structure Rules (CRITICAL - PREVENTS OVERLAP BUG)

```tsx
export default function MyBlock() {
  return (
    <AbsoluteFill style={{ overflow: "hidden" }}>
      <Sequence from={0}>
        <EditorialBackground />
      </Sequence>

      <AbsoluteFill>
        <Sequence from={0}   durationInFrames={380}>
          <Audio src={staticFile("pop-sfx.mp3")} volume={0.4} />
          <Beat1 />
        </Sequence>
        <Sequence from={380} durationInFrames={400}>
          <Audio src={staticFile("pop-sfx.mp3")} volume={0.4} />
          <Beat2 />
        </Sequence>
        <Sequence from={780}>  {/* last beat: no durationInFrames */}
          <Audio src={staticFile("pop-sfx.mp3")} volume={0.4} />
          <Beat3 />
        </Sequence>
      </AbsoluteFill>
    </AbsoluteFill>
  );
}
```

### OVERLAP BUG PATTERN - always verify math!
```
// WRONG: Beat2 ends at 414+400=814, Beat3 starts at 780 -> 34-frame overlap!
<Sequence from={414} durationInFrames={400}><Beat2/></Sequence>
<Sequence from={780}><Beat3/></Sequence>

// CORRECT: from[N+1] must exactly equal from[N] + durationInFrames[N]
<Sequence from={380} durationInFrames={400}><Beat2/></Sequence>
<Sequence from={780}><Beat3/></Sequence>
```

---

## 7. Font Sizes for 3840x2160 Canvas

| Element | Min | Typical |
|---|---|---|
| Section identifier label | 48px | 52px |
| Beat H1 headline | 100px | 110-120px |
| Hero stat / big number | 140px | 160-220px |
| Card headline | 60px | 68-80px |
| Body / descriptor text | 44px | 48-52px |
| Badge / pill text | 38px | 44px |
| Dark slab sub-label | 40px | 44-48px |

---

## 8. NO PARAGRAPH RULE (USER FEEDBACK - most important rule)

> The narrator speaks the explanation. The visual shows ONLY the key stat or headline.

### CORRECT - short and punchy
```
"NVIDIA gets 0.2% - not 8%."
"Rebalancing sells winners to buy laggards"
"Always Owns The Winners"
"Per Year - Every Year"
```

### WRONG - paragraph body text
```
"You always own the biggest, most dominant businesses on earth -- with zero effort."
"RSP sells winning positions quarterly to restore equal weight -- a headwind in strong bull markets."
```

**MAX 6-8 words per text element. If you have more to say, split into a new sub-beat.**

When to split vs. remove:
- 2 distinct ideas -> split into 2 beats
- Text restates what narrator says -> delete entirely
- Text is a key data point (stat, %) -> keep it, make it BIG

---

## 9. Layout Diversity (every beat must look visually different)

| Pattern | When to use |
|---|---|
| Dark hero slab + side list | First beat of new ETF section |
| Two-column gold/red split | Pro vs con comparisons |
| Horizontal bar rows (icon + name + stat) | Sector/category listings |
| Animated bar chart | Performance comparisons |
| Numbered step reveal (01/02/03) | Sequential process |
| Two-column face-off | ETF vs ETF direct comparison |

---

## 10. Dark Slab Pattern

```tsx
<div style={{ backgroundColor: COLORS.DARK_SLAB, borderRadius: "48px", padding: "64px" }}>
  {/* Label: white at 65% opacity */}
  <span style={{ color: "rgba(255,255,255,0.65)", fontSize: "44px" }}>100-Year Avg Return</span>
  {/* Big stat: GOLD for max contrast on dark */}
  <span style={{ color: COLORS.ACCENT_HERO, fontSize: "200px", fontWeight: 900 }}>10%</span>
  {/* Supporting: pure white */}
  <span style={{ color: "#FFFFFF", fontSize: "48px" }}>Per Year - Every Year</span>
</div>
```

---

## 11. ASCII Safety Rule (prevents ? question mark bug)

ALWAYS use plain hyphens, never Unicode dashes:
- WRONG: "1914-1945" with en-dash (U+2013) -> shows as "1914?1945"
- CORRECT: "1914 - 1945" with ASCII hyphen

In JSX string literals, use only ASCII characters. Use HTML entities if needed.

---

## 12. File Editing Rules

- ALWAYS edit files directly using replace_file_content or multi_replace_file_content IDE tools
- NEVER use Python scripts or PowerShell Set-Content with JSX (encoding issues + operator conflicts)
- NEVER use write_to_file for project source files (restricted to artifact directory)
- For targeted changes, multi_replace_file_content is preferred

---

## 13. Verified Script Data (source: script-video2.md)

### Block 8 - VOO (six.tsx)
- 100-year avg annual return: 8-10%
- Mechanism: market-cap weighted, auto-rebalances to biggest companies
- Survived: World Wars, pandemics, tariffs, double-digit interest rates
- Risk: top-10 holdings = ~40% of index (AI concentration)
- Upside: always holds biggest/best, auto-rotates losers out
- Example: if NVIDIA drops 80%, VOO rebalances to new leaders automatically

### Block 9 - RSP (seven.tsx)
- Same 500 stocks as VOO, equal weight at 0.2% per company
- NVIDIA: drops from 8% down to 0.2%
- Sector tilts: Industrials ~14%, Financials ~14%, Healthcare ~13%
- Drawback: rebalancing sells winners, buys underperformers constantly
- 5-year return: RSP +51% vs VOO +83% (including dividends)

### Block 10 - VTI (eight.tsx)
- ~3,500 stocks total (vs 500 for S&P)
- Expense ratio: 0.03% ($3/yr per $10K invested)
- Composition: Large & Mega-cap ~82%, Mid-cap ~12%, Small/Micro ~6%
- Key insight: top 500 S&P companies = 80%+ of VTI by weight
- Top-10 weight: VTI ~32% vs VOO ~40% (less concentrated but similar)
- 5-year return: VTI +74% vs VOO +83%

### Block 11 - Decision Matrix
- VOO: +83% / VTI: +74% / RSP: +51% over 5 years
- VOO = max growth, most AI concentration risk
- VTI = slightly more diversified, nearly same returns as VOO
- RSP = max diversification from mega-caps, significantly lower returns

---

## 14. Status of All Blocks

| File | Block # | Status | Notes |
|---|---|---|---|
| one.tsx thru five.tsx | Blocks 1-5 | DONE | Standardized design system & fonts |
| six.tsx | Block 8 - VOO | DONE | 3 beats, overlap fixed |
| seven.tsx | Block 9 - RSP | DONE | 3 beats, no overlaps |
| eight.tsx | Block 10 - VTI | DONE | 3 beats, no overlaps |
| nine.tsx | Block 11 - Decision Matrix | DONE | 2 beats, 104px H1, 120px stats |
| ten.tsx | Block 12 - Sleeve 2 Complementary | DONE | 2 beats, 20-30% hero, 3 contender columns |
| eleven.tsx | Block 13 - ACWX Footprint | DONE | 2 beats, 1,700 holdings & 16% concentration |
| twelve.tsx | Block 14 - VXUS / IXUS Alternatives | DONE | 2 beats, +22% 1-yr return & 0.07% fee slasher |
| thirteen.tsx | Block 15 - AVDV Factor Trifecta | DONE | 2 beats, 3-gap screen & 1,400 holdings 0.5% cap |
| fourteen.tsx | Block 16 - AVDV Alpha & Volatility | DONE | 2 beats, +96% 5-yr return & 0.36% fee reality |
| fifteen.tsx | Block 17 - DFIV Large Value | DONE | 2 beats, ~500 holdings & +110% 5-yr shootout |
| Blocks 18+ | TBD | Not started | Next up: sixteen.tsx (Block 18 Matrix) |

---

## 15. Common Bugs & Fixes

| Bug | Cause | Fix |
|---|---|---|
| Two beats visible simultaneously | Beat N+1 from value != Beat N from + duration | Verify: from[N+1] = from[N] + duration[N] exactly |
| "?" question marks in text | Unicode en/em-dash in string literals | Replace with ASCII hyphen or HTML entity |
| Text on dark bg unreadable | ACCENT_DETAIL teal on dark bg | Use ACCENT_HERO gold or #FFFFFF on dark |
| Content clipped/overflowing | Fixed-height containers | Use flex height only, never fixed px heights on containers |
| SVG pattern wrong | Duplicate pattern id across blocks | Give each block unique id (grid-b8, grid-b9, etc) |
| Screen looks cluttered | Long body text paragraphs | Remove body text, keep only stat + short headline (rule 8) |

---

## 16. Pre-Submit Checklist

- [ ] Sequence frame math is correct (no overlaps)
- [ ] No dark teal (ACCENT_DETAIL) on dark backgrounds
- [ ] All text elements are max 6-8 words
- [ ] Font sizes appropriate for 3840px canvas (headers 100px+, body 44px+)
| - [ ] SVG pattern has unique id per block
- [ ] No en-dashes or em-dashes in string literals
- [ ] No fixed container heights
- [ ] Each beat has visually distinct layout
