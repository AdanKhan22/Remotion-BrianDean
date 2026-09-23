/**
 * BLOCK 11: Core Sleeve Decision Matrix (VOO vs. VTI vs. RSP)
 * Duration: 1050 frames (~35 seconds)
 * 
 * Multi-Beat Architecture:
 * - Beat 1 (0-450): 5-Year Return Shootout (VOO +83% vs VTI +74% vs RSP +51%)
 * - Beat 2 (450-1050): Investor Decision Matcher (Selecting Your 60% Core Anchor)
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
  Compass,
  TrendingUp,
} from 'lucide-react';

const COLORS = {
  BG_BASE: '#F3EEE4',
  BG_ELEVATED: '#FAF6EC',
  BG_RECESSED: '#EAE3D3',

  INK_PRIMARY: '#1E1B16',
  INK_SECONDARY: '#5C564A',
  INK_TERTIARY: '#8C8474',

  ACCENT_HERO: '#B8862E',
  ACCENT_NEGATIVE: '#B5533C',
  ACCENT_DETAIL: '#3C6E71',
  DARK_SLAB: '#1A1714',
};

const FONTS = {
  heading: 'Poppins, Inter, Helvetica Neue, Helvetica, Arial, sans-serif',
  body: 'Inter, Roboto, Helvetica Neue, Helvetica, Arial, sans-serif',
};

const SPRING_CONFIG = { damping: 200, stiffness: 120, mass: 0.8 };

const EditorialBackground: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: COLORS.BG_BASE }}>
    <svg style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0.22 }}>
      <defs>
        <pattern id="grid-b11" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
          <circle cx="6" cy="6" r="2.5" fill={COLORS.INK_TERTIARY} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-b11)" />
    </svg>
    <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at 35% 30%, rgba(250, 246, 236, 0.75) 0%, rgba(234, 227, 211, 0.45) 100%)`, pointerEvents: 'none' }} />
  </AbsoluteFill>
);

const LeftZone: React.FC<{ children: React.ReactNode }> = ({ children }) => (
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
);

// --- BEAT 1: 5-Year Return Shootout ---
const Beat1_ReturnShootout: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headerPop = spring({ frame: frame - 5, fps, config: SPRING_CONFIG });
  const barsPop = spring({ frame: frame - 22, fps, config: SPRING_CONFIG });
  const sourcePop = spring({ frame: frame - 50, fps, config: SPRING_CONFIG });

  const contenders = [
    {
      ticker: 'VOO',
      name: 'S&P 500 Market-Cap',
      returnVal: '+83.0%',
      pctWidth: 83,
      tag: 'Maximum Momentum • Top-10 AI Concentration (40%)',
      color: COLORS.ACCENT_HERO,
    },
    {
      ticker: 'VTI',
      name: 'Total US Stock Market',
      returnVal: '+74.0%',
      pctWidth: 74,
      tag: 'Balanced Breadth • 3,500+ Stocks across All Caps (32%)',
      color: COLORS.ACCENT_DETAIL,
    },
    {
      ticker: 'RSP',
      name: 'Equal-Weight S&P 500',
      returnVal: '+51.0%',
      pctWidth: 51,
      tag: 'Risk Shield • 0.20% Equal Cap per Company',
      color: COLORS.INK_SECONDARY,
    },
  ];

  return (
    <LeftZone>
      <div style={{ transform: `translateY(${interpolate(headerPop, [0, 1], [30, 0])}px)`, opacity: headerPop, marginBottom: '40px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '18px', backgroundColor: `${COLORS.ACCENT_HERO}18`, padding: '14px 34px', borderRadius: '32px', marginBottom: '16px' }}>
          <TrendingUp size={46} color={COLORS.ACCENT_HERO} />
          <span style={{ fontFamily: FONTS.heading, fontSize: '46px', fontWeight: 800, color: COLORS.ACCENT_HERO, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            5-Year Performance Shootout
          </span>
        </div>
        <h1 style={{ fontFamily: FONTS.heading, fontSize: '112px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, letterSpacing: '-0.03em', lineHeight: 1.05 }}>
          Comparing 3 Core Contenders
        </h1>
        <p style={{ fontFamily: FONTS.body, fontSize: '50px', fontWeight: 700, color: COLORS.INK_SECONDARY, margin: '14px 0 0 0' }}>
          Total 5-Year Cumulative Returns with Reinvested Dividends
        </p>
      </div>

      <div
        style={{
          width: '100%',
          backgroundColor: COLORS.BG_ELEVATED,
          border: `4px solid ${COLORS.BG_RECESSED}`,
          borderRadius: '44px',
          padding: '52px 64px',
          display: 'flex',
          flexDirection: 'column',
          gap: '40px',
          boxShadow: '0 24px 56px rgba(30, 27, 22, 0.06)',
          transform: `translateY(${interpolate(barsPop, [0, 1], [40, 0])}px)`,
          opacity: barsPop,
        }}
      >
        {contenders.map((c) => {
          const animatedWidth = interpolate(barsPop, [0, 1], [0, c.pctWidth]);
          return (
            <div key={c.ticker} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '20px' }}>
                  <span style={{ fontFamily: FONTS.heading, fontSize: '72px', fontWeight: 900, color: COLORS.INK_PRIMARY }}>
                    {c.ticker}
                  </span>
                  <span style={{ fontFamily: FONTS.body, fontSize: '50px', fontWeight: 700, color: COLORS.INK_TERTIARY }}>
                    ({c.name})
                  </span>
                </div>
                <span style={{ fontFamily: FONTS.heading, fontSize: '92px', fontWeight: 900, color: c.color, lineHeight: 0.95 }}>
                  {c.returnVal}
                </span>
              </div>

              {/* Progress Bar */}
              <div style={{ width: '100%', height: '52px', backgroundColor: COLORS.BG_RECESSED, borderRadius: '26px', overflow: 'hidden' }}>
                <div style={{ width: `${animatedWidth}%`, height: '100%', backgroundColor: c.color, borderRadius: '26px' }} />
              </div>

              <span style={{ fontFamily: FONTS.body, fontSize: '48px', fontWeight: 700, color: COLORS.INK_PRIMARY }}>
                {c.tag}
              </span>
            </div>
          );
        })}
      </div>

      {/* StockAnalysis.com Attribution Pill */}
      <div style={{
        marginTop: '32px',
        display: 'flex',
        alignItems: 'center',
        gap: '18px',
        backgroundColor: COLORS.BG_BASE,
        border: `3px solid ${COLORS.BG_RECESSED}`,
        borderRadius: '24px',
        padding: '20px 36px',
        width: 'fit-content',
        opacity: sourcePop,
        transform: `translateY(${interpolate(sourcePop, [0, 1], [20, 0])}px)`,
      }}>
        <span style={{ fontFamily: FONTS.body, fontSize: '38px', fontWeight: 800, color: COLORS.INK_TERTIARY, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Data Source:
        </span>
        <span style={{ fontFamily: FONTS.heading, fontSize: '42px', fontWeight: 900, color: COLORS.INK_PRIMARY }}>
          StockAnalysis.com (5-Year Comparison: VOO vs. VTI vs. RSP)
        </span>
      </div>
    </LeftZone>
  );
};

