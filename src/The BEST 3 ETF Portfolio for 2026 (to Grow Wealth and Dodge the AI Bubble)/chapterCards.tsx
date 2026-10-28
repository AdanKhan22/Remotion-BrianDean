/**
 * MASTER ETF QUICK-FACTS COMPLETE SEQUENCE
 * 4K Canvas (3840 x 2160) — 60/40 Left Zone
 * Duration: 2700 frames (45 seconds @ 60fps) — 300 frames per ETF
 */

import React from 'react';
import {
  AbsoluteFill,
  Sequence,
  spring,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  Audio,
  staticFile,
} from 'remotion';
import {
  ShieldCheck,
  Sparkles,
  PieChart,
  Cpu,
  Globe2,
} from 'lucide-react';

// --- DESIGN TOKENS ---
const COLORS = {
  BG_BASE: "#F3EEE4",
  BG_ELEVATED: "#FAF6EC",
  BG_RECESSED: "#EAE3D3",
  INK_PRIMARY: "#1E1B16",
  INK_SECONDARY: "#5C564A",
  INK_TERTIARY: "#8C8474",

  EMERALD: "#0D7A53",
  EMERALD_BG: "rgba(13, 122, 83, 0.10)",
  GOLD: "#B8862E",
  GOLD_BG: "rgba(184, 134, 46, 0.12)",
  COBALT: "#2557D6",
  COBALT_BG: "rgba(37, 87, 214, 0.10)",
  BRICK: "#B5533C",
  BRICK_BG: "rgba(181, 83, 60, 0.10)",
  DARK_SLAB: "#1A1714",
};

const FONTS = {
  heading: "Poppins, Inter, -apple-system, sans-serif",
  body: "Inter, -apple-system, sans-serif",
};

const SPRING_CONFIG = { damping: 200, stiffness: 120, mass: 0.8 };

// --- DATA REGISTRY (Exact Transcript Figures) ---
interface ETFItem {
  ticker: string;
  name: string;
  sleeve: string;
  sleeveColor: string;
  sleeveBg: string;
  badgeTag: string;
  expenseRatio: string;
  primaryStatLabel: string;
  primaryStatValue: string;
  primaryStatSub: string;
  holdingsCount: string;
  keyJob: string;
}

