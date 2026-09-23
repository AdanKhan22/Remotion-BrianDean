/**
 * BLOCK 6: The Bogleheads 3-ETF Portfolio Framework & Modern Adaptation
 * Duration: 1050 frames (~35 seconds)
 * 
 * 60/40 Split Architecture: Left 60% (2304px) strictly for visual storytelling,
 * Right 40% clean for speaker PiP.
 * 
 * Swiss / Editorial Graphic Design:
 * - Fonts: Poppins, Inter, Helvetica Neue
 * - Bold architectural slabs, high-contrast color blocks, zero generic card-clutter
 * - Beat 1 (0-360): The 3 Pillars of Jack Bogle (US Stocks, International, Total Bonds)
 * - Beat 2 (360-700): 1999 vs Today: The 25-Year Structural Shift (Balanced vs Single Bet)
 * - Beat 3 (700-1050): The 2026 Blueprint: Giving Every ETF A Specific Job (60% / 20-30% / 10-20%)
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
  Landmark,
  Globe2,
  ShieldCheck,
  ArrowRight,
  TrendingUp,
  AlertTriangle,
  Zap,
} from 'lucide-react';

const COLORS = {
  BG_BASE: "#F3EEE4",
  BG_ELEVATED: "#FAF6EC",
  BG_RECESSED: "#EAE3D3",
  INK_PRIMARY: "#1E1B16",
  INK_SECONDARY: "#5C564A",
  INK_TERTIARY: "#8C8474",
  ACCENT_HERO: "#B8862E",
  ACCENT_NEGATIVE: "#B5533C",
  ACCENT_DETAIL: "#3C6E71",
  DARK_SLAB: "#1A1714",
};

const FONTS = {
  heading: "Poppins, Inter, Helvetica Neue, Helvetica, Arial, sans-serif",
  body: "Inter, Roboto, Helvetica Neue, Helvetica, Arial, sans-serif",
};

const SPRING_CONFIG = { damping: 200, stiffness: 120, mass: 0.8 };

const EditorialBackground: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: COLORS.BG_BASE }}>
    <svg style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0.12 }}>
      <defs>
        <pattern id="grid-b6-editorial" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <circle cx="4" cy="4" r="2.5" fill={COLORS.INK_TERTIARY} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-b6-editorial)" />
    </svg>
    <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at 30% 30%, rgba(250, 246, 236, 0.85) 0%, rgba(234, 227, 211, 0.2) 100%)`, pointerEvents: 'none' }} />
  </AbsoluteFill>
);

// 60/40 Split Zone
const LeftZone: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div
    style={{
      position: 'absolute',
      left: 0,
      top: 0,
      width: '2304px', // 60% of 3840
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingLeft: '140px',
      paddingRight: '140px',
      boxSizing: 'border-box',
      borderRight: `4px solid ${COLORS.BG_RECESSED}`,
    }}
  >
    {children}
  </div>
);

// --- BEAT 1: The 3 Pillars of Jack Bogle (0 - 360 frames / 12s) ---
const Beat1_ClassicPillars: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titlePop = spring({ frame: frame - 5, fps, config: SPRING_CONFIG });
  const p1Pop = spring({ frame: frame - 30, fps, config: SPRING_CONFIG });
  const p2Pop = spring({ frame: frame - 90, fps, config: SPRING_CONFIG });
  const p3Pop = spring({ frame: frame - 150, fps, config: SPRING_CONFIG });
  const beamPop = spring({ frame: frame - 220, fps, config: SPRING_CONFIG });

  const pillars = [
    {
      title: 'US STOCKS',
      highlight: 'Growth Baseline',
      color: COLORS.ACCENT_DETAIL,
      icon: <Landmark size={96} color="#FFFFFF" />,
      pop: p1Pop,
    },
    {
      title: 'INTERNATIONAL',
      highlight: 'Global Exposure',
      color: COLORS.ACCENT_HERO,
      icon: <Globe2 size={96} color="#FFFFFF" />,
      pop: p2Pop,
    },
    {
      title: 'TOTAL BONDS',
      highlight: 'Capital Shield',
      color: COLORS.INK_SECONDARY,
      icon: <ShieldCheck size={96} color="#FFFFFF" />,
      pop: p3Pop,
    },
  ];

  return (
    <LeftZone>
      {/* Editorial Header */}
      <div style={{ transform: `scale(${interpolate(titlePop, [0,1], [0.92, 1])})`, opacity: titlePop, marginBottom: '64px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '16px' }}>
          <Zap size={48} color={COLORS.ACCENT_HERO} />
          <span style={{ fontFamily: FONTS.heading, fontSize: '52px', fontWeight: 800, color: COLORS.ACCENT_HERO, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            JACK BOGLE'S 1999 BLUEPRINT
          </span>
        </div>
        <h1 style={{ fontFamily: FONTS.heading, fontSize: '110px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, lineHeight: 1.05 }}>
          The Classic <span style={{ color: COLORS.ACCENT_DETAIL }}>3-ETF Model</span>
        </h1>
      </div>

      {/* 3 Bold Architectural Slabs */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px', width: '100%' }}>
        {pillars.map((p, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: COLORS.BG_ELEVATED,
              borderRadius: '40px',
              border: `4px solid ${COLORS.BG_RECESSED}`,
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              transform: `translateY(${interpolate(p.pop, [0, 1], [100, 0])}px)`,
              opacity: p.pop,
              boxShadow: '0 24px 60px rgba(0,0,0,0.06)',
            }}
          >
            {/* Top Solid Color Header */}
            <div style={{
              backgroundColor: p.color,
              padding: '56px 36px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '24px',
            }}>
              {p.icon}
              <span style={{ fontFamily: FONTS.heading, fontSize: '64px', fontWeight: 900, color: '#FFFFFF', letterSpacing: '0.04em', textAlign: 'center' }}>
                {p.title}
              </span>
            </div>

            {/* Bottom Content Area */}
            <div style={{
              padding: '48px 36px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            }}>
              <span style={{ fontFamily: FONTS.heading, fontSize: '54px', fontWeight: 800, color: p.color }}>
                {p.highlight}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Solid Bottom Anchor Beam */}
      <div style={{
        marginTop: '56px',
        backgroundColor: COLORS.INK_PRIMARY,
        borderRadius: '32px',
        padding: '38px 60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '28px',
        transform: `translateY(${interpolate(beamPop, [0, 1], [40, 0])}px)`,
        opacity: beamPop,
        boxShadow: '0 20px 48px rgba(17,16,12,0.2)',
      }}>
        <span style={{ fontFamily: FONTS.heading, fontSize: '52px', fontWeight: 900, color: COLORS.BG_BASE, letterSpacing: '0.08em' }}>
          SIMPLE • DIVERSIFIED • ULTRA LOW COST
        </span>
      </div>
    </LeftZone>
  );
};

// --- BEAT 2: The 25-Year Structural Shift (360 - 700 frames / 11.3s) ---
const Beat2_ShiftComparison: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titlePop = spring({ frame: frame - 5, fps, config: SPRING_CONFIG });
  const block1999 = spring({ frame: frame - 25, fps, config: SPRING_CONFIG });
  const arrowPop = spring({ frame: frame - 70, fps, config: SPRING_CONFIG });
  const block2026 = spring({ frame: frame - 105, fps, config: SPRING_CONFIG });
  const alertPop = spring({ frame: frame - 180, fps, config: SPRING_CONFIG });

  return (
    <LeftZone>
      {/* Header */}
      <div style={{ transform: `scale(${interpolate(titlePop, [0,1], [0.92, 1])})`, opacity: titlePop, marginBottom: '64px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '16px' }}>
          <AlertTriangle size={48} color={COLORS.ACCENT_NEGATIVE} />
          <span style={{ fontFamily: FONTS.heading, fontSize: '52px', fontWeight: 800, color: COLORS.ACCENT_NEGATIVE, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            THE 25-YEAR REALITY CHECK
          </span>
        </div>
        <h1 style={{ fontFamily: FONTS.heading, fontSize: '110px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, lineHeight: 1.05 }}>
          The Market Has <span style={{ color: COLORS.ACCENT_NEGATIVE }}>Fundamentally Changed</span>
        </h1>
      </div>

      {/* 2 Contrasting Hero Modules */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '36px', alignItems: 'center', width: '100%' }}>
        
        {/* 1999: Balanced Spread */}
        <div style={{
          backgroundColor: COLORS.BG_ELEVATED,
          borderRadius: '44px',
          border: `5px solid ${COLORS.ACCENT_DETAIL}`,
          padding: '52px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
          transform: `translateX(${interpolate(block1999, [0, 1], [-60, 0])}px)`,
          opacity: block1999,
          boxShadow: '0 20px 48px rgba(0,0,0,0.06)',
        }}>
          <span style={{ fontFamily: FONTS.heading, fontSize: '130px', fontWeight: 900, color: COLORS.ACCENT_DETAIL, lineHeight: 0.9 }}>
            1999
          </span>
          <span style={{ fontFamily: FONTS.heading, fontSize: '52px', fontWeight: 800, color: COLORS.INK_PRIMARY, textAlign: 'center' }}>
            Broad Balance
          </span>
          <div style={{
            backgroundColor: `${COLORS.ACCENT_DETAIL}15`,
            padding: '24px 36px',
            borderRadius: '24px',
            textAlign: 'center',
            width: '100%',
          }}>
            <span style={{ fontFamily: FONTS.heading, fontSize: '76px', fontWeight: 900, color: COLORS.ACCENT_DETAIL, display: 'block', lineHeight: 1 }}>
              12.8%
            </span>
            <span style={{ fontFamily: FONTS.body, fontSize: '44px', fontWeight: 700, color: COLORS.INK_SECONDARY, marginTop: '8px', display: 'block' }}>
              Top 10 Tech Weight
            </span>
          </div>
          <span style={{ fontFamily: FONTS.body, fontSize: '46px', fontWeight: 700, color: COLORS.INK_TERTIARY }}>
            No single company &gt; 5%
          </span>
        </div>

        {/* Center Animated Shift Arrow */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
          transform: `scale(${arrowPop})`,
          opacity: arrowPop,
        }}>
          <div style={{ backgroundColor: COLORS.ACCENT_HERO, padding: '24px', borderRadius: '50%', boxShadow: '0 12px 32px rgba(201,139,16,0.4)' }}>
            <ArrowRight size={64} color="#FFFFFF" strokeWidth={3} />
          </div>
          <span style={{ fontFamily: FONTS.heading, fontSize: '44px', fontWeight: 900, color: COLORS.ACCENT_HERO }}>
            +27 YEARS
          </span>
        </div>

        {/* 2026: Solid Brick Red Module */}
        <div style={{
          backgroundColor: COLORS.ACCENT_NEGATIVE,
          borderRadius: '44px',
          padding: '52px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
          transform: `translateX(${interpolate(block2026, [0, 1], [60, 0])}px)`,
          opacity: block2026,
          boxShadow: '0 24px 60px rgba(181,83,60,0.3)',
        }}>
          <span style={{ fontFamily: FONTS.heading, fontSize: '130px', fontWeight: 900, color: '#FFFFFF', lineHeight: 0.9 }}>
            2026
          </span>
          <span style={{ fontFamily: FONTS.heading, fontSize: '52px', fontWeight: 800, color: '#FFFFFF', textAlign: 'center' }}>
            Single-Bet AI Risk
          </span>
          <div style={{
            backgroundColor: 'rgba(255,255,255,0.18)',
            padding: '24px 36px',
            borderRadius: '24px',
            textAlign: 'center',
            width: '100%',
          }}>
            <span style={{ fontFamily: FONTS.heading, fontSize: '76px', fontWeight: 900, color: '#FFFFFF', display: 'block', lineHeight: 1 }}>
              38.0%
            </span>
            <span style={{ fontFamily: FONTS.body, fontSize: '44px', fontWeight: 700, color: 'rgba(255,255,255,0.9)', marginTop: '8px', display: 'block' }}>
              Top 10 Tech Weight
            </span>
          </div>
          <span style={{ fontFamily: FONTS.body, fontSize: '46px', fontWeight: 800, color: '#FFFFFF' }}>
            9 of Top 10 are Tech
          </span>
        </div>

      </div>

      {/* Bottom Takeaway */}
      <div style={{
        marginTop: '56px',
        backgroundColor: COLORS.DARK_SLAB,
        borderRadius: '32px',
        padding: '36px 56px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '24px',
        transform: `translateY(${interpolate(alertPop, [0, 1], [30, 0])}px)`,
        opacity: alertPop,
        boxShadow: '0 20px 48px rgba(0,0,0,0.2)',
      }}>
        <AlertTriangle size={56} color={COLORS.ACCENT_HERO} />
        <span style={{ fontFamily: FONTS.heading, fontSize: '52px', fontWeight: 800, color: '#FFFFFF' }}>
          "Set-and-forget" is now a concentrated tech bet
        </span>
      </div>
    </LeftZone>
  );
};

// --- BEAT 3: The 2026 Blueprint: Give Every ETF A Job (700 - 1050 frames / 11.7s) ---
const Beat3_JobsBlueprint: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titlePop = spring({ frame: frame - 5, fps, config: SPRING_CONFIG });
  const row1Pop = spring({ frame: frame - 30, fps, config: SPRING_CONFIG });
  const row2Pop = spring({ frame: frame - 100, fps, config: SPRING_CONFIG });
  const row3Pop = spring({ frame: frame - 170, fps, config: SPRING_CONFIG });
  const footerPop = spring({ frame: frame - 240, fps, config: SPRING_CONFIG });

  const tiers = [
    {
      title: 'THE CORE ENGINE',
      weight: '60%',
      mandate: 'Broad US Equities Foundation',
      color: COLORS.ACCENT_DETAIL,
      pop: row1Pop,
    },
    {
      title: 'COMPLEMENTARY HOLDING',
      weight: '20-30%',
      mandate: 'International & Value Diversification',
      color: COLORS.ACCENT_HERO,
      pop: row2Pop,
    },
    {
      title: 'THE DIVERSIFIER',
      weight: '10-20%',
      mandate: 'Bonds & Capital Shield',
      color: COLORS.INK_SECONDARY,
      pop: row3Pop,
    },
  ];

  return (
    <LeftZone>
      {/* Header */}
      <div style={{ transform: `scale(${interpolate(titlePop, [0,1], [0.92, 1])})`, opacity: titlePop, marginBottom: '48px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '16px' }}>
          <TrendingUp size={48} color={COLORS.ACCENT_DETAIL} />
          <span style={{ fontFamily: FONTS.heading, fontSize: '52px', fontWeight: 800, color: COLORS.ACCENT_DETAIL, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            THE 2026 BLUEPRINT
          </span>
        </div>
        <h1 style={{ fontFamily: FONTS.heading, fontSize: '110px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, lineHeight: 1.05 }}>
          Give Every ETF <span style={{ color: COLORS.ACCENT_HERO }}>A Specific Job</span>
        </h1>
      </div>

      {/* 3 High-Impact Horizontal Tiers */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', width: '100%' }}>
        {tiers.map((t, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: COLORS.BG_ELEVATED,
              borderRadius: '36px',
              border: `4px solid ${COLORS.BG_RECESSED}`,
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'stretch',
              transform: `translateY(${interpolate(t.pop, [0, 1], [60, 0])}px)`,
              opacity: t.pop,
              boxShadow: '0 16px 40px rgba(0,0,0,0.05)',
            }}
          >
            {/* Left Solid Percentage Block */}
            <div style={{
              backgroundColor: t.color,
              width: '320px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '32px',
              flexShrink: 0,
            }}>
              <span style={{ fontFamily: FONTS.heading, fontSize: '84px', fontWeight: 900, color: '#FFFFFF', lineHeight: 1 }}>
                {t.weight}
              </span>
            </div>

            {/* Right Mandate Content */}
            <div style={{
              flex: 1,
              padding: '36px 52px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '12px',
            }}>
              <span style={{ fontFamily: FONTS.heading, fontSize: '60px', fontWeight: 900, color: COLORS.INK_PRIMARY }}>
                {t.title}
              </span>
              <span style={{ fontFamily: FONTS.body, fontSize: '50px', fontWeight: 700, color: t.color }}>
                {t.mandate}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Banner */}
      <div style={{
        marginTop: '44px',
        backgroundColor: COLORS.INK_PRIMARY,
        borderRadius: '32px',
        padding: '32px 56px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '24px',
        transform: `translateY(${interpolate(footerPop, [0, 1], [30, 0])}px)`,
        opacity: footerPop,
      }}>
        <Zap size={48} color={COLORS.ACCENT_HERO} />
        <span style={{ fontFamily: FONTS.heading, fontSize: '52px', fontWeight: 800, color: COLORS.BG_BASE }}>
          Next Step: Selecting your 60% Core Wealth Engine
        </span>
      </div>
    </LeftZone>
  );
};

export default function Block6_FrameworkScene() {
  return (
    <AbsoluteFill style={{ overflow: 'hidden' }}>
      <Sequence from={0}>
        <EditorialBackground />
      </Sequence>

      <AbsoluteFill>
        {/* BEAT 1: 0 - 360 frames (12s) */}
        <Sequence from={0} durationInFrames={360}>
          <Audio src={staticFile('pop-sfx.mp3')} volume={0.15} />
          <Beat1_ClassicPillars />
        </Sequence>

        {/* BEAT 2: 360 - 700 frames (11.3s) */}
        <Sequence from={360} durationInFrames={340}>
          <Audio src={staticFile('pop-sfx.mp3')} volume={0.15} />
          <Beat2_ShiftComparison />
        </Sequence>

        {/* BEAT 3: 700 - 1050 frames (11.7s) */}
        <Sequence from={700}>
          <Audio src={staticFile('pop-sfx.mp3')} volume={0.15} />
          <Beat3_JobsBlueprint />
        </Sequence>
      </AbsoluteFill>
    </AbsoluteFill>
  );
}