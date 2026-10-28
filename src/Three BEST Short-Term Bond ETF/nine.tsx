/**
 * REASONING STEP (v3 + Matrix Data Visualization & Mobile Scaling)
 * 1. Data Visualization Challenge: Comparing 3 ETFs across 2 holding periods and 2 state tax scenarios creates a 12-point data matrix. 
 * 2. Visual Mechanism: 
 *    - Built two dynamic animated horizontal bar chart dashboards (Beat 1: Short-Term, Beat 2: Long-Term).
 *    - Each dashboard features a "State Tax Toggle" (Phase 1 -> Phase 2) that actively updates the BOXX yield bar and color live on screen, demonstrating exactly how state taxes and capital gains impact the bottom line.
 * 3. Color Payload Enforcement:
 *    - USFR gets ACCENT_HERO (Gold) in the short-term scenario (highest yield).
 *    - BOXX gets ACCENT_NEGATIVE (Brick) in short-term high-tax (double taxed).
 *    - BOXX explodes into ACCENT_HERO (Gold) in the long-term zero-tax scenario (The ultimate winner at $3,069).
 *    - SGOV remains ACCENT_NEUTRAL (Slate) as the reliable baseline comparison.
 * 4. Typography & Layout: Strict adherence to massive 4K fonts (52px minimum, 96px values) and vertical spacing.
 */

import React from 'react';
import {
  AbsoluteFill,
  Sequence,
  spring,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  interpolateColors,
} from 'remotion';
import {
  Calculator,
  MapPin,
  TrendingUp,
  CalendarCheck,
  ShieldAlert,
  ShieldCheck,
  Zap
} from 'lucide-react';

// --- STRICT V3 COLOR SYSTEM ---
const COLORS = {
  // Layered Beige Base
  BG_BASE: '#F3EEE4',
  BG_ELEVATED: '#FAF6EC',
  BG_RECESSED: '#EAE3D3',
  
  // Inks
  INK_PRIMARY: '#1E1B16',
  INK_SECONDARY: '#5C564A',
  INK_TERTIARY: '#8C8474',
  
  // Fixed-Role Accents
  ACCENT_HERO: '#B8862E',     // Muted gold (The win, highest yield)
  ACCENT_NEGATIVE: '#B5533C', // Muted brick (Tax hits, worst yield)
  ACCENT_DETAIL: '#3C6E71',   // Muted teal (Parity, mechanics)
  ACCENT_NEUTRAL: '#8C8474',  // Slate grey (Baseline comparison)
};

const FONTS = {
  main: '"Inter", "DM Sans", sans-serif',
};

// V3 standard physics
const SPRING_CONFIG = { damping: 200, stiffness: 120, mass: 0.8 };

// --- 60/40 LAYOUT WRAPPER (4K SCALE) ---
const EditorialLeftZone: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '2304px', // 60% of 3840px
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: '140px',
        paddingRight: '140px',
        boxSizing: 'border-box',
        borderRight: `3px solid ${COLORS.BG_RECESSED}`,
      }}
    >
      {children}
    </div>
  );
};

