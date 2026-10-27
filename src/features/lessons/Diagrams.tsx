/* Konu anlatımı çizimleri. Hepsi elle çizilmiş SVG; renkler tema değişkenlerinden gelir (koyu temada da çalışır).
   Kural: sade çizgi, tek vurgu rengi (primary), gerekirse yeşil/kırmızı. Ölçek değil şema; değerler anlatımla uyumlu. */
import { useId, type ReactNode } from 'react';

const C = {
  ink: 'var(--ink-2)', mute: 'var(--muted)', acc: 'var(--primary)', soft: 'var(--primary-soft)', good: 'var(--good)',
  bad: 'var(--bad)', warn: 'var(--warn)', line: 'var(--line-2)', sunk: 'var(--sunken)', surf: 'var(--surface)'
};
type M = { ink: string; acc: string; good: string; bad: string };

function Svg({ w = 480, h = 250, label, children }: { w?: number; h?: number; label: string; children: (m: M) => ReactNode }) {
  const id = useId().replace(/:/g, '');
  const mk = (k: keyof M, color: string) => (
    <marker id={`${id}${k}`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 z" fill={color} />
    </marker>
  );
  const m: M = { ink: `url(#${id}ink)`, acc: `url(#${id}acc)`, good: `url(#${id}good)`, bad: `url(#${id}bad)` };
  return (
    <svg viewBox={`0 0 ${w} ${h}`} role="img" aria-label={label} className="mx-auto block h-auto w-full" style={{ maxWidth: w + 40, fontFamily: 'inherit' }}>
      <defs>{mk('ink', C.ink)}{mk('acc', C.acc)}{mk('good', C.good)}{mk('bad', C.bad)}</defs>
      {children(m)}
    </svg>
  );
}

/** Etiket: arkasında zemin renginde ince bir kontur, çizgilerin üstünde okunur kalır */
function T({ x, y, children, a = 'middle', c = C.ink, s = 13, b = false, halo = true }: { x: number; y: number; children: ReactNode; a?: 'start' | 'middle' | 'end'; c?: string; s?: number; b?: boolean; halo?: boolean }) {
  return <text x={x} y={y} textAnchor={a} fill={c} fontSize={s} fontWeight={b ? 600 : 400} style={halo ? { paintOrder: 'stroke', stroke: C.surf, strokeWidth: 4, strokeLinejoin: 'round' } : undefined}>{children}</text>;
}
const L = (p: { x1: number; y1: number; x2: number; y2: number; c?: string; w?: number; d?: boolean; m?: string }) => (
  <line x1={p.x1} y1={p.y1} x2={p.x2} y2={p.y2} stroke={p.c ?? C.ink} strokeWidth={p.w ?? 1.6} strokeDasharray={p.d ? '5 4' : undefined} markerEnd={p.m} strokeLinecap="round" />
);
const Dot = ({ x, y, c = C.acc, r = 3.5 }: { x: number; y: number; c?: string; r?: number }) => <circle cx={x} cy={y} r={r} fill={c} />;
const poly = (pts: [number, number][]) => pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
const plot = (f: (x: number) => number, x0: number, x1: number, X: (x: number) => number, Y: (y: number) => number, n = 80) =>
  poly(Array.from({ length: n + 1 }, (_, i) => { const x = x0 + ((x1 - x0) * i) / n; return [X(x), Y(f(x))] as [number, number]; }));
/** Merkezi (cx, cy) olan yay: a0 → a1 derece (SVG yönünde, saat yönü artar) */
const arc = (cx: number, cy: number, r: number, a0: number, a1: number) => {
  const p = (a: number) => [cx + r * Math.cos((a * Math.PI) / 180), cy + r * Math.sin((a * Math.PI) / 180)];
  const [x0, y0] = p(a0), [x1, y1] = p(a1);
  return `M${x0!.toFixed(1)},${y0!.toFixed(1)} A${r},${r} 0 ${Math.abs(a1 - a0) > 180 ? 1 : 0} 1 ${x1!.toFixed(1)},${y1!.toFixed(1)}`;
};
const Box = ({ x, y, w, h, label, fill = C.surf, c = C.ink }: { x: number; y: number; w: number; h: number; label: ReactNode; fill?: string; c?: string }) => (
  <g><rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx={8} fill={fill} stroke={c} strokeWidth={1.4} /><T x={x} y={y + 4.5}>{label}</T></g>
);
/** Alt simge: v<Sub>y</Sub> */
const Sub = ({ children }: { children: ReactNode }) => <><tspan dy={4} fontSize="0.72em">{children}</tspan><tspan dy={-4}>{'\u200b'}</tspan></>;
/** İki kutu arasında karşılıklı iki ok ve etiketleri */
function Pair({ p, q, a, b, m }: { p: [number, number]; q: [number, number]; a: string; b: string; m: M }) {
  const dx = q[0] - p[0], dy = q[1] - p[1], len = Math.hypot(dx, dy), ux = dx / len, uy = dy / len, nx = -uy, ny = ux, cut = 46, o = 6;
  const s = [p[0] + ux * cut, p[1] + uy * cut], e = [q[0] - ux * cut, q[1] - uy * cut], mx = (p[0] + q[0]) / 2, my = (p[1] + q[1]) / 2;
  return (
    <g>
      <L x1={s[0]! + nx * o} y1={s[1]! + ny * o} x2={e[0]! + nx * o} y2={e[1]! + ny * o} c={C.acc} m={m.acc} />
      <L x1={e[0]! - nx * o} y1={e[1]! - ny * o} x2={s[0]! - nx * o} y2={s[1]! - ny * o} c={C.good} m={m.good} />
      <T x={mx + nx * 24} y={my + ny * 24 + 4} c={C.acc} s={12}>{a}</T>
      <T x={mx - nx * 24} y={my - ny * 24 + 4} c={C.good} s={12}>{b}</T>
    </g>
  );
}
const Axes = ({ ox, oy, x0 = 30, x1 = 450, y0 = 15, y1 = 235, m }: { ox: number; oy: number; x0?: number; x1?: number; y0?: number; y1?: number; m: M }) => (
  <g><L x1={x0} y1={oy} x2={x1} y2={oy} m={m.ink} w={1.2} /><L x1={ox} y1={y1} x2={ox} y2={y0} m={m.ink} w={1.2} /><T x={x1 - 4} y={oy + 18} s={12} c={C.mute}>x</T><T x={ox - 12} y={y0 + 8} s={12} c={C.mute}>y</T></g>
);

export const DIAGRAMS: Record<string, { label: string; draw: () => ReactNode }> = {
  /* ---------------- Matematik ---------------- */
  paralel: { label: 'Paralel iki doğruyu kesen doğruda yöndeş ve iç ters açılar', draw: () => (
    <Svg label="Paralel doğrular ve kesen">{(m) => <>
      <L x1={50} y1={80} x2={430} y2={80} /><L x1={50} y1={170} x2={430} y2={170} />
      <T x={438} y={84} a="start" c={C.mute}>d₁</T><T x={438} y={174} a="start" c={C.mute}>d₂</T>
      <L x1={170} y1={30} x2={330} y2={220} c={C.ink} m={m.ink} />
      <path d={arc(212, 80, 26, 0, 50)} fill="none" stroke={C.acc} strokeWidth={2.2} /><T x={250} y={100} c={C.acc} b>α</T>
      <path d={arc(288, 170, 26, 0, 50)} fill="none" stroke={C.acc} strokeWidth={2.2} /><T x={326} y={190} c={C.acc} b>α</T>
      <path d={arc(288, 170, 26, 180, 230)} fill="none" stroke={C.good} strokeWidth={2.2} /><T x={250} y={158} c={C.good} b>α</T>
      <T x={60} y={236} a="start" s={12} c={C.acc}>mavi: yöndeş açılar</T><T x={250} y={236} a="start" s={12} c={C.good}>yeşil: iç ters açı</T>
      <T x={60} y={62} a="start" s={12} c={C.mute}>d₁ // d₂</T>
    </>}</Svg>) },

  ozelUcgen: { label: '30-60-90 ve 45-45-90 üçgenlerinde kenar oranları', draw: () => (
    <Svg label="Özel dik üçgenler">{() => <>
      <path d="M50,200 L50,110 L206,200 Z" fill={C.soft} stroke={C.ink} strokeWidth={1.6} /><path d="M50,188 h12 v12" fill="none" stroke={C.ink} />
      <T x={38} y={160} a="end">k</T><T x={128} y={222}>k√3</T><T x={142} y={146} c={C.acc} b>2k</T>
      <T x={160} y={194} s={12}>30°</T><T x={64} y={138} s={12}>60°</T>
      <path d="M290,200 L290,90 L400,200 Z" fill={C.soft} stroke={C.ink} strokeWidth={1.6} /><path d="M290,188 h12 v12" fill="none" stroke={C.ink} />
      <T x={278} y={150} a="end">k</T><T x={345} y={222}>k</T><T x={358} y={138} c={C.acc} b>k√2</T>
      <T x={370} y={194} s={12}>45°</T><T x={302} y={120} s={12}>45°</T>
    </>}</Svg>) },

  ucgenAlan: { label: 'Üçgende taban ve yükseklik', draw: () => (
    <Svg label="Üçgende yükseklik">{() => <>
      <path d="M240,40 L70,200 L410,200 Z" fill={C.soft} stroke={C.ink} strokeWidth={1.6} />
      <L x1={240} y1={40} x2={240} y2={200} c={C.acc} d w={1.8} /><path d="M240,188 h12 v12" fill="none" stroke={C.acc} />
      <T x={252} y={128} a="start" c={C.acc} b>h</T><T x={240} y={224}>a (taban)</T>
      <T x={240} y={30}>A</T><T x={58} y={208} a="end">B</T><T x={422} y={208} a="start">C</T>
    </>}</Svg>) },

  benzerlik: { label: 'Bir kenara paralel doğru benzer üçgen oluşturur', draw: () => (
    <Svg label="Temel orantı teoremi">{() => <>
      <path d="M240,30 L60,210 L420,210 Z" fill="none" stroke={C.ink} strokeWidth={1.6} />
      <path d="M240,30 L132,138 L348,138 Z" fill={C.soft} stroke="none" />
      <L x1={132} y1={138} x2={348} y2={138} c={C.acc} w={2.2} />
      <T x={240} y={22}>A</T><T x={48} y={218} a="end">B</T><T x={432} y={218} a="start">C</T><T x={120} y={142} a="end">D</T><T x={360} y={142} a="start">E</T>
      <T x={240} y={130} c={C.acc} s={12}>DE // BC</T>
    </>}</Svg>) },

  agirlik: { label: 'Kenarortaylar ağırlık merkezinde 2 : 1 oranında bölünür', draw: () => (
    <Svg label="Ağırlık merkezi">{() => <>
      <path d="M240,30 L70,210 L410,210 Z" fill="none" stroke={C.ink} strokeWidth={1.6} />
      <L x1={240} y1={30} x2={240} y2={210} c={C.acc} /><L x1={70} y1={210} x2={325} y2={120} c={C.acc} /><L x1={410} y1={210} x2={155} y2={120} c={C.acc} />
      <Dot x={240} y={150} r={4.5} /><Dot x={240} y={210} c={C.ink} r={3} /><Dot x={325} y={120} c={C.ink} r={3} /><Dot x={155} y={120} c={C.ink} r={3} />
      <T x={254} y={154} a="start" b c={C.acc}>G</T><T x={228} y={96} a="end" c={C.acc}>2k</T><T x={228} y={186} a="end" c={C.acc}>k</T>
      <T x={240} y={22}>A</T><T x={58} y={218} a="end">B</T><T x={422} y={218} a="start">C</T><T x={240} y={232} s={12} c={C.mute}>D (orta nokta)</T>
    </>}</Svg>) },

  cember: { label: 'Aynı yayı gören merkez açı ve çevre açı', draw: () => {
    const A: [number, number] = [317.9, 170], B: [number, number] = [162.1, 170];
    return (
      <Svg label="Merkez açı ve çevre açı">{() => <>
        <circle cx={240} cy={125} r={90} fill="none" stroke={C.ink} strokeWidth={1.6} />
        <path d={arc(240, 125, 90, 30, 150)} fill="none" stroke={C.acc} strokeWidth={4} strokeLinecap="round" />
        <L x1={240} y1={125} x2={A[0]} y2={A[1]} c={C.acc} /><L x1={240} y1={125} x2={B[0]} y2={B[1]} c={C.acc} />
        <L x1={240} y1={35} x2={A[0]} y2={A[1]} c={C.good} /><L x1={240} y1={35} x2={B[0]} y2={B[1]} c={C.good} />
        <Dot x={240} y={125} c={C.ink} r={3} /><T x={240} y={116} s={12}>O</T>
        <T x={240} y={152} c={C.acc} b>2α</T><T x={240} y={66} c={C.good} b>α</T>
        <T x={328} y={182} a="start">A</T><T x={152} y={182} a="end">B</T><T x={240} y={26}>C</T>
        <T x={240} y={238} s={12} c={C.mute}>merkez açı = 2 · çevre açı</T>
      </>}</Svg>
    );
  } },

  analitik: { label: 'İki noktadan geçen doğrunun eğimi', draw: () => (
    <Svg label="Doğrunun eğimi">{(m) => <>
      <Axes ox={60} oy={210} m={m} />
      <L x1={40} y1={200} x2={330} y2={55} c={C.acc} w={2} />
      <L x1={100} y1={180} x2={260} y2={180} c={C.ink} d /><L x1={260} y1={180} x2={260} y2={100} c={C.ink} d />
      <Dot x={100} y={180} /><Dot x={260} y={100} />
      <T x={88} y={156} a="end">A(x₁, y₁)</T><T x={268} y={94} a="start">B(x₂, y₂)</T>
      <T x={180} y={198}>Δx = x₂ − x₁</T><T x={270} y={146} a="start">Δy = y₂ − y₁</T>
    </>}</Svg>) },

  venn: { label: 'İki kümenin Venn şeması', draw: () => (
    <Svg label="Venn şeması">{() => <>
      <rect x={40} y={20} width={400} height={194} rx={10} fill="none" stroke={C.line} strokeWidth={1.4} /><T x={56} y={42} a="start" c={C.mute}>E</T>
      <circle cx={190} cy={125} r={85} fill={C.soft} fillOpacity={0.7} stroke={C.acc} strokeWidth={1.8} />
      <circle cx={290} cy={125} r={85} fill={C.soft} fillOpacity={0.7} stroke={C.good} strokeWidth={1.8} />
      <T x={150} y={56} c={C.acc} b>A</T><T x={330} y={56} c={C.good} b>B</T>
      <T x={150} y={129}>yalnız A</T><T x={240} y={129} b>A ∩ B</T><T x={330} y={129}>yalnız B</T>
      <T x={240} y={238} s={12} c={C.mute}>s(A ∪ B) = s(A) + s(B) − s(A ∩ B)</T>
    </>}</Svg>) },

  sayiDogrusu: { label: 'Mutlak değer sayı doğrusunda sıfıra uzaklıktır', draw: () => {
    const X = (k: number) => 240 + 36 * k;
    return (
      <Svg label="|x| = 3" h={170}>{(m) => <>
        <L x1={40} y1={110} x2={440} y2={110} m={m.ink} />
        {Array.from({ length: 11 }, (_, i) => i - 5).map((k) => <g key={k}><L x1={X(k)} y1={104} x2={X(k)} y2={116} w={1.2} /><T x={X(k)} y={136} s={12} c={k ? C.mute : C.ink}>{k < 0 ? `−${-k}` : k}</T></g>)}
        <path d={`M${X(0)},100 Q${X(1.5)},40 ${X(3)},100`} fill="none" stroke={C.acc} strokeWidth={2} /><path d={`M${X(0)},100 Q${X(-1.5)},40 ${X(-3)},100`} fill="none" stroke={C.acc} strokeWidth={2} />
        <Dot x={X(3)} y={110} r={5} /><Dot x={X(-3)} y={110} r={5} />
        <T x={X(1.5)} y={58} c={C.acc}>3 birim</T><T x={X(-1.5)} y={58} c={C.acc}>3 birim</T>
        <T x={240} y={160} s={12} c={C.mute}>|x| = 3 → x = 3 ya da x = −3</T>
      </>}</Svg>
    );
  } },

  kati: { label: 'Silindir ve koni', draw: () => (
    <Svg label="Silindir ve koni">{() => <>
      <ellipse cx={130} cy={190} rx={70} ry={18} fill={C.soft} stroke={C.ink} strokeWidth={1.4} />
      <rect x={60} y={60} width={140} height={130} fill={C.soft} stroke="none" />
      <L x1={60} y1={60} x2={60} y2={190} /><L x1={200} y1={60} x2={200} y2={190} />
      <ellipse cx={130} cy={60} rx={70} ry={18} fill={C.surf} stroke={C.ink} strokeWidth={1.4} />
      <L x1={130} y1={60} x2={200} y2={60} c={C.acc} /><T x={165} y={54} c={C.acc}>r</T>
      <L x1={214} y1={60} x2={214} y2={190} c={C.acc} d /><T x={222} y={130} a="start" c={C.acc}>h</T>
      <T x={130} y={234} b>Silindir</T>
      <path d="M350,50 L280,190 A70,18 0 0 0 420,190 Z" fill={C.soft} stroke={C.ink} strokeWidth={1.4} />
      <ellipse cx={350} cy={190} rx={70} ry={18} fill="none" stroke={C.ink} strokeWidth={1.4} strokeDasharray="4 4" />
      <L x1={350} y1={50} x2={350} y2={190} c={C.acc} d /><L x1={350} y1={190} x2={420} y2={190} c={C.acc} />
      <T x={342} y={130} a="end" c={C.acc}>h</T><T x={385} y={184} c={C.acc}>r</T><T x={396} y={116} a="start" c={C.good}>ℓ</T>
      <T x={350} y={234} b>Koni</T>
    </>}</Svg>) },

  parabol: { label: 'Parabolün tepe noktası, kökleri ve simetri ekseni', draw: () => {
    const X = (x: number) => 200 + 40 * x, Y = (y: number) => 120 - 21 * y;
    return (
      <Svg label="Parabol">{(m) => <>
        <Axes ox={X(0)} oy={Y(0)} y0={8} y1={240} m={m} />
        <L x1={X(1)} y1={14} x2={X(1)} y2={236} c={C.mute} d w={1.2} /><T x={X(1) + 6} y={22} a="start" s={12} c={C.mute}>x = r</T>
        <path d={plot((x) => (x - 1) ** 2 - 4, -2, 4, X, Y)} fill="none" stroke={C.acc} strokeWidth={2.2} />
        <Dot x={X(-1)} y={Y(0)} c={C.good} /><Dot x={X(3)} y={Y(0)} c={C.good} /><Dot x={X(1)} y={Y(-4)} /><Dot x={X(0)} y={Y(-3)} c={C.ink} r={3} />
        <T x={X(-1) - 6} y={Y(0) - 8} a="end" c={C.good}>x₁</T><T x={X(3) + 6} y={Y(0) - 8} a="start" c={C.good}>x₂</T>
        <T x={X(1) + 10} y={Y(-4) + 16} a="start" c={C.acc} b>T(r, k)</T><T x={X(0) - 8} y={Y(-3) + 4} a="end" s={12}>c</T>
        <T x={40} y={30} a="start" s={12} c={C.acc}>a {'>'} 0: kollar yukarı</T>
      </>}</Svg>
    );
  } },

  birimCember: { label: 'Birim çember ve bölgelere göre işaretler', draw: () => {
    const a = (40 * Math.PI) / 180, px = 240 + 95 * Math.cos(a), py = 125 - 95 * Math.sin(a);
    return (
      <Svg label="Birim çember">{(m) => <>
        <L x1={120} y1={125} x2={360} y2={125} m={m.ink} w={1.2} /><L x1={240} y1={240} x2={240} y2={12} m={m.ink} w={1.2} />
        <circle cx={240} cy={125} r={95} fill="none" stroke={C.ink} strokeWidth={1.6} />
        <L x1={240} y1={125} x2={px} y2={py} c={C.acc} w={2} /><Dot x={px} y={py} />
        <L x1={px} y1={py} x2={px} y2={125} c={C.good} w={2} /><L x1={240} y1={125} x2={px} y2={125} c={C.bad} w={2.4} />
        <T x={px + 8} y={(py + 125) / 2 + 4} a="start" c={C.good} s={12}>sin θ</T><T x={(240 + px) / 2} y={142} c={C.bad} s={12}>cos θ</T>
        <T x={268} y={92} c={C.acc} s={12}>1</T><path d={arc(240, 125, 20, -40, 0)} fill="none" stroke={C.ink} /><T x={268} y={120} s={12}>θ</T>
        <T x={px + 8} y={py - 6} a="start" s={12}>(cos θ, sin θ)</T>
        <T x={455} y={30} a="end" s={12} b>I. bölge: hepsi +</T><T x={25} y={30} a="start" s={12} b>II. bölge: sin +</T>
        <T x={25} y={232} a="start" s={12} b>III. bölge: tan, cot +</T><T x={455} y={232} a="end" s={12} b>IV. bölge: cos +</T>
      </>}</Svg>
    );
  } },

  turev: { label: 'Türev, bir noktadaki teğetin eğimidir', draw: () => {
    const X = (x: number) => 50 + 52 * x, Y = (y: number) => 220 - 9 * y, f = (x: number) => 0.4 * x * x + 0.5;
    const a = 4, s = (-9 * 0.8 * a) / 52, tY = (x: number) => Y(f(a)) + s * (x - X(a));
    return (
      <Svg label="Teğet ve türev">{(m) => <>
        <Axes ox={50} oy={220} m={m} />
        <path d={plot(f, 0, 7, X, Y)} fill="none" stroke={C.ink} strokeWidth={2} />
        <L x1={150} y1={tY(150)} x2={400} y2={tY(400)} c={C.acc} w={2} />
        <L x1={X(a)} y1={Y(f(a))} x2={X(a)} y2={220} c={C.mute} d w={1.2} /><T x={X(a)} y={236} s={12}>a</T>
        <Dot x={X(a)} y={Y(f(a))} /><T x={X(a) + 10} y={Y(f(a)) + 18} a="start">(a, f(a))</T>
        <T x={404} y={tY(400) + 24} a="end" c={C.acc} b>teğet: eğim = f′(a)</T><T x={X(6.6)} y={Y(f(6.6)) - 8} a="end" s={12}>y = f(x)</T>
      </>}</Svg>
    );
  } },

  integral: { label: 'Belirli integral eğri altındaki alandır', draw: () => {
    const X = (x: number) => 50 + 52 * x, Y = (y: number) => 220 - 9 * y, f = (x: number) => 0.4 * x * x + 0.5;
    const area = `${plot(f, 2, 6, X, Y)} L${X(6)},220 L${X(2)},220 Z`;
    return (
      <Svg label="Eğri altındaki alan">{(m) => <>
        <path d={area} fill={C.soft} stroke="none" />
        <Axes ox={50} oy={220} m={m} />
        <path d={plot(f, 0, 7, X, Y)} fill="none" stroke={C.ink} strokeWidth={2} />
        <L x1={X(2)} y1={Y(f(2))} x2={X(2)} y2={220} c={C.acc} /><L x1={X(6)} y1={Y(f(6))} x2={X(6)} y2={220} c={C.acc} />
        <T x={X(2)} y={238} c={C.acc}>a</T><T x={X(6)} y={238} c={C.acc}>b</T>
        <T x={X(4.2)} y={196} c={C.acc} b>∫ f(x) dx</T><T x={X(6.6)} y={Y(f(6.6)) - 8} a="end" s={12}>y = f(x)</T>
      </>}</Svg>
    );
  } },

  ustelLog: { label: 'y = 2 üzeri x ve y = log₂ x, y = x doğrusuna göre simetriktir', draw: () => {
    const X = (x: number) => 200 + 30 * x, Y = (y: number) => 130 - 30 * y;
    return (
      <Svg label="Üstel ve logaritmik fonksiyon">{(m) => <>
        <Axes ox={X(0)} oy={Y(0)} x0={70} x1={420} y0={10} y1={240} m={m} />
        <L x1={X(-3.5)} y1={Y(-3.5)} x2={X(3.8)} y2={Y(3.8)} c={C.mute} d w={1.2} />
        <path d={plot((x) => 2 ** x, -4, 1.85, X, Y)} fill="none" stroke={C.acc} strokeWidth={2.2} />
        <path d={plot((x) => Math.log2(x), 0.09, 7, X, Y)} fill="none" stroke={C.good} strokeWidth={2.2} />
        <Dot x={X(0)} y={Y(1)} /><Dot x={X(1)} y={Y(0)} c={C.good} />
        <T x={X(0) - 8} y={Y(1) - 4} a="end" s={12}>(0, 1)</T><T x={X(1) + 4} y={Y(0) + 18} a="start" s={12}>(1, 0)</T>
        <T x={X(1.9) + 6} y={Y(3.5)} a="start" c={C.acc} b>y = 2ˣ</T><T x={X(6.9)} y={Y(2.8) - 6} a="end" c={C.good} b>y = log₂ x</T><T x={X(3.6)} y={Y(3.8) + 4} a="start" s={12} c={C.mute}>y = x</T>
      </>}</Svg>
    );
  } },

  /* ---------------- Fizik ---------------- */
  ayna: { label: 'Düz aynada yansıma: gelme açısı yansıma açısına eşittir', draw: () => (
    <Svg label="Yansıma">{(m) => <>
      <L x1={110} y1={190} x2={370} y2={190} w={3} />
      {Array.from({ length: 13 }, (_, i) => <L key={i} x1={118 + i * 20} y1={192} x2={108 + i * 20} y2={206} w={1} c={C.mute} />)}
      <L x1={240} y1={190} x2={240} y2={40} c={C.mute} d /><T x={240} y={32} s={12} c={C.mute}>normal</T>
      <L x1={120} y1={70} x2={238} y2={188} c={C.acc} w={2} m={m.acc} /><L x1={242} y1={188} x2={360} y2={70} c={C.acc} w={2} m={m.acc} />
      <path d={arc(240, 190, 44, 225, 270)} fill="none" stroke={C.good} strokeWidth={2} /><path d={arc(240, 190, 44, 270, 315)} fill="none" stroke={C.good} strokeWidth={2} />
      <T x={222} y={136} c={C.good} b>i</T><T x={258} y={136} c={C.good} b>r</T>
      <T x={112} y={62} a="start">gelen ışın</T><T x={368} y={62} a="end">yansıyan ışın</T><T x={240} y={232} s={12} c={C.mute}>i = r (açılar normalle ölçülür)</T>
    </>}</Svg>) },

  devre: { label: 'Seri ve paralel bağlı dirençler', draw: () => {
    const R = ({ x, y, v = false, l }: { x: number; y: number; v?: boolean; l: string }) => (
      <g><rect x={v ? x - 8 : x - 20} y={v ? y - 20 : y - 8} width={v ? 16 : 40} height={v ? 40 : 16} rx={2} fill={C.surf} stroke={C.acc} strokeWidth={1.8} /><T x={x} y={y - 16} s={12} c={C.acc}>{l}</T></g>
    );
    const Bat = ({ x, y }: { x: number; y: number }) => (<g><rect x={x - 14} y={y - 10} width={28} height={20} fill={C.surf} stroke="none" /><L x1={x - 14} y1={y - 5} x2={x + 14} y2={y - 5} w={2} /><L x1={x - 8} y1={y + 5} x2={x + 8} y2={y + 5} w={3} /></g>);
    return (
      <Svg label="Seri ve paralel devre">{() => <>
        <rect x={40} y={60} width={180} height={130} fill="none" stroke={C.ink} strokeWidth={1.6} />
        <Bat x={40} y={125} /><R x={95} y={60} l="R₁" /><R x={165} y={60} l="R₂" />
        <T x={130} y={30} b>Seri</T><T x={130} y={218} s={12}>R = R₁ + R₂</T><T x={130} y={236} s={12} c={C.mute}>akım aynı, gerilim paylaşılır</T>
        <rect x={260} y={60} width={180} height={130} fill="none" stroke={C.ink} strokeWidth={1.6} />
        <path d="M300,60 V125 H400 V60" fill="none" stroke={C.ink} strokeWidth={1.6} />
        <Bat x={260} y={125} /><R x={350} y={60} l="R₁" /><R x={350} y={125} l="R₂" />
        <Dot x={300} y={60} c={C.ink} r={3} /><Dot x={400} y={60} c={C.ink} r={3} />
        <T x={350} y={30} b>Paralel</T><T x={350} y={218} s={12}>1/R = 1/R₁ + 1/R₂</T><T x={350} y={236} s={12} c={C.mute}>gerilim aynı, akım paylaşılır</T>
      </>}</Svg>
    );
  } },

  dalga: { label: 'Enine dalgada dalga boyu ve genlik', draw: () => {
    const X = (x: number) => 40 + x, Y = (y: number) => 125 - y;
    return (
      <Svg label="Dalga">{(m) => <>
        <L x1={30} y1={125} x2={450} y2={125} c={C.mute} d w={1.2} />
        <path d={plot((x) => 50 * Math.sin((2 * Math.PI * x) / 160), 0, 400, X, Y, 160)} fill="none" stroke={C.acc} strokeWidth={2.2} />
        <L x1={X(40)} y1={48} x2={X(200)} y2={48} m={m.ink} /><L x1={X(200)} y1={48} x2={X(40)} y2={48} m={m.ink} />
        <L x1={X(40)} y1={58} x2={X(40)} y2={68} c={C.mute} w={1} /><L x1={X(200)} y1={58} x2={X(200)} y2={68} c={C.mute} w={1} />
        <T x={X(120)} y={42} b>λ (dalga boyu)</T>
        <L x1={X(360)} y1={125} x2={X(360)} y2={77} c={C.good} m={m.good} /><T x={X(360)} y={146} c={C.good} s={12}>genlik</T>
        <T x={X(40)} y={92} s={12} c={C.mute}>tepe</T><T x={X(120)} y={196} s={12} c={C.mute}>çukur</T>
        <T x={240} y={236} s={12} c={C.mute}>v = λ · f</T>
      </>}</Svg>
    );
  } },

  kaldirma: { label: 'Sıvıda yüzen, askıda kalan ve batan cisimler', draw: () => (
    <Svg label="Yüzme, askıda kalma, batma">{() => <>
      <rect x={40} y={90} width={400} height={130} fill={C.soft} />
      <path d="M40,60 V220 H440 V60" fill="none" stroke={C.ink} strokeWidth={1.8} /><L x1={40} y1={90} x2={440} y2={90} c={C.acc} w={1.2} />
      <rect x={80} y={72} width={70} height={36} rx={3} fill={C.surf} stroke={C.ink} strokeWidth={1.6} />
      <rect x={205} y={135} width={70} height={36} rx={3} fill={C.surf} stroke={C.ink} strokeWidth={1.6} />
      <rect x={330} y={184} width={70} height={36} rx={3} fill={C.surf} stroke={C.ink} strokeWidth={1.6} />
      <T x={115} y={30} b>yüzer</T><T x={240} y={30} b>askıda</T><T x={365} y={30} b>batar</T>
      <T x={115} y={48} s={12} c={C.mute}>d cisim {'<'} d sıvı</T><T x={240} y={48} s={12} c={C.mute}>d cisim = d sıvı</T><T x={365} y={48} s={12} c={C.mute}>d cisim {'>'} d sıvı</T>
      <T x={240} y={242} s={12} c={C.mute}>Yüzen ve askıdaki cisimde kaldırma kuvveti = ağırlık</T>
    </>}</Svg>) },

  kuvvet: { label: 'Yatay düzlemdeki cisme etki eden kuvvetler', draw: () => (
    <Svg label="Serbest cisim diyagramı">{(m) => <>
      <L x1={50} y1={180} x2={430} y2={180} />
      {Array.from({ length: 19 }, (_, i) => <L key={i} x1={58 + i * 20} y1={182} x2={48 + i * 20} y2={194} w={1} c={C.mute} />)}
      <rect x={190} y={120} width={100} height={60} rx={3} fill={C.soft} stroke={C.ink} strokeWidth={1.6} /><T x={240} y={155} s={12}>m</T>
      <L x1={290} y1={150} x2={380} y2={150} c={C.acc} w={2.2} m={m.acc} /><T x={386} y={154} a="start" c={C.acc} b>F</T>
      <L x1={190} y1={168} x2={115} y2={168} c={C.bad} w={2.2} m={m.bad} /><T x={108} y={172} a="end" c={C.bad} b>f = k · N</T>
      <L x1={240} y1={120} x2={240} y2={48} c={C.good} w={2.2} m={m.good} /><T x={248} y={58} a="start" c={C.good} b>N</T>
      <L x1={262} y1={150} x2={262} y2={232} c={C.ink} w={2.2} m={m.ink} /><T x={270} y={230} a="start" b>G = m · g</T>
      <T x={60} y={40} a="start" s={12} c={C.mute}>F<Sub>net</Sub> = F − f = m · a</T>
    </>}</Svg>) },

  egik: { label: 'Eğik düzlemde ağırlığın bileşenleri', draw: () => {
    /* blok tabanı eğim yüzeyinde (250, 100,3); kütle merkezi (240, 83) */
    const al = (30 * Math.PI) / 180, bx = 250, by = 100.3, gx = 240, gy = 83, g = 80;
    const ux = Math.cos(al), uy = Math.sin(al); /* eğim aşağı doğrultu: (−cos, +sin) */
    return (
      <Svg label="Eğik düzlem">{(m) => <>
        <path d="M60,210 L400,210 L400,13.7 Z" fill={C.soft} stroke={C.ink} strokeWidth={1.6} />
        <path d={arc(60, 210, 50, -30, 0)} fill="none" stroke={C.ink} /><T x={124} y={202} s={12}>α</T>
        <g transform={`rotate(-30 ${bx} ${by})`}><rect x={bx - 30} y={by - 40} width={60} height={40} rx={3} fill={C.surf} stroke={C.ink} strokeWidth={1.6} /></g>
        <L x1={gx} y1={gy} x2={gx} y2={gy + g} c={C.ink} w={2} m={m.ink} /><T x={gx - 6} y={gy + g + 4} a="end" b>G</T>
        <L x1={gx} y1={gy} x2={gx - g * ux * uy} y2={gy + g * uy * uy} c={C.acc} w={2} m={m.acc} />
        <T x={gx - 40} y={gy + 40} a="end" c={C.acc} b>G · sin α</T>
        <L x1={gx} y1={gy} x2={gx + g * ux * uy} y2={gy + g * ux * ux} c={C.good} w={2} m={m.good} />
        <T x={gx + 42} y={gy + 70} a="start" c={C.good} b>G · cos α</T>
      </>}</Svg>
    );
  } },

  atis: { label: 'Eğik atışta hızın yatay ve düşey bileşenleri', draw: () => (
    <Svg label="Eğik atış">{(m) => <>
      <L x1={30} y1={210} x2={450} y2={210} />
      <path d="M50,210 Q240,-90 430,210" fill="none" stroke={C.acc} strokeWidth={2.2} />
      <L x1={50} y1={210} x2={98} y2={134} c={C.ink} w={2} m={m.ink} /><T x={84} y={128} a="end" b>v₀</T>
      <L x1={50} y1={210} x2={98} y2={210} c={C.good} w={2.4} m={m.good} /><T x={100} y={228} c={C.good} s={12}>vₓ</T>
      <L x1={50} y1={210} x2={50} y2={134} c={C.bad} w={2.4} m={m.bad} /><T x={42} y={170} a="end" c={C.bad} s={12}>v<Sub>y</Sub></T>
      <L x1={240} y1={60} x2={290} y2={60} c={C.good} w={2.4} m={m.good} /><T x={240} y={48} s={12}>tepe: v<Sub>y</Sub> = 0</T>
      <L x1={240} y1={64} x2={240} y2={208} c={C.mute} d w={1.2} /><T x={248} y={140} a="start" s={12} c={C.mute}>h maks</T>
      <T x={240} y={236} s={12} c={C.mute}>menzil (yatayda vₓ sabit)</T>
    </>}</Svg>) },

  vektor: { label: 'Vektörlerin uç uca eklenmesi', draw: () => (
    <Svg label="Vektör toplama">{(m) => <>
      <L x1={80} y1={200} x2={250} y2={160} c={C.ink} w={2.4} m={m.ink} /><T x={160} y={202} b>a</T>
      <L x1={250} y1={160} x2={370} y2={60} c={C.good} w={2.4} m={m.good} /><T x={322} y={124} a="start" c={C.good} b>b</T>
      <L x1={80} y1={200} x2={366} y2={62} c={C.acc} w={2.6} m={m.acc} /><T x={210} y={112} a="end" c={C.acc} b>R = a + b</T>
      <T x={240} y={238} s={12} c={C.mute}>bileşke: ilk vektörün başından son vektörün ucuna</T>
    </>}</Svg>) },

  tork: { label: 'Kaldıraçta denge: G₁ · d₁ = G₂ · d₂', draw: () => (
    <Svg label="Tork dengesi">{(m) => <>
      <rect x={70} y={110} width={340} height={10} rx={3} fill={C.soft} stroke={C.ink} strokeWidth={1.4} />
      <path d="M200,120 L180,160 L220,160 Z" fill={C.ink} /><L x1={160} y1={160} x2={240} y2={160} />
      <L x1={100} y1={120} x2={100} y2={150} /><rect x={78} y={150} width={44} height={36} rx={3} fill={C.surf} stroke={C.acc} strokeWidth={1.8} /><T x={100} y={173} c={C.acc} b>G₁</T>
      <L x1={350} y1={120} x2={350} y2={150} /><rect x={334} y={150} width={32} height={26} rx={3} fill={C.surf} stroke={C.good} strokeWidth={1.8} /><T x={350} y={168} c={C.good} b>G₂</T>
      <L x1={200} y1={90} x2={102} y2={90} m={m.ink} /><L x1={200} y1={90} x2={348} y2={90} m={m.ink} /><L x1={200} y1={84} x2={200} y2={104} c={C.mute} w={1} />
      <T x={150} y={82}>d₁</T><T x={275} y={82}>d₂</T>
      <T x={240} y={222} s={12} c={C.mute}>destek noktasına göre torklar eşit: G₁ · d₁ = G₂ · d₂</T>
    </>}</Svg>) },

  miknatis: { label: 'Mıknatısın manyetik alan çizgileri N kutbundan çıkıp S kutbuna girer', draw: () => {
    const Ar = ({ x, y, dir }: { x: number; y: number; dir: 1 | -1 }) => <path d={`M${x - 6 * dir},${y - 5} L${x + 6 * dir},${y} L${x - 6 * dir},${y + 5} z`} fill={C.acc} />;
    return (
      <Svg label="Mıknatıs alanı">{() => <>
        {['M170,115 C120,40 360,40 310,115', 'M170,108 C90,-10 390,-10 310,108', 'M170,135 C120,210 360,210 310,135', 'M170,142 C90,260 390,260 310,142'].map((d) => <path key={d} d={d} fill="none" stroke={C.acc} strokeWidth={1.6} />)}
        <Ar x={240} y={58.8} dir={1} /><Ar x={240} y={20} dir={1} /><Ar x={240} y={191.3} dir={1} /><Ar x={240} y={230} dir={1} />
        <rect x={170} y={105} width={70} height={40} fill={C.bad} fillOpacity={0.18} stroke={C.bad} strokeWidth={1.6} />
        <rect x={240} y={105} width={70} height={40} fill={C.soft} stroke={C.acc} strokeWidth={1.6} />
        <T x={205} y={131} b c={C.bad} s={15}>N</T><T x={275} y={131} b c={C.acc} s={15}>S</T>
        <T x={60} y={128} a="start" s={12} c={C.mute}>dışarıda N → S</T>
      </>}</Svg>
    );
  } },

  /* ---------------- Kimya ---------------- */
  periyodik: { label: 'Periyodik sistemde özelliklerin değişimi', draw: () => (
    <Svg label="Periyodik eğilimler">{(m) => <>
      {Array.from({ length: 5 }, (_, r) => Array.from({ length: 8 }, (_, c) => (
        <rect key={`${r}${c}`} x={170 + c * 32} y={40 + r * 28} width={30} height={26} rx={3} fill={r === 0 && c > 0 && c < 7 ? 'none' : C.soft} stroke={r === 0 && c > 0 && c < 7 ? 'none' : C.line} />
      )))}
      {['1A', '2A', '3A', '4A', '5A', '6A', '7A', '8A'].map((g, i) => <T key={g} x={185 + i * 32} y={32} s={12} c={C.mute}>{g}</T>)}
      <L x1={170} y1={196} x2={424} y2={196} c={C.acc} w={2} m={m.acc} />
      <T x={297} y={216} s={12} c={C.acc}>periyotta sağa →</T><T x={297} y={232} s={12} c={C.acc}>yarıçap azalır; iyonlaşma enerjisi, elektronegatiflik artar</T>
      <L x1={156} y1={40} x2={156} y2={178} c={C.good} w={2} m={m.good} />
      <T x={148} y={96} a="end" s={12} c={C.good}>grupta aşağı ↓</T><T x={148} y={112} a="end" s={12} c={C.good}>yarıçap ve</T><T x={148} y={128} a="end" s={12} c={C.good}>metalik özellik artar</T>
    </>}</Svg>) },

  halDegisimi: { label: 'Maddenin hâl değişimleri', draw: () => (
    <Svg label="Hâl değişimleri">{(m) => <>
      <Pair p={[90, 195]} q={[240, 45]} a="erime" b="donma" m={m} />
      <Pair p={[240, 45]} q={[390, 195]} a="buharlaşma" b="yoğuşma" m={m} />
      <Pair p={[90, 195]} q={[390, 195]} a="süblimleşme" b="kırağılaşma" m={m} />
      <Box x={90} y={195} w={84} h={34} label="Katı" fill={C.soft} /><Box x={240} y={45} w={84} h={34} label="Sıvı" fill={C.soft} /><Box x={390} y={195} w={84} h={34} label="Gaz" fill={C.soft} />
    </>}</Svg>) },

  ph: { label: 'pH ölçeği', draw: () => {
    const X = (k: number) => 30 + k * 28.6;
    const ex: [number, string][] = [[1.5, 'mide asidi'], [2.5, 'limon, sirke'], [7, 'saf su'], [10, 'sabun'], [12.5, 'çamaşır suyu']];
    return (
      <Svg label="pH ölçeği" h={190}>{() => <>
        {Array.from({ length: 15 }, (_, k) => (
          <g key={k}>
            <rect x={X(k)} y={60} width={28.6} height={36} fill={k < 7 ? C.bad : k > 7 ? C.acc : C.sunk} fillOpacity={k === 7 ? 1 : 0.15 + Math.abs(k - 7) * 0.11} stroke={C.surf} />
            <T x={X(k) + 14.3} y={83} s={12} b={k === 7} halo={false}>{k}</T>
          </g>
        ))}
        <T x={X(3.5)} y={46} c={C.bad} b>asidik</T><T x={X(7) + 14} y={46} b>nötr</T><T x={X(10.5) + 28} y={46} c={C.acc} b>bazik</T>
        {ex.map(([v, t], i) => <g key={t}><L x1={X(v) + 14.3} y1={98} x2={X(v) + 14.3} y2={i % 2 ? 140 : 116} c={C.mute} w={1} /><T x={X(v) + 14.3} y={i % 2 ? 156 : 132} s={12}>{t}</T></g>)}
        <T x={240} y={182} s={12} c={C.mute}>pH 1 azalınca [H⁺] 10 kat artar · değerler yaklaşıktır</T>
      </>}</Svg>
    );
  } },

  pil: { label: 'Galvanik pil: çinko–bakır', draw: () => (
    <Svg label="Galvanik pil">{(m) => <>
      <path d="M50,110 V215 H190 V110" fill={C.soft} stroke={C.ink} strokeWidth={1.6} /><path d="M290,110 V215 H430 V110" fill={C.soft} stroke={C.ink} strokeWidth={1.6} />
      <rect x={106} y={70} width={18} height={110} fill={C.mute} /><rect x={356} y={70} width={18} height={110} fill={C.warn} />
      <path d="M160,180 V95 Q240,40 320,95 V180" fill="none" stroke={C.ink} strokeWidth={10} strokeOpacity={0.25} />
      <T x={240} y={88} s={12} c={C.mute}>tuz köprüsü</T>
      <path d="M115,70 V30 H365 V70" fill="none" stroke={C.ink} strokeWidth={1.6} />
      <circle cx={240} cy={30} r={13} fill={C.surf} stroke={C.ink} strokeWidth={1.6} /><T x={240} y={35} s={12} b>V</T>
      <L x1={150} y1={18} x2={205} y2={18} c={C.acc} w={2} m={m.acc} /><T x={176} y={12} c={C.acc} s={12}>e⁻</T>
      <T x={120} y={236} s={12} b>Anot (−): Zn</T><T x={360} y={236} s={12} b>Katot (+): Cu</T>
      <T x={120} y={200} s={12}>Zn → Zn²⁺ + 2e⁻</T><T x={360} y={200} s={12}>Cu²⁺ + 2e⁻ → Cu</T>
      <T x={40} y={60} a="start" s={12} c={C.mute}>yükseltgenme</T><T x={440} y={60} a="end" s={12} c={C.mute}>indirgenme</T>
    </>}</Svg>) },

  enerji: { label: 'Ekzotermik tepkimenin potansiyel enerji diyagramı', draw: () => (
    <Svg label="Tepkime enerji diyagramı">{(m) => <>
      <L x1={50} y1={225} x2={450} y2={225} m={m.ink} w={1.2} /><L x1={50} y1={225} x2={50} y2={15} m={m.ink} w={1.2} />
      <T x={58} y={22} a="start" s={12} c={C.mute}>potansiyel enerji</T><T x={446} y={242} a="end" s={12} c={C.mute}>tepkime koordinatı</T>
      <path d="M60,140 H130 C185,140 195,50 240,50 C285,50 300,185 350,185 H440" fill="none" stroke={C.acc} strokeWidth={2.2} />
      <path d="M130,140 C185,140 200,100 240,100 C280,100 300,185 350,185" fill="none" stroke={C.good} strokeWidth={2} strokeDasharray="6 4" />
      <L x1={240} y1={140} x2={240} y2={54} c={C.ink} m={m.ink} /><L x1={130} y1={140} x2={240} y2={140} c={C.mute} d w={1} />
      <T x={232} y={94} a="end" b>Ea</T>
      <L x1={410} y1={140} x2={410} y2={181} c={C.bad} m={m.bad} /><L x1={350} y1={140} x2={440} y2={140} c={C.mute} d w={1} /><T x={418} y={166} a="start" c={C.bad} b>ΔH {'<'} 0</T>
      <T x={92} y={130} s={12}>girenler</T><T x={395} y={204} s={12}>ürünler</T>
      <T x={250} y={44} a="start" s={12} c={C.acc}>aktifleşmiş kompleks</T><T x={320} y={116} a="start" s={12} c={C.good}>katalizörlü</T>
    </>}</Svg>) },

  /* ---------------- Biyoloji ---------------- */
  hucre: { label: 'Hayvan hücresi ve organeller (sadeleştirilmiş)', draw: () => (
    <Svg label="Hayvan hücresi" w={520} h={260}>{() => <>
      <ellipse cx={260} cy={130} rx={150} ry={100} fill={C.soft} stroke={C.acc} strokeWidth={2} />
      <path d="M262,96 q14,8 0,16 q-14,8 0,16 q14,8 0,16 q-14,8 0,16" fill="none" stroke={C.ink} strokeWidth={1.2} transform="translate(26,-4)" />
      <circle cx={235} cy={130} r={38} fill={C.surf} stroke={C.ink} strokeWidth={1.6} /><circle cx={243} cy={124} r={10} fill={C.line} />
      <g transform="rotate(-20 340 88)"><ellipse cx={340} cy={88} rx={26} ry={12} fill={C.surf} stroke={C.good} strokeWidth={1.6} /><path d="M320,88 q5,-8 10,0 t10,0 t10,0 t10,0" fill="none" stroke={C.good} /></g>
      <g transform="rotate(15 335 178)"><ellipse cx={335} cy={178} rx={24} ry={11} fill={C.surf} stroke={C.good} strokeWidth={1.6} /><path d="M317,178 q5,-7 9,0 t9,0 t9,0 t9,0" fill="none" stroke={C.good} /></g>
      {[[150, 170], [150, 180], [150, 190]].map(([x, y]) => <path key={y} d={`M${x! - 22},${y} q22,-10 44,0`} fill="none" stroke={C.warn} strokeWidth={2} />)}
      <circle cx={175} cy={82} r={9} fill={C.bad} fillOpacity={0.25} stroke={C.bad} />
      {[[300, 128], [312, 138], [306, 118], [318, 126], [296, 142]].map(([x, y]) => <circle key={`${x}${y}`} cx={x} cy={y} r={2.4} fill={C.ink} />)}
      <L x1={235} y1={92} x2={235} y2={22} c={C.mute} w={1} /><T x={235} y={16} s={12}>Çekirdek</T>
      <L x1={166} y1={82} x2={90} y2={60} c={C.mute} w={1} /><T x={86} y={64} a="end" s={12}>Lizozom</T>
      <L x1={128} y1={180} x2={90} y2={196} c={C.mute} w={1} /><T x={86} y={200} a="end" s={12}>Golgi</T>
      <L x1={362} y1={80} x2={430} y2={58} c={C.mute} w={1} /><T x={434} y={62} a="start" s={12}>Mitokondri</T>
      <L x1={320} y1={130} x2={430} y2={130} c={C.mute} w={1} /><T x={434} y={134} a="start" s={12}>Ribozom</T>
      <L x1={300} y1={160} x2={430} y2={200} c={C.mute} w={1} /><T x={434} y={204} a="start" s={12}>ER</T>
      <L x1={260} y1={230} x2={260} y2={246} c={C.mute} w={1} /><T x={290} y={250} a="start" s={12} c={C.acc}>Hücre zarı</T>
    </>}</Svg>) },

  bolunme: { label: 'Mitoz ve mayozda kromozom sayısı', draw: () => {
    const Cell = ({ x, y, t, r = 22, c = C.acc }: { x: number; y: number; t: string; r?: number; c?: string }) => (<g><circle cx={x} cy={y} r={r} fill={C.soft} stroke={c} strokeWidth={1.6} /><T x={x} y={y + 5} s={13} b>{t}</T></g>);
    return (
      <Svg label="Mitoz ve mayoz" h={250}>{(m) => <>
        <T x={20} y={64} a="start" b>Mitoz</T><Cell x={130} y={60} t="2n" />
        <L x1={158} y1={60} x2={230} y2={42} m={m.ink} /><L x1={158} y1={60} x2={230} y2={78} m={m.ink} />
        <Cell x={258} y={38} t="2n" /><Cell x={258} y={84} t="2n" />
        <T x={300} y={64} a="start" s={12} c={C.mute}>2 hücre, sayı korunur</T>
        <T x={20} y={174} a="start" b>Mayoz</T><Cell x={130} y={170} t="2n" c={C.good} />
        <L x1={158} y1={170} x2={205} y2={145} m={m.ink} /><L x1={158} y1={170} x2={205} y2={195} m={m.ink} />
        <Cell x={226} y={140} t="n" r={17} c={C.good} /><Cell x={226} y={200} t="n" r={17} c={C.good} />
        {[[140, 118], [140, 156], [200, 184], [200, 222]].map(([y1, y2]) => <L key={y2} x1={244} y1={y1!} x2={300} y2={y2!} m={m.ink} />)}
        {[118, 156, 184, 222].map((y) => <Cell key={y} x={316} y={y} t="n" r={13} c={C.good} />)}
        <T x={180} y={244} s={12} c={C.mute}>mayoz I: homologlar ayrılır</T>
        <T x={340} y={166} a="start" s={12} c={C.mute}>4 hücre,</T><T x={340} y={182} a="start" s={12} c={C.mute}>sayı yarıya iner</T>
      </>}</Svg>
    );
  } },

  piramit: { label: 'Besin piramidinde enerji her basamakta azalır', draw: () => {
    const rows = ['3. tüketiciler', '2. tüketiciler', '1. tüketiciler (otçullar)', 'Üreticiler'];
    return (
      <Svg label="Enerji piramidi">{(m) => <>
        {rows.map((t, i) => {
          const y0 = 30 + i * 48, y1 = y0 + 46, half = (y: number) => 20 + (y - 30) * 0.8;
          return <g key={t}><path d={`M${240 - half(y0)},${y0} H${240 + half(y0)} L${240 + half(y1)},${y1} H${240 - half(y1)} Z`} fill={i === 3 ? C.soft : C.sunk} stroke={C.ink} strokeWidth={1.2} /><T x={240} y={y0 + 28} s={12} b={i === 3}>{t}</T></g>;
        })}
        <L x1={450} y1={220} x2={450} y2={36} c={C.bad} w={2} m={m.bad} />
        <T x={442} y={112} a="end" s={12} c={C.bad}>enerji azalır</T><T x={442} y={128} a="end" s={12} c={C.mute}>(≈ %10 aktarılır)</T>
        <T x={40} y={36} a="start" s={12} c={C.mute}>biyolojik birikim</T><T x={40} y={50} a="start" s={12} c={C.mute}>üstte en fazla</T>
      </>}</Svg>
    );
  } },

  noron: { label: 'Nöronun bölümleri', draw: () => (
    <Svg label="Nöron">{(m) => <>
      {[[-50, -40], [-58, 0], [-48, 38], [-20, -54], [-22, 52]].map(([dx, dy], i) => <path key={i} d={`M110,125 l${dx! * 0.6},${dy! * 0.6} l${dx! * 0.5},${dy! * 0.2} M${110 + dx! * 0.6},${125 + dy! * 0.6} l${dx! * 0.2},${dy! * 0.6}`} fill="none" stroke={C.acc} strokeWidth={2} strokeLinecap="round" />)}
      <circle cx={110} cy={125} r={28} fill={C.soft} stroke={C.acc} strokeWidth={2} /><circle cx={110} cy={125} r={9} fill={C.acc} fillOpacity={0.5} />
      <L x1={138} y1={125} x2={400} y2={125} c={C.acc} w={2.4} />
      {[170, 220, 270, 320, 370].map((x) => <rect key={x} x={x - 20} y={115} width={40} height={20} rx={10} fill={C.warn} fillOpacity={0.25} stroke={C.warn} />)}
      {[[-26], [0], [26]].map(([dy], i) => <g key={i}><L x1={400} y1={125} x2={438} y2={125 + dy!} c={C.acc} w={2} /><circle cx={442} cy={125 + dy!} r={5} fill={C.acc} /></g>)}
      <T x={56} y={64} s={12}>Dendrit</T><T x={110} y={178} s={12}>Hücre gövdesi</T>
      <T x={270} y={100} s={12}>Miyelin kılıf</T><T x={270} y={156} s={12}>Akson</T><T x={440} y={174} s={12}>Akson uçları</T>
      <L x1={180} y1={212} x2={360} y2={212} c={C.good} w={2} m={m.good} /><T x={270} y={232} s={12} c={C.good}>impuls yönü</T>
    </>}</Svg>) },

  /* ---------------- Coğrafya ---------------- */
  mevsim: { label: '21 Haziran’da Güneş ışınları Yengeç Dönencesi’ne dik gelir', draw: () => {
    const cx = 240, cy = 125, r = 80, t = (23.5 * Math.PI) / 180;
    const ax = [-Math.sin(t), -Math.cos(t)], eq = [Math.cos(t), -Math.sin(t)];
    const P = (u: number[], k: number, base = [cx, cy]) => [base[0]! + u[0]! * k, base[1]! + u[1]! * k];
    const n = P(ax, 100), s = P(ax, -100), e1 = P(eq, r), e2 = P(eq, -r), tc = P(ax, r * Math.sin(t)), t1 = P(eq, r * Math.cos(t), tc), t2 = P(eq, -r * Math.cos(t), tc);
    return (
      <Svg label="Eksen eğikliği ve 21 Haziran">{(m) => <>
        <path d={`M${cx},${cy - r} A${r},${r} 0 0 1 ${cx},${cy + r} Z`} fill={C.sunk} />
        <circle cx={cx} cy={cy} r={r} fill="none" stroke={C.ink} strokeWidth={1.6} />
        <L x1={s[0]!} y1={s[1]!} x2={n[0]!} y2={n[1]!} c={C.ink} d /><T x={n[0]! - 6} y={n[1]! - 4} a="end" s={12}>K</T>
        <L x1={e1[0]!} y1={e1[1]!} x2={e2[0]!} y2={e2[1]!} c={C.good} w={1.8} /><L x1={t1[0]!} y1={t1[1]!} x2={t2[0]!} y2={t2[1]!} c={C.acc} w={1.8} />
        {[85, 125, 165].map((y) => <L key={y} x1={30} y1={y} x2={y === 125 ? 156 : cx - Math.sqrt(r * r - (y - cy) ** 2) - 4} y2={y} c={C.warn} w={2} m={m.ink} />)}
        <T x={36} y={74} a="start" s={12} c={C.warn}>Güneş ışınları</T>
        <T x={330} y={70} a="start" s={12} c={C.acc}>Yengeç Dönencesi</T><T x={330} y={104} a="start" s={12} c={C.good}>Ekvator</T>
        <T x={200} y={222} s={12} c={C.mute}>gündüz</T><T x={290} y={222} s={12} c={C.mute}>gece</T>
        <T x={300} y={30} a="start" s={12}>eksen eğikliği 23°27′</T>
      </>}</Svg>
    );
  } },

  izohips: { label: 'Eş yükselti eğrileri: sık eğri dik yamaç, seyrek eğri az eğim', draw: () => (
    <Svg label="İzohips haritası">{(m) => <>
      {[3, 2, 1, 0].map((i) => <ellipse key={i} cx={200 + 25 * i} cy={130} rx={40 + 45 * i} ry={25 + 22 * i} fill={i === 0 ? C.soft : 'none'} stroke={C.acc} strokeWidth={1.6} />)}
      {[0, 1, 2, 3].map((i) => <T key={i} x={200 + 25 * i} y={130 - (25 + 22 * i) + 4} s={12} c={C.acc}>{400 - i * 100} m</T>)}
      <path d="M200,124 l-6,10 h12 z" fill={C.ink} /><T x={200} y={150} s={12}>tepe</T>
      <L x1={60} y1={210} x2={112} y2={150} c={C.bad} m={m.bad} /><T x={30} y={226} a="start" s={12} c={C.bad}>sık eğriler: dik yamaç</T>
      <L x1={420} y1={226} x2={400} y2={168} c={C.good} m={m.good} /><T x={460} y={242} a="end" s={12} c={C.good}>seyrek eğriler: az eğimli</T>
    </>}</Svg>) },

  atmosfer: { label: 'Atmosferin katmanları (ölçekli değil)', draw: () => {
    const layers: [string, string, string][] = [['Ekzosfer', 'uydular', '600 km ve üstü'], ['Termosfer', 'kutup ışıkları', '≈ 80–600 km'], ['Mezosfer', 'meteorlar yanar', '≈ 50–80 km'], ['Stratosfer', 'ozon tabakası', '≈ 12–50 km'], ['Troposfer', 'hava olayları, bulut, yağış', '0–12 km']];
    return (
      <Svg label="Atmosfer katmanları">{() => <>
        {layers.map(([n, d, k], i) => <g key={n}><rect x={40} y={20 + i * 42} width={400} height={40} rx={6} fill={i === 4 ? C.soft : i === 3 ? C.good : C.sunk} fillOpacity={i === 3 ? 0.15 : 1} stroke={C.line} /><T x={56} y={45 + i * 42} a="start" b>{n}</T><T x={190} y={45 + i * 42} a="start" s={12}>{d}</T><T x={428} y={45 + i * 42} a="end" s={12} c={C.mute}>{k}</T></g>)}
        <T x={240} y={244} s={12} c={C.mute}>Troposferde yukarı çıkıldıkça sıcaklık her 200 m’de ≈ 1 °C azalır</T>
      </>}</Svg>
    );
  } }
};
