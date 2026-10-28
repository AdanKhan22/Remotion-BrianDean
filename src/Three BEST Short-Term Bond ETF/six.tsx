/**
 * REASONING STEP (v3 + Ultra-Slow Fluid Animation)
 * 1. Addressing the specific client feedback: The bars and numbers were still moving too fast during the initial growth phase, making it hard to track.
 * 2. Ultra-Slow Physics: 
 *    - Replaced `SLOW_SPRING_CONFIG` with `FLUID_SPRING_CONFIG`.
 *    - Set `damping: 200`, `stiffness: 15`, `mass: 3`. This creates a heavy, viscous, extremely slow ramp-up that takes several seconds to complete, perfectly mimicking a fluid data visualization building itself on screen.
 * 3. Synchronization: The numbers on the right side are driven by the exact same spring value as the bar width, so the dollar amount will tick up slowly in perfect harmony with the bar physically growing.
 */

import React from 'react';
import {
  AbsoluteFill,
  Sequence,
  spring,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  interpolateColors
} from 'remotion';
import {
  RefreshCcw,
  TrendingUp,
  TrendingDown,
  Clock,
  Lock,
  Scale,
  ShieldCheck,
  Zap,
  Activity
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
  ACCENT_HERO: '#B8862E',     // Muted gold (The win, highlighted answer, locked-in yields)
  ACCENT_NEGATIVE: '#B5533C', // Muted brick (Risk, downside, yield drops)
  ACCENT_DETAIL: '#3C6E71',   // Muted teal (Supporting detail, standard mechanics)
  ACCENT_NEUTRAL: '#8C8474',  // Slate grey (De-emphasized, lagging stats, baseline)
};

const FONTS = {
  main: '"Inter", "DM Sans", sans-serif',
};

// V3 standard physics - smooth, weighty spring for UI entrances
const SPRING_CONFIG = { damping: 200, stiffness: 120, mass: 0.8 };

// FLUID spring physics: Extremely low stiffness and high mass for a slow, viscous, deliberate build
const FLUID_SPRING_CONFIG = { damping: 200, stiffness: 15, mass: 3 };

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
      {/* Dot Grid Pattern for Depth */}
      <svg style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0.22 }}>
        <defs>
          <pattern id="rate-sim-dot-grid" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
            <circle cx="6" cy="6" r="2.5" fill={COLORS.INK_TERTIARY} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#rate-sim-dot-grid)" />
      </svg>
      {/* Subtle Warm Lighting Overlay */}
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

