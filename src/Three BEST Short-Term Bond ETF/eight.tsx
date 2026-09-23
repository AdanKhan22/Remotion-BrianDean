/**
 * REASONING STEP (v3 + Layout Fix)
 * 1. Bug Fix: Removed the hardcoded `height: '540px'` from the `CompoundingSequence` flex container. The massive 4K font sizes were causing the internal text boxes to overflow the fixed height. Removing the constraint allows the cards to naturally wrap and contain the text perfectly while maintaining equal heights.
 * 2. Visual Structure: Maintained Beat 1 (Compounding), Beat 2 (Capital Gains Unlock), and Beat 3 (No State Tax Drawback).
 * 3. Mobile Legibility: Text sizes remain robust (min 48px/52px).
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
  ShieldAlert,
  CalendarCheck,
  TrendingUp,
  Percent,
  Landmark,
  ArrowRight,
  ArrowRightLeft,
  Lock,
  Unlock,
  AlertOctagon
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
  ACCENT_HERO: '#B8862E',     // Muted gold (The win, capital gains advantage)
  ACCENT_NEGATIVE: '#B5533C', // Muted brick (Risk, downside, tax hits)
  ACCENT_DETAIL: '#3C6E71',   // Muted teal (Mechanics, compounding)
  ACCENT_NEUTRAL: '#8C8474',  // Slate grey (Standard ETF baseline)
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
          <pattern id="boxx-tax-dot" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
            <circle cx="6" cy="6" r="2.5" fill={COLORS.INK_TERTIARY} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#boxx-tax-dot)" />
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

// --- BEAT 1: INTERNAL COMPOUNDING VISUAL ---
const MechanismSplitCard: React.FC<{
  title: string;
  subtitle: string;
  desc: string;
  icon: React.ReactNode;
  accentColor: string;
  isBoxx: boolean;
  delay: number;
}> = ({ title, subtitle, desc, icon, accentColor, isBoxx, delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const pop = spring({ frame: frame - delay, fps, config: SPRING_CONFIG });

  return (
    <div style={{
      flex: 1,
      backgroundColor: COLORS.BG_ELEVATED,
      borderRadius: '48px',
      border: `4px solid ${isBoxx ? accentColor : COLORS.BG_RECESSED}`,
      padding: '48px',
      display: 'flex',
      flexDirection: 'column',
      gap: '32px',
      transform: `translateY(${interpolate(pop, [0, 1], [40, 0])}px)`,
      opacity: pop,
      boxShadow: isBoxx ? `0 32px 64px ${accentColor}25` : '0 24px 48px rgba(30, 27, 22, 0.04)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
        <div style={{ 
          backgroundColor: accentColor, 
          padding: '24px', 
          borderRadius: '32px', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          flexShrink: 0 
        }}>
          {icon}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontFamily: FONTS.main, fontSize: '44px', fontWeight: 700, color: accentColor, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            {title}
          </span>
          <span style={{ fontFamily: FONTS.main, fontSize: '64px', fontWeight: 900, color: COLORS.INK_PRIMARY, lineHeight: 1.1 }}>
            {subtitle}
          </span>
        </div>
      </div>
      
      <div style={{ 
        backgroundColor: COLORS.BG_BASE, 
        padding: '32px', 
        borderRadius: '24px', 
        border: `2px solid ${COLORS.BG_RECESSED}`,
        marginTop: 'auto'
      }}>
        <span style={{ fontFamily: FONTS.main, fontSize: '48px', fontWeight: 500, color: COLORS.INK_SECONDARY, lineHeight: 1.4 }}>
          {desc}
        </span>
      </div>
    </div>
  );
};

const CompoundingSequence: React.FC = () => {
  return (
    <EditorialLeftZone>
      <SectionHeader 
        title="Zero Distributions" 
        subtitle="The Internal Compounding Advantage" 
        icon={<TrendingUp color={COLORS.ACCENT_DETAIL} size={80} strokeWidth={2.5} />} 
        delay={10}
      />
      {/* Fixed: Removed hardcoded height to allow content to dictate size naturally */}
      <div style={{ display: 'flex', flexDirection: 'row', gap: '40px', width: '100%', minHeight: '540px' }}>
        
        <MechanismSplitCard 
          title="Standard ETFs"
          subtitle="Taxable Dividends"
          desc="Yield is distributed as cash to your account, creating an immediate taxable event at your personal income rate."
          icon={<ArrowRightLeft color={COLORS.BG_BASE} size={56} strokeWidth={3} />}
          accentColor={COLORS.ACCENT_NEUTRAL}
          isBoxx={false}
          delay={30}
        />

        <MechanismSplitCard 
          title="BOXX ETF"
          subtitle="Internal Growth"
          desc="Because options don't pay dividends, the yield stays inside the fund and compounds continuously without triggering taxes."
          icon={<Lock color={COLORS.BG_BASE} size={56} strokeWidth={3} />}
          accentColor={COLORS.ACCENT_DETAIL}
          isBoxx={true}
          delay={60}
        />

      </div>
    </EditorialLeftZone>
  );
};

