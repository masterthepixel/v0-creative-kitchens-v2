"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "./language-provider"
import { motion } from "framer-motion"
import Image from "next/image"

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

export default function ProductBentoGrid1() {
  const { language } = useLanguage()
  const [gridData, setGridData] = useState<GridSection | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch(`/api/dictionary?lang=${language}`)
        const data = await response.json()
        setGridData(data.gridSections[0])
      } catch (error) {
        console.error("Error fetching grid data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [language])

  if (loading || !gridData) {
    return <div className="text-center py-4">Loading...</div>
  }

  // Get the first 4 categories for the bento grid
  const categories = gridData.categories.slice(0, 4)

  return (
    <div className="py-8">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-left text-base/7 font-semibold text-primary"
        >
          {gridData.tagline}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-2 max-w-lg text-left text-4xl font-semibold tracking-tight text-balance text-slate-950 dark:text-slate-50 sm:text-5xl"
        >
          {gridData.heading}
        </motion.p>
        <div className="mt-6 grid gap-4 sm:mt-8 lg:grid-cols-3 lg:grid-rows-2">
          {/* First large card (left) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative lg:row-span-2"
          >
            <div className="absolute inset-px rounded-lg bg-white dark:bg-slate-800 lg:rounded-l-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mt-2 text-lg font-medium tracking-tight text-slate-950 dark:text-slate-50 max-lg:text-left"
                >
                  {categories[0].title}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mt-2 max-w-lg text-sm/6 text-slate-600 dark:text-slate-300 max-lg:text-left"
                >
                  {categories[0].description}
                </motion.p>
              </div>
              <div className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-slate-700 bg-slate-900 shadow-2xl">
                  <Image
                    src="/cabinet-lighting.png"
                    alt={categories[0].title}
                    width={500}
                    height={500}
                    className="size-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
          </motion.div>

          {/* Second card (top right) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative max-lg:row-start-1"
          >
            <div className="absolute inset-px rounded-lg bg-white dark:bg-slate-800 max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mt-2 text-lg font-medium tracking-tight text-slate-950 dark:text-slate-50 max-lg:text-left"
                >
                  {categories[1].title}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="mt-2 max-w-lg text-sm/6 text-slate-600 dark:text-slate-300 max-lg:text-left"
                >
                  {categories[1].description}
                </motion.p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                <Image
                  src="/elegant-countertops.png"
                  alt={categories[1].title}
                  width={500}
                  height={500}
                  className="w-full max-lg:max-w-xs"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
          </motion.div>

          {/* Third card (middle right) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2"
          >
            <div className="absolute inset-px rounded-lg bg-white dark:bg-slate-800"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="mt-2 text-lg font-medium tracking-tight text-slate-950 dark:text-slate-50 max-lg:text-left"
                >
                  {categories[2].title}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="mt-2 max-w-lg text-sm/6 text-slate-600 dark:text-slate-300 max-lg:text-left"
                >
                  {categories[2].description}
                </motion.p>
              </div>
              <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                <Image
                  src="/luxury-bathtub.png"
                  alt={categories[2].title}
                  width={500}
                  height={500}
                  className="h-[min(152px,40cqw)] object-cover"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5"></div>
          </motion.div>

          {/* Fourth large card (right) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="relative lg:row-span-2"
          >
            <div className="absolute inset-px rounded-lg bg-white dark:bg-slate-800 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="mt-2 text-lg font-medium tracking-tight text-slate-950 dark:text-slate-50 max-lg:text-left"
                >
                  {categories[3].title}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="mt-2 max-w-lg text-sm/6 text-slate-600 dark:text-slate-300 max-lg:text-left"
                >
                  {categories[3].description}
                </motion.p>
              </div>
              <div className="relative min-h-[30rem] w-full grow">
                <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-slate-900 shadow-2xl">
                  <div className="flex bg-slate-800/40 ring-1 ring-white/5">
                    <div className="-mb-px flex text-sm/6 font-medium text-slate-400">
                      <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                        {categories[3].title}.jsx
                      </div>
                      <div className="border-r border-slate-600/10 px-4 py-2">App.jsx</div>
                    </div>
                  </div>
                  <div className="px-6 pt-6 pb-14 text-sm text-slate-300">
                    <pre>
                      <code>
                        {`// ${categories[3].title} Component
export default function ${categories[3].title.replace(/\s+/g, "")}() {
return (
 <div className="p-4 rounded-lg shadow-md">
   <h2 className="text-xl font-bold">${categories[3].title}</h2>
   <p>${categories[3].description.substring(0, 50)}...</p>
   <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
     Learn More
   </button>
 </div>
)
}`}
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
