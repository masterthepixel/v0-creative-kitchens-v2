"use client"

import { useLanguage } from "./language-provider"
import Link from "next/link"
import { Facebook, Instagram, PinIcon as Pinterest, Building2, Phone, Mail, Clock, Printer } from "lucide-react"

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
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold">Creative Kitchens</h3>
            <p className="mt-4 text-gray-300">
              {language === "en"
                ? "Premium kitchen and bathroom solutions for your home."
                : "Soluciones premium para cocinas y baños para su hogar."}
            </p>

            <dl className="mt-6 space-y-4 text-base/7 text-gray-300">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <Building2 aria-hidden="true" className="h-6 w-6 text-gray-400" />
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
                  <Phone aria-hidden="true" className="h-6 w-6 text-gray-400" />
                </dt>
                <dd>
                  <a href="tel:(240)-714-3180" className="hover:text-white">
                    (240)-714-3180
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Fax</span>
                  <Printer aria-hidden="true" className="h-6 w-6 text-gray-400" />
                </dt>
                <dd>
                  <span className="text-gray-300">(240)-714-3187</span>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <Mail aria-hidden="true" className="h-6 w-6 text-gray-400" />
                </dt>
                <dd>
                  <a href="mailto:info@creativekitchensmd.com" className="hover:text-white">
                    info@creativekitchensmd.com
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Hours</span>
                  <Clock aria-hidden="true" className="h-6 w-6 text-gray-400" />
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
                <Link href={`/${language}/about`} className="text-gray-300 hover:text-white">
                  {language === "en" ? "About Us" : "Sobre Nosotros"}
                </Link>
              </li>
              <li>
                <Link href={`/${language}/contact`} className="text-gray-300 hover:text-white">
                  {language === "en" ? "Contact" : "Contacto"}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  {language === "en" ? "Privacy Policy" : "Política de Privacidad"}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
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
                  <Link href={`/${language}/products/${product.href}`} className="text-gray-300 hover:text-white">
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
                  <Link href={`/${language}/products/${product.href}`} className="text-gray-300 hover:text-white">
                    {language === "en" ? product.en : product.es}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex justify-center gap-x-6 md:order-2">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon aria-hidden="true" className="h-6 w-6" />
                </a>
              ))}
            </div>
            <p className="mt-8 text-center text-sm text-gray-400 md:order-1 md:mt-0">
              &copy; {new Date().getFullYear()} Creative Kitchens MD.{" "}
              {language === "en" ? "All rights reserved." : "Todos los derechos reservados."}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
