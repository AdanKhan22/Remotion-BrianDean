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
  Globe2,
  Minimize2,
  Sparkles,
  ExternalLink,
  Globe,
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
  AVANTIS_NAVY: '#0F2C59',
  AVANTIS_TEAL: '#008080',
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
        <pattern id="grid-b15" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
          <circle cx="6" cy="6" r="2.5" fill={COLORS.INK_TERTIARY} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-b15)" />
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

// --- BEAT 1: Avantis AVDV Website Overview Mockup Card ---
const Beat1_AVDVOverview: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titlePop = spring({ frame: frame - 5, fps, config: SPRING_CONFIG });
  const browserPop = spring({ frame: frame - 20, fps, config: SPRING_CONFIG });
  const badgePop = spring({ frame: frame - 60, fps, config: SPRING_CONFIG });

  return (
    <LeftZone>
      <div style={{ opacity: titlePop, transform: `translateY(${interpolate(titlePop, [0, 1], [40, 0])}px)`, marginBottom: '44px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '12px' }}>
          <Award size={48} color={COLORS.ACCENT_HERO} />
          <span style={{ fontFamily: FONTS.heading, fontSize: '44px', fontWeight: 900, color: COLORS.ACCENT_HERO, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Factor Contender 2 -- Deep Value & Small Cap
          </span>
        </div>
        <h1 style={{ fontFamily: FONTS.heading, fontSize: '104px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, lineHeight: 1.05 }}>
          Avantis Int'l Small Cap Value <span style={{ color: COLORS.ACCENT_HERO }}>(AVDV)</span>
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
              avantisinvestors.com/avantis-investments/avantis-international-small-cap-value-etf-avdv
            </span>
          </div>
          <ExternalLink size={28} color={COLORS.INK_TERTIARY} />
        </div>

        {/* Page Content */}
        <div style={{ padding: '52px 60px', backgroundColor: '#FAFAF8' }}>
          {/* Brand Banner */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '36px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{
                backgroundColor: COLORS.AVANTIS_NAVY,
                color: '#FFFFFF',
                fontFamily: FONTS.heading,
                fontSize: '34px',
                fontWeight: 900,
                padding: '8px 24px',
                borderRadius: '12px',
                letterSpacing: '1px',
              }}>
                Avantis Investors
              </div>
              <span style={{ fontFamily: FONTS.heading, fontSize: '40px', fontWeight: 900, color: COLORS.INK_PRIMARY }}>
                AVDV Profile & Summary
              </span>
            </div>
            
            <div style={{
              backgroundColor: 'rgba(184, 134, 46, 0.12)',
              padding: '12px 24px',
              borderRadius: '100px',
              border: `2px solid ${COLORS.ACCENT_HERO}`,
            }}>
              <span style={{ fontFamily: FONTS.heading, fontSize: '28px', fontWeight: 900, color: COLORS.ACCENT_HERO }}>
                TICKER: AVDV (NYSE Arca)
              </span>
            </div>
          </div>

          {/* Key AVDV Metrics */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }}>
            <div style={{ backgroundColor: '#FFFFFF', padding: '32px', borderRadius: '24px', border: '2px solid #EAE6DC', boxShadow: '0 8px 20px rgba(0,0,0,0.03)' }}>
              <div style={{ fontFamily: FONTS.body, fontSize: '26px', fontWeight: 800, color: COLORS.INK_TERTIARY, textTransform: 'uppercase' }}>Expense Ratio</div>
              <div style={{ fontFamily: FONTS.heading, fontSize: '68px', fontWeight: 900, color: COLORS.ACCENT_HERO, marginTop: '6px' }}>0.36%</div>
              <div style={{ fontFamily: FONTS.body, fontSize: '24px', fontWeight: 700, color: COLORS.INK_PRIMARY, marginTop: '6px' }}>Systematic active factor screen</div>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', padding: '32px', borderRadius: '24px', border: '2px solid #EAE6DC', boxShadow: '0 8px 20px rgba(0,0,0,0.03)' }}>
              <div style={{ fontFamily: FONTS.body, fontSize: '26px', fontWeight: 800, color: COLORS.INK_TERTIARY, textTransform: 'uppercase' }}>Holdings Count</div>
              <div style={{ fontFamily: FONTS.heading, fontSize: '68px', fontWeight: 900, color: COLORS.ACCENT_DETAIL, marginTop: '6px' }}>~1,400+</div>
              <div style={{ fontFamily: FONTS.body, fontSize: '24px', fontWeight: 700, color: COLORS.INK_PRIMARY, marginTop: '6px' }}>International small-cap value</div>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', padding: '32px', borderRadius: '24px', border: '2px solid #EAE6DC', boxShadow: '0 8px 20px rgba(0,0,0,0.03)' }}>
              <div style={{ fontFamily: FONTS.body, fontSize: '26px', fontWeight: 800, color: COLORS.INK_TERTIARY, textTransform: 'uppercase' }}>Single Stock Cap</div>
              <div style={{ fontFamily: FONTS.heading, fontSize: '68px', fontWeight: 900, color: COLORS.INK_PRIMARY, marginTop: '6px' }}>0.50%</div>
              <div style={{ fontFamily: FONTS.body, fontSize: '24px', fontWeight: 700, color: COLORS.INK_PRIMARY, marginTop: '6px' }}>Hard maximum weight limit</div>
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
        borderLeft: `10px solid ${COLORS.ACCENT_HERO}`,
        opacity: badgePop,
        transform: `translateY(${interpolate(badgePop, [0, 1], [30, 0])}px)`,
      }}>
        <span style={{ fontFamily: FONTS.heading, fontSize: '42px', fontWeight: 900, color: COLORS.INK_PRIMARY }}>
          Designed specifically to target the small-cap and value factors outside the United States.
        </span>
      </div>
    </LeftZone>
  );
};

// --- BEAT 2: The 3-Gap Factor Trifecta (Vertical Stacked List as requested by Brian) ---
const Beat2_FactorTrifectaVertical: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headerPop = spring({ frame: frame - 5, fps, config: SPRING_CONFIG });
  const trifecta = [
    {
      num: '1',
      title: 'Geographic Gap: Non-US Developed Markets',
      desc: 'Invests exclusively in international powerhouses across Japan, Europe, the UK & Asia Pacific.',
      tag: 'Global Reach',
      icon: <Globe2 size={52} color={COLORS.ACCENT_DETAIL} />,
      accent: COLORS.ACCENT_DETAIL,
    },
    {
      num: '2',
      title: 'Company Size Gap: Small-Cap Value Orientation',
      desc: 'Completely circumvents $3 Trillion mega-cap concentration by owning agile, market-cap-screened businesses.',
      tag: 'Size Factor',
      icon: <Minimize2 size={52} color={COLORS.ACCENT_HERO} />,
      accent: COLORS.ACCENT_HERO,
    },
    {
      num: '3',
      title: 'Valuation Gap: Deep Discount Multiples',
      desc: 'Systematically buys stocks with low valuations relative to robust, audited operating profitability.',
      tag: 'Value Factor',
      icon: <Sparkles size={52} color={COLORS.INK_PRIMARY} />,
      accent: COLORS.INK_PRIMARY,
    },
  ];

  return (
    <LeftZone>
      <div style={{ transform: `translateY(${interpolate(headerPop, [0, 1], [30, 0])}px)`, opacity: headerPop, marginBottom: '40px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '18px', backgroundColor: `${COLORS.ACCENT_HERO}18`, padding: '14px 34px', borderRadius: '32px', marginBottom: '16px' }}>
          <Sparkles size={46} color={COLORS.ACCENT_HERO} />
          <span style={{ fontFamily: FONTS.heading, fontSize: '46px', fontWeight: 800, color: COLORS.ACCENT_HERO, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            The 3-Gap Factor Trifecta
          </span>
        </div>
        <h1 style={{ fontFamily: FONTS.heading, fontSize: '108px', fontWeight: 900, color: COLORS.INK_PRIMARY, margin: 0, letterSpacing: '-0.03em', lineHeight: 1.05 }}>
          Targeting 3 Core Blind Spots
        </h1>
        <p style={{ fontFamily: FONTS.body, fontSize: '48px', fontWeight: 700, color: COLORS.INK_SECONDARY, margin: '12px 0 0 0' }}>
          Simultaneously diversifies geography, company size, and valuation multiples
        </p>
      </div>

      {/* Vertically Arranged Cards (Large & Conducive to Text Sizing) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '26px', width: '100%' }}>
        {trifecta.map((t, idx) => {
          const pop = spring({ frame: frame - (20 + idx * 14), fps, config: SPRING_CONFIG });
          return (
            <div
              key={t.num}
              style={{
                backgroundColor: COLORS.BG_ELEVATED,
                border: `4px solid ${COLORS.BG_RECESSED}`,
                borderLeft: `20px solid ${t.accent}`,
                borderRadius: '36px',
                padding: '40px 48px',
                display: 'flex',
                alignItems: 'center',
                gap: '36px',
                boxShadow: '0 16px 40px rgba(30, 27, 22, 0.06)',
                transform: `translateY(${interpolate(pop, [0, 1], [35, 0])}px)`,
                opacity: pop,
              }}
            >
              <div
                style={{
                  backgroundColor: COLORS.BG_BASE,
                  width: '92px',
                  height: '92px',
                  borderRadius: '26px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: `2px solid ${COLORS.BG_RECESSED}`,
                  flexShrink: 0,
                }}
              >
                {t.icon}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontFamily: FONTS.heading, fontSize: '56px', fontWeight: 900, color: COLORS.INK_PRIMARY }}>
                    {t.title}
                  </span>
                  <div style={{ backgroundColor: `${t.accent}18`, padding: '8px 22px', borderRadius: '16px' }}>
                    <span style={{ fontFamily: FONTS.heading, fontSize: '34px', fontWeight: 800, color: t.accent }}>
                      {t.tag}
                    </span>
                  </div>
                </div>
                <span style={{ fontFamily: FONTS.body, fontSize: '46px', fontWeight: 700, color: COLORS.INK_PRIMARY, lineHeight: 1.3 }}>
                  {t.desc}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </LeftZone>
  );
};

export default function Block15_AVDVFactorTrifectaScene() {
  return (
    <AbsoluteFill style={{ overflow: 'hidden' }}>
      <Sequence from={0}>
        <EditorialBackground />
      </Sequence>

      <AbsoluteFill>
        {/* BEAT 1: 0 - 450 frames (~15s) */}
        <Sequence from={0} durationInFrames={450}>
          <Audio src={staticFile('pop-sfx.mp3')} volume={0.15} />
          <Beat1_AVDVOverview />
        </Sequence>

        {/* BEAT 2: 450 - 900 frames (~15s) */}
        <Sequence from={450}>
          <Audio src={staticFile('pop-sfx.mp3')} volume={0.15} />
          <Beat2_FactorTrifectaVertical />
        </Sequence>
      </AbsoluteFill>
    </AbsoluteFill>
  );
}