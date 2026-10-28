/**
 * SIGNATURE CHANNEL ASSET: "THE FINANCIAL DECODER"
 * 
 * An iconic, ultra-clean editorial dictionary card designed as Brian Dean's
 * signature YouTube channel identity for defining financial buzzwords.
 * 
 * Aesthetic: High-end Bloomberg / Wall Street Editorial meets Apple Keynote minimalism.
 * Canvas: Native 4K UHD (3840 x 2160), 60 FPS
 * Layout: Strict 60/40 Split (Left 2304px visual canvas, Right 40% clean for host PIP)
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

// ==========================================
// LUXURY EDITORIAL COLOR TOKENS
// ==========================================
const COLORS = {
  // Editorial Paper
  BG_BASE: '#F4EFE6',
  BG_CARD: '#FCFAF6',
  BG_CARD_ACCENT: 'rgba(255, 255, 255, 0.7)',

  // Obsidian Inks
  INK_HERO: '#12100E',
  INK_BODY: '#24201A',
  INK_MUTED: '#6E6659',
  INK_FAINT: '#A89F91',

  // Curated Signature Accents
  EMERALD: '#0A6644',
  EMERALD_TINT: 'rgba(10, 102, 68, 0.08)',
  EMERALD_BORDER: 'rgba(10, 102, 68, 0.28)',

  COBALT: '#1B47B8',
  COBALT_TINT: 'rgba(27, 71, 184, 0.08)',
  COBALT_BORDER: 'rgba(27, 71, 184, 0.28)',

  GOLD: '#9B6C12',
  GOLD_TINT: 'rgba(155, 108, 18, 0.09)',
  GOLD_BORDER: 'rgba(155, 108, 18, 0.30)',

  CRIMSON: '#A8321D',
  CRIMSON_TINT: 'rgba(168, 50, 29, 0.08)',
  CRIMSON_BORDER: 'rgba(168, 50, 29, 0.28)',
};

const FONTS = {
  heading: 'Poppins, Inter, -apple-system, sans-serif',
  serif: 'Georgia, "Times New Roman", serif',
  body: 'Inter, -apple-system, sans-serif',
};

export const SINGLE_CARD_DURATION = 360; // 6s per definition

// ==========================================
// BACKGROUND CANVAS WITH GHOST WATERMARK
// ==========================================
const DecoderBackground: React.FC<{ watermarkText: string }> = ({ watermarkText }) => (
  <AbsoluteFill style={{ backgroundColor: COLORS.BG_BASE }}>
    {/* Micro-dot grid texture */}
    <svg style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0.2 }}>
      <defs>
        <pattern id="dec-dots" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <circle cx="8" cy="8" r="2.4" fill={COLORS.INK_MUTED} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dec-dots)" />
    </svg>

    {/* Subtle atmospheric vignette */}
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at 35% 40%, rgba(255, 252, 245, 0.9) 0%, rgba(235, 227, 214, 0.4) 100%)',
        pointerEvents: 'none',
      }}
    />

    {/* Massive Typographic Ghost Watermark in the Left Zone */}
    <div
      style={{
        position: 'absolute',
        left: '120px',
        top: '12%',
        fontFamily: FONTS.heading,
        fontSize: '440px',
        fontWeight: 900,
        color: COLORS.INK_HERO,
        opacity: 0.035,
        letterSpacing: '-0.06em',
        lineHeight: 0.8,
        pointerEvents: 'none',
        userSelect: 'none',
      }}
    >
      {watermarkText}
    </div>
  </AbsoluteFill>
);

// ==========================================
// DATA STRUCTURE
// ==========================================
export interface DecoderCardData {
  category: string; // e.g. "STRUCTURE"
  term: string; // e.g. "Expense Ratio"
  phonetic: string; // e.g. "noun • /ɪkˈspens ˈreɪʃi.oʊ/"
  accentColor: string;
  accentTint: string;
  accentBorder: string;
  watermark: string;
  definition: string; // Punchy, crystal-clear 1-2 sentence core definition
  takeaway: string; // Short bottom-line takeaway
  benchmark: string; // Clear investor rule of thumb
}

