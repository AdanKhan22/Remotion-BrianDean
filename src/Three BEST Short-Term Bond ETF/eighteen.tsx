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
  ShieldAlert, 
  Map, 
  Search, 
  Users 
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
  ACCENT_PRIMARY: '#413d26', // Deep Forest Green (Used for solid blocks/shapes)
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
        paddingLeft: '240px',
        paddingRight: '240px',
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
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px', transform: `translateY(${interpolate(pop, [0, 1], [40, 0])}px)`, opacity: pop, width: '100%', marginBottom: '80px' }}>
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

// --- DISCLAIMER ROW COMPONENT ---
const DisclaimerRow: React.FC<{ 
  title: string; 
  text: string;
  icon: React.ReactNode; 
  delay: number; 
  isHero?: boolean;
}> = ({ title, text, icon, delay, isHero }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Smooth slide up
  const slideIn = spring({ frame: frame - delay, fps, config: { stiffness: 80, damping: 18 } });
  
  const bg = isHero ? COLORS.ACCENT_PRIMARY : COLORS.BG_ELEVATED;
  const titleColor = isHero ? COLORS.BG_BASE : COLORS.INK_PRIMARY;
  const textColor = isHero ? COLORS.BG_RECESSED : COLORS.INK_SECONDARY;
  const borderColor = isHero ? COLORS.ACCENT_PRIMARY : COLORS.BG_RECESSED;
  const iconBg = isHero ? 'rgba(255,255,255,0.1)' : COLORS.BG_RECESSED;

  return (
    <div 
      style={{ 
        backgroundColor: bg,
        padding: '56px 80px',
        borderRadius: '48px',
        border: `2px solid ${borderColor}`,
        display: 'flex',
        alignItems: 'center',
        gap: '64px',
        width: '100%',
        maxWidth: '2200px', // Constrain width for ultrawide 4K readability
        boxShadow: isHero ? '0 30px 60px rgba(27, 67, 50, 0.2)' : '0 10px 30px rgba(30, 27, 22, 0.05)',
        transform: `translateY(${interpolate(slideIn, [0, 1], [40, 0])}px)`,
        opacity: slideIn,
      }}
    >
      <div style={{ backgroundColor: iconBg, padding: '32px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0 }}>
        {React.cloneElement(icon as React.ReactElement<any>, { color: isHero ? COLORS.BG_BASE : COLORS.INK_PRIMARY, size: 80, strokeWidth: 2 })}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <span style={{ fontFamily: FONTS.main, fontSize: '72px', fontWeight: 800, color: titleColor, lineHeight: 1.1, letterSpacing: '-0.01em' }}>
          {title}
        </span>
        <span style={{ fontFamily: FONTS.main, fontSize: '56px', fontWeight: 500, color: textColor, lineHeight: 1.4 }}>
          {text}
        </span>
      </div>
    </div>
  );
};

// --- MAIN SEQUENCE ---
const DisclaimerSequence: React.FC = () => {
  return (
    <FullScreenCenteredZone>
      
      {/* Intro Header */}
      <CenteredHeader 
        title="Disclaimer" 
        subtitle="Educational Tutorial Only" 
        icon={<ShieldAlert color={COLORS.ACCENT_WARM} size={80} strokeWidth={2.5} />} 
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', width: '100%', alignItems: 'center' }}>
        
        {/* Point 1 */}
        <DisclaimerRow 
          title="Not Investment Advice" 
          text="This is a tutorial on how to purchase an ETF, not a personalized recommendation."
          icon={<Map />} 
          delay={20} 
        />
        
        {/* Point 2 */}
        <DisclaimerRow 
          title="Do Your Due Diligence" 
          text="Ensure you are choosing the best option that aligns with your specific financial goals and risk tolerance."
          icon={<Search />} 
          delay={50} 
        />
        
        {/* Point 3 - Highlighted */}
        <DisclaimerRow 
          title="Consult A Professional" 
          text="Always speak with a certified financial advisor before making any major investment decisions."
          icon={<Users />} 
          delay={80} 
          isHero={true}
        />
        
      </div>
    </FullScreenCenteredZone>
  );
};

// --- MAIN COMPOSITION ---
export default function FullScreenDisclaimerScene() {
  return (
    <AbsoluteFill style={{ overflow: 'hidden' }}>
      
      <Sequence from={0}>
        <EditorialBackground />
      </Sequence>

      <AbsoluteFill>
        <Sequence from={0}>
          <DisclaimerSequence />
        </Sequence>
      </AbsoluteFill>

    </AbsoluteFill>
  );
}