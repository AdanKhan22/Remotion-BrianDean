/**
 * BLOCK 7: COMPARING EXPENSE RATIOS — BENCHMARKS & COST ACCUMULATION
 * Canvas: Native 4K UHD (3840 x 2160), 60 FPS
 * Layout: Strict 60/40 Left Zone (Width 2304px, Right empty for talking head)
 *
 * VARIETY OF MOTION GRAPHIC FORMS:
 * - Beat 7.1: Twin Balance Scales ($100 Deposit → $0.03 vs $10,000 Deposit → $3.00)
 * - Beat 7.2: Giant Contrast Podium (0.03% VOO vs 1.00% High-Fee Fund: $3 vs $100/yr)
 * - Beat 7.3: 30-Year Compounding Wealth Gap Timeline ($10k difference compounded)
 * - Beat 7.4: Golden Gauge Speedometer Indicator (< 0.30% / 30 bps Buy Zone)
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

export const BLOCK_7_DURATION = 1440;

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
// BEAT 7.1: TWIN BALANCE SCALES
// ==========================================
const Beat7_1_DollarValue: React.FC = () => {
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
          <div style={{ display: 'inline-flex', padding: '12px 30px', borderRadius: '999px', backgroundColor: COLORS.PINE_JADE_BG, border: `2px solid ${COLORS.PINE_JADE}40`, marginBottom: '18px' }}>
            <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.PINE_JADE, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Real Dollar Cost
            </span>
          </div>
          <h2 style={{ fontSize: '125px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, lineHeight: 1.05, letterSpacing: '-0.04em' }}>
            What 0.03% Looks Like In Dollars
          </h2>
        </div>

        {/* Dual Scale Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
          <div
            style={{
              backgroundColor: COLORS.BG_ELEVATED,
              borderRadius: '52px',
              padding: '64px 72px',
              border: `3px solid ${COLORS.PINE_JADE}`,
              boxShadow: '0 30px 80px rgba(8, 99, 67, 0.10)',
              opacity: p1,
              transform: `scale(${interpolate(p1, [0, 1], [0.94, 1])})`,
            }}
          >
            <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.INK_MUTED, textTransform: 'uppercase' }}>
              On $100 Invested
            </div>
            <div style={{ fontSize: '170px', fontWeight: 900, color: COLORS.PINE_JADE, lineHeight: 1, margin: '16px 0' }}>
              $0.03
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ fontSize: '50px', color: COLORS.PINE_JADE, fontWeight: 900 }}>•</span>
              <span style={{ fontSize: '50px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
                Only 3¢ per year
              </span>
            </div>
          </div>

          <div
            style={{
              backgroundColor: COLORS.BG_ELEVATED,
              borderRadius: '52px',
              padding: '64px 72px',
              border: `3px solid ${COLORS.PINE_JADE}`,
              boxShadow: '0 30px 80px rgba(8, 99, 67, 0.10)',
              opacity: p2,
              transform: `scale(${interpolate(p2, [0, 1], [0.94, 1])})`,
            }}
          >
            <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.INK_MUTED, textTransform: 'uppercase' }}>
              On $10,000 Invested
            </div>
            <div style={{ fontSize: '170px', fontWeight: 900, color: COLORS.PINE_JADE, lineHeight: 1, margin: '16px 0' }}>
              $3.00
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ fontSize: '50px', color: COLORS.PINE_JADE, fontWeight: 900 }}>•</span>
              <span style={{ fontSize: '50px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
                Negligible annual drag
              </span>
            </div>
          </div>
        </div>
      </div>
    </LeftZone>
  );
};

// ==========================================
// BEAT 7.2: GIANT CONTRAST PODIUM (33X GAP)
// ==========================================
const Beat7_2_HighFeePodium: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titlePop = spring({ frame: frame - 4, fps, config: ENTRANCE_SPRING });
  const h1 = spring({ frame: frame - 16, fps, config: POP_SPRING });
  const h2 = spring({ frame: frame - 32, fps, config: POP_SPRING });

  const exitFade = interpolate(frame, [340, 360], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  return (
    <LeftZone>
      <div style={{ opacity: exitFade, display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <div style={{ opacity: titlePop, transform: `translateY(${interpolate(titlePop, [0, 1], [30, 0])}px)` }}>
          <div style={{ display: 'inline-flex', padding: '12px 30px', borderRadius: '999px', backgroundColor: COLORS.CRIMSON_BG, border: `2px solid ${COLORS.CRIMSON}40`, marginBottom: '18px' }}>
            <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.CRIMSON, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Annual Cost Disparity
            </span>
          </div>
          <h2 style={{ fontSize: '125px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, lineHeight: 1.05, letterSpacing: '-0.04em' }}>
            Low-Cost ETF vs High-Fee Fund ($10k)
          </h2>
        </div>

        {/* Podium Pillars */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'flex-end' }}>
          {/* Low Fee */}
          <div
            style={{
              backgroundColor: COLORS.BG_ELEVATED,
              borderRadius: '48px',
              padding: '60px 54px',
              border: `3px solid ${COLORS.PINE_JADE}`,
              opacity: h1,
              transform: `scale(${interpolate(h1, [0, 1], [0.94, 1])})`,
            }}
          >
            <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.PINE_JADE, textTransform: 'uppercase' }}>
              VOO (0.03%)
            </div>
            <div style={{ fontSize: '160px', fontWeight: 900, color: COLORS.PINE_JADE, lineHeight: 1, margin: '16px 0' }}>
              $3/yr
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ fontSize: '48px', color: COLORS.PINE_JADE, fontWeight: 900 }}>•</span>
              <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.PINE_JADE }}>
                Negligible annual drag
              </span>
            </div>
          </div>

          {/* High Fee */}
          <div
            style={{
              backgroundColor: COLORS.BG_ELEVATED,
              borderRadius: '48px',
              padding: '60px 54px',
              border: `3px solid ${COLORS.CRIMSON}`,
              boxShadow: '0 30px 80px rgba(161, 59, 36, 0.12)',
              opacity: h2,
              transform: `scale(${interpolate(h2, [0, 1], [0.94, 1])})`,
            }}
          >
            <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.CRIMSON, textTransform: 'uppercase' }}>
              High-Fee Fund (1.00%)
            </div>
            <div style={{ fontSize: '160px', fontWeight: 900, color: COLORS.CRIMSON, lineHeight: 1, margin: '16px 0' }}>
              $100/yr
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ fontSize: '48px', color: COLORS.CRIMSON, fontWeight: 900 }}>•</span>
              <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.CRIMSON }}>
                33X more expensive
              </span>
            </div>
          </div>
        </div>
      </div>
    </LeftZone>
  );
};

