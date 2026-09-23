import React from "react";
import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

// --- DESIGN TOKENS ---
const COLORS = {
  bgBase: "#ECE7DE",
  bgGradient:
    "radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 0.85) 0%, rgba(236, 231, 222, 0.35) 80%)",
  textPrimary: "#18181B",
  textSecondary: "#52525B",
  textMuted: "#7C776D",
  gold: "#D97706",
  goldGlow: "rgba(217, 119, 6, 0.28)",
  borderSubtle: "rgba(24, 24, 27, 0.09)",
};

const SPRINGS = {
  hero: { mass: 0.9, damping: 18, stiffness: 95 },
  flank: { mass: 0.7, damping: 16, stiffness: 110 },
  pop: { mass: 0.5, damping: 13, stiffness: 150 },
};

interface VideoComparisonProps {
  topSrc?: string;
  leftSrc?: string;
  rightSrc?: string;
}

export const VideoPopularityComparison: React.FC<VideoComparisonProps> = ({
  topSrc = staticFile("top.png"),
  leftSrc = staticFile("left.png"),
  rightSrc = staticFile("right.png"),
}) => {
  const frame = useCurrentFrame();
  const { fps, width } = useVideoConfig();

  // Dynamic scale factor: 1.0 at 1080p, 2.0 at 4K
  const s = width / 1920;

  // --- ANIMATION CONTROLLERS ---
  const titleSpring = spring({ frame, fps, config: SPRINGS.hero });
  const flankEntrance = spring({ frame: frame - 10, fps, config: SPRINGS.flank });
  const heroEntrance = spring({ frame: frame - 25, fps, config: SPRINGS.hero });
  const badgePop = spring({ frame: frame - 45, fps, config: SPRINGS.pop });
  const flankDim = interpolate(heroEntrance, [0, 1], [1, 0.72]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.bgBase,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
        color: COLORS.textPrimary,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: `${40 * s}px ${80 * s}px`,
        boxSizing: "border-box",
      }}
    >
      {/* Background Ambience */}
      <AbsoluteFill style={{ backgroundImage: COLORS.bgGradient, pointerEvents: "none" }} />

      {/* Grid Pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.035) 1px, transparent 1px)
          `,
          backgroundSize: `${90 * s}px ${90 * s}px`,
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          pointerEvents: "none",
        }}
      />

      {/* ====================================================================
          1. HEADER (With Generous Bottom Clearance)
          ==================================================================== */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: `${105 * s}px`, // Increased clearance so nothing overlaps
          zIndex: 10,
        }}
      >
        {/* Pill Tag */}
        <div style={{ overflow: "hidden", display: "inline-block", marginBottom: `${16 * s}px` }}>
          <div
            style={{
              transform: `translateY(${interpolate(titleSpring, [0, 1], [35 * s, 0])}px)`,
              display: "inline-flex",
              alignItems: "center",
              gap: `${10 * s}px`,
              padding: `${8 * s}px ${24 * s}px`,
              borderRadius: "9999px",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              border: `1.5px solid ${COLORS.borderSubtle}`,
              boxShadow: "0 6px 18px rgba(0,0,0,0.04)",
              fontSize: `${15 * s}px`,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: COLORS.textSecondary,
            }}
          >
            <span>Audience Demand</span>
            <span></span>
          </div>
        </div>

        {/* Big Editorial Title */}
        <div style={{ overflow: "hidden" }}>
          <h1
            style={{
              transform: `translateY(${interpolate(titleSpring, [0, 1], [100, 0])}%)`,
              fontSize: `${76 * s}px`,
              fontWeight: 800,
              letterSpacing: "-0.04em",
              margin: 0,
              lineHeight: 1.1,
              color: COLORS.textPrimary,
              textAlign: "center",
            }}
          >
            Bond ETFs Outperform the Tech Hype
          </h1>
        </div>
      </div>

      {/* ====================================================================
          2. THE 3-PODIUM THUMBNAIL STAGE (Wide Gaps, Zero Overlaps)
          ==================================================================== */}
      <div
        style={{
          width: "100%",
          maxWidth: `${1760 * s}px`,
          display: "grid",
          gridTemplateColumns: "1fr 1.24fr 1fr", // Hero is naturally wider via grid
          alignItems: "flex-end",
          gap: `${70 * s}px`, // Wide gap to eliminate side-by-side collisions
          zIndex: 20,
        }}
      >
        {/* LEFT CARD: AI ETFs */}
        <div
          style={{
            opacity: flankEntrance * flankDim,
            transform: `translateY(${interpolate(flankEntrance, [0, 1], [80 * s, 0])}px)`,
            filter: `blur(${interpolate(heroEntrance, [0, 1], [0, 0.8])}px)`,
          }}
        >
          <ThumbnailViewport
            scale={s}
            label="AI ETFs"
            subtitle="Hype Sector"
            src={leftSrc}
            badgeText="TECH THEME"
            borderColor="rgba(0,0,0,0.12)"
          />
        </div>

        {/* CENTER HERO CARD: BOND ETFs */}
        <div
          style={{
            opacity: heroEntrance,
            transform: `translateY(${interpolate(heroEntrance, [0, 1], [100 * s, 0])}px)`,
            zIndex: 30,
            position: "relative",
          }}
        >
          {/* Top Multiplier Tag */}
          <div
            style={{
              position: "absolute",
              top: `${-28 * s}px`, // Positioned cleanly above hero border
              left: "50%",
              transform: `translateX(-50%) scale(${interpolate(badgePop, [0, 1], [0.6, 1])})`,
              opacity: badgePop,
              background: "linear-gradient(135deg, #18181B 0%, #27272A 100%)",
              color: "#FFFFFF",
              padding: `${10 * s}px ${26 * s}px`,
              borderRadius: "9999px",
              fontSize: `${16 * s}px`,
              fontWeight: 800,
              letterSpacing: "0.06em",
              boxShadow: "0 16px 32px -4px rgba(0,0,0,0.45)",
              display: "flex",
              alignItems: "center",
              gap: `${10 * s}px`,
              whiteSpace: "nowrap",
              zIndex: 40,
            }}
          >
            <span style={{ color: "#FBBF24", fontSize: `${18 * s}px` }}>★ ★ ★ ★ ★</span>
            <span style={{ color: "#34D399" }}>MANY TIMES MORE POPULAR</span>
          </div>

          <ThumbnailViewport
            scale={s}
            label="Best Short-Term Bond ETFs"
            subtitle="Highest Views"
            src={topSrc}
            isHero
            badgeText="★ TOP PERFORMER"
            borderColor={COLORS.gold}
            glowColor={COLORS.goldGlow}
          />
        </div>

        {/* RIGHT CARD: Semiconductor ETFs */}
        <div
          style={{
            opacity: flankEntrance * flankDim,
            transform: `translateY(${interpolate(flankEntrance, [0, 1], [80 * s, 0])}px)`,
            filter: `blur(${interpolate(heroEntrance, [0, 1], [0, 0.8])}px)`,
          }}
        >
          <ThumbnailViewport
            scale={s}
            label="Semiconductor ETFs"
            subtitle="Chip Sector"
            src={rightSrc}
            badgeText="CHIP THEME"
            borderColor="rgba(0,0,0,0.12)"
          />
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ============================================================================
// 16:9 VIEWPORT (Auto-Scaled & Contained)
// ============================================================================
interface ViewportProps {
  scale: number;
  label: string;
  subtitle: string;
  src?: string;
  isHero?: boolean;
  badgeText: string;
  borderColor: string;
  glowColor?: string;
}

