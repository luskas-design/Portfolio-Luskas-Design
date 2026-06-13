'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { brands } from '@/lib/data';
import { WavyBlock, WavyBlockItem } from '@/components/ui/wavy-text-block';
import { type Lang, translations } from '@/lib/translations';

function ClipRevealLine({
  children,
  index,
  delay = 0,
}: {
  children: React.ReactNode;
  index: number;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-6%' });
  return (
    <WavyBlockItem index={index}>
      <div ref={ref} style={{ overflow: 'hidden', paddingTop: '0.18em', marginTop: '-0.18em', paddingBottom: '0.08em', marginBottom: '-0.08em' }}>
        <motion.div
          initial={{ translateY: '105%' }}
          animate={inView ? { translateY: '0%' } : { translateY: '105%' }}
          transition={{ duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </div>
    </WavyBlockItem>
  );
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}>
      {children}
    </motion.div>
  );
}

export default function About({ lang = 'pt' }: { lang?: Lang }) {
  const t = translations[lang].about;

  return (
    <section id="about" className="overflow-hidden" style={{ background: 'var(--white)' }}>

      {/* ── Giant logo heading ── */}
      <div className="relative overflow-hidden border-t border-[var(--gray-200)]" style={{ background: 'var(--white)' }}>
        <h2 aria-hidden="true"
          className="font-display font-bold text-[var(--black)] leading-[0.85] tracking-tight whitespace-nowrap select-none text-center"
          style={{ fontSize: 'clamp(44px, 14vw, 9999px)', letterSpacing: '-0.03em' }}>
          luskas<span className="text-[var(--orange)]">.</span>design
        </h2>

        <div className="flex items-center justify-between px-8 md:px-16 pb-10 font-display font-semibold text-[var(--black)]"
          style={{ fontSize: 'clamp(14px, 1.8vw, 22px)' }}>
          {t.infoItems.map((item, i) => <span key={i}>{item}</span>)}
        </div>
      </div>

      {/* ── Two columns: text | photo ── */}
      <div className="border-t border-[var(--gray-200)]">
        <div className="px-8 md:px-16 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-20">

            {/* Left: text */}
            <Reveal>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-body text-sm font-medium border border-[var(--gray-200)] text-[var(--orange)] px-[10px] py-1 shrink-0">
                    {t.badge}
                  </span>
                  <span className="block w-16 h-px bg-[var(--gray-200)] shrink-0" />
                </div>

                <h3 className="font-display font-bold text-[var(--black)] leading-[0.95] tracking-[-0.025em] mb-6"
                  style={{ fontSize: 'clamp(26px, 3vw, 46px)' }}>
                  {t.heading}{' '}
                  <span className="line-through">{t.headingStrike}</span>
                </h3>

                <div className="space-y-5 font-body text-[0.95rem] text-[var(--gray-700)] leading-[1.8] font-light mb-8">
                  <p>{t.body1}</p>
                  <p>{t.body2}</p>
                </div>

                <div className="flex gap-3 flex-wrap">
                  <a href="https://linkedin.com/in/luskasdesign/" target="_blank" rel="noopener noreferrer"
                    className="font-body text-[0.72rem] tracking-[0.1em] uppercase font-medium bg-[var(--orange)] text-white px-5 py-2.5 no-underline hover:bg-[var(--black)] transition-colors duration-200">
                    {t.linkedin}
                  </a>
                  <a href="https://wa.me/5511984221317" target="_blank" rel="noopener noreferrer"
                    className="font-body text-[0.72rem] tracking-[0.1em] uppercase font-medium border border-[var(--black)] text-[var(--black)] px-5 py-2.5 no-underline hover:border-[var(--orange)] hover:text-[var(--orange)] transition-colors duration-200">
                    {t.whatsapp}
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Right: photo */}
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden min-h-[300px] lg:min-h-[480px]" style={{ background: 'var(--gray-100)' }}>
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: 'url(/images/about.jpg)' }} />
              </div>
            </Reveal>

          </div>
        </div>
      </div>

      {/* ── Brand logos carousel ── */}
      <div className="border-t border-b border-[var(--gray-200)] overflow-hidden py-6 md:py-8" style={{ background: 'var(--white)' }}>
        <div className="flex items-center whitespace-nowrap" style={{ animation: 'brands-scroll 28s linear infinite', width: 'max-content' }}>
          {[...brands, ...brands].map((brand, i) => (
            <span key={i} className="flex items-center gap-8 md:gap-14 px-8 md:px-14">
              <span className="flex items-center justify-center select-none pointer-events-none"
                style={{ width: 'clamp(72px, 8vw, 130px)', height: 'clamp(24px, 2.8vw, 40px)' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="object-contain"
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    width: 'auto',
                    height: 'auto',
                    ...(brand.colorize !== false ? { filter: 'brightness(0) invert(1) brightness(0.44) sepia(1) saturate(500%) hue-rotate(340deg)' } : {}),
                  }}
                  draggable={false}
                />
              </span>
              <span className="text-[var(--gray-200)] text-[0.5rem]">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Skills / Competências ── */}
      <div className="px-8 md:px-16 py-16 md:py-20 border-t border-[var(--gray-200)] relative">
        <div className="flex items-center gap-2 font-body text-[0.72rem] tracking-[0.15em] uppercase text-[var(--orange)] font-semibold mb-6 lg:mb-0 lg:absolute lg:left-16 lg:top-20">
          <span className="text-base">✦</span>
          {t.skillsLabel}
        </div>
        <WavyBlock className="font-display font-bold text-[var(--black)] leading-[0.92] tracking-[-0.03em] text-right"
          style={{ fontSize: 'clamp(36px, 7.5vw, 112px)' }}>
          {t.skills.map((text, i) => (
            <ClipRevealLine key={text} index={i} delay={i * 0.08}>
              {text}<span className="text-[var(--orange)]">.</span>
            </ClipRevealLine>
          ))}
        </WavyBlock>
      </div>
    </section>
  );
}
