import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Contact from '@/components/sections/Contact';
import FAQ from '@/components/sections/FAQ';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Testimonials from '@/components/sections/Testimonials';

const fetchData = async (lang: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STORYBLOK_URL as string}&language=${lang}`, {
    next: { revalidate: 10 }
  });

  const storyData = await res.json();
  const {
    navbar_section,
    hero_section,
    services_section,
    testimonials_section,
    contact_section,
    faq_section,
    footer_section
  } = storyData.story.content;

  return {
    navbar_section: navbar_section[0],
    hero_section: hero_section[0],
    services_section: services_section[0],
    testimonials_section: testimonials_section[0],
    contact_section: contact_section[0],
    faq_section: faq_section[0],
    footer_section: footer_section[0]
  };
};

export default async function Home({ params: { lang } }: { params: { lang: string } }) {
  const storyData = await fetchData(lang);
  return (
    <>
      <Navbar
        title={storyData.navbar_section.title}
        cta_button_text={storyData.navbar_section.cta_button_text}
      />
      <main>
        <Hero
          title={storyData.hero_section.title}
          description={storyData.hero_section.description}
          cta_button_text={storyData.hero_section.cta_button_text}
          picture={storyData.hero_section.picture.filename}
        />
        <Services
          title={storyData.services_section.title}
          service_cards={storyData.services_section.services_card}
        />
        <Testimonials
          title={storyData.testimonials_section.title}
          testimonial_cards={storyData.testimonials_section.testimonial_cards}
        />
        <Contact
          title={storyData.contact_section.title}
          description={storyData.contact_section.description}
          email={storyData.contact_section.email}
          phone={storyData.contact_section.phone}
          location={storyData.contact_section.location}
        />
        <FAQ title={storyData.faq_section.title} faq_cards={storyData.faq_section.faq_cards} />
      </main>
      <Footer text={storyData.footer_section.text} />
    </>
  );
}
