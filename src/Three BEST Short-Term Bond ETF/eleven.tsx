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
  PauseCircle,
  ShieldAlert,
  Coins,
  Banknote,
  Landmark,
  TrendingUp,
  Target,
  BarChart3,
  Briefcase
} from 'lucide-react';

// --- EDITORIAL BRAND CONSTANTS ---
const COLORS = {
  // Base Surfaces
  BG_BASE: '#F3EEE4',
  BG_ELEVATED: '#FAF6EC',
  BG_RECESSED: '#EAE3D3',
  BG_WASH_START: '#F6F1E6',
  BG_WASH_END: '#EDE5D2',
  
  // Inks (All text uses these, strictly no green fonts)
  INK_PRIMARY: '#1E1B16',
  INK_SECONDARY: '#5C564A',
  INK_TERTIARY: '#8C8474',
  
  // Accents
  ACCENT_PRIMARY: '#1B4332', // Deep Forest Green (Used for shapes/backgrounds/accents)
  ACCENT_WARM: '#C1622D',    // Burnt Terracotta
};

const FONTS = {
  main: '"Azo Sans Test", "Inter", "DM Sans", sans-serif',
};

// --- STRICT 60/40 LAYOUT WRAPPER (4K SCALE) ---
const EditorialLeftZone: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '2304px', // Exactly 60% of 3840px
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: '140px',
        paddingRight: '140px',
        boxSizing: 'border-box',
        borderRight: `2px solid ${COLORS.BG_RECESSED}`, 
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

