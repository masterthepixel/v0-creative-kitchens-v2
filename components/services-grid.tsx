import Link from "next/link"
import type { AreaCommon } from "@/lib/dictionary"

interface ServicesGridProps {
  title?: string
  services?: AreaCommon["services"]
  lang?: string
}

export default function ServicesGrid({ title = "Our Services", services, lang = "en" }: ServicesGridProps) {
  // Default services if none are provided
  const defaultServices = {
    kitchenDesign: "Kitchen Design",
    cabinetInstallation: "Cabinet Installation",
    countertopInstallation: "Countertop Installation",
    kitchenRemodeling: "Kitchen Remodeling",
    customCabinetry: "Custom Cabinetry",
    kitchenRenovation: "Kitchen Renovation",
  }

  // Use provided services or fall back to defaults
  const serviceItems = services || defaultServices

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(serviceItems).map(([key, service]) => (
            <div
              key={key}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-3 dark:text-white">{service}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {lang === "en"
                  ? `Professional ${service.toLowerCase()} services tailored for your home.`
                  : `Servicios profesionales de ${service.toLowerCase()} adaptados para su hogar.`}
              </p>
              <Link
                href={`/${lang}/services/${key}`}
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
              >
                {lang === "en" ? "Read More" : "Leer Más"} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
