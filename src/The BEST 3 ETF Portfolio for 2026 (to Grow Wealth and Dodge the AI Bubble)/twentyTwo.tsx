/**
 * BLOCK 24: Historical Bond Case Studies (2004-06 Hikes & 2008 Crisis)
 * Duration: 960 frames (~32 seconds)
 * 
 * Revisions Applied:
 * - Scaled up typography (H1 112px, body 48px-52px)
 * - Comment 29: Audio volume set strictly to 0.15
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
  ShieldCheck,
  Award,
  TrendingUp,
  TrendingDown,
  History,
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
        <pattern id="grid-b24" x="0" y="0" width="56" height="56" patternUnits="userSpaceOnUse">
          <circle cx="8" cy="8" r="2.8" fill={COLORS.INK_TERTIARY} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-b24)" />
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

// --- BEAT 1: 2004-2006 Rate Hikes ---
const Beat1_2004CaseStudy: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headerPop = spring({ frame: frame - 5, fps, config: SPRING_CONFIG });
  const statPop = spring({ frame: frame - 20, fps, config: SPRING_CONFIG });
  const sidePop = spring({ frame: frame - 40, fps, config: SPRING_CONFIG });

  return (
    <LeftZone>
      <div style={{ transform: `translateY(${interpolate(headerPop, [0, 1], [30, 0])}px)`, opacity: headerPop, textAlign: 'left', marginBottom: '48px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '16px', backgroundColor: '#1E1B16', padding: '12px 32px', borderRadius: '40px', marginBottom: '18px', boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }}>
          <History size={36} color="#D4A84B" />
          <span style={{ fontFamily: FONTS.main, fontSize: '32px', fontWeight: 900, color: '#FCFAF6', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            HISTORICAL CASE STUDY · 2004–2006
          </span>
        </div>
        <h1 style={{ fontFamily: FONTS.main, fontSize: '96px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, letterSpacing: '-0.04em', lineHeight: 1.1 }}>
          17 Fed Rate Hikes In a Row
        </h1>
        <p style={{ fontFamily: FONTS.main, fontSize: '42px', fontWeight: 600, color: COLORS.INK_SECONDARY, margin: '14px 0 0 0' }}>
          When starting yields were ~4%, the Total Bond Market still posted positive compounding
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '36px', width: '100%' }}>
        <div
          style={{
            backgroundColor: COLORS.BG_ELEVATED,
            border: `3.5px solid ${COLORS.ACCENT_HERO}`,
            borderRadius: '36px',
            padding: '48px 36px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            boxShadow: '0 20px 50px rgba(184, 134, 46, 0.12)',
            transform: `translateY(${interpolate(statPop, [0, 1], [40, 0])}px)`,
            opacity: statPop,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Award size={36} color={COLORS.ACCENT_HERO} />
            <span style={{ fontFamily: FONTS.main, fontSize: '32px', fontWeight: 800, color: COLORS.ACCENT_HERO, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Total Bond Market Return
            </span>
          </div>
          <span style={{ fontFamily: FONTS.main, fontSize: '120px', fontWeight: 900, color: COLORS.ACCENT_HERO, lineHeight: 1.0, margin: '16px 0' }}>
            +4.0% / yr
          </span>
          <span style={{ fontFamily: FONTS.main, fontSize: '38px', fontWeight: 700, color: COLORS.INK_PRIMARY }}>
            Gained steady value through all 17 interest rate hikes
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
            justifyContent: 'center',
            gap: '18px',
            boxShadow: '0 16px 40px rgba(0, 0, 0, 0.05)',
            transform: `translateY(${interpolate(sidePop, [0, 1], [40, 0])}px)`,
            opacity: sidePop,
          }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', backgroundColor: `${COLORS.ACCENT_DETAIL}20`, padding: '8px 20px', borderRadius: '16px', width: 'fit-content' }}>
            <span style={{ fontFamily: FONTS.main, fontSize: '28px', fontWeight: 900, color: COLORS.ACCENT_DETAIL, textTransform: 'uppercase' }}>
              The Takeaway
            </span>
          </div>
          <span style={{ fontFamily: FONTS.main, fontSize: '48px', fontWeight: 900, color: COLORS.INK_PRIMARY, lineHeight: 1.2 }}>
            Hikes Are Not a Disaster
          </span>
          <p style={{ fontFamily: FONTS.main, fontSize: '38px', fontWeight: 600, color: COLORS.INK_SECONDARY, lineHeight: 1.4, margin: 0 }}>
            Rising rates do not destroy bond portfolios when starting yields are already elevated at 4% to 5%.
          </p>
        </div>
      </div>
    </LeftZone>
  );
};

// --- BEAT 2: 2008 Crisis Flight to Safety ---
const Beat2_2008CrisisFlight: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headerPop = spring({ frame: frame - 5, fps, config: SPRING_CONFIG });
  const battlePop = spring({ frame: frame - 20, fps, config: SPRING_CONFIG });

  return (
    <LeftZone>
      <div style={{ transform: `translateY(${interpolate(headerPop, [0, 1], [30, 0])}px)`, opacity: headerPop, textAlign: 'left', marginBottom: '48px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '16px', backgroundColor: '#1E1B16', padding: '12px 32px', borderRadius: '40px', marginBottom: '18px', boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }}>
          <ShieldCheck size={36} color="#D4A84B" />
          <span style={{ fontFamily: FONTS.main, fontSize: '32px', fontWeight: 900, color: '#FCFAF6', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            RECESSION UPSIDE · BND FLIGHT TO SAFETY
          </span>
        </div>
        <h1 style={{ fontFamily: FONTS.main, fontSize: '96px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, letterSpacing: '-0.04em', lineHeight: 1.1 }}>
          2008 Crisis Flight to Safety
        </h1>
        <p style={{ fontFamily: FONTS.main, fontSize: '42px', fontWeight: 600, color: COLORS.INK_SECONDARY, margin: '14px 0 0 0' }}>
          When the Fed aggressively cuts rates in an equity crash, bond capital surges
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '36px', width: '100%' }}>
        <div
          style={{
            backgroundColor: COLORS.BG_ELEVATED,
            border: `3.5px solid ${COLORS.ACCENT_DETAIL}`,
            borderRadius: '36px',
            padding: '48px 36px',
            display: 'flex',
            flexDirection: 'column',
            gap: '18px',
            boxShadow: '0 20px 50px rgba(46, 105, 107, 0.12)',
            transform: `translateY(${interpolate(battlePop, [0, 1], [40, 0])}px)`,
            opacity: battlePop,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <TrendingUp size={36} color={COLORS.ACCENT_DETAIL} />
            <span style={{ fontFamily: FONTS.main, fontSize: '32px', fontWeight: 800, color: COLORS.ACCENT_DETAIL, textTransform: 'uppercase' }}>
              BND Return in 2008
            </span>
          </div>
          <span style={{ fontFamily: FONTS.main, fontSize: '120px', fontWeight: 900, color: COLORS.ACCENT_DETAIL, lineHeight: 1.0 }}>
            +5.0%
          </span>
          <span style={{ fontFamily: FONTS.main, fontSize: '38px', fontWeight: 600, color: COLORS.INK_PRIMARY, lineHeight: 1.35 }}>
            Capital appreciation triggered as the Fed slashed interest rates to zero.
          </span>
        </div>

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
            transform: `translateY(${interpolate(battlePop, [0, 1], [40, 0])}px)`,
            opacity: battlePop,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <TrendingDown size={36} color={COLORS.ACCENT_NEGATIVE} />
            <span style={{ fontFamily: FONTS.main, fontSize: '32px', fontWeight: 800, color: COLORS.ACCENT_NEGATIVE, textTransform: 'uppercase' }}>
              S&P 500 in 2008
            </span>
          </div>
          <span style={{ fontFamily: FONTS.main, fontSize: '120px', fontWeight: 900, color: COLORS.ACCENT_NEGATIVE, lineHeight: 1.0 }}>
            -37.0%
          </span>
          <span style={{ fontFamily: FONTS.main, fontSize: '38px', fontWeight: 600, color: COLORS.INK_PRIMARY, lineHeight: 1.35 }}>
            Historic equity collapse during the Great Financial Crisis.
          </span>
        </div>
      </div>
    </LeftZone>
  );
};

export default function Block24_HistoricalBondCasesScene() {
  return (
    <AbsoluteFill style={{ overflow: 'hidden' }}>
      <Sequence from={0}>
        <EditorialBackground />
      </Sequence>

      <AbsoluteFill>
        {/* BEAT 1: 0 - 450 frames (~15s) */}
        <Sequence from={0} durationInFrames={450}>
          <Audio src={staticFile('pop-sfx.mp3')} volume={0.15} />
          <Beat1_2004CaseStudy />
        </Sequence>

        {/* BEAT 2: 450 - 960 frames (~17s) */}
        <Sequence from={450}>
          <Audio src={staticFile('pop-sfx.mp3')} volume={0.15} />
          <Beat2_2008CrisisFlight />
        </Sequence>
      </AbsoluteFill>
    </AbsoluteFill>
  );
}
