import type { Metadata } from "next"
import { getDictionary, type AreaData, type AreaCommon } from "@/lib/dictionary"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import ProductServicesGrid, { type ServiceItem } from "@/components/product-services-grid"

// Define the valid areas and languages
const validAreas = [
  "bethesda-md",
  "potomac-md",
  "north-bethesda-md",
  "georgetown-dc",
  "mclean-va",
  "arlington-va",
  "chevy-chase-md",
  "alexandria-va",
  "rockville-md",
  "vienna-va",
  "reston-va",
  "great-falls-va",
  "dupont-circle-dc",
]

const validLanguages = ["en", "es"]

// Type for the page params
type AreaPageParams = {
  params: {
    lang: string
    "city-state": string
  }
}

// Generate metadata for the page
export async function generateMetadata({ params }: AreaPageParams): Promise<Metadata> {
  const { lang, "city-state": cityState } = params

  // Validate params
  if (!validLanguages.includes(lang) || !validAreas.includes(cityState)) {
    return {
      title: "Not Found",
      description: "The page you are looking for does not exist.",
    }
  }

  // Get dictionary
  const dict = await getDictionary(lang as any)
  const areaDict = dict.areas?.[cityState] as AreaData

  // If no area data found, return generic metadata
  if (!areaDict) {
    return {
      title: "Creative Kitchens",
      description: "Premium kitchen design and remodeling services",
    }
  }

  // Return metadata
  return {
    title: areaDict.title,
    description: areaDict.metaDescription,
    openGraph: {
      title: areaDict.title,
      description: areaDict.metaDescription,
      url: `https://creativekitchensmd.com/${lang}/areas/${cityState}`,
      siteName: "Creative Kitchens",
      locale: lang === "en" ? "en_US" : "es_ES",
      type: "website",
    },
    alternates: {
      languages: {
        en: `/${lang === "en" ? "" : "en"}/areas/${cityState}`,
        es: `/${lang === "es" ? "" : "es"}/areas/${cityState}`,
      },
    },
  }
}

// Generate static paths for all areas and languages
export async function generateStaticParams() {
  const paths = []

  for (const lang of validLanguages) {
    for (const area of validAreas) {
      paths.push({
        lang,
        "city-state": area,
      })
    }
  }

  return paths
}

// Helper to format city-state for display
function formatLocation(cityState: string) {
  const [city, state] = cityState.split("-")
  return `${city.charAt(0).toUpperCase() + city.slice(1)}, ${state.toUpperCase()}`
}

