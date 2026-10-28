/**
 * REASONING STEP (v3 + Mobile Legibility & Concept Visualization)
 * 1. Context Recognition: This chunk serves as an introductory or bridge segment mapping out the broader "Bond Universe" before zooming into "Short-Term ETFs" and explaining their two primary use cases.
 * 2. Visual Structure:
 *    - Beat 1: "The Bond Universe" 2x2 Grid. Visualizes the 4 major types (Short, Total, Long, High Yield). A spring-driven highlight effect isolates "Short Duration" in Gold (ACCENT_HERO) while dimming the others, visually matching the script's pivot.
 *    - Beat 2: "The Two Use Cases" Horizontal Split. Explicitly maps the two investor goals ("Park Cash for the Dip" and "Earn on Uninvested Cash") with massive iconography and text.
 * 3. Mobile Typography: Adheres strictly to the massive 4K scaling (min 56px text, 72px+ headers).
 * 4. Color Payload:
 *    - Slate (ACCENT_NEUTRAL) for the generic bond universe.
 *    - Gold (ACCENT_HERO) to highlight the focal point (Short-Term).
 *    - Teal (ACCENT_DETAIL) & Gold for the two specific use cases.
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
  PieChart,
  Timer,
  BarChart,
  TrendingUp,
  Target,
  ArrowDownCircle,
  Flame,
  Wallet
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
  ACCENT_HERO: '#B8862E',     // Muted gold (The focal point, winning strategy)
  ACCENT_NEGATIVE: '#B5533C', // Muted brick (Risk, downside - unused here)
  ACCENT_DETAIL: '#3C6E71',   // Muted teal (Supporting mechanics)
  ACCENT_NEUTRAL: '#8C8474',  // Slate grey (Baseline universe categories)
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
          <pattern id="intro-dot-grid" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
            <circle cx="6" cy="6" r="2.5" fill={COLORS.INK_TERTIARY} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#intro-dot-grid)" />
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
    <div style={{ display: 'flex', alignItems: 'center', gap: '40px', transform: `translateY(${interpolate(pop, [0, 1], [40, 0])}px)`, opacity: pop, width: '100%', marginBottom: '56px' }}>
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

// --- BEAT 1: THE BOND ETF UNIVERSE ---
const UniverseCard: React.FC<{
  title: string;
  icon: React.ReactNode;
  isTarget: boolean;
  delay: number;
}> = ({ title, icon, isTarget, delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const entrance = spring({ frame: frame - delay, fps, config: SPRING_CONFIG });
  
  // At frame 120, we trigger the highlight effect for the target (Short Duration)
  const highlightTrigger = spring({ frame: frame - 120, fps, config: SPRING_CONFIG });

  // Dynamic Styles based on whether it is the target focus or not
  const scale = isTarget ? interpolate(highlightTrigger, [0, 1], [1, 1.05]) : 1;
  const opacity = !isTarget ? interpolate(highlightTrigger, [0, 1], [1, 0.4]) : 1;
  
  const borderColor = isTarget 
    ? interpolateColors(highlightTrigger, [0, 1], [COLORS.BG_RECESSED, COLORS.ACCENT_HERO]) 
    : COLORS.BG_RECESSED;
    
  const bgColor = isTarget 
    ? interpolateColors(highlightTrigger, [0, 1], [COLORS.BG_ELEVATED, COLORS.BG_BASE]) 
    : COLORS.BG_ELEVATED;

  const textColor = isTarget
    ? interpolateColors(highlightTrigger, [0, 1], [COLORS.INK_PRIMARY, COLORS.ACCENT_HERO])
    : COLORS.INK_PRIMARY;

  const iconColor = isTarget
    ? interpolateColors(highlightTrigger, [0, 1], [COLORS.INK_SECONDARY, COLORS.ACCENT_HERO])
    : COLORS.INK_SECONDARY;

  return (
    <div style={{
      flex: 1,
      backgroundColor: bgColor,
      borderRadius: '40px',
      border: `4px solid ${borderColor}`,
      padding: '48px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '24px',
      transform: `translateY(${interpolate(entrance, [0, 1], [40, 0])}px) scale(${scale})`,
      opacity: entrance * opacity,
      boxShadow: isTarget ? `0 32px 64px ${COLORS.ACCENT_HERO}15` : '0 16px 32px rgba(30, 27, 22, 0.03)',
    }}>
      <div style={{ color: iconColor, transform: 'scale(1.5)', marginBottom: '16px' }}>
        {icon}
      </div>
      <span style={{ fontFamily: FONTS.main, fontSize: '56px', fontWeight: 800, color: textColor, textAlign: 'center', lineHeight: 1.1 }}>
        {title}
      </span>
    </div>
  );
};

const UniverseSequence: React.FC = () => {
  return (
    <EditorialLeftZone>
      <SectionHeader 
        title="The Bond Universe" 
        subtitle="Zooming in on the best option" 
        icon={<PieChart color={COLORS.ACCENT_DETAIL} size={80} strokeWidth={2.5} />} 
        delay={10}
      />
      
      {/* 2x2 Grid of Bond Types */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', width: '100%', height: '600px' }}>
        <UniverseCard 
          title="Short Duration" 
          icon={<Timer size={64} strokeWidth={2} />} 
          isTarget={true} 
          delay={20} 
        />
        <UniverseCard 
          title="Total Market" 
          icon={<BarChart size={64} strokeWidth={2} />} 
          isTarget={false} 
          delay={30} 
        />
        <UniverseCard 
          title="Long Duration" 
          icon={<TrendingUp size={64} strokeWidth={2} />} 
          isTarget={false} 
          delay={40} 
        />
        <UniverseCard 
          title="High Yield" 
          icon={<Flame size={64} strokeWidth={2} />} 
          isTarget={false} 
          delay={50} 
        />
      </div>
    </EditorialLeftZone>
  );
};

