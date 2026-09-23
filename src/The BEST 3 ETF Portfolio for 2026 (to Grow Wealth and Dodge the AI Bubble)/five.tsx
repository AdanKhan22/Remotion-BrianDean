/**
 * BLOCK 7: Sleeve 1 (Core Holding) — Role & 60% Target Allocation
 * Duration: 900 frames (~30 seconds)
 * 
 * 60/40 Split Architecture: Left 60% (2304px) strictly for visual storytelling,
 * Right 40% clean for speaker PiP.
 * 
 * Swiss / Editorial Graphic Design:
 * - Fonts: Poppins, Inter, Helvetica Neue
 * - High-impact visual data: Radial portfolio arc, exponential compounding curve, giant ticker slabs
 * - Beat 1 (0-300): The 60% Core Wealth Engine (Dial & Mandate)
 * - Beat 2 (300-600): The 20–30 Year Compounding Horizon (Exponential Curve)
 * - Beat 3 (600-900): The 3 Core Contenders (VOO, RSP, VTI Heavyweight Slabs)
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
  Cpu,
  TrendingUp,
  Clock,
  Layers,
  Zap,
} from 'lucide-react';

const COLORS = {
  BG_BASE: "#F3EEE4",
  BG_ELEVATED: "#FAF6EC",
  BG_RECESSED: "#EAE3D3",
  INK_PRIMARY: "#1E1B16",
  INK_SECONDARY: "#5C564A",
  INK_TERTIARY: "#8C8474",
  ACCENT_HERO: "#B8862E",
  ACCENT_NEGATIVE: "#B5533C",
  ACCENT_DETAIL: "#3C6E71",
  DARK_SLAB: "#1A1714",
};

const FONTS = {
  heading: "Poppins, Inter, Helvetica Neue, Helvetica, Arial, sans-serif",
  body: "Inter, Roboto, Helvetica Neue, Helvetica, Arial, sans-serif",
};

const SPRING_CONFIG = { damping: 200, stiffness: 120, mass: 0.8 };

const EditorialBackground: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: COLORS.BG_BASE }}>
    <svg style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0.12 }}>
      <defs>
        <pattern id="grid-b7-editorial" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <circle cx="4" cy="4" r="2.5" fill={COLORS.INK_TERTIARY} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-b7-editorial)" />
    </svg>
    <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at 30% 30%, rgba(250, 246, 236, 0.85) 0%, rgba(234, 227, 211, 0.2) 100%)`, pointerEvents: 'none' }} />
  </AbsoluteFill>
);

// 60/40 Split Zone
const LeftZone: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div
    style={{
      position: 'absolute',
      left: 0,
      top: 0,
      width: '2304px', // 60% of 3840
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingLeft: '140px',
      paddingRight: '140px',
      boxSizing: 'border-box',
      borderRight: `4px solid ${COLORS.BG_RECESSED}`,
    }}
  >
    {children}
  </div>
);

// --- BEAT 1: The 60% Wealth Engine (0 - 300 frames / 10s) ---
const Beat1_TheEngine: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titlePop = spring({ frame: frame - 5, fps, config: SPRING_CONFIG });
  const gaugePop = spring({ frame: frame - 25, fps, config: SPRING_CONFIG });
  const textPop = spring({ frame: frame - 80, fps, config: SPRING_CONFIG });
  const bannerPop = spring({ frame: frame - 160, fps, config: SPRING_CONFIG });

  // Radial progress arc
  const arcProgress = interpolate(gaugePop, [0, 1], [0, 0.60]);
  const circumference = 2 * Math.PI * 185; // ~1162.4
  const strokeDashoffset = circumference * (1 - arcProgress);

  return (
    <LeftZone>
      {/* Header */}
      <div style={{ transform: `scale(${interpolate(titlePop, [0,1], [0.92, 1])})`, opacity: titlePop, marginBottom: '50px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '16px' }}>
          <Cpu size={44} color={COLORS.ACCENT_DETAIL} />
          <span style={{ fontFamily: FONTS.heading, fontSize: '52px', fontWeight: 800, color: COLORS.ACCENT_DETAIL, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            SLEEVE 1 // THE FOUNDATION
          </span>
        </div>
        <h1 style={{ fontFamily: FONTS.heading, fontSize: '110px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, lineHeight: 1.05 }}>
          The Core Holding: <span style={{ color: COLORS.ACCENT_DETAIL }}>The Wealth Engine</span>
        </h1>
        <p style={{ fontFamily: FONTS.body, fontSize: '48px', fontWeight: 600, color: COLORS.INK_TERTIARY, marginTop: '16px' }}>
          The single most critical portfolio component
        </p>
      </div>

      {/* Main Feature: Radial Dial + Mandate Hero */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '64px', width: '100%' }}>
        
        {/* Radial Dial */}
        <div style={{
          backgroundColor: COLORS.BG_ELEVATED,
          borderRadius: '48px',
          border: `4px solid ${COLORS.BG_RECESSED}`,
          padding: '48px 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: `scale(${interpolate(gaugePop, [0, 1], [0.85, 1])})`,
          opacity: gaugePop,
          boxShadow: '0 24px 60px rgba(0,0,0,0.06)',
          minWidth: '500px',
        }}>
          <div style={{ position: 'relative', width: '460px', height: '460px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="460" height="460" viewBox="0 0 460 460" style={{ transform: 'rotate(-90deg)' }}>
              <circle
                cx="230"
                cy="230"
                r="185"
                fill="none"
                stroke={COLORS.BG_RECESSED}
                strokeWidth="32"
              />
              <circle
                cx="230"
                cy="230"
                r="185"
                fill="none"
                stroke={COLORS.ACCENT_DETAIL}
                strokeWidth="32"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
              />
            </svg>

            {/* Inner Percentage */}
            <div style={{ position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
              <span style={{ fontFamily: FONTS.heading, fontSize: '110px', fontWeight: 900, color: COLORS.ACCENT_DETAIL, lineHeight: 1.0 }}>
                60%
              </span>
              <span style={{ fontFamily: FONTS.heading, fontSize: '32px', fontWeight: 800, color: COLORS.INK_SECONDARY, letterSpacing: '0.1em', marginTop: '8px' }}>
                TARGET WEIGHT
              </span>
            </div>
          </div>
        </div>

        {/* Mandate Hero */}
        <div style={{
          flex: 1,
          backgroundColor: COLORS.BG_ELEVATED,
          borderRadius: '48px',
          borderLeft: `24px solid ${COLORS.ACCENT_DETAIL}`,
          borderTop: `4px solid ${COLORS.BG_RECESSED}`,
          borderRight: `4px solid ${COLORS.BG_RECESSED}`,
          borderBottom: `6px solid ${COLORS.BG_RECESSED}`,
          padding: '56px 64px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '20px',
          transform: `translateX(${interpolate(textPop, [0, 1], [60, 0])}px)`,
          opacity: textPop,
          boxShadow: '0 24px 60px rgba(0,0,0,0.05)',
        }}>
          <span style={{ fontFamily: FONTS.heading, fontSize: '48px', fontWeight: 800, color: COLORS.ACCENT_DETAIL, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Core Mandate
          </span>
          <span style={{ fontFamily: FONTS.heading, fontSize: '72px', fontWeight: 900, color: COLORS.INK_PRIMARY, lineHeight: 1.15 }}>
            Own the Entire Economy
          </span>
          <span style={{ fontFamily: FONTS.body, fontSize: '50px', fontWeight: 700, color: COLORS.INK_SECONDARY }}>
            Broad Market Reach • Near-Zero Drag
          </span>
        </div>

      </div>

      {/* Bottom Anchor Banner */}
      <div style={{
        marginTop: '52px',
        backgroundColor: COLORS.DARK_SLAB,
        borderRadius: '32px',
        padding: '36px 56px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '24px',
        transform: `translateY(${interpolate(bannerPop, [0, 1], [30, 0])}px)`,
        opacity: bannerPop,
        boxShadow: '0 20px 48px rgba(0,0,0,0.2)',
      }}>
        <TrendingUp size={52} color={COLORS.ACCENT_HERO} />
        <span style={{ fontFamily: FONTS.heading, fontSize: '52px', fontWeight: 800, color: '#FFFFFF' }}>
          Own the productive economy — leave it alone
        </span>
      </div>
    </LeftZone>
  );
};

// --- BEAT 2: The 20-30 Year Compounding Horizon (300 - 600 frames / 10s) ---
const Beat2_CompoundingCurve: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titlePop = spring({ frame: frame - 5, fps, config: SPRING_CONFIG });
  const statsPop = spring({ frame: frame - 20, fps, config: SPRING_CONFIG });
  const chartPop = spring({ frame: frame - 45, fps, config: SPRING_CONFIG });
  const slabPop = spring({ frame: frame - 120, fps, config: SPRING_CONFIG });

  const curveProgress = interpolate(chartPop, [0, 1], [0, 1]);

  return (
    <LeftZone>
      {/* Header */}
      <div style={{ transform: `scale(${interpolate(titlePop, [0,1], [0.92, 1])})`, opacity: titlePop, marginBottom: '40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '16px' }}>
          <Clock size={48} color={COLORS.ACCENT_HERO} />
          <span style={{ fontFamily: FONTS.heading, fontSize: '52px', fontWeight: 800, color: COLORS.ACCENT_HERO, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            INVESTMENT HORIZON // 20 TO 30+ YEARS
          </span>
        </div>
        <h1 style={{ fontFamily: FONTS.heading, fontSize: '110px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, lineHeight: 1.05 }}>
          The Power of <span style={{ color: COLORS.ACCENT_HERO }}>Uninterrupted Compounding</span>
        </h1>
      </div>

      {/* Top Stat Duo */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '32px',
        width: '100%',
        marginBottom: '32px',
        opacity: statsPop,
        transform: `translateY(${interpolate(statsPop, [0, 1], [30, 0])}px)`,
      }}>
        <div style={{
          backgroundColor: COLORS.BG_ELEVATED,
          borderRadius: '32px',
          border: `4px solid ${COLORS.ACCENT_DETAIL}`,
          padding: '32px 48px',
          display: 'flex',
          alignItems: 'center',
          gap: '28px',
          boxShadow: '0 16px 40px rgba(0,0,0,0.05)',
        }}>
          <span style={{ fontFamily: FONTS.heading, fontSize: '76px', fontWeight: 900, color: COLORS.ACCENT_DETAIL, lineHeight: 1 }}>
            8-10%
          </span>
          <span style={{ fontFamily: FONTS.heading, fontSize: '48px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
            Avg Annual Return
          </span>
        </div>

        <div style={{
          backgroundColor: COLORS.BG_ELEVATED,
          borderRadius: '32px',
          border: `4px solid ${COLORS.ACCENT_HERO}`,
          padding: '32px 48px',
          display: 'flex',
          alignItems: 'center',
          gap: '28px',
          boxShadow: '0 16px 40px rgba(0,0,0,0.05)',
        }}>
          <span style={{ fontFamily: FONTS.heading, fontSize: '76px', fontWeight: 900, color: COLORS.ACCENT_HERO, lineHeight: 1 }}>
            17X+
          </span>
          <span style={{ fontFamily: FONTS.heading, fontSize: '48px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
            30-Year Multiplier
          </span>
        </div>
      </div>

      {/* Expansive Growth Chart */}
      <div style={{
        backgroundColor: COLORS.BG_ELEVATED,
        borderRadius: '44px',
        border: `4px solid ${COLORS.BG_RECESSED}`,
        padding: '48px 56px',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        transform: `translateY(${interpolate(chartPop, [0, 1], [40, 0])}px)`,
        opacity: chartPop,
        boxShadow: '0 24px 60px rgba(0,0,0,0.06)',
        width: '100%',
      }}>
        {/* SVG Chart */}
        <div style={{ position: 'relative', width: '100%', height: '320px' }}>
          <svg width="100%" height="320" viewBox="0 0 1000 320" style={{ overflow: 'visible' }}>
            {/* Base line */}
            <line x1="50" y1="270" x2="950" y2="270" stroke={COLORS.BG_RECESSED} strokeWidth="6" />

            {/* Milestone vertical dashed grid lines */}
            <line x1="320" y1="40" x2="320" y2="270" stroke={COLORS.BG_RECESSED} strokeWidth="3" strokeDasharray="8 8" />
            <line x1="620" y1="40" x2="620" y2="270" stroke={COLORS.BG_RECESSED} strokeWidth="3" strokeDasharray="8 8" />
            <line x1="920" y1="40" x2="920" y2="270" stroke={COLORS.BG_RECESSED} strokeWidth="3" strokeDasharray="8 8" />

            {/* Growth Curve */}
            <path
              d="M 50 260 Q 500 250 720 150 T 920 30"
              fill="none"
              stroke={COLORS.ACCENT_HERO}
              strokeWidth="16"
              strokeLinecap="round"
              strokeDasharray="1000"
              strokeDashoffset={1000 * (1 - curveProgress)}
            />

            {/* Endpoint circle */}
            {curveProgress > 0.85 && (
              <circle cx="920" cy="30" r="22" fill={COLORS.ACCENT_HERO} />
            )}
          </svg>

          {/* Milestone Labels */}
          <div style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: '30px', paddingRight: '30px', marginTop: '18px' }}>
            <span style={{ fontFamily: FONTS.heading, fontSize: '44px', fontWeight: 800, color: COLORS.INK_TERTIARY }}>YEAR 0 (1X)</span>
            <span style={{ fontFamily: FONTS.heading, fontSize: '44px', fontWeight: 800, color: COLORS.INK_TERTIARY }}>YEAR 10 (2.5X)</span>
            <span style={{ fontFamily: FONTS.heading, fontSize: '44px', fontWeight: 800, color: COLORS.INK_TERTIARY }}>YEAR 20 (6.7X)</span>
            <span style={{ fontFamily: FONTS.heading, fontSize: '48px', fontWeight: 900, color: COLORS.ACCENT_HERO }}>YEAR 30+ (17X+)</span>
          </div>
        </div>
      </div>

      {/* Solid Dark Slab Rule */}
      <div style={{
        marginTop: '40px',
        backgroundColor: COLORS.DARK_SLAB,
        borderRadius: '32px',
        padding: '36px 56px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '24px',
        opacity: slabPop,
        transform: `translateY(${interpolate(slabPop, [0, 1], [30, 0])}px)`,
        boxShadow: '0 20px 48px rgba(0,0,0,0.2)',
      }}>
        <Zap size={52} color={COLORS.ACCENT_HERO} />
        <span style={{ fontFamily: FONTS.heading, fontSize: '52px', fontWeight: 800, color: '#FFFFFF' }}>
          Time in the market always beats timing the market
        </span>
      </div>
    </LeftZone>
  );
};

// --- BEAT 3: The 3 Core Contenders (600 - 900 frames / 10s) ---
const Beat3_ContendersHero: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titlePop = spring({ frame: frame - 5, fps, config: SPRING_CONFIG });
  const vooPop = spring({ frame: frame - 25, fps, config: SPRING_CONFIG });
  const rspPop = spring({ frame: frame - 90, fps, config: SPRING_CONFIG });
  const vtiPop = spring({ frame: frame - 155, fps, config: SPRING_CONFIG });
  const footerPop = spring({ frame: frame - 220, fps, config: SPRING_CONFIG });

  const contenders = [
    {
      ticker: 'VOO',
      name: 'Vanguard S&P 500 ETF',
      badge: 'MARKET-CAP TITAN',
      keyPoint: '500 Largest US Companies • 8-10% Historical Return',
      color: COLORS.ACCENT_HERO,
      pop: vooPop,
    },
    {
      ticker: 'RSP',
      name: 'Invesco Equal Weight S&P',
      badge: 'ANTI-BUBBLE SHIELD',
      keyPoint: 'All 500 Capped at 0.20% • Built-In Profit Taking',
      color: COLORS.ACCENT_DETAIL,
      pop: rspPop,
    },
    {
      ticker: 'VTI',
      name: 'Total Stock Market ETF',
      badge: 'ALL-CAP REACH',
      keyPoint: '3,500+ US Stocks • Large, Mid, Small & Micro Caps',
      color: COLORS.INK_SECONDARY,
      pop: vtiPop,
    },
  ];

  return (
    <LeftZone>
      {/* Header */}
      <div style={{ transform: `scale(${interpolate(titlePop, [0,1], [0.92, 1])})`, opacity: titlePop, marginBottom: '52px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '16px' }}>
          <Layers size={48} color={COLORS.ACCENT_DETAIL} />
          <span style={{ fontFamily: FONTS.heading, fontSize: '52px', fontWeight: 800, color: COLORS.ACCENT_DETAIL, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            CHOOSE YOUR ENGINE // 3 CONTENDERS
          </span>
        </div>
        <h1 style={{ fontFamily: FONTS.heading, fontSize: '110px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, lineHeight: 1.05 }}>
          3 Options For Your <span style={{ color: COLORS.ACCENT_DETAIL }}>60% Core</span>
        </h1>
      </div>

      {/* 3 Heavyweight Full-Width Ticker Modules */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
        {contenders.map((c) => (
          <div
            key={c.ticker}
            style={{
              backgroundColor: COLORS.BG_ELEVATED,
              borderRadius: '36px',
              border: `4px solid ${COLORS.BG_RECESSED}`,
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'stretch',
              justifyContent: 'space-between',
              transform: `translateY(${interpolate(c.pop, [0, 1], [60, 0])}px)`,
              opacity: c.pop,
              boxShadow: '0 16px 40px rgba(0,0,0,0.05)',
            }}
          >
            {/* Left Giant Ticker Slab */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{
                backgroundColor: c.color,
                width: '320px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '32px',
                flexShrink: 0,
              }}>
                <span style={{ fontFamily: FONTS.heading, fontSize: '100px', fontWeight: 900, color: '#FFFFFF', lineHeight: 1 }}>
                  {c.ticker}
                </span>
              </div>

              {/* Middle Details */}
              <div style={{
                padding: '32px 52px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '10px',
              }}>
                <span style={{ fontFamily: FONTS.heading, fontSize: '60px', fontWeight: 900, color: COLORS.INK_PRIMARY }}>
                  {c.name}
                </span>
                <span style={{ fontFamily: FONTS.body, fontSize: '48px', fontWeight: 700, color: COLORS.INK_SECONDARY }}>
                  {c.keyPoint}
                </span>
              </div>
            </div>

            {/* Right Badge */}
            <div style={{ display: 'flex', alignItems: 'center', paddingRight: '52px' }}>
              <div style={{
                backgroundColor: `${c.color}15`,
                border: `3px solid ${c.color}30`,
                padding: '20px 40px',
                borderRadius: '100px',
              }}>
                <span style={{ fontFamily: FONTS.heading, fontSize: '44px', fontWeight: 900, color: c.color, letterSpacing: '0.04em' }}>
                  {c.badge}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Banner */}
      <div style={{
        marginTop: '44px',
        backgroundColor: COLORS.INK_PRIMARY,
        borderRadius: '32px',
        padding: '32px 56px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '24px',
        transform: `translateY(${interpolate(footerPop, [0, 1], [30, 0])}px)`,
        opacity: footerPop,
      }}>
        <Zap size={48} color={COLORS.ACCENT_HERO} />
        <span style={{ fontFamily: FONTS.heading, fontSize: '52px', fontWeight: 800, color: COLORS.BG_BASE }}>
          Deep-dive into each core contender
        </span>
      </div>
    </LeftZone>
  );
};

export default function Block7_CoreHoldingScene() {
  return (
    <AbsoluteFill style={{ overflow: 'hidden' }}>
      <Sequence from={0}>
        <EditorialBackground />
      </Sequence>

      <AbsoluteFill>
        {/* BEAT 1: 0 - 300 frames (10s) */}
        <Sequence from={0} durationInFrames={300}>
          <Audio src={staticFile('pop-sfx.mp3')} volume={0.15} />
          <Beat1_TheEngine />
        </Sequence>

        {/* BEAT 2: 300 - 600 frames (10s) */}
        <Sequence from={300} durationInFrames={300}>
          <Audio src={staticFile('pop-sfx.mp3')} volume={0.15} />
          <Beat2_CompoundingCurve />
        </Sequence>

        {/* BEAT 3: 600 - 900 frames (10s) */}
        <Sequence from={600}>
          <Audio src={staticFile('pop-sfx.mp3')} volume={0.15} />
          <Beat3_ContendersHero />
        </Sequence>
      </AbsoluteFill>
    </AbsoluteFill>
  );
}