// Main component
export default async function AreaPage({ params }: AreaPageParams) {
  const { lang, "city-state": cityState } = params

  // Validate params
  if (!validLanguages.includes(lang) || !validAreas.includes(cityState)) {
    notFound()
  }

  // Get dictionary data
  const dict = await getDictionary(lang as any)
  const commonDict = dict.areas?.common as AreaCommon
  const areaDict = dict.areas?.[cityState] as AreaData

  // If no area data found, return 404
  if (!areaDict || !commonDict) {
    notFound()
  }

  // Format location for display
  const formattedLocation = formatLocation(cityState)

  // Create schema.org JSON-LD for local business
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Creative Kitchens",
    image: "https://www.creativekitchensmd.com/logo.jpg",
    url: `https://www.creativekitchensmd.com/${lang}/areas/${cityState}`,
    telephone: "+1-301-555-1234", // Replace with your actual phone
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Kitchen Blvd", // Replace with your address
      addressLocality: "Bethesda",
      addressRegion: "MD",
      postalCode: "20814",
      addressCountry: "US",
    },
    areaServed: formattedLocation,
  }

  // Create services data for the grid
  const services: ServiceItem[] = [
    {
      title: lang === "en" ? "Cabinets" : "Gabinetes",
      description:
        lang === "en"
          ? `Premium cabinet solutions for ${formattedLocation} homes.`
          : `Soluciones premium de gabinetes para hogares en ${formattedLocation}.`,
      link: `/${lang}/products/cabinets`,
      image: "/modern-kitchen-cabinets.png",
    },
    {
      title: lang === "en" ? "Countertops" : "Encimeras",
      description:
        lang === "en"
          ? `Quality countertop options for ${formattedLocation} kitchens.`
          : `Opciones de encimeras de calidad para cocinas en ${formattedLocation}.`,
      link: `/${lang}/products/countertops`,
      image: "/kitchen-countertops.png",
    },
    {
      title: lang === "en" ? "Cabinet Lighting" : "Iluminación para Gabinetes",
      description:
        lang === "en"
          ? `Enhance your ${formattedLocation} kitchen with perfect lighting.`
          : `Mejore su cocina en ${formattedLocation} con iluminación perfecta.`,
      link: `/${lang}/products/cabinet-lighting`,
      image: "/cabinet-lighting.png",
    },
    {
      title: lang === "en" ? "Bath Tubs" : "Bañeras",
      description:
        lang === "en"
          ? `Luxury bath solutions for ${formattedLocation} homes.`
          : `Soluciones de baño de lujo para hogares en ${formattedLocation}.`,
      link: `/${lang}/products/bath-tubs`,
      image: "/luxury-bathtub.png",
    },
    {
      title: lang === "en" ? "Flooring" : "Pisos",
      description:
        lang === "en"
          ? `Premium flooring options for ${formattedLocation} homes.`
          : `Opciones premium de pisos para hogares en ${formattedLocation}.`,
      link: `/${lang}/products/flooring`,
      image: "/kitchen-flooring.png",
    },
    {
      title: lang === "en" ? "Appliances" : "Electrodomésticos",
      description:
        lang === "en"
          ? `Modern appliances for ${formattedLocation} kitchens.`
          : `Electrodomésticos modernos para cocinas en ${formattedLocation}.`,
      link: `/${lang}/products/appliances`,
      image: "/modern-kitchen-appliances.png",
    },
    {
      title: lang === "en" ? "Hardware" : "Herrajes",
      description:
        lang === "en"
          ? `Quality hardware solutions for ${formattedLocation} homes.`
          : `Soluciones de herrajes de calidad para hogares en ${formattedLocation}.`,
      link: `/${lang}/products/hardware`,
      image: "/cabinet-hardware.png",
    },
    {
      title: lang === "en" ? "Medicine Cabinets" : "Botiquines",
      description:
        lang === "en"
          ? `Stylish storage solutions for ${formattedLocation} bathrooms.`
          : `Soluciones de almacenamiento elegantes para baños en ${formattedLocation}.`,
      link: `/${lang}/products/medicine-cabinets`,
      image: "/medicine-cabinet.png",
    },
    {
      title: lang === "en" ? "Faucets" : "Grifos",
      description:
        lang === "en"
          ? `Premium faucets for ${formattedLocation} kitchens and baths.`
          : `Grifos premium para cocinas y baños en ${formattedLocation}.`,
      link: `/${lang}/products/faucets`,
      image: "/kitchen-faucets.png",
    },
    {
      title: lang === "en" ? "Door Hardware" : "Herrajes para Puertas",
      description:
        lang === "en"
          ? `Elegant door hardware for ${formattedLocation} homes.`
          : `Herrajes elegantes para puertas en hogares de ${formattedLocation}.`,
      link: `/${lang}/products/door-hardware`,
      image: "/placeholder.svg?height=300&width=400&text=Door+Hardware",
    },
    {
      title: lang === "en" ? "Plumbing" : "Plomería",
      description:
        lang === "en"
          ? `Professional plumbing solutions for ${formattedLocation}.`
          : `Soluciones profesionales de plomería para ${formattedLocation}.`,
      link: `/${lang}/products/plumbing`,
      image: "/plumbing-fixtures.png",
    },
    {
      title: lang === "en" ? "Sinks" : "Fregaderos",
      description:
        lang === "en"
          ? `Quality sinks for ${formattedLocation} kitchens and baths.`
          : `Fregaderos de calidad para cocinas y baños en ${formattedLocation}.`,
      link: `/${lang}/products/sinks`,
      image: "/modern-kitchen-sink.png",
    },
  ]

  // Custom CTA text based on location
  const ctaText =
    lang === "en"
      ? `We proudly serve all of ${formattedLocation} and surrounding areas with premium kitchen and bathroom remodeling services. Our local expertise ensures your project will be completed to the highest standards while respecting the character of your ${formattedLocation.split(",")[0]} home.`
      : `Servimos con orgullo a todo ${formattedLocation} y áreas circundantes con servicios premium de remodelación de cocinas y baños. Nuestra experiencia local garantiza que su proyecto se completará con los más altos estándares mientras respeta el carácter de su hogar en ${formattedLocation.split(",")[0]}.`

  return (
    <>
      {/* Add JSON-LD Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white">
          <div className="absolute inset-0 opacity-40">
            {/* Fallback image if area-specific one doesn't exist */}
            <Image
              src={`/placeholder.svg?height=800&width=1600`}
              alt={formattedLocation}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container mx-auto px-4 py-24 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{areaDict.heroTitle}</h1>
              <p className="text-xl md:text-2xl">{areaDict.heroSubtitle}</p>
            </div>
          </div>
        </section>

        {/* Local Expertise Section - Updated to remove Common Architectural Styles */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center text-amber-500">
                {commonDict.localExpertise} {formattedLocation}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                    {lang === "en" ? "Our Local Expertise in" : "Nuestra Experiencia Local en"} {formattedLocation}
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">{areaDict.areaDescription}</p>
                  <p className="text-lg text-gray-700 dark:text-gray-300">{areaDict.localExpertiseContent}</p>
                </div>

                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                    {lang === "en" ? "Neighborhoods We Serve" : "Vecindarios Que Atendemos"}
                  </h3>
                  <ul className="grid grid-cols-2 gap-2">
                    {areaDict.neighborhoods.map((neighborhood: string) => (
                      <li key={neighborhood} className="text-gray-700 dark:text-gray-300 py-1">
                        • {neighborhood}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <ProductServicesGrid
          title={lang === "en" ? "Our Services" : "Nuestros Servicios"}
          location={formattedLocation}
          lang={lang}
          services={services}
        />

        {/* Call to Action - Updated with max-w-7xl */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="bg-blue-600 p-8 md:p-12 lg:px-16 lg:py-24">
                <div className="mx-auto max-w-xl text-center">
                  <h2 className="text-2xl font-bold text-white md:text-3xl">
                    {lang === "en"
                      ? `Ready to Transform Your Kitchen in ${formattedLocation}?`
                      : `¿Listo para Transformar Su Cocina en ${formattedLocation}?`}
                  </h2>

                  <p className="text-white/90 sm:mt-4 block">{ctaText}</p>

                  <div className="mt-4 md:mt-8">
                    <Link
                      href={`tel:+13015551234`}
                      className="inline-block rounded-sm border border-white bg-white px-12 py-3 text-sm font-medium text-blue-600 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
                    >
                      {commonDict.callNow}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
                <div className="bg-white">
                  <Image
                    alt="Kitchen remodeling"
                    src="/modern-kitchen-cabinets.png"
                    width={600}
                    height={400}
                    className="h-40 w-full object-cover sm:h-56 md:h-full"
                  />
                </div>

                <div className="bg-white">
                  <Image
                    alt="Bathroom remodeling"
                    src="/luxury-bathtub.png"
                    width={600}
                    height={400}
                    className="h-40 w-full object-cover sm:h-56 md:h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
