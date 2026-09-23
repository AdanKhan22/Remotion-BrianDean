/**
 * REASONING STEP (v3 + Mobile-Optimized Vertical Layout)
 * 1. User Feedback Addressed: Stacking the 3-month timeline vertically expands each node to fill the 60% left zone width and vertical space, drastically increasing font size and readability on mobile devices.
 * 2. Visual Structure:
 *    - Beat 1: State Tax Shield Concept
 *    - Beat 2: $100k California Math Stacked Bar Chart
 *    - Beat 3: Vertical 3-Stage Timeline Nodes (Month 1 -> Month 2 -> Month 3) with connecting step lines.
 * 3. Typography & Sizing:
 *    - Headlines: 112px - 120px
 *    - Subtitles & Badges: 56px - 64px
 *    - Node Descriptions: 52px - 56px
 * 4. Physics: Smooth staggered spring entrances along the Y-axis.
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
  ShieldCheck,
  Landmark,
  Calculator,
  Clock,
  AlertCircle,
  ArrowDown,
  Percent
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
  ACCENT_NEGATIVE: '#B5533C', // Muted brick (Risk, downside, tax hits)
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
            id="sgov-vert-dot-grid"
            x="0"
            y="0"
            width="48"
            height="48"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="6" cy="6" r="2.5" fill={COLORS.INK_TERTIARY} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#sgov-vert-dot-grid)" />
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
          fontSize: '64px', 
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

// --- BEAT 1: STATE TAX SHIELD CONCEPT ---
const TaxConceptSequence: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const cardPop = spring({ frame: frame - 20, fps, config: SPRING_CONFIG });

  return (
    <EditorialLeftZone>
      <SectionHeader 
        title="Tax Mechanics" 
        subtitle="Treasury Income Advantage" 
        icon={<ShieldCheck color={COLORS.ACCENT_DETAIL} size={80} strokeWidth={2.5} />} 
        delay={10}
      />
      <div
        style={{
          backgroundColor: COLORS.BG_ELEVATED,
          borderRadius: '56px',
          border: `4px solid ${COLORS.ACCENT_DETAIL}`,
          padding: '88px',
          display: 'flex',
          alignItems: 'center',
          gap: '72px',
          width: '100%',
          transform: `translateY(${interpolate(cardPop, [0, 1], [50, 0])}px)`,
          opacity: cardPop,
          boxShadow: '0 48px 96px rgba(60, 110, 113, 0.1)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{ position: 'absolute', right: '-5%', bottom: '-20%', opacity: 0.04, transform: 'scale(3.5)' }}>
          <Percent color={COLORS.ACCENT_DETAIL} />
        </div>

        <div style={{ 
          backgroundColor: COLORS.BG_BASE, 
          borderRadius: '44px', 
          width: '220px', 
          height: '220px', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          flexShrink: 0,
          border: `3px solid ${COLORS.BG_RECESSED}`,
          boxShadow: 'inset 0 4px 8px rgba(30, 27, 22, 0.03)'
        }}>
          <Landmark color={COLORS.ACCENT_DETAIL} size={112} strokeWidth={2} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', zIndex: 1 }}>
          <span style={{ fontFamily: FONTS.main, fontSize: '112px', fontWeight: 900, color: COLORS.INK_PRIMARY, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            0% State<br/>Income Tax
          </span>
          <span style={{ fontFamily: FONTS.main, fontSize: '56px', fontWeight: 600, fontStyle: 'italic', color: COLORS.INK_SECONDARY }}>
            SGOV interest from U.S. T-Bills is exempt at state & local levels.
          </span>
        </div>
      </div>
    </EditorialLeftZone>
  );
};

// --- BEAT 2: CALIFORNIA MATH COMPARISON ---
const StackedBarRow: React.FC<{
  label: string;
  grossAmount: string;
  netYield: string;
  netAmount: string;
  netPct: number;
  fedTaxPct: number;
  stateTaxPct: number;
  isWinner: boolean;
  delay: number;
}> = ({ label, grossAmount, netYield, netAmount, netPct, fedTaxPct, stateTaxPct, isWinner, delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const springProgress = spring({ frame: frame - delay, fps, config: SPRING_CONFIG });

  const barBorder = isWinner ? `3px solid ${COLORS.ACCENT_HERO}` : `2px solid ${COLORS.BG_RECESSED}`;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <span style={{ fontFamily: FONTS.main, fontSize: '60px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>
            {label}
          </span>
          <span style={{ fontFamily: FONTS.main, fontSize: '52px', fontWeight: 600, color: COLORS.INK_TERTIARY }}>
            (Gross: {grossAmount})
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{ fontFamily: FONTS.main, fontSize: '52px', fontWeight: 600, color: COLORS.INK_SECONDARY }}>
            Effective Net:
          </span>
          <span style={{ fontFamily: FONTS.main, fontSize: '72px', fontWeight: 900, color: isWinner ? COLORS.ACCENT_HERO : COLORS.INK_PRIMARY }}>
            {netYield}
          </span>
          <span style={{ fontFamily: FONTS.main, fontSize: '52px', fontWeight: 700, color: isWinner ? COLORS.ACCENT_HERO : COLORS.INK_SECONDARY }}>
            ({netAmount})
          </span>
        </div>
      </div>

      <div style={{ 
        width: '100%', 
        height: '96px', 
        backgroundColor: COLORS.BG_RECESSED, 
        borderRadius: '24px', 
        padding: '8px', 
        display: 'flex', 
        gap: '6px',
        boxSizing: 'border-box',
        boxShadow: 'inset 0 4px 8px rgba(30, 27, 22, 0.04)',
        border: barBorder
      }}>
        <div style={{ 
          height: '100%', 
          width: `${netPct * springProgress}%`, 
          backgroundColor: isWinner ? COLORS.ACCENT_HERO : COLORS.INK_SECONDARY, 
          borderRadius: '16px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          overflow: 'hidden'
        }}>
          {springProgress > 0.6 && (
            <span style={{ fontFamily: FONTS.main, fontSize: '48px', fontWeight: 800, color: COLORS.BG_ELEVATED, whiteSpace: 'nowrap', padding: '0 16px' }}>
              NET {netAmount}
            </span>
          )}
        </div>

        <div style={{ 
          height: '100%', 
          width: `${fedTaxPct * springProgress}%`, 
          backgroundColor: 'rgba(30, 27, 22, 0.15)', 
          borderRadius: '16px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          overflow: 'hidden'
        }}>
          {springProgress > 0.8 && (
            <span style={{ fontFamily: FONTS.main, fontSize: '40px', fontWeight: 700, color: COLORS.INK_SECONDARY, whiteSpace: 'nowrap' }}>
              Fed Tax
            </span>
          )}
        </div>

        {stateTaxPct > 0 && (
          <div style={{ 
            height: '100%', 
            width: `${stateTaxPct * springProgress}%`, 
            backgroundColor: COLORS.ACCENT_NEGATIVE, 
            borderRadius: '16px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            overflow: 'hidden'
          }}>
            {springProgress > 0.8 && (
              <span style={{ fontFamily: FONTS.main, fontSize: '40px', fontWeight: 800, color: COLORS.BG_ELEVATED, whiteSpace: 'nowrap' }}>
                State Tax
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const MathComparisonSequence: React.FC = () => {
  return (
    <EditorialLeftZone>
      <SectionHeader 
        title="$100k California Math" 
        subtitle="Gross vs. After-Tax Net Earnings" 
        icon={<Calculator color={COLORS.ACCENT_DETAIL} size={80} strokeWidth={2.5} />} 
        delay={10}
      />

      <div style={{ 
        backgroundColor: COLORS.BG_ELEVATED, 
        borderRadius: '48px', 
        border: `3px solid ${COLORS.BG_RECESSED}`, 
        padding: '64px', 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '48px',
        boxShadow: '0 32px 64px rgba(30, 27, 22, 0.04)'
      }}>
        <div style={{ display: 'flex', gap: '48px', borderBottom: `2px solid ${COLORS.BG_RECESSED}`, paddingBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: COLORS.ACCENT_HERO }} />
            <span style={{ fontFamily: FONTS.main, fontSize: '48px', fontWeight: 700, color: COLORS.INK_PRIMARY }}>SGOV Net Yield</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: COLORS.INK_SECONDARY }} />
            <span style={{ fontFamily: FONTS.main, fontSize: '48px', fontWeight: 700, color: COLORS.INK_PRIMARY }}>HYSA Net Yield</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: COLORS.ACCENT_NEGATIVE }} />
            <span style={{ fontFamily: FONTS.main, fontSize: '48px', fontWeight: 700, color: COLORS.ACCENT_NEGATIVE }}>State Tax Cut (-$372)</span>
          </div>
        </div>

        <StackedBarRow 
          label="4.00% Standard HYSA" 
          grossAmount="$4,000" 
          netYield="2.67%" 
          netAmount="$2,668" 
          netPct={66.7} 
          fedTaxPct={24.0} 
          stateTaxPct={9.3} 
          isWinner={false} 
          delay={35} 
        />

        <StackedBarRow 
          label="3.61% SGOV ETF" 
          grossAmount="$3,610" 
          netYield="2.74%" 
          netAmount="$2,744" 
          netPct={68.6} 
          fedTaxPct={21.6} 
          stateTaxPct={0} 
          isWinner={true} 
          delay={70} 
        />
      </div>
    </EditorialLeftZone>
  );
};

// --- BEAT 3: MOBILE-OPTIMIZED VERTICAL TIMELINE STACK ---
const VerticalTimelineStep: React.FC<{
  month: string;
  headline: string;
  desc: string;
  badgeColor: string;
  borderColor?: string;
  delay: number;
  showArrowBelow?: boolean;
}> = ({ month, headline, desc, badgeColor, borderColor = COLORS.BG_RECESSED, delay, showArrowBelow = true }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const pop = spring({ frame: frame - delay, fps, config: SPRING_CONFIG });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      {/* Node Card */}
      <div
        style={{
          backgroundColor: COLORS.BG_ELEVATED,
          borderRadius: '40px',
          border: `3px solid ${borderColor}`,
          padding: '48px 64px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '48px',
          width: '100%',
          transform: `translateY(${interpolate(pop, [0, 1], [40, 0])}px)`,
          opacity: pop,
          boxShadow: '0 24px 48px rgba(30, 27, 22, 0.04)',
        }}
      >
        {/* Month Badge Container */}
        <div style={{
          backgroundColor: COLORS.BG_BASE,
          border: `2px solid ${COLORS.BG_RECESSED}`,
          borderRadius: '28px',
          padding: '24px 36px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexShrink: 0
        }}>
          <span style={{ fontFamily: FONTS.main, fontSize: '56px', fontWeight: 900, color: badgeColor, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            {month}
          </span>
        </div>

        {/* Content Details */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <span style={{ fontFamily: FONTS.main, fontSize: '72px', fontWeight: 900, color: COLORS.INK_PRIMARY, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            {headline}
          </span>
          <span style={{ fontFamily: FONTS.main, fontSize: '52px', fontWeight: 600, color: COLORS.INK_SECONDARY }}>
            {desc}
          </span>
        </div>
      </div>

      {/* Vertical Connection Arrow */}
      {showArrowBelow && (
        <div style={{ 
          padding: '16px 0', 
          opacity: pop,
          transform: `translateY(${interpolate(pop, [0, 1], [20, 0])}px)`
        }}>
          <ArrowDown color={COLORS.INK_TERTIARY} size={56} strokeWidth={3} />
        </div>
      )}
    </div>
  );
};

const DrawbackSequence: React.FC = () => {
  return (
    <EditorialLeftZone>
      <SectionHeader 
        title="SGOV Trade-Off" 
        subtitle="1 to 3 Month Reinvestment Lag" 
        icon={<AlertCircle color={COLORS.ACCENT_NEGATIVE} size={80} strokeWidth={2.5} />} 
        delay={10}
      />
      
      {/* Vertically Stacked Steps with Large Mobile-Friendly Text */}
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        
        {/* Month 1 Step */}
        <VerticalTimelineStep 
          month="Month 1"
          headline="Fed Hikes Interest Rates"
          desc="Existing portfolio continues holding older, lower-yielding bonds"
          badgeColor={COLORS.ACCENT_NEGATIVE}
          borderColor={COLORS.ACCENT_NEGATIVE}
          delay={30}
          showArrowBelow={true}
        />

        {/* Month 2 Step */}
        <VerticalTimelineStep 
          month="Month 2"
          headline="Bonds Begin Maturing"
          desc="Expiring T-Bills are automatically rolled over at the new higher rates"
          badgeColor={COLORS.ACCENT_DETAIL}
          borderColor={COLORS.BG_RECESSED}
          delay={65}
          showArrowBelow={true}
        />

        {/* Month 3 Step */}
        <VerticalTimelineStep 
          month="Month 3"
          headline="Full New Yield Reached"
          desc="100% of the portfolio is fully adjusted to today's peak interest rate"
          badgeColor={COLORS.ACCENT_HERO}
          borderColor={COLORS.ACCENT_HERO}
          delay={100}
          showArrowBelow={false}
        />

      </div>
    </EditorialLeftZone>
  );
};

// --- MAIN COMPOSITION ---
export default function SGOVTaxAndLagScene() {
  return (
    <AbsoluteFill style={{ overflow: 'hidden' }}>
      
      {/* Background with subtle Dot Pattern & Radial Glow */}
      <Sequence from={0}>
        <EditorialBackground />
      </Sequence>

      <AbsoluteFill>
        
        {/* BEAT 1: Tax Shield Concept (Frames 0 - 350, ~11s) */}
        <Sequence from={0} durationInFrames={350}>
          <TaxConceptSequence />
        </Sequence>

        {/* BEAT 2: California Math Stacked Bar Chart (Frames 350 - 1150, ~26s) */}
        <Sequence from={350} durationInFrames={800}>
          <MathComparisonSequence />
        </Sequence>

        {/* BEAT 3: Mobile-Friendly Vertical Timeline (Frames 1150+) */}
        <Sequence from={1150}>
          <DrawbackSequence />
        </Sequence>

      </AbsoluteFill>

    </AbsoluteFill>
  );
}