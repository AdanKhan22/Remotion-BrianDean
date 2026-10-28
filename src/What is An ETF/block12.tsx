/**
 * BLOCK 12: ETF DRAWBACK 3 — NICHE ETF CLOSURES & FORCED TAX LIQUIDATION
 * Canvas: Native 4K UHD (3840 x 2160), 60 FPS
 * Layout: Strict 60/40 Split (Left 2304px visual canvas, Right empty for talking head)
 *
 * POLISHED FOR MAXIMUM READABILITY:
 * - NO small body text (No small 38-44px paragraphs).
 * - Big bold bullet points (54px - 72px) and punchy scannable stats.
 * - Crisp, high-contrast, clean 4K typography.
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
  Skull,
  TrendingDown,
  Receipt,
  CheckCircle2,
  AlertTriangle,
  Flame,
  Check,
} from 'lucide-react';

const COLORS = {
  BG_BASE: '#F3EEE4',
  BG_ELEVATED: '#FAF6EC',
  BG_RECESSED: '#EAE3D3',

  INK_PRIMARY: '#141210',
  INK_SECONDARY: '#363127',
  INK_MUTED: '#5C5446',

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
const SPRING_SNAPPY = { damping: 24, stiffness: 180, mass: 0.8 };

export const BLOCK_12_DURATION = 1440;

const EditorialBackground: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: COLORS.BG_BASE }}>
    <svg style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0.18 }}>
      <defs>
        <pattern id="b12-grid" x="0" y="0" width="56" height="56" patternUnits="userSpaceOnUse">
          <circle cx="8" cy="8" r="2.5" fill={COLORS.INK_MUTED} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#b12-grid)" />
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
          fontSize: '122px',
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
// BEAT 12.1: FREQUENCY OF NICHE FUND CLOSURES
// Monumental Counter + Big Bold Extinction Bullets
// ==========================================
const Beat12_1_NicheClosures: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const countProgress = spring({ frame: frame - 15, fps, config: SPRING_SMOOTH });
  const displayCount = Math.floor(interpolate(countProgress, [0, 1], [0, 150]));
  const item1Pop = spring({ frame: frame - 40, fps, config: SPRING_SNAPPY });
  const item2Pop = spring({ frame: frame - 60, fps, config: SPRING_SNAPPY });

  return (
    <LeftZone>
      <SectionHeader
        badge="Drawback #3"
        badgeColor={COLORS.CRIMSON}
        title="Niche & Trendy ETFs Frequently Shut Down"
      />

      <div style={{ display: 'flex', gap: '36px', alignItems: 'stretch' }}>
        {/* Big Counter Column */}
        <div
          style={{
            flex: '0 0 820px',
            backgroundColor: COLORS.BG_ELEVATED,
            borderRadius: '48px',
            border: `4px solid ${COLORS.CRIMSON}`,
            padding: '56px 48px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            boxShadow: '0 24px 60px rgba(161, 59, 36, 0.12)',
          }}
        >
          <div
            style={{
              width: '130px',
              height: '130px',
              borderRadius: '50%',
              backgroundColor: COLORS.CRIMSON_BG,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px',
            }}
          >
            <Skull size={72} color={COLORS.CRIMSON} strokeWidth={2.4} />
          </div>
          <div
            style={{
              fontFamily: FONTS.heading,
              fontSize: '190px',
              fontWeight: 900,
              color: COLORS.CRIMSON,
              lineHeight: 0.9,
              letterSpacing: '-0.05em',
            }}
          >
            {displayCount}+
          </div>
          <span
            style={{
              fontFamily: FONTS.heading,
              fontSize: '48px',
              fontWeight: 900,
              color: COLORS.INK_PRIMARY,
              marginTop: '20px',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
            }}
          >
            ETFs Closed Yearly
          </span>
          <span
            style={{
              fontFamily: FONTS.heading,
              fontSize: '48px',
              fontWeight: 800,
              color: COLORS.CRIMSON,
              marginTop: '10px',
            }}
          >
            • Low AUM Shutdowns
          </span>
        </div>

        {/* Right 2 Extinction Reasons */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '28px' }}>
          <div
            style={{
              flex: 1,
              backgroundColor: COLORS.BG_ELEVATED,
              borderRadius: '44px',
              border: `3px solid ${COLORS.CRIMSON}`,
              padding: '44px 50px',
              display: 'flex',
              alignItems: 'center',
              gap: '36px',
              opacity: item1Pop,
              transform: `translateX(${interpolate(item1Pop, [0, 1], [40, 0])}px)`,
              boxShadow: '0 16px 40px rgba(20, 18, 16, 0.06)',
            }}
          >
            <div
              style={{
                width: '110px',
                height: '110px',
                borderRadius: '30px',
                backgroundColor: COLORS.CRIMSON_BG,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <TrendingDown size={60} color={COLORS.CRIMSON} strokeWidth={2.6} />
            </div>
            <div>
              <div style={{ fontFamily: FONTS.heading, fontSize: '66px', fontWeight: 900, color: COLORS.INK_PRIMARY, lineHeight: 1.1 }}>
                Unprofitable For Sponsor
              </div>
              <div style={{ fontFamily: FONTS.heading, fontSize: '48px', fontWeight: 700, color: COLORS.CRIMSON, marginTop: '8px' }}>
                • Cannot cover overhead costs
              </div>
            </div>
          </div>

          <div
            style={{
              flex: 1,
              backgroundColor: COLORS.BG_ELEVATED,
              borderRadius: '44px',
              border: `3px solid ${COLORS.OCHRE_GOLD}`,
              padding: '44px 50px',
              display: 'flex',
              alignItems: 'center',
              gap: '36px',
              opacity: item2Pop,
              transform: `translateX(${interpolate(item2Pop, [0, 1], [40, 0])}px)`,
              boxShadow: '0 16px 40px rgba(20, 18, 16, 0.06)',
            }}
          >
            <div
              style={{
                width: '110px',
                height: '110px',
                borderRadius: '30px',
                backgroundColor: COLORS.OCHRE_GOLD_BG,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Flame size={60} color={COLORS.OCHRE_GOLD} strokeWidth={2.6} />
            </div>
            <div>
              <div style={{ fontFamily: FONTS.heading, fontSize: '66px', fontWeight: 900, color: COLORS.INK_PRIMARY, lineHeight: 1.1 }}>
                Fad & Meme Burnout
              </div>
              <div style={{ fontFamily: FONTS.heading, fontSize: '48px', fontWeight: 700, color: COLORS.OCHRE_GOLD, marginTop: '8px' }}>
                • Hype dries up → Liquidity vanishes
              </div>
            </div>
          </div>
        </div>
      </div>
    </LeftZone>
  );
};

// ==========================================
// BEAT 12.2: FORCED TAX LIQUIDATION
// Dual Outcome Board + Involuntary Tax Stamp
// ==========================================
const Beat12_2_ForcedTaxes: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const cardPop = spring({ frame: frame - 15, fps, config: SPRING_SMOOTH });
  const stampPop = spring({ frame: frame - 45, fps, config: SPRING_SNAPPY });

  return (
    <LeftZone>
      <SectionHeader
        badge="Involuntary Liquidation"
        badgeColor={COLORS.CRIMSON}
        title="Forced Out With Surprise Capital Gains"
      />

      <div style={{ display: 'flex', gap: '36px', alignItems: 'stretch' }}>
        {/* Left Column: What Happens */}
        <div
          style={{
            flex: 1,
            backgroundColor: COLORS.BG_ELEVATED,
            borderRadius: '48px',
            border: `3px solid ${COLORS.INK_PRIMARY}`,
            padding: '54px 50px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            opacity: cardPop,
            transform: `translateY(${interpolate(cardPop, [0, 1], [30, 0])}px)`,
            boxShadow: '0 20px 50px rgba(20, 18, 16, 0.08)',
          }}
        >
          <div>
            <span
              style={{
                fontFamily: FONTS.heading,
                fontSize: '48px',
                fontWeight: 800,
                color: COLORS.OCHRE_GOLD,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}
            >
              Step 1: Involuntary Liquidation
            </span>
            <div
              style={{
                fontFamily: FONTS.heading,
                fontSize: '80px',
                fontWeight: 900,
                color: COLORS.INK_PRIMARY,
                lineHeight: 1.05,
                marginTop: '12px',
                marginBottom: '24px',
              }}
            >
              Paid Out in Cash
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <Check size={42} color={COLORS.PINE_JADE} strokeWidth={3.5} />
                <span style={{ fontFamily: FONTS.heading, fontSize: '52px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
                  Assets sold for cash value
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <Check size={42} color={COLORS.PINE_JADE} strokeWidth={3.5} />
                <span style={{ fontFamily: FONTS.heading, fontSize: '52px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
                  Deposited in your account
                </span>
              </div>
            </div>
          </div>

          <div
            style={{
              padding: '24px 32px',
              borderRadius: '24px',
              backgroundColor: COLORS.CRIMSON_BG,
              border: `2px solid ${COLORS.CRIMSON}`,
              display: 'inline-flex',
              alignItems: 'center',
              marginTop: '32px',
            }}
          >
            <span style={{ fontFamily: FONTS.heading, fontSize: '48px', fontWeight: 900, color: COLORS.CRIMSON }}>
              ⚠️ Date Chosen By Fund, Not You
            </span>
          </div>
        </div>

        {/* Right Column: The Tax Catch */}
        <div
          style={{
            flex: 1,
            backgroundColor: COLORS.BG_ELEVATED,
            borderRadius: '48px',
            border: `3px solid ${COLORS.CRIMSON}`,
            padding: '54px 50px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden',
            opacity: cardPop,
            transform: `translateY(${interpolate(cardPop, [0, 1], [30, 0])}px)`,
            boxShadow: '0 24px 60px rgba(161, 59, 36, 0.15)',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '12px' }}>
              <Receipt size={64} color={COLORS.CRIMSON} strokeWidth={2.4} />
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
                Step 2: IRS Tax Trigger
              </span>
            </div>

            <div
              style={{
                fontFamily: FONTS.heading,
                fontSize: '80px',
                fontWeight: 900,
                color: COLORS.INK_PRIMARY,
                lineHeight: 1.05,
                marginBottom: '24px',
              }}
            >
              Forced Capital Gains
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span style={{ fontFamily: FONTS.heading, fontSize: '50px', fontWeight: 800, color: COLORS.CRIMSON }}>
                  • Triggers taxable sales
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span style={{ fontFamily: FONTS.heading, fontSize: '50px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
                  • Affects regular brokerage accounts
                </span>
              </div>
            </div>
          </div>

          {/* Stamp overlay */}
          <div
            style={{
              alignSelf: 'flex-start',
              marginTop: '32px',
              padding: '20px 40px',
              borderRadius: '24px',
              border: `5px solid ${COLORS.CRIMSON}`,
              backgroundColor: COLORS.CRIMSON_BG,
              opacity: stampPop,
              transform: `scale(${interpolate(stampPop, [0, 1], [0.8, 1])}) rotate(-3deg)`,
            }}
          >
            <span
              style={{
                fontFamily: FONTS.heading,
                fontSize: '54px',
                fontWeight: 900,
                color: COLORS.CRIMSON,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              Unplanned Tax Bill ⚡
            </span>
          </div>
        </div>
      </div>
    </LeftZone>
  );
};

// ==========================================
// BEAT 12.3: SAFE ETF SELECTION CRITERIA
// 3 Golden Checklist Shield Pillars
// ==========================================
const Beat12_3_SafeSelection: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const p1 = spring({ frame: frame - 15, fps, config: SPRING_SNAPPY });
  const p2 = spring({ frame: frame - 35, fps, config: SPRING_SNAPPY });
  const p3 = spring({ frame: frame - 55, fps, config: SPRING_SNAPPY });

  const pillars = [
    {
      num: '01',
      title: 'High AUM',
      stat: '>$1 Billion',
      bullet1: 'Guaranteed viability',
      bullet2: 'Sponsor stays solvent',
      pop: p1,
    },
    {
      num: '02',
      title: 'Heavy Volume',
      stat: 'Millions/Day',
      bullet1: 'Tight 1¢ spreads',
      bullet2: 'Instant execution',
      pop: p2,
    },
    {
      num: '03',
      title: 'Benchmark Index',
      stat: 'S&P 500 / VTI',
      bullet1: 'Proven institutions',
      bullet2: 'Low tracking error',
      pop: p3,
    },
  ];

  return (
    <LeftZone>
      <SectionHeader
        badge="Safety Checklist"
        badgeColor={COLORS.PINE_JADE}
        title="3 Rules to Pick Safe, Resilient ETFs"
      />

      <div style={{ display: 'flex', gap: '32px', width: '100%' }}>
        {pillars.map((item, idx) => (
          <div
            key={idx}
            style={{
              flex: 1,
              backgroundColor: COLORS.BG_ELEVATED,
              borderRadius: '48px',
              border: `4px solid ${COLORS.PINE_JADE}`,
              padding: '48px 40px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              opacity: item.pop,
              transform: `translateY(${interpolate(item.pop, [0, 1], [40, 0])}px)`,
              boxShadow: '0 20px 50px rgba(8, 99, 67, 0.10)',
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span
                  style={{
                    fontFamily: FONTS.heading,
                    fontSize: '48px',
                    fontWeight: 900,
                    color: COLORS.PINE_JADE,
                    letterSpacing: '0.08em',
                  }}
                >
                  RULE {item.num}
                </span>
                <CheckCircle2 size={54} color={COLORS.PINE_JADE} strokeWidth={2.6} />
              </div>

              <div
                style={{
                  fontFamily: FONTS.heading,
                  fontSize: '70px',
                  fontWeight: 900,
                  color: COLORS.INK_PRIMARY,
                  lineHeight: 1.1,
                  marginBottom: '10px',
                }}
              >
                {item.title}
              </div>

              <div
                style={{
                  fontFamily: FONTS.heading,
                  fontSize: '56px',
                  fontWeight: 900,
                  color: COLORS.PINE_JADE,
                  marginBottom: '24px',
                }}
              >
                {item.stat}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', borderTop: `3px solid ${COLORS.BG_RECESSED}`, paddingTop: '20px' }}>
              <div style={{ fontFamily: FONTS.heading, fontSize: '48px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
                • {item.bullet1}
              </div>
              <div style={{ fontFamily: FONTS.heading, fontSize: '48px', fontWeight: 800, color: COLORS.INK_SECONDARY }}>
                • {item.bullet2}
              </div>
            </div>
          </div>
        ))}
      </div>
    </LeftZone>
  );
};

// ==========================================
// BEAT 12.4: ELEVATED RISK IN COMPLEX PRODUCTS
// Danger Podiums: Leveraged & Yield-Maxers
// ==========================================
const Beat12_4_ComplexProducts: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const c1 = spring({ frame: frame - 15, fps, config: SPRING_SNAPPY });
  const c2 = spring({ frame: frame - 35, fps, config: SPRING_SNAPPY });

  return (
    <LeftZone>
      <SectionHeader
        badge="Danger Zone"
        badgeColor={COLORS.CRIMSON}
        title="Avoid Complex Gimmicks & Yield Traps"
      />

      <div style={{ display: 'flex', gap: '36px', width: '100%' }}>
        {/* Trap 1: Leveraged */}
        <div
          style={{
            flex: 1,
            backgroundColor: COLORS.BG_ELEVATED,
            borderRadius: '48px',
            border: `4px solid ${COLORS.CRIMSON}`,
            padding: '54px 50px',
            opacity: c1,
            transform: `translateY(${interpolate(c1, [0, 1], [30, 0])}px)`,
            boxShadow: '0 24px 60px rgba(161, 59, 36, 0.12)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '18px', marginBottom: '20px' }}>
              <div
                style={{
                  width: '90px',
                  height: '90px',
                  borderRadius: '24px',
                  backgroundColor: COLORS.CRIMSON_BG,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <AlertTriangle size={54} color={COLORS.CRIMSON} strokeWidth={2.6} />
              </div>
              <span style={{ fontFamily: FONTS.heading, fontSize: '48px', fontWeight: 900, color: COLORS.CRIMSON }}>
                TRAP #1: MULTIPLIERS
              </span>
            </div>

            <div style={{ fontFamily: FONTS.heading, fontSize: '76px', fontWeight: 900, color: COLORS.INK_PRIMARY, lineHeight: 1.1, marginBottom: '24px' }}>
              2X & 3X Leveraged ETFs
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ fontFamily: FONTS.heading, fontSize: '50px', fontWeight: 800, color: COLORS.CRIMSON }}>
                • Built for day-trading only
              </div>
              <div style={{ fontFamily: FONTS.heading, fontSize: '50px', fontWeight: 800, color: COLORS.INK_SECONDARY }}>
                • Daily resets compound decay
              </div>
              <div style={{ fontFamily: FONTS.heading, fontSize: '50px', fontWeight: 800, color: COLORS.INK_SECONDARY }}>
                • Reverse splits hide loss
              </div>
            </div>
          </div>
        </div>

        {/* Trap 2: Yield-Maxing */}
        <div
          style={{
            flex: 1,
            backgroundColor: COLORS.BG_ELEVATED,
            borderRadius: '48px',
            border: `4px solid ${COLORS.OCHRE_GOLD}`,
            padding: '54px 50px',
            opacity: c2,
            transform: `translateY(${interpolate(c2, [0, 1], [30, 0])}px)`,
            boxShadow: '0 24px 60px rgba(158, 111, 24, 0.12)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '18px', marginBottom: '20px' }}>
              <div
                style={{
                  width: '90px',
                  height: '90px',
                  borderRadius: '24px',
                  backgroundColor: COLORS.OCHRE_GOLD_BG,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Flame size={54} color={COLORS.OCHRE_GOLD} strokeWidth={2.6} />
              </div>
              <span style={{ fontFamily: FONTS.heading, fontSize: '48px', fontWeight: 900, color: COLORS.OCHRE_GOLD }}>
                TRAP #2: EXOTIC INCOME
              </span>
            </div>

            <div style={{ fontFamily: FONTS.heading, fontSize: '76px', fontWeight: 900, color: COLORS.INK_PRIMARY, lineHeight: 1.1, marginBottom: '24px' }}>
              Yield-Maxing Option Funds
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ fontFamily: FONTS.heading, fontSize: '50px', fontWeight: 800, color: COLORS.CRIMSON }}>
                • 50%+ yield erodes principal
              </div>
              <div style={{ fontFamily: FONTS.heading, fontSize: '50px', fontWeight: 800, color: COLORS.INK_SECONDARY }}>
                • Caps all stock upside
              </div>
              <div style={{ fontFamily: FONTS.heading, fontSize: '50px', fontWeight: 800, color: COLORS.INK_SECONDARY }}>
                • High expense ratios (0.99%+)
              </div>
            </div>
          </div>
        </div>
      </div>
    </LeftZone>
  );
};

// ==========================================
// MASTER EXPORT
// ==========================================
export const WhatIsAnEtfBlock12: React.FC = () => {
  return (
    <AbsoluteFill style={{ overflow: 'hidden' }}>
      <EditorialBackground />

      {/* Beat 12.1: 0 - 360 (6s) */}
      <Sequence from={0} durationInFrames={360}>
        <Beat12_1_NicheClosures />
      </Sequence>

      {/* Beat 12.2: 360 - 720 (6s) */}
      <Sequence from={360} durationInFrames={360}>
        <Beat12_2_ForcedTaxes />
      </Sequence>

      {/* Beat 12.3: 720 - 1080 (6s) */}
      <Sequence from={720} durationInFrames={360}>
        <Beat12_3_SafeSelection />
      </Sequence>

      {/* Beat 12.4: 1080 - 1440 (6s) */}
      <Sequence from={1080} durationInFrames={360}>
        <Beat12_4_ComplexProducts />
      </Sequence>
    </AbsoluteFill>
  );
};

export default WhatIsAnEtfBlock12;