// --- BEAT 2: Investor Profile Matcher ---
const Beat2_ProfileMatcher: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headerPop = spring({ frame: frame - 5, fps, config: SPRING_CONFIG });
  const profiles = [
    {
      ticker: 'VOO',
      role: 'Maximum Growth Engine',
      desc: 'Accepts 40% top-10 AI concentration for peak historical momentum',
      feature: '0.03% ER • S&P 500 Market Cap',
      color: COLORS.ACCENT_HERO,
    },
    {
      ticker: 'VTI',
      role: 'Balanced Breadth Anchor',
      desc: '3,500+ US companies with an 8% lower top-10 concentration cushion',
      feature: '0.03% ER • Total US Economy',
      color: COLORS.ACCENT_DETAIL,
    },
    {
      ticker: 'RSP',
      role: 'Equal-Weight Risk Shield',
      desc: 'Hard 0.20% holding cap protecting against any single mega-cap crash',
      feature: '0.20% ER • Pure Diversification',
      color: COLORS.INK_SECONDARY,
    },
  ];

  return (
    <LeftZone>
      <div style={{ transform: `translateY(${interpolate(headerPop, [0, 1], [30, 0])}px)`, opacity: headerPop, marginBottom: '44px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '18px', backgroundColor: `${COLORS.ACCENT_DETAIL}18`, padding: '14px 34px', borderRadius: '32px', marginBottom: '16px' }}>
          <Compass size={46} color={COLORS.ACCENT_DETAIL} />
          <span style={{ fontFamily: FONTS.heading, fontSize: '46px', fontWeight: 800, color: COLORS.ACCENT_DETAIL, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            Core Sleeve Decision Guide
          </span>
        </div>
        <h1 style={{ fontFamily: FONTS.heading, fontSize: '112px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, letterSpacing: '-0.03em', lineHeight: 1.05 }}>
          Pick Your 60% Core Anchor
        </h1>
        <p style={{ fontFamily: FONTS.body, fontSize: '50px', fontWeight: 700, color: COLORS.INK_SECONDARY, margin: '14px 0 0 0' }}>
          Match your personal risk tolerance to the right portfolio engine
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '100%' }}>
        {profiles.map((p, idx) => {
          const pop = spring({ frame: frame - (20 + idx * 14), fps, config: SPRING_CONFIG });
          return (
            <div
              key={p.ticker}
              style={{
                backgroundColor: COLORS.BG_ELEVATED,
                border: `4px solid ${COLORS.BG_RECESSED}`,
                borderLeft: `20px solid ${p.color}`,
                borderRadius: '40px',
                padding: '48px 56px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: '0 20px 48px rgba(30, 27, 22, 0.06)',
                transform: `translateY(${interpolate(pop, [0, 1], [35, 0])}px)`,
                opacity: pop,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
                <div style={{
                  backgroundColor: `${p.color}20`,
                  border: `4px solid ${p.color}`,
                  borderRadius: '28px',
                  padding: '22px 40px',
                  minWidth: '160px',
                  textAlign: 'center',
                }}>
                  <span style={{ fontFamily: FONTS.heading, fontSize: '68px', fontWeight: 900, color: p.color }}>
                    {p.ticker}
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <span style={{ fontFamily: FONTS.heading, fontSize: '64px', fontWeight: 900, color: COLORS.INK_PRIMARY }}>
                    {p.role}
                  </span>
                  <span style={{ fontFamily: FONTS.body, fontSize: '48px', fontWeight: 700, color: COLORS.INK_PRIMARY }}>
                    {p.desc}
                  </span>
                  <span style={{ fontFamily: FONTS.body, fontSize: '38px', fontWeight: 800, color: COLORS.INK_TERTIARY, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    {p.feature}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </LeftZone>
  );
};

export default function Block11_CoreDecisionMatrixScene() {
  return (
    <AbsoluteFill style={{ overflow: 'hidden' }}>
      <Sequence from={0}>
        <EditorialBackground />
      </Sequence>

      <AbsoluteFill>
        {/* BEAT 1: 0 - 450 frames (~15s) */}
        <Sequence from={0} durationInFrames={450}>
          <Audio src={staticFile('pop-sfx.mp3')} volume={0.15} />
          <Beat1_ReturnShootout />
        </Sequence>

        {/* BEAT 2: 450 - 1050 frames (~20s) */}
        <Sequence from={450}>
          <Audio src={staticFile('pop-sfx.mp3')} volume={0.15} />
          <Beat2_ProfileMatcher />
        </Sequence>
      </AbsoluteFill>
    </AbsoluteFill>
  );
}