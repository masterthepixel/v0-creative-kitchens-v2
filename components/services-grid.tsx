import Link from "next/link"
import type { AreaCommon } from "@/lib/dictionary"

interface ServicesGridProps {
  title: string
  services: AreaCommon["services"]
  lang?: string
}

export default function ServicesGrid({ title, services, lang = "en" }: ServicesGridProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(services).map(([key, service]) => (
            <div key={key} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3">{service}</h3>
              <p className="text-gray-600 mb-4">
                {lang === "en"
                  ? `Professional ${service.toLowerCase()} services tailored for your home.`
                  : `Servicios profesionales de ${service.toLowerCase()} adaptados para su hogar.`}
              </p>
              <Link href={`/${lang}/services/${key}`} className="text-blue-600 hover:text-blue-800 font-medium">
                {lang === "en" ? "Read More" : "Leer Más"} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
