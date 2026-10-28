/**
 * BLOCK 6: HOW FUND MANAGERS GET PAID — THE HIDDEN EXPENSE RATIO
 * Canvas: Native 4K UHD (3840 x 2160), 60 FPS
 * Layout: Strict 60/40 Left Zone (Width 2304px, Right empty for talking head)
 *
 * VARIETY OF MOTION GRAPHIC FORMS:
 * - Beat 6.1: 3-Pillar Operational Checklist (Index Rebalance, Dividend Collection, Regulatory Filings)
 * - Beat 6.2: Big Invoice Stamp Contrast ($0.00 Invoices Sent vs Paid Daily)
 * - Beat 6.3: Monumental 0.03% Hero Meter ($VOO Expense Ratio with Basis Point Callout)
 * - Beat 6.4: Daily NAV Skim Animation (Graphic coin sliver sliced out before reaching screen)
 * - Beat 6.5: Net Return Filter Formula (Gross Market Return - 0.03% = Net You See)
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
  Minus,
  Equal,
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

export const BLOCK_6_DURATION = 1800;

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
// BEAT 6.1: 3-PILLAR OPERATIONAL CHECKLIST
// ==========================================
const Beat6_1_Checklist: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titlePop = spring({ frame: frame - 4, fps, config: ENTRANCE_SPRING });
  const col1 = spring({ frame: frame - 15, fps, config: POP_SPRING });
  const col2 = spring({ frame: frame - 30, fps, config: POP_SPRING });
  const col3 = spring({ frame: frame - 45, fps, config: POP_SPRING });

  const exitFade = interpolate(frame, [340, 360], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  const tasks = [
    { title: 'Rebalancing', sub: 'Tracks S&P 500 perfectly', springVal: col1, color: COLORS.COBALT_BLUE },
    { title: 'Dividends', sub: 'Collects 500 payouts', springVal: col2, color: COLORS.PINE_JADE },
    { title: 'Paperwork', sub: 'Administers full fund', springVal: col3, color: COLORS.OCHRE_GOLD },
  ];

  return (
    <LeftZone>
      <div style={{ opacity: exitFade, display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <div style={{ opacity: titlePop, transform: `translateY(${interpolate(titlePop, [0, 1], [30, 0])}px)` }}>
          <div style={{ display: 'inline-flex', padding: '12px 30px', borderRadius: '999px', backgroundColor: COLORS.COBALT_BLUE_BG, border: `2px solid ${COLORS.COBALT_BLUE}40`, marginBottom: '18px' }}>
            <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.COBALT_BLUE, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Manager Operations
            </span>
          </div>
          <h2 style={{ fontSize: '125px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, lineHeight: 1.05, letterSpacing: '-0.04em' }}>
            What Does Vanguard Do Every Day?
          </h2>
        </div>

        {/* 3 Column Service Blocks */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
          {tasks.map((t, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: COLORS.BG_ELEVATED,
                borderRadius: '48px',
                padding: '56px 44px',
                border: `3px solid rgba(0,0,0,0.07)`,
                boxShadow: '0 24px 65px rgba(0,0,0,0.05)',
                opacity: t.springVal,
                transform: `translateY(${interpolate(t.springVal, [0, 1], [40, 0])}px)`,
              }}
            >
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: t.color, marginBottom: '24px' }} />
              <div style={{ fontSize: '64px', fontWeight: 900, color: COLORS.INK_PRIMARY, lineHeight: 1.1 }}>
                {t.title}
              </div>
              <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.INK_SECONDARY, marginTop: '16px' }}>
                {t.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </LeftZone>
  );
};

