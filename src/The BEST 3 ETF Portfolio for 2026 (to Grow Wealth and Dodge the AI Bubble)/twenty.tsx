/**
 * BLOCK 22: Diversifier Option B — BND Vanguard Total Bond Market Overview
 * Duration: 690 frames (~23 seconds)
 * 
 * Revisions Applied:
 * - Comments 35, 36, 37: BND Vanguard Overview Website Mockup Card + Issuer Type Weighted Exposure
 * - Large readable typography (H1 112px, body 48px-52px), high contrast pill badges, volume=0.15
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
  Landmark,
  Building2,
  Layers,
  Globe,
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
  ACCENT_RED: '#9E2A2B', // Vanguard Crimson
  ACCENT_DETAIL: '#2E696B',
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
        <pattern id="grid-b22" x="0" y="0" width="56" height="56" patternUnits="userSpaceOnUse">
          <circle cx="8" cy="8" r="2.8" fill={COLORS.INK_TERTIARY} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-b22)" />
    </svg>
    <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at 45% 35%, rgba(252, 250, 246, 0.85) 0%, rgba(232, 225, 213, 0.5) 100%)`, pointerEvents: 'none' }} />
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

// --- BEAT 1: Vanguard BND Overview Website Mockup Card ---
const Beat1_BNDOverview: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const cardPop = spring({ frame: frame - 5, fps, config: SPRING_CONFIG });
  const metricsPop = spring({ frame: frame - 20, fps, config: SPRING_CONFIG });

  return (
    <LeftZone>
      {/* Top Video Stage Indicator (Brian Comment 37) */}
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '16px', backgroundColor: '#1E1B16', padding: '12px 32px', borderRadius: '40px', marginBottom: '24px', boxShadow: '0 8px 24px rgba(0,0,0,0.12)', alignSelf: 'flex-start' }}>
        <ShieldCheck size={36} color="#D4A84B" />
        <span style={{ fontFamily: FONTS.main, fontSize: '32px', fontWeight: 900, color: '#FCFAF6', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          SLEEVE 3 · DIVERSIFIER OPTION 2 · BND
        </span>
      </div>

      {/* Website Mockup Browser Window */}
      <div
        style={{
          width: '100%',
          backgroundColor: COLORS.BG_ELEVATED,
          border: `3.5px solid ${COLORS.BORDER_CARD}`,
          borderRadius: '36px',
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.10)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          transform: `scale(${interpolate(cardPop, [0, 1], [0.96, 1])}) translateY(${interpolate(cardPop, [0, 1], [40, 0])}px)`,
          opacity: cardPop,
        }}
      >
        {/* Browser Top Navigation Bar */}
        <div style={{ height: '76px', backgroundColor: '#EBE5D8', borderBottom: `2px solid ${COLORS.BORDER_CARD}`, display: 'flex', alignItems: 'center', padding: '0 32px', gap: '24px' }}>
          <div style={{ display: 'flex', gap: '12px' }}>
            <div style={{ width: '18px', height: '18px', borderRadius: '50%', backgroundColor: '#E06C54' }} />
            <div style={{ width: '18px', height: '18px', borderRadius: '50%', backgroundColor: '#ECC94B' }} />
            <div style={{ width: '18px', height: '18px', borderRadius: '50%', backgroundColor: '#48BB78' }} />
          </div>
          <div style={{ flex: 1, height: '46px', backgroundColor: '#FCFAF6', borderRadius: '12px', display: 'flex', alignItems: 'center', padding: '0 20px', gap: '12px', border: `1.5px solid ${COLORS.BORDER_CARD}` }}>
            <Globe size={22} color={COLORS.INK_TERTIARY} />
            <span style={{ fontFamily: FONTS.main, fontSize: '22px', fontWeight: 600, color: COLORS.INK_SECONDARY }}>
              https://advisors.vanguard.com/investments/products/bnd/vanguard-total-bond-market-etf
            </span>
          </div>
          <span style={{ fontFamily: FONTS.main, fontSize: '26px', fontWeight: 900, color: COLORS.ACCENT_RED, letterSpacing: '0.04em' }}>
            Vanguard®
          </span>
        </div>

        {/* Website Content Area */}
        <div style={{ padding: '44px 48px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', backgroundColor: `${COLORS.ACCENT_RED}18`, padding: '6px 20px', borderRadius: '14px', marginBottom: '12px' }}>
                <span style={{ fontFamily: FONTS.main, fontSize: '26px', fontWeight: 900, color: COLORS.ACCENT_RED }}>
                  NASDAQ: BND
                </span>
              </div>
              <h1 style={{ fontFamily: FONTS.main, fontSize: '76px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, letterSpacing: '-0.03em' }}>
                Vanguard Total Bond Market ETF
              </h1>
              <p style={{ fontFamily: FONTS.main, fontSize: '36px', fontWeight: 600, color: COLORS.INK_SECONDARY, margin: '10px 0 0 0' }}>
                Broad investment-grade US bond market exposure covering government, agency & corporate debt
              </p>
            </div>
            <div style={{ backgroundColor: '#1E1B16', padding: '18px 28px', borderRadius: '24px', textAlign: 'center' }}>
              <span style={{ fontFamily: FONTS.main, fontSize: '22px', fontWeight: 800, color: '#D4A84B', textTransform: 'uppercase', display: 'block' }}>
                SLOT ALLOCATION
              </span>
              <span style={{ fontFamily: FONTS.main, fontSize: '52px', fontWeight: 900, color: '#FCFAF6' }}>
                10-20%
              </span>
            </div>
          </div>

          {/* 3 Metric Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', transform: `translateY(${interpolate(metricsPop, [0, 1], [30, 0])}px)`, opacity: metricsPop }}>
            <div style={{ backgroundColor: COLORS.BG_BASE, border: `2.5px solid ${COLORS.BORDER_CARD}`, borderRadius: '24px', padding: '30px 24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span style={{ fontFamily: FONTS.main, fontSize: '24px', fontWeight: 800, color: COLORS.INK_TERTIARY, textTransform: 'uppercase' }}>
                Expense Ratio
              </span>
              <span style={{ fontFamily: FONTS.main, fontSize: '78px', fontWeight: 900, color: COLORS.ACCENT_HERO, lineHeight: 1.0 }}>
                0.03%
              </span>
              <span style={{ fontFamily: FONTS.main, fontSize: '26px', fontWeight: 600, color: COLORS.INK_SECONDARY }}>
                Same rock-bottom fee tier as VOO
              </span>
            </div>

            <div style={{ backgroundColor: COLORS.BG_BASE, border: `2.5px solid ${COLORS.BORDER_CARD}`, borderRadius: '24px', padding: '30px 24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span style={{ fontFamily: FONTS.main, fontSize: '24px', fontWeight: 800, color: COLORS.INK_TERTIARY, textTransform: 'uppercase' }}>
                Number of Bonds
              </span>
              <span style={{ fontFamily: FONTS.main, fontSize: '78px', fontWeight: 900, color: COLORS.INK_PRIMARY, lineHeight: 1.0 }}>
                11,000+
              </span>
              <span style={{ fontFamily: FONTS.main, fontSize: '26px', fontWeight: 600, color: COLORS.INK_SECONDARY }}>
                Massive fixed-income diversification
              </span>
            </div>

            <div style={{ backgroundColor: COLORS.BG_BASE, border: `2.5px solid ${COLORS.BORDER_CARD}`, borderRadius: '24px', padding: '30px 24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span style={{ fontFamily: FONTS.main, fontSize: '24px', fontWeight: 800, color: COLORS.INK_TERTIARY, textTransform: 'uppercase' }}>
                Average Duration
              </span>
              <span style={{ fontFamily: FONTS.main, fontSize: '78px', fontWeight: 900, color: COLORS.ACCENT_DETAIL, lineHeight: 1.0 }}>
                6.5 Yrs
              </span>
              <span style={{ fontFamily: FONTS.main, fontSize: '26px', fontWeight: 600, color: COLORS.INK_SECONDARY }}>
                Intermediate duration with ~4.3% yield
              </span>
            </div>
          </div>

          {/* Bottom Takeaway */}
          <div style={{ backgroundColor: '#1E1B16', borderRadius: '20px', padding: '22px 32px', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <CheckCircle2 size={32} color="#D4A84B" />
            <span style={{ fontFamily: FONTS.main, fontSize: '30px', fontWeight: 700, color: '#FCFAF6' }}>
              Institutional Fortress: High liquidity, near-zero credit default risk, and automated income distribution.
            </span>
          </div>
        </div>
      </div>
    </LeftZone>
  );
};

// --- BEAT 2: Vanguard BND Weighted Exposures by Issuer Type ---
const Beat2_IssuerTypeBreakdown: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headerPop = spring({ frame: frame - 5, fps, config: SPRING_CONFIG });
  const tablePop = spring({ frame: frame - 20, fps, config: SPRING_CONFIG });
  const highlightProgress = interpolate(frame, [30, 60], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  const exposures = [
    { type: 'U.S. Government (Treasury)', weight: '65.4%', desc: 'Full faith and credit backing of the US Government', isHighlight: true, icon: <Landmark size={36} color={COLORS.ACCENT_HERO} /> },
    { type: 'Corporate Bonds (Investment Grade)', weight: '24.8%', desc: 'Blue-chip commercial and industrial balance sheets', isHighlight: false, icon: <Building2 size={36} color={COLORS.INK_PRIMARY} /> },
    { type: 'Government Mortgage-Backed (GNMA/FNMA)', weight: '9.8%', desc: 'Federal agency-guaranteed residential mortgages', isHighlight: false, icon: <Layers size={36} color={COLORS.ACCENT_DETAIL} /> },
  ];

  return (
    <LeftZone>
      <div style={{ transform: `translateY(${interpolate(headerPop, [0, 1], [30, 0])}px)`, opacity: headerPop, textAlign: 'left', marginBottom: '40px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '16px', backgroundColor: '#1E1B16', padding: '12px 32px', borderRadius: '40px', marginBottom: '18px', boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }}>
          <Landmark size={36} color="#D4A84B" />
          <span style={{ fontFamily: FONTS.main, fontSize: '32px', fontWeight: 900, color: '#FCFAF6', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            VANGUARD BND · WEIGHTED EXPOSURES BY ISSUER
          </span>
        </div>
        <h1 style={{ fontFamily: FONTS.main, fontSize: '92px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
          Who Backs the 11,000 Bonds?
        </h1>
        <p style={{ fontFamily: FONTS.main, fontSize: '40px', fontWeight: 600, color: COLORS.INK_SECONDARY, margin: '12px 0 0 0' }}>
          Data source: Vanguard Institutional Product Portfolio Exposures
        </p>
      </div>

      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '22px',
          transform: `translateY(${interpolate(tablePop, [0, 1], [30, 0])}px)`,
          opacity: tablePop,
        }}
      >
        {exposures.map((item) => (
          <div
            key={item.type}
            style={{
              backgroundColor: COLORS.BG_ELEVATED,
              border: item.isHighlight ? `4px solid ${COLORS.ACCENT_HERO}` : `3px solid ${COLORS.BORDER_CARD}`,
              borderRadius: '28px',
              padding: '28px 40px',
              display: 'grid',
              gridTemplateColumns: '70px 1.5fr 150px 160px',
              alignItems: 'center',
              gap: '24px',
              boxShadow: item.isHighlight ? `0 16px 48px rgba(184, 134, 46, ${0.2 * highlightProgress})` : '0 12px 32px rgba(0, 0, 0, 0.04)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {item.isHighlight && (
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: `${COLORS.ACCENT_HERO}12`,
                  opacity: highlightProgress,
                  pointerEvents: 'none',
                }}
              />
            )}
            <div style={{ width: '68px', height: '68px', borderRadius: '18px', backgroundColor: COLORS.BG_BASE, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {item.icon}
            </div>
            <div>
              <span style={{ fontFamily: FONTS.main, fontSize: '38px', fontWeight: 900, color: COLORS.INK_PRIMARY, display: 'block' }}>
                {item.type}
              </span>
              <span style={{ fontFamily: FONTS.main, fontSize: '30px', fontWeight: 600, color: COLORS.INK_SECONDARY, marginTop: '4px', display: 'block' }}>
                {item.desc}
              </span>
            </div>
            <div style={{ textAlign: 'right' }}>
              {item.isHighlight && (
                <span style={{ display: 'inline-block', backgroundColor: '#1E1B16', color: '#D4A84B', padding: '6px 16px', borderRadius: '14px', fontFamily: FONTS.main, fontSize: '22px', fontWeight: 900 }}>
                  SOVEREIGN BACKED
                </span>
              )}
            </div>
            <div style={{ textAlign: 'right' }}>
              <span style={{ fontFamily: FONTS.main, fontSize: '68px', fontWeight: 900, color: item.isHighlight ? COLORS.ACCENT_HERO : COLORS.INK_PRIMARY }}>
                {item.weight}
              </span>
            </div>
          </div>
        ))}

        {/* Highlight Callout Footer */}
        <div
          style={{
            backgroundColor: '#1E1B16',
            borderRadius: '26px',
            padding: '28px 44px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: '0 16px 40px rgba(0,0,0,0.12)',
          }}
        >
          <span style={{ fontFamily: FONTS.main, fontSize: '38px', fontWeight: 800, color: '#FCFAF6' }}>
            Combined U.S. Sovereign & Agency Exposure:
          </span>
          <span style={{ fontFamily: FONTS.main, fontSize: '54px', fontWeight: 900, color: '#D4A84B' }}>
            75.2% of Total Fund
          </span>
        </div>
      </div>
    </LeftZone>
  );
};

export default function Block22_BNDFortressScene() {
  return (
    <AbsoluteFill style={{ overflow: 'hidden' }}>
      <Sequence from={0}>
        <EditorialBackground />
      </Sequence>

      <AbsoluteFill>
        {/* BEAT 1: 0 - 340 frames (~11.5s) - Vanguard BND Overview Website Mockup Card */}
        <Sequence from={0} durationInFrames={340}>
          <Audio src={staticFile('pop-sfx.mp3')} volume={0.15} />
          <Beat1_BNDOverview />
        </Sequence>

        {/* BEAT 2: 340 - 690 frames (~11.5s) - Weighted Exposures Issuer Type */}
        <Sequence from={340}>
          <Audio src={staticFile('pop-sfx.mp3')} volume={0.15} />
          <Beat2_IssuerTypeBreakdown />
        </Sequence>
      </AbsoluteFill>
    </AbsoluteFill>
  );
}
