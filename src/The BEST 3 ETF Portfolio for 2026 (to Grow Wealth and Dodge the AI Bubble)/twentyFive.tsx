/**
 * BLOCK 27: Gold Stagnation Cycles vs Uncorrelated Portfolio Stabilization
 * Duration: 900 frames (~30 seconds)
 * 
 * Revisions Applied:
 * - High readability typography: H1 112px, body text 44px-48px
 * - Full-width high-contrast layout (no empty half-screen void)
 * - Audio volume set strictly to 0.15
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
  Coins,
  ShieldCheck,
  TrendingUp,
  AlertTriangle,
  Activity,
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
  ACCENT_NEGATIVE: '#B5533C',
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
        <pattern id="grid-b27" x="0" y="0" width="56" height="56" patternUnits="userSpaceOnUse">
          <circle cx="8" cy="8" r="2.8" fill={COLORS.INK_TERTIARY} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-b27)" />
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

// --- BEAT 1: Dense, Richly Filled Asset Paradigm Cards ---
const Beat1_BehavioralPillars: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headerPop = spring({ frame: frame - 5, fps, config: SPRING_CONFIG });
  const col1 = spring({ frame: frame - 20, fps, config: SPRING_CONFIG });
  const col2 = spring({ frame: frame - 35, fps, config: SPRING_CONFIG });

  const equityFeatures = [
    'Backed by corporate profits, cash flows & productive enterprise',
    'Reinvested compounding dividends drive exponential growth',
    'Historically consistent 8% to 10% long-term upward trajectory',
  ];

  const goldFeatures = [
    'Produces zero cash flow yield and pays zero dividend income',
    'Can stagnate in consolidation doldrums for years or decades',
    'Surges violently upward when fiat currencies & stocks panic',
  ];

  return (
    <LeftZone>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          textAlign: 'left',
          gap: '16px',
          marginBottom: '40px',
          opacity: headerPop,
          transform: `translateY(${interpolate(headerPop, [0, 1], [30, 0])}px)`,
        }}
      >
        <h1 style={{ fontFamily: FONTS.main, fontSize: '110px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
          Linear Compounding vs Episodic Surges
        </h1>
        <p style={{ fontFamily: FONTS.main, fontSize: '50px', fontWeight: 600, color: COLORS.INK_SECONDARY, margin: 0 }}>
          Stocks compound like an engine; gold behaves like episodic catastrophe insurance
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', width: '100%' }}>
        {/* Stocks & Bonds Column */}
        <div
          style={{
            backgroundColor: COLORS.BG_ELEVATED,
            borderTop: `16px solid ${COLORS.ACCENT_DETAIL}`,
            borderRadius: '36px',
            padding: '50px 40px',
            display: 'flex',
            flexDirection: 'column',
            gap: '30px',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.06)',
            transform: `translateY(${interpolate(col1, [0, 1], [40, 0])}px)`,
            opacity: col1,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: FONTS.main, fontSize: '44px', fontWeight: 900, color: COLORS.ACCENT_DETAIL, backgroundColor: `${COLORS.ACCENT_DETAIL}20`, padding: '12px 24px', borderRadius: '14px' }}>
              STOCKS & BONDS
            </span>
            <TrendingUp size={48} color={COLORS.ACCENT_DETAIL} />
          </div>

          <div>
            <span style={{ fontFamily: FONTS.main, fontSize: '64px', fontWeight: 900, color: COLORS.INK_PRIMARY, display: 'block' }}>
              Linear Compounding
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {equityFeatures.map((feat, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                <CheckCircle2 size={44} color={COLORS.ACCENT_DETAIL} style={{ flexShrink: 0, marginTop: '4px' }} />
                <span style={{ fontFamily: FONTS.main, fontSize: '48px', fontWeight: 600, color: COLORS.INK_PRIMARY, lineHeight: 1.35 }}>
                  {feat}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Gold Column */}
        <div
          style={{
            backgroundColor: COLORS.BG_ELEVATED,
            borderTop: `16px solid ${COLORS.ACCENT_GOLD}`,
            borderRadius: '36px',
            padding: '50px 40px',
            display: 'flex',
            flexDirection: 'column',
            gap: '30px',
            boxShadow: '0 20px 50px rgba(201, 139, 16, 0.10)',
            transform: `translateY(${interpolate(col2, [0, 1], [40, 0])}px)`,
            opacity: col2,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: FONTS.main, fontSize: '44px', fontWeight: 900, color: COLORS.ACCENT_GOLD, backgroundColor: `${COLORS.ACCENT_GOLD}20`, padding: '12px 24px', borderRadius: '14px' }}>
              PHYSICAL GOLD (GLD)
            </span>
            <Coins size={48} color={COLORS.ACCENT_GOLD} />
          </div>

          <div>
            <span style={{ fontFamily: FONTS.main, fontSize: '64px', fontWeight: 900, color: COLORS.INK_PRIMARY, display: 'block' }}>
              Episodic Surges
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {goldFeatures.map((feat, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                <CheckCircle2 size={44} color={COLORS.ACCENT_GOLD} style={{ flexShrink: 0, marginTop: '4px' }} />
                <span style={{ fontFamily: FONTS.main, fontSize: '48px', fontWeight: 600, color: COLORS.INK_PRIMARY, lineHeight: 1.35 }}>
                  {feat}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </LeftZone>
  );
};

// --- BEAT 2: The 0.0 Correlation Superpower Dashboard ---
const Beat2_ZeroCorrelationDashboard: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headerPop = spring({ frame: frame - 5, fps, config: SPRING_CONFIG });
  const heroPop = spring({ frame: frame - 20, fps, config: SPRING_CONFIG });
  const node1 = spring({ frame: frame - 35, fps, config: SPRING_CONFIG });
  const node2 = spring({ frame: frame - 48, fps, config: SPRING_CONFIG });
  const node3 = spring({ frame: frame - 60, fps, config: SPRING_CONFIG });

  const nodes = [
    {
      title: 'Decoupled From Stock Sell-Offs',
      desc: 'When tech bubble earnings disappoint, gold answers to zero Wall Street analyst calls.',
      springVal: node1,
    },
    {
      title: 'Autonomous Rebalancing Fuel',
      desc: 'Trimming gold after parabolic surges generates dry powder to buy stocks at deep discounts.',
      springVal: node2,
    },
    {
      title: 'Dollar & Inflation Bastion',
      desc: 'The ultimate shield against fiscal debt, currency debasement, and surging commodity prices.',
      springVal: node3,
    },
  ];

  return (
    <LeftZone>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          textAlign: 'left',
          gap: '16px',
          marginBottom: '36px',
          opacity: headerPop,
          transform: `translateY(${interpolate(headerPop, [0, 1], [30, 0])}px)`,
        }}
      >
        <h1 style={{ fontFamily: FONTS.main, fontSize: '110px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
          Zero Correlation to Equities
        </h1>
        <p style={{ fontFamily: FONTS.main, fontSize: '50px', fontWeight: 600, color: COLORS.INK_SECONDARY, margin: 0 }}>
          Holding assets that move independently to protect the total portfolio
        </p>
      </div>

      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {/* Hero Card */}
        <div
          style={{
            backgroundColor: COLORS.BG_ELEVATED,
            borderRadius: '32px',
            padding: '48px 60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0 20px 50px rgba(201, 139, 16, 0.10)',
            opacity: heroPop,
            transform: `translateY(${interpolate(heroPop, [0, 1], [40, 0])}px)`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
            <div
              style={{
                backgroundColor: `${COLORS.ACCENT_GOLD}20`,
                width: '100px',
                height: '100px',
                borderRadius: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Activity size={60} color={COLORS.ACCENT_GOLD} />
            </div>
            <div>
              <span style={{ fontFamily: FONTS.main, fontSize: '48px', fontWeight: 800, color: COLORS.ACCENT_GOLD, textTransform: 'uppercase' }}>
                Stock Market Correlation
              </span>
              <span style={{ fontFamily: FONTS.main, fontSize: '160px', fontWeight: 900, color: COLORS.INK_PRIMARY, lineHeight: 0.95, display: 'block', margin: '4px 0' }}>
                0.00
              </span>
            </div>
          </div>

          <div style={{ backgroundColor: '#1E1B16', padding: '24px 36px', borderRadius: '24px', textAlign: 'center' }}>
            <span style={{ fontFamily: FONTS.main, fontSize: '34px', fontWeight: 900, color: '#D4A84B', textTransform: 'uppercase', display: 'block' }}>
              ASYMMETRIC POWER
            </span>
            <span style={{ fontFamily: FONTS.main, fontSize: '46px', fontWeight: 800, color: '#FCFAF6', marginTop: '6px', display: 'block' }}>
              Protects when equities plunge
            </span>
          </div>
        </div>

        {/* 3 Vertically Stacked Stabilization Nodes */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {nodes.map((n, idx) => {
            const pop = n.springVal;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: COLORS.BG_ELEVATED,
                  borderRadius: '26px',
                  padding: '40px 32px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  boxShadow: '0 10px 24px rgba(0, 0, 0, 0.04)',
                  opacity: pop,
                  transform: `translateY(${interpolate(pop, [0, 1], [30, 0])}px)`,
                }}
              >
                <div style={{ backgroundColor: `${COLORS.ACCENT_GOLD}20`, width: '64px', height: '64px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <CheckCircle2 size={40} color={COLORS.ACCENT_GOLD} />
                </div>
                <span style={{ fontFamily: FONTS.main, fontSize: '44px', fontWeight: 900, color: COLORS.INK_PRIMARY }}>
                  {n.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </LeftZone>
  );
};

export default function Block27_GoldParadoxScene() {
  return (
    <AbsoluteFill style={{ overflow: 'hidden' }}>
      <Sequence from={0}>
        <EditorialBackground />
      </Sequence>

      <AbsoluteFill>
        {/* BEAT 1: 0 - 450 frames (15s) */}
        <Sequence from={0} durationInFrames={450}>
          <Audio src={staticFile('pop-sfx.mp3')} volume={0.15} />
          <Beat1_BehavioralPillars />
        </Sequence>

        {/* BEAT 2: 450 - 900 frames (15s) */}
        <Sequence from={450}>
          <Audio src={staticFile('pop-sfx.mp3')} volume={0.15} />
          <Beat2_ZeroCorrelationDashboard />
        </Sequence>
      </AbsoluteFill>
    </AbsoluteFill>
  );
}