// --- BEAT 2: THE TWO CORE USE CASES ---
const UseCaseCard: React.FC<{
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
    <div style={{
      flex: 1,
      backgroundColor: COLORS.BG_ELEVATED,
      borderRadius: '48px',
      border: `4px solid ${accentColor}`,
      padding: '64px',
      display: 'flex',
      flexDirection: 'column',
      gap: '32px',
      transform: `translateY(${interpolate(pop, [0, 1], [40, 0])}px)`,
      opacity: pop,
      boxShadow: `0 32px 64px ${accentColor}15`
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
        <div style={{ backgroundColor: accentColor, padding: '24px', borderRadius: '32px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0, boxShadow: `0 16px 32px ${accentColor}40` }}>
          {icon}
        </div>
        <span style={{ fontFamily: FONTS.main, fontSize: '52px', fontWeight: 800, color: accentColor, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          {label}
        </span>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
        <span style={{ fontFamily: FONTS.main, fontSize: '80px', fontWeight: 900, color: COLORS.INK_PRIMARY, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
          {headline}
        </span>
        <span style={{ fontFamily: FONTS.main, fontSize: '56px', fontWeight: 500, color: COLORS.INK_SECONDARY, lineHeight: 1.4 }}>
          {desc}
        </span>
      </div>
    </div>
  );
};

const UseCasesSequence: React.FC = () => {
  return (
    <EditorialLeftZone>
      <SectionHeader 
        title="Why Short-Term?" 
        subtitle="Two Powerful Core Strategies" 
        icon={<Target color={COLORS.ACCENT_HERO} size={80} strokeWidth={2.5} />} 
        delay={10}
      />
      
      <div style={{ display: 'flex', flexDirection: 'row', gap: '48px', width: '100%', minHeight: '600px' }}>
        
        <UseCaseCard 
          label="Strategy 1"
          headline="Park Cash to Buy the Dip"
          desc="Safely store your capital with minimal price volatility while you wait for the next market pullback."
          icon={<ArrowDownCircle color={COLORS.BG_BASE} size={64} strokeWidth={2.5} />}
          accentColor={COLORS.ACCENT_DETAIL}
          delay={25}
        />

        <UseCaseCard 
          label="Strategy 2"
          headline="Earn on Uninvested Cash"
          desc="Stop letting standard brokerages pay you 0.5%. Force your idle cash to earn high yields automatically."
          icon={<Wallet color={COLORS.BG_BASE} size={64} strokeWidth={2.5} />}
          accentColor={COLORS.ACCENT_HERO}
          delay={50}
        />

      </div>
    </EditorialLeftZone>
  );
};

// --- MAIN COMPOSITION ---
export default function IntroContextScene() {
  return (
    <AbsoluteFill style={{ overflow: 'hidden' }}>
      
      <Sequence from={0}>
        <EditorialBackground />
      </Sequence>

      <AbsoluteFill>
        
        {/* BEAT 1: The Bond Universe & Highlighting Short Duration (Frames 0 - 400, ~13s) */}
        <Sequence from={0} durationInFrames={400}>
          <UniverseSequence />
        </Sequence>

        {/* BEAT 2: The Two Core Use Cases (Frames 400+) */}
        <Sequence from={400}>
          <UseCasesSequence />
        </Sequence>

      </AbsoluteFill>

    </AbsoluteFill>
  );
}