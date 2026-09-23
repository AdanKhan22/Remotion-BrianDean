/**
 * DISCLAIMER SCENE (4K, 3840x2160, 30fps, 750 frames / 25s)
 *
 * Narration:
 * "Before we get into the content, a quick disclaimer: this video is for
 *  educational purposes only. This is not investment advice. I may or may not
 *  own positions in securities discussed here, either personally or through my
 *  investment fund at Pine Creek Capital Management. All investments carry
 *  risk, and always consult with a qualified financial advisor before making
 *  investment decisions."
 *
 * Layout: left column = headline. Right column = four ruled rows, each
 * revealed as its line is spoken. Retime with the REVEAL constants below.
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
  ACCENT_DETAIL: '#3C6E71',
};

const FONTS = {
  main: '"Inter", "DM Sans", sans-serif',
};

const SPRING_CONFIG = { damping: 200, stiffness: 120, mass: 0.8 };

// Frame at which each row appears. Tuned to the narration; adjust to your VO.
const REVEAL = {
  title: 8,
  educational: 60,
  positions: 190,
  risk: 440,
  advisor: 500,
};

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
        padding: '0 0 0 48px',
        position: 'relative',
        borderBottom: last ? 'none' : `3px solid ${COLORS.BG_RECESSED}`,
        opacity: p,
        transform: `translateY(${interpolate(p, [0, 1], [24, 0])}px)`,
      }}
    >
      {/* Left rule marks the row's tone: negative for risk, neutral otherwise */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: '20%',
          bottom: '20%',
          width: emphasis ? '12px' : '6px',
          borderRadius: '6px',
          backgroundColor: color,
        }}
      />
      <div
        style={{
          width: '132px',
          height: '132px',
          borderRadius: '36px',
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
            fontFamily: FONTS.main,
            fontSize: '68px',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            color: COLORS.INK_PRIMARY,
          }}
        >
          {title}
        </span>
        <span
          style={{
            fontFamily: FONTS.main,
            fontSize: '44px',
            fontWeight: 500,
            lineHeight: 1.35,
            color: COLORS.INK_SECONDARY,
            maxWidth: '1500px',
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
    <svg style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0.22 }}>
      <defs>
        <pattern id="disclaimer-dot-grid" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
          <circle cx="6" cy="6" r="2.5" fill={COLORS.INK_TERTIARY} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#disclaimer-dot-grid)" />
    </svg>
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background:
          'radial-gradient(circle at 30% 45%, rgba(250, 246, 236, 0.85) 0%, rgba(234, 227, 211, 0.5) 100%)',
        pointerEvents: 'none',
      }}
    />
  </AbsoluteFill>
);

const DisclaimerScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const titlePop = spring({ frame: frame - REVEAL.title, fps, config: SPRING_CONFIG });

  return (
    <AbsoluteFill style={{ overflow: 'hidden' }}>
      <Background />

      <Sequence from={REVEAL.title + 6}>
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
        {/* Left: headline */}
        <div
          style={{
            width: '1080px',
            flexShrink: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '48px',
            opacity: titlePop,
            transform: `translateY(${interpolate(titlePop, [0, 1], [24, 0])}px)`,
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
              fontFamily: FONTS.main,
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
              fontFamily: FONTS.main,
              fontSize: '52px',
              fontWeight: 500,
              lineHeight: 1.3,
              color: COLORS.INK_SECONDARY,
              maxWidth: '900px',
            }}
          >
            A quick note before we get into the content.
          </span>
        </div>

        {/* Right: four disclosures */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Row
            startFrame={REVEAL.educational}
            color={COLORS.ACCENT_HERO}
            icon={<FileText color={COLORS.ACCENT_HERO} size={72} />}
            title="For education only"
            body="This video is for educational purposes only. It is not investment advice."
          />
          <Row
            startFrame={REVEAL.positions}
            color={COLORS.ACCENT_DETAIL}
            icon={<Building2 color={COLORS.ACCENT_DETAIL} size={72} />}
            title="Possible positions"
            body="I may or may not own positions in the securities discussed, personally or through my fund at Pine Creek Capital Management."
          />
          <Row
            startFrame={REVEAL.risk}
            color={COLORS.ACCENT_NEGATIVE}
            icon={<TrendingDown color={COLORS.ACCENT_NEGATIVE} size={72} />}
            title="All investments carry risk"
            body="You can lose money."
            emphasis
          />
          <Row
            startFrame={REVEAL.advisor}
            color={COLORS.INK_PRIMARY}
            icon={<UserCheck color={COLORS.INK_PRIMARY} size={72} />}
            title="Talk to an advisor"
            body="Consult a qualified financial advisor before making investment decisions."
            last
          />
        </div>
      </div>
    </AbsoluteFill>
  );
};

export default DisclaimerScene;