/**
 * BLOCK 3: S&P 500 Today — AI Concentration & Single-Bet Risks
 * Duration: 750 frames (25 seconds)
 *
 * Multi-Beat Visual Architecture:
 * - Beat 1 (0-360): Asymmetric Split Screen (The 38% Reality)
 * - Beat 2 (360-750): The $40 AI Wager
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
  Cpu,
  BrainCircuit,
  DollarSign,
  AlertTriangle,
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
    <svg style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0.15 }}>
      <defs>
        <pattern id="grid-b3" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <circle cx="4" cy="4" r="3" fill={COLORS.INK_TERTIARY} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-b3)" />
    </svg>
    <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at 50% 50%, rgba(250, 246, 236, 0.8) 0%, rgba(234, 227, 211, 0.2) 100%)`, pointerEvents: 'none' }} />
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

// --- BEAT 1: Today's S&P 500 Market Cap Pie Chart (Finhacker Modern Data) ---
const Beat1_ModernConcentration: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titlePop = spring({ frame: frame - 5, fps, config: SPRING_CONFIG });
  const chartPop = spring({ frame: frame - 25, fps, config: SPRING_CONFIG });
  const legendPop = spring({ frame: frame - 45, fps, config: SPRING_CONFIG });

  // Today's Finhacker Data (Top 10 = 38.0%, 9 of 10 Tech/AI)
  const slices = [
    { name: 'Microsoft', pct: 6.8, color: '#3C6E71', role: 'AI Cloud' },
    { name: 'Apple', pct: 6.5, color: '#5A6B7C', role: 'AI Consumer' },
    { name: 'NVIDIA', pct: 6.1, color: '#4A7C59', role: 'AI Chips' },
    { name: 'Amazon', pct: 3.8, color: '#B8862E', role: 'AWS & LLMs' },
    { name: 'Alphabet', pct: 4.2, color: '#2B5B84', role: 'Search & Gemini' },
    { name: 'Meta', pct: 2.8, color: '#3A506B', role: 'Llama AI' },
    { name: 'Broadcom', pct: 2.2, color: '#B5533C', role: 'AI Silicon' },
    { name: 'Tesla', pct: 1.8, color: '#C07D3E', role: 'Autonomy' },
    { name: 'Eli Lilly', pct: 1.9, color: '#6B8E23', role: 'Pharma' },
    { name: 'Berkshire', pct: 1.9, color: '#8A5A83', role: 'Conglomerate' },
  ];

  const animatedProgress = interpolate(chartPop, [0, 1], [0, 1]);

  // Math for donut slices
  const cx = 350;
  const cy = 350;
  const outerR = 300;
  const innerR = 175;

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

  // Remainder slice path (62%)
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
      <div style={{ marginBottom: '38px', transform: `translateY(${interpolate(titlePop, [0, 1], [30, 0])}px)`, opacity: titlePop }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '16px', backgroundColor: `${COLORS.ACCENT_NEGATIVE}20`, padding: '12px 30px', borderRadius: '24px', marginBottom: '16px' }}>
          <AlertTriangle size={42} color={COLORS.ACCENT_NEGATIVE} />
          <span style={{ fontFamily: FONTS.heading, fontSize: '42px', fontWeight: 800, color: COLORS.ACCENT_NEGATIVE, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            Today's AI Concentration
          </span>
        </div>
        <h1 style={{ fontFamily: FONTS.heading, fontSize: '110px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, lineHeight: 1.05 }}>
          Top 10 Holdings = 38.0%
        </h1>
        <p style={{ fontFamily: FONTS.body, fontSize: '52px', fontWeight: 700, color: COLORS.INK_PRIMARY, margin: '14px 0 0 0' }}>
          9 out of 10 are tech giants betting heavily on Artificial Intelligence
        </p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '70px', width: '100%' }}>
        {/* SVG Donut Chart */}
        <div
          style={{
            position: 'relative',
            width: '700px',
            height: '700px',
            flexShrink: 0,
            transform: `scale(${interpolate(chartPop, [0, 1], [0.85, 1])})`,
            opacity: chartPop,
          }}
        >
          <svg width="700" height="700" viewBox="0 0 700 700" style={{ filter: 'drop-shadow(0 16px 36px rgba(181, 83, 60, 0.12))' }}>
            {/* Remainder Slice (62%) */}
            <path d={remainderPath} fill={COLORS.BG_RECESSED} stroke={COLORS.BG_ELEVATED} strokeWidth="3" />

            {/* Top 10 Slices (38%) */}
            {renderedSlices.map((s, idx) => (
              <path key={idx} d={s.pathData} fill={s.color} stroke={COLORS.BG_ELEVATED} strokeWidth="3" />
            ))}
          </svg>

          {/* Donut Center Cutout Badge */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '290px',
              height: '290px',
              backgroundColor: COLORS.BG_ELEVATED,
              borderRadius: '50%',
              boxShadow: '0 10px 24px rgba(30, 27, 22, 0.08)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              border: `4px solid ${COLORS.ACCENT_NEGATIVE}`,
              textAlign: 'center',
            }}
          >
            <span style={{ fontFamily: FONTS.heading, fontSize: '32px', fontWeight: 800, color: COLORS.ACCENT_NEGATIVE, textTransform: 'uppercase' }}>
              Top 10 Weight
            </span>
            <span style={{ fontFamily: FONTS.heading, fontSize: '84px', fontWeight: 900, color: COLORS.ACCENT_NEGATIVE, lineHeight: 1.0, margin: '4px 0' }}>
              38.0%
            </span>
            <span style={{ fontFamily: FONTS.body, fontSize: '34px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
              9 of 10 Tech
            </span>
          </div>
        </div>

        {/* Legend / Key Holdings Grid */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            flex: 1,
            transform: `translateX(${interpolate(legendPop, [0, 1], [40, 0])}px)`,
            opacity: legendPop,
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px' }}>
            {[
              { name: 'Microsoft', role: 'AI Cloud', pct: '6.8%', color: '#3C6E71' },
              { name: 'Apple', role: 'AI Consumer', pct: '6.5%', color: '#5A6B7C' },
              { name: 'NVIDIA', role: 'AI Chips', pct: '6.1%', color: '#4A7C59' },
              { name: 'Alphabet', role: 'Gemini AI', pct: '4.2%', color: '#2B5B84' },
              { name: 'Amazon', role: 'AWS & LLMs', pct: '3.8%', color: '#B8862E' },
              { name: 'Meta', role: 'Llama AI', pct: '2.8%', color: '#3A506B' },
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: COLORS.BG_ELEVATED,
                  border: `2.5px solid ${COLORS.BG_RECESSED}`,
                  borderLeft: `10px solid ${item.color}`,
                  borderRadius: '20px',
                  padding: '18px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  boxShadow: '0 8px 20px rgba(30, 27, 22, 0.04)',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontFamily: FONTS.heading, fontSize: '44px', fontWeight: 900, color: COLORS.INK_PRIMARY }}>
                    {item.name}
                  </span>
                  <span style={{ fontFamily: FONTS.body, fontSize: '36px', fontWeight: 700, color: COLORS.INK_SECONDARY, textTransform: 'uppercase' }}>
                    {item.role}
                  </span>
                </div>
                <span style={{ fontFamily: FONTS.heading, fontSize: '50px', fontWeight: 900, color: item.color }}>
                  {item.pct}
                </span>
              </div>
            ))}
          </div>

          <div
            style={{
              backgroundColor: `${COLORS.ACCENT_NEGATIVE}18`,
              border: `2px solid ${COLORS.ACCENT_NEGATIVE}50`,
              borderRadius: '20px',
              padding: '16px 28px',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <Cpu size={40} color={COLORS.ACCENT_NEGATIVE} />
            <span style={{ fontFamily: FONTS.heading, fontSize: '38px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
              Massive Single-Sector Exposure to Artificial Intelligence
            </span>
          </div>
        </div>
      </div>
    </LeftZone>
  );
};

// --- BEAT 2: AI Capex Headlines + The $40 Wager (Brian's Exact Links) ---
const Beat2_AIWager: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titlePop = spring({ frame: frame - 5, fps, config: SPRING_CONFIG });
  const news1Pop = spring({ frame: frame - 25, fps, config: SPRING_CONFIG });
  const news2Pop = spring({ frame: frame - 45, fps, config: SPRING_CONFIG });
  const news3Pop = spring({ frame: frame - 65, fps, config: SPRING_CONFIG });
  const wagerPop = spring({ frame: frame - 95, fps, config: SPRING_CONFIG });

  const headlines = [
    {
      source: 'Goldman Sachs Insights',
      headline: 'Global AI Investment Is Forecast to Exceed $1 Trillion in 2026',
      tag: '$1T+ GLOBAL CAPEX',
      color: '#B8862E',
      springVal: news1Pop,
    },
    {
      source: 'CNBC Technology',
      headline: 'Alphabet, Microsoft, Meta & Amazon AI Cash Capex Surges Past Records',
      tag: 'BIG TECH CASH SPEND',
      color: '#3C6E71',
      springVal: news2Pop,
    },
    {
      source: 'Reuters / Bridgewater',
      headline: 'Big Tech on Track to Invest $650 Billion in AI Hardware & Infrastructure',
      tag: '$650B TECH INFRASTRUCTURE',
      color: '#B5533C',
      springVal: news3Pop,
    },
  ];

  return (
    <LeftZone>
      <div style={{ marginBottom: '32px', transform: `translateY(${interpolate(titlePop, [0, 1], [30, 0])}px)`, opacity: titlePop }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '16px', backgroundColor: `${COLORS.ACCENT_HERO}20`, padding: '12px 30px', borderRadius: '24px', marginBottom: '14px' }}>
          <BrainCircuit size={42} color={COLORS.ACCENT_HERO} />
          <span style={{ fontFamily: FONTS.heading, fontSize: '42px', fontWeight: 800, color: COLORS.ACCENT_HERO, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            The AI Investment Cycle
          </span>
        </div>
        <h1 style={{ fontFamily: FONTS.heading, fontSize: '110px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, lineHeight: 1.05 }}>
          Hundreds of Billions on a Single Bet
        </h1>
      </div>

      {/* 3 Headlines Staggered Reveal */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', width: '100%', marginBottom: '28px' }}>
        {headlines.map((item, idx) => {
          const pop = item.springVal;
          return (
            <div
              key={idx}
              style={{
                backgroundColor: COLORS.BG_ELEVATED,
                border: `3px solid ${COLORS.BG_RECESSED}`,
                borderLeft: `12px solid ${item.color}`,
                borderRadius: '24px',
                padding: '24px 36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: '0 10px 24px rgba(30, 27, 22, 0.05)',
                transform: `translateY(${interpolate(pop, [0, 1], [35, 0])}px)`,
                opacity: pop,
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{ fontFamily: FONTS.heading, fontSize: '34px', fontWeight: 800, color: item.color, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  {item.source}
                </span>
                <span style={{ fontFamily: FONTS.body, fontSize: '46px', fontWeight: 700, color: COLORS.INK_PRIMARY, maxWidth: '1400px' }}>
                  "{item.headline}"
                </span>
              </div>
              <span
                style={{
                  fontFamily: FONTS.heading,
                  fontSize: '34px',
                  fontWeight: 900,
                  backgroundColor: `${item.color}18`,
                  color: item.color,
                  padding: '10px 22px',
                  borderRadius: '16px',
                  whiteSpace: 'nowrap',
                }}
              >
                {item.tag}
              </span>
            </div>
          );
        })}
      </div>

      {/* The $40 out of $100 Wager Banner */}
      <div
        style={{
          backgroundColor: COLORS.DARK_SLAB,
          borderRadius: '32px',
          padding: '36px 54px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: '0 20px 48px rgba(0,0,0,0.20)',
          transform: `translateY(${interpolate(wagerPop, [0, 1], [40, 0])}px)`,
          opacity: wagerPop,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '36px' }}>
          <div style={{ backgroundColor: `${COLORS.ACCENT_HERO}25`, padding: '24px', borderRadius: '24px' }}>
            <DollarSign size={64} color={COLORS.ACCENT_HERO} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontFamily: FONTS.heading, fontSize: '60px', fontWeight: 900, color: '#FFFFFF' }}>
              $40 of Every $100 Invested
            </span>
            <span style={{ fontFamily: FONTS.body, fontSize: '44px', fontWeight: 600, color: 'rgba(255,255,255,0.85)' }}>
              Flows directly into companies wagering their future on AI
            </span>
          </div>
        </div>

        <div
          style={{
            backgroundColor: COLORS.ACCENT_HERO,
            padding: '16px 36px',
            borderRadius: '20px',
            boxShadow: '0 8px 20px rgba(184, 134, 46, 0.35)',
          }}
        >
          <span style={{ fontFamily: FONTS.heading, fontSize: '42px', fontWeight: 900, color: COLORS.DARK_SLAB, textTransform: 'uppercase' }}>
            40% Single Bet Risk
          </span>
        </div>
      </div>
    </LeftZone>
  );
};

export default function Block3_AIconcentrationScene() {
  return (
    <AbsoluteFill style={{ overflow: 'hidden' }}>
      <Sequence from={0}>
        <EditorialBackground />
      </Sequence>

      <AbsoluteFill>
        {/* BEAT 1: 0 - 360 frames (12s) */}
        <Sequence from={0} durationInFrames={360}>
          <Audio src={staticFile('pop-sfx.mp3')} volume={0.15} />
          <Beat1_ModernConcentration />
        </Sequence>

        {/* BEAT 2: 360 - 750 frames (13s) */}
        <Sequence from={360}>
          <Audio src={staticFile('pop-sfx.mp3')} volume={0.15} />
          <Beat2_AIWager />
        </Sequence>
      </AbsoluteFill>
    </AbsoluteFill>
  );
}
