/**
 * REASONING STEP (v3 + Font Size Bump for Small Text)
 * 1. Targeted Font Adjustments:
 *    - Micro-details ("Paid 1st week of each month"): 36px → 52px
 *    - Card Labels ("Expense Ratio", "Annualized Yield"): 40px/44px → 56px
 *    - Card Secondary Details ("$9/yr per $10k", etc.): 44px → 60px
 *    - Subtitles & Badge Titles: 48px/52px → 64px
 * 2. Visual Hierarchy & Payload:
 *    - Kept display numbers (3.61%, $100B+, 20M+) prominent while ensuring all supporting text is effortless to read on any screen size.
 * 3. Layout Check:
 *    - Adjusted container padding and gaps slightly to accommodate the larger micro-copy cleanly without layout shifts or vertical overflow.
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
  Award,
  TrendingUp,
  Percent,
  Landmark,
  Activity,
  CalendarCheck
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
  ACCENT_HERO: '#B8862E',     // Muted gold (The win, highlighted yield)
  ACCENT_NEGATIVE: '#B5533C', // Muted brick (Risk, downside)
  ACCENT_DETAIL: '#3C6E71',   // Muted teal (Supporting detail, metrics)
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
            id="sgov-dot-grid"
            x="0"
            y="0"
            width="48"
            height="48"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="6" cy="6" r="2.5" fill={COLORS.INK_TERTIARY} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#sgov-dot-grid)" />
      </svg>

      {/* Subtle Warm Lighting Overlay */}
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

// --- CHAPTER HEADER ---
const SectionHeader: React.FC<{ title: string; subtitle: string; icon: React.ReactNode; delay?: number }> = ({ title, subtitle, icon, delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const pop = spring({ frame: frame - delay, fps, config: SPRING_CONFIG });

  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: '40px', 
      transform: `translateY(${interpolate(pop, [0, 1], [40, 0])}px)`, 
      opacity: pop, 
      width: '100%', 
      marginBottom: '48px' 
    }}>
      <div style={{ 
        backgroundColor: COLORS.BG_ELEVATED, 
        borderRadius: '50%', 
        width: '150px', 
        height: '150px', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        border: `3px solid ${COLORS.BG_RECESSED}`, 
        flexShrink: 0,
        boxShadow: '0 20px 40px rgba(30, 27, 22, 0.05)'
      }}>
        {icon}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h2 style={{ 
          fontFamily: FONTS.main, 
          fontSize: '112px', 
          fontWeight: 900, 
          color: COLORS.INK_PRIMARY, 
          margin: 0, 
          letterSpacing: '-0.03em', 
          lineHeight: 1.05 
        }}>
          {title}
        </h2>
        <span style={{ 
          fontFamily: FONTS.main, 
          fontSize: '64px', // Bumped from 52px
          fontWeight: 700, 
          color: COLORS.ACCENT_DETAIL, 
          textTransform: 'uppercase', 
          letterSpacing: '0.06em', 
          marginTop: '8px'
        }}>
          {subtitle}
        </span>
      </div>
    </div>
  );
};

