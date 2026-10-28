/**
 * BLOCK 13: MASTER ETF PRIMER SUMMARY — 7 UNIQUE VISUAL RECAP MODULES
 * Canvas: Native 4K UHD (3840 x 2160), 60 FPS
 * Layout: Strict 60/40 Split (Left 2304px visual graphics, Right empty for talking head)
 *
 * POLISHED FOR MAXIMUM READABILITY:
 * - NO small body text (No small 40-42px sentences crammed in paragraphs).
 * - Bullet badges, bold tags, and high-impact keyphrases with font sizes 56px - 72px+.
 * - Crisp, punchy scannability designed for mobile/1080p YouTube viewing.
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
  ArrowRight,
  Vote,
  Banknote,
  ShieldCheck,
  Building2,
  AlertTriangle,
  Flame,
  XOctagon,
  CheckCircle2,
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

export const BLOCK_13_DURATION = 2520;

const EditorialBackground: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: COLORS.BG_BASE }}>
    <svg style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0.18 }}>
      <defs>
        <pattern id="b13-grid" x="0" y="0" width="56" height="56" patternUnits="userSpaceOnUse">
          <circle cx="8" cy="8" r="2.5" fill={COLORS.INK_MUTED} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#b13-grid)" />
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

const RecapHeader: React.FC<{
  num: string;
  category: string;
  title: string;
  color?: string;
  delay?: number;
}> = ({ num, category, title, color = COLORS.OCHRE_GOLD, delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const pop = spring({ frame: frame - delay, fps, config: SPRING_SMOOTH });

  return (
    <div
      style={{
        marginBottom: '44px',
        opacity: pop,
        transform: `translateY(${interpolate(pop, [0, 1], [30, 0])}px)`,
      }}
    >
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '16px',
          padding: '12px 32px',
          borderRadius: '999px',
          backgroundColor: COLORS.BG_ELEVATED,
          border: `3px solid ${color}`,
          marginBottom: '20px',
          boxShadow: '0 8px 24px rgba(20, 18, 16, 0.05)',
        }}
      >
        <span
          style={{
            fontFamily: FONTS.heading,
            fontSize: '48px',
            fontWeight: 800,
            color,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
          }}
        >
          {num} • {category}
        </span>
      </div>
      <h1
        style={{
          fontFamily: FONTS.heading,
          fontSize: '118px',
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
// RECAP 1: THE WRAPPER (Basket Cut into Slices)
// Bold Bulleted Blueprint
// ==========================================
const Beat13_1_WrapperRecap: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const leftPop = spring({ frame: frame - 15, fps, config: SPRING_SNAPPY });
  const arrowPop = spring({ frame: frame - 30, fps, config: SPRING_SNAPPY });
  const rightPop = spring({ frame: frame - 45, fps, config: SPRING_SNAPPY });

  return (
    <LeftZone>
      <RecapHeader
        num="RECAP 01"
        category="STRUCTURE"
        title="One Master Basket Cut Into Millions of Slices"
        color={COLORS.OCHRE_GOLD}
      />

      <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
        {/* Master Basket */}
        <div
          style={{
            flex: 1,
            backgroundColor: COLORS.BG_ELEVATED,
            borderRadius: '48px',
            border: `4px solid ${COLORS.OCHRE_GOLD}`,
            padding: '54px 50px',
            opacity: leftPop,
            transform: `scale(${interpolate(leftPop, [0, 1], [0.94, 1])})`,
            boxShadow: '0 20px 50px rgba(158, 111, 24, 0.12)',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '26px',
                backgroundColor: COLORS.OCHRE_GOLD_BG,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Layers size={60} color={COLORS.OCHRE_GOLD} strokeWidth={2.4} />
            </div>
            <div>
              <span style={{ fontFamily: FONTS.heading, fontSize: '48px', fontWeight: 800, color: COLORS.OCHRE_GOLD, textTransform: 'uppercase' }}>
                The Container
              </span>
              <div style={{ fontFamily: FONTS.heading, fontSize: '72px', fontWeight: 900, color: COLORS.INK_PRIMARY, lineHeight: 1 }}>
                Pooled Basket
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <Check size={40} color={COLORS.PINE_JADE} strokeWidth={3.5} />
              <span style={{ fontFamily: FONTS.heading, fontSize: '56px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
                Holds 500 Stocks
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <Check size={40} color={COLORS.PINE_JADE} strokeWidth={3.5} />
              <span style={{ fontFamily: FONTS.heading, fontSize: '56px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
                Single Legal Trust
              </span>
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div
          style={{
            opacity: arrowPop,
            transform: `scale(${arrowPop})`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ArrowRight size={76} color={COLORS.OCHRE_GOLD} strokeWidth={3.5} />
        </div>

        {/* Micro-Slices */}
        <div
          style={{
            flex: 1,
            backgroundColor: COLORS.BG_ELEVATED,
            borderRadius: '48px',
            border: `4px solid ${COLORS.COBALT_BLUE}`,
            padding: '54px 50px',
            opacity: rightPop,
            transform: `scale(${interpolate(rightPop, [0, 1], [0.94, 1])})`,
            boxShadow: '0 20px 50px rgba(26, 73, 184, 0.12)',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '26px',
                backgroundColor: COLORS.COBALT_BLUE_BG,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ fontFamily: FONTS.heading, fontSize: '48px', fontWeight: 900, color: COLORS.COBALT_BLUE }}>
                1/M
              </span>
            </div>
            <div>
              <span style={{ fontFamily: FONTS.heading, fontSize: '48px', fontWeight: 800, color: COLORS.COBALT_BLUE, textTransform: 'uppercase' }}>
                Unit Slices
              </span>
              <div style={{ fontFamily: FONTS.heading, fontSize: '72px', fontWeight: 900, color: COLORS.INK_PRIMARY, lineHeight: 1 }}>
                Exchange Shares
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <Check size={40} color={COLORS.COBALT_BLUE} strokeWidth={3.5} />
              <span style={{ fontFamily: FONTS.heading, fontSize: '56px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
                Trades Like A Stock
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <Check size={40} color={COLORS.COBALT_BLUE} strokeWidth={3.5} />
              <span style={{ fontFamily: FONTS.heading, fontSize: '56px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
                Real-Time Pricing
              </span>
            </div>
          </div>
        </div>
      </div>
    </LeftZone>
  );
};

// ==========================================
// RECAP 2: FRACTIONAL WEIGHTING
// $100 Allocation Bar ($8 NVDA, $7 MSFT, 1¢ Smallest)
// ==========================================
const Beat13_2_WeightingRecap: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const barPop = spring({ frame: frame - 15, fps, config: SPRING_SMOOTH });

  return (
    <LeftZone>
      <RecapHeader
        num="RECAP 02"
        category="PORTFOLIO MECHANICS"
        title="Market-Cap Weighting: $100 Sliced by Size"
        color={COLORS.COBALT_BLUE}
      />

      <div
        style={{
          backgroundColor: COLORS.BG_ELEVATED,
          borderRadius: '48px',
          border: `4px solid ${COLORS.COBALT_BLUE}`,
          padding: '52px',
          boxShadow: '0 20px 50px rgba(26, 73, 184, 0.10)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
          <span style={{ fontFamily: FONTS.heading, fontSize: '54px', fontWeight: 900, color: COLORS.INK_PRIMARY }}>
            Your $100 In VOO
          </span>
          <span style={{ fontFamily: FONTS.heading, fontSize: '48px', fontWeight: 800, color: COLORS.COBALT_BLUE }}>
            500 Holdings Total
          </span>
        </div>

        {/* Visual Allocation Podiums */}
        <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-end', height: '360px', opacity: barPop }}>
          <div
            style={{
              flex: 8,
              height: '100%',
              backgroundColor: COLORS.COBALT_BLUE,
              borderRadius: '28px',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              color: '#FFFFFF',
            }}
          >
            <span style={{ fontFamily: FONTS.heading, fontSize: '48px', fontWeight: 800 }}>NVIDIA</span>
            <span style={{ fontFamily: FONTS.heading, fontSize: '84px', fontWeight: 900 }}>~$8.00</span>
          </div>

          <div
            style={{
              flex: 7,
              height: '88%',
              backgroundColor: 'rgba(26, 73, 184, 0.85)',
              borderRadius: '28px',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              color: '#FFFFFF',
            }}
          >
            <span style={{ fontFamily: FONTS.heading, fontSize: '48px', fontWeight: 800 }}>Apple / MSFT</span>
            <span style={{ fontFamily: FONTS.heading, fontSize: '84px', fontWeight: 900 }}>~$7.00</span>
          </div>

          <div
            style={{
              flex: 5,
              height: '65%',
              backgroundColor: 'rgba(26, 73, 184, 0.60)',
              borderRadius: '28px',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              color: '#FFFFFF',
            }}
          >
            <span style={{ fontFamily: FONTS.heading, fontSize: '48px', fontWeight: 800 }}>Top 10 Total</span>
            <span style={{ fontFamily: FONTS.heading, fontSize: '72px', fontWeight: 900 }}>~$35.00</span>
          </div>

          <div
            style={{
              flex: 5.5,
              height: '56%',
              backgroundColor: COLORS.BG_RECESSED,
              border: `3px solid ${COLORS.INK_MUTED}`,
              borderRadius: '28px',
              padding: '22px 26px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              color: COLORS.INK_PRIMARY,
              boxSizing: 'border-box',
            }}
          >
            <span
              style={{
                fontFamily: FONTS.heading,
                fontSize: '48px',
                fontWeight: 800,
                whiteSpace: 'nowrap',
                lineHeight: 1.1,
              }}
            >
              #500 Smallest
            </span>
            <span
              style={{
                fontFamily: FONTS.heading,
                fontSize: '64px',
                fontWeight: 900,
                color: COLORS.PINE_JADE,
                lineHeight: 1,
              }}
            >
              $0.01
            </span>
          </div>
        </div>
      </div>
    </LeftZone>
  );
};

// ==========================================
// RECAP 3: INTERMEDIATED RIGHTS
// Bulleted Cards: Votes & Cash Flow
// ==========================================
const Beat13_3_RightsRecap: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const c1 = spring({ frame: frame - 15, fps, config: SPRING_SNAPPY });
  const c2 = spring({ frame: frame - 35, fps, config: SPRING_SNAPPY });

  return (
    <LeftZone>
      <RecapHeader
        num="RECAP 03"
        category="LEGAL OWNERSHIP"
        title="Intermediated Rights: Fund Votes & Collects Cash"
        color={COLORS.PINE_JADE}
      />

      <div style={{ display: 'flex', gap: '32px', width: '100%' }}>
        {/* Voting Card */}
        <div
          style={{
            flex: 1,
            backgroundColor: COLORS.BG_ELEVATED,
            borderRadius: '48px',
            border: `4px solid ${COLORS.PINE_JADE}`,
            padding: '52px',
            opacity: c1,
            transform: `translateY(${interpolate(c1, [0, 1], [30, 0])}px)`,
            boxShadow: '0 20px 50px rgba(8, 99, 67, 0.10)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
              <div
                style={{
                  width: '90px',
                  height: '90px',
                  borderRadius: '24px',
                  backgroundColor: COLORS.PINE_JADE_BG,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Vote size={54} color={COLORS.PINE_JADE} strokeWidth={2.4} />
              </div>
              <span style={{ fontFamily: FONTS.heading, fontSize: '48px', fontWeight: 800, color: COLORS.PINE_JADE }}>
                PROXY VOTING
              </span>
            </div>
            <div style={{ fontFamily: FONTS.heading, fontSize: '74px', fontWeight: 900, color: COLORS.INK_PRIMARY, lineHeight: 1.1, marginBottom: '24px' }}>
              Fund Votes For You
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <Check size={42} color={COLORS.PINE_JADE} strokeWidth={3.5} />
              <span style={{ fontFamily: FONTS.heading, fontSize: '56px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
                0 Direct Shareholder Votes
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <Check size={42} color={COLORS.PINE_JADE} strokeWidth={3.5} />
              <span style={{ fontFamily: FONTS.heading, fontSize: '56px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
                Vanguard Casts Ballot
              </span>
            </div>
          </div>
        </div>

        {/* Dividends Card */}
        <div
          style={{
            flex: 1,
            backgroundColor: COLORS.BG_ELEVATED,
            borderRadius: '48px',
            border: `4px solid ${COLORS.OCHRE_GOLD}`,
            padding: '52px',
            opacity: c2,
            transform: `translateY(${interpolate(c2, [0, 1], [30, 0])}px)`,
            boxShadow: '0 20px 50px rgba(158, 111, 24, 0.10)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
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
                <Banknote size={54} color={COLORS.OCHRE_GOLD} strokeWidth={2.4} />
              </div>
              <span style={{ fontFamily: FONTS.heading, fontSize: '48px', fontWeight: 800, color: COLORS.OCHRE_GOLD }}>
                DIVIDEND FLOW
              </span>
            </div>
            <div style={{ fontFamily: FONTS.heading, fontSize: '74px', fontWeight: 900, color: COLORS.INK_PRIMARY, lineHeight: 1.1, marginBottom: '24px' }}>
              Cash Pass-Through
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <Check size={42} color={COLORS.OCHRE_GOLD} strokeWidth={3.5} />
              <span style={{ fontFamily: FONTS.heading, fontSize: '56px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
                Stored in Fund NAV
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <Check size={42} color={COLORS.OCHRE_GOLD} strokeWidth={3.5} />
              <span style={{ fontFamily: FONTS.heading, fontSize: '56px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
                Paid Out 4x Annually
              </span>
            </div>
          </div>
        </div>
      </div>
    </LeftZone>
  );
};

// ==========================================
// RECAP 4: EXPENSE RATIO RECAP
// 3 Pennies Metric + Big Bold Bullets
// ==========================================
const Beat13_4_ExpenseRecap: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const pop = spring({ frame: frame - 15, fps, config: SPRING_SMOOTH });

  return (
    <LeftZone>
      <RecapHeader
        num="RECAP 04"
        category="MANAGEMENT COSTS"
        title="Expense Ratio: No Bills, Skimmed Daily from NAV"
        color={COLORS.OCHRE_GOLD}
      />

      <div
        style={{
          backgroundColor: COLORS.BG_ELEVATED,
          borderRadius: '48px',
          border: `4px solid ${COLORS.OCHRE_GOLD}`,
          padding: '54px 64px',
          display: 'flex',
          alignItems: 'center',
          gap: '64px',
          opacity: pop,
          boxShadow: '0 24px 60px rgba(158, 111, 24, 0.12)',
        }}
      >
        <div style={{ textAlign: 'center', flexShrink: 0 }}>
          <div
            style={{
              fontFamily: FONTS.heading,
              fontSize: '190px',
              fontWeight: 900,
              color: COLORS.OCHRE_GOLD,
              lineHeight: 0.9,
              letterSpacing: '-0.05em',
            }}
          >
            3¢
          </div>
          <span
            style={{
              fontFamily: FONTS.heading,
              fontSize: '48px',
              fontWeight: 800,
              color: COLORS.INK_PRIMARY,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}
          >
            Per $100 / Year
          </span>
        </div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            <Check size={46} color={COLORS.PINE_JADE} strokeWidth={3.5} />
            <span style={{ fontFamily: FONTS.heading, fontSize: '58px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
              0.03% Annual Fee (VOO)
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            <Check size={46} color={COLORS.PINE_JADE} strokeWidth={3.5} />
            <span style={{ fontFamily: FONTS.heading, fontSize: '58px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
              No Invoices Sent
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            <Check size={46} color={COLORS.PINE_JADE} strokeWidth={3.5} />
            <span style={{ fontFamily: FONTS.heading, fontSize: '58px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
              Skimmed Daily from NAV
            </span>
          </div>
        </div>
      </div>
    </LeftZone>
  );
};

// ==========================================
// RECAP 5: TAX EFFICIENCY RECAP
// Clean Bullet Comparison
// ==========================================
const Beat13_5_TaxRecap: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const pop = spring({ frame: frame - 15, fps, config: SPRING_SMOOTH });

  return (
    <LeftZone>
      <RecapHeader
        num="RECAP 05"
        category="TAX SHIELD"
        title="In-Kind Redemptions: Zero Surprise Tax Bills"
        color={COLORS.PINE_JADE}
      />

      <div
        style={{
          backgroundColor: COLORS.BG_ELEVATED,
          borderRadius: '48px',
          border: `4px solid ${COLORS.PINE_JADE}`,
          padding: '54px 60px',
          display: 'flex',
          flexDirection: 'column',
          gap: '36px',
          opacity: pop,
          boxShadow: '0 24px 60px rgba(8, 99, 67, 0.12)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <ShieldCheck size={72} color={COLORS.PINE_JADE} strokeWidth={2.4} />
            <span style={{ fontFamily: FONTS.heading, fontSize: '64px', fontWeight: 900, color: COLORS.INK_PRIMARY }}>
              In-Kind Like-Asset Swaps
            </span>
          </div>
          <div
            style={{
              padding: '16px 36px',
              borderRadius: '20px',
              backgroundColor: COLORS.PINE_JADE_BG,
              fontFamily: FONTS.heading,
              fontSize: '48px',
              fontWeight: 900,
              color: COLORS.PINE_JADE,
            }}
          >
            $0 Capital Gains
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
          <div style={{ backgroundColor: COLORS.BG_RECESSED, borderRadius: '32px', padding: '36px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span style={{ fontFamily: FONTS.heading, fontSize: '48px', fontWeight: 800, color: COLORS.CRIMSON }}>
              Mutual Funds ❌
            </span>
            <span style={{ fontFamily: FONTS.heading, fontSize: '56px', fontWeight: 900, color: COLORS.INK_PRIMARY }}>
              Forced Stock Sales
            </span>
            <span style={{ fontFamily: FONTS.heading, fontSize: '48px', fontWeight: 700, color: COLORS.CRIMSON }}>
              • Dumps taxes on passive holders
            </span>
          </div>

          <div style={{ backgroundColor: COLORS.PINE_JADE_BG, borderRadius: '32px', padding: '36px', border: `3px solid ${COLORS.PINE_JADE}`, display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span style={{ fontFamily: FONTS.heading, fontSize: '48px', fontWeight: 800, color: COLORS.PINE_JADE }}>
              ETFs (VOO) ✅
            </span>
            <span style={{ fontFamily: FONTS.heading, fontSize: '56px', fontWeight: 900, color: COLORS.PINE_JADE }}>
              In-Kind Stock Handouts
            </span>
            <span style={{ fontFamily: FONTS.heading, fontSize: '48px', fontWeight: 700, color: COLORS.PINE_JADE }}>
              • Zero taxable sales inside fund
            </span>
          </div>
        </div>
      </div>
    </LeftZone>
  );
};

// ==========================================
// RECAP 6: CUSTODIAL SAFETY RECAP
// Manager vs Custodian Separation
// ==========================================
const Beat13_6_SafetyRecap: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const c1 = spring({ frame: frame - 15, fps, config: SPRING_SNAPPY });
  const c2 = spring({ frame: frame - 35, fps, config: SPRING_SNAPPY });

  return (
    <LeftZone>
      <RecapHeader
        num="RECAP 06"
        category="SAFETY"
        title="Custodial Separation: Safe Even If Manager Goes Under"
        color={COLORS.COBALT_BLUE}
      />

      <div style={{ display: 'flex', gap: '32px', width: '100%' }}>
        <div
          style={{
            flex: 1,
            backgroundColor: COLORS.BG_ELEVATED,
            borderRadius: '48px',
            border: `4px solid ${COLORS.COBALT_BLUE}`,
            padding: '52px',
            opacity: c1,
            transform: `translateY(${interpolate(c1, [0, 1], [30, 0])}px)`,
            boxShadow: '0 20px 50px rgba(26, 73, 184, 0.10)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
              <Building2 size={64} color={COLORS.COBALT_BLUE} strokeWidth={2.4} />
              <span style={{ fontFamily: FONTS.heading, fontSize: '48px', fontWeight: 800, color: COLORS.COBALT_BLUE }}>
                VANGUARD / SPONSOR
              </span>
            </div>
            <div style={{ fontFamily: FONTS.heading, fontSize: '72px', fontWeight: 900, color: COLORS.INK_PRIMARY, lineHeight: 1.1, marginBottom: '24px' }}>
              Hired Manager
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <Check size={42} color={COLORS.COBALT_BLUE} strokeWidth={3.5} />
              <span style={{ fontFamily: FONTS.heading, fontSize: '56px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
                Runs Daily Operations
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <Check size={42} color={COLORS.COBALT_BLUE} strokeWidth={3.5} />
              <span style={{ fontFamily: FONTS.heading, fontSize: '56px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
                Does NOT Own Assets
              </span>
            </div>
          </div>
        </div>

        <div
          style={{
            flex: 1,
            backgroundColor: COLORS.BG_ELEVATED,
            borderRadius: '48px',
            border: `4px solid ${COLORS.PINE_JADE}`,
            padding: '52px',
            opacity: c2,
            transform: `translateY(${interpolate(c2, [0, 1], [30, 0])}px)`,
            boxShadow: '0 20px 50px rgba(8, 99, 67, 0.10)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
              <CheckCircle2 size={64} color={COLORS.PINE_JADE} strokeWidth={2.4} />
              <span style={{ fontFamily: FONTS.heading, fontSize: '48px', fontWeight: 800, color: COLORS.PINE_JADE }}>
                CUSTODIAN BANK
              </span>
            </div>
            <div style={{ fontFamily: FONTS.heading, fontSize: '72px', fontWeight: 900, color: COLORS.INK_PRIMARY, lineHeight: 1.1, marginBottom: '24px' }}>
              Independent Vault
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <Check size={42} color={COLORS.PINE_JADE} strokeWidth={3.5} />
              <span style={{ fontFamily: FONTS.heading, fontSize: '56px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
                Stocks Locked in Trust
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <Check size={42} color={COLORS.PINE_JADE} strokeWidth={3.5} />
              <span style={{ fontFamily: FONTS.heading, fontSize: '56px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
                Protected From Bankruptcy
              </span>
            </div>
          </div>
        </div>
      </div>
    </LeftZone>
  );
};

// ==========================================
// RECAP 7: THE THREE HIDDEN RISKS
// 3 Punchy Red Hazard Badges
// ==========================================
const Beat13_7_RisksRecap: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const r1 = spring({ frame: frame - 15, fps, config: SPRING_SNAPPY });
  const r2 = spring({ frame: frame - 35, fps, config: SPRING_SNAPPY });
  const r3 = spring({ frame: frame - 55, fps, config: SPRING_SNAPPY });

  const hazards = [
    {
      num: '01',
      title: 'Wide Spreads',
      stat: '10¢+ Toll',
      bullet1: 'Illiquid Niche Funds',
      bullet2: 'Eats Annual Gains',
      pop: r1,
      icon: AlertTriangle,
    },
    {
      num: '02',
      title: 'Volatility Decay',
      stat: 'Daily Resets',
      bullet1: '2X & 3X Multipliers',
      bullet2: 'Math Drag Loss',
      pop: r2,
      icon: Flame,
    },
    {
      num: '03',
      title: 'Sudden Closures',
      stat: 'Forced Cash',
      bullet1: 'Low AUM Shutdowns',
      bullet2: 'Surprise Tax Bill',
      pop: r3,
      icon: XOctagon,
    },
  ];

  return (
    <LeftZone>
      <RecapHeader
        num="RECAP 07"
        category="HIDDEN RISKS"
        title="The 3 Red Flags to Watch in Every ETF"
        color={COLORS.CRIMSON}
      />

      <div style={{ display: 'flex', gap: '32px', width: '100%' }}>
        {hazards.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              style={{
                flex: 1,
                backgroundColor: COLORS.BG_ELEVATED,
                borderRadius: '48px',
                border: `4px solid ${COLORS.CRIMSON}`,
                padding: '48px 40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                opacity: item.pop,
                transform: `translateY(${interpolate(item.pop, [0, 1], [30, 0])}px)`,
                boxShadow: '0 20px 50px rgba(161, 59, 36, 0.12)',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <span style={{ fontFamily: FONTS.heading, fontSize: '48px', fontWeight: 800, color: COLORS.CRIMSON }}>
                    RISK {item.num}
                  </span>
                  <Icon size={56} color={COLORS.CRIMSON} strokeWidth={2.4} />
                </div>

                <div style={{ fontFamily: FONTS.heading, fontSize: '66px', fontWeight: 900, color: COLORS.INK_PRIMARY, lineHeight: 1.1 }}>
                  {item.title}
                </div>

                <div style={{ fontFamily: FONTS.heading, fontSize: '48px', fontWeight: 800, color: COLORS.CRIMSON, margin: '14px 0 24px 0' }}>
                  {item.stat}
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', borderTop: `3px solid ${COLORS.BG_RECESSED}`, paddingTop: '20px' }}>
                <div style={{ fontFamily: FONTS.heading, fontSize: '50px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
                  • {item.bullet1}
                </div>
                <div style={{ fontFamily: FONTS.heading, fontSize: '50px', fontWeight: 800, color: COLORS.CRIMSON }}>
                  • {item.bullet2}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </LeftZone>
  );
};

// ==========================================
// MASTER EXPORT
// ==========================================
export const WhatIsAnEtfBlock13: React.FC = () => {
  return (
    <AbsoluteFill style={{ overflow: 'hidden' }}>
      <EditorialBackground />

      {/* Beat 13.1: 0 - 360 (6s) */}
      <Sequence from={0} durationInFrames={360}>
        <Beat13_1_WrapperRecap />
      </Sequence>

      {/* Beat 13.2: 360 - 720 (6s) */}
      <Sequence from={360} durationInFrames={360}>
        <Beat13_2_WeightingRecap />
      </Sequence>

      {/* Beat 13.3: 720 - 1080 (6s) */}
      <Sequence from={720} durationInFrames={360}>
        <Beat13_3_RightsRecap />
      </Sequence>

      {/* Beat 13.4: 1080 - 1440 (6s) */}
      <Sequence from={1080} durationInFrames={360}>
        <Beat13_4_ExpenseRecap />
      </Sequence>

      {/* Beat 13.5: 1440 - 1800 (6s) */}
      <Sequence from={1440} durationInFrames={360}>
        <Beat13_5_TaxRecap />
      </Sequence>

      {/* Beat 13.6: 1800 - 2160 (6s) */}
      <Sequence from={1800} durationInFrames={360}>
        <Beat13_6_SafetyRecap />
      </Sequence>

      {/* Beat 13.7: 2160 - 2520 (6s) */}
      <Sequence from={2160} durationInFrames={360}>
        <Beat13_7_RisksRecap />
      </Sequence>
    </AbsoluteFill>
  );
};

export default WhatIsAnEtfBlock13;
