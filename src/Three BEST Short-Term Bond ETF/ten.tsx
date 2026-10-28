/**
 * FULL-SCREEN CHAPTER CARDS — Short-Term Bond ETF Video (Sept 4, 2026)
 *
 * These are topic-divider beats, NOT the 60/40 talking-head layout.
 * For this specific set of scenes, the 60/40 rule is intentionally suspended —
 * confirmed with client. Everything else from the v3 style guide still applies:
 * fixed-role color system, spring physics preset, "no element without a job,"
 * no title-floating-alone panels, no glossy/glow/glassmorphism.
 *
 * 7 chapters mapped to actual topic changes in the transcript:
 *  01 Why Bond ETFs Now (market shift)
 *  02 The Basics (what is a short-term bond ETF)
 *  03 Option 1: SGOV
 *  04 Option 2: USFR
 *  05 Option 3: BOXX
 *  06 Head-to-Head (scenario matrix)
 *  07 The Verdict (decision framework)
 *
 * Each card carries real payload — icon tied to the concept, a chapter number,
 * and 2-3 fact chips describing WHAT each fund is (structure, mechanism,
 * issuer) — never the payoff numbers themselves (yield, expense ratio, tax
 * outcome). Those stay inside the video as reveals, not spoiled on the
 * chapter card.
 */

import React from 'react';
import {
  AbsoluteFill,
  Sequence,
  spring,
  useCurrentFrame,
  interpolate,
} from 'remotion';
import {
  TrendingDown,
  BookOpen,
  Landmark,
  RefreshCcw,
  Boxes,
  Swords,
  Trophy,
  LucideIcon,
} from 'lucide-react';

// --- LOCKED V3 COLOR SYSTEM (unchanged) ---
const COLORS = {
  BG_BASE: '#F3EEE4',
  BG_ELEVATED: '#FAF6EC',
  BG_RECESSED: '#EAE3D3',

  INK_PRIMARY: '#1E1B16',
  INK_SECONDARY: '#5C564A',
  INK_TERTIARY: '#8C8474',

  ACCENT_HERO: '#B8862E',     // Fixed role: the standout / headline element
  ACCENT_NEGATIVE: '#B5533C', // Fixed role: risk / downside
  ACCENT_DETAIL: '#3C6E71',   // Fixed role: supporting detail
  ACCENT_NEUTRAL: '#8C8474',  // Fixed role: de-emphasized
};

const FONTS = {
  main: '"Inter", "DM Sans", sans-serif',
};

const SPRING_CONFIG = { damping: 200, stiffness: 120, mass: 0.8 };

// Canvas — full 4K, no 60/40 split for these beats
const CANVAS_W = 3840;
const CANVAS_H = 2160;

const FPS = 30;
const CHAPTER_DURATION = 150; // 5s per chapter beat

// --- CHAPTER DATA ---
type ChapterData = {
  index: number;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  chips: string[];
};

const CHAPTERS: ChapterData[] = [
  {
    index: 1,
    title: 'Why Bond ETFs Now',
    subtitle: 'The Shift Toward Safe Yield',
    icon: TrendingDown,
    chips: ['3 ETFs Ranked', 'Cash Alternatives'],
  },
  {
    index: 2,
    title: 'The Basics',
    subtitle: 'What Is A Short-Term Bond ETF?',
    icon: BookOpen,
    chips: ['~3 Month Maturity', 'High Liquidity'],
  },
  {
    index: 3,
    title: 'Option 1: SGOV',
    subtitle: 'iShares 0-3 Month Treasury',
    icon: Landmark,
    chips: ['iShares Treasury Fund', 'Highest Trading Volume'],
  },
  {
    index: 4,
    title: 'Option 2: USFR',
    subtitle: 'WisdomTree Floating Rate',
    icon: RefreshCcw,
    chips: ['Floating Rate Notes', 'Resets Every Week'],
  },
  {
    index: 5,
    title: 'Option 3: BOXX',
    subtitle: 'Alpha Architect Box Spread',
    icon: Boxes,
    chips: ['S&P 500 Options', 'Alpha Architect Fund'],
  },
  {
    index: 6,
    title: 'Head-to-Head',
    subtitle: '$100K Scenario Comparison',
    icon: Swords,
    chips: ['Rate Direction', 'Tax State', 'Hold Period'],
  },
  {
    index: 7,
    title: 'The Verdict',
    subtitle: 'Which ETF Fits You',
    icon: Trophy,
    chips: ['3 Decision Factors', 'Your Personalized Pick'],
  },
];

