/**
 * REASONING STEP (v3 + Mobile-Optimized Final Summary Matrix)
 * 1. Concept Structure: 
 *    - Creates an animated 3-part summary dashboard that breaks down the final verdict for each ETF (SGOV, USFR, BOXX) sequentially as the narrator wraps up the video.
 * 2. Visual Mechanism:
 *    - Beat 1: SGOV spotlight card popping in (Highlighting High State Tax & Falling Interest Rates).
 *    - Beat 2: USFR spotlight card popping in (Highlighting Floating Rates & Rising Interest Rates).
 *    - Beat 3: BOXX spotlight card popping in (Highlighting 1+ Year Hold LTCG & Zero State Tax States).
 * 3. Mobile Legibility & High Contrast:
 *    - Utilizes vertical row cards with massive 4K typography (min 52px badges, 72px titles, 112px headers).
 *    - Icons sit in solid high-contrast accent blocks (Teal for SGOV/USFR mechanics, Gold for BOXX's LTCG win).
 * 4. Pacing & Physics: Smooth staggered spring entrances mapped across sequences to give each ETF room to breathe.
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
  CheckCircle2,
  TrendingDown,
  TrendingUp,
  MapPin,
  CalendarCheck,
  Award,
  RefreshCcw,
  Package,
  Layers,
  Landmark,
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
  ACCENT_HERO: '#B8862E',     // Muted gold (The win, BOXX LTCG advantage)
  ACCENT_NEGATIVE: '#B5533C', // Muted brick (Risk, downside)
  ACCENT_DETAIL: '#3C6E71',   // Muted teal (Core mechanics)
  ACCENT_NEUTRAL: '#8C8474',  // Slate grey (Baseline comparison)
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
      <svg style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0.22 }}>
        <defs>
          <pattern id="summary-dot-grid" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
            <circle cx="6" cy="6" r="2.5" fill={COLORS.INK_TERTIARY} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#summary-dot-grid)" />
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

// --- SUMMARY ROW CARD COMPONENT ---
const SummaryCard: React.FC<{
  ticker: string;
  typeLabel: string;
  bestForTitle: string;
  conditions: Array<{ label: string; icon: React.ReactNode }>;
  accentColor: string;
  isHero?: boolean;
  delay: number;
}> = ({ ticker, typeLabel, bestForTitle, conditions, accentColor, isHero = false, delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const pop = spring({ frame: frame - delay, fps, config: SPRING_CONFIG });

  return (
    <div
      style={{
        backgroundColor: COLORS.BG_ELEVATED,
        borderRadius: '40px',
        border: `4px solid ${isHero ? COLORS.ACCENT_HERO : COLORS.BG_RECESSED}`,
        padding: '44px 56px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        transform: `translateY(${interpolate(pop, [0, 1], [40, 0])}px)`,
        opacity: pop,
        boxShadow: isHero ? '0 32px 64px rgba(184, 134, 46, 0.12)' : '0 20px 40px rgba(30, 27, 22, 0.04)',
      }}
    >
      {/* Ticker & Fund Type */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '36px', width: '600px', flexShrink: 0 }}>
        <div style={{
          backgroundColor: accentColor,
          borderRadius: '28px',
          padding: '20px 36px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: `0 16px 32px ${accentColor}35`
        }}>
          <span style={{ fontFamily: FONTS.main, fontSize: '64px', fontWeight: 900, color: COLORS.BG_BASE }}>
            {ticker}
          </span>
        </div>
        <span style={{ fontFamily: FONTS.main, fontSize: '48px', fontWeight: 700, color: COLORS.INK_SECONDARY }}>
          {typeLabel}
        </span>
      </div>

      {/* Conditions / Best For Tags */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1, paddingLeft: '32px', borderLeft: `2px solid ${COLORS.BG_RECESSED}` }}>
        <span style={{ fontFamily: FONTS.main, fontSize: '44px', fontWeight: 800, color: COLORS.INK_TERTIARY, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          Best Choice When:
        </span>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', flexWrap: 'wrap' }}>
          {conditions.map((cond, idx) => (
            <div key={idx} style={{
              backgroundColor: COLORS.BG_BASE,
              border: `2px solid ${COLORS.BG_RECESSED}`,
              borderRadius: '20px',
              padding: '16px 28px',
              display: 'flex',
              alignItems: 'center',
              gap: '16px'
            }}>
              {cond.icon}
              <span style={{ fontFamily: FONTS.main, fontSize: '48px', fontWeight: 700, color: COLORS.INK_PRIMARY }}>
                {cond.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- BEAT 1: SGOV SUMMARY ---
const SGOVSummarySequence: React.FC = () => {
  return (
    <EditorialLeftZone>
      <SectionHeader 
        title="Summary: SGOV" 
        subtitle="The Industry Gold Standard" 
        icon={<Award color={COLORS.ACCENT_HERO} size={80} strokeWidth={2.5} />} 
        delay={10}
      />
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '100%' }}>
        <SummaryCard 
          ticker="SGOV"
          typeLabel="0-3 Mo. Treasury Bills"
          bestForTitle="High State Tax & Falling Rates"
          conditions={[
            { label: 'High State Income Tax', icon: <MapPin color={COLORS.ACCENT_DETAIL} size={40} /> },
            { label: 'Rates Falling / Static', icon: <TrendingDown color={COLORS.ACCENT_DETAIL} size={40} /> }
          ]}
          accentColor={COLORS.ACCENT_DETAIL}
          isHero={false}
          delay={30}
        />
      </div>
    </EditorialLeftZone>
  );
};

// --- BEAT 2: USFR SUMMARY ---
const USFRSummarySequence: React.FC = () => {
  return (
    <EditorialLeftZone>
      <SectionHeader 
        title="Summary: USFR" 
        subtitle="Floating Rate Treasury" 
        icon={<RefreshCcw color={COLORS.ACCENT_DETAIL} size={80} strokeWidth={2.5} />} 
        delay={10}
      />
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '100%' }}>
        <SummaryCard 
          ticker="USFR"
          typeLabel="Floating Rate Notes"
          bestForTitle="Rising Interest Rates"
          conditions={[
            { label: 'Rising Interest Rates', icon: <TrendingUp color={COLORS.ACCENT_HERO} size={40} /> },
            { label: 'Weekly Adjustments', icon: <RefreshCcw color={COLORS.ACCENT_DETAIL} size={40} /> }
          ]}
          accentColor={COLORS.ACCENT_DETAIL}
          isHero={false}
          delay={30}
        />
      </div>
    </EditorialLeftZone>
  );
};

// --- BEAT 3: BOXX SUMMARY ---
const BOXXSummarySequence: React.FC = () => {
  return (
    <EditorialLeftZone>
      <SectionHeader 
        title="Summary: BOXX" 
        subtitle="S&P 500 Box Spread ETF" 
        icon={<Package color={COLORS.ACCENT_HERO} size={80} strokeWidth={2.5} />} 
        delay={10}
      />
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '100%' }}>
        <SummaryCard 
          ticker="BOXX"
          typeLabel="Synthetic Box Spreads"
          bestForTitle="1+ Year Hold in Zero State Tax"
          conditions={[
            { label: 'Hold 1+ Year (LTCG 15%)', icon: <CalendarCheck color={COLORS.ACCENT_HERO} size={40} /> },
            { label: 'Zero State Tax (TX, FL)', icon: <Landmark color={COLORS.ACCENT_HERO} size={40} /> }
          ]}
          accentColor={COLORS.ACCENT_HERO}
          isHero={true}
          delay={30}
        />
      </div>
    </EditorialLeftZone>
  );
};

