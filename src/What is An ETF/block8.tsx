/**
 * BLOCK 8: TAX EFFICIENCY — IN-KIND CREATION/REDEMPTION VS MUTUAL FUNDS
 * Canvas: Native 4K UHD (3840 x 2160), 60 FPS
 * Layout: Strict 60/40 Left Zone (Width 2304px, Right empty for talking head)
 *
 * VARIETY OF MOTION GRAPHIC FORMS:
 * - Beat 8.1: Master Structural Advantage Badge + Contrast Headline
 * - Beat 8.2: Mutual Fund Forced Sell Mechanism (Redemptions → Forced Cash Sale → Capital Gain)
 * - Beat 8.3: IRS Tax Bill Envelope Stamp (Paid Taxes Even Though 0 Shares Sold)
 * - Beat 8.4: Direct Stock Handout Flow (Shares Swapped In-Kind to Institutional Desks)
 * - Beat 8.5: Like-Asset Shield Formula (Like-Asset Exchange = $0 Taxable Event)
 * - Beat 8.6: 10-Year $0.00 Capital Gains Track Record Banner
 * - Beat 8.7: Taxable vs Retirement Account Split Matrix (Brokerage vs IRA/401k)
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
  ArrowRight,
  UserMinus,
  TrendingDown,
  Receipt,
  Repeat,
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

export const BLOCK_8_DURATION = 2460;

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
// BEAT 8.1: TAX EFFICIENCY INTRO
// ==========================================
const Beat8_1_Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titlePop = spring({ frame: frame - 4, fps, config: ENTRANCE_SPRING });
  const cardPop = spring({ frame: frame - 18, fps, config: POP_SPRING });

  const exitFade = interpolate(frame, [340, 360], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  return (
    <LeftZone>
      <div style={{ opacity: exitFade, display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <div style={{ opacity: titlePop, transform: `translateY(${interpolate(titlePop, [0, 1], [30, 0])}px)` }}>
          <div style={{ display: 'inline-flex', padding: '12px 30px', borderRadius: '999px', backgroundColor: COLORS.PINE_JADE_BG, border: `2px solid ${COLORS.PINE_JADE}40`, marginBottom: '18px' }}>
            <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.PINE_JADE, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Tax Architecture
            </span>
          </div>
          <h2 style={{ fontSize: '125px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, lineHeight: 1.05, letterSpacing: '-0.04em' }}>
            ETFs vs. Traditional Mutual Funds
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
            flexDirection: 'column',
            gap: '32px',
            opacity: cardPop,
            transform: `scale(${interpolate(cardPop, [0, 1], [0.94, 1])})`,
          }}
        >
          <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.PINE_JADE, textTransform: 'uppercase' }}>
            The Core Superpower
          </div>
          <div style={{ fontSize: '150px', fontWeight: 900, color: COLORS.PINE_JADE, lineHeight: 0.95, letterSpacing: '-0.04em' }}>
            Tax Shield
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ fontSize: '50px', color: COLORS.PINE_JADE, fontWeight: 900 }}>•</span>
            <span style={{ fontSize: '52px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
              Bypasses Surprise Mutual Fund Tax Bills
            </span>
          </div>
        </div>
      </div>
    </LeftZone>
  );
};

// ==========================================
// BEAT 8.2: MUTUAL FUND FORCED GAIN FLOW
// ==========================================
const Beat8_2_MutualFundForcedSell: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titlePop = spring({ frame: frame - 4, fps, config: ENTRANCE_SPRING });
  const s1 = spring({ frame: frame - 15, fps, config: POP_SPRING });
  const s2 = spring({ frame: frame - 30, fps, config: POP_SPRING });
  const s3 = spring({ frame: frame - 45, fps, config: POP_SPRING });

  const exitFade = interpolate(frame, [340, 360], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  return (
    <LeftZone>
      <div style={{ opacity: exitFade, display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <div style={{ opacity: titlePop, transform: `translateY(${interpolate(titlePop, [0, 1], [30, 0])}px)` }}>
          <div style={{ display: 'inline-flex', padding: '12px 30px', borderRadius: '999px', backgroundColor: COLORS.CRIMSON_BG, border: `2px solid ${COLORS.CRIMSON}40`, marginBottom: '18px' }}>
            <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.CRIMSON, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              The Mutual Fund Trap
            </span>
          </div>
          <h2 style={{ fontSize: '125px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, lineHeight: 1.05, letterSpacing: '-0.04em' }}>
            Forced Cash Stock Sales
          </h2>
        </div>

        {/* 3 Step Domino Sequence */}
        <div
          style={{
            backgroundColor: COLORS.BG_ELEVATED,
            borderRadius: '56px',
            padding: '64px 72px',
            border: `3px solid rgba(0,0,0,0.07)`,
            boxShadow: '0 32px 85px rgba(0,0,0,0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Step 1 */}
          <div style={{ opacity: s1, transform: `scale(${interpolate(s1, [0, 1], [0.85, 1])})`, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '34px',
                backgroundColor: COLORS.BG_RECESSED,
                border: `3px solid ${COLORS.INK_MUTED}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px',
              }}
            >
              <UserMinus size={64} color={COLORS.INK_PRIMARY} strokeWidth={2.4} />
            </div>
            <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.INK_MUTED, textTransform: 'uppercase' }}>Step 1</div>
            <div style={{ fontSize: '74px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: '6px 0' }}>Investors Sell</div>
            <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.INK_SECONDARY }}>Demand Cash Out</div>
          </div>

          <div style={{ transform: `translateX(${Math.sin(frame / 10) * 8}px)` }}>
            <ArrowRight size={64} color={COLORS.CRIMSON} strokeWidth={3.5} />
          </div>

          {/* Step 2 */}
          <div style={{ opacity: s2, transform: `scale(${interpolate(s2, [0, 1], [0.85, 1])})`, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '34px',
                backgroundColor: COLORS.CRIMSON_BG,
                border: `3px solid ${COLORS.CRIMSON}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px',
                transform: `rotate(${Math.sin(frame / 8) * 6}deg)`,
              }}
            >
              <TrendingDown size={64} color={COLORS.CRIMSON} strokeWidth={2.4} />
            </div>
            <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.CRIMSON, textTransform: 'uppercase' }}>Step 2</div>
            <div style={{ fontSize: '74px', fontWeight: 900, color: COLORS.CRIMSON, margin: '6px 0' }}>Fund Sells Stock</div>
            <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.CRIMSON }}>Must Raise Cash</div>
          </div>

          <div style={{ transform: `translateX(${Math.sin(frame / 10) * 8}px)` }}>
            <ArrowRight size={64} color={COLORS.CRIMSON} strokeWidth={3.5} />
          </div>

          {/* Step 3 */}
          <div style={{ opacity: s3, transform: `scale(${interpolate(s3, [0, 1], [0.85, 1])})`, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '34px',
                backgroundColor: COLORS.CRIMSON_BG,
                border: `3px solid ${COLORS.CRIMSON}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px',
                boxShadow: '0 12px 30px rgba(161, 59, 36, 0.20)',
              }}
            >
              <Receipt size={64} color={COLORS.CRIMSON} strokeWidth={2.4} />
            </div>
            <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.CRIMSON, textTransform: 'uppercase' }}>Step 3</div>
            <div style={{ fontSize: '74px', fontWeight: 900, color: COLORS.CRIMSON, margin: '6px 0' }}>Taxable Gain</div>
            <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.CRIMSON }}>Passed to All Holders</div>
          </div>
        </div>
      </div>
    </LeftZone>
  );
};

// ==========================================
// BEAT 8.3: SURPRISE TAX BILL ENVELOPE
// ==========================================
const Beat8_3_SurpriseTaxStamp: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titlePop = spring({ frame: frame - 4, fps, config: ENTRANCE_SPRING });
  const stampPop = spring({ frame: frame - 18, fps, config: POP_SPRING });

  const exitFade = interpolate(frame, [340, 360], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  return (
    <LeftZone>
      <div style={{ opacity: exitFade, display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <div style={{ opacity: titlePop, transform: `translateY(${interpolate(titlePop, [0, 1], [30, 0])}px)` }}>
          <div style={{ display: 'inline-flex', padding: '12px 30px', borderRadius: '999px', backgroundColor: COLORS.CRIMSON_BG, border: `2px solid ${COLORS.CRIMSON}40`, marginBottom: '18px' }}>
            <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.CRIMSON, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              The Passive Penalty
            </span>
          </div>
          <h2 style={{ fontSize: '125px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, lineHeight: 1.05, letterSpacing: '-0.04em' }}>
            You Sold Zero Shares...
          </h2>
        </div>

        {/* Surprise Tax Stamp Card */}
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
            opacity: stampPop,
            transform: `scale(${interpolate(stampPop, [0, 1], [0.94, 1])})`,
          }}
        >
          <div>
            <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.CRIMSON, textTransform: 'uppercase' }}>
              Your Annual Trade Log
            </div>
            <div style={{ fontSize: '180px', fontWeight: 900, color: COLORS.INK_PRIMARY, lineHeight: 0.95, margin: '20px 0' }}>
              0 Trades
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ fontSize: '50px', color: COLORS.CRIMSON, fontWeight: 900 }}>•</span>
              <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
                Held passively with 0 sales
              </span>
            </div>
          </div>

          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.CRIMSON, textTransform: 'uppercase' }}>
              Mutual Fund Result
            </div>
            <div style={{ fontSize: '96px', fontWeight: 900, color: COLORS.CRIMSON, marginTop: '14px' }}>
              Tax Bill Sent
            </div>
          </div>
        </div>
      </div>
    </LeftZone>
  );
};

// ==========================================
// BEAT 8.4: IN-KIND STOCK HANDOUT FLOW
// ==========================================
const Beat8_4_InKindStockSwap: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titlePop = spring({ frame: frame - 4, fps, config: ENTRANCE_SPRING });
  const cardPop = spring({ frame: frame - 18, fps, config: POP_SPRING });

  const exitFade = interpolate(frame, [340, 360], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  return (
    <LeftZone>
      <div style={{ opacity: exitFade, display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <div style={{ opacity: titlePop, transform: `translateY(${interpolate(titlePop, [0, 1], [30, 0])}px)` }}>
          <div style={{ display: 'inline-flex', padding: '12px 30px', borderRadius: '999px', backgroundColor: COLORS.PINE_JADE_BG, border: `2px solid ${COLORS.PINE_JADE}40`, marginBottom: '18px' }}>
            <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.PINE_JADE, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              The ETF Breakthrough
            </span>
          </div>
          <h2 style={{ fontSize: '125px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, lineHeight: 1.05, letterSpacing: '-0.04em' }}>
            In-Kind Stock Basket Transfers
          </h2>
        </div>

        {/* Mechanism Flow Card */}
        <div
          style={{
            backgroundColor: COLORS.BG_ELEVATED,
            borderRadius: '56px',
            padding: '64px 76px',
            border: `3px solid ${COLORS.PINE_JADE}`,
            boxShadow: '0 32px 85px rgba(8, 99, 67, 0.10)',
            display: 'flex',
            flexDirection: 'column',
            gap: '36px',
            opacity: cardPop,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
              <div
                style={{
                  width: '110px',
                  height: '110px',
                  borderRadius: '32px',
                  backgroundColor: COLORS.PINE_JADE_BG,
                  border: `3px solid ${COLORS.PINE_JADE}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transform: `rotate(${frame * 1.5}deg)`,
                }}
              >
                <Repeat size={60} color={COLORS.PINE_JADE} strokeWidth={2.4} />
              </div>
              <div>
                <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.PINE_JADE, textTransform: 'uppercase' }}>
                  Institutional Swap
                </span>
                <div style={{ fontSize: '72px', fontWeight: 900, color: COLORS.INK_PRIMARY, lineHeight: 1 }}>
                  Physical Shares Handed Out
                </div>
              </div>
            </div>

            <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.CRIMSON, textDecoration: 'line-through' }}>
              Sell Stocks for Cash
            </span>
          </div>

          <div style={{ borderTop: `3px solid ${COLORS.BG_RECESSED}`, paddingTop: '28px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <span style={{ fontSize: '50px', color: COLORS.PINE_JADE, fontWeight: 900 }}>•</span>
              <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
                Desks swap physical shares directly
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <span style={{ fontSize: '50px', color: COLORS.PINE_JADE, fontWeight: 900 }}>•</span>
              <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
                Zero internal taxable cash sales
              </span>
            </div>
          </div>
        </div>
      </div>
    </LeftZone>
  );
};

