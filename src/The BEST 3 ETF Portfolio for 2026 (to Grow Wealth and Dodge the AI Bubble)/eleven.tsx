/**
 * BLOCK 13: Complementary Option A — ACWX Global Footprint & 16% Concentration
 * Duration: 960 frames (~32 seconds)
 * 
 * Multi-Beat Architecture:
 * - Beat 1 (0-450): 1,700 Non-US Companies & Country Footprint (Japan, UK, Canada, China, Taiwan, India)
 * - Beat 2 (450-960): Concentration Contrast (ACWX 16% vs VOO 40%)
 */

import React from 'react';
import {
  AbsoluteFill,
  Sequence,
  spring,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  Audio,
  staticFile,
} from 'remotion';
import {
  Globe,
  ExternalLink,
  ShieldCheck,
  Award,
} from 'lucide-react';

const COLORS = {
  BG_BASE: '#F3EEE4',
  BG_ELEVATED: '#FAF6EC',
  BG_RECESSED: '#EAE3D3',

  INK_PRIMARY: '#1E1B16',
  INK_SECONDARY: '#5C564A',
  INK_TERTIARY: '#8C8474',

  ACCENT_HERO: '#B8862E',
  ACCENT_NEGATIVE: '#B5533C',
  ACCENT_DETAIL: '#3C6E71',
  DARK_SLAB: '#1A1714',
  ISHARES_BLACK: '#111111',
  ISHARES_YELLOW: '#F7B200',
};

const FONTS = {
  heading: 'Poppins, Inter, Helvetica Neue, Helvetica, Arial, sans-serif',
  body: 'Inter, Roboto, Helvetica Neue, Helvetica, Arial, sans-serif',
};

const SPRING_CONFIG = { damping: 200, stiffness: 120, mass: 0.8 };

