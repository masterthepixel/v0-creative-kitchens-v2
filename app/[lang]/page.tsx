import { getDictionary } from "@/lib/dictionary"
import HeroSectionGalleryClean from "@/components/hero-section-gallery-clean"
import ProductBentoGrid from "@/components/product-bento-grid"
import ProductBentoGrid2 from "@/components/product-bento-grid-2"
import ProductBentoGrid3 from "@/components/product-bento-grid-3"
import LogoMarquee from "@/components/logo-marquee"
import CallToAction from "@/components/call-to-action"
import FAQSection from "@/components/faq-section"
import ServicesGrid from "@/components/services-grid"
import ProductServicesGrid from "@/components/product-services-grid"
import BackToTop from "@/components/back-to-top"
import Testimonials from "@/components/testimonials"

export default async function Home({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(params.lang)

  // Get services from dictionary if available
  const services = dict.services || undefined

  // Default product services
  const productServices = [
    {
      title: "Kitchen Cabinets",
      description: "Premium quality cabinets with custom designs and finishes.",
      link: "/products/cabinets",
      image: "/modern-kitchen-cabinets.png",
    },
    {
      title: "Countertops",
      description: "Elegant countertops in granite, quartz, marble, and more.",
      link: "/products/countertops",
      image: "/kitchen-countertops.png",
    },
    {
      title: "Cabinet Lighting",
      description: "Modern lighting solutions to enhance your kitchen's ambiance.",
      link: "/products/cabinet-lighting",
      image: "/cabinet-lighting.png",
    },
    {
      title: "Flooring",
      description: "Durable and stylish flooring options for your kitchen.",
      link: "/products/flooring",
      image: "/kitchen-flooring.png",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSectionGalleryClean language={params.lang} />
      <ProductBentoGrid language={params.lang} />
      <ServicesGrid title={dict.servicesTitle || "Our Services"} services={services} lang={params.lang} />
      <ProductBentoGrid2 language={params.lang} />
      <Testimonials />
      <ProductBentoGrid3 language={params.lang} />
      <LogoMarquee />
      <ProductServicesGrid
        title={dict.productServicesTitle || "Our Products"}
        services={productServices}
        lang={params.lang}
      />
      <FAQSection language={params.lang} />
      <CallToAction language={params.lang} />
      <BackToTop />
    </main>
  )
}