// ==========================================
// BEAT 8.5: LIKE-ASSET SHIELD FORMULA
// ==========================================
const Beat8_5_LikeAssetFormula: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titlePop = spring({ frame: frame - 4, fps, config: ENTRANCE_SPRING });
  const fPop = spring({ frame: frame - 18, fps, config: POP_SPRING });

  const exitFade = interpolate(frame, [340, 360], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  return (
    <LeftZone>
      <div style={{ opacity: exitFade, display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <div style={{ opacity: titlePop, transform: `translateY(${interpolate(titlePop, [0, 1], [30, 0])}px)` }}>
          <div style={{ display: 'inline-flex', padding: '12px 30px', borderRadius: '999px', backgroundColor: COLORS.COBALT_BLUE_BG, border: `2px solid ${COLORS.COBALT_BLUE}40`, marginBottom: '18px' }}>
            <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.COBALT_BLUE, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Tax Code Architecture
            </span>
          </div>
          <h2 style={{ fontSize: '125px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, lineHeight: 1.05, letterSpacing: '-0.04em' }}>
            Like-Asset Exchange Exemption
          </h2>
        </div>

        {/* Formula Banner */}
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
            opacity: fPop,
          }}
        >
          <div>
            <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.COBALT_BLUE, textTransform: 'uppercase' }}>
              IRS Rule
            </div>
            <div style={{ fontSize: '100px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: '14px 0' }}>
              Like-Asset Swap
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ fontSize: '48px', color: COLORS.COBALT_BLUE, fontWeight: 900 }}>•</span>
              <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
                Gains exported without taxable event
              </span>
            </div>
          </div>

          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.PINE_JADE, textTransform: 'uppercase' }}>
              Taxable Event
            </div>
            <div style={{ fontSize: '130px', fontWeight: 900, color: COLORS.PINE_JADE, margin: '14px 0' }}>
              $0.00
            </div>
          </div>
        </div>
      </div>
    </LeftZone>
  );
};

