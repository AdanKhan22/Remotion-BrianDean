/**
 * BLOCK 4: FRACTIONAL SHARES & MARKET-CAP WEIGHTING BREAKDOWN ($100 VOO EXAMPLE)
 * Canvas: Native 4K UHD (3840 x 2160), 60 FPS
 * Layout: 60/40 Left Zone (Max width 2304px, Right 40% reserved for host camera)
 * Style: Cinematic Motion Graphic Data Visualization (NO PowerPoint text slides)
 *
 * SCRIPT BEATS VISUALIZED:
 * Beat 1 (0 - 360f / 6s):
 *   "Your $100 buys a fraction of 1 share of VOO. 1 share is ~$700+, so you get ~0.14 shares."
 *   -> Visual: Massive Split Dial / Fractional Bar showing 1 Whole Share vs the 0.14 Share Fraction.
 *
 * Beat 2 (360 - 780f / 7s):
 *   "VOO isn't split evenly across 500 companies. It is market-cap weighted:
 *    The bigger the company, the more of your $100 goes in."
 *   -> Visual: Kinetic Animated Bar / Podium Pillars visualizing the actual dollar breakdown:
 *      • NVIDIA: $8.00
 *      • Microsoft: $7.00
 *      • Apple: $6.00
 *      • Smallest S&P 500 stocks: $0.01 (a single penny)
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

const COLORS = {
  BG_BASE: "#F3EEE4",
  BG_ELEVATED: "#FAF6EC",
  BG_RECESSED: "#EAE3D3",
  INK_PRIMARY: "#1A1714",
  INK_SECONDARY: "#5C564A",
  INK_MUTED: "#8C8474",

  PINE_JADE: "#0D7A53",
  PINE_JADE_BG: "rgba(13, 122, 83, 0.12)",
  OCHRE_GOLD: "#B8862E",
  OCHRE_GOLD_BG: "rgba(184, 134, 46, 0.14)",
  STRIPE_COBALT: "#2557D6",
  STRIPE_COBALT_BG: "rgba(37, 87, 214, 0.12)",
  DARK_SLAB: "#1A1714",
};

const FONTS = {
  heading: "Poppins, Inter, sans-serif",
  body: "Inter, sans-serif",
};

const SPRING_CONFIG = { damping: 200, stiffness: 120, mass: 0.8 };

export const BLOCK_4_DURATION = 780; // 13 seconds @ 60 FPS

// 60/40 Left Zone container
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
      paddingRight: '120px',
      boxSizing: 'border-box',
    }}
  >
    {children}
  </div>
);

// ========================================================
// BEAT 1: THE FRACTIONAL SHARE SLICE (~0.14 SHARES)
// ========================================================
const Beat1_FractionalSlice: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titlePop = spring({ frame: frame - 4, fps, config: SPRING_CONFIG });
  const cardPop = spring({ frame: frame - 15, fps, config: SPRING_CONFIG });
  const barGrow = spring({ frame: frame - 28, fps, config: { damping: 28, stiffness: 90, mass: 1 } });
  const badgePop = spring({ frame: frame - 50, fps, config: SPRING_CONFIG });

  const exitOpacity = interpolate(frame, [340, 360], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <LeftZone>
      <div style={{ opacity: exitOpacity }}>
        {/* Category Header */}
        <div
          style={{
            marginBottom: '40px',
            opacity: titlePop,
            transform: `translateY(${interpolate(titlePop, [0, 1], [30, 0])}px)`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '14px' }}>
            <div
              style={{
                backgroundColor: COLORS.PINE_JADE_BG,
                padding: '12px 28px',
                borderRadius: '9999px',
                border: `2px solid ${COLORS.PINE_JADE}40`,
              }}
            >
              <span
                style={{
                  fontFamily: FONTS.heading,
                  fontSize: '48px',
                  fontWeight: 800,
                  color: COLORS.PINE_JADE,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}
              >
                Order Mechanics
              </span>
            </div>
            <span style={{ fontFamily: FONTS.heading, fontSize: '48px', fontWeight: 800, color: COLORS.INK_MUTED }}>
              Fidelity • Robinhood • Schwab
            </span>
          </div>

          <h1
            style={{
              fontFamily: FONTS.heading,
              fontSize: '135px',
              fontWeight: 900,
              color: COLORS.INK_PRIMARY,
              margin: 0,
              lineHeight: 1.05,
              letterSpacing: '-0.04em',
            }}
          >
            How $100 Buys <span style={{ color: COLORS.PINE_JADE }}>$VOO</span>
          </h1>
        </div>

        {/* Visual Hero Card */}
        <div
          style={{
            width: '100%',
            backgroundColor: COLORS.BG_ELEVATED,
            borderRadius: '52px',
            padding: '70px 80px',
            boxSizing: 'border-box',
            boxShadow: '0 30px 80px rgba(0,0,0,0.06)',
            border: `3px solid ${COLORS.BG_RECESSED}`,
            display: 'flex',
            flexDirection: 'column',
            gap: '50px',
            opacity: cardPop,
            transform: `translateY(${interpolate(cardPop, [0, 1], [40, 0])}px)`,
          }}
        >
          {/* Top Row: The Two Anchor Numbers */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div>
              <div
                style={{
                  fontFamily: FONTS.heading,
                  fontSize: '48px',
                  fontWeight: 800,
                  color: COLORS.INK_MUTED,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}
              >
                Your Purchase
              </div>
              <div
                style={{
                  fontFamily: FONTS.heading,
                  fontSize: '160px',
                  fontWeight: 900,
                  color: COLORS.INK_PRIMARY,
                  lineHeight: 0.95,
                  marginTop: '10px',
                  letterSpacing: '-0.04em',
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                $100.00
              </div>
            </div>

            <div style={{ textAlign: 'right' }}>
              <div
                style={{
                  fontFamily: FONTS.heading,
                  fontSize: '48px',
                  fontWeight: 800,
                  color: COLORS.PINE_JADE,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}
              >
                VOO Unit Price
              </div>
              <div
                style={{
                  fontFamily: FONTS.heading,
                  fontSize: '160px',
                  fontWeight: 900,
                  color: COLORS.PINE_JADE,
                  lineHeight: 0.95,
                  marginTop: '10px',
                  letterSpacing: '-0.04em',
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                $706.29
              </div>
            </div>
          </div>

          {/* Visual Fractional Gauge Bar */}
          <div style={{ position: 'relative', width: '100%', height: '140px' }}>
            {/* Background Track (1 Whole Share) */}
            <div
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: COLORS.BG_RECESSED,
                borderRadius: '32px',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                paddingRight: '40px',
              }}
            >
              <span
                style={{
                  fontFamily: FONTS.heading,
                  fontSize: '48px',
                  fontWeight: 800,
                  color: COLORS.INK_MUTED,
                }}
              >
                1 Whole Share = 1.00
              </span>
            </div>

            {/* Filled Animated Fraction */}
            <div
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: `${interpolate(barGrow, [0, 1], [0, 14.2])}%`,
                height: '100%',
                backgroundColor: COLORS.DARK_SLAB,
                borderRadius: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
              }}
            >
              <span
                style={{
                  fontFamily: FONTS.heading,
                  fontSize: '40px',
                  fontWeight: 900,
                  color: '#FFFFFF',
                  whiteSpace: 'nowrap',
                }}
              >
                0.14 Share
              </span>
            </div>
          </div>

          {/* Bottom Clarifying Takeaway */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderTop: `3px solid ${COLORS.BG_RECESSED}`,
              paddingTop: '36px',
              opacity: badgePop,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <span style={{ fontSize: '54px', color: COLORS.PINE_JADE, fontWeight: 900 }}>•</span>
              <span
                style={{
                  fontFamily: FONTS.heading,
                  fontSize: '52px',
                  fontWeight: 800,
                  color: COLORS.INK_PRIMARY,
                }}
              >
                Fractional share owns identical 500-stock basket
              </span>
            </div>
            <div
              style={{
                backgroundColor: COLORS.OCHRE_GOLD_BG,
                padding: '14px 34px',
                borderRadius: '999px',
                color: COLORS.OCHRE_GOLD,
                fontFamily: FONTS.heading,
                fontSize: '48px',
                fontWeight: 800,
              }}
            >
              Normal
            </div>
          </div>
        </div>
      </div>
    </LeftZone>
  );
};

// ========================================================
// BEAT 2: MARKET-CAP WEIGHTING BREAKDOWN ($8, $7, $6, $0.01)
// ========================================================
const Beat2_MarketCapWeights: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titlePop = spring({ frame: frame - 4, fps, config: SPRING_CONFIG });
  const cardPop = spring({ frame: frame - 15, fps, config: SPRING_CONFIG });

  const b1 = spring({ frame: frame - 28, fps, config: { damping: 24, stiffness: 100, mass: 0.8 } });
  const b2 = spring({ frame: frame - 40, fps, config: { damping: 24, stiffness: 100, mass: 0.8 } });
  const b3 = spring({ frame: frame - 52, fps, config: { damping: 24, stiffness: 100, mass: 0.8 } });
  const b4 = spring({ frame: frame - 64, fps, config: { damping: 24, stiffness: 100, mass: 0.8 } });

  const exitOpacity = interpolate(frame, [400, 420], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const weights = [
    { ticker: "NVDA", name: "NVIDIA", amount: "$8.00", pct: "8.0%", height: 420, color: COLORS.PINE_JADE, springVal: b1 },
    { ticker: "MSFT", name: "Microsoft", amount: "$7.00", pct: "7.0%", height: 360, color: COLORS.STRIPE_COBALT, springVal: b2 },
    { ticker: "AAPL", name: "Apple", amount: "$6.00", pct: "6.0%", height: 310, color: COLORS.OCHRE_GOLD, springVal: b3 },
    { ticker: "SMALL", name: "Smallest 100", amount: "$0.01", pct: "~0.01%", height: 110, color: COLORS.INK_MUTED, springVal: b4 },
  ];

  return (
    <LeftZone>
      <div style={{ opacity: exitOpacity }}>
        {/* Header */}
        <div
          style={{
            marginBottom: '40px',
            opacity: titlePop,
            transform: `translateY(${interpolate(titlePop, [0, 1], [30, 0])}px)`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '14px' }}>
            <div
              style={{
                backgroundColor: COLORS.OCHRE_GOLD_BG,
                padding: '12px 28px',
                borderRadius: '9999px',
                border: `2px solid ${COLORS.OCHRE_GOLD}40`,
              }}
            >
              <span
                style={{
                  fontFamily: FONTS.heading,
                  fontSize: '48px',
                  fontWeight: 800,
                  color: COLORS.OCHRE_GOLD,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}
              >
                Index Weighting
              </span>
            </div>
            <span style={{ fontFamily: FONTS.heading, fontSize: '48px', fontWeight: 800, color: COLORS.INK_MUTED }}>
              Not Split Evenly (500 Companies)
            </span>
          </div>

          <h1
            style={{
              fontFamily: FONTS.heading,
              fontSize: '135px',
              fontWeight: 900,
              color: COLORS.INK_PRIMARY,
              margin: 0,
              lineHeight: 1.05,
              letterSpacing: '-0.04em',
            }}
          >
            Where Your <span style={{ color: COLORS.OCHRE_GOLD }}>$100 Goes</span>
          </h1>
        </div>

        {/* 4 Kinetic Graphic Pillars (Pure Visual Data Visualization) */}
        <div
          style={{
            width: '100%',
            backgroundColor: COLORS.BG_ELEVATED,
            borderRadius: '52px',
            padding: '60px 70px 50px 70px',
            boxSizing: 'border-box',
            boxShadow: '0 30px 80px rgba(0,0,0,0.06)',
            border: `3px solid ${COLORS.BG_RECESSED}`,
            display: 'flex',
            flexDirection: 'column',
            gap: '30px',
            opacity: cardPop,
            transform: `translateY(${interpolate(cardPop, [0, 1], [40, 0])}px)`,
          }}
        >
          {/* Chart Columns Area */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '40px',
              alignItems: 'flex-end',
              height: '520px',
              borderBottom: `4px solid ${COLORS.BG_RECESSED}`,
              paddingBottom: '20px',
            }}
          >
            {weights.map((w, idx) => {
              const currentHeight = interpolate(w.springVal, [0, 1], [0, w.height]);
              const popOpacity = Math.max(0, w.springVal);

              return (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    height: '100%',
                    opacity: popOpacity,
                  }}
                >
                  {/* Floating Stat Value on Top of Pillar */}
                  <div
                    style={{
                      fontFamily: FONTS.heading,
                      fontSize: '56px',
                      fontWeight: 900,
                      color: w.color,
                      marginBottom: '16px',
                      fontVariantNumeric: 'tabular-nums',
                    }}
                  >
                    {w.amount}
                  </div>

                  {/* Physical Visual Pillar */}
                  <div
                    style={{
                      width: '100%',
                      height: `${currentHeight}px`,
                      backgroundColor: `${w.color}22`,
                      border: `4px solid ${w.color}`,
                      borderRadius: '28px',
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                      paddingTop: '20px',
                      boxSizing: 'border-box',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: FONTS.heading,
                        fontSize: '48px',
                        fontWeight: 900,
                        color: w.color,
                      }}
                    >
                      {w.pct}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Labels Row */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '40px',
              textAlign: 'center',
            }}
          >
            {weights.map((w, idx) => (
              <div key={idx}>
                <div
                  style={{
                    fontFamily: FONTS.heading,
                    fontSize: '52px',
                    fontWeight: 900,
                    color: COLORS.INK_PRIMARY,
                  }}
                >
                  {w.ticker}
                </div>
                <div
                  style={{
                    fontFamily: FONTS.heading,
                    fontSize: '48px',
                    fontWeight: 800,
                    color: COLORS.INK_MUTED,
                    marginTop: '4px',
                  }}
                >
                  {w.name}
                </div>
              </div>
            ))}
          </div>

          {/* Footer Punchline */}
          <div
            style={{
              borderTop: `3px solid ${COLORS.BG_RECESSED}`,
              paddingTop: '28px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <span style={{ fontSize: '54px', color: COLORS.OCHRE_GOLD, fontWeight: 900 }}>•</span>
              <span
                style={{
                  fontFamily: FONTS.heading,
                  fontSize: '52px',
                  fontWeight: 800,
                  color: COLORS.INK_PRIMARY,
                }}
              >
                Market-Cap Weighted: Largest Giants Get Most Dollars
              </span>
            </div>
          </div>
        </div>
      </div>
    </LeftZone>
  );
};

// ========================================================
// MASTER EXPORT
// ========================================================
export const WhatIsAnEtfBlock4: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.BG_BASE }}>
      {/* Beat 1: Fractional Share Gauge (0 - 360f / 6s) */}
      <Sequence from={0} durationInFrames={360}>
        <Beat1_FractionalSlice />
      </Sequence>

      {/* Beat 2: Market-Cap Weighting Pillars (360 - 780f / 7s) */}
      <Sequence from={360} durationInFrames={420}>
        <Beat2_MarketCapWeights />
      </Sequence>
    </AbsoluteFill>
  );
};

export default WhatIsAnEtfBlock4;
