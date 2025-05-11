import HeroSectionWithCarousel from "@/components/hero-section-with-carousel"
import ProductBentoGrid1 from "@/components/product-bento-grid-1"
import ProductBentoGrid2 from "@/components/product-bento-grid-2"
import ProductBentoGrid3 from "@/components/product-bento-grid-3"
import AboutUs from "@/components/about-us"
import Testimonials from "@/components/testimonials"
import FAQSection from "@/components/faq-section"
import ContactForm from "@/components/contact-form"
import { reviewsData } from "@/lib/testimonials-data"
import type { Locale } from "@/lib/dictionary"

export default function Home({ params }: { params: { lang: Locale } }) {
  return (
    <>
      <HeroSectionWithCarousel />
      <ProductBentoGrid1 />
      <ProductBentoGrid2 />
      <ProductBentoGrid3 />
      <AboutUs />
      <Testimonials reviews={reviewsData.reviews} businessInfo={reviewsData.businessInfo} />
      <FAQSection />
      <ContactForm />
    </>
  )
}
