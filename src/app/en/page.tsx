import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MarqueeBand from '@/components/MarqueeBand';
import Work from '@/components/Work';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Lucas Santos — Product Designer',
  description: '6+ years creating visual experiences. Focused on Product Design — graphic design, advertising and AI.',
  openGraph: {
    title: 'Lucas Santos — Product Designer',
    description: 'Lucas Santos portfolio.',
    type: 'website',
  },
};

export default function HomeEn() {
  return (
    <>
      <Navbar lang="en" />
      <main>
        <Hero lang="en" />
        <MarqueeBand lang="en" />
        <Work lang="en" />
        <About lang="en" />
        <Testimonials lang="en" />
        <Contact lang="en" />
      </main>
      <Footer lang="en" />
    </>
  );
}
