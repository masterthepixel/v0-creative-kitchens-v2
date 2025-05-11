"use client"

import { useLanguage } from "./language-provider"
import { Building2, Trophy, Users, Clock, Hammer, Heart } from "lucide-react"

export default function AboutUs() {
  const { language } = useLanguage()

  return (
    <div className="relative isolate overflow-hidden bg-white dark:bg-gray-900 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-gray-200 dark:stroke-gray-700"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50 dark:fill-gray-800">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div>

      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold text-primary">Creative Kitchens MD</p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 dark:text-white sm:text-5xl">
                {language === "en" ? "About Us" : "Sobre Nosotros"}
              </h1>
              <p className="mt-6 text-xl text-gray-700 dark:text-gray-300">
                {language === "en"
                  ? "We're passionate about transforming kitchens into beautiful, functional spaces that suit your lifestyle. With decades of experience and dedication to quality craftsmanship."
                  : "Nos apasiona transformar cocinas en espacios hermosos y funcionales que se adapten a su estilo de vida. Con décadas de experiencia y dedicación a la artesanía de calidad."}
              </p>
            </div>
          </div>
        </div>
        <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt="Creative Kitchens MD Showroom"
            src="https://images.unsplash.com/photo-1556912173-3bb406ef7e77?q=80&w=2070&auto=format&fit=crop"
            className="w-full max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-full"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base text-gray-700 dark:text-gray-300 lg:max-w-lg">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-8">
                {language === "en" ? "Our Story" : "Nuestra Historia"}
              </h2>

              <ul role="list" className="mt-8 space-y-8 text-gray-600 dark:text-gray-400">
                <li className="flex gap-x-3">
                  <Building2 className="mt-1 size-5 flex-none text-primary" />
                  <span>
                    <strong className="font-semibold text-gray-900 dark:text-white">
                      {language === "en" ? "Established" : "Establecido"}
                    </strong>{" "}
                    <br />
                    {language === "en" ? "Founded in 1995" : "Fundado en 1995"}
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <Trophy className="mt-1 size-5 flex-none text-primary" />
                  <span>
                    <strong className="font-semibold text-gray-900 dark:text-white">
                      {language === "en" ? "Experience" : "Experiencia"}
                    </strong>{" "}
                    <br />
                    {language === "en" ? "Over 25 years in the industry" : "Más de 25 años en la industria"}
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <Users className="mt-1 size-5 flex-none text-primary" />
                  <span>
                    <strong className="font-semibold text-gray-900 dark:text-white">
                      {language === "en" ? "Team" : "Equipo"}
                    </strong>{" "}
                    <br />
                    {language === "en" ? "Skilled designers and craftsmen" : "Diseñadores y artesanos calificados"}
                  </span>
                </li>
              </ul>

              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {language === "en" ? "Our Values" : "Nuestros Valores"}
              </h2>
              <ul role="list" className="mt-8 space-y-8 text-gray-600 dark:text-gray-400">
                <li className="flex gap-x-3">
                  <Heart className="mt-1 size-5 flex-none text-primary" />
                  <span>
                    <strong className="font-semibold text-gray-900 dark:text-white">
                      {language === "en" ? "Quality" : "Calidad"}
                    </strong>{" "}
                    <br />
                    {language === "en"
                      ? "We never compromise on materials or craftsmanship"
                      : "Nunca comprometemos los materiales o la artesanía"}
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <Clock className="mt-1 size-5 flex-none text-primary" />
                  <span>
                    <strong className="font-semibold text-gray-900 dark:text-white">
                      {language === "en" ? "Reliability" : "Confiabilidad"}
                    </strong>{" "}
                    <br />
                    {language === "en"
                      ? "On-time delivery and transparent communication"
                      : "Entrega puntual y comunicación transparente"}
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <Hammer className="mt-1 size-5 flex-none text-primary" />
                  <span>
                    <strong className="font-semibold text-gray-900 dark:text-white">
                      {language === "en" ? "Craftsmanship" : "Artesanía"}
                    </strong>{" "}
                    <br />
                    {language === "en"
                      ? "Attention to detail in every project we undertake"
                      : "Atención al detalle en cada proyecto que emprendemos"}
                  </span>
                </li>
              </ul>

              <p className="mt-8">
                {language === "en"
                  ? "At Creative Kitchens MD, we believe that the kitchen is the heart of the home. Our mission is to create spaces that inspire gathering, cooking, and creating memories. From initial design to final installation, our team works closely with you to ensure your vision becomes reality. We take pride in our attention to detail and commitment to excellence in every project we undertake."
                  : "En Creative Kitchens MD, creemos que la cocina es el corazón del hogar. Nuestra misión es crear espacios que inspiren reuniones, cocina y creación de recuerdos. Desde el diseño inicial hasta la instalación final, nuestro equipo trabaja estrechamente con usted para asegurar que su visión se convierta en realidad. Nos enorgullecemos de nuestra atención al detalle y compromiso con la excelencia en cada proyecto que emprendemos."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
