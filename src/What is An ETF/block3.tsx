/**
 * BLOCK 3: DEFINING "ETF" — EXCHANGE TRADED FUND MECHANICS & THE WRAPPER CONCEPT
 * Canvas: Native 4K UHD (3840 x 2160), 60 FPS
 * Layout: Strict 60/40 Split (Left 2304px for visual cards + icons, Right empty for talking head)
 *
 * READABILITY & CONTRAST SPEC:
 * - High-contrast text only: INK_PRIMARY (#141210) and INK_SECONDARY (#3D372E) on crisp warm white cards (#FAF6EC).
 * - Minimum font size: 56px (no 40px-48px faint text).
 * - Strong weights: 800/900 headings, 700 body with high contrast.
 * - Icon badges: High contrast, thick 3px stroke with solid colors.
 */

import React from 'react';
import {
  AbsoluteFill,
  Sequence,
  spring,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
} from 'remotion';
import {
  Layers,
  ArrowRightLeft,
  PieChart,
  Box,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Coins,
  Building2,
  Gem,
  Briefcase,
  Check,
} from 'lucide-react';

// --- STRICT HIGH-CONTRAST COLOR TOKENS ---
const COLORS = {
  BG_BASE: '#F3EEE4',
  BG_ELEVATED: '#FAF6EC',
  BG_RECESSED: '#EAE3D3',

  // Deep obsidian inks for maximum contrast against beige
  INK_PRIMARY: '#141210',
  INK_SECONDARY: '#363127',
  INK_MUTED: '#5C5446',

  // Deep, saturated accents (no washed-out pastel text)
  PINE_JADE: '#086343',
  PINE_JADE_BG: 'rgba(8, 99, 67, 0.12)',
  OCHRE_GOLD: '#9E6F18',
  OCHRE_GOLD_BG: 'rgba(158, 111, 24, 0.14)',
  COBALT_BLUE: '#1A49B8',
  COBALT_BLUE_BG: 'rgba(26, 73, 184, 0.12)',
  CRIMSON: '#A13B24',
  CRIMSON_BG: 'rgba(161, 59, 36, 0.12)',
};

const FONTS = {
  heading: 'Poppins, Inter, -apple-system, sans-serif',
  body: 'Inter, -apple-system, sans-serif',
};

const SPRING_SMOOTH = { damping: 200, stiffness: 120, mass: 0.8 };
const SPRING_BOUNCE = { damping: 16, stiffness: 160, mass: 0.6 };

export const BLOCK_3_DURATION = 2280;

// Dot grid + radial vignette background
const EditorialBackground: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: COLORS.BG_BASE }}>
    <svg style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0.18 }}>
      <defs>
        <pattern id="etf-dots-b3" x="0" y="0" width="56" height="56" patternUnits="userSpaceOnUse">
          <circle cx="8" cy="8" r="2.5" fill={COLORS.INK_MUTED} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#etf-dots-b3)" />
    </svg>
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at 35% 35%, rgba(250, 246, 236, 0.85) 0%, rgba(234, 227, 211, 0.35) 100%)',
        pointerEvents: 'none',
      }}
    />
  </AbsoluteFill>
);

// Strict 60/40 Left Zone (Leaves right 40% empty for talking head)
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
      paddingRight: '120px',
      boxSizing: 'border-box',
    }}
  >
    {children}
  </div>
);

// High-contrast Header Component
const SectionHeader: React.FC<{
  badge: string;
  badgeColor?: string;
  title: string;
  delay?: number;
}> = ({ badge, badgeColor = COLORS.OCHRE_GOLD, title, delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const pop = spring({ frame: frame - delay, fps, config: SPRING_SMOOTH });

  return (
    <div
      style={{
        marginBottom: '48px',
        opacity: pop,
        transform: `translateY(${interpolate(pop, [0, 1], [30, 0])}px)`,
      }}
    >
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '16px',
          padding: '14px 34px',
          borderRadius: '999px',
          backgroundColor: COLORS.BG_ELEVATED,
          border: `3px solid ${badgeColor}`,
          marginBottom: '22px',
          boxShadow: '0 8px 24px rgba(20, 18, 16, 0.05)',
        }}
      >
        <span
          style={{
            fontFamily: FONTS.heading,
            fontSize: '48px',
            fontWeight: 800,
            color: badgeColor,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
          }}
        >
          {badge}
        </span>
      </div>
      <h1
        style={{
          fontFamily: FONTS.heading,
          fontSize: '124px',
          fontWeight: 900,
          color: COLORS.INK_PRIMARY,
          margin: 0,
          lineHeight: 1.05,
          letterSpacing: '-0.04em',
        }}
      >
        {title}
      </h1>
    </div>
  );
};

