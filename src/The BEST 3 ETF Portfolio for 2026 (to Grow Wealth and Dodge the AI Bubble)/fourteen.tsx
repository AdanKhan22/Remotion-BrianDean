/**
 * BLOCK 16: AVDV Performance Alpha & Factor Volatility Profile
 * Duration: 960 frames (~32 seconds)
 * 
 * Multi-Beat Architecture:
 * - Beat 1 (0-480): Outperformance Alpha (+30% 1-Yr, +96% 5-Yr vs VOO +83%)
 * - Beat 2 (480-960): The Factor Trade-Offs (0.36% Fee & Volatility Realities)
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
  AlertTriangle,
  Award,
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
        <pattern id="grid-b16" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
          <circle cx="6" cy="6" r="2.5" fill={COLORS.INK_TERTIARY} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-b16)" />
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

// --- BEAT 1: AVDV Performance Alpha (StockAnalysis.com Shootout) ---
const Beat1_AlphaShootout: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headerPop = spring({ frame: frame - 5, fps, config: SPRING_CONFIG });
  const cardPop = spring({ frame: frame - 18, fps, config: SPRING_CONFIG });

  const fiveYearData = [
    { ticker: 'AVDV', label: 'Avantis Int Small Value', ret: '+96.0%', width: 100, color: COLORS.ACCENT_HERO, winner: true },
    { ticker: 'VOO', label: 'S&P 500 Large-Cap', ret: '+83.0%', width: 86, color: COLORS.ACCENT_DETAIL, winner: false },
    { ticker: 'ACWX', label: 'Broad Int Market', ret: '+35.2%', width: 37, color: COLORS.INK_TERTIARY, winner: false },
  ];

  const oneYearData = [
    { ticker: 'AVDV', label: 'Avantis Int Small Value', ret: '+30.0%', width: 100, color: COLORS.ACCENT_HERO, winner: true },
    { ticker: 'ACWX', label: 'Broad Int Market', ret: '+22.0%', width: 73, color: COLORS.ACCENT_DETAIL, winner: false },
    { ticker: 'VOO', label: 'S&P 500 Large-Cap', ret: '+17.4%', width: 58, color: COLORS.INK_TERTIARY, winner: false },
  ];

  return (
    <LeftZone>
      <div style={{ transform: `translateY(${interpolate(headerPop, [0, 1], [30, 0])}px)`, opacity: headerPop, marginBottom: '40px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '16px', backgroundColor: `${COLORS.ACCENT_HERO}18`, padding: '12px 30px', borderRadius: '32px', marginBottom: '18px' }}>
          <Award size={44} color={COLORS.ACCENT_HERO} />
          <span style={{ fontFamily: FONTS.heading, fontSize: '44px', fontWeight: 800, color: COLORS.ACCENT_HERO, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            Factor Outperformance
          </span>
        </div>
        <h1 style={{ fontFamily: FONTS.heading, fontSize: '112px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, letterSpacing: '-0.03em', lineHeight: 1.05 }}>
          AVDV Historical Alpha
        </h1>
        <p style={{ fontFamily: FONTS.body, fontSize: '52px', fontWeight: 700, color: COLORS.INK_PRIMARY, margin: '14px 0 0 0' }}>
          Outperforming both US large caps and broad international indices
        </p>
      </div>

      {/* StockAnalysis Comparison Container */}
      <div
        style={{
          backgroundColor: COLORS.BG_ELEVATED,
          border: `3.5px solid ${COLORS.ACCENT_HERO}`,
          borderTop: `16px solid ${COLORS.ACCENT_HERO}`,
          borderRadius: '36px',
          padding: '46px 54px',
          boxShadow: '0 24px 56px rgba(184, 134, 46, 0.12)',
          transform: `translateY(${interpolate(cardPop, [0, 1], [30, 0])}px)`,
          opacity: cardPop,
          display: 'flex',
          flexDirection: 'column',
          gap: '36px',
        }}
      >
        {/* Attribution Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `2.5px solid ${COLORS.BG_RECESSED}`, paddingBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            <span style={{ fontFamily: FONTS.heading, fontSize: '38px', fontWeight: 900, color: COLORS.INK_PRIMARY }}>
              Total Return Comparison: AVDV vs VOO vs ACWX
            </span>
          </div>
          <div style={{ backgroundColor: `${COLORS.ACCENT_HERO}20`, padding: '10px 24px', borderRadius: '16px' }}>
            <span style={{ fontFamily: FONTS.body, fontSize: '34px', fontWeight: 800, color: COLORS.ACCENT_HERO }}>
              Source: StockAnalysis.com
            </span>
          </div>
        </div>

        {/* 2 Comparison Columns */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '48px' }}>
          {/* 5-Year Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{ fontFamily: FONTS.heading, fontSize: '44px', fontWeight: 900, color: COLORS.INK_PRIMARY }}>
                5-Year Total Return
              </span>
              <span style={{ fontFamily: FONTS.heading, fontSize: '40px', fontWeight: 900, color: COLORS.ACCENT_HERO }}>
                +13% Alpha
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {fiveYearData.map((item, idx) => {
                const barSpring = spring({ frame: frame - (24 + idx * 8), fps, config: SPRING_CONFIG });
                return (
                  <div key={item.ticker} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                        <span style={{ fontFamily: FONTS.heading, fontSize: '44px', fontWeight: 900, color: item.winner ? COLORS.ACCENT_HERO : COLORS.INK_PRIMARY }}>
                          {item.ticker}
                        </span>
                        <span style={{ fontFamily: FONTS.body, fontSize: '34px', fontWeight: 700, color: COLORS.INK_SECONDARY }}>
                          ({item.label})
                        </span>
                      </div>
                      <span style={{ fontFamily: FONTS.heading, fontSize: '48px', fontWeight: 900, color: item.winner ? COLORS.ACCENT_HERO : COLORS.INK_PRIMARY }}>
                        {item.ret}
                      </span>
                    </div>
                    <div style={{ width: '100%', height: '22px', backgroundColor: COLORS.BG_RECESSED, borderRadius: '12px', overflow: 'hidden' }}>
                      <div
                        style={{
                          height: '100%',
                          width: `${item.width * barSpring}%`,
                          backgroundColor: item.color,
                          borderRadius: '12px',
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 1-Year Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{ fontFamily: FONTS.heading, fontSize: '44px', fontWeight: 900, color: COLORS.INK_PRIMARY }}>
                1-Year Total Return
              </span>
              <span style={{ fontFamily: FONTS.heading, fontSize: '40px', fontWeight: 900, color: COLORS.ACCENT_HERO }}>
                Top Performer
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {oneYearData.map((item, idx) => {
                const barSpring = spring({ frame: frame - (28 + idx * 8), fps, config: SPRING_CONFIG });
                return (
                  <div key={item.ticker} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                        <span style={{ fontFamily: FONTS.heading, fontSize: '44px', fontWeight: 900, color: item.winner ? COLORS.ACCENT_HERO : COLORS.INK_PRIMARY }}>
                          {item.ticker}
                        </span>
                        <span style={{ fontFamily: FONTS.body, fontSize: '34px', fontWeight: 700, color: COLORS.INK_SECONDARY }}>
                          ({item.label})
                        </span>
                      </div>
                      <span style={{ fontFamily: FONTS.heading, fontSize: '48px', fontWeight: 900, color: item.winner ? COLORS.ACCENT_HERO : COLORS.INK_PRIMARY }}>
                        {item.ret}
                      </span>
                    </div>
                    <div style={{ width: '100%', height: '22px', backgroundColor: COLORS.BG_RECESSED, borderRadius: '12px', overflow: 'hidden' }}>
                      <div
                        style={{
                          height: '100%',
                          width: `${item.width * barSpring}%`,
                          backgroundColor: item.color,
                          borderRadius: '12px',
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Takeaway */}
        <div style={{ backgroundColor: `${COLORS.ACCENT_HERO}14`, border: `2.5px solid ${COLORS.ACCENT_HERO}44`, borderRadius: '22px', padding: '22px 34px' }}>
          <span style={{ fontFamily: FONTS.heading, fontSize: '44px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
            Key Takeaway: <span style={{ color: COLORS.ACCENT_HERO }}>Small-cap value</span> provided true factor diversification when US tech and broad foreign equities cooled.
          </span>
        </div>
      </div>
    </LeftZone>
  );
};

