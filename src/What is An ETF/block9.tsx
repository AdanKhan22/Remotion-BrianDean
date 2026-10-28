/**
 * BLOCK 9: WHAT HAPPENS IF VANGUARD GOES BANKRUPT?
 * Canvas: Native 4K UHD (3840 x 2160), 60 FPS
 * Layout: Strict 60/40 Left Zone (Width 2304px, Right empty for talking head)
 *
 * VARIETY OF MOTION GRAPHIC FORMS:
 * - Beat 9.1: Monumental Green "NO" Stamp (Will You Lose Your Money? Answer: NO)
 * - Beat 9.2: Structural Separation Diagram (The Fund Legal Entity vs Vanguard Group)
 * - Beat 9.3: Contracted Service Stencil (Hired Hand Administrator — 0 Ownership Claim)
 * - Beat 9.4: Independent Custodian Vault Graphic (Assets physically held at BNY Mellon / State Street)
 * - Beat 9.5: Dissolution Bifurcation Flow (Path A: New Manager Appointed vs Path B: 100% Cash Payout)
 * - Beat 9.6: Market Drop vs Manager Drop Contrast Matrix (-30% S&P drop vs 0% Counterparty risk)
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

export const BLOCK_9_DURATION = 2160;

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
// BEAT 9.1: MONUMENTAL "NO" STAMP
// ==========================================
const Beat9_1_InsolvencyStamp: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titlePop = spring({ frame: frame - 4, fps, config: ENTRANCE_SPRING });
  const noPop = spring({ frame: frame - 18, fps, config: POP_SPRING });

  const exitFade = interpolate(frame, [340, 360], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  return (
    <LeftZone>
      <div style={{ opacity: exitFade, display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <div style={{ opacity: titlePop, transform: `translateY(${interpolate(titlePop, [0, 1], [30, 0])}px)` }}>
          <div style={{ display: 'inline-flex', padding: '12px 30px', borderRadius: '999px', backgroundColor: COLORS.CRIMSON_BG, border: `2px solid ${COLORS.CRIMSON}40`, marginBottom: '18px' }}>
            <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.CRIMSON, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              The Ultimate Fear
            </span>
          </div>
          <h2 style={{ fontSize: '125px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, lineHeight: 1.05, letterSpacing: '-0.04em' }}>
            If Vanguard Goes Bankrupt Tomorrow?
          </h2>
        </div>

        {/* Big Impact Answer Surface */}
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
            opacity: noPop,
            transform: `scale(${interpolate(noPop, [0, 1], [0.94, 1])})`,
          }}
        >
          <div>
            <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.PINE_JADE, textTransform: 'uppercase' }}>
              Would You Lose Your Money?
            </div>
            <div style={{ fontSize: '220px', fontWeight: 900, color: COLORS.PINE_JADE, lineHeight: 0.95, letterSpacing: '-0.05em', margin: '20px 0' }}>
              NO.
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ fontSize: '50px', color: COLORS.PINE_JADE, fontWeight: 900 }}>•</span>
              <span style={{ fontSize: '50px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
                100% Legally Shielded Capital
              </span>
            </div>
          </div>

          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.OCHRE_GOLD, textTransform: 'uppercase' }}>
              Legal Status
            </div>
            <div style={{ fontSize: '84px', fontWeight: 900, color: COLORS.INK_PRIMARY, marginTop: '12px' }}>
              Protected
            </div>
          </div>
        </div>
      </div>
    </LeftZone>
  );
};