// ==========================================
// BEAT 8.6: 10-YEAR $0 CAPITAL GAINS RECORD
// ==========================================
const Beat8_6_TenYearTrackRecord: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titlePop = spring({ frame: frame - 4, fps, config: ENTRANCE_SPRING });
  const statPop = spring({ frame: frame - 18, fps, config: POP_SPRING });

  const exitFade = interpolate(frame, [280, 300], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  return (
    <LeftZone>
      <div style={{ opacity: exitFade, display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <div style={{ opacity: titlePop, transform: `translateY(${interpolate(titlePop, [0, 1], [30, 0])}px)` }}>
          <div style={{ display: 'inline-flex', padding: '12px 30px', borderRadius: '999px', backgroundColor: COLORS.PINE_JADE_BG, border: `2px solid ${COLORS.PINE_JADE}40`, marginBottom: '18px' }}>
            <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.PINE_JADE, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Historical Performance
            </span>
          </div>
          <h2 style={{ fontSize: '125px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, lineHeight: 1.05, letterSpacing: '-0.04em' }}>
            Years Without Capital Gains
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
              Broad Index ETF Payouts
            </div>
            <div style={{ fontSize: '210px', fontWeight: 900, color: COLORS.PINE_JADE, lineHeight: 0.95, margin: '20px 0' }}>
              $0.00
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ fontSize: '50px', color: COLORS.PINE_JADE, fontWeight: 900 }}>•</span>
              <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
                0 Capital Gains distributions for 10+ yrs
              </span>
            </div>
          </div>

          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.PINE_JADE, textTransform: 'uppercase' }}>
              Mutual Funds
            </div>
            <div style={{ fontSize: '84px', fontWeight: 900, color: COLORS.CRIMSON, marginTop: '12px' }}>
              Cannot Match
            </div>
          </div>
        </div>
      </div>
    </LeftZone>
  );
};

