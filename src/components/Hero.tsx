'use client';
import { motion, type Variants } from 'framer-motion';
import { type Lang, translations } from '@/lib/translations';

const item: Variants = {
  hidden: { opacity: 0, filter: 'blur(12px)', y: 12 },
  show: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: { type: 'spring', bounce: 0.3, duration: 1.5 },
  },
};
const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

export default function Hero({ lang = 'pt' }: { lang?: Lang }) {
  const t = translations[lang].hero;

  return (
    <section id="top" className="relative min-h-screen flex flex-col justify-between overflow-hidden" style={{ background: '#1a1208' }}>
      <div className="absolute inset-0 bg-cover bg-no-repeat bg-[65%_top] md:bg-center" style={{ backgroundImage: 'url(/images/hero.jpg)' }} />
      <div className="absolute inset-0 md:hidden" style={{ background: 'linear-gradient(to bottom, rgba(10,8,4,0.05) 0%, rgba(10,8,4,0.55) 55%, rgba(10,8,4,0.92) 100%)' }} />
      <div className="absolute inset-0 hidden md:block" style={{ background: 'linear-gradient(to right, rgba(10,8,4,0.82) 0%, rgba(10,8,4,0.55) 50%, rgba(10,8,4,0.15) 100%)' }} />

      {/* Vertical label */}
      <div className="hidden lg:flex absolute right-12 top-1/2 -translate-y-1/2 z-10 items-center">
        <span className="font-body text-[0.6rem] tracking-[0.2em] uppercase text-[rgba(255,255,255,0.4)] whitespace-nowrap"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
          {t.verticalLabel}
        </span>
      </div>

      {/* Content */}
      <motion.div variants={container} initial="hidden" animate="show"
        className="relative z-10 flex flex-col justify-between min-h-screen px-8 md:px-16 pt-40 pb-14">

        <div className="max-w-[720px]">
          <motion.h1 variants={item}
            className="font-display font-bold text-[var(--white)] leading-[0.92] tracking-[-0.03em] mb-8"
            style={{ fontSize: 'clamp(48px, 6.5vw, 96px)' }}>
            {t.heading1}<br />{t.heading2}<span className="text-[var(--orange)]">.</span>
          </motion.h1>

          <motion.p variants={item}
            className="font-display font-semibold text-[var(--white)] leading-[1.25] mb-5"
            style={{ fontSize: 'clamp(16px, 1.8vw, 26px)' }}>
            {t.sub.split('\n').map((line, i, arr) => (
              <span key={i}>{line}{i < arr.length - 1 && <br className="hidden md:block" />}</span>
            ))}
          </motion.p>

          <motion.p variants={item}
            className="font-body font-light text-[rgba(255,255,255,0.65)] leading-[1.75] max-w-[560px]"
            style={{ fontSize: 'clamp(14px, 1.1vw, 18px)' }}>
            {t.body}
          </motion.p>
        </div>

        {/* Bottom row */}
        <motion.div variants={item} className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div className="font-display font-bold text-[var(--white)] text-[1.15rem] tracking-tight">
            luskas<span className="text-[var(--orange)]">.</span>design
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={t.cta1Href}
              className="font-body text-[0.75rem] font-medium tracking-[0.1em] uppercase bg-[var(--orange)] text-[var(--white)] px-7 py-3.5 no-underline hover:bg-white hover:text-[var(--black)] transition-colors duration-200 text-center whitespace-nowrap">
              {t.cta1}
            </a>
            <a href={t.cta2Href} target="_blank" rel="noopener noreferrer"
              className="font-body text-[0.75rem] font-medium tracking-[0.1em] uppercase border border-white/50 text-[var(--white)] px-7 py-3.5 no-underline hover:border-white transition-colors duration-200 text-center whitespace-nowrap">
              {t.cta2}
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