// --- BEAT 2: THE 1-YEAR CALENDAR UNLOCK ---
const CapitalGainsSequence: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const containerPop = spring({ frame: frame - 20, fps, config: SPRING_CONFIG });
  const lockPop = spring({ frame: frame - 60, fps, config: SPRING_CONFIG });
  const winPop = spring({ frame: frame - 90, fps, config: SPRING_CONFIG });

  return (
    <EditorialLeftZone>
      <SectionHeader 
        title="The Capital Gains Unlock" 
        subtitle="Holding for 1 Year or Longer" 
        icon={<CalendarCheck color={COLORS.ACCENT_HERO} size={80} strokeWidth={2.5} />} 
        delay={10}
      />
      
      <div style={{
        backgroundColor: COLORS.BG_ELEVATED,
        borderRadius: '56px',
        border: `4px solid ${COLORS.ACCENT_HERO}`,
        padding: '64px',
        display: 'flex',
        flexDirection: 'column',
        gap: '48px',
        width: '100%',
        transform: `scale(${interpolate(containerPop, [0, 1], [0.95, 1])})`,
        opacity: containerPop,
        boxShadow: '0 32px 64px rgba(184, 134, 46, 0.12)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Watermark */}
        <div style={{ position: 'absolute', right: '-5%', top: '-20%', opacity: 0.04, transform: 'scale(3)' }}>
          <Percent color={COLORS.ACCENT_HERO} />
        </div>

        {/* Visual Timeline Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px', zIndex: 1 }}>
          <div style={{ backgroundColor: COLORS.ACCENT_HERO, padding: '24px', borderRadius: '50%' }}>
            {frame < 60 ? (
              <Lock color={COLORS.BG_BASE} size={64} strokeWidth={3} />
            ) : (
              <Unlock color={COLORS.BG_BASE} size={64} strokeWidth={3} />
            )}
          </div>
          <span style={{ fontFamily: FONTS.main, fontSize: '80px', fontWeight: 900, color: COLORS.INK_PRIMARY, letterSpacing: '-0.02em' }}>
            Hold past 12 Months
          </span>
        </div>

        {/* Tax Rate Comparison Boxes */}
        <div style={{ display: 'flex', gap: '24px', zIndex: 1, marginTop: '16px' }}>
          
          <div style={{ flex: 1, backgroundColor: COLORS.BG_BASE, border: `2px solid ${COLORS.BG_RECESSED}`, borderRadius: '32px', padding: '40px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span style={{ fontFamily: FONTS.main, fontSize: '44px', fontWeight: 700, color: COLORS.INK_SECONDARY, textTransform: 'uppercase' }}>
              Standard Short-Term
            </span>
            <span style={{ fontFamily: FONTS.main, fontSize: '64px', fontWeight: 900, color: COLORS.INK_PRIMARY }}>
              Ordinary Income Tax
            </span>
            <span style={{ fontFamily: FONTS.main, fontSize: '48px', fontWeight: 500, color: COLORS.ACCENT_NEGATIVE }}>
              (e.g., 24% - 37% drag)
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', padding: '0 16px' }}>
            <ArrowRight color={COLORS.INK_TERTIARY} size={64} strokeWidth={3} />
          </div>

          <div style={{ 
            flex: 1, 
            backgroundColor: COLORS.BG_BASE, 
            border: `4px solid ${COLORS.ACCENT_HERO}`, 
            borderRadius: '32px', 
            padding: '40px', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '16px',
            transform: `scale(${interpolate(winPop, [0, 1], [0.9, 1])})`,
            opacity: winPop,
            boxShadow: `0 16px 32px ${COLORS.ACCENT_HERO}20`
          }}>
            <span style={{ fontFamily: FONTS.main, fontSize: '44px', fontWeight: 800, color: COLORS.ACCENT_HERO, textTransform: 'uppercase' }}>
              BOXX Long-Term Unlock
            </span>
            <span style={{ fontFamily: FONTS.main, fontSize: '64px', fontWeight: 900, color: COLORS.ACCENT_HERO }}>
              Long-Term Cap Gains
            </span>
            <span style={{ fontFamily: FONTS.main, fontSize: '48px', fontWeight: 600, color: COLORS.INK_PRIMARY }}>
              (Usually just 15%)
            </span>
          </div>

        </div>
      </div>
    </EditorialLeftZone>
  );
};

// --- BEAT 3: THE DRAWBACK (NO STATE TAX SHIELD) ---
const DrawbackSequence: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const panelPop = spring({ frame: frame - 25, fps, config: SPRING_CONFIG });

  return (
    <EditorialLeftZone>
      <SectionHeader 
        title="BOXX Trade-Off" 
        subtitle="The State Tax Penalty" 
        icon={<AlertOctagon color={COLORS.ACCENT_NEGATIVE} size={80} strokeWidth={2.5} />} 
        delay={10}
      />
      
      <div
        style={{
          backgroundColor: COLORS.BG_BASE,
          borderRadius: '56px',
          border: `4px solid ${COLORS.ACCENT_NEGATIVE}`,
          padding: '80px 96px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '48px',
          width: '100%',
          transform: `translateY(${interpolate(panelPop, [0, 1], [50, 0])}px)`,
          opacity: panelPop,
          boxShadow: '0 40px 80px rgba(181, 83, 60, 0.08)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
          <div style={{ backgroundColor: COLORS.ACCENT_NEGATIVE, padding: '24px', borderRadius: '50%', boxShadow: `0 16px 32px ${COLORS.ACCENT_NEGATIVE}40` }}>
            <ShieldAlert color={COLORS.BG_BASE} size={80} strokeWidth={2.5} />
          </div>
          <span style={{ fontFamily: FONTS.main, fontSize: '112px', fontWeight: 900, color: COLORS.INK_PRIMARY, letterSpacing: '-0.02em', lineHeight: 1 }}>
            NO State Exemption
          </span>
        </div>
        
        <div style={{ 
          backgroundColor: COLORS.BG_ELEVATED, 
          padding: '44px 56px', 
          borderRadius: '32px', 
          width: '100%', 
          border: `2px solid ${COLORS.BG_RECESSED}`, 
          display: 'flex', 
          alignItems: 'center', 
          gap: '40px' 
        }}>
          <Landmark color={COLORS.INK_TERTIARY} size={64} strokeWidth={2.5} style={{ flexShrink: 0 }} />
          <span style={{ fontFamily: FONTS.main, fontSize: '52px', fontWeight: 600, color: COLORS.INK_SECONDARY, lineHeight: 1.4 }}>
            Because BOXX uses S&P 500 Options instead of physical government debt, <strong>it does not qualify for state tax exemptions</strong> like SGOV or USFR do.
          </span>
        </div>
      </div>
    </EditorialLeftZone>
  );
};

// --- MAIN COMPOSITION ---
export default function BOXXTaxMechanicsScene() {
  return (
    <AbsoluteFill style={{ overflow: 'hidden' }}>
      
      <Sequence from={0}>
        <EditorialBackground />
      </Sequence>

      <AbsoluteFill>
        
        {/* BEAT 1: Internal Compounding (Frames 0 - 350, ~11s) */}
        <Sequence from={0} durationInFrames={350}>
          <CompoundingSequence />
        </Sequence>

        {/* BEAT 2: The 1-Year Cap Gains Unlock (Frames 350 - 750, ~13s) */}
        <Sequence from={350} durationInFrames={400}>
          <CapitalGainsSequence />
        </Sequence>

        {/* BEAT 3: The Drawback - No State Shield (Frames 750+) */}
        <Sequence from={750}>
          <DrawbackSequence />
        </Sequence>

      </AbsoluteFill>

    </AbsoluteFill>
  );
}