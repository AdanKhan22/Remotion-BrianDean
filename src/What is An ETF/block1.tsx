import React from 'react';
import {
  AbsoluteFill, Sequence, useCurrentFrame, useVideoConfig,
  interpolate, spring, Easing,
} from 'remotion';

const W = 1920, H = 1080;

// --- BRIAN DEAN EDITORIAL BRAND THEME TOKENS ---
const C = {
  bg: '#F3EEE4',          // Warm layered beige base
  panel: '#FAF6EC',       // Elevated editorial card
  cardBg: '#FFFFFF',      // Clean paper white
  line: '#EAE3D3',        // Hairline dividers
  border: '#DCD5C5',      // Card borders
  ink: '#1E1B16',         // Primary obsidian ink
  inkSecondary: '#5C564A',// Slate secondary ink
  ghost: '#8C8474',       // Slate tertiary / inactive
  mint: '#0D7A53',        // Rich pine jade / emerald (Success / Custodian / Vault)
  red: '#B5533C',         // Muted brick crimson (Denied / Bankruptcy / Crosses)
  gold: '#B8862E',        // Warm ochre gold (Highlights / Coins / Questions)
  blue: '#2557D6',        // Editorial cobalt (Certificates / Exposure)
  white: '#FAF6EC',       // Warm tint
};

