/**
 * BLOCK 26: Diversifier Option C — GLD SPDR Gold Shares Overview & Long-Term Cycle
 * Duration: 900 frames (~30 seconds)
 * 
 * Revisions Applied:
 * - Comments 39 & 40: SPDR GLD Website Overview Mockup Card + Long-Term Gold Cycle Chart
 * - High readability typography (H1 112px, body 48px-52px), volume=0.15
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
  Coins,
  Award,
  Globe,
  TrendingUp,
  Activity,
  CheckCircle2,
} from 'lucide-react';

const COLORS = {
  BG_BASE: '#F4EFE6',
  BG_ELEVATED: '#FCFAF6',
  BG_RECESSED: '#E8E1D5',

  INK_PRIMARY: '#1E1B16',
  INK_SECONDARY: '#4A4439',
  INK_TERTIARY: '#7C7465',

  ACCENT_HERO: '#B8862E',
  ACCENT_GOLD: '#C98B10',
  ACCENT_DETAIL: '#2E696B',
  ACCENT_NEGATIVE: '#B5533C',
  BORDER_CARD: 'rgba(30, 27, 22, 0.14)',
};

const FONTS = {
  main: '"Inter", "DM Sans", -apple-system, BlinkMacSystemFont, sans-serif',
};

const SPRING_CONFIG = { damping: 200, stiffness: 120, mass: 0.8 };

const EditorialBackground: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: COLORS.BG_BASE }}>
    <svg style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0.22 }}>
      <defs>
        <pattern id="grid-b26" x="0" y="0" width="56" height="56" patternUnits="userSpaceOnUse">
          <circle cx="8" cy="8" r="2.8" fill={COLORS.INK_TERTIARY} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-b26)" />
    </svg>
    <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at 45% 35%, rgba(252, 250, 246, 0.85) 0%, rgba(232, 225, 213, 0.5) 100%)`, pointerEvents: 'none' }} />
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
      paddingLeft: '130px',
      paddingRight: '130px',
      boxSizing: 'border-box',
      borderRight: `3px solid ${COLORS.BG_RECESSED}`,
    }}
  >
    {children}
  </div>
);

// --- BEAT 1: SPDR GLD Website Overview Mockup Card (Comment 39) ---
const Beat1_GLDOverview: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const cardPop = spring({ frame: frame - 5, fps, config: SPRING_CONFIG });
  const metricsPop = spring({ frame: frame - 20, fps, config: SPRING_CONFIG });

  return (
    <LeftZone>
      <div
        style={{
          width: '100%',
          backgroundColor: COLORS.BG_ELEVATED,
          borderRadius: '36px',
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.10)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          transform: `scale(${interpolate(cardPop, [0, 1], [0.96, 1])}) translateY(${interpolate(cardPop, [0, 1], [40, 0])}px)`,
          opacity: cardPop,
        }}
      >

        <div style={{ padding: '60px 48px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <h1 style={{ fontFamily: FONTS.main, fontSize: '110px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, letterSpacing: '-0.03em' }}>
                SPDR® Gold Shares
              </h1>
              <p style={{ fontFamily: FONTS.main, fontSize: '46px', fontWeight: 600, color: COLORS.INK_SECONDARY, margin: '10px 0 0 0' }}>
                100% physical gold bullion bars vaulted securely in London (HSBC Bank plc Vault)
              </p>
            </div>
            <div style={{ backgroundColor: '#1E1B16', padding: '18px 28px', borderRadius: '24px', textAlign: 'center' }}>
              <span style={{ fontFamily: FONTS.main, fontSize: '32px', fontWeight: 800, color: '#D4A84B', textTransform: 'uppercase', display: 'block' }}>
                SLOT ALLOCATION
              </span>
              <span style={{ fontFamily: FONTS.main, fontSize: '72px', fontWeight: 900, color: '#FCFAF6' }}>
                10-20%
              </span>
            </div>
          </div>

          {/* 3 Metric Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', transform: `translateY(${interpolate(metricsPop, [0, 1], [30, 0])}px)`, opacity: metricsPop }}>
            <div style={{ backgroundColor: COLORS.BG_BASE, borderRadius: '24px', padding: '40px 24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span style={{ fontFamily: FONTS.main, fontSize: '42px', fontWeight: 800, color: COLORS.INK_TERTIARY, textTransform: 'uppercase' }}>
                Expense Ratio
              </span>
              <span style={{ fontFamily: FONTS.main, fontSize: '110px', fontWeight: 900, color: COLORS.ACCENT_HERO, lineHeight: 1.0 }}>
                0.40%
              </span>
            </div>

            <div style={{ backgroundColor: COLORS.BG_BASE, borderRadius: '24px', padding: '40px 24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span style={{ fontFamily: FONTS.main, fontSize: '42px', fontWeight: 800, color: COLORS.INK_TERTIARY, textTransform: 'uppercase' }}>
                2022 Crisis Return
              </span>
              <span style={{ fontFamily: FONTS.main, fontSize: '110px', fontWeight: 900, color: COLORS.ACCENT_DETAIL, lineHeight: 1.0 }}>
                0.0%
              </span>
            </div>

            <div style={{ backgroundColor: COLORS.BG_BASE, borderRadius: '24px', padding: '40px 24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span style={{ fontFamily: FONTS.main, fontSize: '42px', fontWeight: 800, color: COLORS.INK_TERTIARY, textTransform: 'uppercase' }}>
                Asset Backing
              </span>
              <span style={{ fontFamily: FONTS.main, fontSize: '110px', fontWeight: 900, color: COLORS.INK_PRIMARY, lineHeight: 1.1 }}>
                Physical Bars
              </span>
            </div>
          </div>

          {/* Bottom Banner */}
          <div style={{ backgroundColor: '#1E1B16', borderRadius: '20px', padding: '22px 32px', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <CheckCircle2 size={44} color="#D4A84B" />
            <span style={{ fontFamily: FONTS.main, fontSize: '38px', fontWeight: 700, color: '#FCFAF6' }}>
              The Ultimate Stagflation Shield: Protects capital when both equity earnings and fiat bond yields fail.
            </span>
          </div>
        </div>
      </div>
    </LeftZone>
  );
};

