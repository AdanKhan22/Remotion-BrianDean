/**
 * REASONING STEP (v3 + Visual Diagram for Mechanics)
 * 1. Addressing User Feedback: Replaced the vertical text-heavy "How it works" stack with a horizontal visual flowchart (Node 1 -> Node 2 -> Node 3) that physically models the "Box Spread" mechanism.
 * 2. Visual Structure:
 *    - Beat 1: Target Audience (Horizontal split: Tax-Free States vs Long-Term).
 *    - Beat 2 (NEW): Flowchart Diagram. [S&P 500 Options (Teal)] -> [Box Spread/Risk Neutral (Slate)] -> [Synthetic Yield (Gold)]. Below it sits the "Bank Analogy" callout.
 *    - Beat 3: Quick Facts Dashboard (3-column grid).
 * 3. Mobile Legibility & Typography: Maintained massive sizing for 4K. Diagram nodes use 64px/52px text, ensuring readability even on smaller devices. 
 * 4. Color Payload: Colors physically map the transformation. Teal (Action/Mechanics) transforms through Slate (Neutralized Risk) into Gold (The Winning Yield).
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
  Package,
  MapPin,
  Calendar,
  Layers,
  Building2,
  TrendingUp,
  UserCheck,
  Rocket,
  LineChart,
  ArrowRight,
  ShieldCheck,
  ArrowRightLeft
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
  ACCENT_HERO: '#B8862E',     // Muted gold (The win, target audience, synthetic yield)
  ACCENT_NEGATIVE: '#B5533C', // Muted brick (Risk, downside - not heavily used here)
  ACCENT_DETAIL: '#3C6E71',   // Muted teal (Mechanics, structure)
  ACCENT_NEUTRAL: '#8C8474',  // Slate grey (Analogies, neutralized risk)
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
          <pattern id="boxx-dot-grid" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
            <circle cx="6" cy="6" r="2.5" fill={COLORS.INK_TERTIARY} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#boxx-dot-grid)" />
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

// --- BEAT 1: TARGET AUDIENCE ---
const TargetAudienceCard: React.FC<{ title: string; desc: string; icon: React.ReactNode; delay: number }> = ({ title, desc, icon, delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const pop = spring({ frame: frame - delay, fps, config: SPRING_CONFIG });

  return (
    <div style={{
      flex: 1,
      backgroundColor: COLORS.BG_ELEVATED,
      borderRadius: '48px',
      border: `4px solid ${COLORS.ACCENT_HERO}`,
      padding: '56px',
      display: 'flex',
      flexDirection: 'column',
      gap: '32px',
      transform: `translateY(${interpolate(pop, [0, 1], [40, 0])}px)`,
      opacity: pop,
      boxShadow: '0 32px 64px rgba(184, 134, 46, 0.12)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
        <div style={{ backgroundColor: COLORS.ACCENT_HERO, padding: '24px', borderRadius: '32px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0, boxShadow: `0 16px 32px ${COLORS.ACCENT_HERO}40` }}>
          {icon}
        </div>
        <span style={{ fontFamily: FONTS.main, fontSize: '64px', fontWeight: 900, color: COLORS.INK_PRIMARY, lineHeight: 1.1 }}>
          {title}
        </span>
      </div>
      <span style={{ fontFamily: FONTS.main, fontSize: '52px', fontWeight: 500, color: COLORS.INK_SECONDARY }}>
        {desc}
      </span>
    </div>
  );
};

const TargetAudienceSequence: React.FC = () => {
  return (
    <EditorialLeftZone>
      <SectionHeader 
        title="Top Option 3: BOXX" 
        subtitle="Alpha Architect 1-3 Month Box ETF" 
        icon={<Package color={COLORS.ACCENT_DETAIL} size={80} strokeWidth={2.5} />} 
        delay={10}
      />
      <div style={{ marginBottom: '40px', opacity: spring({ frame: useCurrentFrame() - 20, fps: 30, config: SPRING_CONFIG }) }}>
        <span style={{ fontFamily: FONTS.main, fontSize: '56px', fontWeight: 800, color: COLORS.INK_TERTIARY, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          The Ideal Investor Profile
        </span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '40px', width: '100%' }}>
        <TargetAudienceCard 
          title="Tax-Free States" 
          desc="Perfect for residents of states with zero income tax like Texas or Florida." 
          icon={<MapPin color={COLORS.BG_BASE} size={64} strokeWidth={2.5} />} 
          delay={30} 
        />
        <TargetAudienceCard 
          title="Long-Term Holding" 
          desc="Optimized for investors planning to hold the ETF for 1 year or longer." 
          icon={<Calendar color={COLORS.BG_BASE} size={64} strokeWidth={2.5} />} 
          delay={60} 
        />
      </div>
    </EditorialLeftZone>
  );
};

// --- BEAT 2: THE BOX SPREAD DIAGRAM (NEW VISUAL MECHANISM) ---
const DiagramNode: React.FC<{
  stepTitle: string;
  headline: string;
  desc: string;
  icon: React.ReactNode;
  accentColor: string;
  delay: number;
}> = ({ stepTitle, headline, desc, icon, accentColor, delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const pop = spring({ frame: frame - delay, fps, config: SPRING_CONFIG });

  return (
    <div style={{
      flex: 1,
      backgroundColor: COLORS.BG_ELEVATED,
      borderRadius: '40px',
      border: `4px solid ${accentColor}`,
      padding: '40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: '24px',
      transform: `scale(${interpolate(pop, [0, 1], [0.9, 1])})`,
      opacity: pop,
      boxShadow: `0 24px 48px ${accentColor}15`,
    }}>
      <div style={{
        backgroundColor: accentColor,
        borderRadius: '50%',
        width: '120px',
        height: '120px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexShrink: 0,
        boxShadow: `0 16px 32px ${accentColor}40`
      }}>
        {icon}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <span style={{ fontFamily: FONTS.main, fontSize: '40px', fontWeight: 800, color: accentColor, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          {stepTitle}
        </span>
        <span style={{ fontFamily: FONTS.main, fontSize: '64px', fontWeight: 900, color: COLORS.INK_PRIMARY, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
          {headline}
        </span>
        <span style={{ fontFamily: FONTS.main, fontSize: '44px', fontWeight: 600, color: COLORS.INK_SECONDARY }}>
          {desc}
        </span>
      </div>
    </div>
  );
};

const MechanicsVisualSequence: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const arrow1 = spring({ frame: frame - 45, fps, config: SPRING_CONFIG });
  const arrow2 = spring({ frame: frame - 85, fps, config: SPRING_CONFIG });
  const analogyPop = spring({ frame: frame - 110, fps, config: SPRING_CONFIG });

  return (
    <EditorialLeftZone>
      <SectionHeader 
        title="How BOXX Works" 
        subtitle="Visualizing the Strategy" 
        icon={<Layers color={COLORS.ACCENT_DETAIL} size={80} strokeWidth={2.5} />} 
        delay={10}
      />
      
      {/* Horizontal Flowchart Diagram */}
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '24px', width: '100%', marginBottom: '48px' }}>
        
        {/* Node 1: Action (Teal) */}
        <DiagramNode 
          stepTitle="Step 1: Trade"
          headline="S&P 500 Options"
          desc="Buys and sells offsetting contracts simultaneously."
          icon={<ArrowRightLeft color={COLORS.BG_BASE} size={56} strokeWidth={2.5} />}
          accentColor={COLORS.ACCENT_DETAIL}
          delay={20}
        />

        {/* Arrow 1 */}
        <div style={{ transform: `scale(${arrow1})`, opacity: arrow1 }}>
          <ArrowRight color={COLORS.INK_TERTIARY} size={64} strokeWidth={3} />
        </div>

        {/* Node 2: Mechanism (Slate/Neutralized Risk) */}
        <DiagramNode 
          stepTitle="Step 2: Offset"
          headline="The Box Spread"
          desc="Contracts cancel out all market risk entirely."
          icon={<ShieldCheck color={COLORS.BG_BASE} size={56} strokeWidth={2.5} />}
          accentColor={COLORS.ACCENT_NEUTRAL}
          delay={60}
        />

        {/* Arrow 2 */}
        <div style={{ transform: `scale(${arrow2})`, opacity: arrow2 }}>
          <ArrowRight color={COLORS.INK_TERTIARY} size={64} strokeWidth={3} />
        </div>

        {/* Node 3: Result (Gold/Win) */}
        <DiagramNode 
          stepTitle="Step 3: Result"
          headline="Synthetic Yield"
          desc="Locks in a guaranteed return matching T-Bills."
          icon={<TrendingUp color={COLORS.BG_BASE} size={56} strokeWidth={3} />}
          accentColor={COLORS.ACCENT_HERO}
          delay={100}
        />
      </div>

      {/* The Bank Analogy Callout Footer */}
      <div style={{
        backgroundColor: COLORS.BG_BASE,
        borderRadius: '32px',
        border: `3px solid ${COLORS.BG_RECESSED}`,
        padding: '36px 48px',
        display: 'flex',
        alignItems: 'center',
        gap: '32px',
        transform: `translateY(${interpolate(analogyPop, [0, 1], [40, 0])}px)`,
        opacity: analogyPop,
        boxShadow: 'inset 0 4px 8px rgba(30, 27, 22, 0.02)'
      }}>
        <div style={{ backgroundColor: COLORS.BG_ELEVATED, padding: '24px', borderRadius: '50%', border: `2px solid ${COLORS.BG_RECESSED}` }}>
          <Building2 color={COLORS.INK_SECONDARY} size={56} strokeWidth={2.5} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontFamily: FONTS.main, fontSize: '56px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
            The Bank Analogy
          </span>
          <span style={{ fontFamily: FONTS.main, fontSize: '48px', fontWeight: 500, color: COLORS.INK_SECONDARY }}>
            Like a bank taking deposits at low rates and lending at higher rates, you capture the spread.
          </span>
        </div>
      </div>

    </EditorialLeftZone>
  );
};

