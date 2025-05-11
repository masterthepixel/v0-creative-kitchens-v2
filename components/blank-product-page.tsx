"use client"

import { useLanguage } from "./language-provider"
import { useState, useEffect } from "react"

interface BlankProductPageProps {
  productNameEN: string
  productNameES: string
}

export default function BlankProductPage({ productNameEN, productNameES }: BlankProductPageProps) {
  const { language } = useLanguage()
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  useEffect(() => {
    if (language === "en") {
      setTitle(productNameEN)
      setDescription(
        `Explore our selection of high-quality ${productNameEN.toLowerCase()} designed for both style and functionality.`,
      )
    } else {
      setTitle(productNameES)
      setDescription(
        `Explore nuestra selección de ${productNameES.toLowerCase()} de alta calidad diseñados para estilo y funcionalidad.`,
      )
    }
  }, [language, productNameEN, productNameES])

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">{title}</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">{description}</p>
        </div>
        <div className="mt-16 flex justify-center">
          <div className="relative h-64 w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
            <p className="text-gray-500 dark:text-gray-400">
              {language === "en" ? "Content coming soon" : "Contenido próximamente"}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
