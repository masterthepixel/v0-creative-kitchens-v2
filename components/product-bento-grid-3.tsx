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

export default function ProductBentoGrid3() {
  const { language } = useLanguage()
  const [gridData, setGridData] = useState<GridSection | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch(`/api/dictionary?lang=${language}`)
        const data = await response.json()
        setGridData(data.gridSections[2])
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

  // Get the first 5 categories for the bento grid
  const categories = gridData.categories.slice(0, 5)

  return (
    <div className="bg-white py-24 sm:py-32 dark:bg-gray-800">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-base/7 font-semibold text-primary">{gridData.tagline}</h2>
        <p className="mt-2 max-w-lg text-4xl font-semibold tracking-tight text-pretty text-gray-950 dark:text-gray-50 sm:text-5xl">
          {gridData.heading}
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          {/* First card - 3 columns */}
          <div className="relative lg:col-span-3">
            <div className="absolute inset-px rounded-lg bg-white dark:bg-gray-700 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
              <img
                alt={categories[0].title}
                src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-performance.png"
                className="h-80 object-cover object-left"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-primary">{categories[0].title}</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 dark:text-gray-50">
                  {categories[0].title}
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 dark:text-gray-300">{categories[0].description}</p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 dark:ring-white/10 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
          </div>

          {/* Second card - 3 columns */}
          <div className="relative lg:col-span-3">
            <div className="absolute inset-px rounded-lg bg-white dark:bg-gray-700 lg:rounded-tr-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
              <img
                alt={categories[1].title}
                src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-releases.png"
                className="h-80 object-cover object-left lg:object-right"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-primary">{categories[1].title}</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 dark:text-gray-50">
                  {categories[1].title}
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 dark:text-gray-300">{categories[1].description}</p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 dark:ring-white/10 lg:rounded-tr-[2rem]" />
          </div>

          {/* Third card - 2 columns */}
          <div className="relative lg:col-span-2">
            <div className="absolute inset-px rounded-lg bg-white dark:bg-gray-700 lg:rounded-bl-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
              <img
                alt={categories[2].title}
                src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-speed.png"
                className="h-80 object-cover object-left"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-primary">{categories[2].title}</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 dark:text-gray-50">
                  {categories[2].title}
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 dark:text-gray-300">{categories[2].description}</p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 dark:ring-white/10 lg:rounded-bl-[2rem]" />
          </div>

          {/* Fourth card - 2 columns */}
          <div className="relative lg:col-span-2">
            <div className="absolute inset-px rounded-lg bg-white dark:bg-gray-700" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <img
                alt={categories[3].title}
                src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-integrations.png"
                className="h-80 object-cover"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-primary">{categories[3].title}</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 dark:text-gray-50">
                  {categories[3].title}
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 dark:text-gray-300">{categories[3].description}</p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 dark:ring-white/10" />
          </div>

          {/* Fifth card - 2 columns */}
          <div className="relative lg:col-span-2">
            <div className="absolute inset-px rounded-lg bg-white dark:bg-gray-700 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
              <img
                alt={categories[4].title}
                src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-network.png"
                className="h-80 object-cover"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-primary">{categories[4].title}</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 dark:text-gray-50">
                  {categories[4].title}
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 dark:text-gray-300">{categories[4].description}</p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 dark:ring-white/10 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
          </div>
        </div>
      </div>
    </div>
  )
}
