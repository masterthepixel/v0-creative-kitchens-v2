import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

export interface ServiceItem {
  title: string
  description: string
  link: string
  image: string
}

interface ProductServicesGridProps {
  title: string
  services: ServiceItem[]
  lang: string
  location?: string
}

export default function ProductServicesGrid({ title, services, lang, location }: ProductServicesGridProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            {title} {location && `in ${location}`}
          </h2>

          <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {services.map((service) => (
              <li
                key={service.title}
                className="col-span-1 flex flex-col rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                style={{
                  backgroundColor: "white",
                }}
              >
                <div className="flex flex-1 flex-col">
                  <div className="relative w-full h-48 overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4" style={{ backgroundColor: "white" }}>
                    <h3 className="text-xl font-semibold text-left text-gray-900">{service.title}</h3>
                    <p className="mt-2 text-sm text-gray-600 text-left">{service.description}</p>
                  </div>
                </div>
                <div style={{ backgroundColor: "white" }}>
                  <div className="border-t border-gray-200">
                    <Link
                      href={`/${lang}${service.link}`}
                      className="relative inline-flex items-center gap-x-2 py-3 px-4 text-sm font-semibold text-blue-600 hover:text-blue-800 text-left w-full"
                    >
                      <ArrowRightIcon className="size-4" />
                      {lang === "en" ? `View ${service.title}` : `Ver ${service.title}`}
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
