/**
 * BLOCK 14: Low-Cost ACWX Alternatives — VXUS & IXUS Fee Slasher
 * Duration: 840 frames (~28 seconds)
 * 
 * Multi-Beat Architecture:
 * - Beat 1 (0-400): 1-Year Outperformance (ACWX +22% vs S&P 500 +17%)
 * - Beat 2 (400-840): Fee Slasher Alternatives (ACWX 0.32% vs VXUS/IXUS 0.07%)
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
  TrendingUp,
  Percent,
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
        <pattern id="grid-b14" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
          <circle cx="6" cy="6" r="2.5" fill={COLORS.INK_TERTIARY} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-b14)" />
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

// --- BEAT 1: 1-Year Outperformance ---
const Beat1_OneYearMomentum: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headerPop = spring({ frame: frame - 5, fps, config: SPRING_CONFIG });
  const battlePop = spring({ frame: frame - 22, fps, config: SPRING_CONFIG });
  const sourcePop = spring({ frame: frame - 45, fps, config: SPRING_CONFIG });

  return (
    <LeftZone>
      <div style={{ transform: `translateY(${interpolate(headerPop, [0, 1], [30, 0])}px)`, opacity: headerPop, marginBottom: '44px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '18px', backgroundColor: `${COLORS.ACCENT_HERO}18`, padding: '14px 34px', borderRadius: '32px', marginBottom: '16px' }}>
          <TrendingUp size={46} color={COLORS.ACCENT_HERO} />
          <span style={{ fontFamily: FONTS.heading, fontSize: '46px', fontWeight: 800, color: COLORS.ACCENT_HERO, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            1-Year Performance Reversal
          </span>
        </div>
        <h1 style={{ fontFamily: FONTS.heading, fontSize: '112px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, letterSpacing: '-0.03em', lineHeight: 1.05 }}>
          International Starting to Lead
        </h1>
        <p style={{ fontFamily: FONTS.body, fontSize: '50px', fontWeight: 700, color: COLORS.INK_SECONDARY, margin: '14px 0 0 0' }}>
          Over the past 12 months, global markets outpaced US domestic large caps
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px', width: '100%' }}>
        <div
          style={{
            backgroundColor: COLORS.BG_ELEVATED,
            border: `4px solid ${COLORS.ACCENT_HERO}`,
            borderTop: `16px solid ${COLORS.ACCENT_HERO}`,
            borderRadius: '44px',
            padding: '56px 60px',
            display: 'flex',
            flexDirection: 'column',
            gap: '22px',
            boxShadow: '0 24px 56px rgba(184, 134, 46, 0.12)',
            transform: `translateY(${interpolate(battlePop, [0, 1], [40, 0])}px)`,
            opacity: battlePop,
          }}
        >
          <span style={{ fontFamily: FONTS.heading, fontSize: '46px', fontWeight: 800, color: COLORS.ACCENT_HERO, textTransform: 'uppercase' }}>
            ACWX (International)
          </span>
          <span style={{ fontFamily: FONTS.heading, fontSize: '140px', fontWeight: 900, color: COLORS.ACCENT_HERO, lineHeight: 0.95 }}>
            +22.0%
          </span>
          <div style={{ width: '100%', height: '3px', backgroundColor: COLORS.BG_RECESSED, margin: '8px 0' }} />
          <span style={{ fontFamily: FONTS.body, fontSize: '52px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
            Trailing 1-Year Total Return
          </span>
          <span style={{ fontFamily: FONTS.body, fontSize: '46px', fontWeight: 600, color: COLORS.INK_SECONDARY }}>
            Ex-US stocks outperforming domestic large-caps
          </span>
        </div>

        <div
          style={{
            backgroundColor: COLORS.BG_ELEVATED,
            border: `4px solid ${COLORS.BG_RECESSED}`,
            borderTop: `16px solid ${COLORS.INK_TERTIARY}`,
            borderRadius: '44px',
            padding: '56px 60px',
            display: 'flex',
            flexDirection: 'column',
            gap: '22px',
            boxShadow: '0 16px 36px rgba(30, 27, 22, 0.05)',
            transform: `translateY(${interpolate(battlePop, [0, 1], [40, 0])}px)`,
            opacity: battlePop,
          }}
        >
          <span style={{ fontFamily: FONTS.heading, fontSize: '46px', fontWeight: 800, color: COLORS.INK_TERTIARY, textTransform: 'uppercase' }}>
            VOO (S&P 500)
          </span>
          <span style={{ fontFamily: FONTS.heading, fontSize: '140px', fontWeight: 900, color: COLORS.INK_PRIMARY, lineHeight: 0.95 }}>
            +17.0%
          </span>
          <div style={{ width: '100%', height: '3px', backgroundColor: COLORS.BG_RECESSED, margin: '8px 0' }} />
          <span style={{ fontFamily: FONTS.body, fontSize: '52px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
            Trailing 1-Year Total Return
          </span>
          <span style={{ fontFamily: FONTS.body, fontSize: '46px', fontWeight: 600, color: COLORS.INK_SECONDARY }}>
            US momentum remains solid but trails global breadth
          </span>
        </div>
      </div>

      {/* StockAnalysis attribution */}
      <div style={{
        marginTop: '36px',
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
          StockAnalysis.com (1-Year Comparison: VOO vs. ACWX)
        </span>
      </div>
    </LeftZone>
  );
};

