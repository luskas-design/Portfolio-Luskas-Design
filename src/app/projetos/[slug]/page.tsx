import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { caseStudies } from '@/lib/data';

/* ─── Static params for SSG ─── */
export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

/* ─── Metadata ─── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies[slug];
  if (!cs) return {};
  return { title: `${cs.title} — Lucas Santos`, description: cs.overview.lead };
}

/* ─── Image placeholder ─── */
function ImgPlaceholder({
  caption,
  aspect = '16/10',
}: {
  caption?: string;
  aspect?: string;
}) {
  return (
    <div className="bg-[var(--white)] flex flex-col">
      <div
        className="flex items-center justify-center bg-[var(--gray-100)]"
        style={{ aspectRatio: aspect }}
      >
        <div className="flex flex-col items-center gap-2 text-[var(--gray-400)] text-center p-4">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity={0.4}
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M3 9h18M9 21V9" />
          </svg>
          {caption && (
            <span className="font-body text-[0.7rem] tracking-[0.1em] uppercase font-medium">
              {caption}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── Section label ─── */
function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3 font-body text-[0.68rem] tracking-[0.2em] uppercase text-[var(--orange)] font-semibold mb-6">
      {children}
      <span className="h-px bg-[var(--gray-200)] flex-1 max-w-[60px]" />
    </div>
  );
}

/* ─── Page ─── */
export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = caseStudies[slug];
  if (!cs) notFound();

  const next = cs.nextSlug ? caseStudies[cs.nextSlug] : null;

  return (
    <>
      {/* ── Navbar ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-6 bg-[rgba(248,246,242,0.92)] backdrop-blur-[12px] border-b border-[var(--gray-200)]">
        <Link
          href="/"
          className="font-display font-bold text-[1.1rem] tracking-tight text-[var(--black)] no-underline"
        >
          Lucas<span className="text-[var(--orange)]">.</span>
        </Link>
        <Link
          href="/"
          className="font-body text-[0.75rem] tracking-[0.1em] uppercase font-semibold text-[var(--gray-700)] no-underline hover:text-[var(--orange)] transition-colors flex items-center gap-2"
        >
          ← Voltar ao portfólio
        </Link>
      </nav>

      {/* ── Case Hero ── */}
      <div className="px-8 md:px-16 pt-40 pb-24 border-b border-[var(--gray-200)]">
        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          {cs.tags.map((t) => (
            <span
              key={t}
              className="font-body text-[0.65rem] tracking-[0.15em] uppercase text-[var(--orange)] border px-3 py-1 font-semibold"
              style={{ borderColor: 'var(--orange-dim)' }}
            >
              {t}
            </span>
          ))}
          <span className="font-body text-[0.72rem] text-[var(--gray-400)] tracking-[0.1em]">
            {cs.year} · {cs.type}
          </span>
        </div>

        {/* Title */}
        <h1
          className="font-display font-bold leading-[0.88] tracking-[-0.04em] text-[var(--black)] mb-12"
          style={{ fontSize: 'clamp(48px, 8vw, 100px)' }}
        >
          {cs.titleDisplay.split('\n').map((line, i) => (
            <span key={i}>
              {i === 0 ? line : <em className="not-italic text-[var(--orange)]">{line}</em>}
              {i === 0 && <br />}
            </span>
          ))}
        </h1>

        {/* Info row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-[var(--gray-200)] border border-[var(--gray-200)]">
          {cs.info.map((item) => (
            <div key={item.label} className="bg-[var(--white)] px-6 py-5">
              <div className="font-body text-[0.65rem] tracking-[0.15em] uppercase text-[var(--gray-400)] font-medium mb-1.5">
                {item.label}
              </div>
              <div className="font-display text-[0.95rem] font-bold tracking-[-0.01em]">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Cover visual ── */}
      <div
        className="w-full flex items-center justify-center py-16"
        style={{ background: 'var(--gray-100)', aspectRatio: '16/8' }}
      >
        <div
          className="bg-[var(--white)] border border-[var(--gray-200)] rounded-[8px] p-8 shadow-[0_8px_48px_rgba(0,0,0,0.1)]"
          style={{ width: '65%' }}
        >
          {/* Mock nav bar */}
          <div className="flex items-center gap-2 mb-5">
            {['#e2e0db', '#e2e0db', 'var(--orange)'].map((c, i) => (
              <div key={i} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
            ))}
            <div className="h-2.5 rounded-sm bg-[var(--gray-200)] ml-2" style={{ width: 120 }} />
          </div>
          {/* Mock hero */}
          <div className="rounded flex items-center justify-between p-6 mb-4" style={{ background: 'var(--black)' }}>
            <div className="flex flex-col gap-1.5">
              <div className="h-3 rounded-sm" style={{ width: 160, background: 'rgba(255,255,255,0.7)' }} />
              <div className="h-2.5 rounded-sm" style={{ width: 120, background: 'rgba(255,255,255,0.2)' }} />
              <div className="h-2 rounded-sm mt-1" style={{ width: 100, background: 'rgba(255,255,255,0.1)' }} />
              <div className="flex gap-2 mt-2">
                <div className="h-7 px-4 flex items-center justify-center rounded-sm" style={{ background: 'var(--orange)' }}>
                  <div className="h-1.5 w-12 rounded bg-white/50" />
                </div>
                <div className="h-7 w-16 rounded-sm" style={{ border: '1px solid rgba(255,255,255,0.2)' }} />
              </div>
            </div>
            <div className="h-20 w-24 rounded" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }} />
          </div>
          {/* Mock cards */}
          <div className="grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-sm border border-[var(--gray-200)] p-2.5 bg-[var(--gray-100)]">
                <div className="h-8 rounded-sm mb-1.5" style={{ background: i === 1 ? 'rgba(255,77,0,0.2)' : 'var(--gray-200)' }} />
                <div className="h-1.5 rounded-sm bg-[var(--gray-200)] mb-1" />
                <div className="h-1.5 rounded-sm bg-[var(--gray-200)]" style={{ width: `${[80, 60, 70][i]}%` }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Case body ── */}
      <div className="max-w-[1200px] mx-auto">

        {/* Overview */}
        <div className="px-8 md:px-16 py-20 border-b border-[var(--gray-200)]">
          <SectionLabel>Visão geral</SectionLabel>
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-20 items-start">
            <div>
              <h2
                className="font-display font-bold leading-none tracking-[-0.025em] text-[var(--black)] mb-6"
                style={{ fontSize: 'clamp(22px, 2.8vw, 36px)' }}
              >
                {cs.overview.lead}
              </h2>
              {cs.overview.body.map((p, i) => (
                <p
                  key={i}
                  className="font-body text-[0.95rem] text-[var(--gray-700)] leading-[1.8] font-light mb-4"
                  dangerouslySetInnerHTML={{ __html: p.replace(/\*\*(.*?)\*\*/g, '<strong style="color:var(--black);font-weight:500">$1</strong>') }}
                />
              ))}
            </div>
            <div className="flex flex-col gap-0">
              {cs.overview.infoList.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-baseline py-3.5 font-body text-[0.88rem]"
                  style={{ borderTop: i === 0 ? '1px solid var(--gray-200)' : undefined, borderBottom: '1px solid var(--gray-200)' }}
                >
                  <span className="text-[0.72rem] tracking-[0.08em] uppercase text-[var(--gray-400)] font-medium">
                    {item.label}
                  </span>
                  <span
                    className={`font-medium text-right ${item.highlight ? 'text-[var(--orange)]' : 'text-[var(--black)]'}`}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="px-8 md:px-16 py-20 border-b border-[var(--gray-200)]">
          <SectionLabel>Processo</SectionLabel>
          <h2
            className="font-display font-bold leading-[0.95] tracking-[-0.025em] text-[var(--black)] mb-10"
            style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}
          >
            Como foi feito.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[1.5px] bg-[var(--gray-200)]">
            {cs.process.map((step) => (
              <div key={step.num} className="bg-[var(--white)] p-8 py-8">
                <div
                  className="font-display font-bold leading-none tracking-[-0.04em] text-[var(--gray-200)] mb-4"
                  style={{ fontSize: '2.5rem' }}
                >
                  {step.num}
                </div>
                <div className="font-display text-[1rem] font-bold tracking-[-0.01em] mb-2">{step.title}</div>
                <p className="font-body text-[0.82rem] text-[var(--gray-700)] font-light leading-[1.7]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Images */}
        <div className="px-8 md:px-16 py-20 border-b border-[var(--gray-200)]">
          <SectionLabel>Resultado visual</SectionLabel>
          <h2
            className="font-display font-bold leading-[0.95] tracking-[-0.025em] text-[var(--black)] mb-10"
            style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}
          >
            As telas.
          </h2>

          {/* Full width */}
          <div className="mb-[1.5px]">
            <ImgPlaceholder caption="Hero da landing page" aspect="21/9" />
          </div>

          {/* 2 col */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.5px] bg-[var(--gray-200)] mb-[1.5px]">
            <ImgPlaceholder caption="Seção de quartos" />
            <ImgPlaceholder caption="Diferenciais" />
          </div>

          {/* Asymmetric */}
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-[1.5px] bg-[var(--gray-200)] mb-[1.5px]">
            <ImgPlaceholder caption="Fluxo de reserva" />
            <ImgPlaceholder caption="Mobile" />
          </div>

          {/* 3 col */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[1.5px] bg-[var(--gray-200)]">
            <ImgPlaceholder caption="Componente — Card" aspect="1/1" />
            <ImgPlaceholder caption="Componente — Busca" aspect="1/1" />
            <ImgPlaceholder caption="Componente — CTA" aspect="1/1" />
          </div>
        </div>

        {/* Results */}
        <div className="px-8 md:px-16 py-20">
          <SectionLabel>Aprendizados</SectionLabel>
          <h2
            className="font-display font-bold leading-[0.95] tracking-[-0.025em] text-[var(--black)] mb-3"
            style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}
          >
            O que esse projeto<br />me ensinou.
          </h2>
          <p className="font-body text-[0.92rem] text-[var(--gray-700)] font-light leading-[1.8] max-w-[560px] mb-10">
            {cs.results.intro}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[1.5px] bg-[var(--gray-200)]">
            {cs.results.items.map((r, i) => (
              <div key={i} className="bg-[var(--black)] text-[var(--white)] p-10">
                <div
                  className="font-display font-bold text-[var(--orange)] leading-none tracking-[-0.04em] mb-2"
                  style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}
                >
                  {r.num}
                </div>
                <div className="font-body text-[0.78rem] leading-[1.5] tracking-[0.03em] font-light"
                     style={{ color: 'rgba(255,255,255,0.45)' }}>
                  {r.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Next project ── */}
      {next && (
        <Link
          href={`/projetos/${next.slug}`}
          className="flex items-center justify-between px-8 md:px-16 py-20 no-underline transition-colors duration-200 group"
          style={{ background: 'var(--black)', color: 'var(--white)' }}
        >
          <div>
            <div
              className="font-body text-[0.68rem] tracking-[0.18em] uppercase font-medium mb-3"
              style={{ color: 'rgba(255,255,255,0.3)' }}
            >
              Próximo projeto
            </div>
            <div
              className="font-display font-bold leading-[0.92] tracking-[-0.03em]"
              style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
            >
              {next.titleDisplay.split('\n').map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </div>
          </div>
          <span
            className="text-[var(--orange)] shrink-0 transition-transform duration-200 group-hover:translate-x-2 group-hover:-translate-y-2"
            style={{ fontSize: '2.5rem' }}
          >
            ↗
          </span>
        </Link>
      )}

      {/* ── Footer ── */}
      <footer
        className="flex flex-col md:flex-row items-center justify-between gap-3 px-8 md:px-16 py-6"
        style={{ background: 'var(--black)', borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="font-display text-[0.9rem] font-black tracking-tight text-[var(--white)]">
          Lucas<span className="text-[var(--orange)]">.</span>
        </div>
        <div className="font-body text-[0.7rem] tracking-[0.05em]" style={{ color: 'rgba(255,255,255,0.2)' }}>
          © 2026 Lucas Santos
        </div>
      </footer>
    </>
  );
}
