/**
 * BLOCK 29: Master 3-ETF Blueprint Synthesis
 * Duration: 1200 frames (~40 seconds)
 * 
 * Revisions Applied:
 * - Comment 43: Complete Master Video Summary Slide ("Pause or take a screenshot here and get all the value of the video")
 * - Features overarching premise: S&P AI concentration risk -> 3 distinct sleeves, target weightings, all 9 discussed options
 * - Full-screen layout with large, readable typography (108px title, 44px-48px body text), volume=0.15
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
  Cpu,
  Globe2,
  ShieldCheck,
  Camera,
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
        <pattern id="grid-b29" x="0" y="0" width="56" height="56" patternUnits="userSpaceOnUse">
          <circle cx="8" cy="8" r="2.8" fill={COLORS.INK_TERTIARY} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-b29)" />
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

export default function Block29_MasterBlueprintSynthesisScene() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headerPop = spring({ frame: frame - 5, fps, config: SPRING_CONFIG });
  const col1 = spring({ frame: frame - 18, fps, config: SPRING_CONFIG });
  const col2 = spring({ frame: frame - 32, fps, config: SPRING_CONFIG });
  const col3 = spring({ frame: frame - 46, fps, config: SPRING_CONFIG });
  const footerPop = spring({ frame: frame - 60, fps, config: SPRING_CONFIG });

  const sleeves = [
    {
      step: 'SLEEVE 1',
      title: 'Core Engine',
      weight: '60%',
      role: 'Primary long-term economic compounding engine',
      accentColor: COLORS.ACCENT_HERO,
      icon: <Cpu size={40} color={COLORS.ACCENT_HERO} />,
      options: [
        { ticker: 'VOO', name: 'S&P 500 Index (Vanguard)', fee: '0.03%', role: 'Maximum large-cap US momentum' },
        { ticker: 'VTI', name: 'Total US Stock Market', fee: '0.03%', role: '3,500 large, mid & small-cap stocks' },
        { ticker: 'RSP', name: 'Equal-Weight S&P 500', fee: '0.20%', role: 'Dismantles mega-cap AI concentration' },
      ],
      springVal: col1,
    },
    {
      step: 'SLEEVE 2',
      title: 'Complementary',
      weight: '20–30%',
      role: 'Owns non-US geography, small-cap & value factors',
      accentColor: COLORS.ACCENT_DETAIL,
      icon: <Globe2 size={40} color={COLORS.ACCENT_DETAIL} />,
      options: [
        { ticker: 'ACWX / VXUS', name: 'All-Country World ex-US', fee: '0.07%', role: 'Broad developed & emerging coverage' },
        { ticker: 'AVDV', name: 'Intl Small Cap Value', fee: '0.36%', role: '3-Gap factor trifecta (+96% 5Y return)' },
        { ticker: 'DFIV', name: 'Intl Large Cap Value', fee: '0.27%', role: 'Undervalued blue chips (+110% 5Y return)' },
      ],
      springVal: col2,
    },
    {
      step: 'SLEEVE 3',
      title: 'The Diversifier',
      weight: '10–20%',
      role: 'Holds value in crashes to supply rebalancing capital',
      accentColor: COLORS.ACCENT_GOLD,
      icon: <ShieldCheck size={40} color={COLORS.ACCENT_GOLD} />,
      options: [
        { ticker: 'SGOV', name: '0-3 Month Treasuries', fee: '0.07%', role: 'Zero volatility cash vault (~4% yield)' },
        { ticker: 'BND', name: 'Total Bond Market', fee: '0.03%', role: '11,000 bonds, surges on Fed rate cuts' },
        { ticker: 'GLD', name: 'SPDR Physical Gold', fee: '0.40%', role: '0.0 correlation inflation armor (+134% 5Y)' },
      ],
      springVal: col3,
    },
  ];

  return (
    <AbsoluteFill style={{ overflow: 'hidden' }}>
      <EditorialBackground />
      <Audio src={staticFile('pop-sfx.mp3')} volume={0.15} />

      <AbsoluteFill style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '0 120px' }}>
        {/* Header Summary */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '14px',
            marginBottom: '40px',
            opacity: headerPop,
            transform: `translateY(${interpolate(headerPop, [0, 1], [30, 0])}px)`,
          }}
        >
          <h1 style={{ fontFamily: FONTS.main, fontSize: '120px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
            The Complete 2026 Asset Architecture
          </h1>
        </div>

        {/* 3 Full Sleeves Displayed Side-by-Side */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '36px', width: '100%', maxWidth: '3400px' }}>
          {sleeves.map((s) => {
            const pop = s.springVal;
            return (
              <div
                key={s.step}
                style={{
                  backgroundColor: COLORS.BG_ELEVATED,
                  borderTop: `16px solid ${s.accentColor}`,
                  borderRadius: '36px',
                  padding: '40px 36px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '30px',
                  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.08)',
                  transform: `translateY(${interpolate(pop, [0, 1], [40, 0])}px)`,
                  opacity: pop,
                }}
              >
                {/* Sleeve Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <span style={{ fontFamily: FONTS.main, fontSize: '32px', fontWeight: 900, color: s.accentColor, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      {s.step}
                    </span>
                    <h2 style={{ fontFamily: FONTS.main, fontSize: '62px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: '4px 0 0 0' }}>
                      {s.title}
                    </h2>
                  </div>
                  <div style={{ backgroundColor: '#1E1B16', padding: '12px 24px', borderRadius: '20px', textAlign: 'center' }}>
                    <span style={{ fontFamily: FONTS.main, fontSize: '56px', fontWeight: 900, color: '#D4A84B' }}>
                      {s.weight}
                    </span>
                  </div>
                </div>

                {/* 3 ETF Options List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '4px' }}>
                  {s.options.map((opt) => (
                    <div
                      key={opt.ticker}
                      style={{
                        padding: '16px 20px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontFamily: FONTS.main, fontSize: '64px', fontWeight: 900, color: COLORS.INK_PRIMARY }}>
                          {opt.ticker}
                        </span>
                        <span style={{ fontFamily: FONTS.main, fontSize: '36px', fontWeight: 800, color: s.accentColor, backgroundColor: `${s.accentColor}15`, padding: '6px 14px', borderRadius: '12px' }}>
                          ER: {opt.fee}
                        </span>
                      </div>
                      <span style={{ fontFamily: FONTS.main, fontSize: '42px', fontWeight: 700, color: COLORS.INK_PRIMARY }}>
                        {opt.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
}
