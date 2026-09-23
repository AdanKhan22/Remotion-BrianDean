/**
 * BLOCK 4: Balancing Concentration Risk
 * Duration: 690 frames (23 seconds)
 *
 * 60/40 Split Zone:
 * - Beat 1 (0-360): The Growth Engine (Massive Full-Height 2X Chart, Zero Clutter)
 * - Beat 2 (360-690): The Balance Scale + Sequential Drops
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
        <pattern id="grid-b4" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          <circle cx="4" cy="4" r="3" fill={COLORS.INK_TERTIARY} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-b4)" />
    </svg>
    <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at 35% 35%, rgba(250, 246, 236, 0.85) 0%, rgba(234, 227, 211, 0.25) 100%)`, pointerEvents: 'none' }} />
  </AbsoluteFill>
);

// 60/40 Split Zone (2304px is 60% of 3840px 4K Canvas)
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

// --- BEAT 1: The Growth Engine (Clean, Massive Hero Chart) ---
const Beat1_GrowthEngine: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titlePop = spring({ frame: frame - 5, fps, config: SPRING_CONFIG });
  const chartCardPop = spring({ frame: frame - 16, fps, config: SPRING_CONFIG });
  const lineProgress = spring({ frame: frame - 30, fps, config: { damping: 40, stiffness: 80, mass: 1 } });
  const badgePop = spring({ frame: frame - 60, fps, config: SPRING_CONFIG });

  // Taller, expansive 4K SVG Chart Path (Width: 1680, Height: 580)
  const pathD = "M 180,440 C 440,430 600,360 820,330 C 1040,300 1240,200 1380,165 C 1500,135 1580,80 1660,45";
  const areaD = `${pathD} L 1660,510 L 180,510 Z`;
  const pathLength = 1700;
  const strokeOffset = interpolate(lineProgress, [0, 1], [pathLength, 0]);

  const currentValue = Math.round(interpolate(lineProgress, [0, 1], [10000, 20450]));

  return (
    <LeftZone>
      {/* 1. Header */}
      <div style={{ marginBottom: '50px', transform: `scale(${interpolate(titlePop, [0, 1], [0.94, 1])})`, opacity: titlePop }}>
        <h1 style={{ fontFamily: FONTS.heading, fontSize: '130px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, lineHeight: 1.05, letterSpacing: '-0.04em' }}>
          The Incredible <span style={{ color: COLORS.ACCENT_DETAIL }}>Growth Engine</span>
        </h1>
        <div style={{ fontFamily: FONTS.body, fontSize: '54px', fontWeight: 700, color: COLORS.INK_SECONDARY, marginTop: '16px' }}>
          S&P 500: Growth of $10,000 Over 4 Years
        </div>
      </div>

      {/* 2. Giant Hero Chart Card (No useless sub-boxes) */}
      <div style={{
        width: '100%',
        backgroundColor: COLORS.BG_ELEVATED,
        borderRadius: '52px',
        padding: '64px 72px 54px 72px',
        boxSizing: 'border-box',
        boxShadow: '0 30px 80px rgba(0,0,0,0.07)',
        border: `3px solid rgba(60, 110, 113, 0.22)`,
        transform: `translateY(${interpolate(chartCardPop, [0, 1], [40, 0])}px)`,
        opacity: chartCardPop
      }}>
        {/* Card Header Stats */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
          <div>
            <div style={{ fontFamily: FONTS.heading, fontSize: '36px', fontWeight: 800, color: COLORS.ACCENT_DETAIL, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Total Portfolio Value
            </div>
            <div style={{ fontFamily: FONTS.heading, fontSize: '130px', fontWeight: 900, color: COLORS.INK_PRIMARY, lineHeight: 0.95, marginTop: '12px', letterSpacing: '-0.04em' }}>
              ${currentValue.toLocaleString()}
            </div>
          </div>

          <div style={{
            backgroundColor: 'rgba(60, 110, 113, 0.12)',
            padding: '24px 44px',
            borderRadius: '32px',
            border: `3px solid ${COLORS.ACCENT_DETAIL}`,
            transform: `scale(${interpolate(badgePop, [0, 1], [0.85, 1])})`,
            opacity: badgePop,
            textAlign: 'right'
          }}>
            <div style={{ fontFamily: FONTS.heading, fontSize: '70px', fontWeight: 900, color: COLORS.ACCENT_DETAIL, lineHeight: 1 }}>
              +104.5%
            </div>
            <div style={{ fontFamily: FONTS.body, fontSize: '36px', fontWeight: 800, color: COLORS.INK_PRIMARY, marginTop: '8px' }}>
              2X Return (Doubled)
            </div>
          </div>
        </div>

        {/* Big, Clear SVG Chart */}
        <div style={{ position: 'relative', width: '100%', height: '580px' }}>
          <svg viewBox="0 0 1780 580" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
            <defs>
              <linearGradient id="chartGradientBig" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={COLORS.ACCENT_DETAIL} stopOpacity={0.38} />
                <stop offset="100%" stopColor={COLORS.ACCENT_DETAIL} stopOpacity={0.0} />
              </linearGradient>
            </defs>

            {/* Gridlines & Big Legible Labels */}
            <line x1="140" y1="60" x2="1700" y2="60" stroke={COLORS.BG_RECESSED} strokeWidth="3" strokeDasharray="10 10" />
            <text x="110" y="74" fill={COLORS.INK_TERTIARY} fontSize="46" fontWeight="800" textAnchor="end" fontFamily={FONTS.body}>$20k</text>

            <line x1="140" y1="210" x2="1700" y2="210" stroke={COLORS.BG_RECESSED} strokeWidth="3" strokeDasharray="10 10" />
            <text x="110" y="224" fill={COLORS.INK_TERTIARY} fontSize="46" fontWeight="800" textAnchor="end" fontFamily={FONTS.body}>$16k</text>

            <line x1="140" y1="360" x2="1700" y2="360" stroke={COLORS.BG_RECESSED} strokeWidth="3" strokeDasharray="10 10" />
            <text x="110" y="374" fill={COLORS.INK_TERTIARY} fontSize="46" fontWeight="800" textAnchor="end" fontFamily={FONTS.body}>$12k</text>

            <line x1="140" y1="510" x2="1700" y2="510" stroke={COLORS.INK_TERTIARY} strokeWidth="4" />
            <text x="110" y="524" fill={COLORS.INK_PRIMARY} fontSize="48" fontWeight="900" textAnchor="end" fontFamily={FONTS.body}>$8k</text>

            {/* Area Fill */}
            <path d={areaD} fill="url(#chartGradientBig)" opacity={lineProgress} />

            {/* Main Trend Line */}
            <path
              d={pathD}
              fill="none"
              stroke={COLORS.ACCENT_DETAIL}
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray={pathLength}
              strokeDashoffset={strokeOffset}
            />

            {/* Start Pill ($10,000) */}
            <circle cx="180" cy="440" r="16" fill={COLORS.ACCENT_DETAIL} />
            <rect x="130" y="340" width="300" height="72" rx="20" fill={COLORS.BG_RECESSED} />
            <text x="280" y="390" fill={COLORS.INK_PRIMARY} fontSize="42" fontWeight="800" textAnchor="middle" fontFamily={FONTS.body}>
              $10,000 (Start)
            </text>

            {/* End Pill ($20,450+) */}
            {lineProgress > 0.85 && (
              <g transform={`scale(${interpolate(badgePop, [0, 1], [0, 1])})`} style={{ transformOrigin: '1660px 45px' }}>
                <circle cx="1660" cy="45" r="32" fill="rgba(60, 110, 113, 0.3)" />
                <circle cx="1660" cy="45" r="18" fill={COLORS.ACCENT_DETAIL} />
                <rect x="1410" y="-22" width="390" height="82" rx="22" fill={COLORS.DARK_SLAB} />
                <text x="1605" y="34" fill="#FFF" fontSize="46" fontWeight="900" textAnchor="middle" fontFamily={FONTS.heading}>
                  $20,450+ (2X)
                </text>
              </g>
            )}

            {/* Year Labels along the bottom */}
            <text x="180" y="575" fill={COLORS.INK_PRIMARY} fontSize="50" fontWeight="800" textAnchor="middle" fontFamily={FONTS.body}>2022</text>
            <text x="550" y="575" fill={COLORS.INK_PRIMARY} fontSize="50" fontWeight="800" textAnchor="middle" fontFamily={FONTS.body}>2023</text>
            <text x="920" y="575" fill={COLORS.INK_PRIMARY} fontSize="50" fontWeight="800" textAnchor="middle" fontFamily={FONTS.body}>2024</text>
            <text x="1290" y="575" fill={COLORS.INK_PRIMARY} fontSize="50" fontWeight="800" textAnchor="middle" fontFamily={FONTS.body}>2025</text>
            <text x="1660" y="575" fill={COLORS.ACCENT_DETAIL} fontSize="52" fontWeight="900" textAnchor="middle" fontFamily={FONTS.body}>2026</text>
          </svg>
        </div>
      </div>
    </LeftZone>
  );
};

// --- BEAT 2: The Balance Scale ---
const Beat2_BalanceScale: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titlePop = spring({ frame: frame - 5, fps, config: SPRING_CONFIG });
  const scalePop = spring({ frame: frame - 20, fps, config: SPRING_CONFIG });

  const leftDrop = spring({ frame: frame - 50, fps, config: SPRING_CONFIG });
  const rightDrop = spring({ frame: frame - 130, fps, config: SPRING_CONFIG });

  const rotation = interpolate(leftDrop, [0, 1], [0, -9]) + interpolate(rightDrop, [0, 1], [0, 9]);

  return (
    <LeftZone>
      <div style={{ width: '100%', marginBottom: '60px', transform: `scale(${interpolate(titlePop, [0, 1], [0.94, 1])})`, opacity: titlePop }}>
        <h1 style={{ fontFamily: FONTS.heading, fontSize: '130px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, lineHeight: 1.08, letterSpacing: '-0.04em' }}>
          The Goal: <span style={{ color: COLORS.ACCENT_HERO }}>Balance & Dampen</span>
        </h1>
        <div style={{ fontFamily: FONTS.body, fontSize: '54px', fontWeight: 700, color: COLORS.INK_SECONDARY, marginTop: '16px' }}>
          Striking Equilibrium Between Growth & Defense
        </div>
      </div>

      <div style={{ position: 'relative', width: '100%', height: '760px', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', opacity: scalePop }}>

        {/* Scale Base */}
        <div style={{ position: 'absolute', bottom: 10, width: '1550px', height: '28px', backgroundColor: COLORS.DARK_SLAB, borderRadius: '14px', transform: `rotate(${rotation}deg)`, transformOrigin: 'center' }}>

          {/* Left Plate (S&P 500) */}
          <div style={{ position: 'absolute', left: '80px', bottom: '100%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '16px', height: '190px', backgroundColor: COLORS.INK_TERTIARY }} />
            <div style={{ width: '500px', height: '24px', backgroundColor: COLORS.INK_TERTIARY, borderRadius: '12px' }} />

            <div style={{
              position: 'absolute',
              bottom: '50px',
              transform: `translateY(${interpolate(leftDrop, [0, 1], [-500, 0])}px)`,
              opacity: leftDrop,
              backgroundColor: COLORS.ACCENT_DETAIL,
              padding: '54px 50px',
              borderRadius: '44px',
              width: '480px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '24px',
              boxShadow: '0 35px 80px rgba(0,0,0,0.22)'
            }}>
              <Zap size={96} color={COLORS.BG_BASE} />
              <div style={{ fontFamily: FONTS.heading, fontSize: '64px', fontWeight: 900, color: COLORS.BG_BASE, textAlign: 'center', lineHeight: 1.1 }}>
                Core Engine
              </div>
              <div style={{ fontFamily: FONTS.body, fontSize: '44px', fontWeight: 800, color: 'rgba(255,255,255,0.95)', textAlign: 'center' }}>
                Maximizes Growth
              </div>
            </div>
          </div>

          {/* Right Plate (Diversifiers) */}
          <div style={{ position: 'absolute', right: '80px', bottom: '100%', transform: 'translateX(50%)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '16px', height: '190px', backgroundColor: COLORS.INK_TERTIARY }} />
            <div style={{ width: '500px', height: '24px', backgroundColor: COLORS.INK_TERTIARY, borderRadius: '12px' }} />

            <div style={{
              position: 'absolute',
              bottom: '50px',
              transform: `translateY(${interpolate(rightDrop, [0, 1], [-500, 0])}px)`,
              opacity: rightDrop,
              backgroundColor: COLORS.ACCENT_HERO,
              padding: '54px 50px',
              borderRadius: '44px',
              width: '480px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '24px',
              boxShadow: '0 35px 80px rgba(0,0,0,0.22)'
            }}>
              <ShieldCheck size={96} color={COLORS.BG_BASE} />
              <div style={{ fontFamily: FONTS.heading, fontSize: '64px', fontWeight: 900, color: COLORS.BG_BASE, textAlign: 'center', lineHeight: 1.1 }}>
                Diversifiers
              </div>
              <div style={{ fontFamily: FONTS.body, fontSize: '44px', fontWeight: 800, color: 'rgba(255,255,255,0.95)', textAlign: 'center' }}>
                Protects Capital
              </div>
            </div>
          </div>
        </div>

        {/* Pivot Triangle */}
        <div style={{
          width: 0,
          height: 0,
          borderLeft: '70px solid transparent',
          borderRight: '70px solid transparent',
          borderBottom: `110px solid ${COLORS.DARK_SLAB}`,
          marginBottom: '2px',
          zIndex: 10
        }} />
      </div>

      {/* Explanation Text Pill */}
      <div style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '64px',
        opacity: rightDrop,
        transform: `translateY(${interpolate(rightDrop, [0, 1], [30, 0])}px)`
      }}>
        <div style={{
          backgroundColor: COLORS.BG_ELEVATED,
          padding: '30px 80px',
          borderRadius: '100px',
          boxShadow: '0 20px 50px rgba(0,0,0,0.06)',
          border: `3px solid ${COLORS.BG_RECESSED}`
        }}>
          <span style={{ fontFamily: FONTS.heading, fontSize: '54px', fontWeight: 900, color: COLORS.INK_PRIMARY }}>
            Balance Wealth Compounding with Shock Absorption
          </span>
        </div>
      </div>
    </LeftZone>
  );
};

export default function Block4_BalancingRiskScene() {
  return (
    <AbsoluteFill style={{ overflow: 'hidden' }}>
      <Sequence from={0}>
        <EditorialBackground />
      </Sequence>

      <AbsoluteFill>
        {/* BEAT 1: 0 - 360 frames (12s) */}
        <Sequence from={0} durationInFrames={360}>
          <Audio src={staticFile('pop-sfx.mp3')} volume={0.15} />
          <Beat1_GrowthEngine />
        </Sequence>

        {/* BEAT 2: 360 - 690 frames (11s) */}
        <Sequence from={360}>
          <Audio src={staticFile('pop-sfx.mp3')} volume={0.15} />
          <Beat2_BalanceScale />
        </Sequence>
      </AbsoluteFill>
    </AbsoluteFill>
  );
}