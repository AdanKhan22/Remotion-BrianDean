/**
 * BLOCK 5: INDIRECT OWNERSHIP — VOTING RIGHTS & DIVIDENDS
 * Canvas: Native 4K UHD (3840 x 2160), 60 FPS
 * Layout: Strict 60/40 Left Zone (Width 2304px, Right empty for talking head)
 *
 * VARIETY OF MOTION GRAPHIC FORMS:
 * - Beat 5.1: 3-Node Horizontal Pipeline Flow (You → VOO Fund → Apple Shares)
 * - Beat 5.2: Giant Split Ballot Box (0 Direct Votes vs Fund Proxy Vote)
 * - Beat 5.3: Tall Duopoly Pillars (Vanguard & BlackRock #1 & #2 dominant shareholders)
 * - Beat 5.4: Waterfall Funnel Flow ($ Cash Dividends flow from Apple/Nvidia into Fund Vault)
 * - Beat 5.5: 4-Quarter Calendar Milestone Stepper (Q1, Q2, Q3, Q4 distribution cadence)
 * - Beat 5.6: Dual Column Intermediated Check Balance (Direct vs Intermediated summary)
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
  User,
  Building2,
  Apple,
  Vote,
  Banknote,
  XCircle,
  Landmark,
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

export const BLOCK_5_DURATION = 2160;

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
// BEAT 5.1: 3-NODE PIPELINE DIAGRAM
// ==========================================
const Beat5_1_Pipeline: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titlePop = spring({ frame: frame - 4, fps, config: ENTRANCE_SPRING });
  const node1 = spring({ frame: frame - 15, fps, config: POP_SPRING });
  const arrow1 = spring({ frame: frame - 30, fps, config: POP_SPRING });
  const node2 = spring({ frame: frame - 45, fps, config: POP_SPRING });
  const arrow2 = spring({ frame: frame - 60, fps, config: POP_SPRING });
  const node3 = spring({ frame: frame - 75, fps, config: POP_SPRING });

  const exitFade = interpolate(frame, [340, 360], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  return (
    <LeftZone>
      <div style={{ opacity: exitFade, display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <div style={{ opacity: titlePop, transform: `translateY(${interpolate(titlePop, [0, 1], [30, 0])}px)` }}>
          <div style={{ display: 'inline-flex', padding: '12px 30px', borderRadius: '999px', backgroundColor: COLORS.COBALT_BLUE_BG, border: `2px solid ${COLORS.COBALT_BLUE}40`, marginBottom: '18px' }}>
            <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.COBALT_BLUE, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Legal Title Flow
            </span>
          </div>
          <h2 style={{ fontSize: '125px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, lineHeight: 1.05, letterSpacing: '-0.04em' }}>
            Who Legally Owns The Stock?
          </h2>
        </div>

        {/* Horizontal Pipeline Visual (Nodes & Arrows) */}
        <div
          style={{
            backgroundColor: COLORS.BG_ELEVATED,
            borderRadius: '56px',
            padding: '72px 84px',
            border: `3px solid rgba(0,0,0,0.07)`,
            boxShadow: '0 32px 85px rgba(0,0,0,0.07)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Node 1: You */}
          <div style={{ opacity: node1, transform: `scale(${interpolate(node1, [0, 1], [0.85, 1])})`, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div
              style={{
                width: '130px',
                height: '130px',
                borderRadius: '50%',
                backgroundColor: COLORS.BG_RECESSED,
                border: `4px solid ${COLORS.INK_MUTED}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '18px',
                boxShadow: '0 12px 30px rgba(0,0,0,0.06)',
              }}
            >
              <User size={68} color={COLORS.INK_PRIMARY} strokeWidth={2.4} />
            </div>
            <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.INK_MUTED, textTransform: 'uppercase', marginBottom: '6px' }}>
              Your Capital
            </div>
            <div style={{ fontSize: '84px', fontWeight: 900, color: COLORS.INK_PRIMARY, lineHeight: 1 }}>
              You
            </div>
            <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.INK_SECONDARY, marginTop: '8px' }}>
              Fund Shareholder
            </div>
          </div>

          {/* Animated Flow Arrow 1 with pulse */}
          <div style={{ opacity: arrow1, transform: `scale(${interpolate(arrow1, [0, 1], [0, 1])})`, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '48px', fontWeight: 900, color: COLORS.OCHRE_GOLD, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Buys Units
            </span>
            <div style={{ transform: `translateX(${Math.sin((frame) / 10) * 8}px)` }}>
              <ArrowRight size={76} color={COLORS.OCHRE_GOLD} strokeWidth={3.5} />
            </div>
          </div>

          {/* Node 2: Fund (The Intermediary) */}
          <div style={{ opacity: node2, transform: `scale(${interpolate(node2, [0, 1], [0.85, 1])})`, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div
              style={{
                width: '150px',
                height: '150px',
                borderRadius: '42px',
                backgroundColor: COLORS.COBALT_BLUE_BG,
                border: `4px solid ${COLORS.COBALT_BLUE}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '18px',
                boxShadow: '0 16px 40px rgba(26, 73, 184, 0.20)',
              }}
            >
              <Building2 size={80} color={COLORS.COBALT_BLUE} strokeWidth={2.4} />
            </div>
            <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.COBALT_BLUE, textTransform: 'uppercase', marginBottom: '6px' }}>
              Legal Title
            </div>
            <div style={{ fontSize: '96px', fontWeight: 900, color: COLORS.COBALT_BLUE, lineHeight: 1 }}>
              VOO
            </div>
            <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.COBALT_BLUE, marginTop: '8px' }}>
              Vanguard Trust
            </div>
          </div>

          {/* Animated Flow Arrow 2 with pulse */}
          <div style={{ opacity: arrow2, transform: `scale(${interpolate(arrow2, [0, 1], [0, 1])})`, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '48px', fontWeight: 900, color: COLORS.PINE_JADE, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Legal Owner
            </span>
            <div style={{ transform: `translateX(${Math.sin((frame) / 10) * 8}px)` }}>
              <ArrowRight size={76} color={COLORS.PINE_JADE} strokeWidth={3.5} />
            </div>
          </div>

          {/* Node 3: Underlying Stock */}
          <div style={{ opacity: node3, transform: `scale(${interpolate(node3, [0, 1], [0.85, 1])})`, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div
              style={{
                width: '130px',
                height: '130px',
                borderRadius: '50%',
                backgroundColor: COLORS.PINE_JADE_BG,
                border: `4px solid ${COLORS.PINE_JADE}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '18px',
                boxShadow: '0 12px 30px rgba(8, 99, 67, 0.15)',
              }}
            >
              <Apple size={68} color={COLORS.PINE_JADE} strokeWidth={2.4} />
            </div>
            <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.PINE_JADE, textTransform: 'uppercase', marginBottom: '6px' }}>
              Underlying
            </div>
            <div style={{ fontSize: '84px', fontWeight: 900, color: COLORS.PINE_JADE, lineHeight: 1 }}>
              Apple
            </div>
            <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.PINE_JADE, marginTop: '8px' }}>
              Corporate Stock
            </div>
          </div>
        </div>
      </div>
    </LeftZone>
  );
};

// ==========================================
// BEAT 5.2: SPLIT BALLOT DISPLAY
// ==========================================
const Beat5_2_SplitBallot: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titlePop = spring({ frame: frame - 4, fps, config: ENTRANCE_SPRING });
  const card1 = spring({ frame: frame - 15, fps, config: POP_SPRING });
  const card2 = spring({ frame: frame - 35, fps, config: POP_SPRING });

  const exitFade = interpolate(frame, [340, 360], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  return (
    <LeftZone>
      <div style={{ opacity: exitFade, display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <div style={{ opacity: titlePop, transform: `translateY(${interpolate(titlePop, [0, 1], [30, 0])}px)` }}>
          <div style={{ display: 'inline-flex', padding: '12px 30px', borderRadius: '999px', backgroundColor: COLORS.CRIMSON_BG, border: `2px solid ${COLORS.CRIMSON}40`, marginBottom: '18px' }}>
            <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.CRIMSON, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Shareholder Governance
            </span>
          </div>
          <h2 style={{ fontSize: '125px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, lineHeight: 1.05, letterSpacing: '-0.04em' }}>
            Who Votes at Shareholder Meetings?
          </h2>
        </div>

        {/* Side-by-side Large Ballot Panels */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
          {/* Left: Investor */}
          <div
            style={{
              backgroundColor: COLORS.BG_ELEVATED,
              borderRadius: '52px',
              padding: '60px 64px',
              border: `3px solid rgba(0,0,0,0.07)`,
              boxShadow: '0 30px 80px rgba(0,0,0,0.06)',
              opacity: card1,
              transform: `translateX(${interpolate(card1, [0, 1], [-30, 0])}px)`,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.CRIMSON, textTransform: 'uppercase' }}>
                  Your Voting Power
                </span>
                <div
                  style={{
                    width: '90px',
                    height: '90px',
                    borderRadius: '50%',
                    backgroundColor: COLORS.CRIMSON_BG,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <XCircle size={54} color={COLORS.CRIMSON} strokeWidth={2.6} />
                </div>
              </div>
              <div style={{ fontSize: '150px', fontWeight: 900, color: COLORS.CRIMSON, lineHeight: 1, margin: '20px 0' }}>
                0 Votes
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ fontSize: '50px', fontWeight: 800, color: COLORS.CRIMSON }}>
                • 0 Shareholder Votes
              </div>
              <div style={{ fontSize: '50px', fontWeight: 800, color: COLORS.INK_SECONDARY }}>
                • No Annual Meeting Access
              </div>
            </div>
          </div>

          {/* Right: The Fund */}
          <div
            style={{
              backgroundColor: COLORS.BG_ELEVATED,
              borderRadius: '52px',
              padding: '60px 64px',
              border: `3px solid ${COLORS.PINE_JADE}`,
              boxShadow: '0 30px 80px rgba(8, 99, 67, 0.12)',
              opacity: card2,
              transform: `translateX(${interpolate(card2, [0, 1], [30, 0])}px)`,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.PINE_JADE, textTransform: 'uppercase' }}>
                  Vanguard's Power
                </span>
                <div
                  style={{
                    width: '90px',
                    height: '90px',
                    borderRadius: '50%',
                    backgroundColor: COLORS.PINE_JADE_BG,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transform: `rotate(${Math.sin(frame / 12) * 8}deg)`,
                  }}
                >
                  <Vote size={54} color={COLORS.PINE_JADE} strokeWidth={2.6} />
                </div>
              </div>
              <div style={{ fontSize: '150px', fontWeight: 900, color: COLORS.PINE_JADE, lineHeight: 1, margin: '20px 0' }}>
                Proxy Vote
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ fontSize: '50px', fontWeight: 800, color: COLORS.PINE_JADE }}>
                • Millions of Votes Cast
              </div>
              <div style={{ fontSize: '50px', fontWeight: 800, color: COLORS.INK_SECONDARY }}>
                • Voted on Your Behalf
              </div>
            </div>
          </div>
        </div>
      </div>
    </LeftZone>
  );
};

// ==========================================
// BEAT 5.3: DUOPOLY PILLARS
// ==========================================
const Beat5_3_Pillars: React.FC = () => {
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
              Corporate Powerhouse
            </span>
          </div>
          <h2 style={{ fontSize: '125px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, lineHeight: 1.05, letterSpacing: '-0.04em' }}>
            The Two Largest Shareholders
          </h2>
        </div>

        {/* Dual Giant Pillars */}
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
            <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.OCHRE_GOLD, textTransform: 'uppercase' }}>
              Top Institutional Holder
            </div>
            <div style={{ fontSize: '110px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: '14px 0', lineHeight: 1 }}>
              Vanguard
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ fontSize: '50px', fontWeight: 800, color: COLORS.OCHRE_GOLD }}>
                • Millions of Retail Clients
              </div>
              <div style={{ fontSize: '50px', fontWeight: 800, color: COLORS.INK_SECONDARY }}>
                • Holds 7-9% of Apple & Microsoft
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundColor: COLORS.BG_ELEVATED,
              borderRadius: '52px',
              padding: '64px 72px',
              border: `3px solid rgba(0,0,0,0.07)`,
              boxShadow: '0 30px 80px rgba(0,0,0,0.06)',
              opacity: p2,
              transform: `scale(${interpolate(p2, [0, 1], [0.94, 1])})`,
            }}
          >
            <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.COBALT_BLUE, textTransform: 'uppercase' }}>
              Top Institutional Holder
            </div>
            <div style={{ fontSize: '110px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: '14px 0', lineHeight: 1 }}>
              BlackRock
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ fontSize: '50px', fontWeight: 800, color: COLORS.COBALT_BLUE }}>
                • Trillion-Dollar Asset Base
              </div>
              <div style={{ fontSize: '50px', fontWeight: 800, color: COLORS.INK_SECONDARY }}>
                • Dominant Proxy Voting Power
              </div>
            </div>
          </div>
        </div>
      </div>
    </LeftZone>
  );
};

// ==========================================
// BEAT 5.4: DIVIDEND WATERFALL FLOW
// ==========================================
const Beat5_4_DividendWaterfall: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titlePop = spring({ frame: frame - 4, fps, config: ENTRANCE_SPRING });
  const cashIn = spring({ frame: frame - 18, fps, config: POP_SPRING });
  const fundVault = spring({ frame: frame - 38, fps, config: POP_SPRING });

  const exitFade = interpolate(frame, [340, 360], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  return (
    <LeftZone>
      <div style={{ opacity: exitFade, display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <div style={{ opacity: titlePop, transform: `translateY(${interpolate(titlePop, [0, 1], [30, 0])}px)` }}>
          <div style={{ display: 'inline-flex', padding: '12px 30px', borderRadius: '999px', backgroundColor: COLORS.PINE_JADE_BG, border: `2px solid ${COLORS.PINE_JADE}40`, marginBottom: '18px' }}>
            <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.PINE_JADE, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Cash Flow Funnel
            </span>
          </div>
          <h2 style={{ fontSize: '125px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, lineHeight: 1.05, letterSpacing: '-0.04em' }}>
            Where Do Dividends Go First?
          </h2>
        </div>

        {/* Waterfall Flow Card */}
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
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', opacity: cashIn }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
              <div
                style={{
                  width: '110px',
                  height: '110px',
                  borderRadius: '30px',
                  backgroundColor: COLORS.PINE_JADE_BG,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transform: `translateY(${Math.sin(frame / 8) * 6}px)`,
                }}
              >
                <Banknote size={64} color={COLORS.PINE_JADE} strokeWidth={2.4} />
              </div>
              <div>
                <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.INK_MUTED, textTransform: 'uppercase' }}>
                  Underlying Holdings
                </div>
                <div style={{ fontSize: '80px', fontWeight: 900, color: COLORS.INK_PRIMARY, marginTop: '4px' }}>
                  NVIDIA Pays Cash
                </div>
              </div>
            </div>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '16px',
                padding: '16px 32px',
                borderRadius: '999px',
                backgroundColor: COLORS.CRIMSON_BG,
                border: `3px solid ${COLORS.CRIMSON}`,
              }}
            >
              <XCircle size={44} color={COLORS.CRIMSON} strokeWidth={2.6} />
              <span style={{ fontSize: '48px', fontWeight: 900, color: COLORS.CRIMSON }}>
                No Check Sent To You
              </span>
            </div>
          </div>

          {/* Falling Cash Animation Stream */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', margin: '-10px 0' }}>
            {[0, 1, 2].map((i) => {
              const dropOffset = ((frame * 3 + i * 25) % 80);
              return (
                <div
                  key={i}
                  style={{
                    transform: `translateY(${dropOffset}px)`,
                    opacity: interpolate(dropOffset, [0, 40, 80], [0, 1, 0]),
                  }}
                >
                  <Banknote size={42} color={COLORS.PINE_JADE} strokeWidth={2.2} />
                </div>
              );
            })}
          </div>

          <div style={{ borderTop: `3px solid ${COLORS.BG_RECESSED}`, paddingTop: '32px', opacity: fundVault, display: 'flex', alignItems: 'center', gap: '36px' }}>
            <div
              style={{
                width: '140px',
                height: '140px',
                borderRadius: '40px',
                backgroundColor: COLORS.COBALT_BLUE_BG,
                border: `4px solid ${COLORS.COBALT_BLUE}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Landmark size={76} color={COLORS.COBALT_BLUE} strokeWidth={2.4} />
            </div>

            <div>
              <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.PINE_JADE, textTransform: 'uppercase' }}>
                Direct Destination
              </div>
              <div style={{ fontSize: '100px', fontWeight: 900, color: COLORS.PINE_JADE, margin: '6px 0', lineHeight: 1 }}>
                Deposited in Fund Vault
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <span style={{ fontSize: '50px', color: COLORS.PINE_JADE, fontWeight: 900 }}>•</span>
                  <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
                    Cash accumulates directly inside fund NAV
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <span style={{ fontSize: '50px', color: COLORS.PINE_JADE, fontWeight: 900 }}>•</span>
                  <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
                    Distributed to shareholders quarterly
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LeftZone>
  );
};

// ==========================================
// BEAT 5.5: 4-QUARTER CALENDAR STEPPER
// ==========================================
const Beat5_5_QuarterCalendar: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titlePop = spring({ frame: frame - 4, fps, config: ENTRANCE_SPRING });
  const q1 = spring({ frame: frame - 15, fps, config: POP_SPRING });
  const q2 = spring({ frame: frame - 28, fps, config: POP_SPRING });
  const q3 = spring({ frame: frame - 41, fps, config: POP_SPRING });
  const q4 = spring({ frame: frame - 54, fps, config: POP_SPRING });

  const exitFade = interpolate(frame, [340, 360], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const quarters = [
    { label: 'Q1', month: 'March', amount: '$1.87', springVal: q1 },
    { label: 'Q2', month: 'June', amount: '$1.96', springVal: q2 },
    { label: 'Q3', month: 'September', amount: '$1.82', springVal: q3 },
    { label: 'Q4', month: 'December', amount: '$1.77', springVal: q4 },
  ];

  return (
    <LeftZone>
      <div style={{ opacity: exitFade, display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <div style={{ opacity: titlePop, transform: `translateY(${interpolate(titlePop, [0, 1], [30, 0])}px)` }}>
          <div style={{ display: 'inline-flex', padding: '12px 30px', borderRadius: '999px', backgroundColor: COLORS.OCHRE_GOLD_BG, border: `2px solid ${COLORS.OCHRE_GOLD}40`, marginBottom: '18px' }}>
            <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.OCHRE_GOLD, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Payout Cadence
            </span>
          </div>
          <h2 style={{ fontSize: '125px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, lineHeight: 1.05, letterSpacing: '-0.04em' }}>
            Paid Out 4 Times Per Year
          </h2>
        </div>

        {/* 4 Quarter Step Blocks */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '28px' }}>
          {quarters.map((q, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: COLORS.BG_ELEVATED,
                borderRadius: '44px',
                padding: '48px 36px',
                border: `3px solid rgba(0,0,0,0.07)`,
                boxShadow: '0 24px 60px rgba(0,0,0,0.05)',
                textAlign: 'center',
                opacity: q.springVal,
                transform: `translateY(${interpolate(q.springVal, [0, 1], [30, 0])}px)`,
              }}
            >
              <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.OCHRE_GOLD }}>
                {q.label}
              </div>
              <div style={{ fontSize: '96px', fontWeight: 900, color: COLORS.PINE_JADE, margin: '14px 0', lineHeight: 1, letterSpacing: '-0.03em' }}>
                {q.amount}
              </div>
              <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.INK_MUTED }}>
                {q.month}
              </div>
            </div>
          ))}
        </div>
      </div>
    </LeftZone>
  );
};