// ==========================================
// BEAT 9.2: SEPARATE ENTITY DIAGRAM
// ==========================================
const Beat9_2_SeparateEntities: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titlePop = spring({ frame: frame - 4, fps, config: ENTRANCE_SPRING });
  const e1 = spring({ frame: frame - 16, fps, config: POP_SPRING });
  const e2 = spring({ frame: frame - 32, fps, config: POP_SPRING });

  const exitFade = interpolate(frame, [340, 360], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  return (
    <LeftZone>
      <div style={{ opacity: exitFade, display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <div style={{ opacity: titlePop, transform: `translateY(${interpolate(titlePop, [0, 1], [30, 0])}px)` }}>
          <div style={{ display: 'inline-flex', padding: '12px 30px', borderRadius: '999px', backgroundColor: COLORS.COBALT_BLUE_BG, border: `2px solid ${COLORS.COBALT_BLUE}40`, marginBottom: '18px' }}>
            <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.COBALT_BLUE, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Corporate Structure
            </span>
          </div>
          <h2 style={{ fontSize: '125px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, lineHeight: 1.05, letterSpacing: '-0.04em' }}>
            Two Independent Legal Entities
          </h2>
        </div>

        {/* Dual Pillar Comparison */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
          <div
            style={{
              backgroundColor: COLORS.BG_ELEVATED,
              borderRadius: '52px',
              padding: '64px 72px',
              border: `3px solid ${COLORS.COBALT_BLUE}`,
              boxShadow: '0 30px 80px rgba(26, 73, 184, 0.10)',
              opacity: e1,
              transform: `scale(${interpolate(e1, [0, 1], [0.94, 1])})`,
            }}
          >
            <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.COBALT_BLUE, textTransform: 'uppercase' }}>
              Entity 1: The Fund
            </div>
            <div style={{ fontSize: '100px', fontWeight: 900, color: COLORS.INK_PRIMARY, lineHeight: 1.05, margin: '16px 0' }}>
              Its Own Company
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ fontSize: '48px', color: COLORS.COBALT_BLUE, fontWeight: 900 }}>•</span>
              <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
                Owned 100% by fund shareholders
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
              opacity: e2,
              transform: `scale(${interpolate(e2, [0, 1], [0.94, 1])})`,
            }}
          >
            <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.INK_MUTED, textTransform: 'uppercase' }}>
              Entity 2: The Sponsor
            </div>
            <div style={{ fontSize: '100px', fontWeight: 900, color: COLORS.INK_PRIMARY, lineHeight: 1.05, margin: '16px 0' }}>
              Vanguard Group
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ fontSize: '48px', color: COLORS.INK_MUTED, fontWeight: 900 }}>•</span>
              <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
                Sponsor owns 0% of portfolio
              </span>
            </div>
          </div>
        </div>
      </div>
    </LeftZone>
  );
};

// ==========================================
// BEAT 9.3: HIRED MANAGER STENCIL
// ==========================================
const Beat9_3_HiredAdministrator: React.FC = () => {
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
              Service Relationship
            </span>
          </div>
          <h2 style={{ fontSize: '125px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, lineHeight: 1.05, letterSpacing: '-0.04em' }}>
            Vanguard is a Contracted Manager
          </h2>
        </div>

        {/* Hero Card */}
        <div
          style={{
            backgroundColor: COLORS.BG_ELEVATED,
            borderRadius: '56px',
            padding: '72px 84px',
            border: `3px solid ${COLORS.OCHRE_GOLD}`,
            boxShadow: '0 32px 85px rgba(158, 111, 24, 0.10)',
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
            opacity: cardPop,
          }}
        >
          <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.OCHRE_GOLD, textTransform: 'uppercase' }}>
            Operational Role
          </div>
          <div style={{ fontSize: '140px', fontWeight: 900, color: COLORS.INK_PRIMARY, lineHeight: 1 }}>
            Hired Help
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <span style={{ fontSize: '54px', color: COLORS.OCHRE_GOLD, fontWeight: 900 }}>•</span>
              <span style={{ fontSize: '52px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
                Contracted to operate & track fund
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <span style={{ fontSize: '54px', color: COLORS.OCHRE_GOLD, fontWeight: 900 }}>•</span>
              <span style={{ fontSize: '52px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
                Zero legal claim on portfolio assets
              </span>
            </div>
          </div>
        </div>
      </div>
    </LeftZone>
  );
};

// ==========================================
// BEAT 9.4: CUSTODIAN BANK VAULT
// ==========================================
const Beat9_4_CustodianVault: React.FC = () => {
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
              Federal Custody Mandate
            </span>
          </div>
          <h2 style={{ fontSize: '125px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, lineHeight: 1.05, letterSpacing: '-0.04em' }}>
            Held at Third-Party Custodian Banks
          </h2>
        </div>

        {/* Vault Banner */}
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
            opacity: cardPop,
          }}
        >
          <div>
            <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.PINE_JADE, textTransform: 'uppercase' }}>
              Physical Location of Shares
            </div>
            <div style={{ fontSize: '140px', fontWeight: 900, color: COLORS.INK_PRIMARY, lineHeight: 1, margin: '20px 0' }}>
              Mega-Bank
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ fontSize: '48px', color: COLORS.PINE_JADE, fontWeight: 900 }}>•</span>
              <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
                State Street • BNY Mellon • JPMorgan
              </span>
            </div>
          </div>

          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.CRIMSON, textTransform: 'uppercase' }}>
              At Vanguard?
            </div>
            <div style={{ fontSize: '84px', fontWeight: 900, color: COLORS.CRIMSON, marginTop: '12px' }}>
              $0 Stored
            </div>
          </div>
        </div>
      </div>
    </LeftZone>
  );
};

