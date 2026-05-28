import { type Lang, translations } from '@/lib/translations';

const staticSocialLinks = [
  { label: 'Instagram.', href: 'https://www.instagram.com/luskas.design/' },
  { label: 'Behance.', href: 'https://www.behance.net/luskasdesign' },
  { label: 'LinkedIn.', href: 'https://linkedin.com/in/luskasdesign/' },
];

function FooterLink({ href, label, download }: { href: string; label: string; download?: string }) {
  const isExternal = href.startsWith('http');
  const base = label.slice(0, -1);
  return (
    <a href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      download={download}
      className="block font-display font-bold text-[var(--black)] no-underline hover:text-[var(--orange)] transition-colors duration-200"
      style={{ fontSize: 'clamp(16px, 1.5vw, 22px)' }}>
      {base}<span className="text-[var(--orange)]">.</span>
    </a>
  );
}

export default function Footer({ lang = 'pt' }: { lang?: Lang }) {
  const t = translations[lang].footer;

  return (
    <footer className="border-t border-[var(--gray-200)] overflow-hidden relative" style={{ background: 'var(--white)' }}>
      <div className="px-8 md:px-16 pt-14 pb-10 grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
        {/* Col 1: contact */}
        <div>
          <span className="text-[var(--orange)] text-base block mb-4">✦</span>
          <div className="flex flex-col gap-2 mb-6">
            <a href="tel:+5511984221317" className="flex items-center gap-2 font-body text-[0.9rem] text-[var(--black)] no-underline hover:text-[var(--orange)] transition-colors">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                <path d="M2.625 1.75H5.25L6.125 4.375L4.8125 5.25C5.43 6.52 6.48 7.57 7.75 8.1875L8.625 6.875L11.25 7.75V10.375C11.25 10.8505 10.8505 11.25 10.375 11.25C5.58375 10.9625 2.09375 6.54125 2.625 1.75Z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              (11) 98422-1317
            </a>
            <a href="mailto:lucasantosprofiss@gmail.com" className="flex items-center gap-2 font-body text-[0.9rem] text-[var(--black)] no-underline hover:text-[var(--orange)] transition-colors">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                <rect x="1.75" y="3.5" width="10.5" height="7" rx="0.875" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1.75 4.375L7 8.3125L12.25 4.375" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              lucasantosprofiss@gmail.com
            </a>
          </div>
          <p className="font-body text-[0.68rem] tracking-[0.05em] text-[var(--gray-400)]">
            {t.copyright}
          </p>
        </div>

        {/* Col 2: nav */}
        <div>
          <span className="text-[var(--orange)] text-base block mb-4">✦</span>
          <p className="font-body text-[0.65rem] tracking-[0.15em] uppercase text-[var(--gray-400)] font-semibold mb-4">{t.navTitle}</p>
          <div className="flex flex-col gap-2">
            {t.navLinks.map(l => <FooterLink key={l.href} href={l.href} label={l.label} />)}
          </div>
        </div>

        {/* Col 3: social */}
        <div>
          <span className="text-[var(--orange)] text-base block mb-4">✦</span>
          <p className="font-body text-[0.65rem] tracking-[0.15em] uppercase text-[var(--gray-400)] font-semibold mb-4">{t.socialTitle}</p>
          <div className="flex flex-col gap-2">
            {staticSocialLinks.map(l => <FooterLink key={l.href} href={l.href} label={l.label} />)}
            <FooterLink
              href={t.curriculumHref}
              label={t.curriculumLabel}
              download={t.curriculumHref.split('/').pop()}
            />
          </div>
        </div>
      </div>

      {/* Decorative logo */}
      <div aria-hidden="true"
        className="font-display font-bold text-[var(--black)] leading-[0.85] tracking-tight whitespace-nowrap select-none overflow-hidden text-center"
        style={{ fontSize: 'clamp(44px, 14vw, 9999px)', letterSpacing: '-0.03em', paddingBottom: '0.05em' }}>
        luskas<span className="text-[var(--orange)]">.</span>design
      </div>
    </footer>
  );
}
