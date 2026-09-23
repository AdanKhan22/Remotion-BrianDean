/**
 * BLOCK 10: Core Option C -- VTI (Total US Stock Market)
 * Duration: 1110 frames (~37 seconds)
 *
 * Fixes applied:
 * - All en-dashes replaced with hyphens (no ? marks)
 * - Dark teal on dark slab replaced with gold/white (ACCENT_DETAIL -> ACCENT_HERO or white)
 * - Font sizes increased significantly across all beats
 * - No fixed-height overflow -- dynamic flex heights only
 * - Fonts: Poppins / Inter / Roboto / Helvetica Neue
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
  PieChart,
  Scale,
  Sparkles,
  TrendingUp,
  Globe,
  ExternalLink,
  Award,
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
  VANGUARD_RED: "#C41230",
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
        <pattern id="grid-b10" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
          <circle cx="6" cy="6" r="2.5" fill={COLORS.INK_TERTIARY} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-b10)" />
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
      paddingLeft: "130px",
      paddingRight: "130px",
      boxSizing: "border-box",
      borderRight: `4px solid ${COLORS.BG_RECESSED}`,
    }}
  >
    {children}
  </div>
);

// Beat 1: Vanguard VTI Website Overview Mockup Card (Frame.io revision request)
const Beat1_VanguardVTIOverview: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titlePop = spring({ frame: frame - 5, fps, config: SPRING_CONFIG });
  const browserPop = spring({ frame: frame - 20, fps, config: SPRING_CONFIG });
  const badgePop = spring({ frame: frame - 60, fps, config: SPRING_CONFIG });

  return (
    <LeftZone>
      <div style={{ opacity: titlePop, transform: `translateY(${interpolate(titlePop, [0, 1], [40, 0])}px)`, marginBottom: "44px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "12px" }}>
          <Award size={48} color={COLORS.ACCENT_HERO} />
          <span style={{ fontFamily: FONTS.heading, fontSize: "44px", fontWeight: 900, color: COLORS.ACCENT_HERO, textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Core Contender 3 -- Balanced Breadth
          </span>
        </div>
        <h1 style={{ fontFamily: FONTS.heading, fontSize: "108px", fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, lineHeight: 1.05 }}>
          Vanguard Total Stock Market <span style={{ color: COLORS.VANGUARD_RED }}>(VTI)</span>
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
              investor.vanguard.com/investment-products/etfs/profile/vti
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
                VTI Profile & Overview
              </span>
            </div>
            
            <div style={{
              backgroundColor: "rgba(196, 18, 48, 0.1)",
              padding: "12px 24px",
              borderRadius: "100px",
              border: `2px solid ${COLORS.VANGUARD_RED}`,
            }}>
              <span style={{ fontFamily: FONTS.heading, fontSize: "28px", fontWeight: 900, color: COLORS.VANGUARD_RED }}>
                TICKER: VTI (NYSE Arca)
              </span>
            </div>
          </div>

          {/* Key Vanguard VTI Spec Metrics */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "28px" }}>
            <div style={{ backgroundColor: "#FFFFFF", padding: "32px", borderRadius: "24px", border: "2px solid #EAE6DC", boxShadow: "0 8px 20px rgba(0,0,0,0.03)" }}>
              <div style={{ fontFamily: FONTS.body, fontSize: "26px", fontWeight: 800, color: COLORS.INK_TERTIARY, textTransform: "uppercase" }}>Expense Ratio</div>
              <div style={{ fontFamily: FONTS.heading, fontSize: "68px", fontWeight: 900, color: COLORS.ACCENT_DETAIL, marginTop: "6px" }}>0.03%</div>
              <div style={{ fontFamily: FONTS.body, fontSize: "24px", fontWeight: 700, color: COLORS.INK_PRIMARY, marginTop: "6px" }}>$3/yr per $10k invested</div>
            </div>

            <div style={{ backgroundColor: "#FFFFFF", padding: "32px", borderRadius: "24px", border: "2px solid #EAE6DC", boxShadow: "0 8px 20px rgba(0,0,0,0.03)" }}>
              <div style={{ fontFamily: FONTS.body, fontSize: "26px", fontWeight: 800, color: COLORS.INK_TERTIARY, textTransform: "uppercase" }}>Holdings Count</div>
              <div style={{ fontFamily: FONTS.heading, fontSize: "68px", fontWeight: 900, color: COLORS.ACCENT_HERO, marginTop: "6px" }}>~3,500+</div>
              <div style={{ fontFamily: FONTS.body, fontSize: "24px", fontWeight: 700, color: COLORS.INK_PRIMARY, marginTop: "6px" }}>Large, Mid, Small & Micro Caps</div>
            </div>

            <div style={{ backgroundColor: "#FFFFFF", padding: "32px", borderRadius: "24px", border: "2px solid #EAE6DC", boxShadow: "0 8px 20px rgba(0,0,0,0.03)" }}>
              <div style={{ fontFamily: FONTS.body, fontSize: "26px", fontWeight: 800, color: COLORS.INK_TERTIARY, textTransform: "uppercase" }}>Benchmark Index</div>
              <div style={{ fontFamily: FONTS.heading, fontSize: "44px", fontWeight: 900, color: COLORS.INK_PRIMARY, marginTop: "12px", lineHeight: 1.15 }}>CRSP US Total</div>
              <div style={{ fontFamily: FONTS.body, fontSize: "24px", fontWeight: 700, color: COLORS.INK_PRIMARY, marginTop: "10px" }}>100% investable US universe</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Takeaway */}
      <div style={{
        marginTop: "40px",
        backgroundColor: COLORS.BG_ELEVATED,
        padding: "24px 44px",
        borderRadius: "24px",
        borderLeft: `10px solid ${COLORS.VANGUARD_RED}`,
        opacity: badgePop,
        transform: `translateY(${interpolate(badgePop, [0, 1], [30, 0])}px)`,
      }}>
        <span style={{ fontFamily: FONTS.heading, fontSize: "42px", fontWeight: 900, color: COLORS.INK_PRIMARY }}>
          Total US equity exposure: 3,500+ companies across every sector and market cap.
        </span>
      </div>
    </LeftZone>
  );
};