const ETF_DATABASE: Record<string, ETFItem> = {
  // --- SLEEVE 1: CORE (60%) ---
  VOO: {
    ticker: "VOO",
    name: "Vanguard S&P 500 ETF",
    sleeve: "Core Holding • 60% Target",
    sleeveColor: COLORS.EMERALD,
    sleeveBg: COLORS.EMERALD_BG,
    badgeTag: "Market-Cap Weighted",
    expenseRatio: "0.03%",
    primaryStatLabel: "5-Year Total Return",
    primaryStatValue: "+83%",
    primaryStatSub: "8–10% 100-Year Historic CAGR",
    holdingsCount: "500 Equities",
    keyJob: "Primary Long-Term Compounding Engine",
  },
  RSP: {
    ticker: "RSP",
    name: "Invesco S&P 500 Equal Weight",
    sleeve: "Core Alternative • 60% Target",
    sleeveColor: COLORS.GOLD,
    sleeveBg: COLORS.GOLD_BG,
    badgeTag: "Equal-Weight Defense",
    expenseRatio: "0.20%",
    primaryStatLabel: "5-Year Total Return",
    primaryStatValue: "+51%",
    primaryStatSub: "0.20% Capped Weight Per Holding",
    holdingsCount: "500 Equities",
    keyJob: "Eliminates Big-Tech Concentration Risk",
  },
  VTI: {
    ticker: "VTI",
    name: "Vanguard Total Stock Market",
    sleeve: "Core Holding • 60% Target",
    sleeveColor: COLORS.COBALT,
    sleeveBg: COLORS.COBALT_BG,
    badgeTag: "Total US Market",
    expenseRatio: "0.03%",
    primaryStatLabel: "5-Year Total Return",
    primaryStatValue: "+74%",
    primaryStatSub: "80% S&P Overlap + Mid/Small Caps",
    holdingsCount: "~3,500 Equities",
    keyJob: "Broader Diversification with S&P Core",
  },

  // --- SLEEVE 2: COMPLEMENTARY (20-30%) ---
  ACWX: {
    ticker: "ACWX",
    name: "MSCI ACWI ex-US ETF",
    sleeve: "Complementary • 20–30% Target",
    sleeveColor: COLORS.COBALT,
    sleeveBg: COLORS.COBALT_BG,
    badgeTag: "Global Ex-US",
    expenseRatio: "0.32%",
    primaryStatLabel: "1-Year Outperformance",
    primaryStatValue: "+22%",
    primaryStatSub: "vs. 17% S&P 500 (Top 10 = Only 16%)",
    holdingsCount: "~1,700 Global Equities",
    keyJob: "Non-US Exposure (Europe, Asia, EM)",
  },
  AVDV: {
    ticker: "AVDV",
    name: "Intl Small-Cap Value ETF",
    sleeve: "Complementary • 20–30% Target",
    sleeveColor: COLORS.EMERALD,
    sleeveBg: COLORS.EMERALD_BG,
    badgeTag: "Triple Factor Tilt",
    expenseRatio: "0.36%",
    primaryStatLabel: "5-Year Total Return",
    primaryStatValue: "+96%",
    primaryStatSub: "+30% 1-Year (Beats VOO & ACWX)",
    holdingsCount: "~1,400 Undervalued Stocks",
    keyJob: "Triple Factor Gap: Global + Small + Value",
  },
  DFIV: {
    ticker: "DFIV",
    name: "Dimensional International Value",
    sleeve: "Complementary • 20–30% Target",
    sleeveColor: COLORS.GOLD,
    sleeveBg: COLORS.GOLD_BG,
    badgeTag: "Large-Cap Global Value",
    expenseRatio: "0.27%",
    primaryStatLabel: "5-Year Total Return",
    primaryStatValue: "+110%",
    primaryStatSub: "+30% 1-Year Total Return",
    holdingsCount: "~500 Global Value Leaders",
    keyJob: "Global Undervalued Large-Cap Compounding",
  },

  // --- SLEEVE 3: DIVERSIFIER (10-20%) ---
  SGOV: {
    ticker: "SGOV",
    name: "0–3 Month Treasury Bond ETF",
    sleeve: "Diversifier • 10–20% Target",
    sleeveColor: COLORS.EMERALD,
    sleeveBg: COLORS.EMERALD_BG,
    badgeTag: "Cash Equivalent",
    expenseRatio: "0.09%",
    primaryStatLabel: "Current Annualized Yield",
    primaryStatValue: "~4.00%",
    primaryStatSub: "+1.0% in 2022 (When S&P Dropped -18%)",
    holdingsCount: "US Treasury Bills (≤ 90d)",
    keyJob: "Zero-Risk Cash Stability & Rebalance Buffer",
  },
  BND: {
    ticker: "BND",
    name: "Total Bond Market ETF",
    sleeve: "Diversifier • 10–20% Target",
    sleeveColor: COLORS.COBALT,
    sleeveBg: COLORS.COBALT_BG,
    badgeTag: "Broad Fixed Income",
    expenseRatio: "0.03%",
    primaryStatLabel: "Current Starting Yield",
    primaryStatValue: "~5.00%",
    primaryStatSub: "+5% in 2008 Crisis (When S&P Fell -37%)",
    holdingsCount: "~11,000 Total Bonds",
    keyJob: "Long-Term Appreciation Cushion When Fed Cuts",
  },
  GLD: {
    ticker: "GLD",
    name: "SPDR Gold Shares",
    sleeve: "Diversifier • 10–20% Target",
    sleeveColor: COLORS.GOLD,
    sleeveBg: COLORS.GOLD_BG,
    badgeTag: "Physical Store of Value",
    expenseRatio: "0.40%",
    primaryStatLabel: "5-Year Total Return",
    primaryStatValue: "+134%",
    primaryStatSub: "0% in 2022 (Flat Defense in Stagflation)",
    holdingsCount: "Physical Vaulted Gold",
    keyJob: "Uncorrelated Inflation & Dollar Defense",
  },
};

