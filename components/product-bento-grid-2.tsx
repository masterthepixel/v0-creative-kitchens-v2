"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "./language-provider"

type Category = {
  title: string
  description: string
  link: string
}

type GridSection = {
  tagline: string
  heading: string
  categories: Category[]
}

export default function ProductBentoGrid2() {
  const { language } = useLanguage()
  const [gridData, setGridData] = useState<GridSection | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch(`/api/dictionary?lang=${language}`)
        const data = await response.json()
        setGridData(data.gridSections[1])
      } catch (error) {
        console.error("Error fetching grid data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [language])

  if (loading || !gridData) {
    return <div className="text-center py-10">Loading...</div>
  }

  // Get the first 4 categories for the bento grid
  const categories = gridData.categories.slice(0, 4)

  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-base/7 font-semibold text-primary-foreground">{gridData.tagline}</h2>
        <p className="mt-2 max-w-lg text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
          {gridData.heading}
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          {/* First card - 4 columns */}
          <div className="flex p-px lg:col-span-4">
            <div className="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]">
              <img
                alt={categories[0].title}
                src="https://tailwindcss.com/plus-assets/img/component-images/bento-02-releases.png"
                className="h-80 object-cover object-left"
              />
              <div className="p-10">
                <h3 className="text-sm/4 font-semibold text-gray-400">{categories[0].title}</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-white">{categories[0].title}</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400">{categories[0].description}</p>
              </div>
            </div>
          </div>

          {/* Second card - 2 columns */}
          <div className="flex p-px lg:col-span-2">
            <div className="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 lg:rounded-tr-[2rem]">
              <img
                alt={categories[1].title}
                src="https://tailwindcss.com/plus-assets/img/component-images/bento-02-integrations.png"
                className="h-80 object-cover"
              />
              <div className="p-10">
                <h3 className="text-sm/4 font-semibold text-gray-400">{categories[1].title}</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-white">{categories[1].title}</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400">{categories[1].description}</p>
              </div>
            </div>
          </div>

          {/* Third card - 2 columns */}
          <div className="flex p-px lg:col-span-2">
            <div className="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 lg:rounded-bl-[2rem]">
              <img
                alt={categories[2].title}
                src="https://tailwindcss.com/plus-assets/img/component-images/bento-02-security.png"
                className="h-80 object-cover"
              />
              <div className="p-10">
                <h3 className="text-sm/4 font-semibold text-gray-400">{categories[2].title}</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-white">{categories[2].title}</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400">{categories[2].description}</p>
              </div>
            </div>
          </div>

          {/* Fourth card - 4 columns */}
          <div className="flex p-px lg:col-span-4">
            <div className="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]">
              <img
                alt={categories[3].title}
                src="https://tailwindcss.com/plus-assets/img/component-images/bento-02-performance.png"
                className="h-80 object-cover object-left"
              />
              <div className="p-10">
                <h3 className="text-sm/4 font-semibold text-gray-400">{categories[3].title}</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-white">{categories[3].title}</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400">{categories[3].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
