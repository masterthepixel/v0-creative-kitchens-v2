import { Suspense } from "react"
import dynamic from "next/dynamic"
import { getDictionary } from "@/lib/dictionary"
import TestimonialsSection from "@/components/testimonials-section"

// Import other components...

export default async function Home({ params }: { params: { lang: string } }) {
  // Pre-fetch dictionary data at the server level
  const dict = await getDictionary(params.lang)

  // Dynamic imports for other components...
  const ProductBentoGrid1 = dynamic(() => import("@/components/product-bento-grid-1"), {
    ssr: true,
    loading: () => (
      <div className="w-full h-[60vh] bg-gray-100 dark:bg-gray-800 animate-pulse flex items-center justify-center">
        <div className="text-gray-500 dark:text-gray-400">Loading Product Grid...</div>
      </div>
    ),
  })

  // Other dynamic imports...

  const AboutUs = dynamic(() => import("@/components/about-us"), {
    ssr: true,
    loading: () => (
      <div className="w-full h-[40vh] bg-gray-100 dark:bg-gray-800 animate-pulse flex items-center justify-center">
        <div className="text-gray-500 dark:text-gray-400">Loading About Us...</div>
      </div>
    ),
  })

  const FAQSection = dynamic(() => import("@/components/faq-section"), {
    ssr: true,
    loading: () => (
      <div className="w-full h-[40vh] bg-gray-100 dark:bg-gray-800 animate-pulse flex items-center justify-center">
        <div className="text-gray-500 dark:text-gray-400">Loading FAQ Section...</div>
      </div>
    ),
  })

  // Other dynamic imports...

  return (
    <>
      <section className="w-full pt-24 md:pt-32">
        <Suspense
          fallback={
            <div className="w-full h-[60vh] bg-gray-100 dark:bg-gray-800 animate-pulse flex items-center justify-center">
              <div className="text-gray-500 dark:text-gray-400">Loading Product Grid...</div>
            </div>
          }
        >
          <ProductBentoGrid1 />
        </Suspense>
      </section>

      {/* Other sections... */}

      <section className="w-full">
        <Suspense
          fallback={
            <div className="w-full h-[40vh] bg-gray-100 dark:bg-gray-800 animate-pulse flex items-center justify-center">
              <div className="text-gray-500 dark:text-gray-400">Loading About Us...</div>
            </div>
          }
        >
          <AboutUs />
        </Suspense>
      </section>

      <section className="w-full">
        <TestimonialsSection language={params.lang} />
      </section>

      <section className="w-full">
        <Suspense
          fallback={
            <div className="w-full h-[40vh] bg-gray-100 dark:bg-gray-800 animate-pulse flex items-center justify-center">
              <div className="text-gray-500 dark:text-gray-400">Loading FAQ Section...</div>
            </div>
          }
        >
          <FAQSection />
        </Suspense>
      </section>
    </>
  )
}
