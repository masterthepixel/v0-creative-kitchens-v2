import { getDictionary } from "@/lib/dictionary"
import ProductBentoGrid1 from "@/components/product-bento-grid-1"
import ProductBentoGrid2 from "@/components/product-bento-grid-2"
import ProductBentoGrid3 from "@/components/product-bento-grid-3"
import Testimonials from "@/components/testimonials"
import AboutUs from "@/components/about-us"
import FaqSection from "@/components/faq-section"
import { reviewsData } from "@/lib/testimonials-data"
import HeroSectionCombined from "@/components/hero-section-combined"

export default async function Home({ params: { lang } }: { params: { lang: string } }) {
  const dict = await getDictionary(lang)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Hero section */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        <HeroSectionCombined />
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <ProductBentoGrid1 />
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
        <AboutUs />
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <ProductBentoGrid2 />
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
        <Testimonials reviews={reviewsData.reviews} businessInfo={reviewsData.businessInfo} />
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <ProductBentoGrid3 />
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
        <FaqSection />
      </section>
    </main>
  )
}
