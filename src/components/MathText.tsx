/* Soru metnindeki işaretleri çizer: {a/b} kesir, ^{…} üs, _{…} alt simge, √{…} kök.
   İç içe kullanılabilir: {2^{3} · 8/4^{2}} */
import type { ReactNode } from 'react';

/** s[i] === '{' iken eşleşen '}' konumu */
function close(s: string, i: number) {
  let depth = 0;
  for (let j = i; j < s.length; j++) {
    if (s[j] === '{') depth++;
    else if (s[j] === '}' && --depth === 0) return j;
  }
  return -1;
}
/** grup içindeki en dıştaki '/' */
function topSlash(s: string) {
  let depth = 0, at = -1;
  for (let j = 0; j < s.length; j++) {
    if (s[j] === '{') depth++;
    else if (s[j] === '}') depth--;
    else if (s[j] === '/' && depth === 0) at = j;
  }
  return at;
}

function parse(s: string, key = 'k'): ReactNode[] {
  const out: ReactNode[] = [];
  let buf = '';
  let n = 0;
  const flush = () => { if (buf) { out.push(buf); buf = ''; } };
  for (let i = 0; i < s.length; i++) {
    const c = s[i]!;
    const next = s[i + 1];
    if ((c === '^' || c === '_' || c === '√') && next === '{') {
      const end = close(s, i + 1);
      if (end < 0) { buf += c; continue; }
      flush();
      const inner = parse(s.slice(i + 2, end), `${key}${n}`);
      const k = `${key}-${n++}`;
      if (c === '^') out.push(<sup key={k} className="text-[0.72em]">{inner}</sup>);
      else if (c === '_') out.push(<sub key={k} className="text-[0.72em]">{inner}</sub>);
      else out.push(<span key={k} className="whitespace-nowrap">√<span className="border-t border-current pt-px">{inner}</span></span>);
      i = end;
      continue;
    }
    if (c === '{') {
      const end = close(s, i);
      const body = end > 0 ? s.slice(i + 1, end) : '';
      const sl = topSlash(body);
      if (end > 0 && sl > 0) {
        flush();
        const k = `${key}-${n++}`;
        out.push(
          <span key={k} className="mx-0.5 inline-flex flex-col items-center align-middle text-[0.9em] leading-tight" role="math" aria-label={`${body.slice(0, sl)} bölü ${body.slice(sl + 1)}`}>
            <span className="px-0.5">{parse(body.slice(0, sl), `${k}n`)}</span>
            <span className="w-full border-t border-current px-0.5">{parse(body.slice(sl + 1), `${k}d`)}</span>
          </span>
        );
        i = end;
        continue;
      }
    }
    buf += c;
  }
  flush();
  return out;
}

export function MathText({ text, className = '' }: { text: string; className?: string }) {
  return <span className={className}>{parse(text)}</span>;
}