// --- FULL-SCREEN BACKGROUND (dot grid + glow + oversized watermark icon) ---
const ChapterBackground: React.FC<{ Icon: LucideIcon }> = ({ Icon }) => {
  const frame = useCurrentFrame();
  // slow parallax drift on the watermark, tied to a real reason: give the
  // full-bleed frame a sense of motion instead of a static wallpaper
  const drift = interpolate(frame, [0, CHAPTER_DURATION], [0, -30]);

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.BG_BASE }}>
      <svg style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0.18 }}>
        <defs>
          <pattern id="chapter-dot-grid" x="0" y="0" width="56" height="56" patternUnits="userSpaceOnUse">
            <circle cx="7" cy="7" r="2.5" fill={COLORS.INK_TERTIARY} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#chapter-dot-grid)" />
      </svg>

      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 30% 28%, rgba(250,246,236,0.85) 0%, rgba(234,227,211,0.4) 65%, rgba(234,227,211,0.55) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Oversized low-opacity watermark icon — richness detail, not competing with content */}
      <div
        style={{
          position: 'absolute',
          right: '-180px',
          bottom: '-220px',
          opacity: 0.06,
          transform: `translateY(${drift}px) rotate(-8deg)`,
        }}
      >
        <Icon color={COLORS.INK_PRIMARY} size={1400} strokeWidth={1.2} />
      </div>
    </AbsoluteFill>
  );
};

