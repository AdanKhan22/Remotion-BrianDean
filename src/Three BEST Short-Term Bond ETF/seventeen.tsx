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
  UserPlus, 
  Landmark, 
  TrendingUp, 
  ChevronRight,
  Map
} from 'lucide-react';

// --- EDITORIAL BRAND CONSTANTS ---
const COLORS = {
  // Base Surfaces
  BG_BASE: '#F3EEE4',
  BG_ELEVATED: '#FAF6EC',
  BG_RECESSED: '#EAE3D3',
  BG_WASH_START: '#F6F1E6',
  BG_WASH_END: '#EDE5D2',
  
  // Inks (Strictly no green fonts)
  INK_PRIMARY: '#1E1B16',
  INK_SECONDARY: '#5C564A',
  INK_TERTIARY: '#8C8474',
  
  // Accents
  ACCENT_PRIMARY: '#594800', // Deep Forest Green
  ACCENT_WARM: '#C1622D',    // Burnt Terracotta
};

const FONTS = {
  main: '"Azo Sans Test", "Inter", "DM Sans", sans-serif',
};

// --- FULL SCREEN WRAPPER (4K SCALE) ---
const FullScreenCenteredZone: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: '160px',
        paddingRight: '160px',
        boxSizing: 'border-box',
      }}
    >
      {children}
    </div>
  );
};

// --- SUBSEQUENCE: BACKGROUND WASH ---
const EditorialBackground: React.FC = () => {
  return (
    <AbsoluteFill 
      style={{ 
        background: `linear-gradient(135deg, ${COLORS.BG_WASH_START} 0%, ${COLORS.BG_WASH_END} 100%)` 
      }} 
    />
  );
};

// --- CENTERED SECTION HEADER ---
const CenteredHeader: React.FC<{ title: string; subtitle: string; icon: React.ReactNode }> = ({ title, subtitle, icon }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  // Smooth, grounded editorial spring
  const pop = spring({ frame, fps, config: { stiffness: 70, damping: 20 } });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px', transform: `translateY(${interpolate(pop, [0, 1], [40, 0])}px)`, opacity: pop, width: '100%', marginBottom: '100px' }}>
      <div style={{ backgroundColor: COLORS.BG_ELEVATED, borderRadius: '50%', width: '160px', height: '160px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: `2px solid ${COLORS.BG_RECESSED}`, boxShadow: '0 20px 40px rgba(30, 27, 22, 0.05)' }}>
        {icon}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 style={{ fontFamily: FONTS.main, fontSize: '112px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, letterSpacing: '-0.02em', lineHeight: 1.1, textAlign: 'center' }}>
          {title}
        </h2>
        <span style={{ fontFamily: FONTS.main, fontSize: '64px', fontWeight: 500, color: COLORS.INK_SECONDARY, textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'center', marginTop: '16px' }}>
          {subtitle}
        </span>
      </div>
    </div>
  );
};

// --- ROADMAP STEP COMPONENT ---
const RoadmapStep: React.FC<{ 
  stepNum: string;
  title: string; 
  desc: string;
  icon: React.ReactNode; 
  delay: number; 
  isHero?: boolean;
}> = ({ stepNum, title, desc, icon, delay, isHero }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Smooth entrance
  const slideIn = spring({ frame: frame - delay, fps, config: { stiffness: 70, damping: 18 } });
  
  const bg = isHero ? COLORS.ACCENT_PRIMARY : COLORS.BG_ELEVATED;
  const titleColor = isHero ? COLORS.BG_BASE : COLORS.INK_PRIMARY;
  const descColor = isHero ? COLORS.BG_RECESSED : COLORS.INK_SECONDARY;
  const borderColor = isHero ? COLORS.ACCENT_PRIMARY : COLORS.BG_RECESSED;
  const iconBg = isHero ? 'rgba(255,255,255,0.1)' : COLORS.BG_RECESSED;

  return (
    <div 
      style={{ 
        backgroundColor: bg,
        padding: '64px 48px',
        borderRadius: '48px',
        border: `2px solid ${borderColor}`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '32px',
        flex: 1, // Ensures all 3 cards share the horizontal space evenly
        boxShadow: isHero ? '0 30px 60px rgba(27, 67, 50, 0.2)' : '0 10px 30px rgba(30, 27, 22, 0.05)',
        transform: `translateY(${interpolate(slideIn, [0, 1], [40, 0])}px)`,
        opacity: slideIn,
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
        <span style={{ fontFamily: FONTS.main, fontSize: '40px', fontWeight: 700, color: descColor, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          Step {stepNum}
        </span>
        <div style={{ backgroundColor: iconBg, padding: '32px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {React.cloneElement(icon as React.ReactElement<any>, { color: isHero ? COLORS.BG_BASE : COLORS.INK_PRIMARY, size: 80, strokeWidth: 2 })}
        </div>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', textAlign: 'center' }}>
        <span style={{ fontFamily: FONTS.main, fontSize: '64px', fontWeight: 800, color: titleColor, lineHeight: 1.1, letterSpacing: '-0.01em' }}>
          {title}
        </span>
        <span style={{ fontFamily: FONTS.main, fontSize: '48px', fontWeight: 500, color: descColor, lineHeight: 1.3 }}>
          {desc}
        </span>
      </div>
    </div>
  );
};

// --- CONNECTING ARROW COMPONENT ---
const ConnectionArrow: React.FC<{ delay: number }> = ({ delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const pop = spring({ frame: frame - delay, fps, config: { stiffness: 80, damping: 18 } });

  return (
    <div 
      style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        transform: `scale(${interpolate(pop, [0, 1], [0.5, 1])})`,
        opacity: pop,
        flexShrink: 0
      }}
    >
      <ChevronRight color={COLORS.INK_TERTIARY} size={80} strokeWidth={2} />
    </div>
  );
};

// --- MAIN SEQUENCE ---
const RoadmapSequence: React.FC = () => {
  return (
    <FullScreenCenteredZone>
      
      {/* Intro Header */}
      <CenteredHeader 
        title="Beginner Tutorial" 
        subtitle="The Complete Roadmap" 
        icon={<Map color={COLORS.ACCENT_WARM} size={80} strokeWidth={2.5} />} 
      />

      <div style={{ display: 'flex', alignItems: 'center', gap: '48px', width: '100%', maxWidth: '3200px' }}>
        
        {/* Step 1 */}
        <RoadmapStep 
          stepNum="01"
          title="Open Account" 
          desc="Set up your brokerage profile"
          icon={<UserPlus />} 
          delay={20} 
        />

        <ConnectionArrow delay={45} />
        
        {/* Step 2 */}
        <RoadmapStep 
          stepNum="02"
          title="Fund Account" 
          desc="Transfer money securely"
          icon={<Landmark />} 
          delay={55} 
        />

        <ConnectionArrow delay={80} />
        
        {/* Step 3 - Highlighted End Goal */}
        <RoadmapStep 
          stepNum="03"
          title="Invest in S&P 500" 
          desc="Buy your first tracking ETF"
          icon={<TrendingUp />} 
          delay={90} 
          isHero={true}
        />
        
      </div>
    </FullScreenCenteredZone>
  );
};

// --- MAIN COMPOSITION ---
export default function BeginnerRoadmapScene() {
  return (
    <AbsoluteFill style={{ overflow: 'hidden' }}>
      
      <Sequence from={0}>
        <EditorialBackground />
      </Sequence>

      <AbsoluteFill>
        <Sequence from={0}>
          <RoadmapSequence />
        </Sequence>
      </AbsoluteFill>

    </AbsoluteFill>
  );
}