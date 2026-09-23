/**
 * REASONING STEP (v3 + Fixed Contrast for De-emphasized Stats)
 * 1. Contrast Fix: Replaced `BG_RECESSED` with `ACCENT_NEUTRAL` for the losing stat's text and border. Background colors should never be used for typography. Now 3.61% will be highly legible (slate grey) while remaining visually subordinate to the winning 3.69% (gold).
 * 2. Visual Structure:
 *    - Beat 1: USFR Mechanism Stack.
 *    - Beat 2: USFR vs SGOV A/B Split.
 * 3. Mobile Legibility: Text sizing remains massive, but contrast is now mathematically sound across all elements.
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
  RefreshCcw,
  Home,
  TrendingUp,
  CalendarCheck,
  Swords,
  Info
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
  ACCENT_HERO: '#B8862E',     // Muted gold (The win, highlighted answer)
  ACCENT_NEGATIVE: '#B5533C', // Muted brick (Risk, downside, tax/fee hits)
  ACCENT_DETAIL: '#3C6E71',   // Muted teal (Supporting detail, concepts)
  ACCENT_NEUTRAL: '#8C8474',  // Slate grey (De-emphasized, loser stats, analogies)
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
      {/* Dot Grid Pattern for Depth */}
      <svg style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0.22 }}>
        <defs>
          <pattern id="usfr-dot-grid" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
            <circle cx="6" cy="6" r="2.5" fill={COLORS.INK_TERTIARY} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#usfr-dot-grid)" />
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

