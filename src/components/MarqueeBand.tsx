import { type Lang, translations } from '@/lib/translations';

export default function MarqueeBand({ lang = 'pt' }: { lang?: Lang }) {
  const items = translations[lang].marquee;
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-[var(--gray-200)]" style={{ background: 'var(--gray-100)', height: '44px' }}>
      <div className="flex items-center h-full whitespace-nowrap" style={{ animation: 'marquee 28s linear infinite' }}>
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-4 px-5">
            <span className="font-body text-[0.65rem] tracking-[0.2em] uppercase font-semibold text-[var(--black)]">{item}</span>
            <span className="text-[var(--orange)] text-[0.5rem]">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
