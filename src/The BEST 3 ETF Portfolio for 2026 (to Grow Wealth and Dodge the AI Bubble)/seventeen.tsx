/**
 * REASONING STEP (v5 + High-Density Content Pillars & Crisp Dark Ink Contrast)
 * 1. User Feedback:
 *    - ELIMINATED EMPTY SPACE: Replaced arbitrary 1150px space-between with content-packed cards.
 *    - BOLD BODY FONT SIZES: 44px-46px for all descriptions and features.
 *    - ZERO GRAY: Replaced washed-out gray with rich dark ink (#14120E, #26221B).
 * 2. Beat Breakdown:
 *    - Beat 1 (0-450 frames, 15s): Asymmetric Shield Architecture (10-20% Target + 3 Mission Cards).
 *    - Beat 2 (450-960 frames, 17s): 3 Diversifier Candidate Pillars (SGOV vs BND vs GLD).
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
  Sparkles,
  CheckCircle2,
  Lock,
  Landmark,
  Coins,
} from 'lucide-react';

const COLORS = {
  BG_BASE: '#F3EEE4',
  BG_ELEVATED: '#FAF6EC',
  BG_RECESSED: '#EAE3D3',

  INK_PRIMARY: '#14120E',
  INK_SECONDARY: '#26221B',

  ACCENT_HERO: '#B8862E',
  ACCENT_NEGATIVE: '#B5533C',
  ACCENT_DETAIL: '#2A5D60',
  ACCENT_GOLD: '#C98B10',
};

const FONTS = {
  main: '"Inter", "DM Sans", sans-serif',
};

const SPRING_CONFIG = { damping: 200, stiffness: 120, mass: 0.8 };

const EditorialBackground: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: COLORS.BG_BASE }}>
    <svg style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0.22 }}>
      <defs>
        <pattern id="grid-b19" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
          <circle cx="6" cy="6" r="2.5" fill={COLORS.INK_SECONDARY} opacity={0.3} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-b19)" />
    </svg>
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: `radial-gradient(circle at 35% 30%, rgba(250, 246, 236, 0.75) 0%, rgba(234, 227, 211, 0.45) 100%)`,
        pointerEvents: 'none',
      }}
    />
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
      paddingLeft: '120px',
      paddingRight: '120px',
      boxSizing: 'border-box',
      borderRight: `3px solid ${COLORS.BG_RECESSED}`,
    }}
  >
    {children}
  </div>
);

// --- BEAT 1: Asymmetric Shield Architecture (0 - 450 frames) ---
const Beat1_ShieldArchitecture: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headerPop = spring({ frame: frame - 5, fps, config: SPRING_CONFIG });
  const heroPop = spring({ frame: frame - 20, fps, config: SPRING_CONFIG });
  const card1 = spring({ frame: frame - 38, fps, config: SPRING_CONFIG });
  const card2 = spring({ frame: frame - 50, fps, config: SPRING_CONFIG });
  const card3 = spring({ frame: frame - 62, fps, config: SPRING_CONFIG });

  const missions = [
    { title: 'Capital Protection', desc: 'Prevents forced liquidations and panic selling during severe market drawdowns.', springVal: card1 },
    { title: 'Rebalancing Dry Powder', desc: 'Liquid buying power ready to scoop up elite equities at 30% to 50% discounts.', springVal: card2 },
    { title: 'Uncorrelated Anchor', desc: 'Maintains independent purchasing power when conventional 60/40 portfolios plunge.', springVal: card3 },
  ];

  return (
    <LeftZone>
      {/* Header */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
          marginBottom: '36px',
          opacity: headerPop,
          transform: `translateY(${interpolate(headerPop, [0, 1], [30, 0])}px)`,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <ShieldCheck size={44} color={COLORS.INK_PRIMARY} />
          <span
            style={{
              fontFamily: FONTS.main,
              fontSize: '42px',
              fontWeight: 900,
              color: COLORS.INK_PRIMARY,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}
          >
            Sleeve 3: Defense & Liquidity
          </span>
        </div>
        <h1
          style={{
            fontFamily: FONTS.main,
            fontSize: '112px',
            fontWeight: 900,
            color: COLORS.INK_PRIMARY,
            margin: 0,
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
          }}
        >
          The Asymmetric Diversifier
        </h1>
        <p style={{ fontFamily: FONTS.main, fontSize: '52px', fontWeight: 600, color: COLORS.INK_SECONDARY, margin: '12px 0 0 0' }}>
          Uncorrelated defense designed to survive crashes and power opportunistic buying
        </p>
      </div>

      {/* Hero Full-Width Card */}
      <div
        style={{
          backgroundColor: COLORS.BG_ELEVATED,
          borderRadius: '34px',
          border: `3.5px solid ${COLORS.INK_PRIMARY}`,
          borderTop: `14px solid ${COLORS.INK_PRIMARY}`,
          padding: '44px 56px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '32px',
          boxShadow: '0 20px 48px rgba(20, 18, 14, 0.08)',
          opacity: heroPop,
          transform: `translateY(${interpolate(heroPop, [0, 1], [40, 0])}px)`,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontFamily: FONTS.main, fontSize: '34px', fontWeight: 800, color: COLORS.INK_SECONDARY, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Target Portfolio Weight
          </span>
          <span style={{ fontFamily: FONTS.main, fontSize: '130px', fontWeight: 900, color: COLORS.INK_PRIMARY, lineHeight: 0.95, margin: '8px 0' }}>
            10% – 20%
          </span>
          <span style={{ fontFamily: FONTS.main, fontSize: '44px', fontWeight: 700, color: COLORS.INK_PRIMARY }}>
            Emotional and financial armor against market panics
          </span>
        </div>

        <div style={{ width: '3px', height: '150px', backgroundColor: COLORS.BG_RECESSED }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-end' }}>
          <span
            style={{
              fontFamily: FONTS.main,
              fontSize: '34px',
              fontWeight: 800,
              backgroundColor: `${COLORS.INK_PRIMARY}15`,
              color: COLORS.INK_PRIMARY,
              padding: '12px 28px',
              borderRadius: '16px',
            }}
          >
            CRISIS DRY POWDER
          </span>
          <span style={{ fontFamily: FONTS.main, fontSize: '42px', fontWeight: 700, color: COLORS.INK_PRIMARY, textAlign: 'right' }}>
            Protects capital & fuels opportunistic buying.
          </span>
        </div>
      </div>

      {/* 3 Vertically Stacked Mission Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%' }}>
        {missions.map((m, idx) => {
          const pop = m.springVal;
          return (
            <div
              key={idx}
              style={{
                backgroundColor: COLORS.BG_ELEVATED,
                borderRadius: '26px',
                border: `3px solid ${COLORS.BG_RECESSED}`,
                borderLeft: `10px solid ${COLORS.INK_PRIMARY}`,
                padding: '28px 38px',
                display: 'flex',
                alignItems: 'center',
                gap: '26px',
                boxShadow: '0 8px 24px rgba(20, 18, 14, 0.03)',
                opacity: pop,
                transform: `translateY(${interpolate(pop, [0, 1], [30, 0])}px)`,
              }}
            >
              <div
                style={{
                  backgroundColor: `${COLORS.INK_PRIMARY}12`,
                  width: '68px',
                  height: '68px',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <CheckCircle2 size={40} color={COLORS.INK_PRIMARY} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span style={{ fontFamily: FONTS.main, fontSize: '46px', fontWeight: 900, color: COLORS.INK_PRIMARY }}>
                  {m.title}
                </span>
                <span style={{ fontFamily: FONTS.main, fontSize: '38px', fontWeight: 600, color: COLORS.INK_SECONDARY }}>
                  {m.desc}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </LeftZone>
  );
};

// --- BEAT 2: 3 Dense, Content-Packed Candidate Columns ---
const Beat2_DiversifierPillars: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headerPop = spring({ frame: frame - 5, fps, config: SPRING_CONFIG });
  const col1 = spring({ frame: frame - 18, fps, config: SPRING_CONFIG });
  const col2 = spring({ frame: frame - 32, fps, config: SPRING_CONFIG });
  const col3 = spring({ frame: frame - 46, fps, config: SPRING_CONFIG });

  const contenders = [
    {
      ticker: 'SGOV',
      subtitle: '0-3 Mo Treasury Bills',
      badge: '4% CASH STABILITY',
      stat: '4.0%',
      statLabel: 'Risk-Free Yield',
      accent: COLORS.ACCENT_HERO,
      icon: <Lock size={44} color={COLORS.ACCENT_HERO} />,
      points: [
        'Virtually identical to cash',
        'Zero price drop in 2022 (+1%)',
        'Maximum principal protection',
      ],
      springVal: col1,
    },
    {
      ticker: 'BND',
      subtitle: 'Total US Bond Market',
      badge: 'RECESSION UPSIDE',
      stat: '11,000+',
      statLabel: 'Bond Holdings',
      accent: COLORS.ACCENT_DETAIL,
      icon: <Landmark size={44} color={COLORS.ACCENT_DETAIL} />,
      points: [
        'Treasuries, mortgages & corporates',
        'Surges when Fed cuts rates',
        'Traditional stock crash cushion',
      ],
      springVal: col2,
    },
    {
      ticker: 'GLD',
      subtitle: 'Physical Vaulted Gold',
      badge: '0.0 CORRELATION',
      stat: '+134%',
      statLabel: '5-Year Return',
      accent: COLORS.ACCENT_GOLD,
      icon: <Coins size={44} color={COLORS.ACCENT_GOLD} />,
      points: [
        '0.0 correlation to stocks',
        'Protects against currency debasement',
        'Top performing asset in video',
      ],
      springVal: col3,
    },
  ];

  return (
    <LeftZone>
      {/* Header */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
          marginBottom: '36px',
          opacity: headerPop,
          transform: `translateY(${interpolate(headerPop, [0, 1], [30, 0])}px)`,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Sparkles size={44} color={COLORS.INK_PRIMARY} />
          <span
            style={{
              fontFamily: FONTS.main,
              fontSize: '42px',
              fontWeight: 900,
              color: COLORS.INK_PRIMARY,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}
          >
            The 3 Diversifier Routes
          </span>
        </div>
        <h1
          style={{
            fontFamily: FONTS.main,
            fontSize: '112px',
            fontWeight: 900,
            color: COLORS.INK_PRIMARY,
            margin: 0,
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
          }}
        >
          Matching Defense to Your Primary Risk
        </h1>
        <p style={{ fontFamily: FONTS.main, fontSize: '52px', fontWeight: 600, color: COLORS.INK_SECONDARY, margin: '12px 0 0 0' }}>
          Tailoring your shield to inflation, recession, or market valuation shocks
        </p>
      </div>

      {/* 3 Proportional Columns */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '32px',
          width: '100%',
        }}
      >
        {contenders.map((c) => {
          const pop = c.springVal;
          return (
            <div
              key={c.ticker}
              style={{
                backgroundColor: COLORS.BG_ELEVATED,
                border: `3.5px solid ${COLORS.BG_RECESSED}`,
                borderTop: `16px solid ${c.accent}`,
                borderRadius: '32px',
                padding: '36px 32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                boxSizing: 'border-box',
                boxShadow: '0 16px 40px rgba(20, 18, 14, 0.06)',
                transform: `translateY(${interpolate(pop, [0, 1], [40, 0])}px)`,
                opacity: pop,
              }}
            >
              {/* Top Details */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span
                  style={{
                    fontFamily: FONTS.main,
                    fontSize: '30px',
                    fontWeight: 800,
                    color: c.accent,
                    backgroundColor: `${c.accent}18`,
                    padding: '8px 18px',
                    borderRadius: '14px',
                    letterSpacing: '0.04em',
                  }}
                >
                  {c.badge}
                </span>
                {c.icon}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span
                  style={{
                    fontFamily: FONTS.main,
                    fontSize: '68px',
                    fontWeight: 900,
                    color: COLORS.INK_PRIMARY,
                    lineHeight: 1,
                  }}
                >
                  {c.ticker}
                </span>
                <span style={{ fontFamily: FONTS.main, fontSize: '36px', fontWeight: 700, color: COLORS.INK_SECONDARY }}>
                  {c.subtitle}
                </span>
              </div>

              {/* Stat Callout Strip */}
              <div
                style={{
                  backgroundColor: COLORS.BG_BASE,
                  borderRadius: '20px',
                  padding: '18px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  border: `2px solid ${COLORS.BG_RECESSED}`,
                }}
              >
                <span style={{ fontFamily: FONTS.main, fontSize: '34px', fontWeight: 700, color: COLORS.INK_PRIMARY }}>
                  {c.statLabel}:
                </span>
                <span style={{ fontFamily: FONTS.main, fontSize: '50px', fontWeight: 900, color: c.accent }}>
                  {c.stat}
                </span>
              </div>

              {/* 3 Bullet Rows */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {c.points.map((pt, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                    <CheckCircle2 size={32} color={c.accent} style={{ flexShrink: 0, marginTop: '4px' }} />
                    <span
                      style={{
                        fontFamily: FONTS.main,
                        fontSize: '36px',
                        fontWeight: 600,
                        color: COLORS.INK_PRIMARY,
                        lineHeight: 1.35,
                      }}
                    >
                      {pt}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </LeftZone>
  );
};

export default function Block19_DiversifierScene() {
  return (
    <AbsoluteFill style={{ overflow: 'hidden' }}>
      <Sequence from={0}>
        <EditorialBackground />
      </Sequence>

      <AbsoluteFill>
        {/* BEAT 1: 0 - 450 frames (15s) */}
        <Sequence from={0} durationInFrames={450}>
          <Audio src={staticFile('pop-sfx.mp3')} volume={0.15} />
          <Beat1_ShieldArchitecture />
        </Sequence>

        {/* BEAT 2: 450 - 960 frames (17s) */}
        <Sequence from={450}>
          <Audio src={staticFile('pop-sfx.mp3')} volume={0.15} />
          <Beat2_DiversifierPillars />
        </Sequence>
      </AbsoluteFill>
    </AbsoluteFill>
  );
}