const FONT = 'Poppins, Inter, -apple-system, sans-serif';
const clamp = { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' } as const;
const ease = Easing.bezier(0.16, 1, 0.3, 1);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const prog = (f: number, a: number, b: number) =>
  interpolate(f, [a, b], [0, 1], { ...clamp, easing: ease });

/* ---------- shared bits ---------- */
const Background: React.FC = () => {
  const f = useCurrentFrame();
  return (
    <>
      <defs>
        {/* Subtle dot matrix grid */}
        <pattern id="dot-grid" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
          <circle cx="4" cy="4" r="2" fill={C.ghost} opacity={0.22} />
        </pattern>
        {/* Warm radial editorial gradient */}
        <radialGradient id="vig" cx="50%" cy="45%" r="70%">
          <stop offset="0%" stopColor={C.panel} stopOpacity={0.65} />
          <stop offset="100%" stopColor={C.bg} stopOpacity={0.92} />
        </radialGradient>
      </defs>
      <rect width={W} height={H} fill={C.bg} />
      <rect width={W} height={H} fill="url(#dot-grid)" />
      <rect width={W} height={H} fill="url(#vig)" opacity={0.6} pointerEvents="none" />
      {/* Floating subtle ambient particles */}
      {Array.from({ length: 70 }).map((_, i) => {
        const x = (i * 137.5) % W;
        const y = (((i * 89.3 - f * (0.15 + (i % 3) * 0.12)) % H) + H) % H;
        return (
          <circle key={i} cx={x} cy={y} r={1.2 + (i % 3) * 0.8} fill={C.gold}
            opacity={0.08 + 0.12 * Math.abs(Math.sin(f / 40 + i))} />
        );
      })}
    </>
  );
};

const Scene: React.FC<{ dur: number; children: React.ReactNode }> = ({ dur, children }) => {
  const f = useCurrentFrame();
  const o = interpolate(f, [0, 14, dur - 14, dur], [0, 1, 1, 0], clamp);
  return <g opacity={o}>{children}</g>;
};

const Draw: React.FC<{ d: string; color: string; from: number; to: number; w?: number }> =
  ({ d, color, from, to, w = 14 }) => {
    const f = useCurrentFrame();
    return (
      <path d={d} stroke={color} strokeWidth={w} strokeLinecap="round" fill="none"
        pathLength={1} strokeDasharray={1} strokeDashoffset={1 - prog(f, from, to)} />
    );
  };

const Cross: React.FC<{ from: number; s?: number }> = ({ from, s = 70 }) => (
  <g>
    <Draw d={`M${-s} ${-s} L${s} ${s}`} color={C.red} from={from} to={from + 12} />
    <Draw d={`M${s} ${-s} L${-s} ${s}`} color={C.red} from={from + 8} to={from + 20} />
  </g>
);

const Person: React.FC<{ x: number; y: number; color?: string; s?: number }> =
  ({ x, y, color = C.blue, s = 1 }) => (
    <g transform={`translate(${x},${y}) scale(${s})`} fill="none" stroke={color} strokeWidth={8}>
      <circle cx={0} cy={-70} r={34} />
      <path d="M-80 60 Q-80 -10 0 -10 Q80 -10 80 60 Z" />
    </g>
  );

const Building: React.FC<{ cracks?: number }> = ({ cracks = 0 }) => (
  <g fill={C.panel} stroke={C.mint} strokeWidth={8} strokeLinejoin="round">
    <polygon points="-180,-70 0,-170 180,-70" />
    {[-120, -40, 40, 120].map((x) => <rect key={x} x={x - 16} y={-50} width={32} height={170} fill={C.panel} />)}
    <rect x={-190} y={130} width={380} height={26} fill={C.panel} />
    <path d="M-10 -160 L14 -100 L-12 -50 L16 10 L-8 70 L10 130" fill="none"
      stroke={C.red} strokeWidth={7} pathLength={1} strokeDasharray={1}
      strokeDashoffset={1 - cracks} />
  </g>
);

/* ---------- scene 1: you own none of it ---------- */
const Cert: React.FC<{ x: number; ticker?: string; start: number; kill: number }> =
  ({ x, ticker, start, kill }) => {
    const f = useCurrentFrame();
    const { fps } = useVideoConfig();
    const inn = spring({ frame: f - start, fps, config: { damping: 14 } });
    const k = prog(f, kill, kill + 22);
    const t = `translate(${x},${540 + 50 * (1 - inn) + k * 40}) scale(${0.8 + 0.2 * inn})`;
    return (
      <>
        <g transform={t} opacity={inn * (1 - k * 0.7)}>
          {ticker ? (
            <>
              <rect x={-170} y={-230} width={340} height={460} rx={26} fill={C.panel} stroke={C.blue} strokeWidth={6} />
              <text y={-20} textAnchor="middle" fontFamily={FONT} fontWeight={900} fontSize={84} fill={C.ink}>{ticker}</text>
              {[70, 110, 150].map((y, i) => <rect key={y} x={-110} y={y} width={220 - i * 50} height={10} rx={5} fill={C.line} />)}
              <circle cx={0} cy={-150} r={30} fill="none" stroke={C.gold} strokeWidth={6} />
            </>
          ) : (
            <>
              <rect x={-130} y={10} width={260} height={190} rx={20} fill={C.panel} stroke={C.blue} strokeWidth={6} />
              <rect x={-70} y={40} width={140} height={12} rx={6} fill={C.line} />
              <rect x={-55} y={-120 + 100 * ease(Math.min(1, Math.max(0, (f - start - 20) / 40)))} width={110} height={130} rx={8}
                fill={C.cardBg} stroke={C.border} strokeWidth={2} opacity={0.95} />
              <path d="M-30 -60 L-8 -34 L34 -84" stroke={C.mint} strokeWidth={10} fill="none" strokeLinecap="round" />
            </>
          )}
        </g>
        <g transform={`translate(${x},540)`}><Cross from={kill} /></g>
      </>
    );
  };

const S1: React.FC = () => (
  <Scene dur={240}>
    <Cert x={480} ticker="AAPL" start={10} kill={80} />
    <Cert x={960} ticker="NVDA" start={30} kill={115} />
    <Cert x={1440} start={50} kill={150} />
  </Scene>
);

/* ---------- scene 2: VOO is a ghost ---------- */
const S2: React.FC = () => {
  const f = useCurrentFrame();
  const rect = 'M-190 -250 H190 V250 H-190 Z';
  const dashedO = prog(f, 55, 75);
  return (
    <Scene dur={180}>
      <g transform="translate(960,540)">
        {Array.from({ length: 36 }).map((_, i) => {
          const a = (i / 36) * Math.PI * 2 + f / 90;
          return <circle key={i} cx={Math.cos(a) * 420} cy={Math.sin(a) * 300} r={8}
            fill={i % 2 ? C.mint : C.blue} opacity={0.75 * prog(f, i, i + 25)} />;
        })}
        <g opacity={1 - dashedO}><Draw d={rect} color={C.blue} from={0} to={55} w={6} /></g>
        <path d={rect} fill="none" stroke={C.blue} strokeWidth={6} strokeDasharray="16 14"
          strokeDashoffset={-f * 0.6} opacity={dashedO} />
        <text y={20} textAnchor="middle" fontFamily={FONT} fontWeight={900} fontSize={110}
          fill={C.ink} opacity={0.3 + 0.25 * Math.abs(Math.sin(f / 7))}>VOO</text>
        <text y={-110} textAnchor="middle" fontFamily={FONT} fontWeight={900} fontSize={120}
          fill={C.gold} opacity={prog(f, 90, 110)} transform={`translate(0,${Math.sin(f / 9) * 8})`}>?</text>
      </g>
    </Scene>
  );
};

/* ---------- scene 3: the bill that never comes ---------- */
const S3: React.FC = () => {
  const f = useCurrentFrame();
  const ex = lerp(1450, 900, prog(f, 20, 70));
  const ek = prog(f, 78, 110);
  const lit = Math.max(0, Math.min(60, Math.floor((f - 90) / 4)));
  return (
    <Scene dur={360}>
      <Person x={330} y={560} />
      <g transform="translate(1560,540)"><Building /></g>

      <g transform={`translate(${ex},${430 + ek * 120}) rotate(${ek * 25})`} opacity={1 - ek}>
        <rect x={-55} y={-38} width={110} height={76} rx={8} fill={C.panel} stroke={C.ink} strokeWidth={6} />
        <path d="M-55 -34 L0 8 L55 -34" fill="none" stroke={C.ink} strokeWidth={6} />
      </g>
      <g transform="translate(900,430)"><Cross from={72} s={50} /></g>

      {Array.from({ length: 60 }).map((_, i) => {
        const t = (f - 90 - i * 5) / 50;
        if (t <= 0 || t >= 1) return null;
        return <circle key={i} cx={lerp(420, 1400, t)} cy={470 - 130 * Math.sin(Math.PI * t)}
          r={10} fill={C.gold} opacity={Math.sin(Math.PI * t)} />;
      })}

      <g transform="translate(960,860)" opacity={prog(f, 85, 105)}>
        {Array.from({ length: 60 }).map((_, i) => {
          const a = (i / 60) * Math.PI * 2 - Math.PI / 2;
          return <line key={i} x1={Math.cos(a) * 92} y1={Math.sin(a) * 92}
            x2={Math.cos(a) * 118} y2={Math.sin(a) * 118} strokeWidth={6} strokeLinecap="round"
            stroke={i < lit ? C.gold : C.line} />;
        })}
        <circle r={10} fill={C.gold} />
      </g>
    </Scene>
  );
};

/* ---------- scene 4: bankruptcy, money is elsewhere ---------- */
const S4: React.FC = () => {
  const f = useCurrentFrame();
  const shake = f > 50 && f < 110 ? Math.sin(f * 2.4) * 8 * prog(f, 50, 80) : 0;
  const col = prog(f, 110, 170);
  const vx = lerp(1300, 960, prog(f, 175, 235));
  const burst = prog(f, 112, 190);
  const link = 1 - prog(f, 95, 115);
  return (
    <Scene dur={270}>
      <g opacity={link}>
        <line x1={800} y1={540} x2={1150} y2={540} stroke={C.line} strokeWidth={6} strokeDasharray="12 14" />
      </g>
      <g transform={`translate(${620 + shake},${480 + col * 520}) rotate(${col * 14})`} opacity={1 - col * 0.9}>
        <Building cracks={prog(f, 60, 105)} />
      </g>
      {Array.from({ length: 18 }).map((_, i) => {
        const a = (i / 18) * Math.PI - Math.PI;
        const d = burst * (120 + (i % 4) * 50);
        return <circle key={i} cx={620 + (i - 9) * 20 + Math.cos(a) * d * 0.6}
          cy={900 + Math.sin(a) * d * 0.7} r={7 + (i % 3) * 3} fill={C.ghost}
          opacity={burst > 0 ? (1 - burst) * 0.8 : 0} />;
      })}
      <text x={620} y={250} textAnchor="middle" fontFamily={FONT} fontWeight={900} fontSize={110}
        fill={C.gold} opacity={prog(f, 5, 25) * (1 - prog(f, 100, 120))}>?</text>

      <g transform={`translate(${vx},560)`} opacity={prog(f, 15, 45)}>
        <circle r={190 + 40 * Math.sin(f / 20) * prog(f, 175, 200)} fill="none" stroke={C.mint}
          strokeWidth={4} opacity={0.25 * prog(f, 170, 200)} />
        <circle r={150} fill={C.panel} stroke={C.mint} strokeWidth={10} />
        <circle r={105} fill="none" stroke={C.mint} strokeWidth={6} opacity={0.6} />
        <g transform={`rotate(${f * 1.2})`} stroke={C.mint} strokeWidth={10} strokeLinecap="round">
          {[0, 60, 120].map((a) => <line key={a} x1={-70} y1={0} x2={70} y2={0} transform={`rotate(${a})`} />)}
        </g>
        <circle r={22} fill={C.panel} stroke={C.mint} strokeWidth={8} />
        <g transform="translate(0,-260)">
          <Draw d="M-60 0 L-15 45 L65 -45" color={C.mint} from={200} to={225} w={18} />
        </g>
      </g>
    </Scene>
  );
};

/* ---------- scene 5: $10 trillion ---------- */
const S5: React.FC = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const n = Math.round(10 * prog(f, 30, 160));
  const shrink = prog(f, 240, 290);
  const pop = spring({ frame: f - 20, fps, config: { damping: 12 } });
  return (
    <Scene dur={450}>
      {Array.from({ length: 20 * 11 }).map((_, i) => {
        const cx = 48 + (i % 20) * 96, cy = 48 + Math.floor(i / 20) * 96;
        const d = Math.hypot(cx - 960, cy - 540);
        const t = Math.max(0, Math.min(1, (f - 10 - d * 0.12) / 20));
        return <rect key={i} x={cx - 28} y={cy - 28} width={56} height={56} rx={12}
          fill={i % 7 === 0 ? C.gold : C.mint} opacity={0.06 + 0.28 * t}
          transform={`rotate(${(1 - t) * 40} ${cx} ${cy})`} />;
      })}
      <g transform={`translate(960,${lerp(650, 330, shrink)}) scale(${pop * lerp(1, 0.55, shrink)})`}>
        <text textAnchor="middle" fontFamily={FONT} fontWeight={900} fontSize={340} fill={C.bg}
          stroke={C.bg} strokeWidth={60} strokeLinejoin="round">{`$${n}T${f > 165 ? '+' : ''}`}</text>
        <text textAnchor="middle" fontFamily={FONT} fontWeight={900} fontSize={340} fill={C.ink}>
          {`$${n}T${f > 165 ? '+' : ''}`}
        </text>
      </g>
      {Array.from({ length: 9 }).map((_, i) => {
        const p = prog(f, 270 + i * 6, 290 + i * 6);
        return (
          <g key={i} opacity={p} transform={`translate(0,${(1 - p) * 40})`}>
            <Person x={260 + i * 175} y={800} color={C.ghost} s={0.8} />
            <text x={260 + i * 175} y={640 + Math.sin(f / 10 + i) * 10} textAnchor="middle"
              fontFamily={FONT} fontWeight={900} fontSize={70} fill={C.gold}>?</text>
          </g>
        );
      })}
    </Scene>
  );
};

