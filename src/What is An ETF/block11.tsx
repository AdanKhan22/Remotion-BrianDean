/**
 * BLOCK 11: ETF DRAWBACK 2 — LEVERAGED ETFS & ETF DECAY
 * Canvas: Native 4K UHD (3840 x 2160), 60 FPS
 * Layout: Strict 60/40 Left Zone (Width 2304px, Right empty for talking head)
 *
 * VARIETY OF MOTION GRAPHIC FORMS:
 * - Beat 11.1: 2X/3X Daily Multiplier Rocket Card
 * - Beat 11.2: Daily Rebalance Reset Cycle Animation
 * - Beat 11.3: Flat Index 2-Day Return Board (Day 1: -10% | Day 2: +11.1% | Net: 0.0%)
 * - Beat 11.4: 2X Fund Mathematical Decay Board (Day 1: -20% | Day 2: +22.2% | Net: -2.0% LOSS!)
 * - Beat 11.5: Volatility Erosion Warning Barricade (Compounding destroys principal)
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
  RotateCcw,
  TrendingDown,
  TrendingUp,
  Flame,
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

export const BLOCK_11_DURATION = 1800;

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
// BEAT 11.1: 2X/3X MULTIPLIER CARD
// ==========================================
const Beat11_1_Multiplier: React.FC = () => {
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
              Drawback 2: Leverage
            </span>
          </div>
          <h2 style={{ fontSize: '125px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, lineHeight: 1.05, letterSpacing: '-0.04em' }}>
            The Allure of Leveraged ETFs
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
            alignItems: 'baseline',
            justifyContent: 'space-between',
            opacity: cardPop,
          }}
        >
          <div>
            <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.CRIMSON, textTransform: 'uppercase' }}>
              The Pitch
            </div>
            <div style={{ fontSize: '180px', fontWeight: 900, color: COLORS.CRIMSON, lineHeight: 0.95, margin: '20px 0' }}>
              2X · 3X
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ fontSize: '50px', color: COLORS.CRIMSON, fontWeight: 900 }}>•</span>
              <span style={{ fontSize: '50px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
                Double or Triple Daily Market Returns
              </span>
            </div>
          </div>

          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.CRIMSON, textTransform: 'uppercase' }}>
              Catch
            </div>
            <div style={{ fontSize: '84px', fontWeight: 900, color: COLORS.INK_PRIMARY, marginTop: '14px' }}>
              Daily Only
            </div>
          </div>
        </div>
      </div>
    </LeftZone>
  );
};

// ==========================================
// BEAT 11.2: DAILY REBALANCE CYCLE
// ==========================================
const Beat11_2_DailyResetCycle: React.FC = () => {
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
              Compounding Flaw
            </span>
          </div>
          <h2 style={{ fontSize: '125px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, lineHeight: 1.05, letterSpacing: '-0.04em' }}>
            The Cause of ETF Decay
          </h2>
        </div>

        {/* Daily Reset Mechanism Card */}
        <div
          style={{
            backgroundColor: COLORS.BG_ELEVATED,
            borderRadius: '56px',
            padding: '64px 76px',
            border: `3px solid ${COLORS.OCHRE_GOLD}`,
            boxShadow: '0 32px 85px rgba(158, 111, 24, 0.10)',
            display: 'flex',
            alignItems: 'center',
            gap: '48px',
            opacity: cardPop,
          }}
        >
          <div
            style={{
              width: '160px',
              height: '160px',
              borderRadius: '44px',
              backgroundColor: COLORS.OCHRE_GOLD_BG,
              border: `4px solid ${COLORS.OCHRE_GOLD}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              transform: `rotate(${frame * 2}deg)`,
            }}
          >
            <RotateCcw size={84} color={COLORS.OCHRE_GOLD} strokeWidth={2.4} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.OCHRE_GOLD, textTransform: 'uppercase' }}>
              Daily Clockwork Reset
            </span>
            <div style={{ fontSize: '96px', fontWeight: 900, color: COLORS.INK_PRIMARY, lineHeight: 1.05 }}>
              Reset Every 24 Hours
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span style={{ fontSize: '50px', color: COLORS.OCHRE_GOLD, fontWeight: 900 }}>•</span>
                <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
                  Rebalances daily to maintain 2X/3X target
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span style={{ fontSize: '50px', color: COLORS.OCHRE_GOLD, fontWeight: 900 }}>•</span>
                <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
                  Destroys multi-week compounded returns
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LeftZone>
  );
};

// ==========================================
// BEAT 11.3: FLAT INDEX SETUP BOARD
// ==========================================
const Beat11_3_FlatIndexBoard: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titlePop = spring({ frame: frame - 4, fps, config: ENTRANCE_SPRING });
  const d1 = spring({ frame: frame - 15, fps, config: POP_SPRING });
  const d2 = spring({ frame: frame - 30, fps, config: POP_SPRING });

  const exitFade = interpolate(frame, [340, 360], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  return (
    <LeftZone>
      <div style={{ opacity: exitFade, display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <div style={{ opacity: titlePop, transform: `translateY(${interpolate(titlePop, [0, 1], [30, 0])}px)` }}>
          <div style={{ display: 'inline-flex', padding: '12px 30px', borderRadius: '999px', backgroundColor: COLORS.COBALT_BLUE_BG, border: `2px solid ${COLORS.COBALT_BLUE}40`, marginBottom: '18px' }}>
            <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.COBALT_BLUE, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Example Setup
            </span>
          </div>
          <h2 style={{ fontSize: '125px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, lineHeight: 1.05, letterSpacing: '-0.04em' }}>
            The Underlying Index (Returns 0%)
          </h2>
        </div>

        {/* 2-Day Performance Board */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
          <div
            style={{
              backgroundColor: COLORS.BG_ELEVATED,
              borderRadius: '52px',
              padding: '60px 64px',
              border: `3px solid rgba(0,0,0,0.07)`,
              opacity: d1,
              transform: `scale(${interpolate(d1, [0, 1], [0.94, 1])})`,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.CRIMSON, textTransform: 'uppercase' }}>
                  Day 1 Move
                </span>
                <div style={{ width: '80px', height: '80px', borderRadius: '24px', backgroundColor: COLORS.CRIMSON_BG, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <TrendingDown size={50} color={COLORS.CRIMSON} strokeWidth={2.6} />
                </div>
              </div>
              <div style={{ fontSize: '140px', fontWeight: 900, color: COLORS.CRIMSON, lineHeight: 1, margin: '14px 0' }}>
                -10%
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ fontSize: '48px', color: COLORS.CRIMSON, fontWeight: 900 }}>•</span>
              <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
                $100 drops to $90.00
              </span>
            </div>
          </div>

          <div
            style={{
              backgroundColor: COLORS.BG_ELEVATED,
              borderRadius: '52px',
              padding: '60px 64px',
              border: `3px solid ${COLORS.PINE_JADE}`,
              boxShadow: '0 30px 80px rgba(8, 99, 67, 0.10)',
              opacity: d2,
              transform: `scale(${interpolate(d2, [0, 1], [0.94, 1])})`,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.PINE_JADE, textTransform: 'uppercase' }}>
                  Day 2 Move
                </span>
                <div style={{ width: '80px', height: '80px', borderRadius: '24px', backgroundColor: COLORS.PINE_JADE_BG, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <TrendingUp size={50} color={COLORS.PINE_JADE} strokeWidth={2.6} />
                </div>
              </div>
              <div style={{ fontSize: '140px', fontWeight: 900, color: COLORS.PINE_JADE, lineHeight: 1, margin: '14px 0' }}>
                +11.1%
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ fontSize: '48px', color: COLORS.PINE_JADE, fontWeight: 900 }}>•</span>
              <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.PINE_JADE }}>
                $90 recovers to $100.00 (0% Net)
              </span>
            </div>
          </div>
        </div>
      </div>
    </LeftZone>
  );
};

// ==========================================
// BEAT 11.4: 2X LEVERAGED DECAY LOSS
// ==========================================
const Beat11_4_LeveragedMathBoard: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titlePop = spring({ frame: frame - 4, fps, config: ENTRANCE_SPRING });
  const l1 = spring({ frame: frame - 15, fps, config: POP_SPRING });
  const l2 = spring({ frame: frame - 30, fps, config: POP_SPRING });

  const exitFade = interpolate(frame, [340, 360], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  return (
    <LeftZone>
      <div style={{ opacity: exitFade, display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <div style={{ opacity: titlePop, transform: `translateY(${interpolate(titlePop, [0, 1], [30, 0])}px)` }}>
          <div style={{ display: 'inline-flex', padding: '12px 30px', borderRadius: '999px', backgroundColor: COLORS.CRIMSON_BG, border: `2px solid ${COLORS.CRIMSON}40`, marginBottom: '18px' }}>
            <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.CRIMSON, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Mathematical Decay
            </span>
          </div>
          <h2 style={{ fontSize: '125px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, lineHeight: 1.05, letterSpacing: '-0.04em' }}>
            The 2X Fund Actually Lost Money!
          </h2>
        </div>

        {/* 2X Performance Breakdown */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
          <div
            style={{
              backgroundColor: COLORS.BG_ELEVATED,
              borderRadius: '52px',
              padding: '60px 64px',
              border: `3px solid rgba(0,0,0,0.07)`,
              opacity: l1,
              transform: `scale(${interpolate(l1, [0, 1], [0.94, 1])})`,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.CRIMSON, textTransform: 'uppercase' }}>
                  Day 1 (2X Move)
                </span>
                <div style={{ width: '80px', height: '80px', borderRadius: '24px', backgroundColor: COLORS.CRIMSON_BG, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <TrendingDown size={50} color={COLORS.CRIMSON} strokeWidth={2.6} />
                </div>
              </div>
              <div style={{ fontSize: '140px', fontWeight: 900, color: COLORS.CRIMSON, lineHeight: 1, margin: '14px 0' }}>
                -20%
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ fontSize: '48px', color: COLORS.CRIMSON, fontWeight: 900 }}>•</span>
              <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
                $100 plunges to $80.00
              </span>
            </div>
          </div>

          <div
            style={{
              backgroundColor: COLORS.BG_ELEVATED,
              borderRadius: '52px',
              padding: '60px 64px',
              border: `3px solid ${COLORS.CRIMSON}`,
              boxShadow: '0 30px 80px rgba(161, 59, 36, 0.12)',
              opacity: l2,
              transform: `scale(${interpolate(l2, [0, 1], [0.94, 1])})`,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.CRIMSON, textTransform: 'uppercase' }}>
                  Day 2 (+22.2%) → Final
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
                    transform: `scale(${1 + Math.sin(frame / 6) * 0.08})`,
                  }}
                >
                  <Flame size={50} color={COLORS.CRIMSON} strokeWidth={2.6} />
                </div>
              </div>
              <div style={{ fontSize: '140px', fontWeight: 900, color: COLORS.CRIMSON, lineHeight: 1, margin: '14px 0' }}>
                -2.0%
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ fontSize: '48px', color: COLORS.CRIMSON, fontWeight: 900 }}>•</span>
              <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.CRIMSON }}>
                Only reaches $97.76 (Lost 2%!)
              </span>
            </div>
          </div>
        </div>
      </div>
    </LeftZone>
  );
};

// ==========================================
// BEAT 11.5: VOLATILITY EROSION WARNING
// ==========================================
const Beat11_5_VolatilityWarning: React.FC = () => {
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
              Long-Term Rule
            </span>
          </div>
          <h2 style={{ fontSize: '125px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, lineHeight: 1.05, letterSpacing: '-0.04em' }}>
            Volatility Grinds Capital to Zero
          </h2>
        </div>

        {/* Warning Hero Card */}
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
            The Compounding Drag
          </div>
          <div style={{ fontSize: '140px', fontWeight: 900, color: COLORS.CRIMSON, lineHeight: 1 }}>
            Do Not Hold Long Term
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <span style={{ fontSize: '54px', color: COLORS.CRIMSON, fontWeight: 900 }}>•</span>
              <span style={{ fontSize: '52px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
                Severe mathematical decay in sideways markets
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <span style={{ fontSize: '54px', color: COLORS.CRIMSON, fontWeight: 900 }}>•</span>
              <span style={{ fontSize: '52px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
                Designed strictly for intraday tactical trades
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
export const WhatIsAnEtfBlock11: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.BG_BASE }}>
      {/* Beat 11.1: 0 - 360f (6s) */}
      <Sequence from={0} durationInFrames={360}>
        <Beat11_1_Multiplier />
      </Sequence>

      {/* Beat 11.2: 360 - 720f (6s) */}
      <Sequence from={360} durationInFrames={360}>
        <Beat11_2_DailyResetCycle />
      </Sequence>

      {/* Beat 11.3: 720 - 1080f (6s) */}
      <Sequence from={720} durationInFrames={360}>
        <Beat11_3_FlatIndexBoard />
      </Sequence>

      {/* Beat 11.4: 1080 - 1440f (6s) */}
      <Sequence from={1080} durationInFrames={360}>
        <Beat11_4_LeveragedMathBoard />
      </Sequence>

      {/* Beat 11.5: 1440 - 1800f (6s) */}
      <Sequence from={1440} durationInFrames={360}>
        <Beat11_5_VolatilityWarning />
      </Sequence>
    </AbsoluteFill>
  );
};

export default WhatIsAnEtfBlock11;
