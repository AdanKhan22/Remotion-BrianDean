/**
 * BLOCK 10: ETF DRAWBACK 1 — THE BID-ASK SPREAD
 * Canvas: Native 4K UHD (3840 x 2160), 60 FPS
 * Layout: Strict 60/40 Left Zone (Width 2304px, Right empty for talking head)
 *
 * VARIETY OF MOTION GRAPHIC FORMS:
 * - Beat 10.1: Warning Hero Stencil (3 Hidden Vulnerabilities)
 * - Beat 10.2: Bid vs Ask Dynamic Terminal Display (Bid $99.95 | Ask $100.05 | Spread $0.10)
 * - Beat 10.3: Instant Execution Toll Meter ($0.10 subtracted per share at entry)
 * - Beat 10.4: VOO 1-Cent Liquid Comparison Hero (Tight 1¢ Spread)
 * - Beat 10.5: Niche Illiquid ETF 0.10% Drag Scale (Penny on $100 vs 10¢ on $100)
 * - Beat 10.6: 1-Trade vs 1-Year Expense Ratio Disparity Podium (0.10% Instant > 0.03% Annual)
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
  ArrowUpRight,
  ArrowDownRight,
  ArrowLeftRight,
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


const ENTRANCE_SPRING = { damping: 200, stiffness: 120, mass: 0.8 };
const POP_SPRING = { damping: 16, stiffness: 160, mass: 0.6 };

export const BLOCK_10_DURATION = 2160;

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
// BEAT 10.1: 3 DRAWBACKS STENCIL
// ==========================================
const Beat10_1_Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titlePop = spring({ frame: frame - 4, fps, config: ENTRANCE_SPRING });
  const cardPop = spring({ frame: frame - 18, fps, config: POP_SPRING });

  const exitFade = interpolate(frame, [340, 360], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  return (
    <LeftZone>
      <div style={{ opacity: exitFade, display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <div style={{ opacity: titlePop, transform: `translateY(${interpolate(titlePop, [0, 1], [30, 0])}px)` }}>
          <div style={{ display: 'inline-flex', padding: '12px 30px', borderRadius: '999px', backgroundColor: COLORS.CRIMSON_BG, border: `2px solid ${COLORS.CRIMSON}40`, marginBottom: '18px' }}>
            <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.CRIMSON, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Structural Limitations
            </span>
          </div>
          <h2 style={{ fontSize: '125px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, lineHeight: 1.05, letterSpacing: '-0.04em' }}>
            The Three Hidden Drawbacks
          </h2>
        </div>

        {/* Hero Card */}
        <div
          style={{
            backgroundColor: COLORS.BG_ELEVATED,
            borderRadius: '56px',
            padding: '72px 84px',
            border: `4px solid ${COLORS.CRIMSON}`,
            boxShadow: '0 32px 85px rgba(161, 59, 36, 0.12)',
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
            opacity: cardPop,
          }}
        >
          <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.CRIMSON, textTransform: 'uppercase' }}>
            Vulnerability Warning
          </div>
          <div style={{ fontSize: '140px', fontWeight: 900, color: COLORS.INK_PRIMARY, lineHeight: 1, letterSpacing: '-0.04em' }}>
            3 Places It Costs You
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ fontSize: '50px', color: COLORS.CRIMSON, fontWeight: 900 }}>•</span>
            <span style={{ fontSize: '52px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
              Market Friction Takes a Silent Bite
            </span>
          </div>
        </div>
      </div>
    </LeftZone>
  );
};

