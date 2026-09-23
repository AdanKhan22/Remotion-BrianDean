/**
 * BLOCK 9: Core Option B -- RSP (Equal-Weight S&P 500)
 * Duration: 1200 frames (~40 seconds)
 *
 * Beat 1 (0-300): Invesco RSP Overview Website Mockup Card
 * Beat 2 (300-600): The Holdings Contrast: NVDA 0.22% (RSP) vs ~8% (VOO)
 * Beat 3 (600-880): Reusable "Definition" Graphic: Equal-Weight Strategy
 * Beat 4 (880-1200): 5-Year Return Gap (VOO +83% vs RSP +51%)
 */

import React from "react";
import {
  AbsoluteFill,
  Sequence,
  spring,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  Audio,
  staticFile,
} from "remotion";
import {
  Equal,
  AlertCircle,
  ArrowRight,
  BookOpen,
  Globe,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";

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
  INVESCO_BLUE: "#002D72",
};

const FONTS = {
  heading: "Poppins, Inter, Helvetica Neue, Helvetica, Arial, sans-serif",
  body: "Inter, Roboto, Helvetica Neue, Helvetica, Arial, sans-serif",
};

const SPRING_CONFIG = { damping: 200, stiffness: 120, mass: 0.8 };

const EditorialBackground: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: COLORS.BG_BASE }}>
    <svg style={{ position: "absolute", width: "100%", height: "100%", opacity: 0.12 }}>
      <defs>
        <pattern id="grid-b9" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
          <circle cx="6" cy="6" r="2.5" fill={COLORS.INK_TERTIARY} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-b9)" />
    </svg>
    <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 30% 50%, rgba(250,246,236,0.9) 0%, rgba(234,227,211,0.1) 70%)", pointerEvents: "none" }} />
  </AbsoluteFill>
);

const LeftZone: React.FC<{ children: React.ReactNode }> = ({ children }) => (
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
      paddingRight: "140px",
      boxSizing: "border-box",
      borderRight: `4px solid ${COLORS.BG_RECESSED}`,
    }}
  >
    {children}
  </div>
);

