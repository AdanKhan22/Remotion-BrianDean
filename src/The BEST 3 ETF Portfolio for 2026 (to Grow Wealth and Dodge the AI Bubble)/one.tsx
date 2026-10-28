/**
 * MASTER ETF QUICK-FACTS COMPLETE SEQUENCE
 * 4K Canvas (3840 x 2160) — 60/40 Left Zone
 * Duration: 1080 frames (~18 seconds @ 60fps) — 120 frames (2.0s) per ETF
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
import { ShieldCheck } from 'lucide-react';

// Duration per card (120 frames = 2 seconds at 60 FPS)
export const CARD_DURATION = 120;

// --- DESIGN TOKENS ---
const COLORS = {
  BG_BASE: "#F3EEE4",
  BG_ELEVATED: "#FAF6EC",
  BG_RECESSED: "#EAE3D3",
  INK_PRIMARY: "#1E1B16",
  INK_SECONDARY: "#5C564A",
  INK_TERTIARY: "#8C8474",

  EMERALD: "#0D7A53",
  EMERALD_BG: "rgba(13, 122, 83, 0.12)",
  GOLD: "#B8862E",
  GOLD_BG: "rgba(184, 134, 46, 0.14)",
  COBALT: "#2557D6",
  COBALT_BG: "rgba(37, 87, 214, 0.12)",
};

const FONTS = {
  heading: "Poppins, Inter, -apple-system, sans-serif",
  body: "Inter, -apple-system, sans-serif",
};

// Snappy spring config for fast transitions
const FAST_SPRING = { damping: 16, stiffness: 170, mass: 0.6 };

// --- ETF DATABASE (All 9 Funds from Transcript) ---
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
  // SLEEVE 1: CORE (60%)
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

  // SLEEVE 2: COMPLEMENTARY (20-30%)
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

  // SLEEVE 3: DIVERSIFIER (10-20%)
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

const ETF_LIST = ['VOO', 'RSP', 'VTI', 'ACWX', 'AVDV', 'DFIV', 'SGOV', 'BND', 'GLD'];

// --- EDITORIAL BACKGROUND ---
const EditorialBackground: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: COLORS.BG_BASE }}>
    <svg style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0.12 }}>
      <defs>
        <pattern id="grid-fast-facts" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          <circle cx="4" cy="4" r="3" fill={COLORS.INK_TERTIARY} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-fast-facts)" />
    </svg>
    <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at 35% 35%, rgba(250, 246, 236, 0.85) 0%, rgba(234, 227, 211, 0.25) 100%)`, pointerEvents: 'none' }} />
  </AbsoluteFill>
);

// --- INDIVIDUAL ETF CARD ---
export const ETFQuickFactCard: React.FC<{ ticker: string }> = ({ ticker }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const data = ETF_DATABASE[ticker] || ETF_DATABASE.VOO;

  // Snappy Entrances (Fully landed by frame ~40)
  const headerPop = spring({ frame: frame - 2, fps, config: FAST_SPRING });
  const cardPop = spring({ frame: frame - 10, fps, config: FAST_SPRING });
  const stat1Pop = spring({ frame: frame - 18, fps, config: FAST_SPRING });
  const stat2Pop = spring({ frame: frame - 26, fps, config: FAST_SPRING });
  const jobPop = spring({ frame: frame - 36, fps, config: FAST_SPRING });

  // Quick exit transition on the last 14 frames
  const exitFade = interpolate(frame, [CARD_DURATION - 14, CARD_DURATION], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const exitSlide = interpolate(frame, [CARD_DURATION - 14, CARD_DURATION], [0, -40], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '2304px', // 60% Left Zone
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: '140px',
        paddingRight: '120px',
        boxSizing: 'border-box',
        opacity: exitFade,
        transform: `translateY(${exitSlide}px)`,
      }}
    >
      {/* 1. Header (Category & Giant Ticker) */}
      <div
        style={{
          marginBottom: '40px',
          opacity: headerPop,
          transform: `translateY(${interpolate(headerPop, [0, 1], [35, 0])}px)`,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '16px' }}>
          <div
            style={{
              backgroundColor: data.sleeveBg,
              border: `3px solid ${data.sleeveColor}50`,
              padding: '14px 34px',
              borderRadius: '9999px',
            }}
          >
            <span
              style={{
                fontFamily: FONTS.heading,
                fontSize: '44px',
                fontWeight: 900,
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
              backgroundColor: 'rgba(0,0,0,0.06)',
              padding: '14px 30px',
              borderRadius: '9999px',
            }}
          >
            <span style={{ fontFamily: FONTS.body, fontSize: '42px', fontWeight: 800, color: COLORS.INK_TERTIARY }}>
              {data.badgeTag}
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'baseline', gap: '32px' }}>
          <h1
            style={{
              fontFamily: FONTS.heading,
              fontSize: '200px', // Massive Giant Ticker
              fontWeight: 900,
              color: COLORS.INK_PRIMARY,
              margin: 0,
              lineHeight: 0.9,
              letterSpacing: '-0.05em',
            }}
          >
            ${data.ticker}
          </h1>
          <span
            style={{
              fontFamily: FONTS.body,
              fontSize: '66px',
              fontWeight: 800,
              color: COLORS.INK_SECONDARY,
            }}
          >
            {data.name}
          </span>
        </div>
      </div>

      {/* 2. Main Stat Card */}
      <div
        style={{
          width: '100%',
          backgroundColor: COLORS.BG_ELEVATED,
          borderRadius: '56px',
          padding: '68px 80px',
          boxSizing: 'border-box',
          boxShadow: '0 32px 85px rgba(0,0,0,0.08)',
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
                fontSize: '40px',
                fontWeight: 900,
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
                fontSize: '165px', // Giant Return / Yield Number
                fontWeight: 900,
                color: data.sleeveColor,
                lineHeight: 0.95,
                margin: '14px 0 12px 0',
                letterSpacing: '-0.04em',
              }}
            >
              {data.primaryStatValue}
            </div>
            <div style={{ fontFamily: FONTS.body, fontSize: '42px', fontWeight: 800, color: COLORS.INK_SECONDARY }}>
              {data.primaryStatSub}
            </div>
          </div>

          {/* Expense Ratio Stat Box */}
          <div
            style={{
              backgroundColor: 'rgba(0,0,0,0.035)',
              border: `3px solid rgba(0,0,0,0.07)`,
              borderRadius: '40px',
              padding: '40px 48px',
              opacity: stat2Pop,
              transform: `scale(${interpolate(stat2Pop, [0, 1], [0.94, 1])})`,
            }}
          >
            <div
              style={{
                fontFamily: FONTS.heading,
                fontSize: '38px',
                fontWeight: 900,
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
                fontSize: '145px', // Giant Fee Number
                fontWeight: 900,
                color: COLORS.INK_PRIMARY,
                lineHeight: 0.95,
                margin: '12px 0 10px 0',
                letterSpacing: '-0.04em',
              }}
            >
              {data.expenseRatio}
            </div>
            <div style={{ fontFamily: FONTS.body, fontSize: '38px', fontWeight: 800, color: COLORS.INK_TERTIARY }}>
              {data.holdingsCount}
            </div>
          </div>
        </div>

        {/* Row 2: Bottom Job / Role Banner */}
        <div
          style={{
            backgroundColor: `${data.sleeveColor}15`,
            borderLeft: `16px solid ${data.sleeveColor}`,
            borderRadius: '30px',
            padding: '36px 48px',
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
            opacity: jobPop,
            transform: `translateY(${interpolate(jobPop, [0, 1], [25, 0])}px)`,
          }}
        >
          <ShieldCheck size={72} color={data.sleeveColor} style={{ flexShrink: 0 }} />
          <div>
            <div style={{ fontFamily: FONTS.heading, fontSize: '36px', fontWeight: 900, color: data.sleeveColor, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Portfolio Job & Purpose
            </div>
            <div style={{ fontFamily: FONTS.body, fontSize: '52px', fontWeight: 900, color: COLORS.INK_PRIMARY, marginTop: '6px', lineHeight: 1.15 }}>
              {data.keyJob}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- COMPLETE SEQUENCED COMPOSITION ---
export const MasterETFQuickFactsScene: React.FC = () => {
  return (
    <AbsoluteFill style={{ overflow: 'hidden' }}>
      <EditorialBackground />

      <AbsoluteFill>
        {ETF_LIST.map((ticker, index) => (
          <Sequence
            key={ticker}
            from={index * CARD_DURATION}
            durationInFrames={CARD_DURATION}
          >
            <Audio src={staticFile('pop-sfx.mp3')} volume={0.15} />
            <ETFQuickFactCard ticker={ticker} />
          </Sequence>
        ))}
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export default MasterETFQuickFactsScene;