// --- BEAT 3: QUICK FACTS DASHBOARD ---
const QuickFactCard: React.FC<{ label: string; value: string; desc: string; icon: React.ReactNode; delay: number }> = ({ label, value, desc, icon, delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const pop = spring({ frame: frame - delay, fps, config: SPRING_CONFIG });

  return (
    <div style={{
      flex: 1,
      backgroundColor: COLORS.BG_ELEVATED,
      borderRadius: '40px',
      border: `3px solid ${COLORS.BG_RECESSED}`,
      padding: '48px',
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      transform: `translateY(${interpolate(pop, [0, 1], [40, 0])}px)`,
      opacity: pop,
      boxShadow: '0 24px 48px rgba(30, 27, 22, 0.04)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontFamily: FONTS.main, fontSize: '48px', fontWeight: 800, color: COLORS.INK_TERTIARY, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
          {label}
        </span>
        <div style={{ backgroundColor: COLORS.BG_BASE, borderRadius: '50%', padding: '16px', border: `2px solid ${COLORS.BG_RECESSED}` }}>
          {icon}
        </div>
      </div>
      <div>
        <span style={{ fontFamily: FONTS.main, fontSize: '80px', fontWeight: 900, color: COLORS.INK_PRIMARY, letterSpacing: '-0.02em', lineHeight: 1.1, display: 'block', marginBottom: '8px' }}>
          {value}
        </span>
        <span style={{ fontFamily: FONTS.main, fontSize: '48px', fontWeight: 500, color: COLORS.INK_SECONDARY }}>
          {desc}
        </span>
      </div>
    </div>
  );
};

const QuickFactsSequence: React.FC = () => {
  return (
    <EditorialLeftZone>
      <SectionHeader 
        title="BOXX Quick Facts" 
        subtitle="Key Fund Metrics" 
        icon={<Package color={COLORS.ACCENT_DETAIL} size={80} strokeWidth={2.5} />} 
        delay={10}
      />
      <div style={{ display: 'flex', flexDirection: 'row', gap: '32px', width: '100%' }}>
        <QuickFactCard 
          label="Management"
          value="Alpha Architect"
          desc="Creator of the fund"
          icon={<UserCheck color={COLORS.ACCENT_DETAIL} size={48} />}
          delay={30}
        />
        <QuickFactCard 
          label="Inception"
          value="2022"
          desc="Recent market launch"
          icon={<Rocket color={COLORS.ACCENT_DETAIL} size={48} />}
          delay={50}
        />
        <QuickFactCard 
          label="Distributions"
          value="Zero"
          desc="Yield compounds internally"
          icon={<LineChart color={COLORS.ACCENT_HERO} size={48} />}
          delay={70}
        />
      </div>
    </EditorialLeftZone>
  );
};

// --- MAIN COMPOSITION ---
export default function BOXXOverviewScene() {
  return (
    <AbsoluteFill style={{ overflow: 'hidden' }}>
      
      {/* Background */}
      <Sequence from={0}>
        <EditorialBackground />
      </Sequence>

      <AbsoluteFill>
        
        {/* BEAT 1: Target Audience (Frames 0 - 400, ~13s) */}
        <Sequence from={0} durationInFrames={400}>
          <TargetAudienceSequence />
        </Sequence>

        {/* BEAT 2: Box Spread Horizontal Diagram (Frames 400 - 950, ~18s) */}
        <Sequence from={400} durationInFrames={550}>
          <MechanicsVisualSequence />
        </Sequence>

        {/* BEAT 3: Quick Facts (Frames 950+) */}
        <Sequence from={950}>
          <QuickFactsSequence />
        </Sequence>

      </AbsoluteFill>

    </AbsoluteFill>
  );
}