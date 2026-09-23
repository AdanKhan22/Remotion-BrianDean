/**
 * BLOCK 17: Complementary Option C — DFIV (Dimensional International Value ETF)
 * Duration: 1050 frames (~35 seconds)
 * 
 * Multi-Beat Architecture:
 * - Beat 1 (0-520): DFIV Hero Value Dashboard & 3 Factor Screens (~500 Holdings, 0.27% Fee)
 * - Beat 2 (520-1050): 5-Year Alpha Shootout Leaderboard (DFIV +110% vs VOO +83% vs ACWX +35%)
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
  Layers,
  CheckCircle2,
  Trophy,
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
        <pattern id="grid-b17" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
          <circle cx="6" cy="6" r="2.5" fill={COLORS.INK_TERTIARY} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-b17)" />
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

// --- BEAT 1: DFIV Overview Website Mockup (Comment 28) ---
const Beat1_ValueDashboard: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headerPop = spring({ frame: frame - 5, fps, config: SPRING_CONFIG });
  const browserPop = spring({ frame: frame - 18, fps, config: SPRING_CONFIG });

  const tiers = [
    {
      title: 'Discounted Multiples',
      tag: 'Strict screening for low price-to-book and cash flows',
    },
    {
      title: 'Robust Profitability',
      tag: 'Filters out debt-heavy value traps and distressed firms',
    },
    {
      title: 'Blue-Chip Stability',
      tag: 'Top large-cap titans across Europe, Japan, and the UK',
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
          <Layers size={44} color={COLORS.ACCENT_HERO} />
          <span
            style={{
              fontFamily: FONTS.heading,
              fontSize: '44px',
              fontWeight: 800,
              color: COLORS.ACCENT_HERO,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}
          >
            Complementary Contender 3: DFIV
          </span>
        </div>
        <h1
          style={{
            fontFamily: FONTS.heading,
            fontSize: '112px',
            fontWeight: 900,
            color: COLORS.INK_PRIMARY,
            margin: 0,
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
          }}
        >
          International Large Value Titans
        </h1>
        <p style={{ fontFamily: FONTS.body, fontSize: '52px', fontWeight: 700, color: COLORS.INK_PRIMARY, margin: '14px 0 0 0' }}>
          Dimensional Fund Advisors' systematic value and profitability engine
        </p>
      </div>

      {/* Dimensional DFIV Overview Website Mockup Card */}
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
            <span style={{ fontFamily: FONTS.body, fontSize: '34px', color: COLORS.INK_SECONDARY, fontWeight: 600 }}>
              dimensional.com/us-en/funds/dfiv/international-value-etf
            </span>
            <span style={{ fontFamily: FONTS.body, fontSize: '30px', color: '#1D4ED8', fontWeight: 800, textTransform: 'uppercase' }}>
              Fund Profile
            </span>
          </div>
        </div>

        {/* Website Content Area */}
        <div style={{ padding: '46px 54px', display: 'flex', flexDirection: 'column', gap: '32px', backgroundColor: '#FAF6EC' }}>
          {/* Header Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '22px' }}>
              <div style={{ backgroundColor: '#1D4ED8', borderRadius: '18px', padding: '12px 26px' }}>
                <span style={{ fontFamily: FONTS.heading, fontSize: '48px', fontWeight: 900, color: '#FFFFFF', letterSpacing: '0.04em' }}>
                  DFIV
                </span>
              </div>
              <div>
                <h3 style={{ fontFamily: FONTS.heading, fontSize: '52px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0 }}>
                  Dimensional International Value ETF
                </h3>
                <span style={{ fontFamily: FONTS.body, fontSize: '36px', fontWeight: 700, color: COLORS.INK_SECONDARY }}>
                  NYSE Arca | Dimensional Fund Advisors
                </span>
              </div>
            </div>

            <div style={{ backgroundColor: '#1D4ED818', border: `2.5px solid #1D4ED855`, borderRadius: '22px', padding: '14px 28px' }}>
              <span style={{ fontFamily: FONTS.heading, fontSize: '38px', fontWeight: 900, color: '#1D4ED8' }}>
                Large-Cap Value
              </span>
            </div>
          </div>

          {/* 3 Metric Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
            <div style={{ backgroundColor: '#FFFFFF', border: `3.5px solid ${COLORS.ACCENT_DETAIL}`, borderRadius: '28px', padding: '30px 34px' }}>
              <span style={{ fontFamily: FONTS.heading, fontSize: '34px', fontWeight: 800, color: COLORS.ACCENT_DETAIL, textTransform: 'uppercase' }}>
                Expense Ratio
              </span>
              <div style={{ fontFamily: FONTS.heading, fontSize: '100px', fontWeight: 900, color: COLORS.ACCENT_DETAIL, lineHeight: 1.05, margin: '8px 0' }}>
                0.27%
              </div>
              <span style={{ fontFamily: FONTS.body, fontSize: '36px', fontWeight: 700, color: COLORS.INK_PRIMARY }}>
                25% Cheaper than AVDV
              </span>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', border: `3.5px solid ${COLORS.ACCENT_HERO}`, borderRadius: '28px', padding: '30px 34px' }}>
              <span style={{ fontFamily: FONTS.heading, fontSize: '34px', fontWeight: 800, color: COLORS.ACCENT_HERO, textTransform: 'uppercase' }}>
                Holdings Count
              </span>
              <div style={{ fontFamily: FONTS.heading, fontSize: '100px', fontWeight: 900, color: COLORS.INK_PRIMARY, lineHeight: 1.05, margin: '8px 0' }}>
                ~500
              </div>
              <span style={{ fontFamily: FONTS.body, fontSize: '36px', fontWeight: 700, color: COLORS.INK_SECONDARY }}>
                Undervalued Titans
              </span>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', border: `3.5px solid #1D4ED8`, borderRadius: '28px', padding: '30px 34px' }}>
              <span style={{ fontFamily: FONTS.heading, fontSize: '34px', fontWeight: 800, color: '#1D4ED8', textTransform: 'uppercase' }}>
                5-Year Return
              </span>
              <div style={{ fontFamily: FONTS.heading, fontSize: '100px', fontWeight: 900, color: '#1D4ED8', lineHeight: 1.05, margin: '8px 0' }}>
                +110%
              </div>
              <span style={{ fontFamily: FONTS.body, fontSize: '36px', fontWeight: 700, color: COLORS.INK_PRIMARY }}>
                #1 Among All Contenders
              </span>
            </div>
          </div>

          {/* 3 Factor Mandate Bullets */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            {tiers.map((t, idx) => (
              <div key={idx} style={{ backgroundColor: '#FFFFFF', border: `2.5px solid ${COLORS.BG_RECESSED}`, borderRadius: '22px', padding: '20px 24px', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <CheckCircle2 size={36} color={COLORS.ACCENT_HERO} style={{ flexShrink: 0, marginTop: '4px' }} />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontFamily: FONTS.heading, fontSize: '38px', fontWeight: 900, color: COLORS.INK_PRIMARY }}>
                    {t.title}
                  </span>
                  <span style={{ fontFamily: FONTS.body, fontSize: '32px', fontWeight: 600, color: COLORS.INK_SECONDARY }}>
                    {t.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Takeaway */}
          <div style={{ backgroundColor: '#1D4ED812', borderLeft: `10px solid #1D4ED8`, borderRadius: '18px', padding: '22px 34px' }}>
            <span style={{ fontFamily: FONTS.body, fontSize: '42px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
              Core Advantage: Large-cap stability without sacrificing deep value factor outperformance.
            </span>
          </div>
        </div>
      </div>
    </LeftZone>
  );
};

// --- BEAT 2: 5-Year Alpha Leaderboard Shootout ---
const Beat2_LeaderboardShootout: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headerPop = spring({ frame: frame - 5, fps, config: SPRING_CONFIG });
  const bar1 = spring({ frame: frame - 20, fps, config: SPRING_CONFIG });
  const bar2 = spring({ frame: frame - 38, fps, config: SPRING_CONFIG });
  const bar3 = spring({ frame: frame - 54, fps, config: SPRING_CONFIG });
  const pillPop = spring({ frame: frame - 70, fps, config: SPRING_CONFIG });

  const ranking = [
    {
      rank: '#1',
      ticker: 'DFIV',
      role: 'International Large Value',
      ret: '+110.0%',
      barWidth: 100,
      accent: COLORS.ACCENT_HERO,
      springVal: bar1,
      isWinner: true,
    },
    {
      rank: '#2',
      ticker: 'VOO',
      role: 'S&P 500 US Large-Cap',
      ret: '+83.0%',
      barWidth: 75,
      accent: COLORS.ACCENT_DETAIL,
      springVal: bar2,
      isWinner: false,
    },
    {
      rank: '#3',
      ticker: 'ACWX',
      role: 'Broad International Ex-US',
      ret: '+35.0%',
      barWidth: 32,
      accent: COLORS.INK_TERTIARY,
      springVal: bar3,
      isWinner: false,
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
          marginBottom: '38px',
          opacity: headerPop,
          transform: `translateY(${interpolate(headerPop, [0, 1], [30, 0])}px)`,
        }}
      >
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '16px' }}>
          <Trophy size={46} color={COLORS.ACCENT_HERO} />
          <span
            style={{
              fontFamily: FONTS.heading,
              fontSize: '44px',
              fontWeight: 800,
              color: COLORS.ACCENT_HERO,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}
          >
            5-Year Performance Comparison
          </span>
        </div>
        <h1
          style={{
            fontFamily: FONTS.heading,
            fontSize: '112px',
            fontWeight: 900,
            color: COLORS.INK_PRIMARY,
            margin: 0,
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
          }}
        >
          The Uncontested Value Champion
        </h1>
      </div>

      {/* Vertical Leaderboard Ladder */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', width: '100%', marginBottom: '32px' }}>
        {ranking.map((r) => {
          const pop = r.springVal;
          const animatedWidth = interpolate(pop, [0, 1], [0, r.barWidth]);
          return (
            <div
              key={r.ticker}
              style={{
                backgroundColor: COLORS.BG_ELEVATED,
                borderRadius: '32px',
                border: r.isWinner ? `3.5px solid ${COLORS.ACCENT_HERO}` : `3px solid ${COLORS.BG_RECESSED}`,
                borderLeft: r.isWinner ? `14px solid ${COLORS.ACCENT_HERO}` : `14px solid ${r.accent}`,
                padding: '36px 48px',
                display: 'flex',
                flexDirection: 'column',
                gap: '18px',
                boxShadow: r.isWinner ? '0 20px 48px rgba(184, 134, 46, 0.12)' : '0 12px 28px rgba(30, 27, 22, 0.04)',
                transform: `translateY(${interpolate(pop, [0, 1], [40, 0])}px)`,
                opacity: pop,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                  <span
                    style={{
                      fontFamily: FONTS.heading,
                      fontSize: '42px',
                      fontWeight: 900,
                      color: r.accent,
                      backgroundColor: `${r.accent}18`,
                      padding: '8px 22px',
                      borderRadius: '16px',
                    }}
                  >
                    {r.rank}
                  </span>
                  <span style={{ fontFamily: FONTS.heading, fontSize: '68px', fontWeight: 900, color: COLORS.INK_PRIMARY }}>
                    {r.ticker}
                  </span>
                  <span style={{ fontFamily: FONTS.body, fontSize: '46px', fontWeight: 600, color: COLORS.INK_SECONDARY }}>
                    {r.role}
                  </span>
                </div>

                <span
                  style={{
                    fontFamily: FONTS.heading,
                    fontSize: '80px',
                    fontWeight: 900,
                    color: r.accent,
                  }}
                >
                  {r.ret}
                </span>
              </div>

              {/* Progress Bar */}
              <div
                style={{
                  width: '100%',
                  height: '36px',
                  backgroundColor: COLORS.BG_BASE,
                  borderRadius: '18px',
                  overflow: 'hidden',
                  border: `2px solid ${COLORS.BG_RECESSED}`,
                }}
              >
                <div
                  style={{
                    width: `${animatedWidth}%`,
                    height: '100%',
                    backgroundColor: r.accent,
                    borderRadius: '18px',
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Takeaway Footer Banner */}
      <div
        style={{
          backgroundColor: COLORS.BG_ELEVATED,
          borderRadius: '26px',
          border: `2.5px solid ${COLORS.BG_RECESSED}`,
          padding: '26px 42px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: '0 8px 24px rgba(30, 27, 22, 0.03)',
          opacity: pillPop,
          transform: `translateY(${interpolate(pillPop, [0, 1], [25, 0])}px)`,
        }}
      >
        <span style={{ fontFamily: FONTS.body, fontSize: '42px', fontWeight: 700, color: COLORS.INK_PRIMARY }}>
          Result: DFIV delivered <span style={{ color: COLORS.ACCENT_HERO, fontWeight: 900 }}>+27.0% higher return</span> than the S&P 500 over 5 years.
        </span>
        <div style={{ backgroundColor: `${COLORS.ACCENT_HERO}20`, padding: '8px 20px', borderRadius: '14px' }}>
          <span style={{ fontFamily: FONTS.body, fontSize: '32px', fontWeight: 800, color: COLORS.ACCENT_HERO }}>
            Source: StockAnalysis.com
          </span>
        </div>
      </div>
    </LeftZone>
  );
};

export default function Block17_DFIVScene() {
  return (
    <AbsoluteFill style={{ overflow: 'hidden' }}>
      <Sequence from={0}>
        <EditorialBackground />
      </Sequence>

      <AbsoluteFill>
        {/* BEAT 1: 0 - 520 frames (~17.3s) */}
        <Sequence from={0} durationInFrames={520}>
          <Audio src={staticFile('pop-sfx.mp3')} volume={0.15} />
          <Beat1_ValueDashboard />
        </Sequence>

        {/* BEAT 2: 520 - 1050 frames (~17.7s) */}
        <Sequence from={520}>
          <Audio src={staticFile('pop-sfx.mp3')} volume={0.15} />
          <Beat2_LeaderboardShootout />
        </Sequence>
      </AbsoluteFill>
    </AbsoluteFill>
  );
}