// --- HERO YIELD BANNER ---
const HeroYieldCard: React.FC<{ delay: number }> = ({ delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const pop = spring({ frame: frame - delay, fps, config: SPRING_CONFIG });

  return (
    <div
      style={{
        backgroundColor: COLORS.BG_ELEVATED,
        borderRadius: '48px',
        border: `4px solid ${COLORS.ACCENT_HERO}`,
        padding: '48px 64px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        transform: `scale(${interpolate(pop, [0, 1], [0.94, 1])})`,
        opacity: pop,
        boxShadow: '0 32px 64px rgba(184, 134, 46, 0.12)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Watermark */}
      <div style={{ position: 'absolute', right: '-5%', top: '-30%', opacity: 0.04, transform: 'scale(3.5)' }}>
        <TrendingUp color={COLORS.ACCENT_HERO} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', zIndex: 1 }}>
        <span style={{ fontFamily: FONTS.main, fontSize: '56px', fontWeight: 800, color: COLORS.INK_TERTIARY, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          Annualized Yield
        </span>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '24px' }}>
          <span style={{ fontFamily: FONTS.main, fontSize: '136px', fontWeight: 900, color: COLORS.ACCENT_HERO, letterSpacing: '-0.04em', lineHeight: 1 }}>
            3.61%
          </span>
        </div>
      </div>

      <div style={{ 
        backgroundColor: COLORS.BG_BASE, 
        border: `2px solid ${COLORS.BG_RECESSED}`,
        padding: '28px 48px', 
        borderRadius: '32px', 
        display: 'flex', 
        alignItems: 'center',
        gap: '24px',
        zIndex: 1,
        boxShadow: 'inset 0 4px 8px rgba(30, 27, 22, 0.02)'
      }}>
        <CalendarCheck color={COLORS.ACCENT_HERO} size={64} strokeWidth={2.5} />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontFamily: FONTS.main, fontSize: '64px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
            Monthly Payouts
          </span>
          <span style={{ fontFamily: FONTS.main, fontSize: '52px', fontWeight: 500, fontStyle: 'italic', color: COLORS.INK_SECONDARY }}>
            Paid 1st week of each month
          </span>
        </div>
      </div>
    </div>
  );
};

// --- GRID METRIC CARDS ---
const MetricCard: React.FC<{ 
  title: string; 
  value: string; 
  detail: string; 
  icon: React.ReactNode; 
  accentColor?: string;
  delay: number;
}> = ({ title, value, detail, icon, accentColor = COLORS.ACCENT_DETAIL, delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const slideIn = spring({ frame: frame - delay, fps, config: SPRING_CONFIG });

  return (
    <div
      style={{
        backgroundColor: COLORS.BG_ELEVATED,
        borderRadius: '40px',
        border: `2px solid ${COLORS.BG_RECESSED}`,
        padding: '44px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flex: 1,
        transform: `translateY(${interpolate(slideIn, [0, 1], [40, 0])}px)`,
        opacity: slideIn,
        boxShadow: '0 24px 48px rgba(30, 27, 22, 0.03)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: '16px' }}>
        <span style={{ fontFamily: FONTS.main, fontSize: '52px', fontWeight: 800, color: COLORS.INK_TERTIARY, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
          {title}
        </span>
        <div style={{ backgroundColor: COLORS.BG_BASE, borderRadius: '50%', padding: '16px', marginLeft: 'auto', flexShrink: 0 }}>
          {icon}
        </div>
      </div>

      <div>
        <span style={{ fontFamily: FONTS.main, fontSize: '104px', fontWeight: 900, color: COLORS.INK_PRIMARY, letterSpacing: '-0.03em', lineHeight: 1 }}>
          {value}
        </span>
        <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontFamily: FONTS.main, fontSize: '60px', fontWeight: 700, color: accentColor }}>
            {detail}
          </span>
        </div>
      </div>
    </div>
  );
};

// --- MAIN DASHBOARD BEAT ---
const QuickFactsDashboard: React.FC = () => {
  return (
    <EditorialLeftZone>
      <SectionHeader 
        title="SGOV Quick Facts" 
        subtitle="iShares 0-3 Month Treasury Bond ETF" 
        icon={<Award color={COLORS.ACCENT_HERO} size={80} strokeWidth={2.5} />} 
        delay={10}
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '100%' }}>
        {/* 1. Hero Yield Stat */}
        <HeroYieldCard delay={35} />

        {/* 2. Three Column Metric Grid */}
        <div style={{ display: 'flex', flexDirection: 'row', gap: '32px', width: '100%', height: '460px' }}>
          
          {/* Expense Ratio */}
          <MetricCard 
            title="Expense Ratio" 
            value="0.09%" 
            detail="$9/yr per $10k" 
            icon={<Percent color={COLORS.ACCENT_DETAIL} size={56} strokeWidth={2.5} />} 
            accentColor={COLORS.ACCENT_DETAIL}
            delay={60} 
          />

          {/* Assets Under Management */}
          <MetricCard 
            title="Assets (AUM)" 
            value="$100B+" 
            detail="Ultra-large fund" 
            icon={<Landmark color={COLORS.ACCENT_DETAIL} size={56} strokeWidth={2.5} />} 
            accentColor={COLORS.INK_SECONDARY}
            delay={85} 
          />

          {/* Daily Liquidity */}
          <MetricCard 
            title="Daily Volume" 
            value="20M+" 
            detail="Traded daily" 
            icon={<Activity color={COLORS.ACCENT_DETAIL} size={56} strokeWidth={2.5} />} 
            accentColor={COLORS.ACCENT_DETAIL}
            delay={110} 
          />

        </div>
      </div>
    </EditorialLeftZone>
  );
};

// --- MAIN COMPOSITION ---
export default function SGOVQuickFactsScene() {
  return (
    <AbsoluteFill style={{ overflow: 'hidden' }}>
      
      {/* Background layer */}
      <Sequence from={0}>
        <EditorialBackground />
      </Sequence>

      {/* Main Single Dashboard Beat */}
      <AbsoluteFill>
        <Sequence from={0}>
          <QuickFactsDashboard />
        </Sequence>
      </AbsoluteFill>

    </AbsoluteFill>
  );
}