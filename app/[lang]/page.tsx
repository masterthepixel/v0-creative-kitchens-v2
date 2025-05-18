import { getDictionary } from "@/lib/dictionary"
import HeroSectionGalleryClean from "@/components/hero-section-gallery-clean"
import ProductBentoGrid1 from "@/components/product-bento-grid-1"
import ProductBentoGrid2 from "@/components/product-bento-grid-2"
import ProductBentoGrid3 from "@/components/product-bento-grid-3"
import FAQSection from "@/components/faq-section"
import BackToTop from "@/components/back-to-top"
import Testimonials from "@/components/testimonials"

export default async function Home({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(params.lang)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSectionGalleryClean />
      {/* Removed ServicesGrid component as requested */}
      <ProductBentoGrid1 language={params.lang} />
      <ProductBentoGrid2 language={params.lang} />
      <ProductBentoGrid3 language={params.lang} />
      <Testimonials />
      <FAQSection language={params.lang} />
      <BackToTop />
    </main>
  )
}