const EditorialBackground: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: COLORS.BG_BASE }}>
    <svg style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0.22 }}>
      <defs>
        <pattern id="grid-b13" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
          <circle cx="6" cy="6" r="2.5" fill={COLORS.INK_TERTIARY} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-b13)" />
    </svg>
    <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at 35% 30%, rgba(250, 246, 236, 0.75) 0%, rgba(234, 227, 211, 0.45) 100%)`, pointerEvents: 'none' }} />
  </AbsoluteFill>
);

const LeftZone: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div
    style={{
      position: 'absolute',
      left: 0,
      top: 0,
      width: '2304px',
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

// --- BEAT 1: iShares ACWX Website Overview Mockup Card ---
const Beat1_ACWXOverview: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titlePop = spring({ frame: frame - 5, fps, config: SPRING_CONFIG });
  const browserPop = spring({ frame: frame - 20, fps, config: SPRING_CONFIG });
  const badgePop = spring({ frame: frame - 60, fps, config: SPRING_CONFIG });

  return (
    <LeftZone>
      <div style={{ opacity: titlePop, transform: `translateY(${interpolate(titlePop, [0, 1], [40, 0])}px)`, marginBottom: '44px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '12px' }}>
          <Award size={48} color={COLORS.ACCENT_DETAIL} />
          <span style={{ fontFamily: FONTS.heading, fontSize: '44px', fontWeight: 900, color: COLORS.ACCENT_DETAIL, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Complementary Option A -- Global Simplicity
          </span>
        </div>
        <h1 style={{ fontFamily: FONTS.heading, fontSize: '108px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, lineHeight: 1.05 }}>
          iShares MSCI ACWI ex US <span style={{ color: COLORS.ACCENT_DETAIL }}>(ACWX)</span>
        </h1>
      </div>

      {/* Browser Window Mockup */}
      <div style={{
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderRadius: '36px',
        overflow: 'hidden',
        boxShadow: '0 32px 70px rgba(0,0,0,0.14)',
        border: `3px solid ${COLORS.BG_RECESSED}`,
        opacity: browserPop,
        transform: `translateY(${interpolate(browserPop, [0, 1], [60, 0])}px)`,
      }}>
        {/* Browser Top Navigation Bar */}
        <div style={{
          backgroundColor: '#F4F3EE',
          padding: '20px 32px',
          display: 'flex',
          alignItems: 'center',
          gap: '24px',
          borderBottom: '2px solid #E5E1D8',
        }}>
          <div style={{ display: 'flex', gap: '10px' }}>
            <div style={{ width: '18px', height: '18px', borderRadius: '50%', backgroundColor: '#FF5F56' }} />
            <div style={{ width: '18px', height: '18px', borderRadius: '50%', backgroundColor: '#FFBD2E' }} />
            <div style={{ width: '18px', height: '18px', borderRadius: '50%', backgroundColor: '#27C93F' }} />
          </div>

          <div style={{
            flex: 1,
            backgroundColor: '#FFFFFF',
            borderRadius: '14px',
            padding: '12px 24px',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            border: '1px solid #D8D3C8',
          }}>
            <Globe size={24} color={COLORS.INK_TERTIARY} />
            <span style={{ fontFamily: FONTS.body, fontSize: '26px', fontWeight: 700, color: COLORS.INK_SECONDARY }}>
              ishares.com/us/products/239594/ishares-msci-acwi-ex-us-etf
            </span>
          </div>
          <ExternalLink size={28} color={COLORS.INK_TERTIARY} />
        </div>

        {/* Page Content */}
        <div style={{ padding: '52px 60px', backgroundColor: '#FAFAF8' }}>
          {/* iShares Brand Banner */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '36px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{
                backgroundColor: COLORS.ISHARES_BLACK,
                color: '#FFFFFF',
                fontFamily: FONTS.heading,
                fontSize: '36px',
                fontWeight: 900,
                padding: '8px 24px',
                borderRadius: '12px',
                letterSpacing: '1px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}>
                <span>iShares</span>
                <span style={{ color: COLORS.ISHARES_YELLOW }}>by BlackRock</span>
              </div>
              <span style={{ fontFamily: FONTS.heading, fontSize: '40px', fontWeight: 900, color: COLORS.INK_PRIMARY }}>
                ACWX Fund Overview
              </span>
            </div>
            
            <div style={{
              backgroundColor: 'rgba(60, 110, 113, 0.12)',
              padding: '12px 24px',
              borderRadius: '100px',
              border: `2px solid ${COLORS.ACCENT_DETAIL}`,
            }}>
              <span style={{ fontFamily: FONTS.heading, fontSize: '28px', fontWeight: 900, color: COLORS.ACCENT_DETAIL }}>
                TICKER: ACWX (NASDAQ)
              </span>
            </div>
          </div>

          {/* Key ACWX Metrics */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }}>
            <div style={{ backgroundColor: '#FFFFFF', padding: '32px', borderRadius: '24px', border: '2px solid #EAE6DC', boxShadow: '0 8px 20px rgba(0,0,0,0.03)' }}>
              <div style={{ fontFamily: FONTS.body, fontSize: '26px', fontWeight: 800, color: COLORS.INK_TERTIARY, textTransform: 'uppercase' }}>Total Holdings</div>
              <div style={{ fontFamily: FONTS.heading, fontSize: '68px', fontWeight: 900, color: COLORS.ACCENT_DETAIL, marginTop: '6px' }}>~1,700</div>
              <div style={{ fontFamily: FONTS.body, fontSize: '24px', fontWeight: 700, color: COLORS.INK_PRIMARY, marginTop: '6px' }}>Companies outside the US</div>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', padding: '32px', borderRadius: '24px', border: '2px solid #EAE6DC', boxShadow: '0 8px 20px rgba(0,0,0,0.03)' }}>
              <div style={{ fontFamily: FONTS.body, fontSize: '26px', fontWeight: 800, color: COLORS.INK_TERTIARY, textTransform: 'uppercase' }}>Global Footprint</div>
              <div style={{ fontFamily: FONTS.heading, fontSize: '68px', fontWeight: 900, color: COLORS.ACCENT_HERO, marginTop: '6px' }}>40+</div>
              <div style={{ fontFamily: FONTS.body, fontSize: '24px', fontWeight: 700, color: COLORS.INK_PRIMARY, marginTop: '6px' }}>Developed & Emerging Nations</div>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', padding: '32px', borderRadius: '24px', border: '2px solid #EAE6DC', boxShadow: '0 8px 20px rgba(0,0,0,0.03)' }}>
              <div style={{ fontFamily: FONTS.body, fontSize: '26px', fontWeight: 800, color: COLORS.INK_TERTIARY, textTransform: 'uppercase' }}>Benchmark Index</div>
              <div style={{ fontFamily: FONTS.heading, fontSize: '44px', fontWeight: 900, color: COLORS.INK_PRIMARY, marginTop: '12px', lineHeight: 1.15 }}>MSCI ACWI ex-US</div>
              <div style={{ fontFamily: FONTS.body, fontSize: '24px', fontWeight: 700, color: COLORS.INK_PRIMARY, marginTop: '10px' }}>Comprehensive world ex-US</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Takeaway */}
      <div style={{
        marginTop: '40px',
        backgroundColor: COLORS.BG_ELEVATED,
        padding: '24px 44px',
        borderRadius: '24px',
        borderLeft: `10px solid ${COLORS.ACCENT_DETAIL}`,
        opacity: badgePop,
        transform: `translateY(${interpolate(badgePop, [0, 1], [30, 0])}px)`,
      }}>
        <span style={{ fontFamily: FONTS.heading, fontSize: '42px', fontWeight: 900, color: COLORS.INK_PRIMARY }}>
          Japan, UK, Canada, France, Switzerland, China, Taiwan & India — all in one ETF.
        </span>
      </div>
    </LeftZone>
  );
};

// --- BEAT 2: Concentration Contrast with Side-by-Side Donut Pie Charts ---
const Beat2_ConcentrationPieCharts: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headerPop = spring({ frame: frame - 5, fps, config: SPRING_CONFIG });
  const chartPop = spring({ frame: frame - 22, fps, config: SPRING_CONFIG });

  // Pie chart calculation
  const radius = 180;
  const strokeWidth = 54;
  const circumference = 2 * Math.PI * radius;

  // ACWX: 16% top 10
  const acwxTop10Offset = circumference * (1 - 0.16);
  // VOO: 40% top 10
  const vooTop10Offset = circumference * (1 - 0.40);

  return (
    <LeftZone>
      <div style={{ transform: `translateY(${interpolate(headerPop, [0, 1], [30, 0])}px)`, opacity: headerPop, marginBottom: '44px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '18px', backgroundColor: `${COLORS.ACCENT_HERO}18`, padding: '14px 34px', borderRadius: '32px', marginBottom: '16px' }}>
          <ShieldCheck size={46} color={COLORS.ACCENT_HERO} />
          <span style={{ fontFamily: FONTS.heading, fontSize: '46px', fontWeight: 800, color: COLORS.ACCENT_HERO, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            Concentration Defense Comparison
          </span>
        </div>
        <h1 style={{ fontFamily: FONTS.heading, fontSize: '112px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, letterSpacing: '-0.03em', lineHeight: 1.05 }}>
          Top 10 Holdings Concentration
        </h1>
        <p style={{ fontFamily: FONTS.body, fontSize: '50px', fontWeight: 700, color: COLORS.INK_SECONDARY, margin: '14px 0 0 0' }}>
          ACWX delivers less than half the top-10 concentration of the S&P 500
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px', width: '100%' }}>
        {/* ACWX Donut Chart Card */}
        <div
          style={{
            backgroundColor: COLORS.BG_ELEVATED,
            border: `4px solid ${COLORS.ACCENT_DETAIL}`,
            borderRadius: '40px',
            padding: '52px 48px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '28px',
            boxShadow: '0 24px 56px rgba(60, 110, 113, 0.12)',
            transform: `translateY(${interpolate(chartPop, [0, 1], [40, 0])}px)`,
            opacity: chartPop,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
            <span style={{ fontFamily: FONTS.heading, fontSize: '46px', fontWeight: 900, color: COLORS.ACCENT_DETAIL }}>
              ACWX (MSCI ACWI Ex-US)
            </span>
            <div style={{ backgroundColor: `${COLORS.ACCENT_DETAIL}20`, padding: '10px 24px', borderRadius: '16px' }}>
              <span style={{ fontFamily: FONTS.heading, fontSize: '36px', fontWeight: 800, color: COLORS.ACCENT_DETAIL }}>
                BALANCED
              </span>
            </div>
          </div>

          {/* SVG Donut Chart */}
          <div style={{ position: 'relative', width: '420px', height: '420px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="420" height="420" viewBox="0 0 420 420" style={{ transform: 'rotate(-90deg)' }}>
              {/* Background ring: 84% Remaining holdings */}
              <circle
                cx="210"
                cy="210"
                r={radius}
                fill="transparent"
                stroke={COLORS.BG_RECESSED}
                strokeWidth={strokeWidth}
              />
              {/* Foreground arc: 16% Top 10 */}
              <circle
                cx="210"
                cy="210"
                r={radius}
                fill="transparent"
                stroke={COLORS.ACCENT_DETAIL}
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={interpolate(chartPop, [0, 1], [circumference, acwxTop10Offset])}
                strokeLinecap="round"
              />
            </svg>
            <div style={{ position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontFamily: FONTS.heading, fontSize: '96px', fontWeight: 900, color: COLORS.ACCENT_DETAIL, lineHeight: 1 }}>
                16%
              </span>
              <span style={{ fontFamily: FONTS.body, fontSize: '32px', fontWeight: 800, color: COLORS.INK_TERTIARY, textTransform: 'uppercase' }}>
                Top 10 Holdings
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%', borderTop: `2px solid ${COLORS.BG_RECESSED}`, paddingTop: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: COLORS.ACCENT_DETAIL }} />
              <span style={{ fontFamily: FONTS.body, fontSize: '38px', fontWeight: 700, color: COLORS.INK_PRIMARY }}>Top 10: 16%</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: COLORS.INK_TERTIARY }} />
              <span style={{ fontFamily: FONTS.body, fontSize: '38px', fontWeight: 700, color: COLORS.INK_PRIMARY }}>Other 1,690: 84%</span>
            </div>
          </div>
        </div>

        {/* VOO Donut Chart Card */}
        <div
          style={{
            backgroundColor: COLORS.BG_ELEVATED,
            border: `4px solid ${COLORS.ACCENT_NEGATIVE}`,
            borderRadius: '40px',
            padding: '48px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '28px',
            boxShadow: '0 24px 56px rgba(181, 83, 60, 0.12)',
            transform: `translateY(${interpolate(chartPop, [0, 1], [40, 0])}px)`,
            opacity: chartPop,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
            <span style={{ fontFamily: FONTS.heading, fontSize: '52px', fontWeight: 900, color: COLORS.ACCENT_NEGATIVE }}>
              VOO (S&P 500)
            </span>
            <div style={{ backgroundColor: `${COLORS.ACCENT_NEGATIVE}20`, padding: '10px 24px', borderRadius: '16px' }}>
              <span style={{ fontFamily: FONTS.heading, fontSize: '36px', fontWeight: 800, color: COLORS.ACCENT_NEGATIVE }}>
                CONCENTRATED
              </span>
            </div>
          </div>

          {/* SVG Donut Chart */}
          <div style={{ position: 'relative', width: '420px', height: '420px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="420" height="420" viewBox="0 0 420 420" style={{ transform: 'rotate(-90deg)' }}>
              <circle
                cx="210"
                cy="210"
                r={radius}
                fill="transparent"
                stroke={COLORS.BG_RECESSED}
                strokeWidth={strokeWidth}
              />
              <circle
                cx="210"
                cy="210"
                r={radius}
                fill="transparent"
                stroke={COLORS.ACCENT_NEGATIVE}
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={interpolate(chartPop, [0, 1], [circumference, vooTop10Offset])}
                strokeLinecap="round"
              />
            </svg>
            <div style={{ position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontFamily: FONTS.heading, fontSize: '96px', fontWeight: 900, color: COLORS.ACCENT_NEGATIVE, lineHeight: 1 }}>
                40%
              </span>
              <span style={{ fontFamily: FONTS.body, fontSize: '32px', fontWeight: 800, color: COLORS.INK_TERTIARY, textTransform: 'uppercase' }}>
                Top 10 Holdings
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%', borderTop: `2px solid ${COLORS.BG_RECESSED}`, paddingTop: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: COLORS.ACCENT_NEGATIVE }} />
              <span style={{ fontFamily: FONTS.body, fontSize: '38px', fontWeight: 700, color: COLORS.INK_PRIMARY }}>Top 10: 40%</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: COLORS.INK_TERTIARY }} />
              <span style={{ fontFamily: FONTS.body, fontSize: '38px', fontWeight: 700, color: COLORS.INK_PRIMARY }}>Other 490: 60%</span>
            </div>
          </div>
        </div>
      </div>
    </LeftZone>
  );
};

export default function Block13_ACWXGlobalFootprintScene() {
  return (
    <AbsoluteFill style={{ overflow: 'hidden' }}>
      <Sequence from={0}>
        <EditorialBackground />
      </Sequence>

      <AbsoluteFill>
        {/* BEAT 1: 0 - 450 frames (~15s) */}
        <Sequence from={0} durationInFrames={450}>
          <Audio src={staticFile('pop-sfx.mp3')} volume={0.15} />
          <Beat1_ACWXOverview />
        </Sequence>

        {/* BEAT 2: 450 - 960 frames (~17s) */}
        <Sequence from={450}>
          <Audio src={staticFile('pop-sfx.mp3')} volume={0.15} />
          <Beat2_ConcentrationPieCharts />
        </Sequence>
      </AbsoluteFill>
    </AbsoluteFill>
  );
}