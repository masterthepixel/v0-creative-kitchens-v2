import BlankProductPage from "@/components/blank-product-page"
import CabinetsLogoCloud from "@/components/cabinets-logo-slider"
import ExternalCabinetryLogoCloud from "@/components/external-cabinetry-logo-cloud"
import Testimonials from "@/components/testimonials"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cabinets | Creative Kitchens",
  description: "Explore our selection of high-quality cabinets designed for both style and functionality.",
  openGraph: {
    title: "Cabinets | Creative Kitchens",
    description: "Explore our selection of high-quality cabinets designed for both style and functionality.",
    url: "https://creativekitchens.com/products/cabinets",
    siteName: "Creative Kitchens",
    images: [
      {
        url: "/cabinets-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Cabinetry Showcase",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cabinets | Creative Kitchens",
    description: "Explore our selection of high-quality cabinets designed for both style and functionality.",
    images: ["/cabinets-hero.jpg"],
  },
  alternates: {
    canonical: "https://creativekitchens.com/products/cabinets",
  },
  keywords: [
    "cabinets",
    "kitchen cabinets",
    "outdoor cabinetry",
    "Creative Kitchens",
    "bathroom cabinets"
  ],
}

export default function CabinetsPage() {
  return (
    <>
      <section>
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-slate-900 dark:text-white">
              Cabinets for Every Space
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Discover premium indoor and outdoor cabinetry brands for kitchens, baths, and exterior living. Style, durability, and function—trusted by homeowners and professionals.
            </p>
            <a href="#indoor-cabinetry" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-slate-900 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 dark:focus:ring-slate-900">
              Explore Indoor Cabinets
              <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
            <a href="#outdoor-cabinetry" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-slate-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
              Explore Outdoor Cabinets
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Image
              src="/cabinets-hero.jpg"
              alt="Cabinetry Showcase"
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