// --- BACKGROUND ---
const EditorialBackground: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: COLORS.BG_BASE }}>
    <svg style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0.12 }}>
      <defs>
        <pattern id="grid-all-facts" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          <circle cx="4" cy="4" r="3" fill={COLORS.INK_TERTIARY} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-all-facts)" />
    </svg>
    <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at 35% 35%, rgba(250, 246, 236, 0.85) 0%, rgba(234, 227, 211, 0.25) 100%)`, pointerEvents: 'none' }} />
  </AbsoluteFill>
);

// --- INDIVIDUAL ETF CARD (Inside 60/40 Zone) ---
export const ETFQuickFactCard: React.FC<{ ticker: string }> = ({ ticker }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const data = ETF_DATABASE[ticker] || ETF_DATABASE.VOO;

  // Staggered Entrances (Frame resets to 0 automatically per Sequence)
  const headerPop = spring({ frame: frame - 4, fps, config: SPRING_CONFIG });
  const cardPop = spring({ frame: frame - 14, fps, config: SPRING_CONFIG });
  const stat1Pop = spring({ frame: frame - 28, fps, config: SPRING_CONFIG });
  const stat2Pop = spring({ frame: frame - 40, fps, config: SPRING_CONFIG });
  const jobPop = spring({ frame: frame - 55, fps, config: SPRING_CONFIG });

  // Smooth fade-out at the end of the 300-frame sequence (last 15 frames)
  const exitFade = interpolate(frame, [285, 300], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '2304px', // 60% of 3840px (Leaves 40% on right for Brian's video)
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: '140px',
        paddingRight: '120px',
        boxSizing: 'border-box',
        opacity: exitFade,
      }}
    >
      {/* 1. Header Row (Sleeve Badge & Ticker) */}
      <div
        style={{
          marginBottom: '44px',
          opacity: headerPop,
          transform: `translateY(${interpolate(headerPop, [0, 1], [30, 0])}px)`,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px', marginBottom: '16px' }}>
          <div
            style={{
              backgroundColor: data.sleeveBg,
              border: `2px solid ${data.sleeveColor}40`,
              padding: '12px 28px',
              borderRadius: '9999px',
            }}
          >
            <span
              style={{
                fontFamily: FONTS.heading,
                fontSize: '38px',
                fontWeight: 800,
                color: data.sleeveColor,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}
            >
              {data.sleeve}
            </span>
          </div>

          <div
            style={{
              backgroundColor: 'rgba(0,0,0,0.05)',
              padding: '12px 26px',
              borderRadius: '9999px',
            }}
          >
            <span style={{ fontFamily: FONTS.body, fontSize: '36px', fontWeight: 700, color: COLORS.INK_TERTIARY }}>
              {data.badgeTag}
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'baseline', gap: '28px' }}>
          <h1
            style={{
              fontFamily: FONTS.heading,
              fontSize: '150px',
              fontWeight: 900,
              color: COLORS.INK_PRIMARY,
              margin: 0,
              lineHeight: 0.95,
              letterSpacing: '-0.04em',
            }}
          >
            ${data.ticker}
          </h1>
          <span
            style={{
              fontFamily: FONTS.body,
              fontSize: '54px',
              fontWeight: 700,
              color: COLORS.INK_SECONDARY,
            }}
          >
            {data.name}
          </span>
        </div>
      </div>

      {/* 2. Main Stat Card (Commanding Scale & Zero Clutter) */}
      <div
        style={{
          width: '100%',
          backgroundColor: COLORS.BG_ELEVATED,
          borderRadius: '52px',
          padding: '64px 72px',
          boxSizing: 'border-box',
          boxShadow: '0 30px 80px rgba(0,0,0,0.07)',
          border: `3px solid rgba(0,0,0,0.07)`,
          display: 'flex',
          flexDirection: 'column',
          gap: '48px',
          opacity: cardPop,
          transform: `translateY(${interpolate(cardPop, [0, 1], [40, 0])}px)`,
        }}
      >
        {/* Row 1: The Two Key Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.45fr 1fr', gap: '48px', alignItems: 'flex-start' }}>
          {/* Primary Stat (Return or Yield) */}
          <div
            style={{
              opacity: stat1Pop,
              transform: `scale(${interpolate(stat1Pop, [0, 1], [0.94, 1])})`,
            }}
          >
            <div
              style={{
                fontFamily: FONTS.heading,
                fontSize: '36px',
                fontWeight: 800,
                color: COLORS.INK_TERTIARY,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}
            >
              {data.primaryStatLabel}
            </div>
            <div
              style={{
                fontFamily: FONTS.heading,
                fontSize: '125px',
                fontWeight: 900,
                color: data.sleeveColor,
                lineHeight: 1.0,
                margin: '12px 0 8px 0',
                letterSpacing: '-0.03em',
              }}
            >
              {data.primaryStatValue}
            </div>
            <div style={{ fontFamily: FONTS.body, fontSize: '38px', fontWeight: 700, color: COLORS.INK_SECONDARY }}>
              {data.primaryStatSub}
            </div>
          </div>

          {/* Expense Ratio Stat Box */}
          <div
            style={{
              backgroundColor: 'rgba(0,0,0,0.03)',
              border: `3px solid rgba(0,0,0,0.06)`,
              borderRadius: '36px',
              padding: '36px 44px',
              opacity: stat2Pop,
              transform: `scale(${interpolate(stat2Pop, [0, 1], [0.94, 1])})`,
            }}
          >
            <div
              style={{
                fontFamily: FONTS.heading,
                fontSize: '34px',
                fontWeight: 800,
                color: COLORS.INK_TERTIARY,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}
            >
              Annual Fee (Expense)
            </div>
            <div
              style={{
                fontFamily: FONTS.heading,
                fontSize: '110px',
                fontWeight: 900,
                color: COLORS.INK_PRIMARY,
                lineHeight: 1.0,
                margin: '8px 0 6px 0',
                letterSpacing: '-0.04em',
              }}
            >
              {data.expenseRatio}
            </div>
            <div style={{ fontFamily: FONTS.body, fontSize: '34px', fontWeight: 700, color: COLORS.INK_TERTIARY }}>
              {data.holdingsCount}
            </div>
          </div>
        </div>

        {/* Row 2: Bottom Job / Role Banner */}
        <div
          style={{
            backgroundColor: `${data.sleeveColor}15`,
            borderLeft: `14px solid ${data.sleeveColor}`,
            borderRadius: '28px',
            padding: '32px 44px',
            display: 'flex',
            alignItems: 'center',
            gap: '28px',
            opacity: jobPop,
            transform: `translateY(${interpolate(jobPop, [0, 1], [25, 0])}px)`,
          }}
        >
          <ShieldCheck size={60} color={data.sleeveColor} style={{ flexShrink: 0 }} />
          <div>
            <div style={{ fontFamily: FONTS.heading, fontSize: '32px', fontWeight: 800, color: data.sleeveColor, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Portfolio Job & Purpose
            </div>
            <div style={{ fontFamily: FONTS.body, fontSize: '46px', fontWeight: 800, color: COLORS.INK_PRIMARY, marginTop: '4px', lineHeight: 1.15 }}>
              {data.keyJob}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- COMPLETE SEQUENCED COMPOSITION (ALL 9 CARDS) ---
export const MasterETFQuickFactsScene: React.FC = () => {
  return (
    <AbsoluteFill style={{ overflow: 'hidden' }}>
      <EditorialBackground />

      <AbsoluteFill>
        {/* --- SLEEVE 1: CORE (0 - 900 frames / 15s) --- */}
        <Sequence from={0} durationInFrames={300}>
          <Audio src={staticFile('pop-sfx.mp3')} volume={0.15} />
          <ETFQuickFactCard ticker="VOO" />
        </Sequence>

        <Sequence from={300} durationInFrames={300}>
          <Audio src={staticFile('pop-sfx.mp3')} volume={0.15} />
          <ETFQuickFactCard ticker="RSP" />
        </Sequence>

        <Sequence from={600} durationInFrames={300}>
          <Audio src={staticFile('pop-sfx.mp3')} volume={0.15} />
          <ETFQuickFactCard ticker="VTI" />
        </Sequence>

        {/* --- SLEEVE 2: COMPLEMENTARY (900 - 1800 frames / 15s) --- */}
        <Sequence from={900} durationInFrames={300}>
          <Audio src={staticFile('pop-sfx.mp3')} volume={0.15} />
          <ETFQuickFactCard ticker="ACWX" />
        </Sequence>

        <Sequence from={1200} durationInFrames={300}>
          <Audio src={staticFile('pop-sfx.mp3')} volume={0.15} />
          <ETFQuickFactCard ticker="AVDV" />
        </Sequence>

        <Sequence from={1500} durationInFrames={300}>
          <Audio src={staticFile('pop-sfx.mp3')} volume={0.15} />
          <ETFQuickFactCard ticker="DFIV" />
        </Sequence>

        {/* --- SLEEVE 3: DIVERSIFIER (1800 - 2700 frames / 15s) --- */}
        <Sequence from={1800} durationInFrames={300}>
          <Audio src={staticFile('pop-sfx.mp3')} volume={0.15} />
          <ETFQuickFactCard ticker="SGOV" />
        </Sequence>

        <Sequence from={2100} durationInFrames={300}>
          <Audio src={staticFile('pop-sfx.mp3')} volume={0.15} />
          <ETFQuickFactCard ticker="BND" />
        </Sequence>

        <Sequence from={2400} durationInFrames={300}>
          <Audio src={staticFile('pop-sfx.mp3')} volume={0.15} />
          <ETFQuickFactCard ticker="GLD" />
        </Sequence>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// Export both default and named so it never fails in Root.tsx
export { MasterETFQuickFactsScene as ETFQuickFactsMasterScene };

// --- 5. FULL-SCREEN CHAPTER CARDS (Required by Root.tsx) ---
export const GenericChapterCard: React.FC<{
  chapterTag: string;
  title: string;
  subtitle: string;
  accentColor: string;
  icon: React.ReactNode;
}> = ({ chapterTag, title, subtitle, accentColor, icon }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const pop = spring({ frame: frame - 15, fps, config: SPRING_CONFIG });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.BG_BASE, overflow: 'hidden' }}>
      <svg style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0.24 }}>
        <defs>
          <pattern id="chapter-dot-grid" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
            <circle cx="6" cy="6" r="2.5" fill={COLORS.INK_TERTIARY} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#chapter-dot-grid)" />
      </svg>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at 50% 45%, rgba(250, 246, 236, 0.85) 0%, rgba(234, 227, 211, 0.55) 100%)`,
          pointerEvents: 'none',
        }}
      />

      <Sequence from={15}>
        <Audio src={staticFile('pop-sfx.mp3')} volume={0.15} />
      </Sequence>

      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '0 320px',
          boxSizing: 'border-box',
          transform: `translateY(${interpolate(pop, [0, 1], [45, 0])}px)`,
          opacity: pop,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            backgroundColor: `${accentColor}15`,
            border: `3px solid ${accentColor}`,
            padding: '16px 40px',
            borderRadius: '40px',
            marginBottom: '48px',
          }}
        >
          {icon}
          <span
            style={{
              fontFamily: FONTS.heading,
              fontSize: '48px',
              fontWeight: 800,
              color: accentColor,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}
          >
            {chapterTag}
          </span>
        </div>

        <h1
          style={{
            fontFamily: FONTS.heading,
            fontSize: '144px',
            fontWeight: 900,
            color: COLORS.INK_PRIMARY,
            margin: '0 0 28px 0',
            letterSpacing: '-0.035em',
            lineHeight: 1.05,
          }}
        >
          {title}
        </h1>

        <span
          style={{
            fontFamily: FONTS.body,
            fontSize: '60px',
            fontWeight: 600,
            color: COLORS.INK_SECONDARY,
            lineHeight: 1.3,
            maxWidth: '2400px',
          }}
        >
          {subtitle}
        </span>
      </div>
    </AbsoluteFill>
  );
};

