import type { Metadata } from 'next';
import { Syne, DM_Sans } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import ClientProviders from '@/components/ClientProviders';

const syne = Syne({
  variable: '--font-syne',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'Luskas.design — Product Designer',
  description:
    'Designer visual com experiência em direção de arte, campanhas digitais e pós-produção. Focado em UI e Product Design.',
  openGraph: {
    title: 'Luskas.design — Product Designer',
    description: 'Portfólio de Lucas Santos — UI & Product Designer.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="font-body antialiased">
        <ClientProviders>{children}</ClientProviders>
      </body>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-7GFHJVS24D" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-7GFHJVS24D');
      `}</Script>
    </html>
  );
}
