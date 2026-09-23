import React from 'react';
import {
  AbsoluteFill,
  Sequence,
  spring,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  Easing,
} from 'remotion';
import { Banknote, XOctagon } from 'lucide-react';

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
  ACCENT_PRIMARY: '#1B4332', // Deep Forest Green (Used for shapes/backgrounds only)
  ACCENT_WARM: '#C1622D',    // Burnt Terracotta (Used for the kinetic slashes/strikes)
};

const FONTS = {
  main: '"Azo Sans Test", "Inter", "DM Sans", sans-serif',
};

// --- DYNAMIC PHYSICS ---
// Aggressive springs for the kinetic typography "slam" effect
const SLAM_SPRING = { stiffness: 250, damping: 15, mass: 0.8 };
const SLICE_SPRING = { stiffness: 180, damping: 12 };

// --- FULL SCREEN BACKGROUND ---
const EditorialBackground: React.FC = () => {
  return (
    <AbsoluteFill 
      style={{ 
        background: `linear-gradient(135deg, ${COLORS.BG_WASH_START} 0%, ${COLORS.BG_WASH_END} 100%)` 
      }} 
    >
      {/* Subtle Data-Journalism Dot Grid for texture */}
      <svg style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0.15 }}>
        <defs>
          <pattern id="dot-grid" x="0" y="0" width="64" height="64" patternUnits="userSpaceOnUse">
            <circle cx="8" cy="8" r="3" fill={COLORS.INK_TERTIARY} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dot-grid)" />
      </svg>
    </AbsoluteFill>
  );
};

// --- BEAT 1: THE $100 HERO SLAM (Frames 0 - 75) ---
const HundredDollarSlam: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance Animations
  const topTextSlide = spring({ frame: frame - 5, fps, config: SLAM_SPRING });
  const hundredPop = spring({ frame: frame - 15, fps, config: SLAM_SPRING });
  const bottomTextSlide = spring({ frame: frame - 25, fps, config: SLAM_SPRING });

  // Exit Animation (Camera zooms aggressively INTO the $100 to transition)
  const exitZoom = spring({ frame: frame - 60, fps, config: { stiffness: 80, damping: 20 } });
  const scaleOut = interpolate(exitZoom, [0, 1], [1, 5]);
  const opacityOut = interpolate(exitZoom, [0, 0.8, 1], [1, 1, 0]);

  return (
    <AbsoluteFill style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', transform: `scale(${scaleOut})`, opacity: opacityOut }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
        
        {/* Top Intro */}
        <span 
          style={{ 
            fontFamily: FONTS.main, fontSize: '120px', fontWeight: 800, color: COLORS.INK_SECONDARY, textTransform: 'uppercase', letterSpacing: '0.1em',
            transform: `translateY(${interpolate(topTextSlide, [0, 1], [100, 0])}px)`, opacity: topTextSlide 
          }}
        >
          If you have
        </span>
        
        {/* Massive $100 Hero */}
        <div 
          style={{ 
            display: 'flex', alignItems: 'center', gap: '48px',
            transform: `scale(${interpolate(hundredPop, [0, 1], [0.5, 1])})`, opacity: hundredPop 
          }}
        >
          <div style={{ backgroundColor: COLORS.INK_PRIMARY, padding: '40px', borderRadius: '48px', transform: 'rotate(-5deg)' }}>
            <Banknote color={COLORS.BG_BASE} size={160} strokeWidth={1.5} />
          </div>
          <span style={{ fontFamily: FONTS.main, fontSize: '640px', fontWeight: 900, color: COLORS.INK_PRIMARY, lineHeight: 0.9, letterSpacing: '-0.04em' }}>
            $100
          </span>
        </div>
        
        {/* Bottom Text */}
        <div 
          style={{ 
            backgroundColor: COLORS.BG_ELEVATED, padding: '24px 64px', borderRadius: '64px', border: `4px solid ${COLORS.BG_RECESSED}`, marginTop: '32px',
            transform: `translateY(${interpolate(bottomTextSlide, [0, 1], [-100, 0])}px)`, opacity: bottomTextSlide 
          }}
        >
          <span style={{ fontFamily: FONTS.main, fontSize: '104px', fontWeight: 900, color: COLORS.INK_PRIMARY, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            To Invest
          </span>
        </div>

      </div>
    </AbsoluteFill>
  );
};

// --- BEAT 2: THE REJECTIONS (Frames 70+) ---
const RejectionRow: React.FC<{ 
  amount: string; 
  delay: number; 
  rotation: number;
}> = ({ amount, delay, rotation }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Slamming the number in
  const pop = spring({ frame: frame - delay, fps, config: SLAM_SPRING });
  
  // The violent slash through the text
  const strike = spring({ frame: frame - delay - 10, fps, config: SLICE_SPRING });
  const strikeWidth = interpolate(strike, [0, 1], [0, 110]); // Extends slightly past the text

  return (
    <div 
      style={{ 
        display: 'flex', alignItems: 'center', gap: '48px', 
        transform: `scale(${interpolate(pop, [0, 1], [1.2, 1])}) rotate(${rotation}deg)`, 
        opacity: pop 
      }}
    >
      <XOctagon color={COLORS.ACCENT_WARM} size={120} strokeWidth={2.5} />
      
      <span style={{ fontFamily: FONTS.main, fontSize: '144px', fontStyle: 'italic', fontWeight: 900, color: COLORS.ACCENT_WARM, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        NOT
      </span>
      
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        <span style={{ fontFamily: FONTS.main, fontSize: '240px', fontWeight: 900, color: COLORS.INK_TERTIARY, letterSpacing: '-0.02em', lineHeight: 1 }}>
          {amount}
        </span>
        
        {/* Kinetic Strike-through line */}
        <div 
          style={{ 
            position: 'absolute', 
            left: '-5%', 
            top: '50%', 
            height: '24px', 
            width: `${strikeWidth}%`, 
            backgroundColor: COLORS.ACCENT_WARM, 
            transform: 'translateY(-50%) rotate(-3deg)',
            borderRadius: '12px'
          }} 
        />
      </div>
    </div>
  );
};

const RejectionsSequence: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const finalSlide = spring({ frame: frame - 40, fps, config: SLAM_SPRING });

  return (
    <AbsoluteFill style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '80px' }}>
        
        <RejectionRow amount="$10,000" delay={0} rotation={-2} />
        <RejectionRow amount="$1,000" delay={15} rotation={1} />
        
        {/* Resolving the sentence */}
        <div 
          style={{ 
            alignSelf: 'center', marginTop: '64px',
            transform: `translateY(${interpolate(finalSlide, [0, 1], [80, 0])}px)`, opacity: finalSlide 
          }}
        >

        </div>

      </div>
    </AbsoluteFill>
  );
};

// --- MAIN COMPOSITION ---
export default function KineticTypographyHook() {
  return (
    <AbsoluteFill style={{ overflow: 'hidden' }}>
      
      {/* Background stays constant throughout the full-screen hook */}
      <Sequence from={0}>
        <EditorialBackground />
      </Sequence>

      <AbsoluteFill>
        {/* Beat 1: "If you have $100 to invest" - Scales up and fades out into the camera */}
        <Sequence from={0} durationInFrames={75}>
          <HundredDollarSlam />
        </Sequence>

        {/* Beat 2: The rapid rejections. Triggers right as Beat 1 zooms past the camera */}
        <Sequence from={70}>
          <RejectionsSequence />
        </Sequence>
      </AbsoluteFill>

    </AbsoluteFill>
  );
}