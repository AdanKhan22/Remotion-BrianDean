/**
 * BLOCK 8: Core Option A -- VOO & The Double-Edged Sword of Market-Cap Weighting
 * Duration: 1200 frames (~40 seconds)
 *
 * Beat 1 (0-300): Vanguard VOO Overview Website Mockup Card
 * Beat 2 (300-600): 100-Year S&P 500 Consistency & Resilience (8-10% CAGR)
 * Beat 3 (600-880): Reusable "Definition" Graphic: Market-Cap Weighted
 * Beat 4 (880-1200): The Built-In Safety Valve (Auto-Rebalance Safeguard)
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
  Award,
  TrendingUp,
  ShieldCheck,
  RefreshCw,
  Zap,
  BookOpen,
  Globe,
  ExternalLink,
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
  VANGUARD_RED: "#96151D",
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
        <pattern id="grid-b8" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
          <circle cx="6" cy="6" r="2.5" fill={COLORS.INK_TERTIARY} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-b8)" />
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

// --- BEAT 1: Vanguard VOO Website Overview Mockup Card ---
const Beat1_VanguardOverview: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titlePop = spring({ frame: frame - 5, fps, config: SPRING_CONFIG });
  const browserPop = spring({ frame: frame - 20, fps, config: SPRING_CONFIG });
  const badgePop = spring({ frame: frame - 60, fps, config: SPRING_CONFIG });

  return (
    <LeftZone>
      <div style={{ opacity: titlePop, transform: `translateY(${interpolate(titlePop, [0, 1], [40, 0])}px)`, marginBottom: "48px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "12px" }}>
          <Award size={48} color={COLORS.ACCENT_HERO} />
          <span style={{ fontFamily: FONTS.heading, fontSize: "44px", fontWeight: 900, color: COLORS.ACCENT_HERO, textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Core Contender 1 -- The Gold Standard
          </span>
        </div>
        <h1 style={{ fontFamily: FONTS.heading, fontSize: "110px", fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, lineHeight: 1.05 }}>
          Vanguard S&P 500 ETF <span style={{ color: COLORS.VANGUARD_RED }}>(VOO)</span>
        </h1>
      </div>

      {/* High-Fidelity Browser Window Mockup */}
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
        {/* Browser Top Navigation Bar */}
        <div style={{
          backgroundColor: "#F4F3EE",
          padding: "20px 32px",
          display: "flex",
          alignItems: "center",
          gap: "24px",
          borderBottom: "2px solid #E5E1D8",
        }}>
          {/* Window dots */}
          <div style={{ display: "flex", gap: "10px" }}>
            <div style={{ width: "18px", height: "18px", borderRadius: "50%", backgroundColor: "#FF5F56" }} />
            <div style={{ width: "18px", height: "18px", borderRadius: "50%", backgroundColor: "#FFBD2E" }} />
            <div style={{ width: "18px", height: "18px", borderRadius: "50%", backgroundColor: "#27C93F" }} />
          </div>

          {/* URL Bar */}
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
              investor.vanguard.com/investment-products/etfs/profile/voo
            </span>
          </div>
          <ExternalLink size={28} color={COLORS.INK_TERTIARY} />
        </div>

        {/* Website Page Content */}
        <div style={{ padding: "52px 60px", backgroundColor: "#FAFAF8" }}>
          {/* Vanguard Brand Banner */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "36px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <div style={{
                backgroundColor: COLORS.VANGUARD_RED,
                color: "#FFFFFF",
                fontFamily: FONTS.heading,
                fontSize: "36px",
                fontWeight: 900,
                padding: "8px 24px",
                borderRadius: "12px",
                letterSpacing: "1px",
              }}>
                Vanguard
              </div>
              <span style={{ fontFamily: FONTS.heading, fontSize: "40px", fontWeight: 900, color: COLORS.INK_PRIMARY }}>
                VOO Profile & Overview
              </span>
            </div>
            
            <div style={{
              backgroundColor: "rgba(150, 21, 29, 0.1)",
              padding: "12px 24px",
              borderRadius: "100px",
              border: `2px solid ${COLORS.VANGUARD_RED}`,
            }}>
              <span style={{ fontFamily: FONTS.heading, fontSize: "28px", fontWeight: 900, color: COLORS.VANGUARD_RED }}>
                TICKER: VOO (NYSE Arca)
              </span>
            </div>
          </div>

          {/* Key Vanguard VOO Spec Metrics */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "28px" }}>
            <div style={{ backgroundColor: "#FFFFFF", padding: "32px", borderRadius: "24px", border: "2px solid #EAE6DC", boxShadow: "0 8px 20px rgba(0,0,0,0.03)" }}>
              <div style={{ fontFamily: FONTS.body, fontSize: "26px", fontWeight: 800, color: COLORS.INK_TERTIARY, textTransform: "uppercase" }}>Expense Ratio</div>
              <div style={{ fontFamily: FONTS.heading, fontSize: "68px", fontWeight: 900, color: COLORS.ACCENT_DETAIL, marginTop: "6px" }}>0.03%</div>
              <div style={{ fontFamily: FONTS.body, fontSize: "24px", fontWeight: 700, color: COLORS.INK_PRIMARY, marginTop: "6px" }}>Ultra-low cost index fee</div>
            </div>

            <div style={{ backgroundColor: "#FFFFFF", padding: "32px", borderRadius: "24px", border: "2px solid #EAE6DC", boxShadow: "0 8px 20px rgba(0,0,0,0.03)" }}>
              <div style={{ fontFamily: FONTS.body, fontSize: "26px", fontWeight: 800, color: COLORS.INK_TERTIARY, textTransform: "uppercase" }}>Benchmark Index</div>
              <div style={{ fontFamily: FONTS.heading, fontSize: "52px", fontWeight: 900, color: COLORS.INK_PRIMARY, marginTop: "12px", lineHeight: 1.1 }}>S&P 500®</div>
              <div style={{ fontFamily: FONTS.body, fontSize: "24px", fontWeight: 700, color: COLORS.INK_PRIMARY, marginTop: "12px" }}>500 leading US corporations</div>
            </div>

            <div style={{ backgroundColor: "#FFFFFF", padding: "32px", borderRadius: "24px", border: "2px solid #EAE6DC", boxShadow: "0 8px 20px rgba(0,0,0,0.03)" }}>
              <div style={{ fontFamily: FONTS.body, fontSize: "26px", fontWeight: 800, color: COLORS.INK_TERTIARY, textTransform: "uppercase" }}>Weighting Style</div>
              <div style={{ fontFamily: FONTS.heading, fontSize: "50px", fontWeight: 900, color: COLORS.ACCENT_HERO, marginTop: "12px", lineHeight: 1.1 }}>Market-Cap</div>
              <div style={{ fontFamily: FONTS.body, fontSize: "24px", fontWeight: 700, color: COLORS.INK_PRIMARY, marginTop: "12px" }}>Proportional by company value</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Takeaway */}
      <div style={{
        marginTop: "44px",
        backgroundColor: COLORS.BG_ELEVATED,
        padding: "24px 44px",
        borderRadius: "24px",
        borderLeft: `10px solid ${COLORS.VANGUARD_RED}`,
        opacity: badgePop,
        transform: `translateY(${interpolate(badgePop, [0, 1], [30, 0])}px)`,
      }}>
        <span style={{ fontFamily: FONTS.heading, fontSize: "42px", fontWeight: 900, color: COLORS.INK_PRIMARY }}>
          The default starting point for millions of investors worldwide.
        </span>
      </div>
    </LeftZone>
  );
};

