"use client"

import { useLanguage } from "./language-provider"
import Link from "next/link"
import { Facebook, Instagram, PinIcon as Pinterest, Building2, Phone, Mail, Clock, Printer } from "lucide-react"

// Areas we serve - flat list
const serviceAreas = [
  { id: "bethesda-md", name: "Bethesda, MD" },
  { id: "potomac-md", name: "Potomac, MD" },
  { id: "north-bethesda-md", name: "North Bethesda, MD" },
  { id: "georgetown-dc", name: "Georgetown, DC" },
  { id: "mclean-va", name: "McLean, VA" },
  { id: "arlington-va", name: "Arlington, VA" },
  { id: "chevy-chase-md", name: "Chevy Chase, MD" },
  { id: "alexandria-va", name: "Alexandria, VA" },
  { id: "rockville-md", name: "Rockville, MD" },
  { id: "vienna-va", name: "Vienna, VA" },
  { id: "reston-va", name: "Reston, VA" },
  { id: "great-falls-va", name: "Great Falls, VA" },
  { id: "dupont-circle-dc", name: "Dupont Circle, DC" },
]

export default function Footer() {
  const { language } = useLanguage()

  // Kitchen Essentials products
  const kitchenProducts = [
    { en: "Cabinets", es: "Gabinetes", href: "cabinets" },
    { en: "Countertops", es: "Encimeras", href: "countertops" },
    { en: "Cabinet Lighting", es: "Iluminación para Gabinetes", href: "cabinet-lighting" },
    { en: "Flooring", es: "Pisos", href: "flooring" },
    { en: "Appliances", es: "Electrodomésticos", href: "appliances" },
    { en: "Sinks", es: "Fregaderos", href: "sinks" },
  ]

  // Bathroom & Hardware Solutions products
  const bathroomHardwareProducts = [
    { en: "Bath Tubs", es: "Bañeras", href: "bath-tubs" },
    { en: "Medicine Cabinets", es: "Botiquines", href: "medicine-cabinets" },
    { en: "Faucets", es: "Grifos", href: "faucets" },
    { en: "Door Hardware", es: "Herrajes para Puertas", href: "door-hardware" },
    { en: "Plumbing", es: "Plomería", href: "plumbing" },
    { en: "Hardware", es: "Herrajes", href: "hardware" },
  ]

  // Social media links
  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/people/Creative-Kitchens/100065329366243/",
      icon: Facebook,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/creativekitchensmd/",
      icon: Instagram,
    },
    {
      name: "Pinterest",
      href: "https://www.pinterest.com/creativekitchensmd/",
      icon: Pinterest,
    },
  ]

  return (
    <footer className="text-slate-800 dark:text-slate-200">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold">Creative Kitchens</h3>
            <p className="mt-4 text-slate-600 dark:text-white">
              {language === "en"
                ? "Premium kitchen and bathroom solutions for your home."
                : "Soluciones premium para cocinas y baños para su hogar."}
            </p>

            <dl className="mt-6 space-y-4 text-base/7 text-slate-600 dark:text-white">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <Building2 aria-hidden="true" className="h-6 w-6 text-slate-500 dark:text-white" />
                </dt>
                <dd>
                  3101 Hubbard Rd.
                  <br />
                  Hyattsville, MD. 20785
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <Phone aria-hidden="true" className="h-6 w-6 text-slate-500 dark:text-white" />
                </dt>
                <dd>
                  <a href="tel:(240)-714-3180" className="hover:text-slate-900 dark:hover:text-slate-300">
                    (240)-714-3180
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Fax</span>
                  <Printer aria-hidden="true" className="h-6 w-6 text-slate-500 dark:text-white" />
                </dt>
                <dd>
                  <span>(240)-714-3187</span>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <Mail aria-hidden="true" className="h-6 w-6 text-slate-500 dark:text-white" />
                </dt>
                <dd>
                  <a
                    href="mailto:info@creativekitchensmd.com"
                    className="hover:text-slate-900 dark:hover:text-slate-300"
                  >
                    info@creativekitchensmd.com
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Hours</span>
                  <Clock aria-hidden="true" className="h-6 w-6 text-slate-500 dark:text-white" />
                </dt>
                <dd>
                  8am - 5pm; Monday - Friday
                  <br />
                  Saturday by appointment only
                </dd>
              </div>
            </dl>
          </div>

          <div>
            <h3 className="text-lg font-semibold">{language === "en" ? "Company" : "Empresa"}</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href={`/${language}/about`}
                  className="text-slate-600 dark:text-white hover:text-slate-900 dark:hover:text-slate-300"
                >
                  {language === "en" ? "About Us" : "Sobre Nosotros"}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${language}/gallery`}
                  className="text-slate-600 dark:text-white hover:text-slate-900 dark:hover:text-slate-300"
                >
                  {language === "en" ? "Gallery" : "Galería"}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${language}/contact`}
                  className="text-slate-600 dark:text-white hover:text-slate-900 dark:hover:text-slate-300"
                >
                  {language === "en" ? "Contact" : "Contacto"}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-600 dark:text-white hover:text-slate-900 dark:hover:text-slate-300"
                >
                  {language === "en" ? "Privacy Policy" : "Política de Privacidad"}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-600 dark:text-white hover:text-slate-900 dark:hover:text-slate-300"
                >
                  {language === "en" ? "Terms of Service" : "Términos de Servicio"}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              {language === "en" ? "Kitchen Essentials" : "Esenciales de Cocina"}
            </h3>
            <ul className="mt-4 space-y-2">
              {kitchenProducts.map((product) => (
                <li key={product.href}>
                  <Link
                    href={`/${language}/products/${product.href}`}
                    className="text-slate-600 dark:text-white hover:text-slate-900 dark:hover:text-slate-300"
                  >
                    {language === "en" ? product.en : product.es}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              {language === "en" ? "Bathroom & Hardware Solutions" : "Soluciones para Baños y Herrajes"}
            </h3>
            <ul className="mt-4 space-y-2">
              {bathroomHardwareProducts.map((product) => (
                <li key={product.href}>
                  <Link
                    href={`/${language}/products/${product.href}`}
                    className="text-slate-600 dark:text-white hover:text-slate-900 dark:hover:text-slate-300"
                  >
                    {language === "en" ? product.en : product.es}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Areas We Serve Section */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
          <h3 className="text-lg font-semibold mb-6 text-center">
            {language === "en" ? "Areas We Serve" : "Áreas Que Servimos"}
          </h3>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 max-w-5xl mx-auto">
            {serviceAreas.map((area) => (
              <Link
                key={area.id}
                href={`/${language}/areas/${area.id}`}
                className="text-slate-600 dark:text-white hover:text-slate-900 dark:hover:text-slate-300"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright and Social Links */}
        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex justify-center gap-x-6 md:order-2">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 dark:text-white hover:text-slate-900 dark:hover:text-slate-300"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon aria-hidden="true" className="h-6 w-6" />
                </a>
              ))}
            </div>
            <p className="mt-8 text-center text-sm text-slate-500 dark:text-white md:order-1 md:mt-0">
              &copy; {new Date().getFullYear()} Creative Kitchens MD.{" "}
              {language === "en" ? "All rights reserved." : "Todos los derechos reservados."}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
