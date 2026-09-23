/**
 * REASONING STEP (v3 + Math Breakdown Fix)
 * 1. Bug Fix: Added the missing "Fed Tax (24%)" line item to the California Math comparison cards. Without this, the jump from Gross to Net mathematically failed on screen.
 * 2. Visual Structure: Both Federal and State taxes now sit in their own deduction rows. SGOV's $0 state tax is highlighted in Teal (Win), while all actual tax hits are highlighted in Brick (Negative).
 * 3. Layout Fix: Removed the hardcoded container height so the new Federal Tax row naturally expands the card without causing text overflow.
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
  TrendingDown,
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
  ACCENT_DETAIL: '#3C6E71',   // Muted teal (Supporting detail, 0% tax win)
  ACCENT_NEUTRAL: '#8C8474',  // De-emphasized
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
          <pattern id="sgov-tax-dot-grid" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
            <circle cx="6" cy="6" r="2.5" fill={COLORS.INK_TERTIARY} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#sgov-tax-dot-grid)" />
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

// --- BEAT 2: CALIFORNIA MATH COMPARISON (FIXED FED TAX ROW) ---
const MathCard: React.FC<{ 
  title: string; 
  gross: string; 
  grossAmt: string;
  fedTax: string;
  stateTax: string; 
  netYield: string; 
  netAmt: string;
  isWinner: boolean; 
  delay: number;
}> = ({ title, gross, grossAmt, fedTax, stateTax, netYield, netAmt, isWinner, delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const pop = spring({ frame: frame - delay, fps, config: SPRING_CONFIG });

  const borderColor = isWinner ? COLORS.ACCENT_HERO : COLORS.BG_RECESSED;
  const bgColor = isWinner ? COLORS.BG_ELEVATED : COLORS.BG_BASE;
  const netColor = isWinner ? COLORS.ACCENT_HERO : COLORS.INK_PRIMARY;

  const isStateTaxZero = stateTax === '$0';

  return (
    <div
      style={{
        backgroundColor: bgColor,
        borderRadius: '44px',
        border: `4px solid ${borderColor}`,
        padding: '52px',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        transform: `scale(${interpolate(pop, [0, 1], [0.94, 1])})`,
        opacity: pop,
        boxShadow: isWinner ? '0 36px 72px rgba(184, 134, 46, 0.12)' : '0 20px 40px rgba(30, 27, 22, 0.04)',
      }}
    >
      {/* Title */}
      <span style={{ 
        fontFamily: FONTS.main, 
        fontSize: '56px', 
        fontWeight: 800, 
        color: COLORS.INK_PRIMARY, 
        borderBottom: `2px solid ${COLORS.BG_RECESSED}`, 
        paddingBottom: '24px', 
        marginBottom: '32px', 
        textAlign: 'center' 
      }}>
        {title}
      </span>
      
      {/* Gross Breakdown */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '20px' }}>
        <span style={{ fontFamily: FONTS.main, fontSize: '48px', fontWeight: 600, color: COLORS.INK_SECONDARY }}>Gross ({gross})</span>
        <span style={{ fontFamily: FONTS.main, fontSize: '56px', fontWeight: 800, color: COLORS.INK_PRIMARY }}>{grossAmt}</span>
      </div>

      {/* NEW: Federal Tax Drag */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'baseline', 
        marginBottom: '16px', 
        backgroundColor: 'rgba(181, 83, 60, 0.08)', 
        padding: '16px 24px', 
        borderRadius: '20px' 
      }}>
        <span style={{ fontFamily: FONTS.main, fontSize: '44px', fontWeight: 700, color: COLORS.ACCENT_NEGATIVE }}>Fed Tax (24%)</span>
        <span style={{ fontFamily: FONTS.main, fontSize: '52px', fontWeight: 800, color: COLORS.ACCENT_NEGATIVE }}>{fedTax}</span>
      </div>

      {/* State Tax Drag */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'baseline', 
        marginBottom: '36px', 
        backgroundColor: isStateTaxZero ? 'rgba(60, 110, 113, 0.08)' : 'rgba(181, 83, 60, 0.08)', 
        padding: '16px 24px', 
        borderRadius: '20px' 
      }}>
        <span style={{ fontFamily: FONTS.main, fontSize: '44px', fontWeight: 700, color: isStateTaxZero ? COLORS.ACCENT_DETAIL : COLORS.ACCENT_NEGATIVE }}>State Tax (9.38%)</span>
        <span style={{ fontFamily: FONTS.main, fontSize: '52px', fontWeight: 800, color: isStateTaxZero ? COLORS.ACCENT_DETAIL : COLORS.ACCENT_NEGATIVE }}>{stateTax}</span>
      </div>

      {/* Net After-Tax Yield Box */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        gap: '8px', 
        marginTop: 'auto', 
        backgroundColor: COLORS.BG_BASE, 
        padding: '32px', 
        borderRadius: '28px', 
        border: `2px solid ${isWinner ? 'rgba(184, 134, 46, 0.3)' : COLORS.BG_RECESSED}` 
      }}>
        <span style={{ fontFamily: FONTS.main, fontSize: '48px', fontWeight: 800, color: COLORS.INK_TERTIARY, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          Effective Net Yield
        </span>
        <span style={{ fontFamily: FONTS.main, fontSize: '112px', fontWeight: 900, color: netColor, lineHeight: 1 }}>
          {netYield}
        </span>
        <span style={{ fontFamily: FONTS.main, fontSize: '48px', fontWeight: 600, color: COLORS.INK_SECONDARY, fontStyle: 'italic' }}>
          {netAmt} net income
        </span>
      </div>
    </div>
  );
};