// --- GENERIC SECTION HEADER ---
const SectionHeader: React.FC<{ title: string; subtitle: string; icon: React.ReactNode }> = ({ title, subtitle, icon }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const pop = spring({ frame, fps, config: { stiffness: 70, damping: 20 } });

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '40px', transform: `translateY(${interpolate(pop, [0, 1], [30, 0])}px)`, opacity: pop, width: '100%', marginBottom: '64px' }}>
      <div style={{ backgroundColor: COLORS.BG_ELEVATED, borderRadius: '24px', padding: '32px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: `2px solid ${COLORS.BG_RECESSED}`, flexShrink: 0, boxShadow: '0 10px 30px rgba(30, 27, 22, 0.05)' }}>
        {icon}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', flexShrink: 0 }}>
        <h2 style={{ fontFamily: FONTS.main, fontSize: '96px', fontWeight: 800, color: COLORS.INK_PRIMARY, margin: 0, letterSpacing: '-0.02em', lineHeight: 1.1, whiteSpace: 'nowrap' }}>
          {title}
        </h2>
        <span style={{ fontFamily: FONTS.main, fontSize: '56px', fontWeight: 500, color: COLORS.INK_SECONDARY, textTransform: 'uppercase', letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>
          {subtitle}
        </span>
      </div>
    </div>
  );
};

// --- BEAT 1: THE MARKET PAUSE & SHIFT TO SAFETY ---
const SafeAssetCard: React.FC<{ title: string; icon: React.ReactNode; delay: number }> = ({ title, icon, delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const slideIn = spring({ frame: frame - delay, fps, config: { stiffness: 80, damping: 18 } });

  return (
    <div
      style={{
        backgroundColor: COLORS.BG_ELEVATED,
        borderRadius: '32px',
        border: `2px solid ${COLORS.BG_RECESSED}`,
        padding: '48px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '24px',
        flex: 1,
        transform: `translateY(${interpolate(slideIn, [0, 1], [40, 0])}px)`,
        opacity: slideIn,
        boxShadow: '0 20px 40px rgba(30, 27, 22, 0.05)',
      }}
    >
      <div style={{ backgroundColor: COLORS.BG_RECESSED, borderRadius: '50%', width: '120px', height: '120px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {icon}
      </div>
      <span style={{ fontFamily: FONTS.main, fontSize: '56px', fontWeight: 700, color: COLORS.INK_PRIMARY, textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'center' }}>
        {title}
      </span>
    </div>
  );
};

const ShiftToSafetySequence: React.FC = () => {
  return (
    <EditorialLeftZone>
      <SectionHeader 
        title="The Market Pause" 
        subtitle="Investors are shifting to safe assets" 
        icon={<PauseCircle color={COLORS.ACCENT_WARM} size={80} strokeWidth={2.5} />} 
      />
      <div style={{ display: 'flex', gap: '32px', width: '100%' }}>
        <SafeAssetCard title="Gold" icon={<Coins color={COLORS.INK_PRIMARY} size={64} />} delay={10} />
        <SafeAssetCard title="Cash" icon={<Banknote color={COLORS.INK_PRIMARY} size={64} />} delay={20} />
        <SafeAssetCard title="Fixed Income" icon={<Landmark color={COLORS.INK_PRIMARY} size={64} />} delay={30} />
      </div>
    </EditorialLeftZone>
  );
};

// --- BEAT 2: VIEWER INTEREST TREND ---
const TrendBar: React.FC<{ label: string; widthPct: number; isHero: boolean; delay: number }> = ({ label, widthPct, isHero, delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const fill = spring({ frame: frame - delay, fps, config: { stiffness: 60, damping: 18 }, durationInFrames: 50 });
  const opacity = spring({ frame: frame - delay, fps, config: { stiffness: 80, damping: 20 } });
  
  const currentWidth = interpolate(fill, [0, 1], [15, widthPct]);
  const barBg = isHero ? COLORS.ACCENT_PRIMARY : COLORS.BG_RECESSED;
  const textColor = isHero ? COLORS.BG_ELEVATED : COLORS.INK_PRIMARY;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', opacity }}>
      <span style={{ fontFamily: FONTS.main, fontSize: '48px', fontWeight: 600, color: COLORS.INK_SECONDARY, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        {label}
      </span>
      <div style={{ width: '100%', height: '120px', backgroundColor: 'transparent', position: 'relative' }}>
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            height: '100%',
            width: `${currentWidth}%`,
            backgroundColor: barBg,
            borderRadius: '24px',
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '32px',
            boxShadow: isHero ? '0 20px 40px rgba(27, 67, 50, 0.15)' : 'none',
          }}
        >
          {isHero && <TrendingUp color={COLORS.BG_ELEVATED} size={56} style={{ marginRight: '24px' }} />}
          <span style={{ fontFamily: FONTS.main, fontSize: '56px', fontWeight: 800, color: textColor, whiteSpace: 'nowrap' }}>
            {isHero ? 'Massive Demand' : 'Lower Demand'}
          </span>
        </div>
      </div>
    </div>
  );
};

const ViewerTrendSequence: React.FC = () => {
  return (
    <EditorialLeftZone>
      <SectionHeader 
        title="Viewer Interest" 
        subtitle="A clear signal of market sentiment" 
        icon={<BarChart3 color={COLORS.ACCENT_PRIMARY} size={80} strokeWidth={2.5} />} 
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '64px', width: '100%' }}>
        <TrendBar label="AI & Semiconductor ETFs" widthPct={35} isHero={false} delay={10} />
        <TrendBar label="Bond ETFs" widthPct={100} isHero={true} delay={25} />
      </div>
    </EditorialLeftZone>
  );
};

// --- BEAT 3: TODAY'S FOCUS (THE HOOK) ---
const CoreFocusSequence: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titlePop = spring({ frame, fps, config: { stiffness: 70, damping: 20 } });
  const cardPop = spring({ frame: frame - 15, fps, config: { stiffness: 80, damping: 18 } });
  
  return (
    <EditorialLeftZone>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '64px', width: '100%', height: '100%' }}>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px', transform: `translateY(${interpolate(titlePop, [0, 1], [40, 0])}px)`, opacity: titlePop }}>
          <Target color={COLORS.ACCENT_WARM} size={96} strokeWidth={2.5} />
          <h2 style={{ fontFamily: FONTS.main, fontSize: '80px', fontWeight: 700, color: COLORS.INK_PRIMARY, margin: 0, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Today's Focus
          </h2>
        </div>

        <div
          style={{
            backgroundColor: COLORS.BG_ELEVATED,
            borderRadius: '48px',
            border: `2px solid ${COLORS.BG_RECESSED}`,
            padding: '80px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '48px',
            width: '100%',
            transform: `scale(${interpolate(cardPop, [0, 1], [0.95, 1])})`,
            opacity: cardPop,
            boxShadow: '0 40px 100px rgba(30, 27, 22, 0.08)',
          }}
        >
          <span style={{ fontFamily: FONTS.main, fontSize: '136px', fontWeight: 900, color: COLORS.INK_PRIMARY, textAlign: 'center', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            Short-Term<br/>Bond ETFs
          </span>
          
          <div style={{ display: 'flex', gap: '32px', width: '100%' }}>
            <div style={{ flex: 1, backgroundColor: COLORS.BG_RECESSED, padding: '32px', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px' }}>
              <ShieldAlert color={COLORS.INK_PRIMARY} size={48} />
              <span style={{ fontFamily: FONTS.main, fontSize: '48px', fontWeight: 700, color: COLORS.INK_PRIMARY, textTransform: 'uppercase' }}>Park Cash</span>
            </div>
            <div style={{ flex: 1, backgroundColor: COLORS.ACCENT_PRIMARY, padding: '32px', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px' }}>
              <Briefcase color={COLORS.BG_ELEVATED} size={48} />
              <span style={{ fontFamily: FONTS.main, fontSize: '48px', fontWeight: 700, color: COLORS.BG_ELEVATED, textTransform: 'uppercase' }}>Earn Interest</span>
            </div>
          </div>
        </div>

      </div>
    </EditorialLeftZone>
  );
};

// --- MAIN COMPOSITION ---
export default function HookSequence() {
  return (
    <AbsoluteFill style={{ overflow: 'hidden' }}>
      
      <Sequence from={0}>
        <EditorialBackground />
      </Sequence>

      <AbsoluteFill>
        {/* BEAT 1: The shift away from stocks to safe assets */}
        <Sequence from={0} durationInFrames={240}>
          <ShiftToSafetySequence />
        </Sequence>

        {/* BEAT 2: The viewer trend comparing Tech vs Bonds */}
        <Sequence from={240} durationInFrames={240}>
          <ViewerTrendSequence />
        </Sequence>

        {/* BEAT 3: Landing on the core topic of the video */}
        <Sequence from={480}>
          <CoreFocusSequence />
        </Sequence>
      </AbsoluteFill>

    </AbsoluteFill>
  );
}