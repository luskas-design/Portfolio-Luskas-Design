'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { type Lang, translations } from '@/lib/translations';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function Contact({ lang = 'pt' }: { lang?: Lang }) {
  const t = translations[lang].contact;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section id="contact" ref={ref} className="px-8 md:px-16 py-20 md:py-28" style={{ background: 'var(--black)' }}>
      <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease }}>
        <h2 className="font-display font-bold text-[var(--white)] leading-[0.9] tracking-[-0.035em] mb-8"
          style={{ fontSize: 'clamp(38px, 8vw, 120px)' }}>
          {t.heading}<span className="text-[var(--orange)]">.</span>
        </h2>

        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div className="max-w-[560px]">
            <p className="font-body text-[1rem] font-light leading-[1.75] text-[rgba(255,255,255,0.7)] mb-4">
              {t.body}
            </p>
            <p className="font-body text-[0.8rem] text-[var(--orange)]">
              {t.location}
            </p>
          </div>

          <div className="flex gap-3 flex-wrap shrink-0">
            <a href="https://linkedin.com/in/luskasdesign/" target="_blank" rel="noopener noreferrer"
              className="font-body text-[0.75rem] tracking-[0.1em] uppercase font-medium bg-[var(--orange)] text-white px-7 py-3.5 no-underline hover:bg-white hover:text-[var(--black)] transition-colors duration-200">
              {t.cta1}
            </a>
            <a href="https://wa.me/5511984221317" target="_blank" rel="noopener noreferrer"
              className="font-body text-[0.75rem] tracking-[0.1em] uppercase font-medium border border-white/40 text-white px-7 py-3.5 no-underline hover:border-white transition-colors duration-200">
              {t.cta2}
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