const MathComparisonSequence: React.FC = () => {
  return (
    <EditorialLeftZone>
      <SectionHeader 
        title="$100k California Math" 
        subtitle="24% Fed + 9.38% State Tax Bracket" 
        icon={<Calculator color={COLORS.ACCENT_DETAIL} size={80} strokeWidth={2.5} />} 
        delay={10}
      />
      <div style={{ display: 'flex', flexDirection: 'row', gap: '40px', width: '100%', minHeight: '620px' }}>
        <MathCard 
          title="Standard HYSA" 
          gross="4.00%" 
          grossAmt="$4,000"
          fedTax="-$960"
          stateTax="-$372" 
          netYield="2.67%" 
          netAmt="$2,668"
          isWinner={false} 
          delay={35}
        />
        <MathCard 
          title="SGOV ETF" 
          gross="3.61%" 
          grossAmt="$3,610"
          fedTax="-$866"
          stateTax="$0" 
          netYield="2.74%" 
          netAmt="$2,744"
          isWinner={true} 
          delay={70}
        />
      </div>
    </EditorialLeftZone>
  );
};

// --- BEAT 3: THE DRAWBACK (MATURITY LAG) ---
const VerticalTimelineStep: React.FC<{
  month: string;
  headline: string;
  desc: string;
  badgeColor: string;
  borderColor?: string;
  delay: number;
}> = ({ month, headline, desc, badgeColor, borderColor = COLORS.BG_RECESSED, delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const pop = spring({ frame: frame - delay, fps, config: SPRING_CONFIG });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      <div
        style={{
          backgroundColor: COLORS.BG_ELEVATED,
          borderRadius: '40px',
          border: `3px solid ${borderColor}`,
          padding: '40px 64px',
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

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <span style={{ fontFamily: FONTS.main, fontSize: '64px', fontWeight: 900, color: COLORS.INK_PRIMARY, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            {headline}
          </span>
          <span style={{ fontFamily: FONTS.main, fontSize: '48px', fontWeight: 600, color: COLORS.INK_SECONDARY }}>
            {desc}
          </span>
        </div>
      </div>
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
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
        <VerticalTimelineStep 
          month="Month 1"
          headline="Fed Hikes Interest Rates"
          desc="Existing portfolio continues holding older, lower-yielding bonds"
          badgeColor={COLORS.ACCENT_NEGATIVE}
          borderColor={COLORS.ACCENT_NEGATIVE}
          delay={30}
        />
        <VerticalTimelineStep 
          month="Month 2"
          headline="Bonds Begin Maturing"
          desc="Expiring T-Bills are automatically rolled over at higher rates"
          badgeColor={COLORS.ACCENT_DETAIL}
          borderColor={COLORS.BG_RECESSED}
          delay={65}
        />
        <VerticalTimelineStep 
          month="Month 3"
          headline="Full New Yield Reached"
          desc="100% of the portfolio is fully adjusted to today's peak interest rate"
          badgeColor={COLORS.ACCENT_HERO}
          borderColor={COLORS.ACCENT_HERO}
          delay={100}
        />
      </div>
    </EditorialLeftZone>
  );
};

// --- MAIN COMPOSITION ---
export default function SGOVTaxAndLagScene() {
  return (
    <AbsoluteFill style={{ overflow: 'hidden' }}>
      
      <Sequence from={0}>
        <EditorialBackground />
      </Sequence>

      <AbsoluteFill>
        
        {/* BEAT 1: Tax Shield Concept (Frames 0 - 350, ~11s) */}
        <Sequence from={0} durationInFrames={350}>
          <TaxConceptSequence />
        </Sequence>

        {/* BEAT 2: California Math (Fixed Fed Tax) (Frames 350 - 1150, ~26s) */}
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