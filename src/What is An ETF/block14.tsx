/**
 * BLOCK 14: OUTRO & 3-ETF PORTFOLIO VIDEO TARGET
 * Canvas: Native 4K UHD (3840 x 2160), 60 FPS
 * Layout: Strict 60/40 Split (Left 2304px visual canvas, Right empty for talking head)
 *
 * DYNAMIC REDESIGN:
 * - Beat 14.1 (0 - 360f / 6s): Investor Mastery Sign-Off & Checklist Completed Badge
 * - Beat 14.2 (360 - 720f / 6s): YouTube Video Card Card CTA pointing to "The BEST 3 ETF Portfolio for 2026"
 */

import React from 'react';
import {
  AbsoluteFill,
  Sequence,
  spring,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
} from 'remotion';
import {
  CheckCircle2,
  Sparkles,
  Play,
  ArrowUpRight,
  TrendingUp,
} from 'lucide-react';

const COLORS = {
  BG_BASE: '#F3EEE4',
  BG_ELEVATED: '#FAF6EC',
  BG_RECESSED: '#EAE3D3',

  INK_PRIMARY: '#141210',
  INK_SECONDARY: '#363127',
  INK_MUTED: '#5C5446',

  PINE_JADE: '#086343',
  PINE_JADE_BG: 'rgba(8, 99, 67, 0.12)',
  OCHRE_GOLD: '#9E6F18',
  OCHRE_GOLD_BG: 'rgba(158, 111, 24, 0.14)',
  COBALT_BLUE: '#1A49B8',
  COBALT_BLUE_BG: 'rgba(26, 73, 184, 0.12)',
  CRIMSON: '#A13B24',
  CRIMSON_BG: 'rgba(161, 59, 36, 0.12)',
};

const FONTS = {
  heading: 'Poppins, Inter, -apple-system, sans-serif',
  body: 'Inter, -apple-system, sans-serif',
};

const SPRING_SMOOTH = { damping: 200, stiffness: 120, mass: 0.8 };
const SPRING_SNAPPY = { damping: 24, stiffness: 180, mass: 0.8 };

export const BLOCK_14_DURATION = 720;

const EditorialBackground: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: COLORS.BG_BASE }}>
    <svg style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0.18 }}>
      <defs>
        <pattern id="b14-grid" x="0" y="0" width="56" height="56" patternUnits="userSpaceOnUse">
          <circle cx="8" cy="8" r="2.5" fill={COLORS.INK_MUTED} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#b14-grid)" />
    </svg>
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at 35% 35%, rgba(250, 246, 236, 0.85) 0%, rgba(234, 227, 211, 0.35) 100%)',
        pointerEvents: 'none',
      }}
    />
  </AbsoluteFill>
);

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

