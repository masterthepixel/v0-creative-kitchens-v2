"use client"
import CabinetsLogoCloud from "@/components/cabinets-logo-slider"
import ExternalCabinetryLogoCloud from "@/components/external-cabinetry-logo-cloud"
import Testimonials from "@/components/testimonials"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"

export default function AppliancesPage() {
  const { language } = useLanguage()

  const content = {
    en: {
      heroTitle: "Kitchen Appliances",
      heroDesc:
        "Enhance your home with cutting-edge appliances that blend innovative technology with sophisticated design for everyday convenience. Style, efficiency, and performance—trusted by homeowners and professionals.",
      indoorBtn: "Explore All Appliances",
      outdoorBtn: "Explore Smart Options",
    },
    es: {
      heroTitle: "Electrodomésticos de Cocina",
      heroDesc:
        "Mejora tu hogar con electrodomésticos de vanguardia que combinan tecnología innovadora con diseño sofisticado para tu comodidad diaria. Estilo, eficiencia y rendimiento—con la confianza de propietarios y profesionales.",
      indoorBtn: "Explorar Todos los Electrodomésticos",
      outdoorBtn: "Explorar Opciones Inteligentes",
    },
  }
  const t = language === "es" ? content.es : content.en

  return (
    <>
      <section>
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-slate-900 dark:text-white">
              {t.heroTitle}
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              {t.heroDesc}
            </p>
            <a href="#indoor-cabinetry" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-slate-900 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 dark:focus:ring-slate-900">
              {t.indoorBtn}
              <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
            <a href="tel:+12407143180" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-blue-700 border border-blue-200 rounded-lg hover:bg-blue-50 focus:ring-4 focus:ring-blue-100 dark:text-blue-400 dark:border-blue-700 dark:hover:bg-blue-900/20 dark:focus:ring-blue-900 transition-colors">
              {language === "en" ? "Contact (240)-714-3180" : "Contacto (240)-714-3180"}
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Image
              src="/appliances.jpg"
              alt="Appliances Showcase"
              width={500}
              height={500}
              className="rounded-xl shadow-lg object-cover"
              priority
            />
          </div>
        </div>
      </section>
      <div id="indoor-cabinetry">
        <CabinetsLogoCloud />
      </div>
      <div id="outdoor-cabinetry">
        <ExternalCabinetryLogoCloud />
      </div>
      <div className="mt-16">
        <section>
          <Testimonials />
        </section>
      </div>
    </>
  )
}
