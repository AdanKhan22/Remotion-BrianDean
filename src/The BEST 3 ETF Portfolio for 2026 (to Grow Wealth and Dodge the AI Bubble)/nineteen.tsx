/**
 * BLOCK 21: Duration Risk Spectrum (SGOV Cash Equivalence vs Longer Bonds)
 * Duration: 750 frames (~25 seconds)
 * 
 * Multi-Beat Architecture:
 * - Beat 1 (0-360): HYSA Economics (4% Steady Yield vs Zero Capital Growth)
 * - Beat 2 (360-750): The Duration Spectrum (T-Bills vs Longer-Term Bond Risks)
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
  Scale,
  Landmark,
  ShieldCheck,
  TrendingDown,
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
        <pattern id="grid-b21" x="0" y="0" width="56" height="56" patternUnits="userSpaceOnUse">
          <circle cx="8" cy="8" r="2.8" fill={COLORS.INK_TERTIARY} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-b21)" />
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

// --- BEAT 1: HYSA Economics & Zero Appreciation ---
const Beat1_HYSAEconomics: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headerPop = spring({ frame: frame - 5, fps, config: SPRING_CONFIG });
  const cardsPop = spring({ frame: frame - 20, fps, config: SPRING_CONFIG });

  return (
    <LeftZone>
      <div style={{ transform: `translateY(${interpolate(headerPop, [0, 1], [30, 0])}px)`, opacity: headerPop, textAlign: 'left', marginBottom: '52px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '16px', backgroundColor: '#1E1B16', padding: '12px 32px', borderRadius: '40px', marginBottom: '20px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)' }}>
          <Landmark size={36} color="#D4A84B" />
          <span style={{ fontFamily: FONTS.main, fontSize: '32px', fontWeight: 900, color: '#FCFAF6', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            SLEEVE 3: SGOV CASH EQUIVALENCE
          </span>
        </div>
        <h1 style={{ fontFamily: FONTS.main, fontSize: '96px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, letterSpacing: '-0.04em', lineHeight: 1.1 }}>
          The SGOV Return Ceiling
        </h1>
        <p style={{ fontFamily: FONTS.main, fontSize: '42px', fontWeight: 600, color: COLORS.INK_SECONDARY, margin: '14px 0 0 0' }}>
          Like a High-Yield Savings Account: steady income with zero capital appreciation
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '36px', width: '100%' }}>
        <div
          style={{
            backgroundColor: COLORS.BG_ELEVATED,
            border: `3.5px solid ${COLORS.ACCENT_HERO}`,
            borderRadius: '36px',
            padding: '48px 40px',
            display: 'flex',
            flexDirection: 'column',
            gap: '18px',
            boxShadow: '0 20px 50px rgba(184, 134, 46, 0.12)',
            transform: `translateY(${interpolate(cardsPop, [0, 1], [40, 0])}px)`,
            opacity: cardsPop,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '16px', backgroundColor: `${COLORS.ACCENT_HERO}20`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ShieldCheck size={36} color={COLORS.ACCENT_HERO} />
            </div>
            <span style={{ fontFamily: FONTS.main, fontSize: '34px', fontWeight: 900, color: COLORS.ACCENT_HERO, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              The Guaranteed Yield
            </span>
          </div>
          <span style={{ fontFamily: FONTS.main, fontSize: '120px', fontWeight: 900, color: COLORS.ACCENT_HERO, lineHeight: 1.0 }}>
            ~4.0%
          </span>
          <span style={{ fontFamily: FONTS.main, fontSize: '38px', fontWeight: 600, color: COLORS.INK_PRIMARY, lineHeight: 1.35 }}>
            Annualized short-term Treasury yield paid straight into cash monthly.
          </span>
        </div>

        <div
          style={{
            backgroundColor: COLORS.BG_ELEVATED,
            border: `3.5px solid ${COLORS.BORDER_CARD}`,
            borderRadius: '36px',
            padding: '48px 40px',
            display: 'flex',
            flexDirection: 'column',
            gap: '18px',
            boxShadow: '0 16px 40px rgba(0, 0, 0, 0.05)',
            transform: `translateY(${interpolate(cardsPop, [0, 1], [40, 0])}px)`,
            opacity: cardsPop,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '16px', backgroundColor: `${COLORS.INK_TERTIARY}20`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Scale size={36} color={COLORS.INK_PRIMARY} />
            </div>
            <span style={{ fontFamily: FONTS.main, fontSize: '34px', fontWeight: 900, color: COLORS.INK_PRIMARY, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Capital Appreciation
            </span>
          </div>
          <span style={{ fontFamily: FONTS.main, fontSize: '120px', fontWeight: 900, color: COLORS.INK_PRIMARY, lineHeight: 1.0 }}>
            $0.00
          </span>
          <span style={{ fontFamily: FONTS.main, fontSize: '38px', fontWeight: 600, color: COLORS.INK_SECONDARY, lineHeight: 1.35 }}>
            NAV never rises in a market crash. No capital growth engine attached.
          </span>
        </div>
      </div>
    </LeftZone>
  );
};

// --- BEAT 2: Duration Trade-Off Spectrum ---
const Beat2_DurationSpectrum: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headerPop = spring({ frame: frame - 5, fps, config: SPRING_CONFIG });
  const spectrumPop = spring({ frame: frame - 20, fps, config: SPRING_CONFIG });

  return (
    <LeftZone>
      <div style={{ transform: `translateY(${interpolate(headerPop, [0, 1], [30, 0])}px)`, opacity: headerPop, textAlign: 'left', marginBottom: '52px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '16px', backgroundColor: '#1E1B16', padding: '12px 32px', borderRadius: '40px', marginBottom: '20px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)' }}>
          <Scale size={36} color="#D4A84B" />
          <span style={{ fontFamily: FONTS.main, fontSize: '32px', fontWeight: 900, color: '#FCFAF6', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            RATE REGIME TRADE-OFF
          </span>
        </div>
        <h1 style={{ fontFamily: FONTS.main, fontSize: '96px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, letterSpacing: '-0.04em', lineHeight: 1.1 }}>
          The Duration Dilemma
        </h1>
        <p style={{ fontFamily: FONTS.main, fontSize: '42px', fontWeight: 600, color: COLORS.INK_SECONDARY, margin: '14px 0 0 0' }}>
          Why ultra-short T-bills protect cash when interest rates are climbing
        </p>
      </div>

      <div
        style={{
          width: '100%',
          backgroundColor: COLORS.BG_ELEVATED,
          border: `3.5px solid ${COLORS.BORDER_CARD}`,
          borderRadius: '40px',
          padding: '52px 56px',
          display: 'grid',
          gridTemplateColumns: '1fr 60px 1fr',
          alignItems: 'center',
          gap: '30px',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.06)',
          transform: `translateY(${interpolate(spectrumPop, [0, 1], [40, 0])}px)`,
          opacity: spectrumPop,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', backgroundColor: `${COLORS.ACCENT_HERO}20`, padding: '8px 20px', borderRadius: '20px', width: 'fit-content' }}>
            <span style={{ fontFamily: FONTS.main, fontSize: '30px', fontWeight: 900, color: COLORS.ACCENT_HERO, textTransform: 'uppercase' }}>
              SGOV (0-3 Months)
            </span>
          </div>
          <span style={{ fontFamily: FONTS.main, fontSize: '56px', fontWeight: 900, color: COLORS.INK_PRIMARY, lineHeight: 1.15 }}>
            Zero Rate Risk
          </span>
          <span style={{ fontFamily: FONTS.main, fontSize: '40px', fontWeight: 600, color: COLORS.INK_SECONDARY, lineHeight: 1.4 }}>
            Immune to Fed rate hikes. If rates move higher, yields automatically float upward immediately.
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '3px', height: '240px', backgroundColor: COLORS.BG_RECESSED, borderRadius: '4px' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', backgroundColor: `${COLORS.ACCENT_NEGATIVE}20`, padding: '8px 20px', borderRadius: '20px', width: 'fit-content' }}>
            <TrendingDown size={30} color={COLORS.ACCENT_NEGATIVE} />
            <span style={{ fontFamily: FONTS.main, fontSize: '30px', fontWeight: 900, color: COLORS.ACCENT_NEGATIVE, textTransform: 'uppercase' }}>
              Longer Bonds (7-10+ Yrs)
            </span>
          </div>
          <span style={{ fontFamily: FONTS.main, fontSize: '56px', fontWeight: 900, color: COLORS.ACCENT_NEGATIVE, lineHeight: 1.15 }}>
            High Price Sensitivity
          </span>
          <span style={{ fontFamily: FONTS.main, fontSize: '40px', fontWeight: 600, color: COLORS.INK_SECONDARY, lineHeight: 1.4 }}>
            When interest rates rise, existing bond prices plummet. Capital principal absorbs heavy losses.
          </span>
        </div>
      </div>
    </LeftZone>
  );
};

export default function Block21_DurationTradeOffScene() {
  return (
    <AbsoluteFill style={{ overflow: 'hidden' }}>
      <Sequence from={0}>
        <EditorialBackground />
      </Sequence>

      <AbsoluteFill>
        {/* BEAT 1: 0 - 360 frames (~12s) */}
        <Sequence from={0} durationInFrames={360}>
          <Audio src={staticFile('pop-sfx.mp3')} volume={0.15} />
          <Beat1_HYSAEconomics />
        </Sequence>

        {/* BEAT 2: 360 - 750 frames (~13s) */}
        <Sequence from={360}>
          <Audio src={staticFile('pop-sfx.mp3')} volume={0.15} />
          <Beat2_DurationSpectrum />
        </Sequence>
      </AbsoluteFill>
    </AbsoluteFill>
  );
}
