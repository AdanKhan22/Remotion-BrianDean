/**
 * REASONING STEP (v3 + Full-Screen Cinematic Title & Chapter Cards)
 * 1. Purpose (User Request):
 *    - Full-screen 4K (3840x2160) transition cards for the entire video:
 *      * Main Title Intro Card: "The BEST 3 ETF Portfolio for 2026"
 *      * Chapter 1: Sleeve 1 (Core Holding - 60%)
 *      * Chapter 2: Sleeve 2 (Complementary Holding - 20-30%)
 *      * Chapter 3: Sleeve 3 (The Diversifier - 10-20%)
 *      * Chapter 4: The Master Blueprint (Complete Synthesis)
 * 2. Visual Architecture:
 *    - Full 4K Screen with warm editorial grid background, glowing radial ambiance, bold chapter numeral, and giant headline typography.
 * 3. Typography & Physics:
 *    - 140px main headlines, 64px category tags, crisp spring animations with audio triggers.
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
  Sparkles,
  PieChart,
  Cpu,
  Globe2,
  ShieldCheck,
} from 'lucide-react';

const COLORS = {
  BG_BASE: '#F3EEE4',
  BG_ELEVATED: '#FAF6EC',
  BG_RECESSED: '#EAE3D3',

  INK_PRIMARY: '#1E1B16',
  INK_SECONDARY: '#5C564A',
  INK_TERTIARY: '#8C8474',

  ACCENT_HERO: '#B8862E',
  ACCENT_NEGATIVE: '#B5533C',
  ACCENT_DETAIL: '#3C6E71',
  ACCENT_NEUTRAL: '#6C757D',
};

const FONTS = {
  main: '"Inter", "DM Sans", sans-serif',
};

const SPRING_CONFIG = { damping: 200, stiffness: 120, mass: 0.8 };

export const GenericChapterCard: React.FC<{
  chapterTag: string;
  title: string;
  subtitle: string;
  accentColor: string;
  icon: React.ReactNode;
}> = ({ chapterTag, title, subtitle, accentColor, icon }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const pop = spring({ frame: frame - 15, fps, config: SPRING_CONFIG });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.BG_BASE, overflow: 'hidden' }}>
      {/* Background Dot Grid */}
      <svg style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0.24 }}>
        <defs>
          <pattern id="chapter-dot-grid" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
            <circle cx="6" cy="6" r="2.5" fill={COLORS.INK_TERTIARY} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#chapter-dot-grid)" />
      </svg>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at 50% 45%, rgba(250, 246, 236, 0.85) 0%, rgba(234, 227, 211, 0.55) 100%)`,
          pointerEvents: 'none',
        }}
      />

      {/* Sound Trigger */}
      <Sequence from={15}>
        <Audio src={staticFile('pop-sfx.mp3')} volume={0.15} />
      </Sequence>

      {/* Centered Showcase */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '0 320px',
          boxSizing: 'border-box',
          transform: `translateY(${interpolate(pop, [0, 1], [45, 0])}px)`,
          opacity: pop,
        }}
      >
        {/* Top Icon & Tag Pill */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            backgroundColor: `${accentColor}15`,
            border: `3px solid ${accentColor}`,
            padding: '16px 40px',
            borderRadius: '40px',
            marginBottom: '48px',
          }}
        >
          {icon}
          <span
            style={{
              fontFamily: FONTS.main,
              fontSize: '48px',
              fontWeight: 800,
              color: accentColor,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}
          >
            {chapterTag}
          </span>
        </div>

        {/* Massive Chapter Title */}
        <h1
          style={{
            fontFamily: FONTS.main,
            fontSize: '144px',
            fontWeight: 900,
            color: COLORS.INK_PRIMARY,
            margin: '0 0 28px 0',
            letterSpacing: '-0.035em',
            lineHeight: 1.05,
          }}
        >
          {title}
        </h1>

        {/* Descriptive Subtitle */}
        <span
          style={{
            fontFamily: FONTS.main,
            fontSize: '60px',
            fontWeight: 600,
            color: COLORS.INK_SECONDARY,
            lineHeight: 1.3,
            maxWidth: '2400px',
          }}
        >
          {subtitle}
        </span>
      </div>
    </AbsoluteFill>
  );
};

// 1. Video Main Title Intro Card
export const TitleCardIntro: React.FC = () => (
  <GenericChapterCard
    chapterTag="2026 Strategy Guide"
    title="The BEST 3-ETF Portfolio"
    subtitle="How to Grow Long-Term Wealth & Dodge the AI Concentration Bubble"
    accentColor={COLORS.ACCENT_HERO}
    icon={<Sparkles color={COLORS.ACCENT_HERO} size={52} strokeWidth={2.5} />}
  />
);

// 2. Chapter 1: Core Holding
export const ChapterCardCore: React.FC = () => (
  <GenericChapterCard
    chapterTag="Chapter 01 · 60% Target"
    title="Sleeve 1: The Core Holding"
    subtitle="The 20–30 Year Compounding Engine · VOO vs. RSP vs. VTI"
    accentColor={COLORS.ACCENT_HERO}
    icon={<Cpu color={COLORS.ACCENT_HERO} size={52} strokeWidth={2.5} />}
  />
);

// 3. Chapter 2: Complementary Holding
export const ChapterCardComplementary: React.FC = () => (
  <GenericChapterCard
    chapterTag="Chapter 02 · 20–30% Target"
    title="Sleeve 2: Complementary"
    subtitle="Global Markets & Factor Alpha · ACWX · AVDV · DFIV"
    accentColor={COLORS.ACCENT_DETAIL}
    icon={<Globe2 color={COLORS.ACCENT_DETAIL} size={52} strokeWidth={2.5} />}
  />
);

// 4. Chapter 3: The Diversifier
export const ChapterCardDiversifier: React.FC = () => (
  <GenericChapterCard
    chapterTag="Chapter 03 · 10–20% Target"
    title="Sleeve 3: The Diversifier"
    subtitle="Capital Preservation & Inflation Armor · SGOV · BND · GLD"
    accentColor={COLORS.ACCENT_NEUTRAL}
    icon={<ShieldCheck color={COLORS.ACCENT_NEUTRAL} size={52} strokeWidth={2.5} />}
  />
);

// 5. Chapter 4: Master Blueprint
export const ChapterCardBlueprint: React.FC = () => (
  <GenericChapterCard
    chapterTag="Chapter 04 · Complete Synthesis"
    title="The Master 3-ETF Blueprint"
    subtitle="Putting the Allocation Together for 2026 and Beyond"
    accentColor={COLORS.ACCENT_HERO}
    icon={<PieChart color={COLORS.ACCENT_HERO} size={52} strokeWidth={2.5} />}
  />
);

export default TitleCardIntro;
