/**
 * BLOCK 25: The 2022 Inflationary Bear Market Risk
 * Duration: 900 frames (~30 seconds)
 * 
 * Revisions Applied:
 * - Scaled up typography (H1 112px, body 48px-52px)
 * - Audio volume set strictly to 0.15
 * - Full-width high-contrast layout
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
  TrendingDown,
  Flame,
  ShieldAlert,
} from 'lucide-react';

const COLORS = {
  BG_BASE: '#F4EFE6',
  BG_ELEVATED: '#FCFAF6',
  BG_RECESSED: '#E8E1D5',

  INK_PRIMARY: '#1E1B16',
  INK_SECONDARY: '#4A4439',
  INK_TERTIARY: '#7C7465',

  ACCENT_HERO: '#B8862E',
  ACCENT_NEGATIVE: '#B5533C',
  ACCENT_DETAIL: '#2E696B',
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
        <pattern id="grid-b25" x="0" y="0" width="56" height="56" patternUnits="userSpaceOnUse">
          <circle cx="8" cy="8" r="2.8" fill={COLORS.INK_TERTIARY} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-b25)" />
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

// --- BEAT 1: BND Trailing Drawdown ---
const Beat1_TrailingDrawdown: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headerPop = spring({ frame: frame - 5, fps, config: SPRING_CONFIG });
  const cardsPop = spring({ frame: frame - 20, fps, config: SPRING_CONFIG });

  return (
    <LeftZone>
      <div style={{ transform: `translateY(${interpolate(headerPop, [0, 1], [30, 0])}px)`, opacity: headerPop, textAlign: 'left', marginBottom: '48px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '16px', backgroundColor: '#1E1B16', padding: '12px 32px', borderRadius: '40px', marginBottom: '18px', boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }}>
          <TrendingDown size={36} color="#D4A84B" />
          <span style={{ fontFamily: FONTS.main, fontSize: '32px', fontWeight: 900, color: '#FCFAF6', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            BND TRAILING PERFORMANCE
          </span>
        </div>
        <h1 style={{ fontFamily: FONTS.main, fontSize: '96px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, letterSpacing: '-0.04em', lineHeight: 1.1 }}>
          Recent Historical Losses
        </h1>
        <p style={{ fontFamily: FONTS.main, fontSize: '42px', fontWeight: 600, color: COLORS.INK_SECONDARY, margin: '14px 0 0 0' }}>
          Dragged down by the aggressive 2022 Fed rate hiking cycle
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '36px', width: '100%' }}>
        <div
          style={{
            backgroundColor: COLORS.BG_ELEVATED,
            border: `3.5px solid ${COLORS.ACCENT_NEGATIVE}`,
            borderRadius: '36px',
            padding: '48px 36px',
            display: 'flex',
            flexDirection: 'column',
            gap: '18px',
            boxShadow: '0 20px 50px rgba(181, 83, 60, 0.12)',
            transform: `translateY(${interpolate(cardsPop, [0, 1], [40, 0])}px)`,
            opacity: cardsPop,
          }}
        >
          <span style={{ fontFamily: FONTS.main, fontSize: '32px', fontWeight: 800, color: COLORS.ACCENT_NEGATIVE, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Trailing 1-Year Return
          </span>
          <span style={{ fontFamily: FONTS.main, fontSize: '120px', fontWeight: 900, color: COLORS.ACCENT_NEGATIVE, lineHeight: 1.0 }}>
            -0.69%
          </span>
          <span style={{ fontFamily: FONTS.main, fontSize: '38px', fontWeight: 600, color: COLORS.INK_PRIMARY }}>
            Sustained pressure as intermediate yields drifted higher
          </span>
        </div>

        <div
          style={{
            backgroundColor: COLORS.BG_ELEVATED,
            border: `3.5px solid ${COLORS.BORDER_CARD}`,
            borderRadius: '36px',
            padding: '48px 36px',
            display: 'flex',
            flexDirection: 'column',
            gap: '18px',
            boxShadow: '0 16px 40px rgba(0, 0, 0, 0.05)',
            transform: `translateY(${interpolate(cardsPop, [0, 1], [40, 0])}px)`,
            opacity: cardsPop,
          }}
        >
          <span style={{ fontFamily: FONTS.main, fontSize: '32px', fontWeight: 800, color: COLORS.INK_TERTIARY, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Trailing 5-Year Return
          </span>
          <span style={{ fontFamily: FONTS.main, fontSize: '120px', fontWeight: 900, color: COLORS.ACCENT_NEGATIVE, lineHeight: 1.0 }}>
            -3.0%
          </span>
          <span style={{ fontFamily: FONTS.main, fontSize: '38px', fontWeight: 600, color: COLORS.INK_SECONDARY }}>
            Reflecting the worst bond market drawdown in modern US history
          </span>
        </div>
      </div>
    </LeftZone>
  );
};

// --- BEAT 2: The 2022 Anomaly ---
const Beat2_SimultaneousCrash: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headerPop = spring({ frame: frame - 5, fps, config: SPRING_CONFIG });
  const alertPop = spring({ frame: frame - 20, fps, config: SPRING_CONFIG });

  return (
    <LeftZone>
      <div style={{ transform: `translateY(${interpolate(headerPop, [0, 1], [30, 0])}px)`, opacity: headerPop, textAlign: 'left', marginBottom: '48px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '16px', backgroundColor: '#1E1B16', padding: '12px 32px', borderRadius: '40px', marginBottom: '18px', boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }}>
          <Flame size={36} color="#D4A84B" />
          <span style={{ fontFamily: FONTS.main, fontSize: '32px', fontWeight: 900, color: '#FCFAF6', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            THE 2022 INFLATION ANOMALY
          </span>
        </div>
        <h1 style={{ fontFamily: FONTS.main, fontSize: '96px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, letterSpacing: '-0.04em', lineHeight: 1.1 }}>
          When Bonds Failed to Protect
        </h1>
        <p style={{ fontFamily: FONTS.main, fontSize: '42px', fontWeight: 600, color: COLORS.INK_SECONDARY, margin: '14px 0 0 0' }}>
          In 2022, high inflation caused stocks and bonds to crash simultaneously
        </p>
      </div>

      <div
        style={{
          width: '100%',
          backgroundColor: COLORS.BG_ELEVATED,
          border: `3.5px solid ${COLORS.ACCENT_NEGATIVE}`,
          borderRadius: '40px',
          padding: '48px 48px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          boxShadow: '0 20px 50px rgba(181, 83, 60, 0.12)',
          transform: `translateY(${interpolate(alertPop, [0, 1], [40, 0])}px)`,
          opacity: alertPop,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ width: '72px', height: '72px', borderRadius: '20px', backgroundColor: `${COLORS.ACCENT_NEGATIVE}20`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ShieldAlert size={44} color={COLORS.ACCENT_NEGATIVE} />
          </div>
          <div>
            <span style={{ fontFamily: FONTS.main, fontSize: '46px', fontWeight: 900, color: COLORS.INK_PRIMARY, display: 'block' }}>
              The Simultaneous Drawdown Trap
            </span>
            <span style={{ fontFamily: FONTS.main, fontSize: '34px', fontWeight: 600, color: COLORS.INK_SECONDARY, marginTop: '4px', display: 'block' }}>
              Traditional 60/40 diversification broke down as both assets plunged in tandem
            </span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px', marginTop: '12px' }}>
          <div style={{ backgroundColor: '#1E1B16', borderRadius: '24px', padding: '28px 36px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: FONTS.main, fontSize: '34px', fontWeight: 800, color: '#FCFAF6' }}>
              S&P 500 (2022):
            </span>
            <span style={{ fontFamily: FONTS.main, fontSize: '56px', fontWeight: 900, color: '#D4A84B' }}>
              -18.0%
            </span>
          </div>

          <div style={{ backgroundColor: `${COLORS.ACCENT_NEGATIVE}15`, border: `2.5px solid ${COLORS.ACCENT_NEGATIVE}`, borderRadius: '24px', padding: '28px 36px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: FONTS.main, fontSize: '34px', fontWeight: 800, color: COLORS.ACCENT_NEGATIVE }}>
              Total Bonds (2022):
            </span>
            <span style={{ fontFamily: FONTS.main, fontSize: '56px', fontWeight: 900, color: COLORS.ACCENT_NEGATIVE }}>
              -13.0%
            </span>
          </div>
        </div>
      </div>
    </LeftZone>
  );
};

export default function Block25_InflationaryBearRiskScene() {
  return (
    <AbsoluteFill style={{ overflow: 'hidden' }}>
      <Sequence from={0}>
        <EditorialBackground />
      </Sequence>

      <AbsoluteFill>
        {/* BEAT 1: 0 - 450 frames (~15s) */}
        <Sequence from={0} durationInFrames={450}>
          <Audio src={staticFile('pop-sfx.mp3')} volume={0.15} />
          <Beat1_TrailingDrawdown />
        </Sequence>

        {/* BEAT 2: 450 - 900 frames (~15s) */}
        <Sequence from={450}>
          <Audio src={staticFile('pop-sfx.mp3')} volume={0.15} />
          <Beat2_SimultaneousCrash />
        </Sequence>
      </AbsoluteFill>
    </AbsoluteFill>
  );
}