// ==========================================
// BEAT 14.1: VIEWER GRATITUDE & CONFIDENCE
// Mastery Completed Banner
// ==========================================
const Beat14_1_Gratitude: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const pop = spring({ frame: frame - 15, fps, config: SPRING_SMOOTH });
  const checkPop = spring({ frame: frame - 40, fps, config: SPRING_SNAPPY });

  return (
    <LeftZone>
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '16px',
          padding: '14px 34px',
          borderRadius: '999px',
          backgroundColor: COLORS.BG_ELEVATED,
          border: `3px solid ${COLORS.PINE_JADE}`,
          marginBottom: '26px',
          alignSelf: 'flex-start',
        }}
      >
        <Sparkles size={36} color={COLORS.PINE_JADE} />
        <span
          style={{
            fontFamily: FONTS.heading,
            fontSize: '48px',
            fontWeight: 800,
            color: COLORS.PINE_JADE,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
          }}
        >
          Primer Complete
        </span>
      </div>

      <div
        style={{
          backgroundColor: COLORS.BG_ELEVATED,
          borderRadius: '48px',
          border: `4px solid ${COLORS.PINE_JADE}`,
          padding: '60px 68px',
          display: 'flex',
          alignItems: 'center',
          gap: '54px',
          opacity: pop,
          boxShadow: '0 24px 60px rgba(8, 99, 67, 0.12)',
        }}
      >
        <div
          style={{
            width: '180px',
            height: '180px',
            borderRadius: '50%',
            backgroundColor: COLORS.PINE_JADE_BG,
            border: `4px solid ${COLORS.PINE_JADE}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            opacity: checkPop,
            transform: `scale(${interpolate(checkPop, [0, 1], [0.6, 1])})`,
          }}
        >
          <CheckCircle2 size={100} color={COLORS.PINE_JADE} strokeWidth={2.6} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <span
            style={{
              fontFamily: FONTS.heading,
              fontSize: '48px',
              fontWeight: 800,
              color: COLORS.PINE_JADE,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}
          >
            Thank You For Watching
          </span>
          <h1
            style={{
              fontFamily: FONTS.heading,
              fontSize: '96px',
              fontWeight: 900,
              color: COLORS.INK_PRIMARY,
              margin: 0,
              lineHeight: 1.05,
              letterSpacing: '-0.04em',
            }}
          >
            Invest With Total Clarity
          </h1>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '10px' }}>
            <div style={{ fontFamily: FONTS.heading, fontSize: '54px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
              ✓ Know the underlying index & weights
            </div>
            <div style={{ fontFamily: FONTS.heading, fontSize: '54px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
              ✓ Avoid wide spreads, decay & closures
            </div>
          </div>
        </div>
      </div>
    </LeftZone>
  );
};

// ==========================================
// BEAT 14.2: NEXT VIDEO CTA
// YouTube Featured Card Pointer
// ==========================================
const Beat14_2_NextVideoCTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const cardPop = spring({ frame: frame - 15, fps, config: SPRING_SMOOTH });
  const badgePop = spring({ frame: frame - 45, fps, config: SPRING_SNAPPY });

  return (
    <LeftZone>
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '16px',
          padding: '14px 34px',
          borderRadius: '999px',
          backgroundColor: COLORS.BG_ELEVATED,
          border: `3px solid ${COLORS.COBALT_BLUE}`,
          marginBottom: '26px',
          alignSelf: 'flex-start',
        }}
      >
        <TrendingUp size={36} color={COLORS.COBALT_BLUE} />
        <span
          style={{
            fontFamily: FONTS.heading,
            fontSize: '48px',
            fontWeight: 800,
            color: COLORS.COBALT_BLUE,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
          }}
        >
          Recommended Next Watch
        </span>
      </div>

      <div
        style={{
          backgroundColor: COLORS.BG_ELEVATED,
          borderRadius: '48px',
          border: `4px solid ${COLORS.COBALT_BLUE}`,
          padding: '56px 64px',
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
          opacity: cardPop,
          transform: `translateY(${interpolate(cardPop, [0, 1], [30, 0])}px)`,
          boxShadow: '0 28px 70px rgba(26, 73, 184, 0.16)',
          position: 'relative',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <span
              style={{
                fontFamily: FONTS.heading,
                fontSize: '48px',
                fontWeight: 800,
                color: COLORS.COBALT_BLUE,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              Step-by-Step Portfolio Blueprint
            </span>
            <div
              style={{
                fontFamily: FONTS.heading,
                fontSize: '84px',
                fontWeight: 900,
                color: COLORS.INK_PRIMARY,
                lineHeight: 1.1,
                marginTop: '10px',
                letterSpacing: '-0.03em',
              }}
            >
              The BEST 3 ETF Portfolio for 2026
            </div>
            <div
              style={{
                fontFamily: FONTS.heading,
                fontSize: '52px',
                fontWeight: 700,
                color: COLORS.OCHRE_GOLD,
                marginTop: '8px',
              }}
            >
              (Grow Wealth & Dodge the AI Bubble)
            </div>
          </div>

          <div
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '36px',
              backgroundColor: COLORS.COBALT_BLUE,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              boxShadow: '0 12px 30px rgba(26, 73, 184, 0.3)',
            }}
          >
            <ArrowUpRight size={70} color="#FFFFFF" strokeWidth={3} />
          </div>
        </div>

        {/* Action Button Banner */}
        <div
          style={{
            backgroundColor: COLORS.COBALT_BLUE_BG,
            borderRadius: '28px',
            border: `3px solid ${COLORS.COBALT_BLUE}`,
            padding: '24px 36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            opacity: badgePop,
            transform: `scale(${interpolate(badgePop, [0, 1], [0.95, 1])})`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <Play size={48} color={COLORS.COBALT_BLUE} fill={COLORS.COBALT_BLUE} />
            <span style={{ fontFamily: FONTS.heading, fontSize: '48px', fontWeight: 900, color: COLORS.COBALT_BLUE }}>
              Click the video card on screen now →
            </span>
          </div>

          <span style={{ fontFamily: FONTS.heading, fontSize: '48px', fontWeight: 800, color: COLORS.INK_MUTED }}>
            Full Strategy Guide
          </span>
        </div>
      </div>
    </LeftZone>
  );
};

// ==========================================
// MASTER EXPORT
// ==========================================
export const WhatIsAnEtfBlock14: React.FC = () => {
  return (
    <AbsoluteFill style={{ overflow: 'hidden' }}>
      <EditorialBackground />

      {/* Beat 14.1: 0 - 360 (6s) */}
      <Sequence from={0} durationInFrames={360}>
        <Beat14_1_Gratitude />
      </Sequence>

      {/* Beat 14.2: 360 - 720 (6s) */}
      <Sequence from={360} durationInFrames={360}>
        <Beat14_2_NextVideoCTA />
      </Sequence>
    </AbsoluteFill>
  );
};

export default WhatIsAnEtfBlock14;
