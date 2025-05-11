"use client"

import { useLanguage } from "@/components/language-provider"
import { useState, useEffect } from "react"
import Link from "next/link"

type ProductCategory = {
  name: string
  nameES: string
  slug: string
}

export default function ProductsPage() {
  const { language } = useLanguage()
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const productCategories: ProductCategory[] = [
    { name: "Cabinets", nameES: "Gabinetes", slug: "cabinets" },
    { name: "Countertops", nameES: "Encimeras", slug: "countertops" },
    { name: "Cabinet Lighting", nameES: "Iluminación para Gabinetes", slug: "cabinet-lighting" },
    { name: "Bath Tubs", nameES: "Bañeras", slug: "bath-tubs" },
    { name: "Flooring", nameES: "Pisos", slug: "flooring" },
    { name: "Appliances", nameES: "Electrodomésticos", slug: "appliances" },
    { name: "Hardware", nameES: "Herrajes", slug: "hardware" },
    { name: "Medicine Cabinets", nameES: "Botiquines", slug: "medicine-cabinets" },
    { name: "Faucets", nameES: "Grifos", slug: "faucets" },
    { name: "Door Hardware", nameES: "Herrajes para Puertas", slug: "door-hardware" },
    { name: "Plumbing", nameES: "Plomería", slug: "plumbing" },
    { name: "Sinks", nameES: "Fregaderos", slug: "sinks" },
  ]

  useEffect(() => {
    if (language === "en") {
      setTitle("Our Products")
      setDescription("Explore our wide range of high-quality products for your kitchen and bathroom.")
    } else {
      setTitle("Nuestros Productos")
      setDescription("Explore nuestra amplia gama de productos de alta calidad para su cocina y baño.")
    }
  }, [language])

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">{title}</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">{description}</p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-y-4 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {productCategories.map((category) => (
            <Link
              key={category.slug}
              href={`/${language}/products/${category.slug}`}
              className="group block rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {language === "en" ? category.name : category.nameES}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