// ==========================================
// BEAT 6.2: INVOICE CONTRAST STAMP
// ==========================================
const Beat6_2_InvoiceContrast: React.FC = () => {
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
          <div style={{ display: 'inline-flex', padding: '12px 30px', borderRadius: '999px', backgroundColor: COLORS.CRIMSON_BG, border: `2px solid ${COLORS.CRIMSON}40`, marginBottom: '18px' }}>
            <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.CRIMSON, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              The Fee Mystery
            </span>
          </div>
          <h2 style={{ fontSize: '125px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, lineHeight: 1.05, letterSpacing: '-0.04em' }}>
            Zero Invoices Ever Sent
          </h2>
        </div>

        {/* Dual Pillar Comparison */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
          <div
            style={{
              backgroundColor: COLORS.BG_ELEVATED,
              borderRadius: '52px',
              padding: '64px 72px',
              border: `3px solid rgba(0,0,0,0.07)`,
              boxShadow: '0 30px 80px rgba(0,0,0,0.06)',
              opacity: p1,
              transform: `scale(${interpolate(p1, [0, 1], [0.94, 1])})`,
            }}
          >
            <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.INK_MUTED, textTransform: 'uppercase' }}>
              Invoices In The Mail
            </div>
            <div style={{ fontSize: '140px', fontWeight: 900, color: COLORS.CRIMSON, lineHeight: 1, margin: '14px 0' }}>
              $0.00
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.CRIMSON }}>
                • $0 Invoices in Mail
              </div>
              <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.INK_SECONDARY }}>
                • Never Asks for a Check
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundColor: COLORS.BG_ELEVATED,
              borderRadius: '52px',
              padding: '64px 72px',
              border: `3px solid ${COLORS.PINE_JADE}`,
              boxShadow: '0 30px 80px rgba(8, 99, 67, 0.12)',
              opacity: p2,
              transform: `scale(${interpolate(p2, [0, 1], [0.94, 1])})`,
            }}
          >
            <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.PINE_JADE, textTransform: 'uppercase' }}>
              How They Get Paid
            </div>
            <div style={{ fontSize: '140px', fontWeight: 900, color: COLORS.PINE_JADE, lineHeight: 1, margin: '14px 0' }}>
              Daily
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.PINE_JADE }}>
                • Silent Daily NAV Skim
              </div>
              <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.INK_SECONDARY }}>
                • Deducted Automatically
              </div>
            </div>
          </div>
        </div>
      </div>
    </LeftZone>
  );
};

// ==========================================
// BEAT 6.3: MONUMENTAL 0.03% HERO METER
// ==========================================
const Beat6_3_HeroExpenseRatio: React.FC = () => {
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
              Annualized Fee Metric
            </span>
          </div>
          <h2 style={{ fontSize: '125px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, lineHeight: 1.05, letterSpacing: '-0.04em' }}>
            The Expense Ratio
          </h2>
        </div>

        {/* Hero Expansive Surface */}
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
            opacity: statPop,
            transform: `scale(${interpolate(statPop, [0, 1], [0.94, 1])})`,
          }}
        >
          <div>
            <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.INK_MUTED, textTransform: 'uppercase' }}>
              $VOO Management Cost
            </div>
            <div style={{ fontSize: '210px', fontWeight: 900, color: COLORS.PINE_JADE, lineHeight: 0.95, letterSpacing: '-0.05em', margin: '20px 0' }}>
              0.03%
            </div>
            <div style={{ fontSize: '48px', fontWeight: 700, color: COLORS.INK_SECONDARY }}>
              Per Year (Just 3 Basis Points)
            </div>
          </div>

          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.OCHRE_GOLD, textTransform: 'uppercase' }}>
              Industry Status
            </div>
            <div style={{ fontSize: '84px', fontWeight: 900, color: COLORS.INK_PRIMARY, marginTop: '12px' }}>
              Ultra-Cheap
            </div>
          </div>
        </div>
      </div>
    </LeftZone>
  );
};