// --- DYNAMIC DATA VISUALIZATION DASHBOARD ---
const RateSensitivityDashboard: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // STAGGERED ENTRANCES
  // 1. Box/Container slides in
  const containerEntrance = spring({ frame: frame - 10, fps, config: SPRING_CONFIG });
  // 2. Text labels appear
  const labelsEntrance = spring({ frame: frame - 25, fps, config: SPRING_CONFIG });
  
  // 3. Bars slowly stretch to baseline values using the fluid config
  const initialBarGrowth = spring({ frame: frame - 50, fps, config: FLUID_SPRING_CONFIG });

  // SCENARIO TRIGGERS (Also using the fluid config for smooth transitions)
  const phaseHike = spring({ frame: frame - 350, fps, config: FLUID_SPRING_CONFIG });
  const phaseCut = spring({ frame: frame - 750, fps, config: FLUID_SPRING_CONFIG });
  
  const phaseTax = spring({ frame: frame - 1150, fps, config: SPRING_CONFIG });

  // Crossfade Opacities for Scenario Header & Badges
  const p1Op = interpolate(phaseHike, [0, 0.5], [1, 0], { extrapolateRight: 'clamp' });
  const p2Op = interpolate(phaseHike, [0.5, 1], [0, 1], { extrapolateRight: 'clamp' }) * interpolate(phaseCut, [0, 0.5], [1, 0], { extrapolateRight: 'clamp' });
  const p3Op = interpolate(phaseCut, [0.5, 1], [0, 1], { extrapolateRight: 'clamp' });

  // Spring-driven Values for physical Bar Widths & Tick Counts
  const usfrVal = interpolate(initialBarGrowth, [0, 1], [0, 3690])
                + interpolate(phaseHike, [0, 1], [0, 3940 - 3690])
                + interpolate(phaseCut, [0, 1], [0, 3440 - 3940]);

  const sgovVal = interpolate(initialBarGrowth, [0, 1], [0, 3610]); // Stays static during simulation

  // Semantic Color Interpolation
  const usfrColor = interpolateColors(
    frame,
    [330, 360, 730, 760],
    [COLORS.ACCENT_DETAIL, COLORS.ACCENT_HERO, COLORS.ACCENT_HERO, COLORS.ACCENT_NEGATIVE]
  );

  const sgovColor = interpolateColors(
    frame,
    [330, 360, 730, 760],
    [COLORS.ACCENT_NEUTRAL, COLORS.ACCENT_NEUTRAL, COLORS.ACCENT_NEUTRAL, COLORS.ACCENT_HERO]
  );

  // Constants for Data Viz
  const MAX_VAL = 4200; // Used to calculate percentage width

  return (
    <EditorialLeftZone>
      
   
      <SectionHeader 
        title="Rate Sensitivity" 
        subtitle="$100k Scenario Analysis" 
        icon={<Activity color={COLORS.ACCENT_DETAIL} size={80} strokeWidth={2.5} />} 
        delay={10}
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', width: '100%', position: 'relative' }}>
        
        {/* DATA VISUALIZATION CARD (The Box) */}
        <div style={{
          backgroundColor: COLORS.BG_ELEVATED,
          borderRadius: '56px',
          border: `3px solid ${COLORS.BG_RECESSED}`,
          padding: '64px',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 32px 64px rgba(30, 27, 22, 0.04)',
          transform: `translateY(${interpolate(containerEntrance, [0, 1], [60, 0])}px)`,
          opacity: containerEntrance,
        }}>
          
          {/* DYNAMIC SCENARIO HEADER (Crossfading) */}
          <div style={{ position: 'relative', height: '100px', marginBottom: '40px', borderBottom: `2px solid ${COLORS.BG_RECESSED}`, opacity: labelsEntrance }}>
            {/* Phase 1: Baseline */}
            <div style={{ position: 'absolute', inset: 0, opacity: p1Op, display: 'flex', alignItems: 'center', gap: '24px' }}>
              <Scale color={COLORS.INK_TERTIARY} size={64} />
              <span style={{ fontFamily: FONTS.main, fontSize: '64px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>Baseline Projection</span>
            </div>
            {/* Phase 2: Hike */}
            <div style={{ position: 'absolute', inset: 0, opacity: p2Op, display: 'flex', alignItems: 'center', gap: '24px' }}>
              <TrendingUp color={COLORS.ACCENT_HERO} size={64} strokeWidth={3} />
              <span style={{ fontFamily: FONTS.main, fontSize: '64px', fontWeight: 900, color: COLORS.ACCENT_HERO }}>Scenario 1: Fed Raises Rates (+0.25%)</span>
            </div>
            {/* Phase 3: Cut */}
            <div style={{ position: 'absolute', inset: 0, opacity: p3Op, display: 'flex', alignItems: 'center', gap: '24px' }}>
              <TrendingDown color={COLORS.ACCENT_NEGATIVE} size={64} strokeWidth={3} />
              <span style={{ fontFamily: FONTS.main, fontSize: '64px', fontWeight: 900, color: COLORS.ACCENT_NEGATIVE }}>Scenario 2: Fed Cuts Rates (-0.25%)</span>
            </div>
          </div>

          {/* BAR CHART SECTION */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '72px' }}>
            
            {/* USFR ROW */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '40px', width: '100%' }}>
              <div style={{ width: '280px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '8px', opacity: labelsEntrance, transform: `translateX(${interpolate(labelsEntrance, [0, 1], [-20, 0])}px)` }}>
                <span style={{ fontFamily: FONTS.main, fontSize: '72px', fontWeight: 900, color: COLORS.INK_PRIMARY }}>USFR</span>
                <span style={{ fontFamily: FONTS.main, fontSize: '48px', fontWeight: 600, color: COLORS.INK_SECONDARY }}>Floating Rate</span>
              </div>

              {/* Dynamic Bar */}
              <div style={{ flex: 1, height: '140px', backgroundColor: COLORS.BG_RECESSED, borderRadius: '70px', padding: '12px', position: 'relative' }}>
                <div style={{ 
                  height: '100%', 
                  width: `${(usfrVal / MAX_VAL) * 100}%`, 
                  backgroundColor: usfrColor, 
                  borderRadius: '60px',
                  boxShadow: `inset -8px 0 16px rgba(0,0,0,0.15)`
                }} />
                
                {/* Floating Badges */}
                <div style={{ position: 'absolute', top: '100%', left: '32px', marginTop: '20px', height: '60px', width: '100%' }}>
                  <div style={{ position: 'absolute', opacity: p1Op * labelsEntrance, display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <RefreshCcw color={COLORS.ACCENT_DETAIL} size={40} strokeWidth={3} />
                    <span style={{ fontFamily: FONTS.main, fontSize: '52px', fontWeight: 700, color: COLORS.ACCENT_DETAIL }}>Weekly Adjustments</span>
                  </div>
                  <div style={{ position: 'absolute', opacity: p2Op, display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <Zap color={COLORS.ACCENT_HERO} size={40} strokeWidth={3} fill={COLORS.ACCENT_HERO} />
                    <span style={{ fontFamily: FONTS.main, fontSize: '52px', fontWeight: 800, color: COLORS.ACCENT_HERO }}>Immediate Jump!</span>
                  </div>
                  <div style={{ position: 'absolute', opacity: p3Op, display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <TrendingDown color={COLORS.ACCENT_NEGATIVE} size={40} strokeWidth={3} />
                    <span style={{ fontFamily: FONTS.main, fontSize: '52px', fontWeight: 800, color: COLORS.ACCENT_NEGATIVE }}>Immediate Drop</span>
                  </div>
                </div>
              </div>

              {/* Value Label */}
              <div style={{ width: '320px', flexShrink: 0, display: 'flex', justifyContent: 'flex-end', opacity: labelsEntrance }}>
                <span style={{ fontFamily: FONTS.main, fontSize: '96px', fontWeight: 900, color: usfrColor }}>{formatYield(usfrVal)}</span>
              </div>
            </div>

            {/* SPACER for Badges */}
            <div style={{ height: '24px' }} />

            {/* SGOV ROW */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '40px', width: '100%' }}>
              <div style={{ width: '280px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '8px', opacity: labelsEntrance, transform: `translateX(${interpolate(labelsEntrance, [0, 1], [-20, 0])}px)` }}>
                <span style={{ fontFamily: FONTS.main, fontSize: '72px', fontWeight: 900, color: COLORS.INK_PRIMARY }}>SGOV</span>
                <span style={{ fontFamily: FONTS.main, fontSize: '48px', fontWeight: 600, color: COLORS.INK_SECONDARY }}>Fixed Yield</span>
              </div>

              {/* Dynamic Bar */}
              <div style={{ flex: 1, height: '140px', backgroundColor: COLORS.BG_RECESSED, borderRadius: '70px', padding: '12px', position: 'relative' }}>
                <div style={{ 
                  height: '100%', 
                  width: `${(sgovVal / MAX_VAL) * 100}%`, 
                  backgroundColor: sgovColor, 
                  borderRadius: '60px',
                  boxShadow: `inset -8px 0 16px rgba(0,0,0,0.15)`
                }} />
                
                {/* Floating Badges */}
                <div style={{ position: 'absolute', top: '100%', left: '32px', marginTop: '20px', height: '60px', width: '100%' }}>
                  <div style={{ position: 'absolute', opacity: p1Op * labelsEntrance, display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <Clock color={COLORS.ACCENT_NEUTRAL} size={40} strokeWidth={3} />
                    <span style={{ fontFamily: FONTS.main, fontSize: '52px', fontWeight: 700, color: COLORS.ACCENT_NEUTRAL }}>1-3 Month Cycle</span>
                  </div>
                  <div style={{ position: 'absolute', opacity: p2Op, display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <Clock color={COLORS.ACCENT_NEUTRAL} size={40} strokeWidth={3} />
                    <span style={{ fontFamily: FONTS.main, fontSize: '52px', fontWeight: 800, color: COLORS.ACCENT_NEUTRAL }}>Lagging Behind</span>
                  </div>
                  <div style={{ position: 'absolute', opacity: p3Op, display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <Lock color={COLORS.ACCENT_HERO} size={40} strokeWidth={3} />
                    <span style={{ fontFamily: FONTS.main, fontSize: '52px', fontWeight: 800, color: COLORS.ACCENT_HERO }}>Yield Locked In (Win)</span>
                  </div>
                </div>
              </div>

              {/* Value Label */}
              <div style={{ width: '320px', flexShrink: 0, display: 'flex', justifyContent: 'flex-end', opacity: labelsEntrance }}>
                <span style={{ fontFamily: FONTS.main, fontSize: '96px', fontWeight: 900, color: sgovColor }}>{formatYield(sgovVal)}</span>
              </div>
            </div>

            <div style={{ height: '32px' }} />

          </div>
        </div>

        {/* TAX EQUALITY SHIELD (Slides in during Phase 4) */}
        <div style={{ 
          backgroundColor: COLORS.BG_BASE,
          border: `4px solid ${COLORS.ACCENT_DETAIL}`,
          borderRadius: '40px',
          padding: '40px 64px',
          display: 'flex',
          alignItems: 'center',
          gap: '40px',
          boxShadow: '0 24px 48px rgba(60, 110, 113, 0.1)',
          transform: `translateY(${interpolate(phaseTax, [0, 1], [40, 0])}px)`,
          opacity: phaseTax
        }}>
          <div style={{ backgroundColor: COLORS.ACCENT_DETAIL, padding: '24px', borderRadius: '50%' }}>
            <ShieldCheck color={COLORS.BG_BASE} size={64} strokeWidth={2.5} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontFamily: FONTS.main, fontSize: '64px', fontWeight: 800, color: COLORS.INK_PRIMARY, letterSpacing: '-0.01em' }}>
              Tax Treatment is Identical
            </span>
            <span style={{ fontFamily: FONTS.main, fontSize: '52px', fontWeight: 500, color: COLORS.INK_SECONDARY }}>
              Both funds are fully exempt from state and local income taxes.
            </span>
          </div>
        </div>

      </div>
    </EditorialLeftZone>
  );
};

// --- MAIN COMPOSITION ---
export default function RateSensitivityScene() {
  return (
    <AbsoluteFill style={{ overflow: 'hidden' }}>
      
      {/* Background Layer */}
      <Sequence from={0}>
        <EditorialBackground />
      </Sequence>

      {/* Unified Dynamic Dashboard Sequence */}
      <AbsoluteFill>
        <Sequence from={0}>
          <RateSensitivityDashboard />
        </Sequence>
      </AbsoluteFill>

    </AbsoluteFill>
  );
}