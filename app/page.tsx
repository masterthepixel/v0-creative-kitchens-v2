import Header from "@/components/header"
import { LanguageProvider } from "@/components/language-provider"
import HeroSectionWithYouTube from "@/components/hero-section-with-youtube"
import ProductBentoGrid1 from "@/components/product-bento-grid-1"
import ProductBentoGrid2 from "@/components/product-bento-grid-2"
import ProductBentoGrid3 from "@/components/product-bento-grid-3"
import Testimonials from "@/components/testimonials"
import FAQSection from "@/components/faq-section"
import ContactForm from "@/components/contact-form"
import { reviewsData } from "@/lib/testimonials-data"

export default function Home() {
  return (
    <LanguageProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <HeroSectionWithYouTube />
          <ProductBentoGrid1 />
          <ProductBentoGrid2 />
          <ProductBentoGrid3 />
          <Testimonials reviews={reviewsData.reviews} businessInfo={reviewsData.businessInfo} />
          <FAQSection />
          <ContactForm />
        </main>
      </div>
    </LanguageProvider>
  )
}
