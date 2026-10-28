/**
 * BLOCK 2: DISCLAIMER SCENE (NATIVE 4K, 3840x2160, 60fps)
 * Visual Benchmark: Apple Keynote meets Stripe Press (Warm Editorial Fintech)
 * Matches the proven cinematic YouTube full-screen standard from the portfolio project.
 *
 * Full 100% canvas stage:
 * - Subtle animated dot-matrix & radial gradient atmosphere
 * - Left anchor: 220px massive "Disclaimer" headline with Alert badge
 * - Right column: 4 kinetic revealed rows with custom icons, color-accented indicators, and SFX
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
import { AlertTriangle, FileText, Building2, TrendingDown, UserCheck } from 'lucide-react';

const COLORS = {
  BG_BASE: '#F3EEE4',
  BG_ELEVATED: '#FAF6EC',
  BG_RECESSED: '#EAE3D3',

  INK_PRIMARY: '#1E1B16',
  INK_SECONDARY: '#5C564A',
  INK_TERTIARY: '#8C8474',

  ACCENT_HERO: '#B8862E',
  ACCENT_NEGATIVE: '#B5533C',
  ACCENT_DETAIL: '#2557D6',
};

const FONTS = {
  heading: 'Poppins, Inter, -apple-system, sans-serif',
  body: 'Inter, -apple-system, sans-serif',
};

const SPRING_CONFIG = { damping: 200, stiffness: 120, mass: 0.8 };

// Frame reveals timed at 60 FPS (approx 12-14 seconds total)
const REVEAL = {
  title: 10,
  educational: 50,
  positions: 150,
  risk: 320,
  advisor: 430,
};

export const BLOCK_2_DURATION = 750; // 12.5 seconds @ 60 FPS

type RowProps = {
  startFrame: number;
  color: string;
  icon: React.ReactNode;
  title: string;
  body: string;
  emphasis?: boolean;
  last?: boolean;
};

const Row: React.FC<RowProps> = ({ startFrame, color, icon, title, body, emphasis, last }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const p = spring({ frame: frame - startFrame, fps, config: SPRING_CONFIG });

  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        gap: '56px',
        padding: '0 0 0 54px',
        position: 'relative',
        borderBottom: last ? 'none' : `3px solid ${COLORS.BG_RECESSED}`,
        opacity: p,
        transform: `translateY(${interpolate(p, [0, 1], [30, 0])}px)`,
      }}
    >
      {/* Accent Indicator Bar */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: '18%',
          bottom: '18%',
          width: emphasis ? '14px' : '7px',
          borderRadius: '8px',
          backgroundColor: color,
        }}
      />
      <div
        style={{
          width: '136px',
          height: '136px',
          borderRadius: '38px',
          backgroundColor: `${color}18`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <span
          style={{
            fontFamily: FONTS.heading,
            fontSize: '66px',
            fontWeight: 800,
            letterSpacing: '-0.025em',
            lineHeight: 1.1,
            color: COLORS.INK_PRIMARY,
          }}
        >
          {title}
        </span>
        <span
          style={{
            fontFamily: FONTS.body,
            fontSize: '52px',
            fontWeight: 700,
            lineHeight: 1.3,
            color: COLORS.INK_PRIMARY,
            maxWidth: '1550px',
          }}
        >
          {body}
        </span>
      </div>
    </div>
  );
};

const Background: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: COLORS.BG_BASE }}>
    <svg style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0.18 }}>
      <defs>
        <pattern id="etf-disclaimer-grid" x="0" y="0" width="56" height="56" patternUnits="userSpaceOnUse">
          <circle cx="6" cy="6" r="3" fill={COLORS.INK_TERTIARY} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#etf-disclaimer-grid)" />
    </svg>
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background:
          'radial-gradient(circle at 30% 45%, rgba(250, 246, 236, 0.88) 0%, rgba(234, 227, 211, 0.45) 100%)',
        pointerEvents: 'none',
      }}
    />
  </AbsoluteFill>
);

export const WhatIsAnEtfBlock2: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const titlePop = spring({ frame: frame - REVEAL.title, fps, config: SPRING_CONFIG });

  // Exit dissolve
  const exitOpacity = interpolate(frame, [BLOCK_2_DURATION - 20, BLOCK_2_DURATION], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{ overflow: 'hidden', opacity: exitOpacity }}>
      <Background />

      <Sequence from={REVEAL.title + 4}>
        <Audio src={staticFile('pop-sfx.mp3')} volume={0.15} />
      </Sequence>

      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'stretch',
          padding: '200px 240px',
          boxSizing: 'border-box',
          gap: '160px',
        }}
      >
        {/* Left Column: Massive Editorial Anchor */}
        <div
          style={{
            width: '1100px',
            flexShrink: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '44px',
            opacity: titlePop,
            transform: `translateY(${interpolate(titlePop, [0, 1], [30, 0])}px)`,
          }}
        >
          <div
            style={{
              width: '168px',
              height: '168px',
              borderRadius: '48px',
              backgroundColor: `${COLORS.ACCENT_NEGATIVE}18`,
              border: `4px solid ${COLORS.ACCENT_NEGATIVE}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <AlertTriangle color={COLORS.ACCENT_NEGATIVE} size={92} strokeWidth={2.2} />
          </div>

          <h1
            style={{
              fontFamily: FONTS.heading,
              fontSize: '220px',
              fontWeight: 900,
              letterSpacing: '-0.045em',
              lineHeight: 0.95,
              color: COLORS.INK_PRIMARY,
              margin: 0,
            }}
          >
            Disclaimer
          </h1>

          <span
            style={{
              fontFamily: FONTS.body,
              fontSize: '52px',
              fontWeight: 600,
              lineHeight: 1.3,
              color: COLORS.INK_SECONDARY,
              maxWidth: '920px',
            }}
          >
            A quick compliance note before we dive into how ETFs work.
          </span>
        </div>

        {/* Right Column: 4 Kinematic Audio-Synced Rows */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Row
            startFrame={REVEAL.educational}
            color={COLORS.ACCENT_HERO}
            icon={<FileText color={COLORS.ACCENT_HERO} size={72} strokeWidth={2.2} />}
            title="For Education Only"
            body="• Educational purposes only — Not personal financial or legal advice"
          />
          <Row
            startFrame={REVEAL.positions}
            color={COLORS.ACCENT_DETAIL}
            icon={<Building2 color={COLORS.ACCENT_DETAIL} size={72} strokeWidth={2.2} />}
            title="Potential Positions"
            body="• May hold positions in securities via Pine Creek Capital Management"
          />
          <Row
            startFrame={REVEAL.risk}
            color={COLORS.ACCENT_NEGATIVE}
            icon={<TrendingDown color={COLORS.ACCENT_NEGATIVE} size={72} strokeWidth={2.2} />}
            title="Market Risk Notice"
            body="• Capital loss is possible — Past returns never guarantee future results"
            emphasis
          />
          <Row
            startFrame={REVEAL.advisor}
            color={COLORS.INK_PRIMARY}
            icon={<UserCheck color={COLORS.INK_PRIMARY} size={72} strokeWidth={2.2} />}
            title="Independent Advice"
            body="• Always consult a licensed fiduciary advisor for personal situations"
            last
          />
        </div>
      </div>
    </AbsoluteFill>
  );
};

export default WhatIsAnEtfBlock2;