// --- BEAT 1: USFR FLOATING RATE MECHANISM ---
const MechanismStep: React.FC<{
  label: string;
  headline: string;
  desc: string;
  icon: React.ReactNode;
  accentColor: string;
  delay: number;
}> = ({ label, headline, desc, icon, accentColor, delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const pop = spring({ frame: frame - delay, fps, config: SPRING_CONFIG });

  return (
    <div
      style={{
        backgroundColor: COLORS.BG_ELEVATED,
        borderRadius: '40px',
        border: `3px solid ${COLORS.BG_RECESSED}`,
        padding: '48px 64px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '48px',
        width: '100%',
        transform: `translateY(${interpolate(pop, [0, 1], [40, 0])}px)`,
        opacity: pop,
        boxShadow: '0 24px 48px rgba(30, 27, 22, 0.04)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div style={{
        backgroundColor: accentColor,
        borderRadius: '32px',
        width: '144px',
        height: '144px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexShrink: 0,
        zIndex: 1,
        boxShadow: `0 16px 32px ${accentColor}40`
      }}>
        {icon}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', zIndex: 1 }}>
        <span style={{ fontFamily: FONTS.main, fontSize: '48px', fontWeight: 800, color: accentColor, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          {label}
        </span>
        <span style={{ fontFamily: FONTS.main, fontSize: '72px', fontWeight: 900, color: COLORS.INK_PRIMARY, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
          {headline}
        </span>
        <span style={{ fontFamily: FONTS.main, fontSize: '52px', fontWeight: 500, color: COLORS.INK_SECONDARY }}>
          {desc}
        </span>
      </div>
    </div>
  );
};

const FloatingMechanismSequence: React.FC = () => {
  return (
    <EditorialLeftZone>
      <SectionHeader 
        title="Top Option 2: USFR" 
        subtitle="WisdomTree Floating Rate Treasury" 
        icon={<RefreshCcw color={COLORS.ACCENT_DETAIL} size={80} strokeWidth={2.5} />} 
        delay={10}
      />
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '100%' }}>
        
        <MechanismStep 
          label="The Mechanics"
          headline="Weekly Rate Adjustments"
          desc="Invests in floating rate notes that sync with current market interest rates every 7 days."
          icon={<RefreshCcw color={COLORS.BG_BASE} size={64} strokeWidth={2.5} />}
          accentColor={COLORS.ACCENT_DETAIL}
          delay={30}
        />

        <MechanismStep 
          label="The Mental Model"
          headline="Like an ARM Mortgage"
          desc="Functions like an adjustable-rate mortgage (ARM) where yields go up or down over time."
          icon={<Home color={COLORS.BG_BASE} size={64} strokeWidth={2.5} />}
          accentColor={COLORS.ACCENT_NEUTRAL}
          delay={60}
        />

        <MechanismStep 
          label="The Advantage"
          headline="Optimal in Rising Rates"
          desc="Unlike SGOV, there is no maturity lag. Yields rise almost immediately when the Fed hikes rates."
          icon={<TrendingUp color={COLORS.BG_BASE} size={64} strokeWidth={2.5} />}
          accentColor={COLORS.ACCENT_HERO}
          delay={90}
        />

      </div>
    </EditorialLeftZone>
  );
};

// --- BEAT 2: USFR vs SGOV A/B DATA VISUALIZATION ---
const SplitComparisonCard: React.FC<{
  title: string;
  usfrValue: string;
  sgovValue: string;
  usfrColor: string;
  sgovColor: string;
  usfrWinner: boolean;
  subtext: string;
  delay: number;
}> = ({ title, usfrValue, sgovValue, usfrColor, sgovColor, usfrWinner, subtext, delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const pop = spring({ frame: frame - delay, fps, config: SPRING_CONFIG });

  const usfrWeight = usfrWinner ? 900 : 700;
  const sgovWeight = !usfrWinner ? 900 : 700;

  return (
    <div
      style={{
        backgroundColor: COLORS.BG_ELEVATED,
        borderRadius: '40px',
        border: `3px solid ${COLORS.BG_RECESSED}`,
        padding: '48px',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        transform: `translateY(${interpolate(pop, [0, 1], [40, 0])}px)`,
        opacity: pop,
        boxShadow: '0 24px 48px rgba(30, 27, 22, 0.04)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: `2px solid ${COLORS.BG_RECESSED}`, paddingBottom: '24px', marginBottom: '32px' }}>
        <span style={{ fontFamily: FONTS.main, fontSize: '56px', fontWeight: 800, color: COLORS.INK_PRIMARY, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          {title}
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', width: '100%', gap: '24px' }}>
        {/* USFR Side */}
        <div style={{ 
          flex: 1, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          backgroundColor: COLORS.BG_BASE, 
          borderRadius: '24px', 
          padding: '32px', 
          border: `3px solid ${usfrColor}`, 
          boxShadow: usfrWinner ? `0 16px 32px ${usfrColor}25` : 'none' 
        }}>
          <span style={{ fontFamily: FONTS.main, fontSize: '44px', fontWeight: 700, color: usfrWinner ? COLORS.INK_PRIMARY : COLORS.INK_TERTIARY, marginBottom: '8px' }}>USFR</span>
          <span style={{ fontFamily: FONTS.main, fontSize: '104px', fontWeight: usfrWeight, color: usfrColor, lineHeight: 1 }}>{usfrValue}</span>
        </div>

        {/* VS Divider */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px' }}>
          <span style={{ fontFamily: FONTS.main, fontSize: '40px', fontWeight: 600, color: COLORS.INK_TERTIARY, fontStyle: 'italic' }}>vs</span>
        </div>

        {/* SGOV Side */}
        <div style={{ 
          flex: 1, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          backgroundColor: COLORS.BG_BASE, 
          borderRadius: '24px', 
          padding: '32px', 
          border: `3px solid ${sgovColor}`,
          boxShadow: !usfrWinner ? `0 16px 32px ${sgovColor}25` : 'none' 
        }}>
          <span style={{ fontFamily: FONTS.main, fontSize: '44px', fontWeight: 700, color: !usfrWinner ? COLORS.INK_PRIMARY : COLORS.INK_TERTIARY, marginBottom: '8px' }}>SGOV</span>
          <span style={{ fontFamily: FONTS.main, fontSize: '104px', fontWeight: sgovWeight, color: sgovColor, lineHeight: 1 }}>{sgovValue}</span>
        </div>
      </div>

      <div style={{ marginTop: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', backgroundColor: COLORS.BG_BASE, padding: '24px', borderRadius: '24px', border: `2px solid ${COLORS.BG_RECESSED}` }}>
        <Info color={COLORS.INK_SECONDARY} size={40} />
        <span style={{ fontFamily: FONTS.main, fontSize: '48px', fontWeight: 600, color: COLORS.INK_SECONDARY }}>
          {subtext}
        </span>
      </div>
    </div>
  );
};

const YieldComparisonSequence: React.FC = () => {
  return (
    <EditorialLeftZone>
      <SectionHeader 
        title="USFR vs. SGOV" 
        subtitle="Quick Facts & Head-to-Head Math" 
        icon={<Swords color={COLORS.ACCENT_HERO} size={80} strokeWidth={2.5} />} 
        delay={10}
      />
      
      <div style={{ display: 'flex', flexDirection: 'row', gap: '40px', width: '100%', height: '640px' }}>
        
        {/* Yield Comparison: USFR Wins (Gold) */}
        <div style={{ flex: 1, display: 'flex' }}>
          <SplitComparisonCard 
            title="Annual Yield"
            usfrValue="3.69%"
            sgovValue="3.61%"
            usfrColor={COLORS.ACCENT_HERO}       // Gold win for USFR
            sgovColor={COLORS.ACCENT_NEUTRAL}    // Fixed: Slate grey for legibility
            usfrWinner={true}
            subtext="+8 bps advantage for USFR"
            delay={35}
          />
        </div>

        {/* Expense Ratio: SGOV Wins (Gold), USFR gets Negative Penalty (Brick) */}
        <div style={{ flex: 1, display: 'flex' }}>
          <SplitComparisonCard 
            title="Expense Ratio"
            usfrValue="0.15%"
            sgovValue="0.09%"
            usfrColor={COLORS.ACCENT_NEGATIVE}   // Brick penalty for USFR
            sgovColor={COLORS.ACCENT_HERO}       // Gold win for SGOV
            usfrWinner={false}
            subtext="Higher fee offsets the yield advantage"
            delay={65}
          />
        </div>

      </div>

      {/* Payout Schedule Callout */}
      <div style={{ 
        marginTop: '40px',
        backgroundColor: COLORS.BG_ELEVATED,
        border: `3px solid ${COLORS.BG_RECESSED}`,
        borderRadius: '32px',
        padding: '40px 56px',
        display: 'flex',
        alignItems: 'center',
        gap: '40px',
        boxShadow: '0 24px 48px rgba(30, 27, 22, 0.03)',
        opacity: spring({ frame: useCurrentFrame() - 95, fps: 30, config: SPRING_CONFIG }),
        transform: `translateY(${interpolate(spring({ frame: useCurrentFrame() - 95, fps: 30, config: SPRING_CONFIG }), [0, 1], [20, 0])}px)`
      }}>
        <div style={{ backgroundColor: COLORS.BG_BASE, padding: '24px', borderRadius: '50%' }}>
          <CalendarCheck color={COLORS.ACCENT_DETAIL} size={56} strokeWidth={2.5} />
        </div>
        <span style={{ fontFamily: FONTS.main, fontSize: '56px', fontWeight: 500, color: COLORS.INK_PRIMARY }}>
          <strong>Payout Timing:</strong> USFR pays late month (last week), SGOV pays early month (first week).
        </span>
      </div>

    </EditorialLeftZone>
  );
};

// --- MAIN COMPOSITION ---
export default function USFROverviewScene() {
  return (
    <AbsoluteFill style={{ overflow: 'hidden' }}>
      
      <Sequence from={0}>
        <EditorialBackground />
      </Sequence>

      <AbsoluteFill>
        
        {/* BEAT 1: Floating Rate Mechanism (Frames 0 - 450, ~15s) */}
        <Sequence from={0} durationInFrames={450}>
          <FloatingMechanismSequence />
        </Sequence>

        {/* BEAT 2: USFR vs SGOV A/B Comparison (Frames 450+) */}
        <Sequence from={450}>
          <YieldComparisonSequence />
        </Sequence>

      </AbsoluteFill>

    </AbsoluteFill>
  );
}