// --- CHAPTER PROGRESS DOTS ---
const ChapterProgress: React.FC<{ current: number; total: number }> = ({ current, total }) => {
  const frame = useCurrentFrame();
  const pop = spring({ frame: frame - 20, fps: FPS, config: SPRING_CONFIG });

  return (
    <div
      style={{
        position: 'absolute',
        bottom: '110px',
        left: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '24px',
        opacity: pop,
      }}
    >
      {Array.from({ length: total }).map((_, i) => {
        const active = i + 1 === current;
        return (
          <div
            key={i}
            style={{
              width: active ? '64px' : '20px',
              height: '20px',
              borderRadius: '10px',
              backgroundColor: active ? COLORS.ACCENT_HERO : COLORS.BG_RECESSED,
              border: `2px solid ${active ? COLORS.ACCENT_HERO : COLORS.INK_TERTIARY}33`,
              transition: 'none',
            }}
          />
        );
      })}
      <span
        style={{
          fontFamily: FONTS.main,
          fontSize: '36px',
          fontWeight: 700,
          color: COLORS.INK_TERTIARY,
          marginLeft: '16px',
          letterSpacing: '0.05em',
        }}
      >
        {String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </span>
    </div>
  );
};

// --- STRUCTURE CHIP (real payload — what the fund IS, never the payoff number) ---
const FactChip: React.FC<{ label: string; delay: number }> = ({ label, delay }) => {
  const frame = useCurrentFrame();
  const pop = spring({ frame: frame - delay, fps: FPS, config: SPRING_CONFIG });

  return (
    <div
      style={{
        backgroundColor: COLORS.BG_ELEVATED,
        border: `3px solid ${COLORS.ACCENT_DETAIL}55`,
        borderRadius: '100px',
        padding: '24px 48px',
        transform: `translateY(${interpolate(pop, [0, 1], [24, 0])}px)`,
        opacity: pop,
        boxShadow: '0 16px 32px rgba(30, 27, 22, 0.04)',
      }}
    >
      <span
        style={{
          fontFamily: FONTS.main,
          fontSize: '46px',
          fontWeight: 700,
          color: COLORS.INK_SECONDARY,
          whiteSpace: 'nowrap',
        }}
      >
        {label}
      </span>
    </div>
  );
};

// --- FULL-SCREEN CHAPTER CARD ---
const FullScreenChapterCard: React.FC<{ data: ChapterData; total: number }> = ({ data, total }) => {
  const frame = useCurrentFrame();
  const { icon: Icon, title, subtitle, chips, index } = data;

  // exit fade over the last 24 frames of this beat
  const exitStart = CHAPTER_DURATION - 24;
  const exitOpacity = interpolate(frame, [exitStart, CHAPTER_DURATION], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const numberPop = spring({ frame, fps: FPS, config: SPRING_CONFIG });
  const iconPop = spring({ frame: frame - 8, fps: FPS, config: SPRING_CONFIG });
  const titlePop = spring({ frame: frame - 18, fps: FPS, config: SPRING_CONFIG });
  const subtitlePop = spring({ frame: frame - 30, fps: FPS, config: SPRING_CONFIG });

  return (
    <AbsoluteFill style={{ opacity: exitOpacity }}>
      <ChapterBackground Icon={Icon} />

      <AbsoluteFill
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 220px',
          boxSizing: 'border-box',
        }}
      >
        {/* Giant decorative chapter number, low-opacity, behind the real content */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -54%)',
            fontFamily: FONTS.main,
            fontSize: '1400px',
            fontWeight: 900,
            color: COLORS.INK_PRIMARY,
            opacity: 0.035,
            lineHeight: 1,
            userSelect: 'none',
          }}
        >
          {String(index).padStart(2, '0')}
        </div>

        {/* Real chapter number badge — the one gold ("hero") element per §3 role rule */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
            marginBottom: '56px',
            transform: `scale(${interpolate(numberPop, [0, 1], [0.7, 1])})`,
            opacity: numberPop,
          }}
        >
          <div
            style={{
              backgroundColor: COLORS.BG_ELEVATED,
              border: `4px solid ${COLORS.BG_RECESSED}`,
              borderRadius: '48px',
              width: '260px',
              height: '260px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 28px 56px rgba(30, 27, 22, 0.06)',
              transform: `rotate(${interpolate(iconPop, [0, 1], [-14, 0])}deg) scale(${interpolate(
                iconPop,
                [0, 1],
                [0.6, 1]
              )})`,
              opacity: iconPop,
            }}
          >
            <Icon color={COLORS.INK_PRIMARY} size={128} strokeWidth={2} />
          </div>

          <div
            style={{
              backgroundColor: COLORS.ACCENT_HERO,
              borderRadius: '32px',
              padding: '20px 44px',
              boxShadow: `0 20px 40px ${COLORS.ACCENT_HERO}35`,
            }}
          >
            <span
              style={{
                fontFamily: FONTS.main,
                fontSize: '96px',
                fontWeight: 900,
                color: COLORS.BG_BASE,
                letterSpacing: '-0.02em',
              }}
            >
              CH. {String(index).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Title */}
        <h1
          style={{
            fontFamily: FONTS.main,
            fontSize: '204px',
            fontWeight: 900,
            color: COLORS.INK_PRIMARY,
            margin: 0,
            textAlign: 'center',
            letterSpacing: '-0.03em',
            lineHeight: 1.02,
            transform: `translateY(${interpolate(titlePop, [0, 1], [50, 0])}px)`,
            opacity: titlePop,
          }}
        >
          {title}
        </h1>

        {/* Subtitle — supporting-detail role, always teal */}
        <span
          style={{
            fontFamily: FONTS.main,
            fontSize: '68px',
            fontWeight: 700,
            color: COLORS.ACCENT_DETAIL,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginTop: '32px',
            transform: `translateY(${interpolate(subtitlePop, [0, 1], [30, 0])}px)`,
            opacity: subtitlePop,
          }}
        >
          {subtitle}
        </span>

        {/* Structure chips — real payload, but descriptive only, no spoiled numbers */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '28px',
            marginTop: '72px',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {chips.map((chip, i) => (
            <FactChip key={chip} label={chip} delay={44 + i * 5} />
          ))}
        </div>
      </AbsoluteFill>

      <ChapterProgress current={index} total={total} />
    </AbsoluteFill>
  );
};

// --- MAIN COMPOSITION: full chapter-card reel, back to back ---
export default function ChapterCardsReel() {
  return (
    <AbsoluteFill style={{ width: CANVAS_W, height: CANVAS_H, overflow: 'hidden' }}>
      {CHAPTERS.map((chapter, i) => (
        <Sequence key={chapter.index} from={i * CHAPTER_DURATION} durationInFrames={CHAPTER_DURATION}>
          <FullScreenChapterCard data={chapter} total={CHAPTERS.length} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
}