import { getDictionary } from "@/lib/dictionary"
import ProductBentoGrid1 from "@/components/product-bento-grid-1"
import ProductBentoGrid2 from "@/components/product-bento-grid-2"
import ProductBentoGrid3 from "@/components/product-bento-grid-3"
import Testimonials from "@/components/testimonials"
import AboutUs from "@/components/about-us"
import FaqSection from "@/components/faq-section"
import { reviewsData } from "@/lib/testimonials-data"
import HeroSectionCombined from "@/components/hero-section-combined"
import dynamic from "next/dynamic"

// Dynamically import the 3D marquee component with no SSR
const ThreeDMarqueeDemo = dynamic(() => import("@/components/3d-marquee-demo"), {
  ssr: false,
})

export default async function Home({ params: { lang } }: { params: { lang: string } }) {
  const dict = await getDictionary(lang)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="space-y-0 pb-8">
        {/* Hero section */}
        <section className="w-full py-4">
          <HeroSectionCombined />
        </section>

        {/* 3D Marquee section */}
        <section className="w-full">
          <ThreeDMarqueeDemo />
        </section>

        {/* Product Bento Grid 1 */}
        <section className="w-full">
          <ProductBentoGrid1 />
        </section>

        {/* Product Bento Grid 2 */}
        <section className="w-full">
          <ProductBentoGrid2 />
        </section>

        {/* Product Bento Grid 3 */}
        <section className="w-full">
          <ProductBentoGrid3 />
        </section>

        {/* About Us section - moved before Testimonials */}
        <section className="w-full bg-gray-50 dark:bg-gray-800">
          <AboutUs />
        </section>

        {/* Testimonials section */}
        <section className="w-full">
          <Testimonials reviews={reviewsData.reviews} businessInfo={reviewsData.businessInfo} />
        </section>

        {/* FAQ section */}
        <section className="w-full">
          <FaqSection />
        </section>
      </div>
    </main>
  )
}
