import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Contact from '@/components/sections/Contact';
import FAQ from '@/components/sections/FAQ';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Testimonials from '@/components/sections/Testimonials';
import { faqs, services, testimonials } from '@/constants/data';

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
        <Contact
          title="Let's get in touch"
          description="If you want to book for a session give us a call or email"
          email="example@example.com"
          phone="642 32 33 12"
          location="Spain"
        />
        <FAQ title="FAQ" faq_cards={faqs} />
      </main>
      <Footer text="© 2023 Marketing Agency" />
    </>
  );
}
