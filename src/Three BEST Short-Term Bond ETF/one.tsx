/**
 * REASONING STEP (v3 + Background Depth Update)
 * 1. Background Enhancement: Added a static SVG dot grid pattern combined with a soft warm radial lighting gradient. This creates rich physical depth across the beige canvas without distracting animation.
 * 2. Visual Mechanism check:
 *    - Beat 1 (Mechanics): Icon-anchored panels detailing maturities, rollover, and liquidity with staggered spring entrances.
 *    - Beat 2 (Yield Gap): Side-by-side comparison cards (accent-negative for 0.5% vs accent-hero for 4.0%+ yield win).
 *    - Beat 3 (HYSA Analogy & Tax): Hero landmark card + tax advantage banner.
 * 3. Topic Structure: Chapter header opens the topic ("Short-Term Bond ETFs").
 * 4. Pacing & Font Sizes: Scaled up for 4K display with large, clear text (56px–144px) and spacious frame pacing (450+ frames per beat) so animations breathe naturally.
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
  HelpCircle,
  Timer,
  RefreshCcw,
  Droplets,
  Scale,
  Landmark,
  ShieldCheck,
  TrendingDown,
  TrendingUp
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
  ACCENT_NEGATIVE: '#B5533C', // Muted brick (Risk, downside)
  ACCENT_DETAIL: '#3C6E71',   // Muted teal (Supporting detail)
  ACCENT_NEUTRAL: '#8C8474',  // De-emphasized
};

const FONTS = {
  main: '"Inter", "DM Sans", sans-serif',
};

// V3 standard physics - smooth, weighty spring
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
        paddingLeft: '160px',
        paddingRight: '160px',
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
      <svg
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          opacity: 0.22,
        }}
      >
        <defs>
          <pattern
            id="editorial-dot-grid"
            x="0"
            y="0"
            width="48"
            height="48"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="6" cy="6" r="2.5" fill={COLORS.INK_TERTIARY} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#editorial-dot-grid)" />
      </svg>

      {/* Subtle Warm Lighting Radial Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at 35% 30%, rgba(250, 246, 236, 0.75) 0%, rgba(234, 227, 211, 0.45) 100%)`,
          pointerEvents: 'none',
        }}
      />
    </AbsoluteFill>
  );
};

// --- CHAPTER HEADER (V3 SPEC) ---
const SectionHeader: React.FC<{ title: string; subtitle: string; icon: React.ReactNode; delay?: number }> = ({ title, subtitle, icon, delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const pop = spring({ frame: frame - delay, fps, config: SPRING_CONFIG });

  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: '48px', 
      transform: `translateY(${interpolate(pop, [0, 1], [40, 0])}px)`, 
      opacity: pop, 
      width: '100%', 
      marginBottom: '80px' 
    }}>
      <div style={{ 
        backgroundColor: COLORS.BG_ELEVATED, 
        borderRadius: '50%', 
        width: '160px', 
        height: '160px', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        border: `3px solid ${COLORS.BG_RECESSED}`, 
        flexShrink: 0,
        boxShadow: '0 24px 48px rgba(30, 27, 22, 0.06)'
      }}>
        {icon}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h2 style={{ 
          fontFamily: FONTS.main, 
          fontSize: '120px', 
          fontWeight: 800, 
          color: COLORS.INK_PRIMARY, 
          margin: 0, 
          letterSpacing: '-0.03em', 
          lineHeight: 1.05 
        }}>
          {title}
        </h2>
        <span style={{ 
          fontFamily: FONTS.main, 
          fontSize: '64px', 
          fontWeight: 700, 
          color: COLORS.ACCENT_DETAIL, 
          textTransform: 'uppercase', 
          letterSpacing: '0.06em', 
          marginTop: '12px'
        }}>
          {subtitle}
        </span>
      </div>
    </div>
  );
};

// --- BEAT 1: DEFINITION PANELS ---
const MechanicItem: React.FC<{ title: string; desc: string; icon: React.ReactNode; delay: number }> = ({ title, desc, icon, delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const slideIn = spring({ frame: frame - delay, fps, config: SPRING_CONFIG });

  return (
    <div
      style={{
        backgroundColor: COLORS.BG_ELEVATED,
        borderRadius: '40px',
        border: `2px solid ${COLORS.BG_RECESSED}`,
        padding: '56px 72px',
        display: 'flex',
        alignItems: 'center',
        gap: '64px',
        width: '100%',
        transform: `translateX(${interpolate(slideIn, [0, 1], [-60, 0])}px)`,
        opacity: slideIn,
        boxShadow: '0 32px 64px rgba(30, 27, 22, 0.04)',
      }}
    >
      <div style={{ 
        backgroundColor: COLORS.BG_BASE, 
        border: `2px solid ${COLORS.BG_RECESSED}`,
        borderRadius: '32px', 
        width: '128px', 
        height: '128px', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        flexShrink: 0 
      }}>
        {icon}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <span style={{ fontFamily: FONTS.main, fontSize: '80px', fontWeight: 800, color: COLORS.INK_PRIMARY, letterSpacing: '-0.02em' }}>
          {title}
        </span>
        <span style={{ fontFamily: FONTS.main, fontSize: '56px', fontWeight: 500, fontStyle: 'italic', color: COLORS.INK_SECONDARY }}>
          {desc}
        </span>
      </div>
    </div>
  );
};

const MechanicsSequence: React.FC = () => {
  return (
    <EditorialLeftZone>
      <SectionHeader 
        title="Short-Term Bond ETFs" 
        subtitle="How it works under the hood" 
        icon={<HelpCircle color={COLORS.ACCENT_DETAIL} size={80} strokeWidth={2.5} />} 
        delay={10}
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '100%' }}>
        <MechanicItem 
          title="Short Maturities" 
          desc="Expires in 3 months or less" 
          icon={<Timer color={COLORS.ACCENT_DETAIL} size={64} strokeWidth={2.5} />} 
          delay={40} 
        />
        <MechanicItem 
          title="Constant Rollover" 
          desc="Reinvested automatically upon expiry" 
          icon={<RefreshCcw color={COLORS.ACCENT_DETAIL} size={64} strokeWidth={2.5} />} 
          delay={80} 
        />
        <MechanicItem 
          title="Highly Liquid" 
          desc="Easily & quickly converted to cash" 
          icon={<Droplets color={COLORS.ACCENT_DETAIL} size={64} strokeWidth={2.5} />} 
          delay={120} 
        />
      </div>
    </EditorialLeftZone>
  );
};

// --- BEAT 2: THE YIELD GAP COMPARISON ---
const ComparisonCard: React.FC<{ 
  title: string; 
  subtitle: string; 
  rate: string; 
  type: 'negative' | 'hero'; 
  delay: number;
  icon: React.ReactNode;
}> = ({ title, subtitle, rate, type, delay, icon }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const pop = spring({ frame: frame - delay, fps, config: SPRING_CONFIG });

  const isHero = type === 'hero';
  const borderColor = isHero ? COLORS.ACCENT_HERO : COLORS.ACCENT_NEGATIVE;
  const bgColor = isHero ? COLORS.BG_ELEVATED : COLORS.BG_BASE;
  const rateColor = isHero ? COLORS.ACCENT_HERO : COLORS.ACCENT_NEGATIVE;
  
  return (
    <div
      style={{
        backgroundColor: bgColor,
        borderRadius: '48px',
        border: `4px solid ${borderColor}`,
        padding: '72px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        transform: `scale(${interpolate(pop, [0, 1], [0.92, 1])})`,
        opacity: pop,
        boxShadow: isHero ? '0 40px 80px rgba(184, 134, 46, 0.14)' : '0 24px 48px rgba(181, 83, 60, 0.06)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background watermark icon for depth */}
      <div style={{ position: 'absolute', right: '-5%', top: '-30%', opacity: 0.04, transform: 'scale(3.5)' }}>
         {icon}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', zIndex: 1 }}>
        <span style={{ fontFamily: FONTS.main, fontSize: '56px', fontWeight: 800, color: COLORS.INK_TERTIARY, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          {subtitle}
        </span>
        <span style={{ fontFamily: FONTS.main, fontSize: '96px', fontWeight: 900, color: COLORS.INK_PRIMARY, letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}>
          {title}
        </span>
      </div>
      
      <div style={{ 
        backgroundColor: COLORS.BG_BASE, 
        border: `3px solid ${isHero ? 'rgba(184, 134, 46, 0.25)' : 'rgba(181, 83, 60, 0.25)'}`,
        padding: '40px 80px', 
        borderRadius: '32px', 
        display: 'flex', 
        alignItems: 'center',
        gap: '32px',
        zIndex: 1,
        boxShadow: 'inset 0 8px 16px rgba(30, 27, 22, 0.03)'
      }}>
        {icon}
        <span style={{ fontFamily: FONTS.main, fontSize: '144px', fontWeight: 900, color: rateColor, lineHeight: 1, letterSpacing: '-0.03em' }}>
          {rate}
        </span>
      </div>
    </div>
  );
};

const YieldComparisonSequence: React.FC = () => {
  return (
    <EditorialLeftZone>
      <SectionHeader 
        title="The Yield Gap" 
        subtitle="Uninvested Funds Drag Down Returns" 
        icon={<Scale color={COLORS.ACCENT_HERO} size={80} strokeWidth={2.5} />} 
        delay={10}
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '56px', width: '100%' }}>
        <ComparisonCard 
          title="Standard Brokerage" 
          subtitle="Idle Cash Accounts" 
          rate="~0.5%" 
          type="negative" 
          delay={40}
          icon={<TrendingDown color={COLORS.ACCENT_NEGATIVE} size={80} strokeWidth={2.5} />} 
        />
        <ComparisonCard 
          title="Short-Term Bond ETF" 
          subtitle="Safe Asset Storage" 
          rate="4.0%+" 
          type="hero" 
          delay={90}
          icon={<TrendingUp color={COLORS.ACCENT_HERO} size={80} strokeWidth={2.5} />} 
        />
      </div>
    </EditorialLeftZone>
  );
};

