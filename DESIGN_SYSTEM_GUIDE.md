# Video Production Design System & Animation Guidelines (V3)

This document is the master specification for creating video scenes ("beats" / "blocks") for the editorial finance explainers (e.g. *The BEST 3 ETF Portfolio for 2026*, *Three BEST Short-Term Bond ETF*). It is extracted directly from the established codebase patterns.

---

## 1. Canvas & Composition Architecture

- **Resolution:** 4K UHD — `3840 x 2160` px
- **Frame Rate:** `30 fps`
- **Default Duration:** `3000 frames` per composition (configured in [Root.tsx](file:///d:/Remotion/Brian%20Dean/Brian/src/Root.tsx))
- **Layout Model (60 / 40 Split):**
  - **Left Editorial Zone (60% = `2304px`):** Hosts all graphics, titles, cards, stats, and animated visual mechanisms.
  - **Right Presenter Zone (40% = `1536px`):** Reserved clear area where the talking head / presenter (Brian Dean) is positioned in the final composite.
  - **Boundary Divider:** `borderRight: 3px solid ${COLORS.BG_RECESSED}` separating the editorial zone from the presenter zone.

---

## 2. Color System (Strict V3 Financial Editorial)

| Token | Hex | Role & Semantics |
| :--- | :--- | :--- |
| `BG_BASE` | `#F3EEE4` | Warm layered beige canvas base |
| `BG_ELEVATED` | `#FAF6EC` | Cards, containers, pill badges, and elevated panels |
| `BG_RECESSED` | `#EAE3D3` | Card borders, dividers, subtle separators |
| `INK_PRIMARY` | `#1E1B16` | Main headlines, large figures, high-contrast text |
| `INK_SECONDARY` | `#5C564A` | Subtitles, body copy, descriptions |
| `INK_TERTIARY` | `#8C8474` | Grid dots, minor denominators, subtle metadata |
| `ACCENT_HERO` | `#B8862E` | Muted Gold: The winning strategy, high yields, positive wealth generation |
| `ACCENT_NEGATIVE` | `#B5533C` | Muted Brick: Concentration risk, downsides, bubble warnings, tech overweight |
| `ACCENT_DETAIL` | `#3C6E71` | Muted Teal: Mechanics, historical facts, supporting technical details |
| `ACCENT_NEUTRAL` | `#8C8474` | Slate Grey: Baseline metrics, de-emphasized comparisons |

---

## 3. Typography Scale (Optimized for 4K & Mobile Legibility)

Font Family: `"Inter", "DM Sans", sans-serif`

- **Section / Chapter Header Title:** `112px – 120px` (Weight: `800–900`, letter-spacing: `-0.03em`, line-height: `1.05`)
- **Section / Chapter Subtitle:** `64px` (Weight: `700`, uppercase, letter-spacing: `0.06em`, color: Accent detail or negative)
- **Hero Display Numbers / Stat Values:** `120px` (Weight: `900`, line-height: `1`)
- **Metric Denominators (e.g. `/ $100`):** `64px` (Weight: `800`, color: `INK_TERTIARY`)
- **Card Titles / Category Tags:** `48px – 56px` (Weight: `800`, uppercase, letter-spacing: `0.04em`)
- **Card Subtitles & Explanatory Copy:** `48px – 56px` (Weight: `500–600`, line-height: `1.3`)
- **Mechanic Item Header:** `80px` (Weight: `800`, letter-spacing: `-0.02em`)
- **Mechanic Item Subtext:** `56px` (Weight: `500`, italic, color: `INK_SECONDARY`)

---

## 4. Animation Physics & Sound Design

- **V3 Physics Spring Config:**
  ```ts
  const SPRING_CONFIG = { damping: 200, stiffness: 120, mass: 0.8 };
  ```
  Provides a crisp, weighty, premium editorial feel without excessive bounce or float.
- **Entrance Interpolation Patterns:**
  - Upward pop: `translateY(${interpolate(pop, [0, 1], [40, 0])}px)` with `opacity: pop`
  - Slide from left: `translateX(${interpolate(slide, [0, 1], [-60, 0])}px)` with `opacity: slide`
- **Pacing & Delays:**
  - Header Entrance: `delay = 10` frames
  - First Card / Mechanic: `delay = 30 – 40` frames
  - Second Card / Mechanic: `delay = 50 – 80` frames
  - Third Card / Detail: `delay = 80 – 120` frames
- **Sound Effects (Audio SFX):**
  - Card pops trigger `pop-sfx.mp3`:
  ```tsx
  <Sequence from={delay}>
    <Audio src={staticFile("pop-sfx.mp3")} volume={0.4} />
  </Sequence>
  ```

---

## 5. Standard Component Building Blocks

### A. Editorial Background
Includes SVG dot grid pattern (`48x48px` spacing, circle radius `2.5px`, fill `INK_TERTIARY`, opacity `0.22`) and radial ambient light overlay (`radial-gradient(circle at 35% 30%, rgba(250, 246, 236, 0.75) 0%, rgba(234, 227, 211, 0.45) 100%)`).

### B. EditorialLeftZone
```tsx
<div
  style={{
    position: 'absolute',
    left: 0,
    top: 0,
    width: '2304px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: '140px',
    paddingRight: '140px',
    boxSizing: 'border-box',
    borderRight: `3px solid ${COLORS.BG_RECESSED}`,
  }}
>
  {children}
</div>
```

### C. SectionHeader
- Large rounded circular badge (`150px x 150px` or `160px x 160px`) housing a Lucide icon (`80px`, `strokeWidth: 2.5`).
- Title + Subtitle stack.

### D. StatCard / ComparisonCard
- Border: `4px solid ${accentColor}`
- Background: `BG_ELEVATED`
- Border Radius: `48px`
- Shadow: `0 32px 64px ${accentColor}15`
- Icon pill in top-right with accent background.
- Big value + optional denominator + subtitle.

---

## 6. Project Structure & Workflow

1. **Folder Organization:**
   - Video compositions live in `src/<Video Title>/` (e.g. `src/The BEST 3 ETF Portfolio for 2026 (to Grow Wealth and Dodge the AI Bubble)/`).
   - Files are named numerically: `one.tsx`, `two.tsx`, `three.tsx`, etc., corresponding to script blocks / beats.
2. **Composition Registration:**
   - Each file exports a default React component.
   - Imported into [src/Root.tsx](file:///d:/Remotion/Brian%20Dean/Brian/src/Root.tsx) and mapped into the `<Composition>` list with 4K dimensions (`3840x2160`) at `30 fps`.
3. **Workflow Rules:**
   - Build animation beat-by-beat / block-by-block.
   - Seek user approval after completing each block before advancing to the next.