// ==========================================
// BEAT 8.7: BROKERAGE VS RETIREMENT MATRIX
// ==========================================
const Beat8_7_AccountSplit: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titlePop = spring({ frame: frame - 4, fps, config: ENTRANCE_SPRING });
  const a1 = spring({ frame: frame - 16, fps, config: POP_SPRING });
  const a2 = spring({ frame: frame - 32, fps, config: POP_SPRING });

  const exitFade = interpolate(frame, [340, 360], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  return (
    <LeftZone>
      <div style={{ opacity: exitFade, display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <div style={{ opacity: titlePop, transform: `translateY(${interpolate(titlePop, [0, 1], [30, 0])}px)` }}>
          <div style={{ display: 'inline-flex', padding: '12px 30px', borderRadius: '999px', backgroundColor: COLORS.OCHRE_GOLD_BG, border: `2px solid ${COLORS.OCHRE_GOLD}40`, marginBottom: '18px' }}>
            <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.OCHRE_GOLD, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Account Context
            </span>
          </div>
          <h2 style={{ fontSize: '125px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, lineHeight: 1.05, letterSpacing: '-0.04em' }}>
            Where This Actually Matters
          </h2>
        </div>

        {/* Dual Account Panels */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
          <div
            style={{
              backgroundColor: COLORS.BG_ELEVATED,
              borderRadius: '52px',
              padding: '64px 72px',
              border: `3px solid ${COLORS.PINE_JADE}`,
              boxShadow: '0 30px 80px rgba(8, 99, 67, 0.10)',
              opacity: a1,
              transform: `scale(${interpolate(a1, [0, 1], [0.94, 1])})`,
            }}
          >
            <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.PINE_JADE, textTransform: 'uppercase' }}>
              Taxable Brokerage
            </div>
            <div style={{ fontSize: '110px', fontWeight: 900, color: COLORS.PINE_JADE, lineHeight: 1, margin: '16px 0' }}>
              Crucial
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ fontSize: '48px', color: COLORS.PINE_JADE, fontWeight: 900 }}>•</span>
              <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
                Protects from annual surprise taxes
              </span>
            </div>
          </div>

          <div
            style={{
              backgroundColor: COLORS.BG_ELEVATED,
              borderRadius: '52px',
              padding: '64px 72px',
              border: `3px solid rgba(0,0,0,0.07)`,
              boxShadow: '0 30px 80px rgba(0,0,0,0.06)',
              opacity: a2,
              transform: `scale(${interpolate(a2, [0, 1], [0.94, 1])})`,
            }}
          >
            <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.INK_MUTED, textTransform: 'uppercase' }}>
              IRA & 401(k)
            </div>
            <div style={{ fontSize: '110px', fontWeight: 900, color: COLORS.INK_MUTED, lineHeight: 1, margin: '16px 0' }}>
              Sheltered
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ fontSize: '48px', color: COLORS.INK_MUTED, fontWeight: 900 }}>•</span>
              <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
                Already protected by retirement wrapper
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
export const WhatIsAnEtfBlock8: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.BG_BASE }}>
      {/* Beat 8.1: 0 - 360f (6s) */}
      <Sequence from={0} durationInFrames={360}>
        <Beat8_1_Intro />
      </Sequence>

      {/* Beat 8.2: 360 - 720f (6s) */}
      <Sequence from={360} durationInFrames={360}>
        <Beat8_2_MutualFundForcedSell />
      </Sequence>

      {/* Beat 8.3: 720 - 1080f (6s) */}
      <Sequence from={720} durationInFrames={360}>
        <Beat8_3_SurpriseTaxStamp />
      </Sequence>

      {/* Beat 8.4: 1080 - 1440f (6s) */}
      <Sequence from={1080} durationInFrames={360}>
        <Beat8_4_InKindStockSwap />
      </Sequence>

      {/* Beat 8.5: 1440 - 1800f (6s) */}
      <Sequence from={1440} durationInFrames={360}>
        <Beat8_5_LikeAssetFormula />
      </Sequence>

      {/* Beat 8.6: 1800 - 2100f (5s) */}
      <Sequence from={1800} durationInFrames={300}>
        <Beat8_6_TenYearTrackRecord />
      </Sequence>

      {/* Beat 8.7: 2100 - 2460f (6s) */}
      <Sequence from={2100} durationInFrames={360}>
        <Beat8_7_AccountSplit />
      </Sequence>
    </AbsoluteFill>
  );
};

export default WhatIsAnEtfBlock8;