// ==========================================
// BEAT 9.5: DISSOLUTION FORK (PATH A / PATH B)
// ==========================================
const Beat9_5_DissolutionFork: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titlePop = spring({ frame: frame - 4, fps, config: ENTRANCE_SPRING });
  const opt1 = spring({ frame: frame - 16, fps, config: POP_SPRING });
  const opt2 = spring({ frame: frame - 32, fps, config: POP_SPRING });

  const exitFade = interpolate(frame, [340, 360], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  return (
    <LeftZone>
      <div style={{ opacity: exitFade, display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <div style={{ opacity: titlePop, transform: `translateY(${interpolate(titlePop, [0, 1], [30, 0])}px)` }}>
          <div style={{ display: 'inline-flex', padding: '12px 30px', borderRadius: '999px', backgroundColor: COLORS.COBALT_BLUE_BG, border: `2px solid ${COLORS.COBALT_BLUE}40`, marginBottom: '18px' }}>
            <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.COBALT_BLUE, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Default Contingency
            </span>
          </div>
          <h2 style={{ fontSize: '125px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, lineHeight: 1.05, letterSpacing: '-0.04em' }}>
            What Actually Happens Next?
          </h2>
        </div>

        {/* Dual Contingency Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
          <div
            style={{
              backgroundColor: COLORS.BG_ELEVATED,
              borderRadius: '52px',
              padding: '64px 72px',
              border: `3px solid ${COLORS.PINE_JADE}`,
              boxShadow: '0 30px 80px rgba(8, 99, 67, 0.10)',
              opacity: opt1,
              transform: `scale(${interpolate(opt1, [0, 1], [0.94, 1])})`,
            }}
          >
            <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.PINE_JADE, textTransform: 'uppercase' }}>
              Outcome A
            </div>
            <div style={{ fontSize: '96px', fontWeight: 900, color: COLORS.INK_PRIMARY, lineHeight: 1.05, margin: '16px 0' }}>
              New Manager
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ fontSize: '48px', color: COLORS.PINE_JADE, fontWeight: 900 }}>•</span>
              <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
                Another firm appointed to run fund
              </span>
            </div>
          </div>

          <div
            style={{
              backgroundColor: COLORS.BG_ELEVATED,
              borderRadius: '52px',
              padding: '64px 72px',
              border: `3px solid ${COLORS.COBALT_BLUE}`,
              boxShadow: '0 30px 80px rgba(26, 73, 184, 0.10)',
              opacity: opt2,
              transform: `scale(${interpolate(opt2, [0, 1], [0.94, 1])})`,
            }}
          >
            <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.COBALT_BLUE, textTransform: 'uppercase' }}>
              Outcome B
            </div>
            <div style={{ fontSize: '96px', fontWeight: 900, color: COLORS.INK_PRIMARY, lineHeight: 1.05, margin: '16px 0' }}>
              100% Cash Paid
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ fontSize: '48px', color: COLORS.COBALT_BLUE, fontWeight: 900 }}>•</span>
              <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
                Full market NAV returned to you
              </span>
            </div>
          </div>
        </div>
      </div>
    </LeftZone>
  );
};

// ==========================================
// BEAT 9.6: MARKET DROP VS COUNTERPARTY MATRIX
// ==========================================
const Beat9_6_RiskMatrix: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titlePop = spring({ frame: frame - 4, fps, config: ENTRANCE_SPRING });
  const r1 = spring({ frame: frame - 16, fps, config: POP_SPRING });
  const r2 = spring({ frame: frame - 32, fps, config: POP_SPRING });

  const exitFade = interpolate(frame, [340, 360], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  return (
    <LeftZone>
      <div style={{ opacity: exitFade, display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <div style={{ opacity: titlePop, transform: `translateY(${interpolate(titlePop, [0, 1], [30, 0])}px)` }}>
          <div style={{ display: 'inline-flex', padding: '12px 30px', borderRadius: '999px', backgroundColor: COLORS.OCHRE_GOLD_BG, border: `2px solid ${COLORS.OCHRE_GOLD}40`, marginBottom: '18px' }}>
            <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.OCHRE_GOLD, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              The Takeaway
            </span>
          </div>
          <h2 style={{ fontSize: '125px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, lineHeight: 1.05, letterSpacing: '-0.04em' }}>
            Risk is What It Owns, Not Who Runs It
          </h2>
        </div>

        {/* Dual Contrast Matrix */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
          <div
            style={{
              backgroundColor: COLORS.BG_ELEVATED,
              borderRadius: '52px',
              padding: '64px 72px',
              border: `3px solid rgba(0,0,0,0.07)`,
              opacity: r1,
              transform: `scale(${interpolate(r1, [0, 1], [0.94, 1])})`,
            }}
          >
            <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.CRIMSON, textTransform: 'uppercase' }}>
              Real Risk: Market Move
            </div>
            <div style={{ fontSize: '130px', fontWeight: 900, color: COLORS.CRIMSON, lineHeight: 1, margin: '16px 0' }}>
              -30%
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ fontSize: '48px', color: COLORS.CRIMSON, fontWeight: 900 }}>•</span>
              <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
                Value moves with underlying stocks
              </span>
            </div>
          </div>

          <div
            style={{
              backgroundColor: COLORS.BG_ELEVATED,
              borderRadius: '52px',
              padding: '64px 72px',
              border: `3px solid ${COLORS.PINE_JADE}`,
              boxShadow: '0 30px 80px rgba(8, 99, 67, 0.12)',
              opacity: r2,
              transform: `scale(${interpolate(r2, [0, 1], [0.94, 1])})`,
            }}
          >
            <div style={{ fontSize: '48px', fontWeight: 800, color: COLORS.PINE_JADE, textTransform: 'uppercase' }}>
              Vanguard Insolvency
            </div>
            <div style={{ fontSize: '130px', fontWeight: 900, color: COLORS.PINE_JADE, lineHeight: 1, margin: '16px 0' }}>
              0% Risk
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ fontSize: '48px', color: COLORS.PINE_JADE, fontWeight: 900 }}>•</span>
              <span style={{ fontSize: '48px', fontWeight: 800, color: COLORS.PINE_JADE }}>
                0% loss from manager bankruptcy
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
export const WhatIsAnEtfBlock9: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.BG_BASE }}>
      {/* Beat 9.1: 0 - 360f (6s) */}
      <Sequence from={0} durationInFrames={360}>
        <Beat9_1_InsolvencyStamp />
      </Sequence>

      {/* Beat 9.2: 360 - 720f (6s) */}
      <Sequence from={360} durationInFrames={360}>
        <Beat9_2_SeparateEntities />
      </Sequence>

      {/* Beat 9.3: 720 - 1080f (6s) */}
      <Sequence from={720} durationInFrames={360}>
        <Beat9_3_HiredAdministrator />
      </Sequence>

      {/* Beat 9.4: 1080 - 1440f (6s) */}
      <Sequence from={1080} durationInFrames={360}>
        <Beat9_4_CustodianVault />
      </Sequence>

      {/* Beat 9.5: 1440 - 1800f (6s) */}
      <Sequence from={1440} durationInFrames={360}>
        <Beat9_5_DissolutionFork />
      </Sequence>

      {/* Beat 9.6: 1800 - 2160f (6s) */}
      <Sequence from={1800} durationInFrames={360}>
        <Beat9_6_RiskMatrix />
      </Sequence>
    </AbsoluteFill>
  );
};

export default WhatIsAnEtfBlock9;