// ==========================================
// MASTER DECODER CARD (THE CHANNEL IDENTITY)
// ==========================================
export const DecoderCard: React.FC<{ data: DecoderCardData }> = ({ data }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Premium, fluid animation timings (Spring physics)
  const cardScale = spring({ frame: frame - 6, fps, config: { damping: 24, stiffness: 120, mass: 0.9 } });
  const cardOpacity = interpolate(frame, [6, 22], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const cardY = interpolate(frame, [6, 26], [50, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  // Horizon Line expansion
  const lineWidth = interpolate(frame, [18, 48], [0, 100], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  // Text reveals with subtle blur fade
  const defOpacity = interpolate(frame, [26, 46], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const defY = interpolate(frame, [26, 46], [25, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  // Bottom pills staggered reveal
  const pill1Spring = spring({ frame: frame - 46, fps, config: { damping: 20, stiffness: 150, mass: 0.7 } });
  const pill2Spring = spring({ frame: frame - 58, fps, config: { damping: 20, stiffness: 150, mass: 0.7 } });

  // Subtle breathing pulse for the active indicator
  const beaconPulse = 1 + Math.sin(frame / 8) * 0.15;

  return (
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
      {/* FLOATING SIGNATURE EDITORIAL CARD */}
      <div
        style={{
          width: '100%',
          backgroundColor: COLORS.BG_CARD,
          borderRadius: '48px',
          border: '2px solid rgba(0, 0, 0, 0.08)',
          padding: '76px 88px',
          boxSizing: 'border-box',
          boxShadow: '0 40px 100px -20px rgba(24, 20, 16, 0.12), 0 20px 40px -15px rgba(24, 20, 16, 0.06)',
          display: 'flex',
          flexDirection: 'column',
          opacity: cardOpacity,
          transform: `translateY(${cardY}px) scale(${interpolate(cardScale, [0, 1], [0.97, 1])})`,
          position: 'relative',
        }}
      >
        {/* TOP STATUS BAR: Category + Pulsing Jewel + Serial Number */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '32px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            <div
              style={{
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                backgroundColor: data.accentColor,
                transform: `scale(${beaconPulse})`,
                boxShadow: `0 0 16px ${data.accentColor}`,
              }}
            />
            <span
              style={{
                fontFamily: FONTS.heading,
                fontSize: '48px',
                fontWeight: 800,
                color: data.accentColor,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              DECODED • {data.category}
            </span>
          </div>
        </div>

        {/* HERO TERM & PHONETIC NOTATION */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h1
            style={{
              fontFamily: FONTS.heading,
              fontSize: '128px',
              fontWeight: 900,
              color: COLORS.INK_HERO,
              margin: 0,
              lineHeight: 1.02,
              letterSpacing: '-0.04em',
            }}
          >
            {data.term}
          </h1>

          <div
            style={{
              fontFamily: FONTS.serif,
              fontSize: '48px',
              fontStyle: 'italic',
              color: COLORS.INK_MUTED,
              letterSpacing: '0.02em',
            }}
          >
            {data.phonetic}
          </div>
        </div>

        {/* ANIMATED ACCENT HORIZON LINE */}
        <div
          style={{
            width: '100%',
            height: '4px',
            backgroundColor: 'rgba(0, 0, 0, 0.07)',
            borderRadius: '999px',
            margin: '40px 0 44px 0',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <div
            style={{
              width: `${lineWidth}%`,
              height: '100%',
              backgroundColor: data.accentColor,
              borderRadius: '999px',
            }}
          />
        </div>

        {/* CRYSTAL-CLEAR CORE DEFINITION */}
        <div
          style={{
            opacity: defOpacity,
            transform: `translateY(${defY}px)`,
            fontFamily: FONTS.heading,
            fontSize: '60px',
            fontWeight: 800,
            color: COLORS.INK_BODY,
            lineHeight: 1.3,
            letterSpacing: '-0.02em',
            marginBottom: '48px',
          }}
        >
          "{data.definition}"
        </div>

        {/* DUAL ACTION PILLS (Zero Clutter, High Signal) */}
        <div style={{ display: 'flex', gap: '24px', alignItems: 'stretch' }}>
          {/* Pill 1: Key Takeaway */}
          <div
            style={{
              flex: 1.1,
              backgroundColor: COLORS.BG_BASE,
              borderRadius: '24px',
              border: '2px solid rgba(0,0,0,0.06)',
              padding: '24px 36px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              opacity: pill1Spring,
              transform: `scale(${interpolate(pill1Spring, [0, 1], [0.95, 1])})`,
            }}
          >
            <span
              style={{
                fontFamily: FONTS.heading,
                fontSize: '48px',
                fontWeight: 800,
                color: data.accentColor,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              Bottom Line
            </span>
            <span
              style={{
                fontFamily: FONTS.heading,
                fontSize: '48px',
                fontWeight: 700,
                color: COLORS.INK_HERO,
                lineHeight: 1.25,
              }}
            >
              {data.takeaway}
            </span>
          </div>

          {/* Pill 2: Investor Benchmark / Rule */}
          <div
            style={{
              flex: 1,
              backgroundColor: data.accentTint,
              borderRadius: '24px',
              border: `2px solid ${data.accentBorder}`,
              padding: '24px 36px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              opacity: pill2Spring,
              transform: `scale(${interpolate(pill2Spring, [0, 1], [0.95, 1])})`,
            }}
          >
            <span
              style={{
                fontFamily: FONTS.heading,
                fontSize: '48px',
                fontWeight: 800,
                color: data.accentColor,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              Rule of Thumb
            </span>
            <span
              style={{
                fontFamily: FONTS.heading,
                fontSize: '48px',
                fontWeight: 800,
                color: data.accentColor,
                lineHeight: 1.25,
              }}
            >
              {data.benchmark}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

// ==========================================
// REGISTRY: 10 MAJOR BUZZ WORDS FROM SCRIPT
// ==========================================
export const GLOSSARY_TERMS: Record<string, DecoderCardData> = {
  // 1. ETF
  etf: {
    category: 'STRUCTURE',
    term: 'Exchange Traded Fund',
    phonetic: 'noun • /ɪksˌtʃeɪndʒ ˈtreɪdɪd fʌnd/',
    accentColor: COLORS.EMERALD,
    accentTint: COLORS.EMERALD_TINT,
    accentBorder: COLORS.EMERALD_BORDER,
    watermark: 'ETF',
    definition: 'A single pooled basket of investments cut into shares that trade continuously on the stock market.',
    takeaway: 'Instant diversification across hundreds of companies in one trade.',
    benchmark: 'You own fund shares, not the underlying stocks directly.',
  },

  // 2. MARKET-CAP WEIGHTED
  marketCapWeighted: {
    category: 'ALLOCATION',
    term: 'Market-Cap Weighted',
    phonetic: 'adjective • /ˈmɑːr.kɪt kæp ˈweɪ.tɪd/',
    accentColor: COLORS.COBALT,
    accentTint: COLORS.COBALT_TINT,
    accentBorder: COLORS.COBALT_BORDER,
    watermark: 'CAP',
    definition: 'An index structure where larger companies automatically receive more of your invested dollars.',
    takeaway: 'In VOO, top 3 companies capture ~$21 of every $100 you invest.',
    benchmark: 'Automatically lets winning companies compound without manual rebalancing.',
  },

  // 3. INTERMEDIATED OWNERSHIP
  intermediatedOwnership: {
    category: 'GOVERNANCE',
    term: 'Intermediated Rights',
    phonetic: 'noun • /ˌɪn.təˈmiː.di.eɪ.tɪd raɪts/',
    accentColor: COLORS.GOLD,
    accentTint: COLORS.GOLD_TINT,
    accentBorder: COLORS.GOLD_BORDER,
    watermark: 'PROXY',
    definition: 'The legal separation where the fund owns corporate stock directly while you hold fund shares.',
    takeaway: 'Fund managers (Vanguard, BlackRock) cast all shareholder proxy votes.',
    benchmark: 'Dividends collect inside the fund and pass out quarterly.',
  },

  // 4. EXPENSE RATIO
  expenseRatio: {
    category: 'FUND COSTS',
    term: 'Expense Ratio',
    phonetic: 'noun • /ɪkˈspens ˈreɪ.ʃi.oʊ/',
    accentColor: COLORS.EMERALD,
    accentTint: COLORS.EMERALD_TINT,
    accentBorder: COLORS.EMERALD_BORDER,
    watermark: '0.03%',
    definition: 'The annual percentage management fee silently skimmed daily from the fund before returns reach your screen.',
    takeaway: 'No bill is ever mailed—VOO costs just $3/year per $10,000.',
    benchmark: 'Target core broad index ETFs with expense ratios under 0.30%.',
  },

  // 5. IN-KIND REDEMPTION
  inKindRedemption: {
    category: 'TAX SHIELD',
    term: 'In-Kind Redemption',
    phonetic: 'noun • /ɪn ˈkaɪnd rɪˈdemp.ʃən/',
    accentColor: COLORS.EMERALD,
    accentTint: COLORS.EMERALD_TINT,
    accentBorder: COLORS.EMERALD_BORDER,
    watermark: 'TAX',
    definition: 'An institutional mechanism swapping ETF shares directly for underlying stocks to bypass selling for cash.',
    takeaway: 'Eliminates internal capital gains taxes for long-term holders.',
    benchmark: 'Broad index ETFs frequently go 10+ years paying $0 capital gains.',
  },

  // 6. CUSTODIAN BANK
  custodianBank: {
    category: 'SAFETY',
    term: 'Custodian Bank',
    phonetic: 'noun • /kʌsˈtoʊ.di.ən bæŋk/',
    accentColor: COLORS.COBALT,
    accentTint: COLORS.COBALT_TINT,
    accentBorder: COLORS.COBALT_BORDER,
    watermark: 'SAFE',
    definition: 'A separate, federally regulated bank holding fund securities completely segregated from fund management.',
    takeaway: 'If Vanguard goes bankrupt, your underlying stocks remain safe in the vault.',
    benchmark: 'ETF risk is in what the fund holds, never who manages it.',
  },

  // 7. BID-ASK SPREAD
  bidAskSpread: {
    category: 'TRADING FRICTION',
    term: 'Bid-Ask Spread',
    phonetic: 'noun • /bɪd æsk spred/',
    accentColor: COLORS.GOLD,
    accentTint: COLORS.GOLD_TINT,
    accentBorder: COLORS.GOLD_BORDER,
    watermark: 'GAP',
    definition: 'The gap between the highest price a buyer offers (Bid) and lowest price a seller accepts (Ask).',
    takeaway: 'An instant toll paid every time you enter or exit an ETF position.',
    benchmark: 'Liquid ETFs trade at 1¢ spreads; niche ETFs can cost 10¢+ on day one.',
  },

  // 8. ETF DECAY
  etfDecay: {
    category: 'LEVERAGE RISKS',
    term: 'ETF Volatility Decay',
    phonetic: 'noun • /ˌvɒl.əˈtɪl.ə.ti dɪˈkeɪ/',
    accentColor: COLORS.CRIMSON,
    accentTint: COLORS.CRIMSON_TINT,
    accentBorder: COLORS.CRIMSON_BORDER,
    watermark: '2X',
    definition: 'Mathematical destruction of capital in leveraged ETFs caused by compounding daily percentage resets.',
    takeaway: 'A flat index can result in a permanent loss in a 2x or 3x fund.',
    benchmark: 'Leveraged ETFs are short-term trading tools—never buy-and-hold.',
  },

  // 9. INVOLUNTARY LIQUIDATION
  involuntaryLiquidation: {
    category: 'FUND CLOSURE',
    term: 'Involuntary Liquidation',
    phonetic: 'noun • /ɪnˈvɒl.ən.tri ˌlɪk.wɪˈdeɪ.ʃən/',
    accentColor: COLORS.CRIMSON,
    accentTint: COLORS.CRIMSON_TINT,
    accentBorder: COLORS.CRIMSON_BORDER,
    watermark: 'RISK',
    definition: 'When an unprofitable or low-volume ETF shuts down permanently and forces shareholders out into cash.',
    takeaway: 'Forces you out on a timeline chosen by the fund, triggering surprise taxes.',
    benchmark: 'Stick to established funds with > $100M AUM and high daily volume.',
  },

  // 10. NET ASSET VALUE
  netAssetValue: {
    category: 'VALUATION',
    term: 'Net Asset Value (NAV)',
    phonetic: 'noun • /net ˈæs.et ˈvæl.juː/',
    accentColor: COLORS.COBALT,
    accentTint: COLORS.COBALT_TINT,
    accentBorder: COLORS.COBALT_BORDER,
    watermark: 'NAV',
    definition: 'The true per-share value of all assets held in the fund, calculated at market close every day.',
    takeaway: 'Arbitrage keeps live exchange market prices pinned right next to true NAV.',
    benchmark: 'The daily fee is automatically deducted from NAV before prices display.',
  },
};

// ==========================================
// INDIVIDUAL WRAPPER COMPONENTS
// ==========================================
const createCardComponent = (key: string): React.FC => {
  const data = GLOSSARY_TERMS[key];
  const Component: React.FC = () => (
    <AbsoluteFill style={{ overflow: 'hidden' }}>
      <DecoderBackground watermarkText={data.watermark} />
      <DecoderCard data={data} />
    </AbsoluteFill>
  );
  return Component;
};

export const Decoder_ETF = createCardComponent('etf');
export const Decoder_MarketCapWeighted = createCardComponent('marketCapWeighted');
export const Decoder_IntermediatedOwnership = createCardComponent('intermediatedOwnership');
export const Decoder_ExpenseRatio = createCardComponent('expenseRatio');
export const Decoder_InKindRedemption = createCardComponent('inKindRedemption');
export const Decoder_CustodianBank = createCardComponent('custodianBank');
export const Decoder_BidAskSpread = createCardComponent('bidAskSpread');
export const Decoder_ETFDecay = createCardComponent('etfDecay');
export const Decoder_InvoluntaryLiquidation = createCardComponent('involuntaryLiquidation');
export const Decoder_NAV = createCardComponent('netAssetValue');

// ==========================================
// MASTER SHOWCASE: ALL 10 CARDS (60s total)
// ==========================================
export const DECODER_SHOWCASE_DURATION = 3600; // 10 cards * 360f

export const WhatIsAnEtfDecoderShowcase: React.FC = () => {
  const keys = Object.keys(GLOSSARY_TERMS);

  return (
    <AbsoluteFill style={{ overflow: 'hidden' }}>
      {keys.map((key, idx) => (
        <Sequence
          key={key}
          from={idx * SINGLE_CARD_DURATION}
          durationInFrames={SINGLE_CARD_DURATION}
        >
          <AbsoluteFill style={{ overflow: 'hidden' }}>
            <DecoderBackground watermarkText={GLOSSARY_TERMS[key].watermark} />
            <DecoderCard data={GLOSSARY_TERMS[key]} />
          </AbsoluteFill>
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};
