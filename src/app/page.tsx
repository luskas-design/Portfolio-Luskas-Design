import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MarqueeBand from '@/components/MarqueeBand';
import Work from '@/components/Work';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar lang="pt" />
      <main>
        <Hero lang="pt" />
        <MarqueeBand lang="pt" />
        <Work lang="pt" />
        <About lang="pt" />
        <Testimonials lang="pt" />
        <Contact lang="pt" />
      </main>
      <Footer lang="pt" />
    </>
  );
}