// --- BEAT 1: Invesco RSP Website Overview Mockup Card ---
const Beat1_InvescoOverview: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titlePop = spring({ frame: frame - 5, fps, config: SPRING_CONFIG });
  const browserPop = spring({ frame: frame - 20, fps, config: SPRING_CONFIG });
  const badgePop = spring({ frame: frame - 60, fps, config: SPRING_CONFIG });

  return (
    <LeftZone>
      <div style={{ opacity: titlePop, transform: `translateY(${interpolate(titlePop, [0, 1], [40, 0])}px)`, marginBottom: "48px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "12px" }}>
          <Equal size={48} color={COLORS.ACCENT_DETAIL} />
          <span style={{ fontFamily: FONTS.heading, fontSize: "44px", fontWeight: 900, color: COLORS.ACCENT_DETAIL, textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Core Contender 2 -- The Anti-Concentration ETF
          </span>
        </div>
        <h1 style={{ fontFamily: FONTS.heading, fontSize: "110px", fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, lineHeight: 1.05 }}>
          Invesco S&P 500 Equal Weight <span style={{ color: COLORS.INVESCO_BLUE }}>(RSP)</span>
        </h1>
      </div>

      {/* Browser Window Mockup */}
      <div style={{
        width: "100%",
        backgroundColor: "#FFFFFF",
        borderRadius: "36px",
        overflow: "hidden",
        boxShadow: "0 32px 70px rgba(0,0,0,0.14)",
        border: `3px solid ${COLORS.BG_RECESSED}`,
        opacity: browserPop,
        transform: `translateY(${interpolate(browserPop, [0, 1], [60, 0])}px)`,
      }}>
        {/* Browser Top Navigation */}
        <div style={{
          backgroundColor: "#F4F3EE",
          padding: "20px 32px",
          display: "flex",
          alignItems: "center",
          gap: "24px",
          borderBottom: "2px solid #E5E1D8",
        }}>
          <div style={{ display: "flex", gap: "10px" }}>
            <div style={{ width: "18px", height: "18px", borderRadius: "50%", backgroundColor: "#FF5F56" }} />
            <div style={{ width: "18px", height: "18px", borderRadius: "50%", backgroundColor: "#FFBD2E" }} />
            <div style={{ width: "18px", height: "18px", borderRadius: "50%", backgroundColor: "#27C93F" }} />
          </div>

          <div style={{
            flex: 1,
            backgroundColor: "#FFFFFF",
            borderRadius: "14px",
            padding: "12px 24px",
            display: "flex",
            alignItems: "center",
            gap: "14px",
            border: "1px solid #D8D3C8",
          }}>
            <Globe size={24} color={COLORS.INK_TERTIARY} />
            <span style={{ fontFamily: FONTS.body, fontSize: "26px", fontWeight: 700, color: COLORS.INK_SECONDARY }}>
              invesco.com/us/en/financial-products/etfs/invesco-sp-500-equal-weight-etf.html
            </span>
          </div>
          <ExternalLink size={28} color={COLORS.INK_TERTIARY} />
        </div>

        {/* Invesco RSP Content */}
        <div style={{ padding: "52px 60px", backgroundColor: "#FAFAF8" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "36px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <div style={{
                backgroundColor: COLORS.INVESCO_BLUE,
                color: "#FFFFFF",
                fontFamily: FONTS.heading,
                fontSize: "36px",
                fontWeight: 900,
                padding: "8px 24px",
                borderRadius: "12px",
                letterSpacing: "1px",
              }}>
                Invesco
              </div>
              <span style={{ fontFamily: FONTS.heading, fontSize: "40px", fontWeight: 900, color: COLORS.INK_PRIMARY }}>
                RSP Product Overview
              </span>
            </div>
            
            <div style={{
              backgroundColor: "rgba(0, 45, 114, 0.1)",
              padding: "12px 24px",
              borderRadius: "100px",
              border: `2px solid ${COLORS.INVESCO_BLUE}`,
            }}>
              <span style={{ fontFamily: FONTS.heading, fontSize: "28px", fontWeight: 900, color: COLORS.INVESCO_BLUE }}>
                TICKER: RSP (NYSE Arca)
              </span>
            </div>
          </div>

          {/* Metrics Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "28px" }}>
            <div style={{ backgroundColor: "#FFFFFF", padding: "32px", borderRadius: "24px", border: "2px solid #EAE6DC", boxShadow: "0 8px 20px rgba(0,0,0,0.03)" }}>
              <div style={{ fontFamily: FONTS.body, fontSize: "26px", fontWeight: 800, color: COLORS.INK_TERTIARY, textTransform: "uppercase" }}>Expense Ratio</div>
              <div style={{ fontFamily: FONTS.heading, fontSize: "68px", fontWeight: 900, color: COLORS.ACCENT_DETAIL, marginTop: "6px" }}>0.20%</div>
              <div style={{ fontFamily: FONTS.body, fontSize: "24px", fontWeight: 700, color: COLORS.INK_PRIMARY, marginTop: "6px" }}>Equal-weight rebalance cost</div>
            </div>

            <div style={{ backgroundColor: "#FFFFFF", padding: "32px", borderRadius: "24px", border: "2px solid #EAE6DC", boxShadow: "0 8px 20px rgba(0,0,0,0.03)" }}>
              <div style={{ fontFamily: FONTS.body, fontSize: "26px", fontWeight: 800, color: COLORS.INK_TERTIARY, textTransform: "uppercase" }}>Holding Cap</div>
              <div style={{ fontFamily: FONTS.heading, fontSize: "52px", fontWeight: 900, color: COLORS.INVESCO_BLUE, marginTop: "12px", lineHeight: 1.1 }}>0.20% Each</div>
              <div style={{ fontFamily: FONTS.body, fontSize: "24px", fontWeight: 700, color: COLORS.INK_PRIMARY, marginTop: "12px" }}>500 equal slices (1/500th)</div>
            </div>

            <div style={{ backgroundColor: "#FFFFFF", padding: "32px", borderRadius: "24px", border: "2px solid #EAE6DC", boxShadow: "0 8px 20px rgba(0,0,0,0.03)" }}>
              <div style={{ fontFamily: FONTS.body, fontSize: "26px", fontWeight: 800, color: COLORS.INK_TERTIARY, textTransform: "uppercase" }}>Primary Focus</div>
              <div style={{ fontFamily: FONTS.heading, fontSize: "50px", fontWeight: 900, color: COLORS.ACCENT_HERO, marginTop: "12px", lineHeight: 1.1 }}>Broad S&P</div>
              <div style={{ fontFamily: FONTS.body, fontSize: "24px", fontWeight: 700, color: COLORS.INK_PRIMARY, marginTop: "12px" }}>Zero tech-giant dominance</div>
            </div>
          </div>
        </div>
      </div>

      <div style={{
        marginTop: "44px",
        backgroundColor: COLORS.BG_ELEVATED,
        padding: "24px 44px",
        borderRadius: "24px",
        borderLeft: `10px solid ${COLORS.INVESCO_BLUE}`,
        opacity: badgePop,
        transform: `translateY(${interpolate(badgePop, [0, 1], [30, 0])}px)`,
      }}>
        <span style={{ fontFamily: FONTS.heading, fontSize: "42px", fontWeight: 900, color: COLORS.INK_PRIMARY }}>
          Owns the exact same 500 companies as VOO — with zero single-stock concentration.
        </span>
      </div>
    </LeftZone>
  );
};

// --- BEAT 2: The Holdings Contrast: NVDA 0.22% (RSP) vs ~8% (VOO) ---
const Beat2_HoldingsContrast: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titlePop = spring({ frame: frame - 5, fps, config: SPRING_CONFIG });
  const leftPop = spring({ frame: frame - 25, fps, config: SPRING_CONFIG });
  const arrowPop = spring({ frame: frame - 65, fps, config: SPRING_CONFIG });
  const rightPop = spring({ frame: frame - 85, fps, config: SPRING_CONFIG });
  const tagPop = spring({ frame: frame - 130, fps, config: SPRING_CONFIG });

  return (
    <LeftZone>
      <div style={{ opacity: titlePop, transform: `translateY(${interpolate(titlePop, [0, 1], [40, 0])}px)`, marginBottom: "44px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "12px" }}>
          <Equal size={48} color={COLORS.ACCENT_DETAIL} />
          <span style={{ fontFamily: FONTS.heading, fontSize: "44px", fontWeight: 900, color: COLORS.ACCENT_DETAIL, textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Real Portfolio Composition
          </span>
        </div>
        <h1 style={{ fontFamily: FONTS.heading, fontSize: "110px", fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, lineHeight: 1.05 }}>
          The NVIDIA Holding <span style={{ color: COLORS.ACCENT_DETAIL }}>Contrast</span>
        </h1>
      </div>

      <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
        {/* Left: VOO Weight */}
        <div style={{
          flex: 1,
          backgroundColor: COLORS.BG_ELEVATED,
          borderRadius: "44px 0 0 44px",
          border: `3px solid ${COLORS.BG_RECESSED}`,
          borderRight: "none",
          padding: "56px",
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          opacity: leftPop,
          transform: `translateX(${interpolate(leftPop, [0, 1], [-60, 0])}px)`,
        }}>
          <span style={{ fontFamily: FONTS.body, fontSize: "42px", fontWeight: 800, color: COLORS.ACCENT_NEGATIVE, textTransform: "uppercase" }}>
            VOO (Market-Cap Weighted)
          </span>
          <span style={{ fontFamily: FONTS.heading, fontSize: "160px", fontWeight: 900, color: COLORS.ACCENT_NEGATIVE, lineHeight: 0.9 }}>
            ~8.0%
          </span>
          <span style={{ fontFamily: FONTS.body, fontSize: "44px", fontWeight: 700, color: COLORS.INK_PRIMARY }}>
            NVIDIA is #1 or #2 Holding
          </span>
          <span style={{ fontFamily: FONTS.body, fontSize: "32px", fontWeight: 700, color: COLORS.INK_SECONDARY }}>
            Top 10 holdings dictate 38% of fund
          </span>
        </div>

        {/* Center Arrow */}
        <div style={{
          backgroundColor: COLORS.INK_PRIMARY,
          width: "110px",
          height: "110px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          zIndex: 2,
          opacity: arrowPop,
          transform: `scale(${interpolate(arrowPop, [0, 1], [0, 1])})`,
          boxShadow: "0 16px 40px rgba(0,0,0,0.25)",
        }}>
          <ArrowRight size={52} color={COLORS.ACCENT_HERO} />
        </div>

        {/* Right: RSP Weight */}
        <div style={{
          flex: 1,
          backgroundColor: COLORS.ACCENT_DETAIL,
          borderRadius: "0 44px 44px 0",
          padding: "56px",
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          opacity: rightPop,
          transform: `translateX(${interpolate(rightPop, [0, 1], [60, 0])}px)`,
          boxShadow: "0 32px 70px rgba(60,110,113,0.2)",
        }}>
          <span style={{ fontFamily: FONTS.body, fontSize: "42px", fontWeight: 800, color: "rgba(255,255,255,0.85)", textTransform: "uppercase" }}>
            RSP (Equal-Weighted)
          </span>
          <span style={{ fontFamily: FONTS.heading, fontSize: "160px", fontWeight: 900, color: "#FFFFFF", lineHeight: 0.9 }}>
            0.22%
          </span>
          <span style={{ fontFamily: FONTS.body, fontSize: "44px", fontWeight: 700, color: "#FFFFFF" }}>
            NVIDIA is Capped at 1/500th
          </span>
          <span style={{ fontFamily: FONTS.body, fontSize: "32px", fontWeight: 700, color: "rgba(255,255,255,0.8)" }}>
            Exact same weight as all 499 other stocks
          </span>
        </div>
      </div>

      <div style={{
        marginTop: "36px",
        opacity: tagPop,
        transform: `translateY(${interpolate(tagPop, [0, 1], [30, 0])}px)`,
        backgroundColor: COLORS.BG_ELEVATED,
        borderRadius: "24px",
        border: `3px solid ${COLORS.BG_RECESSED}`,
        padding: "24px 44px",
        textAlign: "center",
      }}>
        <span style={{ fontFamily: FONTS.heading, fontSize: "46px", fontWeight: 800, color: COLORS.INK_PRIMARY }}>
          Even if AI drops -80%, NVIDIA's maximum damage to RSP is just ~0.18%.
        </span>
      </div>
    </LeftZone>
  );
};

// --- BEAT 3: Reusable "Definition" Graphic Card (Equal-Weight Strategy) ---
const Beat3_EqualWeightDefinition: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titlePop = spring({ frame: frame - 5, fps, config: SPRING_CONFIG });
  const cardPop = spring({ frame: frame - 18, fps, config: SPRING_CONFIG });
  const detailPop = spring({ frame: frame - 55, fps, config: SPRING_CONFIG });

  return (
    <LeftZone>
      <div style={{ opacity: titlePop, transform: `translateY(${interpolate(titlePop, [0, 1], [40, 0])}px)`, marginBottom: "40px" }}>
        <h1 style={{ fontFamily: FONTS.heading, fontSize: "110px", fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, lineHeight: 1.05 }}>
          The Strategy: <span style={{ color: COLORS.ACCENT_DETAIL }}>Equal Weighting</span>
        </h1>
      </div>

      {/* Editorial Definition Graphic Card */}
      <div style={{
        backgroundColor: COLORS.BG_ELEVATED,
        borderRadius: "44px",
        padding: "64px 72px",
        border: `3px solid ${COLORS.BG_RECESSED}`,
        boxShadow: "0 30px 60px rgba(0,0,0,0.08)",
        opacity: cardPop,
        transform: `translateY(${interpolate(cardPop, [0, 1], [50, 0])}px)`,
      }}>
        {/* Definition Header Pill */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "32px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", backgroundColor: "rgba(60, 110, 113, 0.12)", padding: "14px 28px", borderRadius: "100px", border: `2px solid ${COLORS.ACCENT_DETAIL}` }}>
            <BookOpen size={36} color={COLORS.ACCENT_DETAIL} />
            <span style={{ fontFamily: FONTS.heading, fontSize: "32px", fontWeight: 900, color: COLORS.ACCENT_DETAIL, letterSpacing: "1px", textTransform: "uppercase" }}>
              Core Definition
            </span>
          </div>
          <span style={{ fontFamily: FONTS.body, fontSize: "30px", fontWeight: 700, color: COLORS.INK_TERTIARY, fontStyle: "italic" }}>
            noun · /ˈiː.kwəl weɪt ˈstræt.ə.dʒi/
          </span>
        </div>

        {/* Word Title */}
        <div style={{ fontFamily: FONTS.heading, fontSize: "84px", fontWeight: 900, color: COLORS.INK_PRIMARY, lineHeight: 1.1, marginBottom: "20px" }}>
          Equal-Weight Strategy
        </div>

        {/* Definition Sentence */}
        <p style={{
          fontFamily: FONTS.body,
          fontSize: "46px",
          fontWeight: 700,
          color: COLORS.INK_PRIMARY,
          lineHeight: 1.35,
          margin: 0,
          borderLeft: `8px solid ${COLORS.ACCENT_DETAIL}`,
          paddingLeft: "32px",
        }}>
          An index construction method that allocates the exact same dollar amount to every company, regardless of how large or small they are.
          <span style={{ display: "block", marginTop: "12px", color: COLORS.INK_SECONDARY }}>
            In the S&P 500, every single stock receives a flat 0.20% (1/500th) portfolio weight.
          </span>
        </p>

        {/* Breakdown Boxes */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "28px",
          marginTop: "44px",
          opacity: detailPop,
          transform: `translateY(${interpolate(detailPop, [0, 1], [30, 0])}px)`,
        }}>
          <div style={{ backgroundColor: "#FFFFFF", padding: "32px", borderRadius: "24px", border: "2px solid #E0DBCF" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", color: COLORS.ACCENT_DETAIL, marginBottom: "8px" }}>
              <ShieldCheck size={36} />
              <span style={{ fontFamily: FONTS.heading, fontSize: "34px", fontWeight: 900 }}>The Advantage</span>
            </div>
            <div style={{ fontFamily: FONTS.body, fontSize: "32px", fontWeight: 700, color: COLORS.INK_PRIMARY, lineHeight: 1.25 }}>
              Completely insulates you from mega-cap tech and AI single-stock crashes.
            </div>
          </div>

          <div style={{ backgroundColor: "rgba(181, 83, 60, 0.08)", padding: "32px", borderRadius: "24px", border: `2px solid ${COLORS.ACCENT_NEGATIVE}` }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", color: COLORS.ACCENT_NEGATIVE, marginBottom: "8px" }}>
              <AlertCircle size={36} />
              <span style={{ fontFamily: FONTS.heading, fontSize: "34px", fontWeight: 900 }}>The Rebalance Drag</span>
            </div>
            <div style={{ fontFamily: FONTS.body, fontSize: "32px", fontWeight: 700, color: COLORS.INK_PRIMARY, lineHeight: 1.25 }}>
              Constantly sells off winning stocks to buy struggling laggards.
            </div>
          </div>
        </div>
      </div>
    </LeftZone>
  );
};

// --- BEAT 4: 5-Year Performance Comparison (StockAnalysis Data) ---
const Beat4_PerformanceComparison: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titlePop = spring({ frame: frame - 5, fps, config: SPRING_CONFIG });
  const barPop = spring({ frame: frame - 25, fps, config: SPRING_CONFIG });
  const gapPop = spring({ frame: frame - 100, fps, config: SPRING_CONFIG });

  const vooBar = interpolate(barPop, [0, 1], [0, 83]);
  const rspBar = interpolate(barPop, [0, 1], [0, 51]);

  return (
    <LeftZone>
      <div style={{ opacity: titlePop, transform: `translateY(${interpolate(titlePop, [0, 1], [40, 0])}px)`, marginBottom: "48px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "14px" }}>
          <AlertCircle size={44} color={COLORS.ACCENT_NEGATIVE} />
          <span style={{ fontFamily: FONTS.heading, fontSize: "44px", fontWeight: 900, color: COLORS.ACCENT_NEGATIVE, textTransform: "uppercase", letterSpacing: "0.1em" }}>
            The Rebalance Drag In Practice
          </span>
        </div>
        <h1 style={{ fontFamily: FONTS.heading, fontSize: "110px", fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, lineHeight: 1.05 }}>
          Selling Winners <span style={{ color: COLORS.ACCENT_NEGATIVE }}>to Buy Laggards</span>
        </h1>
      </div>

      {/* Comparison Card */}
      <div style={{
        width: "100%",
        backgroundColor: COLORS.BG_ELEVATED,
        borderRadius: "44px",
        border: `3px solid ${COLORS.BG_RECESSED}`,
        padding: "48px 56px",
        opacity: barPop,
        transform: `translateY(${interpolate(barPop, [0, 1], [40, 0])}px)`,
        boxShadow: "0 24px 60px rgba(0,0,0,0.06)",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontFamily: FONTS.heading, fontSize: "44px", fontWeight: 900, color: COLORS.INK_PRIMARY }}>
            5-Year Total Return Comparison
          </span>
          <span style={{ fontFamily: FONTS.body, fontSize: "26px", fontWeight: 700, color: COLORS.INK_TERTIARY }}>
            Source: StockAnalysis.com (VOO vs RSP)
          </span>
        </div>

        {/* VOO Bar */}
        <div style={{ marginTop: "36px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "12px" }}>
            <span style={{ fontFamily: FONTS.heading, fontSize: "46px", fontWeight: 900, color: COLORS.INK_PRIMARY }}>VOO (Market-Cap)</span>
            <span style={{ fontFamily: FONTS.heading, fontSize: "60px", fontWeight: 900, color: COLORS.ACCENT_HERO }}>+83%</span>
          </div>
          <div style={{ width: "100%", height: "52px", backgroundColor: COLORS.BG_RECESSED, borderRadius: "26px", overflow: "hidden" }}>
            <div style={{ width: `${vooBar}%`, height: "100%", backgroundColor: COLORS.ACCENT_HERO, borderRadius: "26px" }} />
          </div>
        </div>

        {/* RSP Bar */}
        <div style={{ marginTop: "36px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "12px" }}>
            <span style={{ fontFamily: FONTS.heading, fontSize: "46px", fontWeight: 900, color: COLORS.INK_PRIMARY }}>RSP (Equal-Weight)</span>
            <span style={{ fontFamily: FONTS.heading, fontSize: "60px", fontWeight: 900, color: COLORS.ACCENT_DETAIL }}>+51%</span>
          </div>
          <div style={{ width: "100%", height: "52px", backgroundColor: COLORS.BG_RECESSED, borderRadius: "26px", overflow: "hidden" }}>
            <div style={{ width: `${rspBar}%`, height: "100%", backgroundColor: COLORS.ACCENT_DETAIL, borderRadius: "26px" }} />
          </div>
        </div>
      </div>

      {/* Gap Callout */}
      <div style={{
        marginTop: "36px",
        display: "flex",
        alignItems: "center",
        gap: "36px",
        opacity: gapPop,
        transform: `translateY(${interpolate(gapPop, [0, 1], [30, 0])}px)`,
      }}>
        <div style={{
          backgroundColor: COLORS.ACCENT_NEGATIVE,
          borderRadius: "32px",
          padding: "24px 48px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: "0 20px 48px rgba(181,83,60,0.25)",
          flexShrink: 0,
        }}>
          <span style={{ fontFamily: FONTS.body, fontSize: "36px", fontWeight: 800, color: "rgba(255,255,255,0.9)", textTransform: "uppercase" }}>5-Year Gap</span>
          <span style={{ fontFamily: FONTS.heading, fontSize: "110px", fontWeight: 900, color: "#FFFFFF", lineHeight: 0.9 }}>-32%</span>
        </div>
        <div>
          <div style={{ fontFamily: FONTS.heading, fontSize: "50px", fontWeight: 900, color: COLORS.INK_PRIMARY, lineHeight: 1.2 }}>
            Peace of mind costs performance in bull markets.
          </div>
          <div style={{ fontFamily: FONTS.body, fontSize: "36px", fontWeight: 700, color: COLORS.INK_SECONDARY, marginTop: "8px" }}>
            RSP sacrifices the runaway gains of dominant tech leaders to limit downside risk.
          </div>
        </div>
      </div>
    </LeftZone>
  );
};

export default function Block9_RSPEqualWeightScene() {
  return (
    <AbsoluteFill style={{ overflow: "hidden" }}>
      <Sequence from={0}>
        <EditorialBackground />
      </Sequence>

      <AbsoluteFill>
        {/* BEAT 1: 0 - 300 frames (10s) */}
        <Sequence from={0} durationInFrames={300}>
          <Audio src={staticFile("pop-sfx.mp3")} volume={0.15} />
          <Beat1_InvescoOverview />
        </Sequence>

        {/* BEAT 2: 300 - 600 frames (10s) */}
        <Sequence from={300} durationInFrames={300}>
          <Audio src={staticFile("pop-sfx.mp3")} volume={0.15} />
          <Beat2_HoldingsContrast />
        </Sequence>

        {/* BEAT 3: 600 - 880 frames (9.3s) */}
        <Sequence from={600} durationInFrames={280}>
          <Audio src={staticFile("pop-sfx.mp3")} volume={0.15} />
          <Beat3_EqualWeightDefinition />
        </Sequence>

        {/* BEAT 4: 880 - 1200 frames (10.7s) */}
        <Sequence from={880}>
          <Audio src={staticFile("pop-sfx.mp3")} volume={0.15} />
          <Beat4_PerformanceComparison />
        </Sequence>
      </AbsoluteFill>
    </AbsoluteFill>
  );
}
