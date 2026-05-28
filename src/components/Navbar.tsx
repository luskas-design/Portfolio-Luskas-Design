'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { type Lang, translations } from '@/lib/translations';

export default function Navbar({ lang = 'pt' }: { lang?: Lang }) {
  const t = translations[lang].nav;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: t.cases, href: '#work' },
    { label: t.about, href: '#about' },
    { label: t.testimonials, href: '#testimonials' },
  ];

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 flex items-center justify-between px-8 md:px-16 h-20 transition-all duration-300 bg-[var(--white)] border-b border-[var(--gray-200)] ${scrolled ? 'bg-[var(--white)]/95 backdrop-blur-[12px] shadow-sm' : ''}`}>
      {/* Logo */}
      <a href={lang === 'en' ? '/en#top' : '#top'} className="font-display font-bold text-[1.15rem] tracking-tight text-[var(--black)] no-underline">
        luskas<span className="text-[var(--orange)]">.</span>design
      </a>

      {/* Desktop */}
      <ul className="hidden lg:flex items-center gap-8 list-none">
        {navLinks.map(l => (
          <li key={l.href}>
            <a href={l.href} className="font-body text-[0.72rem] tracking-[0.12em] uppercase text-[var(--gray-700)] font-medium no-underline hover:text-[var(--orange)] transition-colors duration-200 whitespace-nowrap">
              {l.label}
            </a>
          </li>
        ))}
        <li>
          <a href={t.langHref}
            className="flex items-center gap-1.5 font-body text-[0.72rem] font-medium text-[var(--black)] border border-[var(--gray-400)] px-3 py-1.5 no-underline hover:border-[var(--black)] transition-colors duration-200 whitespace-nowrap">
            {t.langToggle}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={t.langFlag} alt="" aria-hidden="true" className="w-4 h-auto" />
          </a>
        </li>
        <li>
          <a href={t.contactHref} target="_blank" rel="noopener noreferrer" className="font-body text-[0.72rem] tracking-[0.1em] uppercase font-medium no-underline bg-[var(--orange)] text-[var(--white)] px-5 py-2.5 hover:bg-[var(--black)] transition-colors duration-200 whitespace-nowrap">
            {t.contact}
          </a>
        </li>
      </ul>

      {/* Hamburger */}
      <button className="lg:hidden flex flex-col gap-1.5 p-1" onClick={() => setOpen(v => !v)} aria-label="Menu">
        {[0,1,2].map(i => (
          <span key={i} className={`block w-5 h-px bg-[var(--black)] transition-all duration-300 ${open && i===0?'translate-y-2 rotate-45':''} ${open && i===1?'opacity-0':''} ${open && i===2?'-translate-y-2 -rotate-45':''}`} />
        ))}
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full inset-x-0 bg-[var(--white)] border-t border-[var(--gray-200)] px-8 py-6 flex flex-col gap-5 lg:hidden">
          {[...navLinks].map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="font-body text-sm font-medium text-[var(--black)] hover:text-[var(--orange)] transition-colors no-underline">
              {l.label}
            </a>
          ))}
          <a href={t.contactHref} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="font-body text-sm font-medium text-[var(--black)] hover:text-[var(--orange)] transition-colors no-underline">
            {t.mobileContact}
          </a>
          <a href={t.langHref} className="flex items-center gap-1.5 font-body text-sm font-medium text-[var(--orange)] no-underline">
            {t.langToggle}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={t.langFlag} alt="" aria-hidden="true" className="w-4 h-auto" />
          </a>
        </div>
      )}
    </nav>
  );
}
