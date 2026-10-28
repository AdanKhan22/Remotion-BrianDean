/**
 * BLOCK 30: Channel Outro & Video Wrap
 * Duration: 450 frames (~15 seconds)
 * 
 * Revisions Applied:
 * - Scaled up typography (H1 112px, body 48px)
 * - Full-width centered layout (3200px max width)
 * - Audio volume set strictly to 0.15
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
  ShieldCheck,
  Globe2,
  TrendingUp,
  ThumbsUp,
  MessageSquare,
  BellRing,
  Award,
} from 'lucide-react';

const COLORS = {
  BG_BASE: '#F4EFE6',
  BG_ELEVATED: '#FCFAF6',
  BG_RECESSED: '#E8E1D5',

  INK_PRIMARY: '#1E1B16',
  INK_SECONDARY: '#4A4439',
  INK_TERTIARY: '#7C7465',

  ACCENT_HERO: '#B8862E',
  ACCENT_NEGATIVE: '#B5533C',
  ACCENT_DETAIL: '#2E696B',
  BORDER_CARD: 'rgba(30, 27, 22, 0.14)',
};

const FONTS = {
  main: '"Inter", "DM Sans", -apple-system, BlinkMacSystemFont, sans-serif',
};

const SPRING_CONFIG = { damping: 200, stiffness: 120, mass: 0.8 };

const EditorialBackground: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.BG_BASE }}>
      <svg style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0.22 }}>
        <defs>
          <pattern id="outro-dot-grid" x="0" y="0" width="56" height="56" patternUnits="userSpaceOnUse">
            <circle cx="8" cy="8" r="2.8" fill={COLORS.INK_TERTIARY} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#outro-dot-grid)" />
      </svg>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at 45% 35%, rgba(252, 250, 246, 0.85) 0%, rgba(232, 225, 213, 0.5) 100%)`,
          pointerEvents: 'none',
        }}
      />
    </AbsoluteFill>
  );
};

// Beat 1: The Master 2026 Framework Synthesis (0 - 225)
const Beat1_BlueprintRecap: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titlePop = spring({ frame: frame - 5, fps, config: SPRING_CONFIG });
  const card1 = spring({ frame: frame - 18, fps, config: SPRING_CONFIG });
  const card2 = spring({ frame: frame - 32, fps, config: SPRING_CONFIG });
  const card3 = spring({ frame: frame - 46, fps, config: SPRING_CONFIG });

  return (
    <AbsoluteFill style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '0 160px' }}>
      <Sequence from={5}>
        <Audio src={staticFile('pop-sfx.mp3')} volume={0.15} />
      </Sequence>

      {/* Header */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '16px',
          marginBottom: '52px',
          opacity: titlePop,
          transform: `translateY(${interpolate(titlePop, [0, 1], [30, 0])}px)`,
        }}
      >
        <h2
          style={{
            fontFamily: FONTS.main,
            fontSize: '130px',
            fontWeight: 900,
            color: COLORS.INK_PRIMARY,
            margin: 0,
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
          }}
        >
          Your All-Weather 2026 Strategy
        </h2>
      </div>

      {/* 3 Pillars Showcase */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px', width: '100%', maxWidth: '3200px' }}>
        {/* Core */}
        <div
          style={{
            backgroundColor: COLORS.BG_ELEVATED,
            borderRadius: '40px',
            borderTop: `16px solid ${COLORS.ACCENT_HERO}`,
            padding: '60px 44px',
            display: 'flex',
            flexDirection: 'column',
            gap: '30px',
            opacity: card1,
            transform: `translateY(${interpolate(card1, [0, 1], [35, 0])}px)`,
            boxShadow: '0 24px 50px rgba(0, 0, 0, 0.08)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontFamily: FONTS.main, fontSize: '50px', fontWeight: 900, color: COLORS.ACCENT_HERO }}>
              SLEEVE 1
            </span>
            <TrendingUp color={COLORS.ACCENT_HERO} size={52} />
          </div>
          <span style={{ fontFamily: FONTS.main, fontSize: '150px', fontWeight: 900, color: COLORS.INK_PRIMARY, lineHeight: 0.9 }}>
            60%
          </span>
          <span style={{ fontFamily: FONTS.main, fontSize: '72px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
            Core Compounder
          </span>
          <span style={{ fontFamily: FONTS.main, fontSize: '60px', fontWeight: 700, color: COLORS.ACCENT_HERO }}>
            VOO · RSP · VTI
          </span>
        </div>

        {/* Complementary */}
        <div
          style={{
            backgroundColor: COLORS.BG_ELEVATED,
            borderRadius: '40px',
            borderTop: `16px solid ${COLORS.ACCENT_DETAIL}`,
            padding: '60px 44px',
            display: 'flex',
            flexDirection: 'column',
            gap: '30px',
            opacity: card2,
            transform: `translateY(${interpolate(card2, [0, 1], [35, 0])}px)`,
            boxShadow: '0 24px 50px rgba(0, 0, 0, 0.08)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontFamily: FONTS.main, fontSize: '50px', fontWeight: 900, color: COLORS.ACCENT_DETAIL }}>
              SLEEVE 2
            </span>
            <Globe2 color={COLORS.ACCENT_DETAIL} size={52} />
          </div>
          <span style={{ fontFamily: FONTS.main, fontSize: '150px', fontWeight: 900, color: COLORS.INK_PRIMARY, lineHeight: 0.9 }}>
            20–30%
          </span>
          <span style={{ fontFamily: FONTS.main, fontSize: '72px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
            Global Alpha Edge
          </span>
          <span style={{ fontFamily: FONTS.main, fontSize: '60px', fontWeight: 700, color: COLORS.ACCENT_DETAIL }}>
            ACWX · AVDV · DFIV
          </span>
        </div>

        {/* Diversifier */}
        <div
          style={{
            backgroundColor: COLORS.BG_ELEVATED,
            borderRadius: '40px',
            borderTop: `16px solid #1E1B16`,
            padding: '60px 44px',
            display: 'flex',
            flexDirection: 'column',
            gap: '30px',
            opacity: card3,
            transform: `translateY(${interpolate(card3, [0, 1], [35, 0])}px)`,
            boxShadow: '0 24px 50px rgba(0, 0, 0, 0.08)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontFamily: FONTS.main, fontSize: '50px', fontWeight: 900, color: COLORS.INK_PRIMARY }}>
              SLEEVE 3
            </span>
            <ShieldCheck color={COLORS.INK_PRIMARY} size={52} />
          </div>
          <span style={{ fontFamily: FONTS.main, fontSize: '150px', fontWeight: 900, color: COLORS.INK_PRIMARY, lineHeight: 0.9 }}>
            10–20%
          </span>
          <span style={{ fontFamily: FONTS.main, fontSize: '72px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
            Asymmetric Shield
          </span>
          <span style={{ fontFamily: FONTS.main, fontSize: '60px', fontWeight: 700, color: COLORS.INK_PRIMARY }}>
            SGOV · BND · GLD
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// Beat 2: High-Status Channel Outro & Engagement CTA (225 - 450)
const Beat2_ChannelOutro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titlePop = spring({ frame: frame - 5, fps, config: SPRING_CONFIG });
  const cta1 = spring({ frame: frame - 18, fps, config: SPRING_CONFIG });
  const cta2 = spring({ frame: frame - 32, fps, config: SPRING_CONFIG });
  const cta3 = spring({ frame: frame - 46, fps, config: SPRING_CONFIG });

  return (
    <AbsoluteFill style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '0 160px' }}>
      <Sequence from={5}>
        <Audio src={staticFile('pop-sfx.mp3')} volume={0.15} />
      </Sequence>

      {/* Header */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '16px',
          marginBottom: '52px',
          opacity: titlePop,
          transform: `translateY(${interpolate(titlePop, [0, 1], [30, 0])}px)`,
        }}
      >
        <h2
          style={{
            fontFamily: FONTS.main,
            fontSize: '130px',
            fontWeight: 900,
            color: COLORS.INK_PRIMARY,
            margin: 0,
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
          }}
        >
          Invest With Confidence in 2026
        </h2>
      </div>

      {/* 3 Call-To-Action Interactive Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', width: '100%', maxWidth: '2800px' }}>
        {/* Subscribe */}
        <div
          style={{
            backgroundColor: COLORS.BG_ELEVATED,
            borderRadius: '36px',
            padding: '48px 56px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            opacity: cta1,
            transform: `translateY(${interpolate(cta1, [0, 1], [30, 0])}px)`,
            boxShadow: '0 20px 40px rgba(184, 134, 46, 0.1)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <div
              style={{
                backgroundColor: COLORS.ACCENT_HERO,
                padding: '32px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <BellRing color={COLORS.BG_BASE} size={64} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontFamily: FONTS.main, fontSize: '72px', fontWeight: 900, color: COLORS.INK_PRIMARY }}>
                Subscribe to the Channel
              </span>
            </div>
          </div>
        </div>

        {/* Comment */}
        <div
          style={{
            backgroundColor: COLORS.BG_ELEVATED,
            borderRadius: '36px',
            padding: '48px 56px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            opacity: cta2,
            transform: `translateY(${interpolate(cta2, [0, 1], [30, 0])}px)`,
            boxShadow: '0 16px 32px rgba(0, 0, 0, 0.05)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <div
              style={{
                backgroundColor: COLORS.ACCENT_DETAIL,
                padding: '32px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <MessageSquare color={COLORS.BG_BASE} size={64} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontFamily: FONTS.main, fontSize: '72px', fontWeight: 900, color: COLORS.INK_PRIMARY }}>
                Share Your Allocation in Comments
              </span>
            </div>
          </div>
        </div>

        {/* Like */}
        <div
          style={{
            backgroundColor: COLORS.BG_ELEVATED,
            borderRadius: '36px',
            padding: '48px 56px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            opacity: cta3,
            transform: `translateY(${interpolate(cta3, [0, 1], [30, 0])}px)`,
            boxShadow: '0 16px 32px rgba(0, 0, 0, 0.05)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <div
              style={{
                backgroundColor: COLORS.INK_PRIMARY,
                padding: '32px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ThumbsUp color={COLORS.BG_BASE} size={64} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontFamily: FONTS.main, fontSize: '72px', fontWeight: 900, color: COLORS.INK_PRIMARY }}>
                Like & Share With Fellow Investors
              </span>
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

const OutroScene: React.FC = () => {
  return (
    <AbsoluteFill style={{ overflow: 'hidden' }}>
      <Sequence from={0}>
        <EditorialBackground />
      </Sequence>

      {/* Beat 1: Master 2026 Blueprint Recap (0 - 225 frames / 7.5s) */}
      <Sequence from={0} durationInFrames={225}>
        <Beat1_BlueprintRecap />
      </Sequence>

      {/* Beat 2: Channel Outro & Engagement CTA (225 - 450 frames / 7.5s) */}
      <Sequence from={225} durationInFrames={225}>
        <Beat2_ChannelOutro />
      </Sequence>
    </AbsoluteFill>
  );
};

export default OutroScene;
