/**
 * BLOCK 12: Sleeve 2 (Complementary Holding) — Role & 20-30% Target Allocation
 * Duration: 1050 frames (~35 seconds)
 * 
 * Multi-Beat Architecture:
 * - Beat 1 (0-450): Global Complementary Architecture (20-30% Target + 3 Blind Spots)
 * - Beat 2 (450-1050): 3 Complementary Contender Columns (ACWX vs AVDV vs DFIV)
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
  Globe2,
  Sparkles,
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
        <pattern id="grid-b12" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
          <circle cx="6" cy="6" r="2.5" fill={COLORS.INK_TERTIARY} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-b12)" />
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
      paddingLeft: '130px',
      paddingRight: '130px',
      boxSizing: 'border-box',
      borderRight: `3px solid ${COLORS.BG_RECESSED}`,
    }}
  >
    {children}
  </div>
);

// --- BEAT 1: Global Complementary Architecture (0 - 450 frames) ---
const Beat1_ComplementaryArchitecture: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headerPop = spring({ frame: frame - 5, fps, config: SPRING_CONFIG });
  const heroPop = spring({ frame: frame - 20, fps, config: SPRING_CONFIG });
  const card1 = spring({ frame: frame - 38, fps, config: SPRING_CONFIG });
  const card2 = spring({ frame: frame - 50, fps, config: SPRING_CONFIG });
  const card3 = spring({ frame: frame - 62, fps, config: SPRING_CONFIG });

  const blindspots = [
    {
      title: '1. Geographic Diversification',
      tag: '100% Non-US developed and emerging market powerhouses',
      springVal: card1,
    },
    {
      title: '2. Valuation Discount',
      tag: 'Deep price-to-earnings discount vs elevated US multiples',
      springVal: card2,
    },
    {
      title: '3. Regime Change Protection',
      tag: 'Ensures portfolio growth if US mega-caps face stagnation',
      springVal: card3,
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
          marginBottom: '44px',
          opacity: headerPop,
          transform: `translateY(${interpolate(headerPop, [0, 1], [30, 0])}px)`,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
          <Globe2 size={46} color={COLORS.ACCENT_DETAIL} />
          <span
            style={{
              fontFamily: FONTS.heading,
              fontSize: '48px',
              fontWeight: 800,
              color: COLORS.ACCENT_DETAIL,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}
          >
            Sleeve 2: Global Alpha
          </span>
        </div>
        <h1
          style={{
            fontFamily: FONTS.heading,
            fontSize: '114px',
            fontWeight: 900,
            color: COLORS.INK_PRIMARY,
            margin: 0,
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
          }}
        >
          The Complementary Holding
        </h1>
      </div>

      {/* Hero Full-Width Card */}
      <div
        style={{
          backgroundColor: COLORS.BG_ELEVATED,
          borderRadius: '40px',
          border: `4px solid ${COLORS.ACCENT_DETAIL}`,
          padding: '48px 60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '38px',
          boxShadow: '0 24px 56px rgba(60, 110, 113, 0.12)',
          opacity: heroPop,
          transform: `translateY(${interpolate(heroPop, [0, 1], [40, 0])}px)`,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontFamily: FONTS.heading, fontSize: '42px', fontWeight: 800, color: COLORS.ACCENT_DETAIL, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Target Portfolio Weight
          </span>
          <span style={{ fontFamily: FONTS.heading, fontSize: '140px', fontWeight: 900, color: COLORS.INK_PRIMARY, lineHeight: 0.95, margin: '10px 0' }}>
            20% - 30%
          </span>
          <span style={{ fontFamily: FONTS.body, fontSize: '50px', fontWeight: 700, color: COLORS.INK_PRIMARY }}>
            Engineered to own what the core US holding ignores
          </span>
        </div>

        <div style={{ width: '4px', height: '170px', backgroundColor: COLORS.BG_RECESSED }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-end' }}>
          <span
            style={{
              fontFamily: FONTS.heading,
              fontSize: '40px',
              fontWeight: 800,
              backgroundColor: `${COLORS.ACCENT_DETAIL}18`,
              color: COLORS.ACCENT_DETAIL,
              padding: '14px 32px',
              borderRadius: '24px',
              letterSpacing: '0.04em',
            }}
          >
            GLOBAL DIVERSIFICATION
          </span>
          <span style={{ fontFamily: FONTS.body, fontSize: '48px', fontWeight: 700, color: COLORS.INK_PRIMARY, textAlign: 'right', maxWidth: '680px', lineHeight: 1.25 }}>
            Broadens geographical reach & captures deep valuation discounts
          </span>
        </div>
      </div>

      {/* 3 Vertically Stacked Blindspot Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '26px', width: '100%' }}>
        {blindspots.map((b, idx) => {
          const pop = b.springVal;
          return (
            <div
              key={idx}
              style={{
                backgroundColor: COLORS.BG_ELEVATED,
                borderRadius: '32px',
                border: `3.5px solid ${COLORS.BG_RECESSED}`,
                borderLeft: `14px solid ${COLORS.ACCENT_DETAIL}`,
                padding: '34px 44px',
                display: 'flex',
                alignItems: 'center',
                gap: '32px',
                boxShadow: '0 14px 32px rgba(30, 27, 22, 0.05)',
                opacity: pop,
                transform: `translateY(${interpolate(pop, [0, 1], [30, 0])}px)`,
              }}
            >
              <div
                style={{
                  backgroundColor: `${COLORS.ACCENT_DETAIL}18`,
                  width: '80px',
                  height: '80px',
                  borderRadius: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <CheckCircle2 size={48} color={COLORS.ACCENT_DETAIL} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{ fontFamily: FONTS.heading, fontSize: '54px', fontWeight: 900, color: COLORS.INK_PRIMARY }}>
                  {b.title}
                </span>
                <span style={{ fontFamily: FONTS.body, fontSize: '48px', fontWeight: 600, color: COLORS.INK_SECONDARY }}>
                  {b.tag}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </LeftZone>
  );
};

// --- BEAT 2: 3 Complementary Candidate Columns ---
const Beat2_ComplementaryPillars: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headerPop = spring({ frame: frame - 5, fps, config: SPRING_CONFIG });
  const col1 = spring({ frame: frame - 18, fps, config: SPRING_CONFIG });
  const col2 = spring({ frame: frame - 32, fps, config: SPRING_CONFIG });
  const col3 = spring({ frame: frame - 46, fps, config: SPRING_CONFIG });

  const contenders = [
    {
      ticker: 'ACWX',
      subtitle: 'MSCI ACWI ex-US Index',
      badge: 'BROAD FOOTPRINT',
      stat: '1,700',
      statLabel: 'Global Stocks',
      accent: COLORS.ACCENT_DETAIL,
      points: [
        'Top 10 is only 16% of fund',
        'Simple all-in-one international',
      ],
      springVal: col1,
    },
    {
      ticker: 'AVDV',
      subtitle: 'Avantis Int\'l Small Value',
      badge: 'FACTOR TRIFECTA',
      stat: '+96%',
      statLabel: '5-Year Return',
      accent: COLORS.ACCENT_HERO,
      points: [
        'Small-cap size & deep value',
        '1,400 stocks capped at 0.5%',
      ],
      springVal: col2,
    },
    {
      ticker: 'DFIV',
      subtitle: 'Dimensional Int\'l Value',
      badge: 'VALUE TITANS',
      stat: '+110%',
      statLabel: '5-Year Return',
      accent: COLORS.DARK_SLAB,
      points: [
        '500 large-cap value leaders',
        'Low 0.27% expense fee',
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
          marginBottom: '44px',
          opacity: headerPop,
          transform: `translateY(${interpolate(headerPop, [0, 1], [30, 0])}px)`,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
          <Sparkles size={46} color={COLORS.ACCENT_DETAIL} />
          <span
            style={{
              fontFamily: FONTS.heading,
              fontSize: '48px',
              fontWeight: 800,
              color: COLORS.ACCENT_DETAIL,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}
          >
            3 Complementary Options
          </span>
        </div>
        <h1
          style={{
            fontFamily: FONTS.heading,
            fontSize: '114px',
            fontWeight: 900,
            color: COLORS.INK_PRIMARY,
            margin: 0,
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
          }}
        >
          Targeting Global Alpha & Value
        </h1>
      </div>

      {/* 3 Dense Columns */}
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
                borderRadius: '40px',
                padding: '46px 40px',
                display: 'flex',
                flexDirection: 'column',
                gap: '26px',
                boxSizing: 'border-box',
                boxShadow: '0 24px 54px rgba(30, 27, 22, 0.07)',
                transform: `translateY(${interpolate(pop, [0, 1], [40, 0])}px)`,
                opacity: pop,
              }}
            >
              {/* Top Details */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span
                  style={{
                    fontFamily: FONTS.heading,
                    fontSize: '34px',
                    fontWeight: 800,
                    color: c.accent === COLORS.DARK_SLAB ? COLORS.INK_PRIMARY : c.accent,
                    backgroundColor: c.accent === COLORS.DARK_SLAB ? `${COLORS.INK_PRIMARY}12` : `${c.accent}15`,
                    padding: '10px 22px',
                    borderRadius: '18px',
                    letterSpacing: '0.04em',
                  }}
                >
                  {c.badge}
                </span>
                <Globe2 size={46} color={c.accent === COLORS.DARK_SLAB ? COLORS.INK_PRIMARY : c.accent} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span
                  style={{
                    fontFamily: FONTS.heading,
                    fontSize: '80px',
                    fontWeight: 900,
                    color: COLORS.INK_PRIMARY,
                    lineHeight: 1,
                  }}
                >
                  {c.ticker}
                </span>
                <span style={{ fontFamily: FONTS.body, fontSize: '44px', fontWeight: 600, color: COLORS.INK_SECONDARY }}>
                  {c.subtitle}
                </span>
              </div>

              {/* Stat Callout Strip */}
              <div
                style={{
                  backgroundColor: COLORS.BG_BASE,
                  borderRadius: '26px',
                  padding: '24px 30px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  border: `2px solid ${COLORS.BG_RECESSED}`,
                }}
              >
                <span style={{ fontFamily: FONTS.body, fontSize: '40px', fontWeight: 700, color: COLORS.INK_SECONDARY }}>
                  {c.statLabel}:
                </span>
                <span style={{ fontFamily: FONTS.heading, fontSize: '72px', fontWeight: 900, color: c.accent === COLORS.DARK_SLAB ? COLORS.ACCENT_HERO : c.accent }}>
                  {c.stat}
                </span>
              </div>

              {/* 2 Punchy Bullets */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {c.points.map((pt, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <CheckCircle2 size={36} color={c.accent === COLORS.DARK_SLAB ? COLORS.INK_PRIMARY : c.accent} style={{ flexShrink: 0, marginTop: '6px' }} />
                    <span
                      style={{
                        fontFamily: FONTS.body,
                        fontSize: '44px',
                        fontWeight: 600,
                        color: COLORS.INK_PRIMARY,
                        lineHeight: 1.25,
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

export default function Block12_ComplementaryHoldingScene() {
  return (
    <AbsoluteFill style={{ overflow: 'hidden' }}>
      <Sequence from={0}>
        <EditorialBackground />
      </Sequence>

      <AbsoluteFill>
        {/* BEAT 1: 0 - 450 frames (15s) */}
        <Sequence from={0} durationInFrames={450}>
          <Audio src={staticFile('pop-sfx.mp3')} volume={0.15} />
          <Beat1_ComplementaryArchitecture />
        </Sequence>

        {/* BEAT 2: 450 - 1050 frames (20s) */}
        <Sequence from={450}>
          <Audio src={staticFile('pop-sfx.mp3')} volume={0.15} />
          <Beat2_ComplementaryPillars />
        </Sequence>
      </AbsoluteFill>
    </AbsoluteFill>
  );
}