// --- BEAT 2: Low-Cost Alternatives (VXUS / IXUS) ---
const Beat2_FeeSlasher: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headerPop = spring({ frame: frame - 5, fps, config: SPRING_CONFIG });
  const feesPop = spring({ frame: frame - 22, fps, config: SPRING_CONFIG });

  return (
    <LeftZone>
      <div style={{ transform: `translateY(${interpolate(headerPop, [0, 1], [30, 0])}px)`, opacity: headerPop, marginBottom: '44px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '18px', backgroundColor: `${COLORS.ACCENT_DETAIL}18`, padding: '14px 34px', borderRadius: '32px', marginBottom: '16px' }}>
          <Percent size={46} color={COLORS.ACCENT_DETAIL} />
          <span style={{ fontFamily: FONTS.heading, fontSize: '46px', fontWeight: 800, color: COLORS.ACCENT_DETAIL, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            Expense Ratio Optimization
          </span>
        </div>
        <h1 style={{ fontFamily: FONTS.heading, fontSize: '112px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, letterSpacing: '-0.03em', lineHeight: 1.05 }}>
          Save 80% on Fees: VXUS & IXUS
        </h1>
        <p style={{ fontFamily: FONTS.body, fontSize: '50px', fontWeight: 700, color: COLORS.INK_SECONDARY, margin: '14px 0 0 0' }}>
          Identical global coverage at rock-bottom index fund expense ratios
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px', width: '100%' }}>
        <div
          style={{
            backgroundColor: COLORS.BG_ELEVATED,
            border: `4px solid ${COLORS.BG_RECESSED}`,
            borderTop: `16px solid ${COLORS.ACCENT_NEGATIVE}`,
            borderRadius: '44px',
            padding: '56px 60px',
            display: 'flex',
            flexDirection: 'column',
            gap: '22px',
            boxShadow: '0 16px 36px rgba(30, 27, 22, 0.05)',
            transform: `translateY(${interpolate(feesPop, [0, 1], [40, 0])}px)`,
            opacity: feesPop,
          }}
        >
          <span style={{ fontFamily: FONTS.heading, fontSize: '46px', fontWeight: 800, color: COLORS.INK_TERTIARY, textTransform: 'uppercase' }}>
            ACWX Expense Ratio
          </span>
          <span style={{ fontFamily: FONTS.heading, fontSize: '140px', fontWeight: 900, color: COLORS.ACCENT_NEGATIVE, lineHeight: 0.95 }}>
            0.32%
          </span>
          <div style={{ width: '100%', height: '3px', backgroundColor: COLORS.BG_RECESSED, margin: '8px 0' }} />
          <span style={{ fontFamily: FONTS.body, fontSize: '52px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
            Higher Fee Drag on Returns
          </span>
          <span style={{ fontFamily: FONTS.body, fontSize: '46px', fontWeight: 600, color: COLORS.INK_SECONDARY }}>
            Costs accumulate over 10 to 20 year horizons
          </span>
        </div>

        <div
          style={{
            backgroundColor: COLORS.BG_ELEVATED,
            border: `4px solid ${COLORS.ACCENT_DETAIL}`,
            borderTop: `16px solid ${COLORS.ACCENT_DETAIL}`,
            borderRadius: '44px',
            padding: '56px 60px',
            display: 'flex',
            flexDirection: 'column',
            gap: '22px',
            boxShadow: '0 24px 56px rgba(60, 110, 113, 0.12)',
            transform: `translateY(${interpolate(feesPop, [0, 1], [40, 0])}px)`,
            opacity: feesPop,
          }}
        >
          <span style={{ fontFamily: FONTS.heading, fontSize: '46px', fontWeight: 800, color: COLORS.ACCENT_DETAIL, textTransform: 'uppercase' }}>
            VXUS / IXUS Fee
          </span>
          <span style={{ fontFamily: FONTS.heading, fontSize: '140px', fontWeight: 900, color: COLORS.ACCENT_DETAIL, lineHeight: 0.95 }}>
            0.07%
          </span>
          <div style={{ width: '100%', height: '3px', backgroundColor: COLORS.BG_RECESSED, margin: '8px 0' }} />
          <span style={{ fontFamily: FONTS.body, fontSize: '52px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
            5 to 7 Basis Points ($7/yr per $10k)
          </span>
          <span style={{ fontFamily: FONTS.body, fontSize: '46px', fontWeight: 600, color: COLORS.INK_SECONDARY }}>
            Ultra-low cost alternatives from Vanguard & iShares
          </span>
        </div>
      </div>
    </LeftZone>
  );
};

export default function Block14_LowCostAlternativesScene() {
  return (
    <AbsoluteFill style={{ overflow: 'hidden' }}>
      <Sequence from={0}>
        <EditorialBackground />
      </Sequence>

      <AbsoluteFill>
        {/* BEAT 1: 0 - 400 frames (~13.5s) */}
        <Sequence from={0} durationInFrames={400}>
          <Audio src={staticFile('pop-sfx.mp3')} volume={0.15} />
          <Beat1_OneYearMomentum />
        </Sequence>

        {/* BEAT 2: 400 - 840 frames (~14.5s) */}
        <Sequence from={400}>
          <Audio src={staticFile('pop-sfx.mp3')} volume={0.15} />
          <Beat2_FeeSlasher />
        </Sequence>
      </AbsoluteFill>
    </AbsoluteFill>
  );
}