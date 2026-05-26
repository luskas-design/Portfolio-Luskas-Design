'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { projects } from '@/lib/data';
import { type Lang, translations } from '@/lib/translations';

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-8%' });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}>
      {children}
    </motion.div>
  );
}

function ProjectCard({ project, tall = false, lang = 'pt' }: { project: (typeof projects)[0]; tall?: boolean; lang?: Lang }) {
  const href = project.behanceUrl ?? `/projetos/${project.slug}`;
  const isExternal = !!project.behanceUrl;
  return (
    <a href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={`relative flex flex-col justify-end overflow-hidden group no-underline block ${tall ? 'h-[420px] md:h-[664px]' : 'h-[380px] md:h-[600px]'}`}
      style={{ background: '#111' }}>
      <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.03]"
        style={{ backgroundImage: project.image ? `url(${project.image})` : 'none', background: project.image ? undefined : '#1a1a1a' }} />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%)' }} />

      <div className="absolute top-5 right-5 flex items-center gap-2 z-10">
        {project.tags.map(t => (
          <span key={t} className="font-body text-[0.6rem] tracking-[0.12em] uppercase font-semibold bg-[var(--orange)] text-white px-2.5 py-1">
            {t}
          </span>
        ))}
        <span className="font-body text-[0.6rem] tracking-[0.12em] font-semibold border border-white/40 text-white px-2.5 py-1">
          {project.year}
        </span>
      </div>

      <div className="relative z-10 flex items-end justify-between p-6 md:p-8">
        <div>
          <h3 className="font-display font-bold text-white leading-[0.95] tracking-[-0.025em] mb-1.5"
            style={{ fontSize: tall ? 'clamp(28px, 3.5vw, 46px)' : 'clamp(22px, 2.5vw, 38px)' }}>
            {project.title}
          </h3>
          <p className="font-body text-[0.85rem] font-light text-white/70 max-w-[400px]">
            {lang === 'en' && project.descriptionEn ? project.descriptionEn : project.description}
          </p>
        </div>
        <div className="shrink-0 w-10 h-10 bg-[var(--orange)] flex items-center justify-center text-white font-bold text-lg ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          ↗
        </div>
      </div>
    </a>
  );
}

export default function Work({ lang = 'pt' }: { lang?: Lang }) {
  const t = translations[lang].work;
  const [p0, p1, p2, p3, p4, p5] = projects;

  return (
    <section id="work" className="px-8 md:px-16 py-20 md:py-28 overflow-hidden" style={{ background: 'var(--white)' }}>
      <Reveal>
        <div className="mb-12 relative">
          <div aria-hidden="true"
            className="absolute right-[-1rem] top-1/2 font-display font-bold text-[var(--gray-100)] leading-none tracking-tight select-none pointer-events-none"
            style={{ fontSize: 'clamp(60px, 12vw, 180px)', transform: 'translateY(-50%)' }}>
            luskas.design
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-body text-sm font-medium border border-[var(--gray-200)] text-[var(--orange)] px-[10px] py-1 shrink-0">
                {t.badge}
              </span>
              <span className="block w-16 h-px bg-[var(--gray-200)] shrink-0" />
            </div>
            <h2 className="font-display font-bold text-[var(--black)] leading-[0.92] tracking-[-0.03em]"
              style={{ fontSize: 'clamp(32px, 4.5vw, 64px)' }}>
              {t.heading1}<br />{t.heading2}<span className="text-[var(--orange)]">.</span>
            </h2>
          </div>
        </div>
      </Reveal>

      <div className="flex flex-col gap-3">
        <Reveal>{p0 && <ProjectCard project={p0} tall lang={lang} />}</Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Reveal delay={0}>{p1 && <ProjectCard project={p1} lang={lang} />}</Reveal>
          <Reveal delay={0.07}>{p2 && <ProjectCard project={p2} lang={lang} />}</Reveal>
        </div>
        <Reveal>{p3 && <ProjectCard project={p3} tall lang={lang} />}</Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Reveal delay={0}>{p4 && <ProjectCard project={p4} lang={lang} />}</Reveal>
          <Reveal delay={0.07}>{p5 && <ProjectCard project={p5} lang={lang} />}</Reveal>
        </div>
      </div>
    </section>
  );
}
