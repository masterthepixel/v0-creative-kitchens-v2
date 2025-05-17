import type { Metadata } from "next"
import { getDictionary, type AreaData, type AreaCommon } from "@/lib/dictionary"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import FAQ from "@/components/faq-section"

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

  // Safely get FAQ items
  const faqItems = areaDict?.faqs || []

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

        {/* Local Expertise Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
              {commonDict.localExpertise} {formattedLocation}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 dark:text-gray-300">{areaDict.areaDescription}</p>
                <p className="mt-6 text-lg text-gray-700 dark:text-gray-300">{areaDict.localExpertiseContent}</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  {lang === "en" ? "Neighborhoods We Serve" : "Vecindarios Que Atendemos"}
                </h3>
                <ul className="grid grid-cols-2 gap-2 mb-8">
                  {areaDict.neighborhoods.map((neighborhood: string) => (
                    <li key={neighborhood} className="text-gray-700 dark:text-gray-300 py-1">
                      • {neighborhood}
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  {lang === "en" ? "Common Architectural Styles" : "Estilos Arquitectónicos Comunes"}
                </h3>
                <ul className="grid grid-cols-2 gap-2">
                  {areaDict.architecturalStyles.map((style: string) => (
                    <li key={style} className="text-gray-700 dark:text-gray-300 py-1">
                      • {style}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
              {commonDict.servicesTitle} {formattedLocation}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(commonDict.services).map(([key, service]) => (
                <div
                  key={key}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{service}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {/* Service description would ideally come from dictionary */}
                    {lang === "en"
                      ? `Professional ${service.toLowerCase()} services tailored for ${formattedLocation} homes.`
                      : `Servicios profesionales de ${service.toLowerCase()} adaptados para hogares en ${formattedLocation}.`}
                  </p>
                  <Link
                    href={`/${lang}/services/${key}`}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                  >
                    {commonDict.readMore} →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects/Gallery Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
              {commonDict.projectsTitle} {formattedLocation}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Placeholder for project images */}
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md">
                  <div className="relative h-64">
                    <Image
                      src={`/placeholder.svg?height=400&width=600&text=Project+${item}`}
                      alt={`Project ${item}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                      {lang === "en"
                        ? `${formattedLocation} Project ${item}`
                        : `Proyecto ${item} en ${formattedLocation}`}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {lang === "en"
                        ? `Kitchen renovation featuring custom cabinetry and premium countertops.`
                        : `Renovación de cocina con gabinetes personalizados y encimeras premium.`}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link
                href={`/${lang}/gallery`}
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
              >
                {commonDict.viewProjects}
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section - Only render if we have FAQs */}
        {faqItems.length > 0 && (
          <FAQ title={`${commonDict.faqTitle} ${formattedLocation} ${commonDict.homeowners}`} faqs={faqItems} />
        )}

        {/* Call to Action */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              {commonDict.contactTitle} {formattedLocation}?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              {lang === "en"
                ? `Contact our team today to discuss your kitchen remodeling project in ${formattedLocation}.`
                : `Contacte a nuestro equipo hoy para discutir su proyecto de remodelación de cocina en ${formattedLocation}.`}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${lang}/contact`}
                className="bg-white text-blue-600 px-6 py-3 rounded-md hover:bg-gray-100 transition-colors font-medium"
              >
                {lang === "en" ? "Contact Us" : "Contáctenos"}
              </Link>
              <Link
                href={`tel:+13015551234`}
                className="bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition-colors font-medium"
              >
                {commonDict.callNow}
              </Link>
            </div>
          </div>
        </section>

        {/* Additional Area Information */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
              {commonDict.areaServed} {formattedLocation}
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-center text-gray-700 dark:text-gray-300">{areaDict.serviceContent}</p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
