import { getDictionary } from "@/lib/dictionary"
import ProductBentoGrid1 from "@/components/product-bento-grid-1"
import ProductBentoGrid2 from "@/components/product-bento-grid-2"
import ProductBentoGrid3 from "@/components/product-bento-grid-3"
import TestimonialsSection from "@/components/testimonials-section"
import AboutUs from "@/components/about-us"
import FaqSection from "@/components/faq-section"
import HeroSectionGalleryClean from "@/components/hero-section-gallery-clean"
import { Suspense } from "react"

export default async function Home({ params: { lang } }: { params: { lang: string } }) {
  // Pre-fetch the dictionary data at the server level
  const dict = await getDictionary(lang)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="space-y-0 pb-8 w-full">
        {/* Hero Section with Gallery */}
        <section className="w-full">
          <Suspense
            fallback={
              <div className="w-full h-[80vh] bg-gray-100 dark:bg-gray-800 animate-pulse flex items-center justify-center">
                <div className="text-gray-500 dark:text-gray-400">Loading Hero Section...</div>
              </div>
            }
          >
            <HeroSectionGalleryClean />
          </Suspense>
        </section>

        {/* Product Bento Grid 1 */}
        <section className="w-full">
          <Suspense
            fallback={
              <div className="w-full h-[400px] bg-gray-100 dark:bg-gray-800 animate-pulse flex items-center justify-center">
                <div className="text-gray-500 dark:text-gray-400">Loading Products...</div>
              </div>
            }
          >
            <ProductBentoGrid1 />
          </Suspense>
        </section>

        {/* Product Bento Grid 2 */}
        <section className="w-full">
          <Suspense
            fallback={
              <div className="w-full h-[400px] bg-gray-100 dark:bg-gray-800 animate-pulse flex items-center justify-center">
                <div className="text-gray-500 dark:text-gray-400">Loading Products...</div>
              </div>
            }
          >
            <ProductBentoGrid2 />
          </Suspense>
        </section>

        {/* Product Bento Grid 3 */}
        <section className="w-full">
          <Suspense
            fallback={
              <div className="w-full h-[400px] bg-gray-100 dark:bg-gray-800 animate-pulse flex items-center justify-center">
                <div className="text-gray-500 dark:text-gray-400">Loading Products...</div>
              </div>
            }
          >
            <ProductBentoGrid3 />
          </Suspense>
        </section>

        {/* About Us section - moved before Testimonials */}
        <section className="w-full bg-gray-50 dark:bg-gray-800">
          <Suspense
            fallback={
              <div className="w-full h-[300px] bg-gray-100 dark:bg-gray-800 animate-pulse flex items-center justify-center">
                <div className="text-gray-500 dark:text-gray-400">Loading About Us...</div>
              </div>
            }
          >
            <AboutUs />
          </Suspense>
        </section>

        {/* Testimonials section */}
        <section className="w-full">
          <TestimonialsSection language={lang} />
        </section>

        {/* FAQ section */}
        <section className="w-full">
          <Suspense
            fallback={
              <div className="w-full h-[300px] bg-gray-100 dark:bg-gray-800 animate-pulse flex items-center justify-center">
                <div className="text-gray-500 dark:text-gray-400">Loading FAQs...</div>
              </div>
            }
          >
            <FaqSection />
          </Suspense>
        </section>
      </div>
    </main>
  )
}