// --- ENHANCED BACKGROUND WITH DOT PATTERN & RADIAL GLOW ---
const EditorialBackground: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.BG_BASE }}>
      <svg style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0.22 }}>
        <defs>
          <pattern id="matrix-dot-grid" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
            <circle cx="6" cy="6" r="2.5" fill={COLORS.INK_TERTIARY} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#matrix-dot-grid)" />
      </svg>
      <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at 35% 30%, rgba(250, 246, 236, 0.75) 0%, rgba(234, 227, 211, 0.45) 100%)`, pointerEvents: 'none' }} />
    </AbsoluteFill>
  );
};

// --- CHAPTER HEADER ---
const SectionHeader: React.FC<{ title: string; subtitle: string; icon: React.ReactNode; delay?: number }> = ({ title, subtitle, icon, delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const pop = spring({ frame: frame - delay, fps, config: SPRING_CONFIG });

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '40px', transform: `translateY(${interpolate(pop, [0, 1], [40, 0])}px)`, opacity: pop, width: '100%', marginBottom: '48px' }}>
      <div style={{ backgroundColor: COLORS.BG_ELEVATED, borderRadius: '50%', width: '150px', height: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: `3px solid ${COLORS.BG_RECESSED}`, flexShrink: 0, boxShadow: '0 20px 40px rgba(30, 27, 22, 0.05)' }}>
        {icon}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h2 style={{ fontFamily: FONTS.main, fontSize: '112px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, letterSpacing: '-0.03em', lineHeight: 1.05 }}>
          {title}
        </h2>
        <span style={{ fontFamily: FONTS.main, fontSize: '64px', fontWeight: 700, color: COLORS.ACCENT_DETAIL, textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: '8px' }}>
          {subtitle}
        </span>
      </div>
    </div>
  );
};

// --- HELPER FORMATTER ---
const formatYield = (val: number) => `$${Math.round(val).toLocaleString()}`;
const MAX_BAR_VAL = 3200; // Shared maximum across all scenarios to ensure bar lengths are relative

// --- BEAT 1: SHORT-TERM HOLD SCENARIOS (<1 YEAR) ---
const ShortTermDashboard: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Phase 1 (0-300): High Tax State
  // Phase 2 (300+): Zero Tax State
  const intro = spring({ frame: frame - 20, fps, config: SPRING_CONFIG });
  const phaseTaxToggle = spring({ frame: frame - 300, fps, config: SPRING_CONFIG });

  const phase1Op = interpolate(phaseTaxToggle, [0, 0.5], [1, 0], { extrapolateRight: 'clamp' });
  const phase2Op = interpolate(phaseTaxToggle, [0.5, 1], [0, 1], { extrapolateRight: 'clamp' });

  // Baseline Fixed Values
  const sgovVal = interpolate(intro, [0, 1], [0, 2744]);
  const usfrVal = interpolate(intro, [0, 1], [0, 2804]);
  
  // Dynamic BOXX Value (Transitions from 2408 -> 2804 parity)
  const boxxVal = interpolate(intro, [0, 1], [0, 2408])
                + interpolate(phaseTaxToggle, [0, 1], [0, 2804 - 2408]);

  // BOXX Color transitions from Brick (Penalty) to Teal (Parity)
  const boxxColor = interpolateColors(frame, [280, 320], [COLORS.ACCENT_NEGATIVE, COLORS.ACCENT_DETAIL]);

  return (
    <EditorialLeftZone>
      <SectionHeader 
        title="Short-Term Matrix" 
        subtitle="Holding < 1 Year | $100k Investment" 
        icon={<Calculator color={COLORS.ACCENT_DETAIL} size={80} strokeWidth={2.5} />} 
        delay={10}
      />

      <div style={{
        backgroundColor: COLORS.BG_ELEVATED,
        borderRadius: '56px',
        border: `3px solid ${COLORS.BG_RECESSED}`,
        padding: '64px',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 32px 64px rgba(30, 27, 22, 0.04)',
        transform: `translateY(${interpolate(intro, [0, 1], [60, 0])}px)`,
        opacity: intro,
      }}>
        
        {/* Dynamic Header: State Tax Toggle */}
        <div style={{ position: 'relative', height: '100px', marginBottom: '40px', borderBottom: `2px solid ${COLORS.BG_RECESSED}` }}>
          <div style={{ position: 'absolute', inset: 0, opacity: phase1Op, display: 'flex', alignItems: 'center', gap: '24px' }}>
            <MapPin color={COLORS.ACCENT_NEGATIVE} size={64} />
            <span style={{ fontFamily: FONTS.main, fontSize: '64px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>High Tax State (e.g. CA)</span>
            <span style={{ fontFamily: FONTS.main, fontSize: '48px', fontWeight: 600, color: COLORS.ACCENT_NEGATIVE, marginLeft: 'auto' }}>9.3% State Tax</span>
          </div>
          <div style={{ position: 'absolute', inset: 0, opacity: phase2Op, display: 'flex', alignItems: 'center', gap: '24px' }}>
            <MapPin color={COLORS.ACCENT_HERO} size={64} />
            <span style={{ fontFamily: FONTS.main, fontSize: '64px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>Zero Tax State (e.g. TX, FL)</span>
            <span style={{ fontFamily: FONTS.main, fontSize: '48px', fontWeight: 600, color: COLORS.ACCENT_HERO, marginLeft: 'auto' }}>0% State Tax</span>
          </div>
        </div>

        {/* Bar Charts */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
          
          {/* USFR ROW (Hero Winner here) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '40px', width: '100%' }}>
            <div style={{ width: '220px', flexShrink: 0, display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontFamily: FONTS.main, fontSize: '72px', fontWeight: 900, color: COLORS.INK_PRIMARY }}>USFR</span>
            </div>
            <div style={{ flex: 1, height: '140px', backgroundColor: COLORS.BG_RECESSED, borderRadius: '70px', padding: '12px', position: 'relative' }}>
              <div style={{ height: '100%', width: `${(usfrVal / MAX_BAR_VAL) * 100}%`, backgroundColor: COLORS.ACCENT_HERO, borderRadius: '60px', boxShadow: `inset -8px 0 16px rgba(0,0,0,0.15)` }} />
              <div style={{ position: 'absolute', top: '100%', left: '32px', marginTop: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <TrendingUp color={COLORS.ACCENT_HERO} size={40} strokeWidth={3} />
                  <span style={{ fontFamily: FONTS.main, fontSize: '48px', fontWeight: 700, color: COLORS.ACCENT_HERO }}>Highest Yield</span>
                </div>
              </div>
            </div>
            <div style={{ width: '320px', flexShrink: 0, display: 'flex', justifyContent: 'flex-end' }}>
              <span style={{ fontFamily: FONTS.main, fontSize: '96px', fontWeight: 900, color: COLORS.ACCENT_HERO }}>{formatYield(usfrVal)}</span>
            </div>
          </div>

          <div style={{ height: '16px' }} />

          {/* SGOV ROW (Neutral) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '40px', width: '100%' }}>
            <div style={{ width: '220px', flexShrink: 0, display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontFamily: FONTS.main, fontSize: '72px', fontWeight: 900, color: COLORS.INK_PRIMARY }}>SGOV</span>
            </div>
            <div style={{ flex: 1, height: '140px', backgroundColor: COLORS.BG_RECESSED, borderRadius: '70px', padding: '12px', position: 'relative' }}>
              <div style={{ height: '100%', width: `${(sgovVal / MAX_BAR_VAL) * 100}%`, backgroundColor: COLORS.ACCENT_NEUTRAL, borderRadius: '60px', boxShadow: `inset -8px 0 16px rgba(0,0,0,0.15)` }} />
            </div>
            <div style={{ width: '320px', flexShrink: 0, display: 'flex', justifyContent: 'flex-end' }}>
              <span style={{ fontFamily: FONTS.main, fontSize: '96px', fontWeight: 900, color: COLORS.ACCENT_NEUTRAL }}>{formatYield(sgovVal)}</span>
            </div>
          </div>

          <div style={{ height: '16px' }} />

          {/* BOXX ROW (Dynamic Loser -> Parity) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '40px', width: '100%' }}>
            <div style={{ width: '220px', flexShrink: 0, display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontFamily: FONTS.main, fontSize: '72px', fontWeight: 900, color: COLORS.INK_PRIMARY }}>BOXX</span>
            </div>
            <div style={{ flex: 1, height: '140px', backgroundColor: COLORS.BG_RECESSED, borderRadius: '70px', padding: '12px', position: 'relative' }}>
              <div style={{ height: '100%', width: `${(boxxVal / MAX_BAR_VAL) * 100}%`, backgroundColor: boxxColor, borderRadius: '60px', boxShadow: `inset -8px 0 16px rgba(0,0,0,0.15)` }} />
              
              <div style={{ position: 'absolute', top: '100%', left: '32px', marginTop: '20px', width: '100%' }}>
                <div style={{ position: 'absolute', opacity: phase1Op, display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <ShieldAlert color={COLORS.ACCENT_NEGATIVE} size={40} strokeWidth={3} />
                  <span style={{ fontFamily: FONTS.main, fontSize: '48px', fontWeight: 700, color: COLORS.ACCENT_NEGATIVE }}>Double-Tax Penalty</span>
                </div>
                <div style={{ position: 'absolute', opacity: phase2Op, display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <ShieldCheck color={COLORS.ACCENT_DETAIL} size={40} strokeWidth={3} />
                  <span style={{ fontFamily: FONTS.main, fontSize: '48px', fontWeight: 700, color: COLORS.ACCENT_DETAIL }}>Yield Parity Reached</span>
                </div>
              </div>
            </div>
            <div style={{ width: '320px', flexShrink: 0, display: 'flex', justifyContent: 'flex-end' }}>
              <span style={{ fontFamily: FONTS.main, fontSize: '96px', fontWeight: 900, color: boxxColor }}>{formatYield(boxxVal)}</span>
            </div>
          </div>

          <div style={{ height: '16px' }} />

        </div>
      </div>
    </EditorialLeftZone>
  );
};

// --- BEAT 2: LONG-TERM HOLD SCENARIOS (1+ YEAR) ---
const LongTermDashboard: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Phase 1 (0-300): High Tax State
  // Phase 2 (300+): Zero Tax State
  const intro = spring({ frame: frame - 20, fps, config: SPRING_CONFIG });
  const phaseTaxToggle = spring({ frame: frame - 300, fps, config: SPRING_CONFIG });

  const phase1Op = interpolate(phaseTaxToggle, [0, 0.5], [1, 0], { extrapolateRight: 'clamp' });
  const phase2Op = interpolate(phaseTaxToggle, [0.5, 1], [0, 1], { extrapolateRight: 'clamp' });

  // Baseline Fixed Values
  const sgovVal = interpolate(intro, [0, 1], [0, 2744]);
  const usfrVal = interpolate(intro, [0, 1], [0, 2804]);
  
  // Dynamic BOXX Value (Transitions from 2733 Parity -> 3069 Mega Win)
  const boxxVal = interpolate(intro, [0, 1], [0, 2733])
                + interpolate(phaseTaxToggle, [0, 1], [0, 3069 - 2733]);

  // BOXX Color transitions from Teal (Parity) to Gold (Hero)
  const boxxColor = interpolateColors(frame, [280, 320], [COLORS.ACCENT_DETAIL, COLORS.ACCENT_HERO]);

  return (
    <EditorialLeftZone>
      <SectionHeader 
        title="Long-Term Matrix" 
        subtitle="Holding 1+ Year (15% Cap Gains)" 
        icon={<CalendarCheck color={COLORS.ACCENT_HERO} size={80} strokeWidth={2.5} />} 
        delay={10}
      />

      <div style={{
        backgroundColor: COLORS.BG_ELEVATED,
        borderRadius: '56px',
        border: `4px solid ${COLORS.ACCENT_HERO}`,
        padding: '64px',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 40px 80px rgba(184, 134, 46, 0.1)',
        transform: `translateY(${interpolate(intro, [0, 1], [60, 0])}px)`,
        opacity: intro,
      }}>
        
        {/* Dynamic Header: State Tax Toggle */}
        <div style={{ position: 'relative', height: '100px', marginBottom: '40px', borderBottom: `2px solid ${COLORS.BG_RECESSED}` }}>
          <div style={{ position: 'absolute', inset: 0, opacity: phase1Op, display: 'flex', alignItems: 'center', gap: '24px' }}>
            <MapPin color={COLORS.ACCENT_NEGATIVE} size={64} />
            <span style={{ fontFamily: FONTS.main, fontSize: '64px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>High Tax State (e.g. CA)</span>
            <span style={{ fontFamily: FONTS.main, fontSize: '48px', fontWeight: 600, color: COLORS.ACCENT_NEGATIVE, marginLeft: 'auto' }}>9.3% State Tax</span>
          </div>
          <div style={{ position: 'absolute', inset: 0, opacity: phase2Op, display: 'flex', alignItems: 'center', gap: '24px' }}>
            <MapPin color={COLORS.ACCENT_HERO} size={64} />
            <span style={{ fontFamily: FONTS.main, fontSize: '64px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>Zero Tax State (e.g. TX, FL)</span>
            <span style={{ fontFamily: FONTS.main, fontSize: '48px', fontWeight: 600, color: COLORS.ACCENT_HERO, marginLeft: 'auto' }}>0% State Tax</span>
          </div>
        </div>

        {/* Bar Charts */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
          
          {/* USFR ROW (Neutralized in Long Term) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '40px', width: '100%' }}>
            <div style={{ width: '220px', flexShrink: 0, display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontFamily: FONTS.main, fontSize: '72px', fontWeight: 900, color: COLORS.INK_PRIMARY }}>USFR</span>
            </div>
            <div style={{ flex: 1, height: '140px', backgroundColor: COLORS.BG_RECESSED, borderRadius: '70px', padding: '12px', position: 'relative' }}>
              <div style={{ height: '100%', width: `${(usfrVal / MAX_BAR_VAL) * 100}%`, backgroundColor: COLORS.ACCENT_NEUTRAL, borderRadius: '60px', boxShadow: `inset -8px 0 16px rgba(0,0,0,0.15)` }} />
            </div>
            <div style={{ width: '320px', flexShrink: 0, display: 'flex', justifyContent: 'flex-end' }}>
              <span style={{ fontFamily: FONTS.main, fontSize: '96px', fontWeight: 900, color: COLORS.ACCENT_NEUTRAL }}>{formatYield(usfrVal)}</span>
            </div>
          </div>

          <div style={{ height: '16px' }} />

          {/* SGOV ROW (Neutral) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '40px', width: '100%' }}>
            <div style={{ width: '220px', flexShrink: 0, display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontFamily: FONTS.main, fontSize: '72px', fontWeight: 900, color: COLORS.INK_PRIMARY }}>SGOV</span>
            </div>
            <div style={{ flex: 1, height: '140px', backgroundColor: COLORS.BG_RECESSED, borderRadius: '70px', padding: '12px', position: 'relative' }}>
              <div style={{ height: '100%', width: `${(sgovVal / MAX_BAR_VAL) * 100}%`, backgroundColor: COLORS.ACCENT_NEUTRAL, borderRadius: '60px', boxShadow: `inset -8px 0 16px rgba(0,0,0,0.15)` }} />
            </div>
            <div style={{ width: '320px', flexShrink: 0, display: 'flex', justifyContent: 'flex-end' }}>
              <span style={{ fontFamily: FONTS.main, fontSize: '96px', fontWeight: 900, color: COLORS.ACCENT_NEUTRAL }}>{formatYield(sgovVal)}</span>
            </div>
          </div>

          <div style={{ height: '16px' }} />

          {/* BOXX ROW (Dynamic Parity -> Massive Win) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '40px', width: '100%' }}>
            <div style={{ width: '220px', flexShrink: 0, display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontFamily: FONTS.main, fontSize: '72px', fontWeight: 900, color: COLORS.INK_PRIMARY }}>BOXX</span>
            </div>
            <div style={{ flex: 1, height: '140px', backgroundColor: COLORS.BG_RECESSED, borderRadius: '70px', padding: '12px', position: 'relative' }}>
              <div style={{ height: '100%', width: `${(boxxVal / MAX_BAR_VAL) * 100}%`, backgroundColor: boxxColor, borderRadius: '60px', boxShadow: `inset -8px 0 16px rgba(0,0,0,0.15)` }} />
              
              <div style={{ position: 'absolute', top: '100%', left: '32px', marginTop: '20px', width: '100%' }}>
                <div style={{ position: 'absolute', opacity: phase1Op, display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <ShieldCheck color={COLORS.ACCENT_DETAIL} size={40} strokeWidth={3} />
                  <span style={{ fontFamily: FONTS.main, fontSize: '48px', fontWeight: 700, color: COLORS.ACCENT_DETAIL }}>Cap Gains offsets State Tax</span>
                </div>
                <div style={{ position: 'absolute', opacity: phase2Op, display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <Zap color={COLORS.ACCENT_HERO} size={40} strokeWidth={3} fill={COLORS.ACCENT_HERO} />
                  <span style={{ fontFamily: FONTS.main, fontSize: '48px', fontWeight: 800, color: COLORS.ACCENT_HERO }}>+10% Superior Yield!</span>
                </div>
              </div>
            </div>
            <div style={{ width: '320px', flexShrink: 0, display: 'flex', justifyContent: 'flex-end' }}>
              <span style={{ fontFamily: FONTS.main, fontSize: '96px', fontWeight: 900, color: boxxColor }}>{formatYield(boxxVal)}</span>
            </div>
          </div>

          <div style={{ height: '16px' }} />

        </div>
      </div>
    </EditorialLeftZone>
  );
};


// --- MAIN COMPOSITION ---
export default function MatrixComparisonScene() {
  return (
    <AbsoluteFill style={{ overflow: 'hidden' }}>
      
      {/* Background */}
      <Sequence from={0}>
        <EditorialBackground />
      </Sequence>

      <AbsoluteFill>
        
        {/* BEAT 1: Short-Term Hold Matrix (<1 Year) [Frames 0 - 600, ~20s] */}
        {/* High Tax to Zero Tax transition occurs at frame 300 */}
        <Sequence from={0} durationInFrames={600}>
          <ShortTermDashboard />
        </Sequence>

        {/* BEAT 2: Long-Term Hold Matrix (1+ Year) [Frames 600 - 1200, ~20s] */}
        {/* High Tax to Zero Tax transition occurs at frame 900 (relative frame 300 in the component) */}
        <Sequence from={600}>
          <LongTermDashboard />
        </Sequence>

      </AbsoluteFill>

    </AbsoluteFill>
  );
}