import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Contact from '@/components/sections/Contact';
import FAQ from '@/components/sections/FAQ';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Testimonial from '@/components/sections/Testimonial';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Testimonial />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
