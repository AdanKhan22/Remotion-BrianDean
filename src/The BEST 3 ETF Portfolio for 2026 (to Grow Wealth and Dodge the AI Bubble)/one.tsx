/**
 * BLOCK 2: 1999 S&P 500 Historical Diversification
 * Duration: 1050 frames (~35 seconds)
 *
 * Multi-Beat Visual Architecture (60/40 Split):
 * - Beat 1 (0-360): Typography & Timeline (1999) + Progressive text reveal
 * - Beat 2 (360-720): Dynamic Donut Chart (74.6% Remainder) + Big Clean Holdings
 * - Beat 3 (720-1050): The 5% Rule Visualization + Tech Total
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
  ShieldAlert,
  Cpu,
  History,
  CheckCircle2,
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
        <pattern id="grid-b2" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          <circle cx="4" cy="4" r="3" fill={COLORS.INK_TERTIARY} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-b2)" />
    </svg>
    <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at 35% 35%, rgba(250, 246, 236, 0.85) 0%, rgba(234, 227, 211, 0.25) 100%)`, pointerEvents: 'none' }} />
  </AbsoluteFill>
);

// 60/40 Split Zone (2304px = 60% of 3840px 4K Canvas)
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

// --- BEAT 1: Full-Screen Typography & Timeline ---
const Beat1_Timeline1999: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const yearPop = spring({ frame: frame - 10, fps, config: SPRING_CONFIG });
  const scaleYear = interpolate(yearPop, [0, 1], [0.85, 1]);

  const text1Pop = spring({ frame: frame - 50, fps, config: SPRING_CONFIG });
  const text2Pop = spring({ frame: frame - 110, fps, config: SPRING_CONFIG });
  const text3Pop = spring({ frame: frame - 170, fps, config: SPRING_CONFIG });

  return (
    <LeftZone>
      <div style={{ transform: `scale(${scaleYear})`, opacity: yearPop, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '20px' }}>
          <History size={72} color={COLORS.ACCENT_DETAIL} />
          <span style={{ fontFamily: FONTS.heading, fontSize: '52px', fontWeight: 800, color: COLORS.ACCENT_DETAIL, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Historical Perspective
          </span>
        </div>
        <h1 style={{ fontFamily: FONTS.heading, fontSize: '280px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, letterSpacing: '-0.04em', lineHeight: 0.95 }}>
          1999
        </h1>
      </div>

      <div style={{ marginTop: '80px', display: 'flex', flexDirection: 'column', gap: '36px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px', opacity: text1Pop, transform: `translateX(${interpolate(text1Pop, [0, 1], [-40, 0])}px)` }}>
          <div style={{ backgroundColor: COLORS.INK_PRIMARY, padding: '22px 28px', borderRadius: '32px' }}>
            <span style={{ fontFamily: FONTS.heading, fontSize: '50px', fontWeight: 900, color: COLORS.BG_BASE }}>500</span>
          </div>
          <span style={{ fontFamily: FONTS.body, fontSize: '64px', fontWeight: 700, color: COLORS.INK_PRIMARY }}>
            Biggest Publicly Traded US Companies
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '32px', opacity: text2Pop, transform: `translateX(${interpolate(text2Pop, [0, 1], [-40, 0])}px)` }}>
          <CheckCircle2 size={72} color={COLORS.ACCENT_HERO} />
          <span style={{ fontFamily: FONTS.body, fontSize: '64px', fontWeight: 700, color: COLORS.INK_PRIMARY }}>
            True Broad-Market Diversification
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '32px', opacity: text3Pop, transform: `translateX(${interpolate(text3Pop, [0, 1], [-40, 0])}px)` }}>
          <CheckCircle2 size={72} color={COLORS.ACCENT_DETAIL} />
          <span style={{ fontFamily: FONTS.body, fontSize: '64px', fontWeight: 700, color: COLORS.INK_PRIMARY }}>
            Height of the Dot-Com Bubble
          </span>
        </div>
      </div>
    </LeftZone>
  );
};

// --- BEAT 2: 1999 S&P 500 Market Cap Donut (Big, Legible, De-Cluttered) ---
const Beat2_IndustryPillars: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titlePop = spring({ frame: frame - 5, fps, config: SPRING_CONFIG });
  const chartPop = spring({ frame: frame - 20, fps, config: SPRING_CONFIG });
  const legendPop = spring({ frame: frame - 40, fps, config: SPRING_CONFIG });

  const slices = [
    { name: 'Microsoft', pct: 4.9, color: '#3C6E71' },
    { name: 'GE', pct: 4.2, color: '#B8862E' },
    { name: 'Cisco', pct: 3.1, color: '#4A7C59' },
    { name: 'Walmart', pct: 2.8, color: '#2B5B84' },
    { name: 'Exxon', pct: 2.6, color: '#B5533C' },
    { name: 'Intel', pct: 2.4, color: '#5A6B7C' },
    { name: 'Lucent', pct: 2.1, color: '#8A5A83' },
    { name: 'IBM', pct: 1.9, color: '#3A506B' },
    { name: 'Citigroup', pct: 1.8, color: '#C07D3E' },
    { name: 'Merck', pct: 1.6, color: '#6B8E23' },
  ];

  const animatedProgress = interpolate(chartPop, [0, 1], [0, 1]);

  // Scaled up SVG math (Center 420, 420; Outer 380, Inner 220)
  const cx = 420;
  const cy = 420;
  const outerR = 370;
  const innerR = 220;

  const getCoordinatesForPercent = (percent: number, radius: number) => {
    const x = cx + radius * Math.cos(2 * Math.PI * percent - Math.PI / 2);
    const y = cy + radius * Math.sin(2 * Math.PI * percent - Math.PI / 2);
    return [x, y];
  };

  let cumulativePercent = 0;
  const renderedSlices = slices.map((s) => {
    const startPct = cumulativePercent * animatedProgress;
    cumulativePercent += s.pct / 100;
    const endPct = cumulativePercent * animatedProgress;

    const [startX, startY] = getCoordinatesForPercent(startPct, outerR);
    const [endX, endY] = getCoordinatesForPercent(endPct, outerR);
    const [innerEndX, innerEndY] = getCoordinatesForPercent(endPct, innerR);
    const [innerStartX, innerStartY] = getCoordinatesForPercent(startPct, innerR);

    const largeArcFlag = endPct - startPct > 0.5 ? 1 : 0;
    const pathData = `M ${startX} ${startY} A ${outerR} ${outerR} 0 ${largeArcFlag} 1 ${endX} ${endY} L ${innerEndX} ${innerEndY} A ${innerR} ${innerR} 0 ${largeArcFlag} 0 ${innerStartX} ${innerStartY} Z`;

    return { ...s, pathData };
  });

  // Remainder slice (74.6%)
  const remainderStart = cumulativePercent * animatedProgress;
  const remainderEnd = 1.0 * animatedProgress;
  const [remStartX, remStartY] = getCoordinatesForPercent(remainderStart, outerR);
  const [remEndX, remEndY] = getCoordinatesForPercent(remainderEnd, outerR);
  const [remInnerEndX, remInnerEndY] = getCoordinatesForPercent(remainderEnd, innerR);
  const [remInnerStartX, remInnerStartY] = getCoordinatesForPercent(remainderStart, innerR);
  const remLargeArc = remainderEnd - remainderStart > 0.5 ? 1 : 0;
  const remainderPath = `M ${remStartX} ${remStartY} A ${outerR} ${outerR} 0 ${remLargeArc} 1 ${remEndX} ${remEndY} L ${remInnerEndX} ${remInnerEndY} A ${innerR} ${innerR} 0 ${remLargeArc} 0 ${remInnerStartX} ${remInnerStartY} Z`;

  return (
    <LeftZone>
      {/* Header */}
      <div style={{ marginBottom: '46px', transform: `translateY(${interpolate(titlePop, [0, 1], [30, 0])}px)`, opacity: titlePop }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: `${COLORS.ACCENT_HERO}20`, padding: '12px 28px', borderRadius: '24px', marginBottom: '16px' }}>
          <span style={{ fontFamily: FONTS.heading, fontSize: '38px', fontWeight: 800, color: COLORS.ACCENT_HERO, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            1999 Dot-Com Diversification
          </span>
        </div>
        <h1 style={{ fontFamily: FONTS.heading, fontSize: '125px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, lineHeight: 1.05, letterSpacing: '-0.04em' }}>
          Top 10 Holdings = Just 25.4%
        </h1>
        <p style={{ fontFamily: FONTS.body, fontSize: '54px', fontWeight: 700, color: COLORS.INK_SECONDARY, margin: '14px 0 0 0' }}>
          Spread broadly across industrials, retail, energy & tech
        </p>
      </div>

      {/* Main Content: Giant Donut + Clean Big Holdings */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '60px', width: '100%' }}>
        {/* Scaled Donut Chart */}
        <div
          style={{
            position: 'relative',
            width: '840px',
            height: '840px',
            flexShrink: 0,
            transform: `scale(${interpolate(chartPop, [0, 1], [0.88, 1])})`,
            opacity: chartPop,
          }}
        >
          <svg width="840" height="840" viewBox="0 0 840 840" style={{ filter: 'drop-shadow(0 20px 45px rgba(30, 27, 22, 0.12))' }}>
            {/* Remainder Slice */}
            <path d={remainderPath} fill={COLORS.BG_RECESSED} stroke={COLORS.BG_ELEVATED} strokeWidth="4" />

            {/* Top 10 Slices */}
            {renderedSlices.map((s, idx) => (
              <path key={idx} d={s.pathData} fill={s.color} stroke={COLORS.BG_ELEVATED} strokeWidth="4" />
            ))}
          </svg>

          {/* Donut Center Cutout (Giant & Bold) */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '380px',
              height: '380px',
              backgroundColor: COLORS.BG_ELEVATED,
              borderRadius: '50%',
              boxShadow: '0 16px 36px rgba(30, 27, 22, 0.08)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              border: `5px solid ${COLORS.BG_RECESSED}`,
              textAlign: 'center',
            }}
          >
            <span style={{ fontFamily: FONTS.heading, fontSize: '38px', fontWeight: 800, color: COLORS.ACCENT_HERO, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Other 490
            </span>
            <span style={{ fontFamily: FONTS.heading, fontSize: '110px', fontWeight: 900, color: COLORS.INK_PRIMARY, lineHeight: 0.95, margin: '8px 0' }}>
              74.6%
            </span>
            <span style={{ fontFamily: FONTS.body, fontSize: '42px', fontWeight: 800, color: COLORS.INK_SECONDARY }}>
              Broad Market
            </span>
          </div>
        </div>

        {/* Big Clean Holdings Column */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            flex: 1,
            transform: `translateX(${interpolate(legendPop, [0, 1], [40, 0])}px)`,
            opacity: legendPop,
          }}
        >
          {/* Key Anchors Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '18px' }}>
            {[
              { name: 'Microsoft', sector: 'Tech', pct: '4.9%', color: '#3C6E71' },
              { name: 'GE', sector: 'Industrials', pct: '4.2%', color: '#B8862E' },
              { name: 'Walmart', sector: 'Retail', pct: '2.8%', color: '#2B5B84' },
              { name: 'Exxon', sector: 'Energy', pct: '2.6%', color: '#B5533C' },
              { name: 'Intel', sector: 'Tech', pct: '2.4%', color: '#5A6B7C' },
              { name: 'Citigroup', sector: 'Banking', pct: '1.8%', color: '#C07D3E' },
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: COLORS.BG_ELEVATED,
                  border: `3px solid ${COLORS.BG_RECESSED}`,
                  borderLeft: `12px solid ${item.color}`,
                  borderRadius: '24px',
                  padding: '24px 28px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  boxShadow: '0 10px 24px rgba(30, 27, 22, 0.04)',
                }}
              >
                <div>
                  <div style={{ fontFamily: FONTS.heading, fontSize: '48px', fontWeight: 900, color: COLORS.INK_PRIMARY, lineHeight: 1.1 }}>
                    {item.name}
                  </div>
                  <div style={{ fontFamily: FONTS.body, fontSize: '32px', fontWeight: 700, color: COLORS.INK_TERTIARY, textTransform: 'uppercase', marginTop: '4px' }}>
                    {item.sector}
                  </div>
                </div>
                <div style={{ fontFamily: FONTS.heading, fontSize: '56px', fontWeight: 900, color: item.color }}>
                  {item.pct}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Highlight Callout (Big & High Contrast) */}
          <div
            style={{
              backgroundColor: `${COLORS.ACCENT_HERO}18`,
              border: `3px solid ${COLORS.ACCENT_HERO}60`,
              borderRadius: '24px',
              padding: '26px 36px',
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              boxShadow: '0 12px 28px rgba(184, 134, 46, 0.08)',
            }}
          >
            <CheckCircle2 size={54} color={COLORS.ACCENT_HERO} style={{ flexShrink: 0 }} />
            <span style={{ fontFamily: FONTS.heading, fontSize: '44px', fontWeight: 800, color: COLORS.INK_PRIMARY, lineHeight: 1.15 }}>
              No single company exceeded 5% of the index
            </span>
          </div>
        </div>
      </div>
    </LeftZone>
  );
};

// --- BEAT 3: The 5% Rule Visualization ---
const Beat3_FivePercentRule: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const blockPop1 = spring({ frame: frame - 15, fps, config: SPRING_CONFIG });
  const blockPop2 = spring({ frame: frame - 130, fps, config: SPRING_CONFIG });

  return (
    <LeftZone>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '50px' }}>
        {/* Top Block: Max Weight */}
        <div style={{
          backgroundColor: COLORS.ACCENT_DETAIL,
          borderRadius: '52px',
          padding: '72px 80px',
          display: 'flex',
          alignItems: 'center',
          gap: '64px',
          boxShadow: '0 30px 70px rgba(60, 110, 113, 0.25)',
          transform: `translateX(${interpolate(blockPop1, [0, 1], [-80, 0])}px)`,
          opacity: blockPop1,
        }}>
          <ShieldAlert size={180} color={COLORS.BG_BASE} style={{ flexShrink: 0 }} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontFamily: FONTS.heading, fontSize: '50px', fontWeight: 800, color: COLORS.BG_BASE, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Maximum Single-Stock Exposure
            </span>
            <span style={{ fontFamily: FONTS.heading, fontSize: '190px', fontWeight: 900, color: COLORS.BG_BASE, lineHeight: 1.0, margin: '14px 0' }}>
              &lt; 5%
            </span>
            <span style={{ fontFamily: FONTS.body, fontSize: '56px', fontWeight: 700, color: 'rgba(255,255,255,0.95)' }}>
              No individual giant dominated the benchmark
            </span>
          </div>
        </div>

        {/* Bottom Block: Tech Total */}
        <div style={{
          backgroundColor: COLORS.BG_ELEVATED,
          border: `8px solid ${COLORS.ACCENT_HERO}`,
          borderRadius: '52px',
          padding: '72px 80px',
          display: 'flex',
          alignItems: 'center',
          gap: '64px',
          boxShadow: '0 30px 70px rgba(0,0,0,0.06)',
          transform: `translateX(${interpolate(blockPop2, [0, 1], [-80, 0])}px)`,
          opacity: blockPop2,
        }}>
          <Cpu size={180} color={COLORS.ACCENT_HERO} style={{ flexShrink: 0 }} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontFamily: FONTS.heading, fontSize: '50px', fontWeight: 800, color: COLORS.INK_SECONDARY, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Entire Tech Sector Total
            </span>
            <span style={{ fontFamily: FONTS.heading, fontSize: '180px', fontWeight: 900, color: COLORS.ACCENT_HERO, lineHeight: 1.0, margin: '14px 0' }}>
              12.8%
            </span>
            <span style={{ fontFamily: FONTS.body, fontSize: '56px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
              Even at the peak of the dot-com bubble
            </span>
          </div>
        </div>
      </div>
    </LeftZone>
  );
};

export default function Block2_HistoricDiversificationScene() {
  return (
    <AbsoluteFill style={{ overflow: 'hidden' }}>
      <Sequence from={0}>
        <EditorialBackground />
      </Sequence>

      <AbsoluteFill>
        {/* BEAT 1: 0 - 360 frames (12s) */}
        <Sequence from={0} durationInFrames={360}>
          <Audio src={staticFile('pop-sfx.mp3')} volume={0.15} />
          <Beat1_Timeline1999 />
        </Sequence>

        {/* BEAT 2: 360 - 720 frames (12s) */}
        <Sequence from={360} durationInFrames={360}>
          <Audio src={staticFile('pop-sfx.mp3')} volume={0.15} />
          <Beat2_IndustryPillars />
        </Sequence>

        {/* BEAT 3: 720 - 1050 frames (11s) */}
        <Sequence from={720}>
          <Audio src={staticFile('pop-sfx.mp3')} volume={0.15} />
          <Beat3_FivePercentRule />
        </Sequence>
      </AbsoluteFill>
    </AbsoluteFill>
  );
}