import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Contact from '@/components/sections/Contact';
import FAQ from '@/components/sections/FAQ';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Testimonial from '@/components/sections/Testimonial';
import { services } from '@/constants/data';

export default function Home() {
  return (
    <>
      <Navbar title="Marketing" cta_button_text="Contact Us" />
      <main>
        <Hero
          title="Marketing Agency"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur saepe sint beatae nisi repellat dolorum, consectetur ducimus et error iusto cupiditate explicabo fugit, at rerum odit debitis harum delectus esse?"
          cta_button_text="Book an interview"
          picture="/images/hero-image.avif"
        />
        <Services title="Services" service_cards={services} />
        <Testimonial />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
