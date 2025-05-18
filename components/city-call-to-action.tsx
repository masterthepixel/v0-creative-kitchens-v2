"use client"

import { useLanguage } from "./language-provider"
import Image from "next/image"
import Link from "next/link"

interface CityCallToActionProps {
  location?: string
}

export default function CityCallToAction({ location = "" }: CityCallToActionProps) {
  const { language } = useLanguage()

  // Custom CTA text based on location
  const ctaText =
    language === "en"
      ? `We proudly serve all of ${location ? location + " and " : ""}surrounding areas with premium kitchen and bathroom remodeling services. Our local expertise ensures your project will be completed to the highest standards while respecting the character of your home.`
      : `Servimos con orgullo a ${location ? location + " y " : ""}áreas circundantes con servicios premium de remodelación de cocinas y baños. Nuestra experiencia local garantiza que su proyecto se completará con los más altos estándares mientras respeta el carácter de su hogar.`

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="bg-blue-600 p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-2xl font-bold text-white md:text-3xl">
                {language === "en"
                  ? `Ready to Transform Your Kitchen${location ? " in " + location : ""}?`
                  : `¿Listo para Transformar Su Cocina${location ? " en " + location : ""}?`}
              </h2>

              <p className="text-white/90 sm:mt-4 block">{ctaText}</p>

              <div className="mt-4 md:mt-8">
                <Link
                  href={`tel:+13015551234`}
                  className="inline-block rounded-sm border border-white bg-white px-12 py-3 text-sm font-medium text-blue-600 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  {language === "en" ? "Call Now" : "Llame Ahora"}
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
            <div className="bg-white">
              <Image
                alt={language === "en" ? "Kitchen remodeling" : "Remodelación de cocina"}
                src="/modern-kitchen-cabinets.png"
                width={600}
                height={400}
                className="h-40 w-full object-cover sm:h-56 md:h-full"
              />
            </div>

            <div className="bg-white">
              <Image
                alt={language === "en" ? "Bathroom remodeling" : "Remodelación de baño"}
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
  )
}
