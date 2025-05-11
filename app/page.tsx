import Header from "@/components/header"
import { LanguageProvider } from "@/components/language-provider"
import HeroSectionWithVideo from "@/components/hero-section-with-video"
import ProductBentoGrid1 from "@/components/product-bento-grid-1"
import ProductBentoGrid2 from "@/components/product-bento-grid-2"
import ProductBentoGrid3 from "@/components/product-bento-grid-3"

export default function Home() {
  return (
    <LanguageProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <HeroSectionWithVideo />
          <ProductBentoGrid1 />
          <ProductBentoGrid2 />
          <ProductBentoGrid3 />
        </main>
      </div>
    </LanguageProvider>
  )
}