// ==========================================
// BEAT 6.4: DAILY NAV DEDUCTION GAUGE
// ==========================================
const Beat6_4_DailyNavSkim: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titlePop = spring({ frame: frame - 4, fps, config: ENTRANCE_SPRING });
  const gaugeGrow = spring({ frame: frame - 20, fps, config: { damping: 25, stiffness: 90, mass: 1 } });

  const exitFade = interpolate(frame, [340, 360], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  return (
    <LeftZone>
      <div style={{ opacity: exitFade, display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <div style={{ opacity: titlePop, transform: `translateY(${interpolate(titlePop, [0, 1], [30, 0])}px)` }}>
          <div style={{ display: 'inline-flex', padding: '12px 30px', borderRadius: '999px', backgroundColor: COLORS.OCHRE_GOLD_BG, border: `2px solid ${COLORS.OCHRE_GOLD}40`, marginBottom: '18px' }}>
            <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.OCHRE_GOLD, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Deduction Mechanism
            </span>
          </div>
          <h2 style={{ fontSize: '125px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, lineHeight: 1.05, letterSpacing: '-0.04em' }}>
            A Micro-Sliver Every Single Day
          </h2>
        </div>

        {/* Visual Progress Bar: 365 Days Daily Skim */}
        <div
          style={{
            backgroundColor: COLORS.BG_ELEVATED,
            borderRadius: '56px',
            padding: '72px 84px',
            border: `3px solid rgba(0,0,0,0.07)`,
            boxShadow: '0 32px 85px rgba(0,0,0,0.06)',
            display: 'flex',
            flexDirection: 'column',
            gap: '36px',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
              Total NAV Fund Pool
            </span>
            <span style={{ fontSize: '48px', fontWeight: 900, color: COLORS.OCHRE_GOLD }}>
              1 / 365th Cut Daily
            </span>
          </div>

          <div style={{ width: '100%', height: '100px', backgroundColor: COLORS.BG_RECESSED, borderRadius: '32px', overflow: 'hidden' }}>
            <div
              style={{
                width: `${interpolate(gaugeGrow, [0, 1], [0, 100])}%`,
                height: '100%',
                backgroundColor: COLORS.OCHRE_GOLD,
                borderRadius: '32px',
              }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ fontSize: '54px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
              • Deducted silently before market open
            </div>
            <div style={{ fontSize: '54px', fontWeight: 800, color: COLORS.PINE_JADE }}>
              • Zero transaction records in brokerage
            </div>
          </div>
        </div>
      </div>
    </LeftZone>
  );
};

// ==========================================
// BEAT 6.5: NET RETURN EQUATION FORMULA
// ==========================================
const Beat6_5_NetReturnFormula: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titlePop = spring({ frame: frame - 4, fps, config: ENTRANCE_SPRING });
  const f1 = spring({ frame: frame - 15, fps, config: POP_SPRING });
  const f2 = spring({ frame: frame - 30, fps, config: POP_SPRING });
  const f3 = spring({ frame: frame - 45, fps, config: POP_SPRING });

  const exitFade = interpolate(frame, [340, 360], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  return (
    <LeftZone>
      <div style={{ opacity: exitFade, display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <div style={{ opacity: titlePop, transform: `translateY(${interpolate(titlePop, [0, 1], [30, 0])}px)` }}>
          <div style={{ display: 'inline-flex', padding: '12px 30px', borderRadius: '999px', backgroundColor: COLORS.PINE_JADE_BG, border: `2px solid ${COLORS.PINE_JADE}40`, marginBottom: '18px' }}>
            <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.PINE_JADE, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Published Performance
            </span>
          </div>
          <h2 style={{ fontSize: '125px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, lineHeight: 1.05, letterSpacing: '-0.04em' }}>
            Returns Are Already Net of Fees
          </h2>
        </div>

        {/* Clean Equation Row (Item - Fee = Net Return) */}
        <div
          style={{
            backgroundColor: COLORS.BG_ELEVATED,
            borderRadius: '56px',
            padding: '72px 84px',
            border: `3px solid rgba(0,0,0,0.07)`,
            boxShadow: '0 32px 85px rgba(0,0,0,0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Gross */}
          <div style={{ opacity: f1, textAlign: 'center' }}>
            <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.INK_MUTED, textTransform: 'uppercase' }}>Index Return</div>
            <div style={{ fontSize: '100px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: '10px 0' }}>Gross</div>
            <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.INK_SECONDARY }}>S&P 500</div>
          </div>

          <Minus size={64} color={COLORS.CRIMSON} strokeWidth={3.5} />

          {/* Fee */}
          <div style={{ opacity: f2, textAlign: 'center' }}>
            <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.CRIMSON, textTransform: 'uppercase' }}>Expense Ratio</div>
            <div style={{ fontSize: '100px', fontWeight: 900, color: COLORS.CRIMSON, margin: '10px 0' }}>0.03%</div>
            <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.CRIMSON }}>Vanguard Fee</div>
          </div>

          <Equal size={64} color={COLORS.PINE_JADE} strokeWidth={3.5} />

          {/* Net */}
          <div style={{ opacity: f3, textAlign: 'center' }}>
            <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.PINE_JADE, textTransform: 'uppercase' }}>What You See</div>
            <div style={{ fontSize: '110px', fontWeight: 900, color: COLORS.PINE_JADE, margin: '10px 0' }}>Net Return</div>
            <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.PINE_JADE }}>True Profit</div>
          </div>
        </div>
      </div>
    </LeftZone>
  );
};

// ==========================================
// MASTER EXPORT
// ==========================================
export const WhatIsAnEtfBlock6: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.BG_BASE }}>
      {/* Beat 6.1: 0 - 360f (6s) */}
      <Sequence from={0} durationInFrames={360}>
        <Beat6_1_Checklist />
      </Sequence>

      {/* Beat 6.2: 360 - 720f (6s) */}
      <Sequence from={360} durationInFrames={360}>
        <Beat6_2_InvoiceContrast />
      </Sequence>

      {/* Beat 6.3: 720 - 1080f (6s) */}
      <Sequence from={720} durationInFrames={360}>
        <Beat6_3_HeroExpenseRatio />
      </Sequence>

      {/* Beat 6.4: 1080 - 1440f (6s) */}
      <Sequence from={1080} durationInFrames={360}>
        <Beat6_4_DailyNavSkim />
      </Sequence>

      {/* Beat 6.5: 1440 - 1800f (6s) */}
      <Sequence from={1440} durationInFrames={360}>
        <Beat6_5_NetReturnFormula />
      </Sequence>
    </AbsoluteFill>
  );
};

export default WhatIsAnEtfBlock6;