const ThumbnailViewport: React.FC<ViewportProps> = ({
  scale: s,
  label,
  subtitle,
  src,
  isHero = false,
  badgeText,
  borderColor,
  glowColor,
}) => {
  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
      {/* 16:9 Frame */}
      <div
        style={{
          width: "100%",
          aspectRatio: "16 / 9",
          borderRadius: `${(isHero ? 28 : 22) * s}px`,
          overflow: "hidden",
          position: "relative",
          backgroundColor: isHero ? "#1E1A16" : "#DDD8CE",
          border: isHero ? `${3.5 * s}px solid ${borderColor}` : `${2 * s}px solid ${borderColor}`,
          boxShadow: isHero
            ? `0 ${36 * s}px ${70 * s}px -${15 * s}px ${glowColor || "rgba(0,0,0,0.25)"}, 0 ${14 * s}px ${30 * s}px rgba(0,0,0,0.12)`
            : `0 ${18 * s}px ${36 * s}px -${8 * s}px rgba(0,0,0,0.08)`,
        }}
      >
        <Img
          src={src || ""}
          style={{
            width: "100%",
            height: "100%",
objectFit: "cover",
objectPosition: "center top",
            display: "block",
          }}
          onError={(e) => {
            (e.target as HTMLElement).style.display = "none";
          }}
        />

        {/* Fallback Display if image missing */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: -1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: `${8 * s}px`,
            background: isHero
              ? "linear-gradient(135deg, #24201A 0%, #151311 100%)"
              : "linear-gradient(135deg, #DDD7CC 0%, #CBC5BA 100%)",
          }}
        >
          <div
            style={{
              fontSize: `${17 * s}px`,
              fontWeight: 700,
              color: isHero ? COLORS.gold : COLORS.textMuted,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            {isHero ? "public/top.png" : label.includes("AI") ? "public/left.png" : "public/right.png"}
          </div>
          <div style={{ fontSize: `${12 * s}px`, color: COLORS.textMuted }}>
            Drop file in public folder
          </div>
        </div>

        {/* Badge Chip */}
        <div
          style={{
            position: "absolute",
            bottom: `${16 * s}px`,
            left: `${16 * s}px`,
            padding: `${7 * s}px ${14 * s}px`,
            borderRadius: `${8 * s}px`,
            backgroundColor: "rgba(0, 0, 0, 0.72)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            color: "#FFFFFF",
            fontSize: `${13 * s}px`,
            fontWeight: 700,
            letterSpacing: "0.05em",
          }}
        >
          {badgeText}
        </div>
      </div>

      {/* Metadata Labels Under Thumbnail */}
      <div style={{ marginTop: `${20 * s}px`, textAlign: "center" }}>
        <div
          style={{
            fontSize: `${(isHero ? 30 : 22) * s}px`,
            fontWeight: 800,
            color: COLORS.textPrimary,
            letterSpacing: "-0.03em",
          }}
        >
          {label}
        </div>
        <div
          style={{
            fontSize: `${(isHero ? 19 : 16) * s}px`,
            color: isHero ? COLORS.gold : COLORS.textMuted,
            fontWeight: isHero ? 700 : 500,
            marginTop: `${6 * s}px`,
          }}
        >
          {subtitle}
        </div>
      </div>
    </div>
  );
};

export default VideoPopularityComparison;