export const TitleCardIntro: React.FC = () => (
  <GenericChapterCard
    chapterTag="2026 Strategy Guide"
    title="The BEST 3-ETF Portfolio"
    subtitle="How to Grow Long-Term Wealth & Dodge the AI Concentration Bubble"
    accentColor={COLORS.GOLD}
    icon={<Sparkles color={COLORS.GOLD} size={52} strokeWidth={2.5} />}
  />
);

export const ChapterCardCore: React.FC = () => (
  <GenericChapterCard
    chapterTag="Chapter 01 · 60% Target"
    title="Sleeve 1: The Core Holding"
    subtitle="The 20–30 Year Compounding Engine · VOO vs. RSP vs. VTI"
    accentColor={COLORS.GOLD}
    icon={<Cpu color={COLORS.GOLD} size={52} strokeWidth={2.5} />}
  />
);

export const ChapterCardComplementary: React.FC = () => (
  <GenericChapterCard
    chapterTag="Chapter 02 · 20–30% Target"
    title="Sleeve 2: Complementary"
    subtitle="Global Markets & Factor Alpha · ACWX · AVDV · DFIV"
    accentColor={COLORS.COBALT}
    icon={<Globe2 color={COLORS.COBALT} size={52} strokeWidth={2.5} />}
  />
);

export const ChapterCardDiversifier: React.FC = () => (
  <GenericChapterCard
    chapterTag="Chapter 03 · 10–20% Target"
    title="Sleeve 3: The Diversifier"
    subtitle="Capital Preservation & Inflation Armor · SGOV · BND · GLD"
    accentColor={COLORS.EMERALD}
    icon={<ShieldCheck color={COLORS.EMERALD} size={52} strokeWidth={2.5} />}
  />
);

export const ChapterCardBlueprint: React.FC = () => (
  <GenericChapterCard
    chapterTag="Chapter 04 · Complete Synthesis"
    title="The Master 3-ETF Blueprint"
    subtitle="Putting the Allocation Together for 2026 and Beyond"
    accentColor={COLORS.GOLD}
    icon={<PieChart color={COLORS.GOLD} size={52} strokeWidth={2.5} />}
  />
);

export default MasterETFQuickFactsScene;