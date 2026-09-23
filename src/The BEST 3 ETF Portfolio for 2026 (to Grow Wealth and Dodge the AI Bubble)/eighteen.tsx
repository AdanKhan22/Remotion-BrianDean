/**
 * REASONING STEP (v4 + Vertical Cash Vault & 2022 Stress Test Battlefield)
 * 1. User Feedback:
 *    - Eliminates repetitive horizontal boxes.
 *    - Fills the 2160px canvas vertically with a full-width cash vault card and 3 tall crisis columns.
 *    - High legibility: large 120-140px stats, clear visual hierarchy.
 * 2. Beat Breakdown:
 *    - Beat 1 (0-520 frames, ~17s): The SGOV Cash Vault & 3 Structural Pillars.
 *    - Beat 2 (520-1050 frames, ~17.5s): 2022 Crisis Stress Test (SGOV +1% vs BND -13% vs S&P -18%).
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
  Coins,
  Landmark,
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
  ACCENT_GREEN: '#2D6A4F',
};

const FONTS = {
  main: '"Inter", "DM Sans", sans-serif',
};

const SPRING_CONFIG = { damping: 200, stiffness: 120, mass: 0.8 };

const EditorialBackground: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: COLORS.BG_BASE }}>
    <svg style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0.22 }}>
      <defs>
        <pattern id="grid-b20" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
          <circle cx="6" cy="6" r="2.5" fill={COLORS.INK_TERTIARY} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-b20)" />
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

// --- BEAT 1: iShares SGOV Overview Website Mockup (Comments 31, 32, 33) ---
const Beat1_CashVault: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headerPop = spring({ frame: frame - 5, fps, config: SPRING_CONFIG });
  const browserPop = spring({ frame: frame - 18, fps, config: SPRING_CONFIG });

  const benefits = [
    {
      title: 'Zero Duration Risk',
      desc: '0–3 month maturities mean interest rate hikes cannot harm share price',
      icon: <ShieldCheck size={36} color={COLORS.ACCENT_HERO} />,
    },
    {
      title: 'Dry Powder for Crashes',
      desc: 'Liquid cash reserves ready to buy undervalued stocks during panic sell-offs',
      icon: <Coins size={36} color={COLORS.ACCENT_DETAIL} />,
    },
    {
      title: 'State Tax Exemption',
      desc: 'US Treasury interest is exempt from state and local income taxes',
      icon: <Landmark size={36} color={COLORS.ACCENT_GREEN} />,
    },
  ];

  return (
    <LeftZone>
      {/* Header */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          marginBottom: '36px',
          opacity: headerPop,
          transform: `translateY(${interpolate(headerPop, [0, 1], [30, 0])}px)`,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <ShieldCheck size={44} color={COLORS.ACCENT_HERO} />
          <span
            style={{
              fontFamily: FONTS.main,
              fontSize: '42px',
              fontWeight: 900,
              color: COLORS.ACCENT_HERO,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}
          >
            Diversifier Contender 1: SGOV
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
          Ultra-Short Treasury Bills
        </h1>
        <p style={{ fontFamily: FONTS.main, fontSize: '52px', fontWeight: 600, color: COLORS.INK_SECONDARY, margin: '12px 0 0 0' }}>
          BlackRock's cash-equivalent engine backed by the US Government
        </p>
      </div>

      {/* SGOV Website Mockup Card per Comment 31 */}
      <div
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '36px',
          border: `3.5px solid ${COLORS.BG_RECESSED}`,
          boxShadow: '0 32px 72px rgba(30, 27, 22, 0.12)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          transform: `translateY(${interpolate(browserPop, [0, 1], [35, 0])}px)`,
          opacity: browserPop,
        }}
      >
        {/* Browser Chrome Header */}
        <div
          style={{
            backgroundColor: '#EDE8DC',
            padding: '22px 36px',
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            borderBottom: `2.5px solid ${COLORS.BG_RECESSED}`,
          }}
        >
          <div style={{ display: 'flex', gap: '12px' }}>
            <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#FF5F56' }} />
            <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#FFBD2E' }} />
            <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#27C93F' }} />
          </div>

          <div
            style={{
              flex: 1,
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              padding: '12px 28px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              border: `2px solid ${COLORS.BG_RECESSED}`,
            }}
          >
            <span style={{ fontFamily: FONTS.main, fontSize: '34px', color: COLORS.INK_SECONDARY, fontWeight: 600 }}>
              ishares.com/us/products/314116/ishares-0-3-month-treasury-bond-etf
            </span>
            <span style={{ fontFamily: FONTS.main, fontSize: '30px', color: COLORS.ACCENT_HERO, fontWeight: 800, textTransform: 'uppercase' }}>
              Fund Profile
            </span>
          </div>
        </div>

        {/* Website Content Area */}
        <div style={{ padding: '46px 54px', display: 'flex', flexDirection: 'column', gap: '32px', backgroundColor: '#FAF6EC' }}>
          {/* Header Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '22px' }}>
              <div style={{ backgroundColor: '#1E1B16', borderRadius: '18px', padding: '12px 26px' }}>
                <span style={{ fontFamily: FONTS.main, fontSize: '48px', fontWeight: 900, color: '#FFFFFF', letterSpacing: '0.04em' }}>
                  SGOV
                </span>
              </div>
              <div>
                <h3 style={{ fontFamily: FONTS.main, fontSize: '52px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0 }}>
                  iShares 0-3 Month Treasury Bond ETF
                </h3>
                <span style={{ fontFamily: FONTS.main, fontSize: '36px', fontWeight: 700, color: COLORS.INK_SECONDARY }}>
                  NYSE Arca | BlackRock / iShares Cash Management
                </span>
              </div>
            </div>

            <div style={{ backgroundColor: `${COLORS.ACCENT_GREEN}18`, border: `2.5px solid ${COLORS.ACCENT_GREEN}55`, borderRadius: '22px', padding: '14px 28px' }}>
              <span style={{ fontFamily: FONTS.main, fontSize: '38px', fontWeight: 900, color: COLORS.ACCENT_GREEN }}>
                Cash Equivalent
              </span>
            </div>
          </div>

          {/* 3 Metric Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
            <div style={{ backgroundColor: '#FFFFFF', border: `3.5px solid ${COLORS.ACCENT_HERO}`, borderRadius: '28px', padding: '30px 34px' }}>
              <span style={{ fontFamily: FONTS.main, fontSize: '34px', fontWeight: 800, color: COLORS.ACCENT_HERO, textTransform: 'uppercase' }}>
                Current Yield
              </span>
              <div style={{ fontFamily: FONTS.main, fontSize: '100px', fontWeight: 900, color: COLORS.ACCENT_HERO, lineHeight: 1.05, margin: '8px 0' }}>
                ~4.0%
              </div>
              <span style={{ fontFamily: FONTS.main, fontSize: '36px', fontWeight: 700, color: COLORS.INK_PRIMARY }}>
                Risk-Free US Treasury Yield
              </span>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', border: `3.5px solid ${COLORS.ACCENT_DETAIL}`, borderRadius: '28px', padding: '30px 34px' }}>
              <span style={{ fontFamily: FONTS.main, fontSize: '34px', fontWeight: 800, color: COLORS.ACCENT_DETAIL, textTransform: 'uppercase' }}>
                Maturity
              </span>
              <div style={{ fontFamily: FONTS.main, fontSize: '100px', fontWeight: 900, color: COLORS.ACCENT_DETAIL, lineHeight: 1.05, margin: '8px 0' }}>
                0–3 Mo
              </div>
              <span style={{ fontFamily: FONTS.main, fontSize: '36px', fontWeight: 700, color: COLORS.INK_SECONDARY }}>
                Zero Duration Sensitivity
              </span>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', border: `3.5px solid ${COLORS.ACCENT_GREEN}`, borderRadius: '28px', padding: '30px 34px' }}>
              <span style={{ fontFamily: FONTS.main, fontSize: '34px', fontWeight: 800, color: COLORS.ACCENT_GREEN, textTransform: 'uppercase' }}>
                Expense Ratio
              </span>
              <div style={{ fontFamily: FONTS.main, fontSize: '100px', fontWeight: 900, color: COLORS.ACCENT_GREEN, lineHeight: 1.05, margin: '8px 0' }}>
                0.07%
              </div>
              <span style={{ fontFamily: FONTS.main, fontSize: '36px', fontWeight: 700, color: COLORS.INK_PRIMARY }}>
                Ultra-Low Expense Drag
              </span>
            </div>
          </div>

          {/* 3 Distinct Feature Bullets per Comment 33 */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            {benefits.map((b, idx) => (
              <div key={idx} style={{ backgroundColor: '#FFFFFF', border: `2.5px solid ${COLORS.BG_RECESSED}`, borderRadius: '22px', padding: '20px 24px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ flexShrink: 0, marginTop: '4px' }}>{b.icon}</div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontFamily: FONTS.main, fontSize: '38px', fontWeight: 900, color: COLORS.INK_PRIMARY }}>
                    {b.title}
                  </span>
                  <span style={{ fontFamily: FONTS.main, fontSize: '32px', fontWeight: 600, color: COLORS.INK_SECONDARY }}>
                    {b.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Takeaway */}
          <div style={{ backgroundColor: `${COLORS.ACCENT_GREEN}14`, borderLeft: `10px solid ${COLORS.ACCENT_GREEN}`, borderRadius: '18px', padding: '22px 34px' }}>
            <span style={{ fontFamily: FONTS.main, fontSize: '42px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
              Core Shield: 100% principal protection with immediate liquidity to buy crashes.
            </span>
          </div>
        </div>
      </div>
    </LeftZone>
  );
};

// --- BEAT 2: 2022 Crisis Stress Test (StockAnalysis Attribution per Comment 34) ---
const Beat2_CrisisBattlefield: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headerPop = spring({ frame: frame - 5, fps, config: SPRING_CONFIG });
  const col1 = spring({ frame: frame - 20, fps, config: SPRING_CONFIG });
  const col2 = spring({ frame: frame - 38, fps, config: SPRING_CONFIG });
  const col3 = spring({ frame: frame - 56, fps, config: SPRING_CONFIG });

  const columns = [
    {
      name: 'S&P 500 (VOO)',
      subtitle: 'Equity Crash',
      stat: '-18%',
      statColor: COLORS.ACCENT_NEGATIVE,
      borderTop: COLORS.ACCENT_NEGATIVE,
      badge: 'TECH BUBBLE DRAWDOWN',
      desc: 'Tech heavyweights plunged 30% to 50%, dragging broad market indices into deep red.',
      springVal: col1,
    },
    {
      name: 'Total Bond (BND)',
      subtitle: 'Worst Year in 50 Years',
      stat: '-13%',
      statColor: COLORS.ACCENT_NEGATIVE,
      borderTop: COLORS.ACCENT_NEGATIVE,
      badge: 'INTEREST RATE SHOCK',
      desc: 'Historic Federal Reserve rate hikes caused intermediate bonds to collapse alongside stocks.',
      springVal: col2,
    },
    {
      name: 'Treasury Cash (SGOV)',
      subtitle: 'Total Capital Defense',
      stat: '+1.0%',
      statColor: COLORS.ACCENT_GREEN,
      borderTop: COLORS.ACCENT_GREEN,
      badge: 'POSITIVE TOTAL RETURN',
      desc: 'Zero duration sensitivity allowed SGOV to preserve every dollar and yield rising income.',
      springVal: col3,
      isWinner: true,
    },
  ];

  return (
    <LeftZone>
      {/* Header */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          marginBottom: '36px',
          opacity: headerPop,
          transform: `translateY(${interpolate(headerPop, [0, 1], [30, 0])}px)`,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Award size={44} color={COLORS.ACCENT_HERO} />
          <span
            style={{
              fontFamily: FONTS.main,
              fontSize: '42px',
              fontWeight: 900,
              color: COLORS.ACCENT_HERO,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}
          >
            2022 Crisis Stress Test Proof
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
          When Stocks & Bonds Both Collapsed
        </h1>
        <p style={{ fontFamily: FONTS.main, fontSize: '52px', fontWeight: 600, color: COLORS.INK_SECONDARY, margin: '12px 0 0 0' }}>
          The brutal reality of inflation-driven rate shocks on traditional portfolios
        </p>
      </div>

      {/* 3 Tall Vertical Battlefield Columns */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '34px',
          width: '100%',
        }}
      >
        {columns.map((col) => {
          const pop = col.springVal;
          return (
            <div
              key={col.name}
              style={{
                backgroundColor: COLORS.BG_ELEVATED,
                border: col.isWinner ? `3.5px solid ${COLORS.ACCENT_GREEN}` : `3px solid ${COLORS.BG_RECESSED}`,
                borderTop: `16px solid ${col.borderTop}`,
                borderRadius: '34px',
                padding: '44px 38px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: col.isWinner ? '0 24px 56px rgba(45, 106, 79, 0.12)' : '0 16px 40px rgba(30, 27, 22, 0.05)',
                transform: `translateY(${interpolate(pop, [0, 1], [40, 0])}px)`,
                opacity: pop,
                minHeight: '620px',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <span
                  style={{
                    fontFamily: FONTS.main,
                    fontSize: '28px',
                    fontWeight: 800,
                    color: col.statColor,
                    backgroundColor: `${col.statColor}18`,
                    padding: '8px 18px',
                    borderRadius: '12px',
                    alignSelf: 'flex-start',
                    letterSpacing: '0.04em',
                  }}
                >
                  {col.badge}
                </span>
                <div
                  style={{
                    backgroundColor: COLORS.BG_BASE,
                    borderRadius: '28px',
                    padding: '40px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '8px',
                    border: `2px solid ${COLORS.BG_RECESSED}`,
                  }}
                >
                <span style={{ fontFamily: FONTS.main, fontSize: '30px', fontWeight: 700, color: COLORS.INK_TERTIARY, textTransform: 'uppercase' }}>
                  2022 Return
                </span>
                <span
                  style={{
                    fontFamily: FONTS.main,
                    fontSize: '110px',
                    fontWeight: 900,
                    color: col.statColor,
                    lineHeight: 0.95,
                  }}
                >
                  {col.stat}
                </span>
              </div>
            </div>

              {/* Bottom Verdict */}
              <span
                style={{
                  fontFamily: FONTS.main,
                  fontSize: '32px',
                  fontWeight: 700,
                  color: col.isWinner ? COLORS.ACCENT_GREEN : COLORS.INK_SECONDARY,
                  textAlign: 'center',
                }}
              >
                {col.isWinner ? '✓ Zero Loss of Principal' : '✗ Severe Capital Loss'}
              </span>
            </div>
          );
        })}
      </div>
    </LeftZone>
  );
};

export default function Block20_SGOVScene() {
  return (
    <AbsoluteFill style={{ overflow: 'hidden' }}>
      <Sequence from={0}>
        <EditorialBackground />
      </Sequence>

      <AbsoluteFill>
        {/* BEAT 1: 0 - 520 frames (~17s) */}
        <Sequence from={0} durationInFrames={520}>
          <Audio src={staticFile('pop-sfx.mp3')} volume={0.15} />
          <Beat1_CashVault />
        </Sequence>

        {/* BEAT 2: 520 - 1050 frames (~17.5s) */}
        <Sequence from={520}>
          <Audio src={staticFile('pop-sfx.mp3')} volume={0.15} />
          <Beat2_CrisisBattlefield />
        </Sequence>
      </AbsoluteFill>
    </AbsoluteFill>
  );
}
