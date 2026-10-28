/**
 * VOO / S&P 500 100-YEAR CONSISTENCY (ZERO OVERLAP FIX)
 * 4K Canvas (3840 x 2160) — 60/40 Left Zone
 * Dedicated collision-free lanes for every milestone badge
 */

import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

const COLORS = {
  BG_BASE: "#F3EEE4",
  BG_ELEVATED: "#FAF6EC",
  BG_RECESSED: "#EAE3D3",
  INK_PRIMARY: "#1E1B16",
  INK_SECONDARY: "#5C564A",
  INK_TERTIARY: "#8C8474",

  EMERALD: "#0D7A53",
  EMERALD_BG: "rgba(13, 122, 83, 0.12)",
  CRISIS_DOT: "#D94830",
  DARK_SLAB: "#1A1714",
};

const FONTS = {
  heading: "Poppins, Inter, -apple-system, sans-serif",
  body: "Inter, -apple-system, sans-serif",
};

const SPRING_CONFIG = { damping: 200, stiffness: 120, mass: 0.8 };

export const VOO100YearPerformance: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrances
  const titlePop = spring({ frame: frame - 4, fps, config: SPRING_CONFIG });
  const cardPop = spring({ frame: frame - 16, fps, config: SPRING_CONFIG });

  // Smooth curve draw
  const drawProgress = spring({
    frame: frame - 28,
    fps,
    config: { damping: 35, stiffness: 55, mass: 1 },
  });

  const statPop = spring({ frame: frame - 80, fps, config: SPRING_CONFIG });

  // 100-Year Compounding Curve Path (ViewBox: 1720 x 660)
  const pathD = `
    M 120,520 
    C 200,500 260,560 320,540 
    C 400,510 460,480 540,440 
    C 640,410 740,420 840,380 
    C 940,360 1040,340 1140,250 
    C 1200,200 1260,280 1320,260 
    C 1370,240 1420,360 1480,280 
    C 1540,210 1580,140 1640,85
  `;
  const areaD = `${pathD} L 1640,580 L 120,580 Z`;
  const pathLength = 1900;
  const strokeOffset = interpolate(drawProgress, [0, 1], [pathLength, 0]);

  // SMART-PLACED MILESTONES (Zero Collisions Guaranteed)
  const milestones = [
    {
      name: "World War II",
      x: 420,
      y: 495,
      badgeY: 410,
      isBelow: false,
      trigger: 0.22
    },
    {
      name: "18% Interest Rates",
      x: 840,
      y: 380,
      badgeY: 290,
      isBelow: false,
      trigger: 0.46
    },
    {
      name: "Dot-Com Crash",
      x: 1140,
      y: 250,
      badgeY: 155,
      isBelow: false,
      trigger: 0.66
    },
    {
      // In the 2008 valley below line
      name: "2008 Financial Crisis",
      x: 1380,
      y: 330,
      badgeY: 435,
      isBelow: true,
      trigger: 0.82
    },
    {
      // MOVED BELOW THE LINE: 200px below "All-Time Highs"
      name: "Pandemic & Tariffs",
      x: 1540,
      y: 200,
      badgeY: 300,
      isBelow: true,
      trigger: 0.91
    },
  ];

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.BG_BASE,
        fontFamily: FONTS.body,
        overflow: "hidden",
      }}
    >
      {/* Background Ambience Grid */}
      <svg style={{ position: "absolute", width: "100%", height: "100%", opacity: 0.12 }}>
        <defs>
          <pattern id="grid-voo-fix2" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <circle cx="4" cy="4" r="3" fill={COLORS.INK_TERTIARY} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-voo-fix2)" />
      </svg>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at 35% 35%, rgba(250, 246, 236, 0.85) 0%, rgba(234, 227, 211, 0.25) 100%)`,
          pointerEvents: "none",
        }}
      />

      {/* 60/40 Split Zone (2304px = 60% of 3840px 4K Canvas) */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "2304px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft: "140px",
          paddingRight: "120px",
          boxSizing: "border-box",
        }}
      >
        {/* 1. Header */}
        <div
          style={{
            marginBottom: "36px",
            opacity: titlePop,
            transform: `translateY(${interpolate(titlePop, [0, 1], [30, 0])}px)`,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "18px", marginBottom: "14px" }}>
            <div
              style={{
                backgroundColor: COLORS.EMERALD_BG,
                border: `3px solid ${COLORS.EMERALD}40`,
                padding: "12px 28px",
                borderRadius: "9999px",
              }}
            >
              <span
                style={{
                  fontFamily: FONTS.heading,
                  fontSize: "38px",
                  fontWeight: 900,
                  color: COLORS.EMERALD,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                100-Year Consistency
              </span>
            </div>

          </div>

          <h1
            style={{
              fontFamily: FONTS.heading,
              fontSize: "125px",
              fontWeight: 900,
              color: COLORS.INK_PRIMARY,
              margin: 0,
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
            }}
          >
            A Century of Market Compounding
          </h1>
          <p
            style={{
              fontFamily: FONTS.body,
              fontSize: "48px",
              fontWeight: 700,
              color: COLORS.INK_SECONDARY,
              margin: "12px 0 0 0",
            }}
          >
            Through world wars, pandemics, double-digit rates & tariffs.
          </p>
        </div>

        {/* 2. Full-Width 100-Year Chart Card */}
        <div
          style={{
            width: "100%",
            backgroundColor: COLORS.BG_ELEVATED,
            borderRadius: "56px",
            padding: "52px 68px 44px 68px",
            boxSizing: "border-box",
            boxShadow: "0 32px 85px rgba(0,0,0,0.08)",
            border: `3px solid rgba(0,0,0,0.07)`,
            opacity: cardPop,
            transform: `translateY(${interpolate(cardPop, [0, 1], [40, 0])}px)`,
          }}
        >
          {/* Top Metric Header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "20px" }}>
            <div>
              <div style={{ fontFamily: FONTS.heading, fontSize: "36px", fontWeight: 800, color: COLORS.INK_TERTIARY, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                Historic Average Annual Return
              </div>
              <div style={{ fontFamily: FONTS.heading, fontSize: "145px", fontWeight: 900, color: COLORS.EMERALD, lineHeight: 0.95, marginTop: "8px", letterSpacing: "-0.04em" }}>
                8 to 10%
              </div>
            </div>

            <div
              style={{
                backgroundColor: COLORS.EMERALD_BG,
                border: `3px solid ${COLORS.EMERALD}`,
                padding: "24px 40px",
                borderRadius: "28px",
                opacity: statPop,
                transform: `scale(${interpolate(statPop, [0, 1], [0.85, 1])})`,
                textAlign: "right",
              }}
            >
              <div style={{ fontFamily: FONTS.heading, fontSize: "56px", fontWeight: 900, color: COLORS.EMERALD, lineHeight: 1 }}>
                Unbroken Trend
              </div>
              <div style={{ fontFamily: FONTS.body, fontSize: "32px", fontWeight: 800, color: COLORS.INK_PRIMARY, marginTop: "6px" }}>
                1926 → Present
              </div>
            </div>
          </div>

          {/* Interactive Chart Container */}
          <div style={{ position: "relative", width: "100%", height: "660px" }}>
            {/* SVG Background Layer */}
            <svg viewBox="0 0 1720 660" style={{ width: "100%", height: "100%", overflow: "visible" }}>
              <defs>
                <linearGradient id="centuryGradFix2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={COLORS.EMERALD} stopOpacity={0.35} />
                  <stop offset="100%" stopColor={COLORS.EMERALD} stopOpacity={0.0} />
                </linearGradient>
              </defs>

              {/* Baseline Grid */}
              <line x1="120" y1="540" x2="1660" y2="540" stroke={COLORS.INK_TERTIARY} strokeWidth="4" />

              {/* Area Fill */}
              <path d={areaD} fill="url(#centuryGradFix2)" opacity={drawProgress} />

              {/* Compounding Curve */}
              <path
                d={pathD}
                fill="none"
                stroke={COLORS.EMERALD}
                strokeWidth="12"
                strokeLinecap="round"
                strokeDasharray={pathLength}
                strokeDashoffset={strokeOffset}
              />

              {/* 1926 Starting Dot */}
              <circle cx="120" cy="520" r="16" fill={COLORS.EMERALD} />

              {/* Milestone Dots & Connector Stems */}
              {milestones.map((m, idx) => {
                if (drawProgress < m.trigger) return null;
                const stemStartY = m.y;
                // Clean stem pointing either up or down to badge
                const stemEndY = m.isBelow ? m.badgeY - 26 : m.badgeY + 26;

                return (
                  <g key={idx}>
                    <circle cx={m.x} cy={m.y} r="14" fill={COLORS.CRISIS_DOT} stroke="#FFFFFF" strokeWidth="4" />
                    <line
                      x1={m.x}
                      y1={stemStartY}
                      x2={m.x}
                      y2={stemEndY}
                      stroke={COLORS.CRISIS_DOT}
                      strokeWidth="4"
                      strokeDasharray="6 6"
                    />
                  </g>
                );
              })}

              {/* Peak Glow Bead at All-Time High */}
              {drawProgress > 0.94 && (
                <g>
                  <circle cx="1640" cy="85" r="32" fill="rgba(13, 122, 83, 0.35)" />
                  <circle cx="1640" cy="85" r="18" fill={COLORS.EMERALD} stroke="#FFFFFF" strokeWidth="4" />
                </g>
              )}

              {/* Timeline Year Labels Along the Bottom */}
              <text x="120" y="605" fill={COLORS.INK_PRIMARY} fontSize="46" fontWeight="900" textAnchor="middle" fontFamily={FONTS.body}>1926</text>
              <text x="500" y="605" fill={COLORS.INK_PRIMARY} fontSize="44" fontWeight="800" textAnchor="middle" fontFamily={FONTS.body}>1950</text>
              <text x="880" y="605" fill={COLORS.INK_PRIMARY} fontSize="44" fontWeight="800" textAnchor="middle" fontFamily={FONTS.body}>1975</text>
              <text x="1260" y="605" fill={COLORS.INK_PRIMARY} fontSize="44" fontWeight="800" textAnchor="middle" fontFamily={FONTS.body}>2000</text>
              <text x="1640" y="605" fill={COLORS.EMERALD} fontSize="48" fontWeight="900" textAnchor="middle" fontFamily={FONTS.body}>Today</text>
            </svg>

            {/* 
              ==================================================================
              HTML AUTO-SIZING BADGES (Zero Overlaps Guaranteed)
              ==================================================================
            */}
            {milestones.map((m, idx) => {
              if (drawProgress < m.trigger) return null;
              const opacity = interpolate(drawProgress, [m.trigger, m.trigger + 0.04], [0, 1]);

              return (
                <div
                  key={idx}
                  style={{
                    position: "absolute",
                    left: `${(m.x / 1720) * 100}%`,
                    top: `${(m.badgeY / 660) * 100}%`,
                    transform: "translate(-50%, -50%)",
                    backgroundColor: COLORS.DARK_SLAB,
                    color: "#FFFFFF",
                    padding: "12px 34px",
                    borderRadius: "9999px",
                    fontSize: "36px",
                    fontWeight: 900,
                    fontFamily: FONTS.heading,
                    letterSpacing: "-0.02em",
                    whiteSpace: "nowrap",
                    width: "max-content",
                    boxShadow: "0 12px 28px rgba(0,0,0,0.35)",
                    border: "2px solid rgba(255,255,255,0.18)",
                    opacity,
                    zIndex: 10,
                  }}
                >
                  {m.name}
                </div>
              );
            })}

            {/* All-Time Highs Peak Badge (Isolated at Top-Right) */}
            {drawProgress > 0.94 && (
              <div
                style={{
                  position: "absolute",
                  left: `${(1640 / 1720) * 100}%`,
                  top: `${(25 / 660) * 100}%`,
                  transform: "translate(-50%, 0)",
                  backgroundColor: COLORS.DARK_SLAB,
                  color: "#FFFFFF",
                  padding: "14px 38px",
                  borderRadius: "9999px",
                  fontSize: "38px",
                  fontWeight: 900,
                  fontFamily: FONTS.heading,
                  whiteSpace: "nowrap",
                  width: "max-content",
                  boxShadow: "0 14px 32px rgba(0,0,0,0.4)",
                  border: `3px solid ${COLORS.EMERALD}`,
                  zIndex: 20,
                }}
              >
                All-Time Highs
              </div>
            )}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

export default VOO100YearPerformance;