// --- BEAT 2: Long-Term Gold Cycle & Shootout (Comment 40) ---
const Beat2_GoldCycleShootout: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headerPop = spring({ frame: frame - 5, fps, config: SPRING_CONFIG });
  const chartPop = spring({ frame: frame - 20, fps, config: SPRING_CONFIG });

  return (
    <LeftZone>
      <div style={{ transform: `translateY(${interpolate(headerPop, [0, 1], [30, 0])}px)`, opacity: headerPop, textAlign: 'left', marginBottom: '44px' }}>
        <h1 style={{ fontFamily: FONTS.main, fontSize: '110px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
          The Surprising Performance King
        </h1>
      </div>

      <div
        style={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1.1fr 1fr',
          gap: '32px',
          transform: `translateY(${interpolate(chartPop, [0, 1], [30, 0])}px)`,
          opacity: chartPop,
        }}
      >
        {/* Left: 5-Year Return Leaderboard */}
        <div
          style={{
            backgroundColor: COLORS.BG_ELEVATED,
            borderRadius: '36px',
            padding: '60px 48px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            boxShadow: '0 20px 50px rgba(184, 134, 46, 0.12)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '12px' }}>
            <Award size={44} color={COLORS.ACCENT_HERO} />
            <span style={{ fontFamily: FONTS.main, fontSize: '50px', fontWeight: 900, color: COLORS.ACCENT_HERO, textTransform: 'uppercase' }}>
              5-Year Cumulative Return
            </span>
          </div>
          <span style={{ fontFamily: FONTS.main, fontSize: '150px', fontWeight: 900, color: COLORS.ACCENT_HERO, lineHeight: 1.0, display: 'block' }}>
            +134.0%
          </span>
        </div>

        {/* Right: Gold Cycle Mechanics Card */}
        <div
          style={{
            backgroundColor: COLORS.BG_ELEVATED,
            borderRadius: '36px',
            padding: '60px 48px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            boxShadow: '0 16px 40px rgba(0, 0, 0, 0.05)',
          }}
        >
          <div>
            <h2 style={{ fontFamily: FONTS.main, fontSize: '72px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: '0 0 14px 0', lineHeight: 1.15 }}>
              Spikes & Doldrums
            </h2>
            <p style={{ fontFamily: FONTS.main, fontSize: '50px', fontWeight: 600, color: COLORS.INK_SECONDARY, lineHeight: 1.45, margin: 0 }}>
              Gold does not compound in a straight line. It experiences explosive rallies during fiat debasement and geopolitical crises, followed by long multidecade doldrums.
            </p>
          </div>

          <div style={{ backgroundColor: '#1E1B16', borderRadius: '22px', padding: '24px', marginTop: '20px' }}>
            <span style={{ fontFamily: FONTS.main, fontSize: '40px', fontWeight: 800, color: '#FCFAF6', display: 'block' }}>
              Portfolio Role:
            </span>
            <span style={{ fontFamily: FONTS.main, fontSize: '38px', fontWeight: 600, color: '#D4A84B', marginTop: '6px', display: 'block' }}>
              An uncorrelated anchor providing liquidity to rebalance when US tech and bonds crash together.
            </span>
          </div>
        </div>
      </div>
    </LeftZone>
  );
};

export default function Block26_GLDGoldReturnScene() {
  return (
    <AbsoluteFill style={{ overflow: 'hidden' }}>
      <Sequence from={0}>
        <EditorialBackground />
      </Sequence>

      <AbsoluteFill>
        {/* BEAT 1: 0 - 450 frames (~15s) - SPDR GLD Website Overview Mockup Card */}
        <Sequence from={0} durationInFrames={450}>
          <Audio src={staticFile('pop-sfx.mp3')} volume={0.15} />
          <Beat1_GLDOverview />
        </Sequence>

        {/* BEAT 2: 450 - 900 frames (~15s) - Long-Term Gold Cycle & Shootout */}
        <Sequence from={450}>
          <Audio src={staticFile('pop-sfx.mp3')} volume={0.15} />
          <Beat2_GoldCycleShootout />
        </Sequence>
      </AbsoluteFill>
    </AbsoluteFill>
  );
}