// --- BEAT 3: HYSA & TAX ADVANTAGES ---
const TaxAdvantageSequence: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const cardPop = spring({ frame: frame - 20, fps, config: SPRING_CONFIG });
  const textPop = spring({ frame: frame - 70, fps, config: SPRING_CONFIG });

  return (
    <EditorialLeftZone>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '64px', width: '100%', height: '100%' }}>
        
        <div
          style={{
            backgroundColor: COLORS.BG_ELEVATED,
            borderRadius: '64px',
            border: `3px solid ${COLORS.BG_RECESSED}`,
            padding: '96px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '80px',
            width: '100%',
            transform: `translateY(${interpolate(cardPop, [0, 1], [60, 0])}px)`,
            opacity: cardPop,
            boxShadow: '0 48px 96px rgba(30, 27, 22, 0.06)',
          }}
        >
          <div style={{ 
            backgroundColor: COLORS.ACCENT_DETAIL, 
            borderRadius: '48px', 
            width: '240px', 
            height: '240px', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            flexShrink: 0,
            boxShadow: '0 24px 48px rgba(60, 110, 113, 0.3)'
          }}>
            <Landmark color={COLORS.BG_BASE} size={120} strokeWidth={1.5} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontFamily: FONTS.main, fontSize: '64px', fontWeight: 600, color: COLORS.INK_SECONDARY, letterSpacing: '0.03em', marginBottom: '24px', textTransform: 'uppercase' }}>
              Think of it like a...
            </span>
            <span style={{ fontFamily: FONTS.main, fontSize: '144px', fontWeight: 900, color: COLORS.INK_PRIMARY, letterSpacing: '-0.03em', lineHeight: 1.05 }}>
              High-Yield<br/>Savings Account
            </span>
          </div>
        </div>

        <div
          style={{
            backgroundColor: COLORS.BG_BASE,
            border: `4px solid ${COLORS.ACCENT_HERO}`,
            borderRadius: '48px',
            padding: '64px 80px',
            display: 'flex',
            alignItems: 'center',
            gap: '56px',
            width: '100%',
            transform: `translateY(${interpolate(textPop, [0, 1], [60, 0])}px)`,
            opacity: textPop,
            boxShadow: '0 32px 64px rgba(184, 134, 46, 0.1)',
          }}
        >
          <ShieldCheck color={COLORS.ACCENT_HERO} size={104} strokeWidth={2.5} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontFamily: FONTS.main, fontSize: '72px', fontWeight: 800, color: COLORS.INK_PRIMARY, letterSpacing: '-0.02em' }}>
              But optimized for <span style={{ color: COLORS.ACCENT_HERO }}>Tax Advantages</span>
            </span>
            <span style={{ fontFamily: FONTS.main, fontSize: '56px', fontWeight: 500, fontStyle: 'italic', color: COLORS.INK_SECONDARY, marginTop: '16px' }}>
              We'll break down the tax mechanics shortly.
            </span>
          </div>
        </div>

      </div>
    </EditorialLeftZone>
  );
};

// --- MAIN COMPOSITION ---
export default function ShortTermBondETFScene() {
  return (
    <AbsoluteFill style={{ overflow: 'hidden' }}>
      
      {/* Background with subtle Dot Pattern & Radial Glow */}
      <Sequence from={0}>
        <EditorialBackground />
      </Sequence>

      <AbsoluteFill>
        
        {/* BEAT 1: ETF Mechanics (450 frames / ~15s to match VO pace) */}
        <Sequence from={0} durationInFrames={450}>
          <MechanicsSequence />
        </Sequence>

        {/* BEAT 2: Yield Gap Comparison (400 frames / ~13s) */}
        <Sequence from={450} durationInFrames={400}>
          <YieldComparisonSequence />
        </Sequence>

        {/* BEAT 3: HYSA Analogy & Tax (Remaining duration) */}
        <Sequence from={850}>
          <TaxAdvantageSequence />
        </Sequence>

      </AbsoluteFill>

    </AbsoluteFill>
  );
}