// --- BEAT 2: 100-Year Historical Consistency & Resilience ---
const Beat2_HistoricalResilience: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titlePop = spring({ frame: frame - 5, fps, config: SPRING_CONFIG });
  const slabPop = spring({ frame: frame - 20, fps, config: SPRING_CONFIG });
  const crisis1 = spring({ frame: frame - 50, fps, config: SPRING_CONFIG });
  const crisis2 = spring({ frame: frame - 80, fps, config: SPRING_CONFIG });
  const crisis3 = spring({ frame: frame - 110, fps, config: SPRING_CONFIG });
  const crisis4 = spring({ frame: frame - 140, fps, config: SPRING_CONFIG });

  const crises = [
    { label: "World Wars", years: "1914 - 1945", pop: crisis1 },
    { label: "Great Depression & Crashes", years: "1929, 2000, 2008", pop: crisis2 },
    { label: "Double-Digit Interest Rates", years: "1980 - 1982", pop: crisis3 },
    { label: "Global Pandemics", years: "1918, 2020", pop: crisis4 },
  ];

  return (
    <LeftZone>
      <div style={{ opacity: titlePop, transform: `translateY(${interpolate(titlePop, [0, 1], [40, 0])}px)`, marginBottom: "40px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "12px" }}>
          <Award size={48} color={COLORS.ACCENT_HERO} />
          <span style={{ fontFamily: FONTS.heading, fontSize: "44px", fontWeight: 900, color: COLORS.ACCENT_HERO, textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Long-Term Historical Performance
          </span>
        </div>
        <h1 style={{ fontFamily: FONTS.heading, fontSize: "110px", fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, lineHeight: 1.05 }}>
          100 Years of <span style={{ color: COLORS.ACCENT_HERO }}>Unstoppable Growth</span>
        </h1>
      </div>

      <div style={{ display: "flex", gap: "44px", width: "100%", alignItems: "stretch" }}>
        {/* Dark Hero Slab */}
        <div style={{
          backgroundColor: COLORS.DARK_SLAB,
          borderRadius: "44px",
          padding: "60px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          minWidth: "620px",
          opacity: slabPop,
          transform: `scale(${interpolate(slabPop, [0, 1], [0.92, 1])})`,
          boxShadow: "0 36px 72px rgba(0,0,0,0.22)",
        }}>
          <span style={{ fontFamily: FONTS.body, fontSize: "38px", fontWeight: 800, color: "rgba(255,255,255,0.7)", textTransform: "uppercase", letterSpacing: "1px" }}>
            100-Year Historical Average
          </span>
          <span style={{ fontFamily: FONTS.heading, fontSize: "190px", fontWeight: 900, color: COLORS.ACCENT_HERO, lineHeight: 0.9, marginTop: "12px" }}>
            8-10%
          </span>
          <span style={{ fontFamily: FONTS.heading, fontSize: "46px", fontWeight: 900, color: "#FFFFFF", marginTop: "16px" }}>
            Compounded Annual Return
          </span>
          <p style={{ fontFamily: FONTS.body, fontSize: "32px", fontWeight: 600, color: "rgba(255,255,255,0.75)", margin: "16px 0 0 0", lineHeight: 1.3 }}>
            Through every economic regime, war, and crisis in modern history.
          </p>
        </div>

        {/* Crisis Cards */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "18px" }}>
          <span style={{ fontFamily: FONTS.heading, fontSize: "44px", fontWeight: 900, color: COLORS.INK_PRIMARY }}>
            Survived Every Crisis Intact:
          </span>
          {crises.map((c) => (
            <div key={c.label} style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
              backgroundColor: COLORS.BG_ELEVATED,
              borderRadius: "24px",
              padding: "26px 36px",
              border: `2px solid ${COLORS.BG_RECESSED}`,
              opacity: c.pop,
              transform: `translateX(${interpolate(c.pop, [0, 1], [50, 0])}px)`,
              boxShadow: "0 10px 24px rgba(0,0,0,0.03)",
            }}>
              <ShieldCheck size={48} color={COLORS.ACCENT_HERO} style={{ flexShrink: 0 }} />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontFamily: FONTS.heading, fontSize: "48px", fontWeight: 900, color: COLORS.INK_PRIMARY }}>{c.label}</span>
                <span style={{ fontFamily: FONTS.body, fontSize: "38px", fontWeight: 800, color: COLORS.ACCENT_HERO }}>{c.years}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </LeftZone>
  );
};

// --- BEAT 3: Reusable "Definition" Graphic Card (Market-Cap Weighted) ---
const Beat3_DefinitionGraphic: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titlePop = spring({ frame: frame - 5, fps, config: SPRING_CONFIG });
  const cardPop = spring({ frame: frame - 18, fps, config: SPRING_CONFIG });
  const detailPop = spring({ frame: frame - 55, fps, config: SPRING_CONFIG });

  return (
    <LeftZone>
      <div style={{ opacity: titlePop, transform: `translateY(${interpolate(titlePop, [0, 1], [40, 0])}px)`, marginBottom: "40px" }}>
        <h1 style={{ fontFamily: FONTS.heading, fontSize: "110px", fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, lineHeight: 1.05 }}>
          The Engine: <span style={{ color: COLORS.ACCENT_HERO }}>Market-Cap</span> Weighting
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
          <div style={{ display: "flex", alignItems: "center", gap: "16px", backgroundColor: "rgba(184, 134, 46, 0.12)", padding: "14px 28px", borderRadius: "100px", border: `2px solid ${COLORS.ACCENT_HERO}` }}>
            <BookOpen size={36} color={COLORS.ACCENT_HERO} />
            <span style={{ fontFamily: FONTS.heading, fontSize: "32px", fontWeight: 900, color: COLORS.ACCENT_HERO, letterSpacing: "1px", textTransform: "uppercase" }}>
              Core Definition
            </span>
          </div>
          <span style={{ fontFamily: FONTS.body, fontSize: "30px", fontWeight: 700, color: COLORS.INK_TERTIARY, fontStyle: "italic" }}>
            noun · /ˌmɑːr.kɪt ˈkæp ˈweɪ.tɪd/
          </span>
        </div>

        {/* Word Title */}
        <div style={{ fontFamily: FONTS.heading, fontSize: "84px", fontWeight: 900, color: COLORS.INK_PRIMARY, lineHeight: 1.1, marginBottom: "20px" }}>
          Market-Cap Weighted
        </div>

        {/* Definition Sentence */}
        <p style={{
          fontFamily: FONTS.body,
          fontSize: "46px",
          fontWeight: 700,
          color: COLORS.INK_PRIMARY,
          lineHeight: 1.35,
          margin: 0,
          borderLeft: `8px solid ${COLORS.ACCENT_HERO}`,
          paddingLeft: "32px",
        }}>
          An index construction method where each stock is weighted in direct proportion to its total market value.
          <span style={{ display: "block", marginTop: "12px", color: COLORS.INK_SECONDARY }}>
            The bigger the company becomes, the larger its slice of your portfolio.
          </span>
        </p>

        {/* Double-Edged Takeaway Boxes */}
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
              <TrendingUp size={36} />
              <span style={{ fontFamily: FONTS.heading, fontSize: "34px", fontWeight: 900 }}>The Upside</span>
            </div>
            <div style={{ fontFamily: FONTS.body, fontSize: "32px", fontWeight: 700, color: COLORS.INK_PRIMARY, lineHeight: 1.25 }}>
              Guarantees you automatically own the biggest winners as they grow.
            </div>
          </div>

          <div style={{ backgroundColor: "rgba(181, 83, 60, 0.08)", padding: "32px", borderRadius: "24px", border: `2px solid ${COLORS.ACCENT_NEGATIVE}` }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", color: COLORS.ACCENT_NEGATIVE, marginBottom: "8px" }}>
              <Zap size={36} />
              <span style={{ fontFamily: FONTS.heading, fontSize: "34px", fontWeight: 900 }}>The Catch</span>
            </div>
            <div style={{ fontFamily: FONTS.body, fontSize: "32px", fontWeight: 700, color: COLORS.INK_PRIMARY, lineHeight: 1.25 }}>
              Creates extreme concentration risk during speculative market cycles.
            </div>
          </div>
        </div>
      </div>
    </LeftZone>
  );
};

// --- BEAT 4: The Built-In Safety Valve (Auto-Rebalance Safeguard) ---
const Beat4_RebalanceSafeguard: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titlePop = spring({ frame: frame - 5, fps, config: SPRING_CONFIG });
  const step1Pop = spring({ frame: frame - 30, fps, config: SPRING_CONFIG });
  const step2Pop = spring({ frame: frame - 80, fps, config: SPRING_CONFIG });
  const step3Pop = spring({ frame: frame - 130, fps, config: SPRING_CONFIG });
  const footerPop = spring({ frame: frame - 190, fps, config: SPRING_CONFIG });

  const steps = [
    { num: "01", label: "NVIDIA Drops -80%", detail: "Hypothetical AI bubble contraction", bg: COLORS.ACCENT_NEGATIVE, pop: step1Pop },
    { num: "02", label: "Weight Auto-Adjusts Down", detail: "Index automatically reallocates without taxes", bg: COLORS.ACCENT_DETAIL, pop: step2Pop },
    { num: "03", label: "New Leaders Rise to Top", detail: "Healthcare, Industrials, Retail fill the index gap", bg: COLORS.ACCENT_HERO, pop: step3Pop },
  ];

  return (
    <LeftZone>
      <div style={{ opacity: titlePop, transform: `translateY(${interpolate(titlePop, [0, 1], [40, 0])}px)`, marginBottom: "48px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "14px" }}>
          <RefreshCw size={44} color={COLORS.ACCENT_HERO} />
          <span style={{ fontFamily: FONTS.heading, fontSize: "44px", fontWeight: 900, color: COLORS.ACCENT_HERO, textTransform: "uppercase", letterSpacing: "0.1em" }}>
            The Built-In Safety Valve
          </span>
        </div>
        <h1 style={{ fontFamily: FONTS.heading, fontSize: "110px", fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, lineHeight: 1.05 }}>
          You Do Not Ride <span style={{ color: COLORS.ACCENT_HERO }}>Crashes to Zero</span>
        </h1>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "28px", width: "100%" }}>
        {steps.map((s) => (
          <div key={s.num} style={{
            display: "flex",
            alignItems: "center",
            gap: "36px",
            backgroundColor: COLORS.BG_ELEVATED,
            borderRadius: "32px",
            padding: "24px 36px",
            border: `2px solid ${COLORS.BG_RECESSED}`,
            boxShadow: "0 12px 28px rgba(0,0,0,0.04)",
            opacity: s.pop,
            transform: `translateX(${interpolate(s.pop, [0, 1], [-60, 0])}px)`,
          }}>
            <div style={{
              backgroundColor: s.bg,
              borderRadius: "24px",
              width: "140px",
              height: "120px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              boxShadow: `0 12px 24px ${s.bg}44`,
            }}>
              <span style={{ fontFamily: FONTS.heading, fontSize: "64px", fontWeight: 900, color: "#FFFFFF" }}>{s.num}</span>
            </div>
            <div>
              <div style={{ fontFamily: FONTS.heading, fontSize: "56px", fontWeight: 900, color: COLORS.INK_PRIMARY, lineHeight: 1.15 }}>
                {s.label}
              </div>
              <div style={{ fontFamily: FONTS.body, fontSize: "36px", fontWeight: 700, color: COLORS.INK_SECONDARY, marginTop: "6px" }}>
                {s.detail}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Rule Banner */}
      <div style={{
        marginTop: "44px",
        backgroundColor: COLORS.INK_PRIMARY,
        borderRadius: "28px",
        padding: "28px 48px",
        display: "flex",
        alignItems: "center",
        gap: "24px",
        opacity: footerPop,
        transform: `translateY(${interpolate(footerPop, [0, 1], [30, 0])}px)`,
      }}>
        <Zap size={44} color={COLORS.ACCENT_HERO} style={{ flexShrink: 0 }} />
        <span style={{ fontFamily: FONTS.heading, fontSize: "42px", fontWeight: 800, color: "#FFFFFF", lineHeight: 1.3 }}>
          The S&P 500 automatically trims laggards and compounds winners.
        </span>
      </div>
    </LeftZone>
  );
};

export default function Block8_VOOMarketCapScene() {
  return (
    <AbsoluteFill style={{ overflow: "hidden" }}>
      <Sequence from={0}>
        <EditorialBackground />
      </Sequence>

      <AbsoluteFill>
        {/* BEAT 1: 0 - 300 frames (10s) */}
        <Sequence from={0} durationInFrames={300}>
          <Audio src={staticFile("pop-sfx.mp3")} volume={0.15} />
          <Beat1_VanguardOverview />
        </Sequence>

        {/* BEAT 2: 300 - 600 frames (10s) */}
        <Sequence from={300} durationInFrames={300}>
          <Audio src={staticFile("pop-sfx.mp3")} volume={0.15} />
          <Beat2_HistoricalResilience />
        </Sequence>

        {/* BEAT 3: 600 - 880 frames (9.3s) */}
        <Sequence from={600} durationInFrames={280}>
          <Audio src={staticFile("pop-sfx.mp3")} volume={0.15} />
          <Beat3_DefinitionGraphic />
        </Sequence>

        {/* BEAT 4: 880 - 1200 frames (10.7s) */}
        <Sequence from={880}>
          <Audio src={staticFile("pop-sfx.mp3")} volume={0.15} />
          <Beat4_RebalanceSafeguard />
        </Sequence>
      </AbsoluteFill>
    </AbsoluteFill>
  );
}
