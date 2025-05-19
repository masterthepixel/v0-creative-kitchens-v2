"use client"
import QuartzCountertopsLogoCloud from "@/components/quartz-countertops-logo-cloud"
import NaturalStoneCountertopsLogoCloud from "@/components/natural-stone-countertops-logo-cloud"
import PorcelainCountertopsLogoCloud from "@/components/porcelain-countertops-logo-cloud"
import Testimonials from "@/components/testimonials"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"

export default function CountertopsPage() {
  const { language } = useLanguage()

  const content = {
    en: {
      heroTitle: "Premium Countertops",
      heroDesc:
        "Discover elegant countertop solutions in granite, quartz, marble and more for your kitchen and bathroom. Style, durability, and function—trusted by homeowners and professionals.",
      quartzBtn: "Explore Quartz Countertops",
      naturalStoneBtn: "Explore Natural Stone",
      porcelainBtn: "Explore Porcelain",
    },
    es: {
      heroTitle: "Encimeras Premium",
      heroDesc:
        "Descubre soluciones elegantes para encimeras en granito, cuarzo, mármol y más para tu cocina y baño. Estilo, durabilidad y funcionalidad—con la confianza de propietarios y profesionales.",
      quartzBtn: "Explorar Encimeras de Cuarzo",
      naturalStoneBtn: "Explorar Piedra Natural",
      porcelainBtn: "Explorar Porcelana",
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
            <div className="flex flex-wrap gap-3">
              <a href="#quartz-countertops" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-slate-900 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 dark:focus:ring-slate-900">
                {t.quartzBtn}
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </a>
              <a href="tel:+12407143180" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-blue-700 border border-blue-200 rounded-lg hover:bg-blue-50 focus:ring-4 focus:ring-blue-100 dark:text-blue-400 dark:border-blue-700 dark:hover:bg-blue-900/20 dark:focus:ring-blue-900 transition-colors">
                {language === "en" ? "Contact (240)-714-3180" : "Contacto (240)-714-3180"}
              </a>
            </div>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Image
              src="/elegant-countertops.png"
              alt="Countertops Showcase"
              width={500}
              height={500}
              className="rounded-xl shadow-lg object-cover"
              priority
            />
          </div>
        </div>
      </section>
      
      <div id="quartz-countertops">
        <QuartzCountertopsLogoCloud />
      </div>
      
      <div id="natural-stone-countertops">
        <NaturalStoneCountertopsLogoCloud />
      </div>
      
      <div id="porcelain-countertops">
        <PorcelainCountertopsLogoCloud />
      </div>
      
      <div className="mt-16">
        <section>
          <Testimonials />
        </section>
      </div>
    </>
  )
}
