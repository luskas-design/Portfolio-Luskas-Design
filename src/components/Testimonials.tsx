'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { testimonials } from '@/lib/data';
import { type Lang, translations } from '@/lib/translations';

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-8%' });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}>
      {children}
    </motion.div>
  );
}

function TestimonialCard({ t, lang = 'pt' }: { t: typeof testimonials[0]; lang?: Lang }) {
  return (
    <div className="flex flex-col justify-between gap-5 p-8 border border-[var(--gray-200)] bg-[var(--white)]">
      <div>
        <div className="font-display font-bold text-[var(--orange)] leading-[0.7] mb-3 text-5xl" aria-hidden>
          &ldquo;
        </div>
        <p className="font-body text-[0.9rem] leading-[1.75] text-[var(--gray-700)]">
          {lang === 'en' && t.quoteEn ? t.quoteEn : t.quote}
        </p>
      </div>
      <div className="flex items-center gap-3 pt-4 border-t border-[var(--gray-200)]">
        <div className="w-9 h-9 rounded-full shrink-0 overflow-hidden"
          style={{ border: '1.5px solid rgba(255,77,0,0.2)' }}>
          {t.photo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={t.photo} alt={t.name} className="w-full h-full object-cover" draggable={false} />
          ) : (
            <div className="w-full h-full flex items-center justify-center font-display text-[0.65rem] font-black text-[var(--orange)]"
              style={{ background: 'var(--orange-dim)' }}>
              {t.initials}
            </div>
          )}
        </div>
        <div>
          <div className="font-display text-[0.88rem] font-bold text-[var(--black)] tracking-[-0.01em]">{t.name}</div>
          <div className="font-body text-[0.68rem] tracking-[0.05em] text-[var(--gray-400)] mt-0.5">{lang === 'en' && t.roleEn ? t.roleEn : t.role}</div>
        </div>
      </div>
    </div>
  );
}

function TestimonialsColumn({ items, duration = 16, className = '', lang = 'pt' }: {
  items: typeof testimonials;
  duration?: number;
  className?: string;
  lang?: Lang;
}) {
  return (
    <div className={className}>
      <motion.div
        animate={{ translateY: '-50%' }}
        transition={{ duration, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
        className="flex flex-col gap-4 pb-4"
      >
        {[...items, ...items].map((t, i) => (
          <TestimonialCard key={`${t.id}-${i}`} t={t} lang={lang} />
        ))}
      </motion.div>
    </div>
  );
}

export default function Testimonials({ lang = 'pt' }: { lang?: Lang }) {
  const t = translations[lang].testimonials;
  const col1 = [testimonials[0], testimonials[2], testimonials[4], testimonials[6]];
  const col2 = [testimonials[1], testimonials[3], testimonials[5]];

  return (
    <section id="testimonials" className="px-8 md:px-16 py-20 md:py-28 border-t border-[var(--gray-200)]"
      style={{ background: 'var(--white)' }}>
      <Reveal>
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-body text-sm font-medium border border-[var(--gray-200)] text-[var(--orange)] px-[10px] py-1 shrink-0">
              {t.badge}
            </span>
            <span className="block w-16 h-px bg-[var(--gray-200)] shrink-0" />
          </div>
          <h2 className="font-display font-bold text-[var(--black)] leading-[0.92] tracking-[-0.03em]"
            style={{ fontSize: 'clamp(32px, 4.5vw, 64px)' }}>
            {t.heading1} {t.heading2}<span className="text-[var(--orange)]">.</span>
          </h2>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 overflow-hidden"
        style={{
          maxHeight: '600px',
          maskImage: 'linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)',
        }}>
        <TestimonialsColumn items={col1} duration={28} lang={lang} />
        <TestimonialsColumn items={col2} duration={22} className="hidden md:block" lang={lang} />
      </div>
    </section>
  );
}
