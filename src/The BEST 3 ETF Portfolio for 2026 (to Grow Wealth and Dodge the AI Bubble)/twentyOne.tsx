/**
 * BLOCK 23: Interest Rates vs. Bond Prices (The 5% Yield Cushion Math Simulator)
 * Duration: 1140 frames (~38 seconds)
 * 
 * Multi-Beat Architecture:
 * - Beat 1 (0-360): The Rate Dilemma (10-Yr Treasury crossing 5% for first time since 2007)
 * - Beat 2 (360-750): Why 2022 Crushed Bonds (1.5% Starting Yield had zero cushion)
 * - Beat 3 (750-1140): Today's 5% Cushion Math Simulator (-6% price + 5% yield = -1% net)
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
  AlertCircle,
  Calculator,
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
        <pattern id="grid-b23" x="0" y="0" width="56" height="56" patternUnits="userSpaceOnUse">
          <circle cx="8" cy="8" r="2.8" fill={COLORS.INK_TERTIARY} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-b23)" />
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

// --- BEAT 1: The Rate Dilemma ---
const Beat1_RateDilemma: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headerPop = spring({ frame: frame - 5, fps, config: SPRING_CONFIG });
  const statPop = spring({ frame: frame - 20, fps, config: SPRING_CONFIG });
  const sidePop = spring({ frame: frame - 40, fps, config: SPRING_CONFIG });

  return (
    <LeftZone>
      <div style={{ transform: `translateY(${interpolate(headerPop, [0, 1], [30, 0])}px)`, opacity: headerPop, textAlign: 'left', marginBottom: '48px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '16px', backgroundColor: '#1E1B16', padding: '12px 32px', borderRadius: '40px', marginBottom: '18px', boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }}>
          <AlertCircle size={36} color="#D4A84B" />
          <span style={{ fontFamily: FONTS.main, fontSize: '32px', fontWeight: 900, color: '#FCFAF6', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            SLEEVE 3 · DIVERSIFIER OPTION 2 · BND
          </span>
        </div>
        <h1 style={{ fontFamily: FONTS.main, fontSize: '96px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, letterSpacing: '-0.04em', lineHeight: 1.1 }}>
          Why Buy Bonds in 2026?
        </h1>
        <p style={{ fontFamily: FONTS.main, fontSize: '42px', fontWeight: 600, color: COLORS.INK_SECONDARY, margin: '14px 0 0 0' }}>
          Bond prices fall when interest rates rise — so why consider BND today?
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '36px', width: '100%' }}>
        <div
          style={{
            backgroundColor: COLORS.BG_ELEVATED,
            border: `3.5px solid ${COLORS.ACCENT_NEGATIVE}`,
            borderRadius: '36px',
            padding: '48px 36px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            boxShadow: '0 20px 50px rgba(181, 83, 60, 0.12)',
            transform: `translateY(${interpolate(statPop, [0, 1], [40, 0])}px)`,
            opacity: statPop,
          }}
        >
          <span style={{ fontFamily: FONTS.main, fontSize: '32px', fontWeight: 800, color: COLORS.ACCENT_NEGATIVE, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            10-Year Treasury Benchmark
          </span>
          <span style={{ fontFamily: FONTS.main, fontSize: '120px', fontWeight: 900, color: COLORS.ACCENT_NEGATIVE, lineHeight: 1.0, margin: '16px 0' }}>
            5.0%
          </span>
          <span style={{ fontFamily: FONTS.main, fontSize: '38px', fontWeight: 700, color: COLORS.INK_PRIMARY }}>
            Crossed 5% for first time since 2007
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
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', backgroundColor: `${COLORS.ACCENT_HERO}20`, padding: '8px 20px', borderRadius: '16px', width: 'fit-content' }}>
            <span style={{ fontFamily: FONTS.main, fontSize: '28px', fontWeight: 900, color: COLORS.ACCENT_HERO, textTransform: 'uppercase' }}>
              Core Fixed-Income Principle
            </span>
          </div>
          <span style={{ fontFamily: FONTS.main, fontSize: '52px', fontWeight: 900, color: COLORS.INK_PRIMARY, lineHeight: 1.2 }}>
            The Starting Yield Rule
          </span>
          <p style={{ fontFamily: FONTS.main, fontSize: '38px', fontWeight: 600, color: COLORS.INK_SECONDARY, lineHeight: 1.4, margin: 0 }}>
            Bond performance is governed by <span style={{ color: COLORS.INK_PRIMARY, fontWeight: 800 }}>where yields start</span>, not just which direction the Fed moves rates.
          </p>
        </div>
      </div>
    </LeftZone>
  );
};

// --- BEAT 2: Why 2022 Crushed Bonds ---
const Beat2_ZeroCushion2022: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headerPop = spring({ frame: frame - 5, fps, config: SPRING_CONFIG });
  const mathPop = spring({ frame: frame - 20, fps, config: SPRING_CONFIG });

  return (
    <LeftZone>
      <div style={{ transform: `translateY(${interpolate(headerPop, [0, 1], [30, 0])}px)`, opacity: headerPop, textAlign: 'left', marginBottom: '44px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '16px', backgroundColor: '#1E1B16', padding: '12px 32px', borderRadius: '40px', marginBottom: '18px', boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }}>
          <TrendingDown size={36} color="#D4A84B" />
          <span style={{ fontFamily: FONTS.main, fontSize: '32px', fontWeight: 900, color: '#FCFAF6', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            THE 2022 ANATOMY
          </span>
        </div>
        <h1 style={{ fontFamily: FONTS.main, fontSize: '96px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, letterSpacing: '-0.04em', lineHeight: 1.1 }}>
          Starting at 0% Yield = Zero Cushion
        </h1>
        <p style={{ fontFamily: FONTS.main, fontSize: '42px', fontWeight: 600, color: COLORS.INK_SECONDARY, margin: '14px 0 0 0' }}>
          When starting yields were near zero, rate hikes caused unprotected capital destruction
        </p>
      </div>

      <div
        style={{
          width: '100%',
          backgroundColor: COLORS.BG_ELEVATED,
          border: `3.5px solid ${COLORS.BORDER_CARD}`,
          borderRadius: '40px',
          padding: '48px 40px',
          display: 'grid',
          gridTemplateColumns: '1fr 50px 1fr 50px 1fr',
          alignItems: 'center',
          gap: '16px',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.06)',
          transform: `translateY(${interpolate(mathPop, [0, 1], [40, 0])}px)`,
          opacity: mathPop,
        }}
      >
        <div style={{ textAlign: 'center', backgroundColor: COLORS.BG_BASE, padding: '36px 20px', borderRadius: '28px', border: `2.5px solid ${COLORS.BORDER_CARD}` }}>
          <span style={{ fontFamily: FONTS.main, fontSize: '28px', fontWeight: 800, color: COLORS.INK_TERTIARY, textTransform: 'uppercase' }}>
            2022 Starting Yield
          </span>
          <div style={{ fontFamily: FONTS.main, fontSize: '84px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: '8px 0' }}>
            1.5%
          </div>
          <span style={{ fontFamily: FONTS.main, fontSize: '28px', fontWeight: 600, color: COLORS.INK_SECONDARY }}>
            Negligible cash income
          </span>
        </div>

        <div style={{ textAlign: 'center', fontFamily: FONTS.main, fontSize: '56px', fontWeight: 900, color: COLORS.INK_TERTIARY }}>+</div>

        <div style={{ textAlign: 'center', backgroundColor: `${COLORS.ACCENT_NEGATIVE}10`, padding: '36px 20px', borderRadius: '28px', border: `3px solid ${COLORS.ACCENT_NEGATIVE}` }}>
          <span style={{ fontFamily: FONTS.main, fontSize: '28px', fontWeight: 800, color: COLORS.ACCENT_NEGATIVE, textTransform: 'uppercase' }}>
            Fed Rate Hikes
          </span>
          <div style={{ fontFamily: FONTS.main, fontSize: '84px', fontWeight: 900, color: COLORS.ACCENT_NEGATIVE, margin: '8px 0' }}>
            +3.0%
          </div>
          <span style={{ fontFamily: FONTS.main, fontSize: '28px', fontWeight: 600, color: COLORS.ACCENT_NEGATIVE }}>
            Aggressive hike shock
          </span>
        </div>

        <div style={{ textAlign: 'center', fontFamily: FONTS.main, fontSize: '56px', fontWeight: 900, color: COLORS.INK_TERTIARY }}>=</div>

        <div style={{ textAlign: 'center', backgroundColor: '#1E1B16', padding: '36px 20px', borderRadius: '28px' }}>
          <span style={{ fontFamily: FONTS.main, fontSize: '28px', fontWeight: 800, color: '#D4A84B', textTransform: 'uppercase' }}>
            BND Price Collapse
          </span>
          <div style={{ fontFamily: FONTS.main, fontSize: '84px', fontWeight: 900, color: '#FCFAF6', margin: '8px 0' }}>
            -13.0%
          </div>
          <span style={{ fontFamily: FONTS.main, fontSize: '28px', fontWeight: 600, color: '#E8E1D5' }}>
            Uncushioned net drawdown
          </span>
        </div>
      </div>
    </LeftZone>
  );
};

// --- BEAT 3: Today's 5% Cushion Simulator ---
const Beat3_YieldCushionSimulator: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headerPop = spring({ frame: frame - 5, fps, config: SPRING_CONFIG });
  const simPop = spring({ frame: frame - 20, fps, config: SPRING_CONFIG });

  return (
    <LeftZone>
      <div style={{ transform: `translateY(${interpolate(headerPop, [0, 1], [30, 0])}px)`, opacity: headerPop, textAlign: 'left', marginBottom: '44px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '16px', backgroundColor: '#1E1B16', padding: '12px 32px', borderRadius: '40px', marginBottom: '18px', boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }}>
          <Calculator size={36} color="#D4A84B" />
          <span style={{ fontFamily: FONTS.main, fontSize: '32px', fontWeight: 900, color: '#FCFAF6', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            THE 5% CUSHION SIMULATOR
          </span>
        </div>
        <h1 style={{ fontFamily: FONTS.main, fontSize: '96px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, letterSpacing: '-0.04em', lineHeight: 1.1 }}>
          High Starting Yield Absorbs Hikes
        </h1>
        <p style={{ fontFamily: FONTS.main, fontSize: '42px', fontWeight: 600, color: COLORS.INK_SECONDARY, margin: '14px 0 0 0' }}>
          If rates climb another 1%, incoming coupon interest buffers capital losses
        </p>
      </div>

      <div
        style={{
          width: '100%',
          backgroundColor: COLORS.BG_ELEVATED,
          border: `3.5px solid ${COLORS.BORDER_CARD}`,
          borderRadius: '40px',
          padding: '48px 40px',
          display: 'grid',
          gridTemplateColumns: '1fr 50px 1fr 50px 1fr',
          alignItems: 'center',
          gap: '16px',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.06)',
          transform: `translateY(${interpolate(simPop, [0, 1], [40, 0])}px)`,
          opacity: simPop,
        }}
      >
        <div style={{ textAlign: 'center', backgroundColor: `${COLORS.ACCENT_NEGATIVE}10`, padding: '36px 20px', borderRadius: '28px', border: `3px solid ${COLORS.ACCENT_NEGATIVE}` }}>
          <span style={{ fontFamily: FONTS.main, fontSize: '28px', fontWeight: 800, color: COLORS.ACCENT_NEGATIVE, textTransform: 'uppercase' }}>
            Price Decline
          </span>
          <div style={{ fontFamily: FONTS.main, fontSize: '84px', fontWeight: 900, color: COLORS.ACCENT_NEGATIVE, margin: '8px 0' }}>
            -6.0%
          </div>
          <span style={{ fontFamily: FONTS.main, fontSize: '28px', fontWeight: 600, color: COLORS.ACCENT_NEGATIVE }}>
            On +1% Fed rate hike
          </span>
        </div>

        <div style={{ textAlign: 'center', fontFamily: FONTS.main, fontSize: '56px', fontWeight: 900, color: COLORS.INK_TERTIARY }}>+</div>

        <div style={{ textAlign: 'center', backgroundColor: `${COLORS.ACCENT_HERO}15`, padding: '36px 20px', borderRadius: '28px', border: `3px solid ${COLORS.ACCENT_HERO}` }}>
          <span style={{ fontFamily: FONTS.main, fontSize: '28px', fontWeight: 800, color: COLORS.ACCENT_HERO, textTransform: 'uppercase' }}>
            Interest Inflow
          </span>
          <div style={{ fontFamily: FONTS.main, fontSize: '84px', fontWeight: 900, color: COLORS.ACCENT_HERO, margin: '8px 0' }}>
            +5.0%
          </div>
          <span style={{ fontFamily: FONTS.main, fontSize: '28px', fontWeight: 600, color: COLORS.ACCENT_HERO }}>
            Annual income collected
          </span>
        </div>

        <div style={{ textAlign: 'center', fontFamily: FONTS.main, fontSize: '56px', fontWeight: 900, color: COLORS.INK_TERTIARY }}>=</div>

        <div style={{ textAlign: 'center', backgroundColor: '#1E1B16', padding: '36px 20px', borderRadius: '28px' }}>
          <span style={{ fontFamily: FONTS.main, fontSize: '28px', fontWeight: 800, color: '#D4A84B', textTransform: 'uppercase' }}>
            Net Total Return
          </span>
          <div style={{ fontFamily: FONTS.main, fontSize: '84px', fontWeight: 900, color: '#FCFAF6', margin: '8px 0' }}>
            -1.0%
          </div>
          <span style={{ fontFamily: FONTS.main, fontSize: '28px', fontWeight: 600, color: '#D4A84B' }}>
            Plus 6% forward yield!
          </span>
        </div>
      </div>
    </LeftZone>
  );
};

export default function Block23_FivePercentCushionScene() {
  return (
    <AbsoluteFill style={{ overflow: 'hidden' }}>
      <Sequence from={0}>
        <EditorialBackground />
      </Sequence>

      <AbsoluteFill>
        {/* BEAT 1: 0 - 360 frames (~12s) */}
        <Sequence from={0} durationInFrames={360}>
          <Audio src={staticFile('pop-sfx.mp3')} volume={0.15} />
          <Beat1_RateDilemma />
        </Sequence>

        {/* BEAT 2: 360 - 750 frames (~13s) */}
        <Sequence from={360} durationInFrames={390}>
          <Audio src={staticFile('pop-sfx.mp3')} volume={0.15} />
          <Beat2_ZeroCushion2022 />
        </Sequence>

        {/* BEAT 3: 750 - 1140 frames (~13s) */}
        <Sequence from={750}>
          <Audio src={staticFile('pop-sfx.mp3')} volume={0.15} />
          <Beat3_YieldCushionSimulator />
        </Sequence>
      </AbsoluteFill>
    </AbsoluteFill>
  );
}