/* ---------- scene 6: open the box, spot the good ones ---------- */
const BAD = [2, 5, 9, 11, 14, 18, 21];
const pos = (i: number): [number, number] =>
  [960 + ((i % 6) - 2.5) * 150, 540 + (Math.floor(i / 6) - 1.5) * 150];

const S6: React.FC = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const lid = prog(f, 45, 80);
  const cur = Math.max(0, Math.min(23, (f - 150) / 10));
  const i0 = Math.floor(cur), i1 = Math.min(23, i0 + 1), fr = cur - i0;
  const [mx0, my0] = pos(i0), [mx1, my1] = pos(i1);
  const mag = prog(f, 140, 160) * (1 - prog(f, 400, 420));
  const end = prog(f, 430, 500);
  return (
    <Scene dur={600}>
      <circle cx={960} cy={540} r={end * 900} fill={C.mint} opacity={0.08 * end} />
      <g transform="translate(960,560)" opacity={prog(f, 0, 25) * (1 - prog(f, 100, 130))}>
        <rect x={-120} y={-110} width={240} height={230} rx={22} fill={C.panel} stroke={C.mint} strokeWidth={8} />
        <text y={30} textAnchor="middle" fontFamily={FONT} fontWeight={900} fontSize={80} fill={C.ink}>ETF</text>
        <g transform={`translate(0,${-lid * 150}) rotate(${-lid * 28} -120 -110)`}>
          <rect x={-135} y={-150} width={270} height={40} rx={14} fill={C.panel} stroke={C.mint} strokeWidth={8} />
        </g>
      </g>
      {Array.from({ length: 24 }).map((_, i) => {
        const [cx, cy] = pos(i);
        const p = spring({ frame: f - 60 - i * 3, fps, config: { damping: 13 } });
        const bad = BAD.includes(i);
        const rv = prog(f, 150 + i * 10, 165 + i * 10);
        const dim = bad ? end * 0.85 : 0;
        const pulse = !bad ? 1 + 0.04 * Math.sin(f / 6 + i) * end : 1;
        const col = rv === 0 ? C.blue : bad ? C.red : C.mint;
        return (
          <g key={i} transform={`translate(${lerp(960, cx, p)},${lerp(560, cy, p)}) scale(${p * pulse * (1 - dim * 0.4)})`}
            opacity={1 - dim}>
            <rect x={-55} y={-55} width={110} height={110} rx={18}
              fill={rv > 0 ? (bad ? 'rgba(181,83,60,.12)' : 'rgba(13,122,83,.12)') : C.panel}
              stroke={col} strokeWidth={6} />
            {rv === 0 && [-20, 0, 20].map((y, k) => (
              <rect key={y} x={-30} y={y - 4} width={60 - k * 14} height={8} rx={4} fill={C.line} />
            ))}
            {rv > 0 && (bad
              ? <g opacity={rv}><Cross from={150 + i * 10} s={22} /></g>
              : <Draw d="M-24 2 L-6 20 L26 -18" color={C.mint} from={150 + i * 10} to={168 + i * 10} w={12} />)}
          </g>
        );
      })}
      <g transform={`translate(${lerp(mx0, mx1, fr)},${lerp(my0, my1, fr)})`} opacity={mag}>
        <circle r={70} fill="rgba(184,134,46,.10)" stroke={C.ink} strokeWidth={8} />
        <line x1={50} y1={50} x2={110} y2={110} stroke={C.ink} strokeWidth={14} strokeLinecap="round" />
      </g>
    </Scene>
  );
};

/* ---------- main ---------- */
export const ETFVideo: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: C.bg }}>
    <svg width="100%" height="100%" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid slice">
      <Background />
      <Sequence layout="none" from={0} durationInFrames={240}><S1 /></Sequence>
      <Sequence layout="none" from={240} durationInFrames={180}><S2 /></Sequence>
      <Sequence layout="none" from={420} durationInFrames={360}><S3 /></Sequence>
      <Sequence layout="none" from={780} durationInFrames={270}><S4 /></Sequence>
      <Sequence layout="none" from={1050} durationInFrames={450}><S5 /></Sequence>
      <Sequence layout="none" from={1500} durationInFrames={600}><S6 /></Sequence>
    </svg>
  </AbsoluteFill>
);

export default ETFVideo;
export const WhatIsAnEtfBlock1 = ETFVideo;
export const BLOCK_1_DURATION = 2100;