// --- BEAT 4: ALL 3 TOGETHER FINAL VERDICT ---
const FinalDashboardSequence: React.FC = () => {
  return (
    <EditorialLeftZone>
      <SectionHeader 
        title="Final Decision Matrix" 
        subtitle="Match Your State & Timeline" 
        icon={<CheckCircle2 color={COLORS.ACCENT_HERO} size={80} strokeWidth={2.5} />} 
        delay={10}
      />
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
        <SummaryCard 
          ticker="SGOV"
          typeLabel="Treasury Bills"
          bestForTitle="High State Tax & Falling Rates"
          conditions={[
            { label: 'High Tax State', icon: <MapPin color={COLORS.ACCENT_DETAIL} size={36} /> },
            { label: 'Rates Lowering', icon: <TrendingDown color={COLORS.ACCENT_DETAIL} size={36} /> }
          ]}
          accentColor={COLORS.ACCENT_DETAIL}
          delay={25}
        />

        <SummaryCard 
          ticker="USFR"
          typeLabel="Floating Rate"
          bestForTitle="Rising Rates"
          conditions={[
            { label: 'Rates Rising', icon: <TrendingUp color={COLORS.ACCENT_HERO} size={36} /> },
            { label: 'High Tax State', icon: <MapPin color={COLORS.ACCENT_DETAIL} size={36} /> }
          ]}
          accentColor={COLORS.ACCENT_DETAIL}
          delay={45}
        />

        <SummaryCard 
          ticker="BOXX"
          typeLabel="Box Spreads"
          bestForTitle="1+ Year Zero Tax"
          conditions={[
            { label: 'Hold 1+ Year', icon: <CalendarCheck color={COLORS.ACCENT_HERO} size={36} /> },
            { label: 'Zero Tax State', icon: <Landmark color={COLORS.ACCENT_HERO} size={36} /> }
          ]}
          accentColor={COLORS.ACCENT_HERO}
          isHero={true}
          delay={65}
        />
      </div>
    </EditorialLeftZone>
  );
};

// --- MAIN COMPOSITION ---
export default function FinalSummaryScene() {
  return (
    <AbsoluteFill style={{ overflow: 'hidden' }}>
      
      <Sequence from={0}>
        <EditorialBackground />
      </Sequence>

      <AbsoluteFill>
        
        {/* BEAT 1: SGOV Summary (Frames 0 - 320, ~10s) */}
        <Sequence from={0} durationInFrames={320}>
          <SGOVSummarySequence />
        </Sequence>

        {/* BEAT 2: USFR Summary (Frames 320 - 640, ~10s) */}
        <Sequence from={320} durationInFrames={320}>
          <USFRSummarySequence />
        </Sequence>

        {/* BEAT 3: BOXX Summary (Frames 640 - 960, ~10s) */}
        <Sequence from={640} durationInFrames={320}>
          <BOXXSummarySequence />
        </Sequence>

        {/* BEAT 4: Final 3-ETF Matrix Dashboard (Frames 960+) */}
        <Sequence from={960}>
          <FinalDashboardSequence />
        </Sequence>

      </AbsoluteFill>

    </AbsoluteFill>
  );
}

export default FinalSummaryScene;