// ==========================================
// BEAT 10.2: BID VS ASK TERMINAL
// ==========================================
const Beat10_2_BidAskTerminal: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titlePop = spring({ frame: frame - 4, fps, config: ENTRANCE_SPRING });
  const b1 = spring({ frame: frame - 16, fps, config: POP_SPRING });
  const b2 = spring({ frame: frame - 32, fps, config: POP_SPRING });

  const exitFade = interpolate(frame, [340, 360], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  return (
    <LeftZone>
      <div style={{ opacity: exitFade, display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <div style={{ opacity: titlePop, transform: `translateY(${interpolate(titlePop, [0, 1], [30, 0])}px)` }}>
          <div style={{ display: 'inline-flex', padding: '12px 30px', borderRadius: '999px', backgroundColor: COLORS.CRIMSON_BG, border: `2px solid ${COLORS.CRIMSON}40`, marginBottom: '18px' }}>
            <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.CRIMSON, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Drawback 1: Market Spread
            </span>
          </div>
          <h2 style={{ fontSize: '125px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, lineHeight: 1.05, letterSpacing: '-0.04em' }}>
            The Bid-Ask Spread Gap
          </h2>
        </div>

        {/* Dual Price Panels with Interactive Spread Gap */}
        <div style={{ position: 'relative' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
            {/* Ask Price Panel */}
            <div
              style={{
                backgroundColor: COLORS.BG_ELEVATED,
                borderRadius: '52px',
                padding: '60px 64px',
                border: `3px solid ${COLORS.PINE_JADE}`,
                boxShadow: '0 30px 80px rgba(8, 99, 67, 0.10)',
                opacity: b1,
                transform: `scale(${interpolate(b1, [0, 1], [0.94, 1])})`,
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.PINE_JADE, textTransform: 'uppercase' }}>
                  Ask Price (To Buy)
                </span>
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '24px',
                    backgroundColor: COLORS.PINE_JADE_BG,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <ArrowUpRight size={50} color={COLORS.PINE_JADE} strokeWidth={2.6} />
                </div>
              </div>

              <div style={{ fontSize: '150px', fontWeight: 900, color: COLORS.INK_PRIMARY, lineHeight: 1, margin: '16px 0' }}>
                $100.05
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span style={{ fontSize: '48px', color: COLORS.PINE_JADE, fontWeight: 900 }}>•</span>
                <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
                  Entry price paid at execution
                </span>
              </div>
            </div>

            {/* Bid Price Panel */}
            <div
              style={{
                backgroundColor: COLORS.BG_ELEVATED,
                borderRadius: '52px',
                padding: '60px 64px',
                border: `3px solid ${COLORS.CRIMSON}`,
                boxShadow: '0 30px 80px rgba(161, 59, 36, 0.10)',
                opacity: b2,
                transform: `scale(${interpolate(b2, [0, 1], [0.94, 1])})`,
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.CRIMSON, textTransform: 'uppercase' }}>
                  Bid Price (To Sell)
                </span>
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '24px',
                    backgroundColor: COLORS.CRIMSON_BG,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <ArrowDownRight size={50} color={COLORS.CRIMSON} strokeWidth={2.6} />
                </div>
              </div>

              <div style={{ fontSize: '150px', fontWeight: 900, color: COLORS.CRIMSON, lineHeight: 1, margin: '16px 0' }}>
                $99.95
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span style={{ fontSize: '48px', color: COLORS.CRIMSON, fontWeight: 900 }}>•</span>
                <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.CRIMSON }}>
                  Exit price received at market fill
                </span>
              </div>
            </div>
          </div>

          {/* Central Floating Spread Badge with Pulse */}
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%) scale(${1 + Math.sin(frame / 8) * 0.04})`,
              backgroundColor: COLORS.INK_PRIMARY,
              padding: '16px 36px',
              borderRadius: '999px',
              boxShadow: '0 16px 40px rgba(0,0,0,0.25)',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              border: `3px solid ${COLORS.OCHRE_GOLD}`,
            }}
          >
            <ArrowLeftRight size={44} color={COLORS.OCHRE_GOLD} strokeWidth={2.8} />
            <span style={{ fontSize: '48px', fontWeight: 900, color: '#FFFFFF', letterSpacing: '0.04em' }}>
              SPREAD: 10¢ GAP
            </span>
          </div>
        </div>
      </div>
    </LeftZone>
  );
};

// ==========================================
// BEAT 10.3: EXECUTION TOLL METER
// ==========================================
const Beat10_3_ExecutionToll: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titlePop = spring({ frame: frame - 4, fps, config: ENTRANCE_SPRING });
  const cardPop = spring({ frame: frame - 18, fps, config: POP_SPRING });

  const exitFade = interpolate(frame, [340, 360], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  return (
    <LeftZone>
      <div style={{ opacity: exitFade, display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <div style={{ opacity: titlePop, transform: `translateY(${interpolate(titlePop, [0, 1], [30, 0])}px)` }}>
          <div style={{ display: 'inline-flex', padding: '12px 30px', borderRadius: '999px', backgroundColor: COLORS.OCHRE_GOLD_BG, border: `2px solid ${COLORS.OCHRE_GOLD}40`, marginBottom: '18px' }}>
            <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.OCHRE_GOLD, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Execution Friction
            </span>
          </div>
          <h2 style={{ fontSize: '125px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, lineHeight: 1.05, letterSpacing: '-0.04em' }}>
            An Instant Toll on Every Share
          </h2>
        </div>

        {/* Hero Impact Toll Card */}
        <div
          style={{
            backgroundColor: COLORS.BG_ELEVATED,
            borderRadius: '56px',
            padding: '72px 84px',
            border: `3px solid ${COLORS.OCHRE_GOLD}`,
            boxShadow: '0 32px 85px rgba(158, 111, 24, 0.12)',
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
            opacity: cardPop,
          }}
        >
          <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.OCHRE_GOLD, textTransform: 'uppercase' }}>
            Immediate Transaction Drag
          </div>
          <div style={{ fontSize: '140px', fontWeight: 900, color: COLORS.INK_PRIMARY, lineHeight: 1 }}>
            Crossing The Spread
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ fontSize: '50px', color: COLORS.OCHRE_GOLD, fontWeight: 900 }}>•</span>
            <span style={{ fontSize: '52px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
              Gap Paid Directly to Market Makers
            </span>
          </div>
        </div>
      </div>
    </LeftZone>
  );
};

// ==========================================
// BEAT 10.4: VOO 1-CENT LIQUID HERO
// ==========================================
const Beat10_4_VooPennySpread: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titlePop = spring({ frame: frame - 4, fps, config: ENTRANCE_SPRING });
  const statPop = spring({ frame: frame - 18, fps, config: POP_SPRING });

  const exitFade = interpolate(frame, [340, 360], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  return (
    <LeftZone>
      <div style={{ opacity: exitFade, display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <div style={{ opacity: titlePop, transform: `translateY(${interpolate(titlePop, [0, 1], [30, 0])}px)` }}>
          <div style={{ display: 'inline-flex', padding: '12px 30px', borderRadius: '999px', backgroundColor: COLORS.PINE_JADE_BG, border: `2px solid ${COLORS.PINE_JADE}40`, marginBottom: '18px' }}>
            <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.PINE_JADE, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Mega-Cap Liquidity
            </span>
          </div>
          <h2 style={{ fontSize: '125px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, lineHeight: 1.05, letterSpacing: '-0.04em' }}>
            VOO Spread is Virtually Zero
          </h2>
        </div>

        {/* Hero Card */}
        <div
          style={{
            backgroundColor: COLORS.BG_ELEVATED,
            borderRadius: '56px',
            padding: '72px 84px',
            border: `3px solid ${COLORS.PINE_JADE}`,
            boxShadow: '0 32px 85px rgba(8, 99, 67, 0.12)',
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            opacity: statPop,
          }}
        >
          <div>
            <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.INK_MUTED, textTransform: 'uppercase' }}>
              VOO Bid-Ask Gap
            </div>
            <div style={{ fontSize: '210px', fontWeight: 900, color: COLORS.PINE_JADE, lineHeight: 0.95, margin: '20px 0' }}>
              $0.01
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ fontSize: '50px', color: COLORS.PINE_JADE, fontWeight: 900 }}>•</span>
              <span style={{ fontSize: '52px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
                Tight 1¢ Gap From Massive Volume
              </span>
            </div>
          </div>

          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.PINE_JADE, textTransform: 'uppercase' }}>
              Liquidity Rating
            </div>
            <div style={{ fontSize: '84px', fontWeight: 900, color: COLORS.PINE_JADE, marginTop: '12px' }}>
              Ultra-Liquid
            </div>
          </div>
        </div>
      </div>
    </LeftZone>
  );
};

// ==========================================
// BEAT 10.5: NICHE ILLIQUID 0.10% DRAG
// ==========================================
const Beat10_5_NicheSpreadDrag: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titlePop = spring({ frame: frame - 4, fps, config: ENTRANCE_SPRING });
  const cardPop = spring({ frame: frame - 18, fps, config: POP_SPRING });

  const exitFade = interpolate(frame, [340, 360], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  return (
    <LeftZone>
      <div style={{ opacity: exitFade, display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <div style={{ opacity: titlePop, transform: `translateY(${interpolate(titlePop, [0, 1], [30, 0])}px)` }}>
          <div style={{ display: 'inline-flex', padding: '12px 30px', borderRadius: '999px', backgroundColor: COLORS.CRIMSON_BG, border: `2px solid ${COLORS.CRIMSON}40`, marginBottom: '18px' }}>
            <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.CRIMSON, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Illiquid Niche Risk
            </span>
          </div>
          <h2 style={{ fontSize: '125px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, lineHeight: 1.05, letterSpacing: '-0.04em' }}>
            Small ETFs Carry a 10¢ Tax
          </h2>
        </div>

        {/* Niche Card */}
        <div
          style={{
            backgroundColor: COLORS.BG_ELEVATED,
            borderRadius: '56px',
            padding: '72px 84px',
            border: `3px solid ${COLORS.CRIMSON}`,
            boxShadow: '0 32px 85px rgba(161, 59, 36, 0.12)',
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            opacity: cardPop,
          }}
        >
          <div>
            <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.CRIMSON, textTransform: 'uppercase' }}>
              10¢ Spread on $100 Share
            </div>
            <div style={{ fontSize: '200px', fontWeight: 900, color: COLORS.CRIMSON, lineHeight: 0.95, margin: '20px 0' }}>
              0.10%
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ fontSize: '50px', color: COLORS.CRIMSON, fontWeight: 900 }}>•</span>
              <span style={{ fontSize: '52px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
                Instant Loss Just to Enter Trade
              </span>
            </div>
          </div>

          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.CRIMSON, textTransform: 'uppercase' }}>
              Friction Level
            </div>
            <div style={{ fontSize: '84px', fontWeight: 900, color: COLORS.CRIMSON, marginTop: '12px' }}>
              Heavy Drag
            </div>
          </div>
        </div>
      </div>
    </LeftZone>
  );
};

// ==========================================
// BEAT 10.6: 1-TRADE VS 1-YEAR PODIUM
// ==========================================
const Beat10_6_DisparityPodium: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titlePop = spring({ frame: frame - 4, fps, config: ENTRANCE_SPRING });
  const p1 = spring({ frame: frame - 16, fps, config: POP_SPRING });
  const p2 = spring({ frame: frame - 32, fps, config: POP_SPRING });

  const exitFade = interpolate(frame, [340, 360], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  return (
    <LeftZone>
      <div style={{ opacity: exitFade, display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <div style={{ opacity: titlePop, transform: `translateY(${interpolate(titlePop, [0, 1], [30, 0])}px)` }}>
          <div style={{ display: 'inline-flex', padding: '12px 30px', borderRadius: '999px', backgroundColor: COLORS.OCHRE_GOLD_BG, border: `2px solid ${COLORS.OCHRE_GOLD}40`, marginBottom: '18px' }}>
            <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.OCHRE_GOLD, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Disparity Reality
            </span>
          </div>
          <h2 style={{ fontSize: '125px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, lineHeight: 1.05, letterSpacing: '-0.04em' }}>
            1 Trade Can Cost More Than 1 Year
          </h2>
        </div>

        {/* Comparison Panels */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
          <div
            style={{
              backgroundColor: COLORS.BG_ELEVATED,
              borderRadius: '52px',
              padding: '64px 72px',
              border: `3px solid ${COLORS.PINE_JADE}`,
              opacity: p1,
              transform: `scale(${interpolate(p1, [0, 1], [0.94, 1])})`,
            }}
          >
            <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.PINE_JADE, textTransform: 'uppercase' }}>
              VOO Total Annual Fee
            </div>
            <div style={{ fontSize: '150px', fontWeight: 900, color: COLORS.PINE_JADE, lineHeight: 1, margin: '16px 0' }}>
              0.03%
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ fontSize: '48px', color: COLORS.PINE_JADE, fontWeight: 900 }}>•</span>
              <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
                Full year of passive holding
              </span>
            </div>
          </div>

          <div
            style={{
              backgroundColor: COLORS.BG_ELEVATED,
              borderRadius: '52px',
              padding: '64px 72px',
              border: `3px solid ${COLORS.CRIMSON}`,
              boxShadow: '0 30px 80px rgba(161, 59, 36, 0.12)',
              opacity: p2,
              transform: `scale(${interpolate(p2, [0, 1], [0.94, 1])})`,
            }}
          >
            <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.CRIMSON, textTransform: 'uppercase' }}>
              Illiquid Spread Hit
            </div>
            <div style={{ fontSize: '150px', fontWeight: 900, color: COLORS.CRIMSON, lineHeight: 1, margin: '16px 0' }}>
              0.10%+
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ fontSize: '48px', color: COLORS.CRIMSON, fontWeight: 900 }}>•</span>
              <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.CRIMSON }}>
                Lost instantly at execution fill
              </span>
            </div>
          </div>
        </div>
      </div>
    </LeftZone>
  );
};

// ==========================================
// MASTER EXPORT
// ==========================================
export const WhatIsAnEtfBlock10: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.BG_BASE }}>
      {/* Beat 10.1: 0 - 360f (6s) */}
      <Sequence from={0} durationInFrames={360}>
        <Beat10_1_Intro />
      </Sequence>

      {/* Beat 10.2: 360 - 720f (6s) */}
      <Sequence from={360} durationInFrames={360}>
        <Beat10_2_BidAskTerminal />
      </Sequence>

      {/* Beat 10.3: 720 - 1080f (6s) */}
      <Sequence from={720} durationInFrames={360}>
        <Beat10_3_ExecutionToll />
      </Sequence>

      {/* Beat 10.4: 1080 - 1440f (6s) */}
      <Sequence from={1080} durationInFrames={360}>
        <Beat10_4_VooPennySpread />
      </Sequence>

      {/* Beat 10.5: 1440 - 1800f (6s) */}
      <Sequence from={1440} durationInFrames={360}>
        <Beat10_5_NicheSpreadDrag />
      </Sequence>

      {/* Beat 10.6: 1800 - 2160f (6s) */}
      <Sequence from={1800} durationInFrames={360}>
        <Beat10_6_DisparityPodium />
      </Sequence>
    </AbsoluteFill>
  );
};

export default WhatIsAnEtfBlock10;