// Beat 2: The 80/20 Reality -- proportional stack, no fixed height
const Beat2_ProportionalStack: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headerPop = spring({ frame: frame - 5, fps, config: SPRING_CONFIG });
  const tier1Pop = spring({ frame: frame - 25, fps, config: SPRING_CONFIG });
  const tier2Pop = spring({ frame: frame - 80, fps, config: SPRING_CONFIG });
  const pillPop = spring({ frame: frame - 140, fps, config: SPRING_CONFIG });

  return (
    <LeftZone>
      <div style={{ opacity: headerPop, transform: `translateY(${interpolate(headerPop, [0, 1], [30, 0])}px)`, marginBottom: "48px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "18px", marginBottom: "12px" }}>
          <PieChart size={52} color={COLORS.ACCENT_HERO} />
          <span style={{ fontFamily: FONTS.heading, fontSize: "52px", fontWeight: 800, color: COLORS.ACCENT_HERO, textTransform: "uppercase", letterSpacing: "0.1em" }}>
            The Market-Cap Reality
          </span>
        </div>
        <h1 style={{ fontFamily: FONTS.heading, fontSize: "110px", fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, lineHeight: 1.0 }}>
          The <span style={{ color: COLORS.ACCENT_HERO }}>80 / 20</span>{" "}Weighting Reality
        </h1>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "28px", width: "100%", marginBottom: "36px" }}>
        {/* Tier 1 -- gold accent, light bg, dark text all readable */}
        <div style={{
          backgroundColor: COLORS.BG_ELEVATED,
          borderRadius: "40px",
          border: `4px solid ${COLORS.BG_RECESSED}`,
          borderLeftWidth: "20px",
          borderLeftColor: COLORS.ACCENT_HERO,
          padding: "52px 64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "0 24px 60px rgba(184,134,46,0.10)",
          opacity: tier1Pop,
          transform: `translateY(${interpolate(tier1Pop, [0, 1], [40, 0])}px)`,
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <span style={{ fontFamily: FONTS.heading, fontSize: "60px", fontWeight: 900, color: COLORS.INK_PRIMARY, lineHeight: 1.1 }}>
              Top 500 S&P Companies
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0, marginLeft: "48px" }}>
            <span style={{ fontFamily: FONTS.heading, fontSize: "140px", fontWeight: 900, color: COLORS.ACCENT_HERO, lineHeight: 0.9 }}>82%</span>
            <span style={{ fontFamily: FONTS.body, fontSize: "40px", fontWeight: 800, color: COLORS.INK_SECONDARY, textTransform: "uppercase" }}>of total weight</span>
          </div>
        </div>

        {/* Tier 2 -- darker accent, light bg, dark text */}
        <div style={{
          backgroundColor: COLORS.BG_BASE,
          borderRadius: "40px",
          border: `3px solid ${COLORS.BG_RECESSED}`,
          borderLeftWidth: "20px",
          borderLeftColor: COLORS.INK_TERTIARY,
          padding: "44px 64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          opacity: tier2Pop,
          transform: `translateY(${interpolate(tier2Pop, [0, 1], [40, 0])}px)`,
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <span style={{ fontFamily: FONTS.heading, fontSize: "54px", fontWeight: 900, color: COLORS.INK_PRIMARY, lineHeight: 1.1 }}>
              3,000 Small &amp; Mid Caps
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0, marginLeft: "48px" }}>
            <span style={{ fontFamily: FONTS.heading, fontSize: "110px", fontWeight: 900, color: COLORS.INK_PRIMARY, lineHeight: 0.9 }}>18%</span>
            <span style={{ fontFamily: FONTS.body, fontSize: "36px", fontWeight: 800, color: COLORS.INK_SECONDARY, textTransform: "uppercase" }}>of total weight</span>
          </div>
        </div>
      </div>

      {/* Dark takeaway pill -- white text on dark bg */}
      <div style={{
        backgroundColor: COLORS.INK_PRIMARY,
        borderRadius: "28px",
        padding: "32px 48px",
        display: "flex",
        alignItems: "center",
        gap: "20px",
        opacity: pillPop,
        transform: `translateY(${interpolate(pillPop, [0, 1], [25, 0])}px)`,
      }}>
        <Sparkles size={48} color={COLORS.ACCENT_HERO} style={{ flexShrink: 0 }} />
        <span style={{ fontFamily: FONTS.heading, fontSize: "52px", fontWeight: 700, color: "#FFFFFF", lineHeight: 1.3 }}>
          With 3,000 extra companies, mega-caps still control VTI -- market-cap always wins.
        </span>
      </div>
    </LeftZone>
  );
};

