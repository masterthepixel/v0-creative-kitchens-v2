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
  title?: string
  services?: ServiceItem[]
  lang: string
  location?: string
}

export default function ProductServicesGrid({
  title = "Our Services",
  services,
  lang,
  location,
}: ProductServicesGridProps) {
  // Default services if none provided
  const defaultServices: ServiceItem[] = [
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

  // Use provided services or fall back to defaults
  const displayServices = services && services.length > 0 ? services : defaultServices

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            {title} {location && `in ${location}`}
          </h2>

          <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {displayServices.map((service) => (
              <li
                key={service.title}
                className="col-span-1 flex flex-col rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow overflow-hidden bg-light-blue-50 dark:bg-slate-800"
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
                  <div className="p-4 bg-light-blue-50 dark:bg-slate-800">
                    <h3 className="text-xl font-semibold text-left text-slate-900 dark:text-slate-100">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 text-left">{service.description}</p>
                  </div>
                </div>
                <div className="bg-light-blue-50 dark:bg-slate-800">
                  <div className="border-t border-slate-200 dark:border-slate-700">
                    <Link
                      href={`/${lang}${service.link}`}
                      className="relative inline-flex items-center gap-x-2 py-3 px-4 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-left w-full"
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