// ==========================================
// BEAT 3.1: THE ACRONYM (E · T · F)
// ==========================================
const Beat3_1_Acronym: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const items = [
    {
      letter: 'E',
      word: 'Exchange',
      desc: 'Trades on public stock markets live',
      icon: <ArrowRightLeft size={74} color={COLORS.COBALT_BLUE} strokeWidth={2.8} />,
      color: COLORS.COBALT_BLUE,
    },
    {
      letter: 'T',
      word: 'Traded',
      desc: 'Instant liquidity just like a stock',
      icon: <TrendingUp size={74} color={COLORS.OCHRE_GOLD} strokeWidth={2.8} />,
      color: COLORS.OCHRE_GOLD,
    },
    {
      letter: 'F',
      word: 'Fund',
      desc: 'A pooled basket of diversified assets',
      icon: <Layers size={74} color={COLORS.PINE_JADE} strokeWidth={2.8} />,
      color: COLORS.PINE_JADE,
    },
  ];

  return (
    <LeftZone>
      <SectionHeader
        badge="Deconstructing the Acronym"
        badgeColor={COLORS.COBALT_BLUE}
        title="What Does ETF Stand For?"
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', width: '100%' }}>
        {items.map((item, idx) => {
          const pop = spring({ frame: frame - 12 - idx * 16, fps, config: SPRING_BOUNCE });
          return (
            <div
              key={idx}
              style={{
                backgroundColor: COLORS.BG_ELEVATED,
                borderRadius: '42px',
                border: `3px solid ${COLORS.INK_PRIMARY}18`,
                padding: '38px 52px',
                display: 'flex',
                alignItems: 'center',
                gap: '46px',
                opacity: pop,
                transform: `translateX(${interpolate(pop, [0, 1], [-50, 0])}px)`,
                boxShadow: '0 24px 50px rgba(20, 18, 16, 0.06)',
              }}
            >
              {/* Circular Icon Container */}
              <div
                style={{
                  width: '140px',
                  height: '140px',
                  borderRadius: '50%',
                  backgroundColor: COLORS.BG_BASE,
                  border: `4px solid ${item.color}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </div>

              {/* Bold Letter Block */}
              <span
                style={{
                  fontFamily: FONTS.heading,
                  fontSize: '128px',
                  fontWeight: 900,
                  color: item.color,
                  lineHeight: 1,
                  minWidth: '110px',
                }}
              >
                {item.letter}
              </span>

              {/* Word & High-Contrast Subtitle */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span
                  style={{
                    fontFamily: FONTS.heading,
                    fontSize: '84px',
                    fontWeight: 900,
                    color: COLORS.INK_PRIMARY,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1,
                  }}
                >
                  {item.word}
                </span>
                <span
                  style={{
                    fontFamily: FONTS.body,
                    fontSize: '56px',
                    fontWeight: 700,
                    color: COLORS.INK_SECONDARY,
                  }}
                >
                  {item.desc}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </LeftZone>
  );
};

// ==========================================
// BEAT 3.2: DEFINING THE "FUND" (POOLED BASKET)
// ==========================================
const Beat3_2_Fund: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const heroPop = spring({ frame: frame - 10, fps, config: SPRING_SMOOTH });
  const card1 = spring({ frame: frame - 40, fps, config: SPRING_BOUNCE });
  const card2 = spring({ frame: frame - 70, fps, config: SPRING_BOUNCE });

  return (
    <LeftZone>
      <SectionHeader
        badge="Fund Definition"
        badgeColor={COLORS.PINE_JADE}
        title="What is a 'Fund'?"
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '34px', width: '100%' }}>
        {/* Top Hero Banner */}
        <div
          style={{
            backgroundColor: COLORS.BG_ELEVATED,
            borderRadius: '46px',
            border: `4px solid ${COLORS.PINE_JADE}`,
            padding: '52px 64px',
            display: 'flex',
            alignItems: 'center',
            gap: '44px',
            opacity: heroPop,
            transform: `scale(${interpolate(heroPop, [0, 1], [0.95, 1])})`,
            boxShadow: '0 28px 60px rgba(8, 99, 67, 0.12)',
          }}
        >
          <div
            style={{
              width: '146px',
              height: '146px',
              borderRadius: '50%',
              backgroundColor: COLORS.BG_BASE,
              border: `4px solid ${COLORS.PINE_JADE}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <Coins size={80} color={COLORS.PINE_JADE} strokeWidth={2.6} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <span
              style={{
                fontFamily: FONTS.heading,
                fontSize: '48px',
                fontWeight: 800,
                color: COLORS.PINE_JADE,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              The Core Mechanism
            </span>
            <span
              style={{
                fontFamily: FONTS.heading,
                fontSize: '92px',
                fontWeight: 900,
                color: COLORS.INK_PRIMARY,
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
              }}
            >
              One Big Pool of Money
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '6px' }}>
              <span style={{ fontSize: '48px', color: COLORS.PINE_JADE, fontWeight: 900 }}>•</span>
              <span
                style={{
                  fontFamily: FONTS.heading,
                  fontSize: '54px',
                  fontWeight: 800,
                  color: COLORS.INK_SECONDARY,
                }}
              >
                Thousands of investors pool capital together
              </span>
            </div>
          </div>
        </div>

        {/* 2 Big Stat Cards */}
        <div style={{ display: 'flex', gap: '30px', width: '100%' }}>
          {/* Card 1: VOO Example */}
          <div
            style={{
              flex: 1,
              backgroundColor: COLORS.BG_ELEVATED,
              borderRadius: '42px',
              border: `3px solid ${COLORS.INK_PRIMARY}18`,
              padding: '48px',
              display: 'flex',
              flexDirection: 'column',
              gap: '22px',
              opacity: card1,
              transform: `translateY(${interpolate(card1, [0, 1], [35, 0])}px)`,
              boxShadow: '0 24px 50px rgba(20, 18, 16, 0.05)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span
                style={{
                  fontFamily: FONTS.heading,
                  fontSize: '48px',
                  fontWeight: 800,
                  color: COLORS.INK_MUTED,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}
              >
                In VOO's Case
              </span>
              <Building2 size={62} color={COLORS.COBALT_BLUE} strokeWidth={2.6} />
            </div>
            <span
              style={{
                fontFamily: FONTS.heading,
                fontSize: '124px',
                fontWeight: 900,
                color: COLORS.COBALT_BLUE,
                lineHeight: 1,
                letterSpacing: '-0.04em',
              }}
            >
              500
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <Check size={42} color={COLORS.COBALT_BLUE} strokeWidth={3.5} />
              <span
                style={{
                  fontFamily: FONTS.heading,
                  fontSize: '54px',
                  fontWeight: 800,
                  color: COLORS.INK_PRIMARY,
                }}
              >
                Top 500 US Blue Chips
              </span>
            </div>
          </div>

          {/* Card 2: Shared Diversification */}
          <div
            style={{
              flex: 1,
              backgroundColor: COLORS.BG_ELEVATED,
              borderRadius: '42px',
              border: `3px solid ${COLORS.INK_PRIMARY}18`,
              padding: '48px',
              display: 'flex',
              flexDirection: 'column',
              gap: '22px',
              opacity: card2,
              transform: `translateY(${interpolate(card2, [0, 1], [35, 0])}px)`,
              boxShadow: '0 24px 50px rgba(20, 18, 16, 0.05)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span
                style={{
                  fontFamily: FONTS.heading,
                  fontSize: '48px',
                  fontWeight: 800,
                  color: COLORS.INK_MUTED,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}
              >
                Diversification
              </span>
              <ShieldCheck size={62} color={COLORS.PINE_JADE} strokeWidth={2.6} />
            </div>
            <span
              style={{
                fontFamily: FONTS.heading,
                fontSize: '124px',
                fontWeight: 900,
                color: COLORS.PINE_JADE,
                lineHeight: 1,
                letterSpacing: '-0.04em',
              }}
            >
              1 Basket
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <Check size={42} color={COLORS.PINE_JADE} strokeWidth={3.5} />
              <span
                style={{
                  fontFamily: FONTS.heading,
                  fontSize: '54px',
                  fontWeight: 800,
                  color: COLORS.INK_PRIMARY,
                }}
              >
                Fractions of 500 Giants at Once
              </span>
            </div>
          </div>
        </div>
      </div>
    </LeftZone>
  );
};

// ==========================================
// BEAT 3.3: DEFINING "EXCHANGE TRADED"
// ==========================================
const Beat3_3_Exchange: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const heroPop = spring({ frame: frame - 10, fps, config: SPRING_SMOOTH });
  const rowPop1 = spring({ frame: frame - 40, fps, config: SPRING_BOUNCE });
  const rowPop2 = spring({ frame: frame - 65, fps, config: SPRING_BOUNCE });

  return (
    <LeftZone>
      <SectionHeader
        badge="Market Trading"
        badgeColor={COLORS.COBALT_BLUE}
        title="What Does 'Exchange Traded' Mean?"
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '34px', width: '100%' }}>
        {/* Live Ticker Card */}
        <div
          style={{
            backgroundColor: COLORS.BG_ELEVATED,
            borderRadius: '46px',
            border: `4px solid ${COLORS.COBALT_BLUE}`,
            padding: '54px 68px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            opacity: heroPop,
            transform: `scale(${interpolate(heroPop, [0, 1], [0.95, 1])})`,
            boxShadow: '0 28px 60px rgba(26, 73, 184, 0.12)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
            <div
              style={{
                width: '140px',
                height: '140px',
                borderRadius: '50%',
                backgroundColor: COLORS.BG_BASE,
                border: `4px solid ${COLORS.COBALT_BLUE}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <TrendingUp size={76} color={COLORS.COBALT_BLUE} strokeWidth={2.8} />
            </div>
            <div>
              <span
                style={{
                  fontFamily: FONTS.heading,
                  fontSize: '48px',
                  fontWeight: 800,
                  color: COLORS.INK_MUTED,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                Traded Live on the Stock Market
              </span>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '28px', marginTop: '8px' }}>
                <span
                  style={{
                    fontFamily: FONTS.heading,
                    fontSize: '124px',
                    fontWeight: 900,
                    color: COLORS.INK_PRIMARY,
                    letterSpacing: '-0.04em',
                    lineHeight: 1,
                  }}
                >
                  $VOO
                </span>
                <span
                  style={{
                    fontFamily: FONTS.heading,
                    fontSize: '88px',
                    fontWeight: 900,
                    color: COLORS.PINE_JADE,
                  }}
                >
                  $706.29
                </span>
              </div>
            </div>
          </div>

          <div
            style={{
              padding: '18px 40px',
              borderRadius: '999px',
              backgroundColor: COLORS.PINE_JADE_BG,
              border: `3px solid ${COLORS.PINE_JADE}`,
            }}
          >
            <span
              style={{
                fontFamily: FONTS.heading,
                fontSize: '48px',
                fontWeight: 800,
                color: COLORS.PINE_JADE,
              }}
            >
              ● Market Open
            </span>
          </div>
        </div>

        {/* Comparison: Stock Features */}
        <div style={{ display: 'flex', gap: '30px', width: '100%' }}>
          <div
            style={{
              flex: 1,
              backgroundColor: COLORS.BG_ELEVATED,
              borderRadius: '42px',
              border: `3px solid ${COLORS.INK_PRIMARY}18`,
              padding: '44px 48px',
              display: 'flex',
              alignItems: 'center',
              gap: '32px',
              opacity: rowPop1,
              transform: `translateX(${interpolate(rowPop1, [0, 1], [-30, 0])}px)`,
              boxShadow: '0 24px 50px rgba(20, 18, 16, 0.05)',
            }}
          >
            <CheckCircle2 size={72} color={COLORS.PINE_JADE} strokeWidth={2.8} />
            <div>
              <span
                style={{
                  fontFamily: FONTS.heading,
                  fontSize: '62px',
                  fontWeight: 900,
                  color: COLORS.INK_PRIMARY,
                  display: 'block',
                  marginBottom: '6px',
                }}
              >
                Instant Trades
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <span style={{ fontSize: '48px', color: COLORS.PINE_JADE, fontWeight: 900 }}>•</span>
                <span
                  style={{
                    fontFamily: FONTS.heading,
                    fontSize: '52px',
                    fontWeight: 800,
                    color: COLORS.INK_SECONDARY,
                  }}
                >
                  Executes in Seconds During Market Hours
                </span>
              </div>
            </div>
          </div>

          <div
            style={{
              flex: 1,
              backgroundColor: COLORS.BG_ELEVATED,
              borderRadius: '42px',
              border: `3px solid ${COLORS.INK_PRIMARY}18`,
              padding: '44px 48px',
              display: 'flex',
              alignItems: 'center',
              gap: '32px',
              opacity: rowPop2,
              transform: `translateX(${interpolate(rowPop2, [0, 1], [30, 0])}px)`,
              boxShadow: '0 24px 50px rgba(20, 18, 16, 0.05)',
            }}
          >
            <ArrowRightLeft size={72} color={COLORS.COBALT_BLUE} strokeWidth={2.8} />
            <div>
              <span
                style={{
                  fontFamily: FONTS.heading,
                  fontSize: '62px',
                  fontWeight: 900,
                  color: COLORS.INK_PRIMARY,
                  display: 'block',
                  marginBottom: '6px',
                }}
              >
                Live Prices
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <span style={{ fontSize: '48px', color: COLORS.COBALT_BLUE, fontWeight: 900 }}>•</span>
                <span
                  style={{
                    fontFamily: FONTS.heading,
                    fontSize: '52px',
                    fontWeight: 800,
                    color: COLORS.INK_SECONDARY,
                  }}
                >
                  Fluctuates Continuously All Day Long
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LeftZone>
  );
};

// ==========================================
// BEAT 3.4: POOLED ACCOUNT & SLICING ANALOGY
// ==========================================
const Beat3_4_AccountSlices: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const card1 = spring({ frame: frame - 10, fps, config: SPRING_SMOOTH });
  const card2 = spring({ frame: frame - 45, fps, config: SPRING_SMOOTH });

  return (
    <LeftZone>
      <SectionHeader
        badge="The Visual Analogy"
        badgeColor={COLORS.OCHRE_GOLD}
        title="1 Giant Account → Millions of Slices"
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '34px', width: '100%' }}>
        {/* Step 1: Giant Account */}
        <div
          style={{
            backgroundColor: COLORS.BG_ELEVATED,
            borderRadius: '46px',
            border: `3px solid ${COLORS.INK_PRIMARY}18`,
            padding: '48px 58px',
            display: 'flex',
            alignItems: 'center',
            gap: '44px',
            opacity: card1,
            transform: `translateY(${interpolate(card1, [0, 1], [30, 0])}px)`,
            boxShadow: '0 24px 50px rgba(20, 18, 16, 0.05)',
          }}
        >
          <div
            style={{
              width: '140px',
              height: '140px',
              borderRadius: '50%',
              backgroundColor: COLORS.BG_BASE,
              border: `4px solid ${COLORS.OCHRE_GOLD}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <Briefcase size={74} color={COLORS.OCHRE_GOLD} strokeWidth={2.6} />
          </div>
          <div>
            <span
              style={{
                fontFamily: FONTS.heading,
                fontSize: '48px',
                fontWeight: 800,
                color: COLORS.OCHRE_GOLD,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              Step 1: The Master Portfolio
            </span>
            <div
              style={{
                fontFamily: FONTS.heading,
                fontSize: '84px',
                fontWeight: 900,
                color: COLORS.INK_PRIMARY,
                lineHeight: 1.1,
                margin: '6px 0',
              }}
            >
              One Master Brokerage Account
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <span style={{ fontSize: '48px', color: COLORS.OCHRE_GOLD, fontWeight: 900 }}>•</span>
              <span
                style={{
                  fontFamily: FONTS.heading,
                  fontSize: '52px',
                  fontWeight: 800,
                  color: COLORS.INK_SECONDARY,
                }}
              >
                Holds Apple, Microsoft, NVIDIA & 497 More
              </span>
            </div>
          </div>
        </div>

        {/* Step 2: Sliced into shares */}
        <div
          style={{
            backgroundColor: COLORS.BG_ELEVATED,
            borderRadius: '46px',
            border: `4px solid ${COLORS.COBALT_BLUE}`,
            padding: '48px 58px',
            display: 'flex',
            alignItems: 'center',
            gap: '44px',
            opacity: card2,
            transform: `translateY(${interpolate(card2, [0, 1], [30, 0])}px)`,
            boxShadow: '0 28px 60px rgba(26, 73, 184, 0.12)',
          }}
        >
          <div
            style={{
              width: '140px',
              height: '140px',
              borderRadius: '50%',
              backgroundColor: COLORS.BG_BASE,
              border: `4px solid ${COLORS.COBALT_BLUE}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <PieChart size={74} color={COLORS.COBALT_BLUE} strokeWidth={2.6} />
          </div>
          <div>
            <span
              style={{
                fontFamily: FONTS.heading,
                fontSize: '48px',
                fontWeight: 800,
                color: COLORS.COBALT_BLUE,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              Step 2: Equal Division
            </span>
            <div
              style={{
                fontFamily: FONTS.heading,
                fontSize: '84px',
                fontWeight: 900,
                color: COLORS.INK_PRIMARY,
                lineHeight: 1.1,
                margin: '6px 0',
              }}
            >
              Cut into Millions of Equal Slices
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <span style={{ fontSize: '48px', color: COLORS.COBALT_BLUE, fontWeight: 900 }}>•</span>
              <span
                style={{
                  fontFamily: FONTS.heading,
                  fontSize: '52px',
                  fontWeight: 800,
                  color: COLORS.INK_SECONDARY,
                }}
              >
                1 Slice = Exactly 1 ETF Share (VOO)
              </span>
            </div>
          </div>
        </div>
      </div>
    </LeftZone>
  );
};

// ==========================================
// BEAT 3.5: INDIRECT OWNERSHIP PRINCIPLE
// ==========================================
const Beat3_5_IndirectOwnership: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const cardNo = spring({ frame: frame - 10, fps, config: SPRING_BOUNCE });
  const cardYes = spring({ frame: frame - 40, fps, config: SPRING_BOUNCE });

  return (
    <LeftZone>
      <SectionHeader
        badge="Key Takeaway"
        badgeColor={COLORS.PINE_JADE}
        title="Indirect vs. Direct Ownership"
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '34px', width: '100%' }}>
        {/* Misconception: Direct stock */}
        <div
          style={{
            backgroundColor: COLORS.BG_ELEVATED,
            borderRadius: '44px',
            border: `3px solid ${COLORS.CRIMSON}50`,
            padding: '46px 58px',
            display: 'flex',
            alignItems: 'center',
            gap: '40px',
            opacity: cardNo,
            transform: `translateX(${interpolate(cardNo, [0, 1], [-40, 0])}px)`,
            boxShadow: '0 20px 45px rgba(161, 59, 36, 0.06)',
          }}
        >
          <div
            style={{
              width: '130px',
              height: '130px',
              borderRadius: '50%',
              backgroundColor: COLORS.CRIMSON_BG,
              border: `4px solid ${COLORS.CRIMSON}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <XCircle size={74} color={COLORS.CRIMSON} strokeWidth={2.8} />
          </div>
          <div>
            <span
              style={{
                fontFamily: FONTS.heading,
                fontSize: '48px',
                fontWeight: 800,
                color: COLORS.CRIMSON,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}
            >
              Common Misunderstanding
            </span>
            <div
              style={{
                fontFamily: FONTS.heading,
                fontSize: '76px',
                fontWeight: 900,
                color: COLORS.INK_MUTED,
                textDecoration: 'line-through',
                lineHeight: 1.15,
                margin: '6px 0',
              }}
            >
              You don't directly own Apple stock
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <span style={{ fontSize: '48px', color: COLORS.CRIMSON, fontWeight: 900 }}>•</span>
              <span
                style={{
                  fontFamily: FONTS.heading,
                  fontSize: '52px',
                  fontWeight: 800,
                  color: COLORS.INK_SECONDARY,
                }}
              >
                No Direct Shares in Your Name
              </span>
            </div>
          </div>
        </div>

        {/* Reality: Sliced fund */}
        <div
          style={{
            backgroundColor: COLORS.BG_ELEVATED,
            borderRadius: '44px',
            border: `4px solid ${COLORS.PINE_JADE}`,
            padding: '46px 58px',
            display: 'flex',
            alignItems: 'center',
            gap: '40px',
            opacity: cardYes,
            transform: `translateX(${interpolate(cardYes, [0, 1], [40, 0])}px)`,
            boxShadow: '0 28px 60px rgba(8, 99, 67, 0.14)',
          }}
        >
          <div
            style={{
              width: '130px',
              height: '130px',
              borderRadius: '50%',
              backgroundColor: COLORS.PINE_JADE_BG,
              border: `4px solid ${COLORS.PINE_JADE}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <CheckCircle2 size={74} color={COLORS.PINE_JADE} strokeWidth={2.8} />
          </div>
          <div>
            <span
              style={{
                fontFamily: FONTS.heading,
                fontSize: '48px',
                fontWeight: 800,
                color: COLORS.PINE_JADE,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}
            >
              What You Actually Own
            </span>
            <div
              style={{
                fontFamily: FONTS.heading,
                fontSize: '80px',
                fontWeight: 900,
                color: COLORS.INK_PRIMARY,
                lineHeight: 1.12,
                margin: '6px 0',
              }}
            >
              A slice of an account that owns Apple
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <Check size={42} color={COLORS.PINE_JADE} strokeWidth={3.5} />
              <span
                style={{
                  fontFamily: FONTS.heading,
                  fontSize: '52px',
                  fontWeight: 800,
                  color: COLORS.PINE_JADE,
                }}
              >
                Direct Legal Slice of the Master Trust
              </span>
            </div>
          </div>
        </div>
      </div>
    </LeftZone>
  );
};

// ==========================================
// BEAT 3.6: THE "WRAPPER" CONCEPT
// ==========================================
const Beat3_6_Wrapper: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const heroPop = spring({ frame: frame - 8, fps, config: SPRING_SMOOTH });

  return (
    <LeftZone>
      <SectionHeader
        badge="The Mental Model"
        badgeColor={COLORS.OCHRE_GOLD}
        title="An ETF is Just a 'Wrapper'"
      />

      <div
        style={{
          backgroundColor: COLORS.BG_ELEVATED,
          borderRadius: '50px',
          border: `4px solid ${COLORS.OCHRE_GOLD}`,
          padding: '64px 72px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '52px',
          opacity: heroPop,
          transform: `scale(${interpolate(heroPop, [0, 1], [0.94, 1])})`,
          boxShadow: '0 32px 64px rgba(158, 111, 24, 0.14)',
        }}
      >
        <div
          style={{
            width: '170px',
            height: '170px',
            borderRadius: '50%',
            backgroundColor: COLORS.BG_BASE,
            border: `4px solid ${COLORS.OCHRE_GOLD}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <Box size={96} color={COLORS.OCHRE_GOLD} strokeWidth={2.6} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <span
            style={{
              fontFamily: FONTS.heading,
              fontSize: '48px',
              fontWeight: 800,
              color: COLORS.OCHRE_GOLD,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}
          >
            Vehicle Structure
          </span>
          <span
            style={{
              fontFamily: FONTS.heading,
              fontSize: '100px',
              fontWeight: 900,
              color: COLORS.INK_PRIMARY,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
            }}
          >
            The Legal Container
          </span>
          <span
            style={{
              fontFamily: FONTS.body,
              fontSize: '56px',
              fontWeight: 700,
              color: COLORS.INK_SECONDARY,
              marginTop: '6px',
            }}
          >
            You are simply investing in the container that packages the assets.
          </span>
        </div>
      </div>
    </LeftZone>
  );
};

// ==========================================
// BEAT 3.7: ASSET CLASS AGNOSTICISM
// ==========================================
const Beat3_7_Agnostic: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const assets = [
    {
      name: 'Stocks',
      icon: <TrendingUp size={78} color={COLORS.COBALT_BLUE} strokeWidth={2.8} />,
      color: COLORS.COBALT_BLUE,
      sub: 'VOO, QQQ, VTI',
    },
    {
      name: 'Bonds',
      icon: <Building2 size={78} color={COLORS.PINE_JADE} strokeWidth={2.8} />,
      color: COLORS.PINE_JADE,
      sub: 'BND, TLT, SGOV',
    },
    {
      name: 'Gold & Assets',
      icon: <Gem size={78} color={COLORS.OCHRE_GOLD} strokeWidth={2.8} />,
      color: COLORS.OCHRE_GOLD,
      sub: 'GLD, IAU, DBC',
    },
  ];

  return (
    <LeftZone>
      <SectionHeader
        badge="Universality"
        badgeColor={COLORS.COBALT_BLUE}
        title="Works Across Any Asset Class"
      />

      <div style={{ display: 'flex', gap: '30px', width: '100%' }}>
        {assets.map((asset, idx) => {
          const pop = spring({ frame: frame - 10 - idx * 16, fps, config: SPRING_BOUNCE });
          return (
            <div
              key={idx}
              style={{
                flex: 1,
                backgroundColor: COLORS.BG_ELEVATED,
                borderRadius: '42px',
                border: `3px solid ${COLORS.INK_PRIMARY}18`,
                padding: '52px 38px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: '26px',
                opacity: pop,
                transform: `translateY(${interpolate(pop, [0, 1], [40, 0])}px)`,
                boxShadow: '0 24px 50px rgba(20, 18, 16, 0.05)',
              }}
            >
              <div
                style={{
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  backgroundColor: COLORS.BG_BASE,
                  border: `4px solid ${asset.color}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {asset.icon}
              </div>

              <span
                style={{
                  fontFamily: FONTS.heading,
                  fontSize: '76px',
                  fontWeight: 900,
                  color: COLORS.INK_PRIMARY,
                  lineHeight: 1.1,
                }}
              >
                {asset.name}
              </span>

              <span
                style={{
                  fontFamily: FONTS.body,
                  fontSize: '52px',
                  fontWeight: 800,
                  color: asset.color,
                }}
              >
                {asset.sub}
              </span>
            </div>
          );
        })}
      </div>
    </LeftZone>
  );
};

// ==========================================
// MASTER EXPORT COMPONENT
// ==========================================
export const WhatIsAnEtfBlock3: React.FC = () => {
  return (
    <AbsoluteFill style={{ overflow: 'hidden' }}>
      <EditorialBackground />

      {/* Beat 3.1: 0 - 240 (4s) */}
      <Sequence from={0} durationInFrames={240}>
        <Beat3_1_Acronym />
      </Sequence>

      {/* Beat 3.2: 240 - 840 (10s) */}
      <Sequence from={240} durationInFrames={600}>
        <Beat3_2_Fund />
      </Sequence>

      {/* Beat 3.3: 840 - 1140 (5s) */}
      <Sequence from={840} durationInFrames={300}>
        <Beat3_3_Exchange />
      </Sequence>

      {/* Beat 3.4: 1140 - 1740 (10s) */}
      <Sequence from={1140} durationInFrames={600}>
        <Beat3_4_AccountSlices />
      </Sequence>

      {/* Beat 3.5: 1740 - 2010 (4.5s) */}
      <Sequence from={1740} durationInFrames={270}>
        <Beat3_5_IndirectOwnership />
      </Sequence>

      {/* Beat 3.6: 2010 - 2150 (2.3s) */}
      <Sequence from={2010} durationInFrames={140}>
        <Beat3_6_Wrapper />
      </Sequence>

      {/* Beat 3.7: 2150 - 2280 (2.2s) */}
      <Sequence from={2150} durationInFrames={130}>
        <Beat3_7_Agnostic />
      </Sequence>
    </AbsoluteFill>
  );
};