// --- BEAT 2: The Fund Expense Website Mockup (Comment 27) ---
const Beat2_FactorTradeOffs: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headerPop = spring({ frame: frame - 5, fps, config: SPRING_CONFIG });
  const browserPop = spring({ frame: frame - 18, fps, config: SPRING_CONFIG });

  return (
    <LeftZone>
      <div style={{ transform: `translateY(${interpolate(headerPop, [0, 1], [30, 0])}px)`, opacity: headerPop, marginBottom: '36px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '16px', backgroundColor: `${COLORS.ACCENT_NEGATIVE}18`, padding: '12px 30px', borderRadius: '32px', marginBottom: '16px' }}>
          <AlertTriangle size={44} color={COLORS.ACCENT_NEGATIVE} />
          <span style={{ fontFamily: FONTS.heading, fontSize: '44px', fontWeight: 800, color: COLORS.ACCENT_NEGATIVE, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            Fund Fee Structure & Reality
          </span>
        </div>
        <h1 style={{ fontFamily: FONTS.heading, fontSize: '112px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, letterSpacing: '-0.03em', lineHeight: 1.05 }}>
          Avantis Investors Fee Profile
        </h1>
        <p style={{ fontFamily: FONTS.body, fontSize: '52px', fontWeight: 700, color: COLORS.INK_PRIMARY, margin: '14px 0 0 0' }}>
          Active factor engineering requires a deliberate expense commitment
        </p>
      </div>

      {/* Fund Website Mockup per Comment 27 */}
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
              avantisinvestors.com/funds/avantis-international-small-cap-value-etf
            </span>
            <span style={{ fontFamily: FONTS.body, fontSize: '30px', color: COLORS.ACCENT_HERO, fontWeight: 800, textTransform: 'uppercase' }}>
              Fund Profile
            </span>
          </div>
        </div>

        {/* Website Content Area */}
        <div style={{ padding: '48px 56px', display: 'flex', flexDirection: 'column', gap: '36px', backgroundColor: '#FAF6EC' }}>
          {/* Header Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '22px' }}>
              <div style={{ backgroundColor: COLORS.ACCENT_HERO, borderRadius: '18px', padding: '12px 24px' }}>
                <span style={{ fontFamily: FONTS.heading, fontSize: '48px', fontWeight: 900, color: '#FFFFFF', letterSpacing: '0.04em' }}>
                  AVDV
                </span>
              </div>
              <div>
                <h3 style={{ fontFamily: FONTS.heading, fontSize: '52px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0 }}>
                  Avantis International Small Cap Value ETF
                </h3>
                <span style={{ fontFamily: FONTS.body, fontSize: '36px', fontWeight: 700, color: COLORS.INK_SECONDARY }}>
                  NYSE Arca | Active Factor Implementation
                </span>
              </div>
            </div>

            <div style={{ backgroundColor: `${COLORS.ACCENT_NEGATIVE}18`, border: `2.5px solid ${COLORS.ACCENT_NEGATIVE}55`, borderRadius: '22px', padding: '14px 28px' }}>
              <span style={{ fontFamily: FONTS.heading, fontSize: '38px', fontWeight: 900, color: COLORS.ACCENT_NEGATIVE }}>
                Active Management
              </span>
            </div>
          </div>

          {/* Key Fee Metric Banner */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            <div style={{ backgroundColor: '#FFFFFF', border: `3.5px solid ${COLORS.ACCENT_NEGATIVE}`, borderRadius: '28px', padding: '34px 38px' }}>
              <span style={{ fontFamily: FONTS.heading, fontSize: '36px', fontWeight: 800, color: COLORS.ACCENT_NEGATIVE, textTransform: 'uppercase' }}>
                Net Expense Ratio
              </span>
              <div style={{ fontFamily: FONTS.heading, fontSize: '110px', fontWeight: 900, color: COLORS.ACCENT_NEGATIVE, lineHeight: 1.05, margin: '10px 0' }}>
                0.36%
              </div>
              <span style={{ fontFamily: FONTS.body, fontSize: '38px', fontWeight: 700, color: COLORS.INK_PRIMARY }}>
                $36 / Year per $10k
              </span>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', border: `3.5px solid ${COLORS.BG_RECESSED}`, borderRadius: '28px', padding: '34px 38px' }}>
              <span style={{ fontFamily: FONTS.heading, fontSize: '36px', fontWeight: 800, color: COLORS.INK_SECONDARY, textTransform: 'uppercase' }}>
                Management Fee
              </span>
              <div style={{ fontFamily: FONTS.heading, fontSize: '110px', fontWeight: 900, color: COLORS.INK_PRIMARY, lineHeight: 1.05, margin: '10px 0' }}>
                0.36%
              </div>
              <span style={{ fontFamily: FONTS.body, fontSize: '38px', fontWeight: 700, color: COLORS.INK_SECONDARY }}>
                0.00% 12b-1 / Acquired Fees
              </span>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', border: `3.5px solid ${COLORS.ACCENT_HERO}`, borderRadius: '28px', padding: '34px 38px' }}>
              <span style={{ fontFamily: FONTS.heading, fontSize: '36px', fontWeight: 800, color: COLORS.ACCENT_HERO, textTransform: 'uppercase' }}>
                Patience Requirement
              </span>
              <div style={{ fontFamily: FONTS.heading, fontSize: '110px', fontWeight: 900, color: COLORS.ACCENT_HERO, lineHeight: 1.05, margin: '10px 0' }}>
                5+ Yrs
              </div>
              <span style={{ fontFamily: FONTS.body, fontSize: '38px', fontWeight: 700, color: COLORS.INK_PRIMARY }}>
                To Harvest Factor Premium
              </span>
            </div>
          </div>

          {/* Trade-Off Verdict Banner */}
          <div style={{ backgroundColor: `${COLORS.INK_PRIMARY}08`, borderLeft: `10px solid ${COLORS.ACCENT_NEGATIVE}`, borderRadius: '18px', padding: '24px 36px' }}>
            <span style={{ fontFamily: FONTS.body, fontSize: '44px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
              Trade-Off Verdict: Higher expense than broad index funds (0.36% vs 0.07%), but historically compensated by +13% factor alpha over 5 years.
            </span>
          </div>
        </div>
      </div>
    </LeftZone>
  );
};

export default function Block16_AVDVAlphaVolatilityScene() {
  return (
    <AbsoluteFill style={{ overflow: 'hidden' }}>
      <Sequence from={0}>
        <EditorialBackground />
      </Sequence>

      <AbsoluteFill>
        {/* BEAT 1: 0 - 480 frames (~16s) */}
        <Sequence from={0} durationInFrames={480}>
          <Audio src={staticFile('pop-sfx.mp3')} volume={0.15} />
          <Beat1_AlphaShootout />
        </Sequence>

        {/* BEAT 2: 480 - 960 frames (~16s) */}
        <Sequence from={480}>
          <Audio src={staticFile('pop-sfx.mp3')} volume={0.15} />
          <Beat2_FactorTradeOffs />
        </Sequence>
      </AbsoluteFill>
    </AbsoluteFill>
  );
}