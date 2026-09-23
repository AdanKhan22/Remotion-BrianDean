/**
 * BLOCK 18: Complementary Sleeve Decision Matrix
 * Duration: 840 frames (~28 seconds)
 * 
 * Multi-Beat Architecture:
 * - Beat 1 (0-400): 3 Complementary Routes (ACWX vs AVDV vs DFIV)
 * - Beat 2 (400-840): Pairings Verdict (Simplicity vs True Factor Offset)
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
  CheckCircle2,
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
};

const FONTS = {
  main: '"Inter", "DM Sans", sans-serif',
};

const SPRING_CONFIG = { damping: 200, stiffness: 120, mass: 0.8 };

const EditorialBackground: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: COLORS.BG_BASE }}>
    <svg style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0.22 }}>
      <defs>
        <pattern id="grid-b18" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
          <circle cx="6" cy="6" r="2.5" fill={COLORS.INK_TERTIARY} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-b18)" />
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

// --- BEAT 1: 3 Complementary Routes (Horizontal Cards with Logos per Comment 30) ---
const Beat1_ComplementaryRoutes: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headerPop = spring({ frame: frame - 5, fps, config: SPRING_CONFIG });

  const options = [
    {
      provider: 'Vanguard / iShares',
      ticker: 'VXUS / ACWX',
      role: 'Broad Simplicity',
      fee: '0.07% - 0.32%',
      holdings: '1,700 - 8,500 Stocks',
      desc: 'One ticker to fill the whole global gap with ultra-low friction and broad diversification.',
      accent: COLORS.ACCENT_DETAIL,
      badgeColor: '#1E1B16',
      badgeBg: '#EAE3D3',
    },
    {
      provider: 'Avantis Investors',
      ticker: 'AVDV',
      role: 'Small-Cap Value Alpha',
      fee: '0.36% Net Fee',
      holdings: '~1,400 Small Caps',
      desc: 'Pure factor tilt to counter US mega-cap concentration with +96% 5-year outperformance.',
      accent: COLORS.ACCENT_HERO,
      badgeColor: '#FFFFFF',
      badgeBg: COLORS.ACCENT_HERO,
    },
    {
      provider: 'Dimensional',
      ticker: 'DFIV',
      role: 'Large-Cap Value Titans',
      fee: '0.27% Net Fee',
      holdings: '~500 Blue Chips',
      desc: 'Systematic value screening of global titans with +110% 5-year return leading all contenders.',
      accent: '#1D4ED8',
      badgeColor: '#FFFFFF',
      badgeBg: '#1D4ED8',
    },
  ];

  return (
    <LeftZone>
      <div style={{ transform: `translateY(${interpolate(headerPop, [0, 1], [30, 0])}px)`, opacity: headerPop, marginBottom: '40px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '16px', backgroundColor: `${COLORS.ACCENT_DETAIL}18`, padding: '12px 30px', borderRadius: '32px', marginBottom: '16px' }}>
          <Compass size={44} color={COLORS.ACCENT_DETAIL} />
          <span style={{ fontFamily: FONTS.main, fontSize: '42px', fontWeight: 800, color: COLORS.ACCENT_DETAIL, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Sleeve 2 Selection Architecture
          </span>
        </div>
        <h1 style={{ fontFamily: FONTS.main, fontSize: '112px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, letterSpacing: '-0.03em', lineHeight: 1.05 }}>
          Matching Strategy to Your Goals
        </h1>
        <p style={{ fontFamily: FONTS.main, fontSize: '52px', fontWeight: 600, color: COLORS.INK_SECONDARY, margin: '14px 0 0 0' }}>
          Choose between passive global simplicity or deliberate factor outperformance
        </p>
      </div>

      {/* Horizontally Arranged Boxes per Comment 30 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', width: '100%' }}>
        {options.map((opt, idx) => {
          const pop = spring({ frame: frame - (18 + idx * 10), fps, config: SPRING_CONFIG });
          return (
            <div
              key={opt.ticker}
              style={{
                backgroundColor: COLORS.BG_ELEVATED,
                border: `3.5px solid ${COLORS.BG_RECESSED}`,
                borderTop: `16px solid ${opt.accent}`,
                borderRadius: '34px',
                padding: '44px 38px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 20px 48px rgba(30, 27, 22, 0.08)',
                transform: `translateY(${interpolate(pop, [0, 1], [35, 0])}px)`,
                opacity: pop,
                minHeight: '620px',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {/* Logo / Provider Badge */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: FONTS.main, fontSize: '32px', fontWeight: 800, color: COLORS.INK_SECONDARY, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    {opt.provider}
                  </span>
                  <div style={{ backgroundColor: opt.badgeBg, borderRadius: '14px', padding: '8px 20px' }}>
                    <span style={{ fontFamily: FONTS.main, fontSize: '34px', fontWeight: 900, color: opt.badgeColor }}>
                      {opt.ticker}
                    </span>
                  </div>
                </div>

                <div style={{ width: '100%', height: '2px', backgroundColor: COLORS.BG_RECESSED }} />

                <h3 style={{ fontFamily: FONTS.main, fontSize: '50px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, lineHeight: 1.15 }}>
                  {opt.role}
                </h3>

                <p style={{ fontFamily: FONTS.main, fontSize: '38px', fontWeight: 600, color: COLORS.INK_SECONDARY, margin: 0, lineHeight: 1.4 }}>
                  {opt.desc}
                </p>
              </div>

              {/* Bottom Specs */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '24px', backgroundColor: `${opt.accent}12`, borderRadius: '20px', padding: '20px 24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontFamily: FONTS.main, fontSize: '34px', fontWeight: 700, color: COLORS.INK_SECONDARY }}>Expense Fee:</span>
                  <span style={{ fontFamily: FONTS.main, fontSize: '36px', fontWeight: 900, color: opt.accent }}>{opt.fee}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontFamily: FONTS.main, fontSize: '34px', fontWeight: 700, color: COLORS.INK_SECONDARY }}>Holdings:</span>
                  <span style={{ fontFamily: FONTS.main, fontSize: '36px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>{opt.holdings}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </LeftZone>
  );
};

// --- BEAT 2: Pairings Verdict ---
const Beat2_PairingsVerdict: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headerPop = spring({ frame: frame - 5, fps, config: SPRING_CONFIG });
  const cardsPop = spring({ frame: frame - 22, fps, config: SPRING_CONFIG });

  return (
    <LeftZone>
      <div style={{ transform: `translateY(${interpolate(headerPop, [0, 1], [30, 0])}px)`, opacity: headerPop, marginBottom: '44px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '16px', backgroundColor: `${COLORS.ACCENT_HERO}18`, padding: '12px 30px', borderRadius: '32px', marginBottom: '16px' }}>
          <CheckCircle2 size={44} color={COLORS.ACCENT_HERO} />
          <span style={{ fontFamily: FONTS.main, fontSize: '42px', fontWeight: 800, color: COLORS.ACCENT_HERO, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            The Pairing Decision Matrix
          </span>
        </div>
        <h1 style={{ fontFamily: FONTS.main, fontSize: '112px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, letterSpacing: '-0.03em', lineHeight: 1.05 }}>
          How to Pair with Your Core
        </h1>
        <p style={{ fontFamily: FONTS.main, fontSize: '52px', fontWeight: 600, color: COLORS.INK_SECONDARY, margin: '14px 0 0 0' }}>
          Selecting based on your core holding's strengths and weaknesses
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '44px', width: '100%' }}>
        <div
          style={{
            backgroundColor: COLORS.BG_ELEVATED,
            border: `3.5px solid ${COLORS.ACCENT_DETAIL}`,
            borderTop: `16px solid ${COLORS.ACCENT_DETAIL}`,
            borderRadius: '36px',
            padding: '54px 58px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            boxShadow: '0 20px 50px rgba(60, 110, 113, 0.08)',
            transform: `translateY(${interpolate(cardsPop, [0, 1], [40, 0])}px)`,
            opacity: cardsPop,
          }}
        >
          <span style={{ fontFamily: FONTS.main, fontSize: '38px', fontWeight: 800, color: COLORS.ACCENT_DETAIL, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Route 1: Pure Simplicity
          </span>
          <span style={{ fontFamily: FONTS.main, fontSize: '84px', fontWeight: 900, color: COLORS.INK_PRIMARY, lineHeight: 1.0 }}>
            VXUS / IXUS
          </span>
          <p style={{ fontFamily: FONTS.main, fontSize: '48px', fontWeight: 600, color: COLORS.INK_SECONDARY, margin: 0, lineHeight: 1.45 }}>
            Ultra-low 0.07% fee to cover the entire international world with zero rebalancing friction or manager tracking risk.
          </p>
          <div style={{ backgroundColor: `${COLORS.ACCENT_DETAIL}18`, borderRadius: '18px', padding: '18px 28px', marginTop: '8px' }}>
            <span style={{ fontFamily: FONTS.main, fontSize: '38px', fontWeight: 800, color: COLORS.ACCENT_DETAIL }}>
              Best Paired With: RSP (Equal-Weight Core)
            </span>
          </div>
        </div>

        <div
          style={{
            backgroundColor: COLORS.BG_ELEVATED,
            border: `3.5px solid ${COLORS.ACCENT_HERO}`,
            borderTop: `16px solid ${COLORS.ACCENT_HERO}`,
            borderRadius: '36px',
            padding: '54px 58px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            boxShadow: '0 20px 50px rgba(184, 134, 46, 0.12)',
            transform: `translateY(${interpolate(cardsPop, [0, 1], [40, 0])}px)`,
            opacity: cardsPop,
          }}
        >
          <span style={{ fontFamily: FONTS.main, fontSize: '38px', fontWeight: 800, color: COLORS.ACCENT_HERO, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Route 2: Anti-Bubble Hedge
          </span>
          <span style={{ fontFamily: FONTS.main, fontSize: '84px', fontWeight: 900, color: COLORS.ACCENT_HERO, lineHeight: 1.0 }}>
            AVDV / DFIV
          </span>
          <p style={{ fontFamily: FONTS.main, fontSize: '48px', fontWeight: 600, color: COLORS.INK_SECONDARY, margin: 0, lineHeight: 1.45 }}>
            Adds true factor alpha to offset US large-cap tech dominance with deeply undervalued global value titans.
          </p>
          <div style={{ backgroundColor: `${COLORS.ACCENT_HERO}18`, borderRadius: '18px', padding: '18px 28px', marginTop: '8px' }}>
            <span style={{ fontFamily: FONTS.main, fontSize: '38px', fontWeight: 800, color: COLORS.ACCENT_HERO }}>
              Best Paired With: VOO or VTI (Tech Heavy Core)
            </span>
          </div>
        </div>
      </div>
    </LeftZone>
  );
};

export default function Block18_ComplementaryDecisionScene() {
  return (
    <AbsoluteFill style={{ overflow: 'hidden' }}>
      <Sequence from={0}>
        <EditorialBackground />
      </Sequence>

      <AbsoluteFill>
        {/* BEAT 1: 0 - 400 frames (~13.5s) */}
        <Sequence from={0} durationInFrames={400}>
          <Audio src={staticFile('pop-sfx.mp3')} volume={0.15} />
          <Beat1_ComplementaryRoutes />
        </Sequence>

        {/* BEAT 2: 400 - 840 frames (~14.5s) */}
        <Sequence from={400}>
          <Audio src={staticFile('pop-sfx.mp3')} volume={0.15} />
          <Beat2_PairingsVerdict />
        </Sequence>
      </AbsoluteFill>
    </AbsoluteFill>
  );
}