// Beat 3: Top-10 Concentration Gap -- two-column face-off, no fixed height
const Beat3_ConcentrationGap: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headerPop = spring({ frame: frame - 5, fps, config: SPRING_CONFIG });
  const col1Pop = spring({ frame: frame - 25, fps, config: SPRING_CONFIG });
  const col2Pop = spring({ frame: frame - 80, fps, config: SPRING_CONFIG });
  const footerPop = spring({ frame: frame - 160, fps, config: SPRING_CONFIG });

  return (
    <LeftZone>
      <div style={{ opacity: headerPop, transform: `translateY(${interpolate(headerPop, [0, 1], [30, 0])}px)`, marginBottom: "48px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "18px", marginBottom: "12px" }}>
          <Scale size={52} color={COLORS.ACCENT_HERO} />
          <span style={{ fontFamily: FONTS.heading, fontSize: "52px", fontWeight: 800, color: COLORS.ACCENT_HERO, textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Concentration Differential
          </span>
        </div>
        <h1 style={{ fontFamily: FONTS.heading, fontSize: "110px", fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, lineHeight: 1.0 }}>
          Top 10 Holdings{" "}<span style={{ color: COLORS.ACCENT_DETAIL }}>Exposure</span>
        </h1>
      </div>

      {/* Two columns -- all on light bg with dark text, readable */}
      <div style={{ display: "flex", gap: "40px", width: "100%", alignItems: "stretch" }}>

        {/* VOO -- red accent */}
        <div style={{
          flex: 1,
          backgroundColor: COLORS.BG_ELEVATED,
          borderRadius: "48px",
          border: `4px solid ${COLORS.BG_RECESSED}`,
          borderTopWidth: "16px",
          borderTopColor: COLORS.ACCENT_NEGATIVE,
          padding: "56px 52px",
          display: "flex",
          flexDirection: "column",
          gap: "32px",
          boxShadow: "0 28px 60px rgba(181,83,60,0.10)",
          opacity: col1Pop,
          transform: `translateY(${interpolate(col1Pop, [0, 1], [40, 0])}px)`,
        }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ backgroundColor: `${COLORS.ACCENT_NEGATIVE}18`, border: `2px solid ${COLORS.ACCENT_NEGATIVE}40`, padding: "12px 28px", borderRadius: "16px", width: "fit-content" }}>
                <span style={{ fontFamily: FONTS.heading, fontSize: "44px", fontWeight: 800, color: COLORS.ACCENT_NEGATIVE }}>VOO (S&P 500)</span>
              </div>
              <span style={{ fontFamily: FONTS.heading, fontSize: "68px", fontWeight: 900, color: COLORS.INK_PRIMARY, lineHeight: 1.1 }}>Heavy Concentration</span>
            </div>
          <div style={{ backgroundColor: COLORS.BG_BASE, borderRadius: "32px", padding: "44px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", border: `2px solid ${COLORS.BG_RECESSED}` }}>
            <span style={{ fontFamily: FONTS.body, fontSize: "40px", fontWeight: 700, color: COLORS.INK_TERTIARY, textTransform: "uppercase" }}>Top 10 Weight</span>
            <span style={{ fontFamily: FONTS.heading, fontSize: "140px", fontWeight: 900, color: COLORS.ACCENT_NEGATIVE, lineHeight: 0.9 }}>40%</span>
          </div>
        </div>

        {/* VTI -- teal accent on light bg, readable */}
        <div style={{
          flex: 1,
          backgroundColor: COLORS.BG_ELEVATED,
          borderRadius: "48px",
          border: `4px solid ${COLORS.BG_RECESSED}`,
          borderTopWidth: "16px",
          borderTopColor: COLORS.ACCENT_DETAIL,
          padding: "56px 52px",
          display: "flex",
          flexDirection: "column",
          gap: "32px",
          boxShadow: "0 28px 60px rgba(60,110,113,0.10)",
          opacity: col2Pop,
          transform: `translateY(${interpolate(col2Pop, [0, 1], [40, 0])}px)`,
        }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ backgroundColor: `${COLORS.ACCENT_DETAIL}18`, border: `2px solid ${COLORS.ACCENT_DETAIL}40`, padding: "12px 28px", borderRadius: "16px", width: "fit-content" }}>
                <span style={{ fontFamily: FONTS.heading, fontSize: "44px", fontWeight: 800, color: COLORS.ACCENT_DETAIL }}>VTI (TOTAL MARKET)</span>
              </div>
              <span style={{ fontFamily: FONTS.heading, fontSize: "68px", fontWeight: 900, color: COLORS.INK_PRIMARY, lineHeight: 1.1 }}>Dialed-Back Exposure</span>
            </div>
          <div style={{ backgroundColor: COLORS.BG_BASE, borderRadius: "32px", padding: "44px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", border: `2px solid ${COLORS.BG_RECESSED}` }}>
            <span style={{ fontFamily: FONTS.body, fontSize: "40px", fontWeight: 700, color: COLORS.INK_TERTIARY, textTransform: "uppercase" }}>Top 10 Weight</span>
            <span style={{ fontFamily: FONTS.heading, fontSize: "140px", fontWeight: 900, color: COLORS.ACCENT_DETAIL, lineHeight: 0.9 }}>32%</span>
          </div>
        </div>

      </div>

      {/* Footer on light bg -- dark text, readable */}
      <div style={{
        marginTop: "36px",
        backgroundColor: COLORS.BG_ELEVATED,
        borderRadius: "28px",
        border: `3px solid ${COLORS.BG_RECESSED}`,
        padding: "32px 52px",
        display: "flex",
        alignItems: "center",
        gap: "20px",
        opacity: footerPop,
        transform: `translateY(${interpolate(footerPop, [0, 1], [25, 0])}px)`,
      }}>
        <TrendingUp size={48} color={COLORS.ACCENT_DETAIL} style={{ flexShrink: 0 }} />
        <span style={{ fontFamily: FONTS.heading, fontSize: "52px", fontWeight: 700, color: COLORS.INK_PRIMARY }}>
          VTI's extra breadth shaves 8% off your top-10 AI concentration -- a meaningful cushion.
        </span>
      </div>
    </LeftZone>
  );
};

export default function Block10_VTIScene() {
  return (
    <AbsoluteFill style={{ overflow: "hidden" }}>
      <Sequence from={0}>
        <EditorialBackground />
      </Sequence>

      <AbsoluteFill>
        <Sequence from={0} durationInFrames={360}>
          <Audio src={staticFile("pop-sfx.mp3")} volume={0.15} />
          <Beat1_VanguardVTIOverview />
        </Sequence>

        <Sequence from={360} durationInFrames={400}>
          <Audio src={staticFile("pop-sfx.mp3")} volume={0.15} />
          <Beat2_ProportionalStack />
        </Sequence>

        <Sequence from={760}>
          <Audio src={staticFile("pop-sfx.mp3")} volume={0.15} />
          <Beat3_ConcentrationGap />
        </Sequence>
      </AbsoluteFill>
    </AbsoluteFill>
  );
}
