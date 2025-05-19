"use client"
import CabinetsLogoCloud from "@/components/cabinets-logo-slider"
import ExternalCabinetryLogoCloud from "@/components/external-cabinetry-logo-cloud"
import Testimonials from "@/components/testimonials"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"

export default function PlumbingPage() {
  const { language } = useLanguage()

  const content = {
    en: {
      heroTitle: "Quality Plumbing Solutions",
      heroDesc:
        "Build with confidence using our reliable plumbing solutions, expertly engineered for efficiency and long-term dependability. Quality, performance, and innovation—trusted by homeowners and professionals.",
      indoorBtn: "Explore Plumbing Fixtures",
      outdoorBtn: "Explore Accessories",
    },
    es: {
      heroTitle: "Soluciones de Plomería de Calidad",
      heroDesc:
        "Construye con confianza usando nuestras soluciones confiables de plomería, expertamente diseñadas para eficiencia y dependabilidad a largo plazo. Calidad, rendimiento e innovación—con la confianza de propietarios y profesionales.",
      indoorBtn: "Explorar Accesorios de Plomería",
      outdoorBtn: "Explorar Accesorios",
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
              src="/plumbing-fixtures.png"
              alt="Plumbing Showcase"
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