// ==========================================
// BEAT 5.6: INTERMEDIATED BALANCE SUMMARY
// ==========================================
const Beat5_6_Summary: React.FC = () => {
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
              The Golden Principle
            </span>
          </div>
          <h2 style={{ fontSize: '125px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, lineHeight: 1.05, letterSpacing: '-0.04em' }}>
            Everything Runs Through the Fund
          </h2>
        </div>

        {/* Hero Impact Card */}
        <div
          style={{
            backgroundColor: COLORS.BG_ELEVATED,
            borderRadius: '56px',
            padding: '72px 84px',
            border: `3px solid rgba(0,0,0,0.07)`,
            boxShadow: '0 32px 85px rgba(0,0,0,0.07)',
            display: 'flex',
            flexDirection: 'column',
            gap: '36px',
            opacity: cardPop,
            transform: `scale(${interpolate(cardPop, [0, 1], [0.94, 1])})`,
          }}
        >
          <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.INK_MUTED, textTransform: 'uppercase' }}>
            Investor Relationship
          </div>
          <div style={{ fontSize: '140px', fontWeight: 900, color: COLORS.PINE_JADE, lineHeight: 1, letterSpacing: '-0.04em' }}>
            Intermediated
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <span style={{ fontSize: '54px', color: COLORS.PINE_JADE, fontWeight: 900 }}>•</span>
              <span style={{ fontSize: '52px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
                Fund acts as legal proxy for all decisions
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <span style={{ fontSize: '54px', color: COLORS.PINE_JADE, fontWeight: 900 }}>•</span>
              <span style={{ fontSize: '52px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
                Collects dividends & executes all votes
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <span style={{ fontSize: '54px', color: COLORS.PINE_JADE, fontWeight: 900 }}>•</span>
              <span style={{ fontSize: '52px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
                Zero individual admin burden on you
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
export const WhatIsAnEtfBlock5: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.BG_BASE }}>
      {/* Beat 5.1: 0 - 360f (6s) */}
      <Sequence from={0} durationInFrames={360}>
        <Beat5_1_Pipeline />
      </Sequence>

      {/* Beat 5.2: 360 - 720f (6s) */}
      <Sequence from={360} durationInFrames={360}>
        <Beat5_2_SplitBallot />
      </Sequence>

      {/* Beat 5.3: 720 - 1080f (6s) */}
      <Sequence from={720} durationInFrames={360}>
        <Beat5_3_Pillars />
      </Sequence>

      {/* Beat 5.4: 1080 - 1440f (6s) */}
      <Sequence from={1080} durationInFrames={360}>
        <Beat5_4_DividendWaterfall />
      </Sequence>

      {/* Beat 5.5: 1440 - 1800f (6s) */}
      <Sequence from={1440} durationInFrames={360}>
        <Beat5_5_QuarterCalendar />
      </Sequence>

      {/* Beat 5.6: 1800 - 2160f (6s) */}
      <Sequence from={1800} durationInFrames={360}>
        <Beat5_6_Summary />
      </Sequence>
    </AbsoluteFill>
  );
};

export default WhatIsAnEtfBlock5;
