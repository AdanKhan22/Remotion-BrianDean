/**
 * BLOCK 28: Diversifier Sleeve Decision Matrix (SGOV vs BND vs GLD)
 * Duration: 840 frames (~28 seconds)
 * 
 * Revisions Applied:
 * - Comments 41 & 42: Compact, squished cards (no big chunks of empty whitespace), eliminated redundant second set of information
 * - Comment 30: Provider branding (iShares, Vanguard, State Street)
 * - Large readable typography (H1 108px, body 46px-50px), volume=0.15
 */

import React from 'react';
import {
  AbsoluteFill,
  spring,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  Audio,
  staticFile,
} from 'remotion';
import {
  ShieldCheck,
  Landmark,
  Coins,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

const COLORS = {
  BG_BASE: '#F4EFE6',
  BG_ELEVATED: '#FCFAF6',
  BG_RECESSED: '#E8E1D5',

  INK_PRIMARY: '#1E1B16',
  INK_SECONDARY: '#4A4439',
  INK_TERTIARY: '#7C7465',

  ACCENT_HERO: '#B8862E',
  ACCENT_DETAIL: '#2E696B',
  ACCENT_GOLD: '#C98B10',
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
        <pattern id="grid-b28" x="0" y="0" width="56" height="56" patternUnits="userSpaceOnUse">
          <circle cx="8" cy="8" r="2.8" fill={COLORS.INK_TERTIARY} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-b28)" />
    </svg>
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: `radial-gradient(circle at 45% 35%, rgba(252, 250, 246, 0.85) 0%, rgba(232, 225, 213, 0.5) 100%)`,
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

export default function Block28_DiversifierDecisionMatrix() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headerPop = spring({ frame: frame - 5, fps, config: SPRING_CONFIG });
  const card1 = spring({ frame: frame - 18, fps, config: SPRING_CONFIG });
  const card2 = spring({ frame: frame - 32, fps, config: SPRING_CONFIG });
  const card3 = spring({ frame: frame - 46, fps, config: SPRING_CONFIG });
  const bannerPop = spring({ frame: frame - 60, fps, config: SPRING_CONFIG });

  const contenders = [
    {
      ticker: 'SGOV',
      name: '0-3 Mo Treasury Bond',
      provider: 'iShares® by BlackRock',
      providerColor: '#1E1B16',
      accentColor: COLORS.ACCENT_HERO,
      icon: <ShieldCheck size={36} color={COLORS.ACCENT_HERO} />,
      roleTitle: 'Pure Cash Stability',
      bestFor: 'Zero price volatility + ~4% guaranteed income',
      hedgeRole: 'Rising rate regimes & crash dry powder',
      drawdown2022: '+1.0% (Zero loss)',
      springVal: card1,
    },
    {
      ticker: 'BND',
      name: 'Total Bond Market',
      provider: 'Vanguard®',
      providerColor: '#9E2A2B',
      accentColor: COLORS.ACCENT_DETAIL,
      icon: <Landmark size={36} color={COLORS.ACCENT_DETAIL} />,
      roleTitle: 'Deflationary Upside',
      bestFor: '11,000 bonds + ~4.3% yield + capital upside',
      hedgeRole: 'Severe recessions when Fed slashes rates',
      drawdown2022: '-13.0% (Rate shock)',
      springVal: card2,
    },
    {
      ticker: 'GLD',
      name: 'SPDR® Gold Shares',
      provider: 'State Street Global',
      providerColor: '#C98B10',
      accentColor: COLORS.ACCENT_GOLD,
      icon: <Coins size={36} color={COLORS.ACCENT_GOLD} />,
      roleTitle: 'Inflation Shield',
      bestFor: 'Physical bullion vaulting + +134% 5Y return',
      hedgeRole: 'Stagflation, currency debasement & debt crises',
      drawdown2022: '0.0% (Held flat)',
      springVal: card3,
    },
  ];

  return (
    <AbsoluteFill style={{ overflow: 'hidden' }}>
      <EditorialBackground />
      <Audio src={staticFile('pop-sfx.mp3')} volume={0.15} />

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
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '14px', backgroundColor: '#1E1B16', padding: '10px 28px', borderRadius: '40px', width: 'fit-content' }}>
            <Sparkles size={28} color="#D4A84B" />
            <span style={{ fontFamily: FONTS.main, fontSize: '26px', fontWeight: 900, color: '#FCFAF6', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              SLEEVE 3 · DIVERSIFIER CONTENDERS (10–20%)
            </span>
          </div>
          <h1 style={{ fontFamily: FONTS.main, fontSize: '84px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, letterSpacing: '-0.03em', lineHeight: 1.15 }}>
            Choosing Your Shield: SGOV vs BND vs GLD
          </h1>
          <p style={{ fontFamily: FONTS.main, fontSize: '36px', fontWeight: 600, color: COLORS.INK_SECONDARY, margin: 0 }}>
            Match the diversifying asset directly to the specific macro risk you want to neutralize
          </p>
        </div>

        {/* 3 Squished, Content-Filled Cards Side by Side (Fitting 2044px usable width) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', width: '100%' }}>
          {contenders.map((c) => {
            const pop = c.springVal;
            return (
              <div
                key={c.ticker}
                style={{
                  backgroundColor: COLORS.BG_ELEVATED,
                  border: `3px solid ${COLORS.BORDER_CARD}`,
                  borderTop: `14px solid ${c.accentColor}`,
                  borderRadius: '32px',
                  padding: '36px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                  boxShadow: '0 16px 40px rgba(0, 0, 0, 0.07)',
                  transform: `translateY(${interpolate(pop, [0, 1], [40, 0])}px)`,
                  opacity: pop,
                }}
              >
                {/* Top Row: Provider & Icon */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: FONTS.main, fontSize: '24px', fontWeight: 800, color: c.providerColor, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    {c.provider}
                  </span>
                  <div style={{ width: '56px', height: '56px', borderRadius: '16px', backgroundColor: `${c.accentColor}18`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {c.icon}
                  </div>
                </div>

                {/* Ticker & Name */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '14px' }}>
                    <span style={{ fontFamily: FONTS.main, fontSize: '62px', fontWeight: 900, color: COLORS.INK_PRIMARY }}>
                      {c.ticker}
                    </span>
                    <span style={{ fontFamily: FONTS.main, fontSize: '30px', fontWeight: 800, color: c.accentColor }}>
                      {c.roleTitle}
                    </span>
                  </div>
                  <span style={{ fontFamily: FONTS.main, fontSize: '28px', fontWeight: 600, color: COLORS.INK_SECONDARY, marginTop: '4px', display: 'block' }}>
                    {c.name}
                  </span>
                </div>

                {/* Key Attributes */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', backgroundColor: COLORS.BG_BASE, padding: '22px 24px', borderRadius: '20px', border: `2px solid ${COLORS.BORDER_CARD}` }}>
                  <div>
                    <span style={{ fontFamily: FONTS.main, fontSize: '22px', fontWeight: 800, color: COLORS.INK_TERTIARY, textTransform: 'uppercase', display: 'block' }}>
                      PRIMARY ADVANTAGE
                    </span>
                    <span style={{ fontFamily: FONTS.main, fontSize: '30px', fontWeight: 700, color: COLORS.INK_PRIMARY, marginTop: '4px', display: 'block', lineHeight: 1.25 }}>
                      {c.bestFor}
                    </span>
                  </div>
                  <div>
                    <span style={{ fontFamily: FONTS.main, fontSize: '22px', fontWeight: 800, color: COLORS.INK_TERTIARY, textTransform: 'uppercase', display: 'block' }}>
                      MACRO CRASH HEDGE
                    </span>
                    <span style={{ fontFamily: FONTS.main, fontSize: '28px', fontWeight: 600, color: COLORS.INK_SECONDARY, marginTop: '4px', display: 'block', lineHeight: 1.25 }}>
                      {c.hedgeRole}
                    </span>
                  </div>
                </div>

                {/* 2022 Crisis Stress Test Score */}
                <div style={{ backgroundColor: '#1E1B16', borderRadius: '20px', padding: '18px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                  <span style={{ fontFamily: FONTS.main, fontSize: '24px', fontWeight: 800, color: '#D4A84B', textTransform: 'uppercase' }}>
                    2022 Crisis Return
                  </span>
                  <span style={{ fontFamily: FONTS.main, fontSize: '32px', fontWeight: 900, color: '#FCFAF6' }}>
                    {c.drawdown2022}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Verdict Banner */}
        <div
          style={{
            marginTop: '32px',
            width: '100%',
            backgroundColor: '#1E1B16',
            borderRadius: '24px',
            padding: '22px 36px',
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            boxShadow: '0 16px 40px rgba(0,0,0,0.15)',
            transform: `translateY(${interpolate(bannerPop, [0, 1], [30, 0])}px)`,
            opacity: bannerPop,
          }}
        >
          <CheckCircle2 size={38} color="#D4A84B" style={{ flexShrink: 0 }} />
          <span style={{ fontFamily: FONTS.main, fontSize: '32px', fontWeight: 700, color: '#FCFAF6', lineHeight: 1.35 }}>
            Decision Rule: Pick <strong style={{ color: '#D4A84B' }}>SGOV</strong> for risk-free cash, <strong style={{ color: '#D4A84B' }}>BND</strong> for recession rate cuts, or <strong style={{ color: '#D4A84B' }}>GLD</strong> to hedge inflation & dollar debasement.
          </span>
        </div>
      </LeftZone>
    </AbsoluteFill>
  );
}