// ==========================================
// BEAT 7.3: 30-YEAR TIMELINE STEPPER
// ==========================================
const Beat7_3_CompoundingTimeline: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titlePop = spring({ frame: frame - 4, fps, config: ENTRANCE_SPRING });
  const y5 = spring({ frame: frame - 15, fps, config: POP_SPRING });
  const y10 = spring({ frame: frame - 30, fps, config: POP_SPRING });
  const y30 = spring({ frame: frame - 45, fps, config: POP_SPRING });

  const exitFade = interpolate(frame, [340, 360], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const years = [
    { span: '5 Years', impact: 'Hundreds', springVal: y5, color: COLORS.INK_MUTED },
    { span: '10 Years', impact: 'Thousands', springVal: y10, color: COLORS.OCHRE_GOLD },
    { span: '30 Years', impact: 'Tens of Thousands', springVal: y30, color: COLORS.CRIMSON },
  ];

  return (
    <LeftZone>
      <div style={{ opacity: exitFade, display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <div style={{ opacity: titlePop, transform: `translateY(${interpolate(titlePop, [0, 1], [30, 0])}px)` }}>
          <div style={{ display: 'inline-flex', padding: '12px 30px', borderRadius: '999px', backgroundColor: COLORS.OCHRE_GOLD_BG, border: `2px solid ${COLORS.OCHRE_GOLD}40`, marginBottom: '18px' }}>
            <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.OCHRE_GOLD, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Compounding Timeline
            </span>
          </div>
          <h2 style={{ fontSize: '125px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, lineHeight: 1.05, letterSpacing: '-0.04em' }}>
            Compounding Fee Drag Over Time
          </h2>
        </div>

        {/* 3 Step Milestone Horizon */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
          {years.map((y, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: COLORS.BG_ELEVATED,
                borderRadius: '48px',
                padding: '56px 44px',
                border: `3px solid rgba(0,0,0,0.07)`,
                boxShadow: '0 24px 65px rgba(0,0,0,0.05)',
                opacity: y.springVal,
                transform: `translateY(${interpolate(y.springVal, [0, 1], [30, 0])}px)`,
              }}
            >
              <div style={{ fontSize: '48px', fontWeight: 800, color: y.color }}>
                {y.span}
              </div>
              <div style={{ fontSize: '64px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: '14px 0', lineHeight: 1.1 }}>
                {y.impact}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '48px', color: y.color, fontWeight: 900 }}>•</span>
                <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
                  Lost Wealth Drag
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </LeftZone>
  );
};

// ==========================================
// BEAT 7.4: GOLDEN BENCHMARK SPEEDOMETER
// ==========================================
const Beat7_4_BenchmarkGauge: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titlePop = spring({ frame: frame - 4, fps, config: ENTRANCE_SPRING });
  const gaugePop = spring({ frame: frame - 18, fps, config: POP_SPRING });

  const exitFade = interpolate(frame, [340, 360], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  return (
    <LeftZone>
      <div style={{ opacity: exitFade, display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <div style={{ opacity: titlePop, transform: `translateY(${interpolate(titlePop, [0, 1], [30, 0])}px)` }}>
          <div style={{ display: 'inline-flex', padding: '12px 30px', borderRadius: '999px', backgroundColor: COLORS.PINE_JADE_BG, border: `2px solid ${COLORS.PINE_JADE}40`, marginBottom: '18px' }}>
            <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.PINE_JADE, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Golden Benchmark Rule
            </span>
          </div>
          <h2 style={{ fontSize: '125px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, lineHeight: 1.05, letterSpacing: '-0.04em' }}>
            Brian's ETF Benchmark Ceiling
          </h2>
        </div>

        {/* Grand Hero Gauge Display */}
        <div
          style={{
            backgroundColor: COLORS.BG_ELEVATED,
            borderRadius: '56px',
            padding: '72px 84px',
            border: `4px solid ${COLORS.PINE_JADE}`,
            boxShadow: '0 32px 85px rgba(8, 99, 67, 0.12)',
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            opacity: gaugePop,
            transform: `scale(${interpolate(gaugePop, [0, 1], [0.94, 1])})`,
          }}
        >
          <div>
            <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.INK_MUTED, textTransform: 'uppercase' }}>
              Target Expense Ratio
            </div>
            <div style={{ fontSize: '210px', fontWeight: 900, color: COLORS.PINE_JADE, lineHeight: 0.95, letterSpacing: '-0.05em', margin: '20px 0' }}>
              &lt; 0.30%
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ fontSize: '50px', color: COLORS.PINE_JADE, fontWeight: 900 }}>•</span>
              <span style={{ fontSize: '50px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
                Under 30 Basis Points Target
              </span>
            </div>
          </div>

          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.PINE_JADE, textTransform: 'uppercase' }}>
              Evaluation Rule
            </div>
            <div style={{ fontSize: '84px', fontWeight: 900, color: COLORS.INK_PRIMARY, marginTop: '12px' }}>
              Double Check
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
export const WhatIsAnEtfBlock7: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.BG_BASE }}>
      {/* Beat 7.1: 0 - 360f (6s) */}
      <Sequence from={0} durationInFrames={360}>
        <Beat7_1_DollarValue />
      </Sequence>

      {/* Beat 7.2: 360 - 720f (6s) */}
      <Sequence from={360} durationInFrames={360}>
        <Beat7_2_HighFeePodium />
      </Sequence>

      {/* Beat 7.3: 720 - 1080f (6s) */}
      <Sequence from={720} durationInFrames={360}>
        <Beat7_3_CompoundingTimeline />
      </Sequence>

      {/* Beat 7.4: 1080 - 1440f (6s) */}
      <Sequence from={1080} durationInFrames={360}>
        <Beat7_4_BenchmarkGauge />
      </Sequence>
    </AbsoluteFill>
  );
};

export default WhatIsAnEtfBlock7;
