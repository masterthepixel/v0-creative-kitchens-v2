import Header from "@/components/header"
import { LanguageProvider } from "@/components/language-provider"
import ProductBentoGrid1 from "@/components/product-bento-grid-1"
import ProductBentoGrid2 from "@/components/product-bento-grid-2"
import ProductBentoGrid3 from "@/components/product-bento-grid-3"

export default function Home() {
  return (
    <LanguageProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <section className="py-12 md:py-16 lg:py-20">
            <div className="container px-4 md:px-6">
              <div className="text-center mb-10">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  Welcome to Creative Kitchens
                </h1>
                <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
                  Transform your space with premium kitchen and bathroom solutions
                </p>
              </div>

              <ProductBentoGrid1 />

              <div className="mt-20">
                <ProductBentoGrid2 />
              </div>

              <div className="mt-20">
                <ProductBentoGrid3 />
              </div>
            </div>
          </section>
        </main>
      </div>
    </LanguageProvider>
  )
}
