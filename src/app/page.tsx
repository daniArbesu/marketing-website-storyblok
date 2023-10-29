import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Contact from '@/components/sections/Contact';
import FAQ from '@/components/sections/FAQ';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Testimonials from '@/components/sections/Testimonials';
import { services, testimonials } from '@/constants/data';

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
        <Testimonials title="What are our clients saying" testimonial_cards={testimonials} />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
