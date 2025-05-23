"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "./language-provider"
import { motion } from "framer-motion"

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
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-base/7 font-semibold text-primary"
        >
          {gridData.tagline}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-2 max-w-lg text-4xl font-semibold tracking-tight text-pretty text-slate-900 dark:text-white sm:text-5xl"
        >
          {gridData.heading}
        </motion.p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          {/* First card - 4 columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex p-px lg:col-span-4"
          >
            <div className="overflow-hidden rounded-lg bg-white dark:bg-transparent ring-1 ring-slate-200 dark:ring-slate-700 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]">
              <img
                alt={categories[0].title}
                src="/flooring.jpg"
                className="h-80 object-cover object-left"
              />
              <div className="p-10">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-sm/4 font-semibold text-slate-500 dark:text-slate-400"
                >
                  {categories[0].title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mt-2 text-lg font-medium tracking-tight text-slate-900 dark:text-white"
                >
                  {categories[0].title}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="mt-2 max-w-lg text-sm/6 text-slate-600 dark:text-slate-300"
                >
                  {categories[0].description}
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* Second card - 2 columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex p-px lg:col-span-2"
          >
            <div className="overflow-hidden rounded-lg bg-white dark:bg-transparent ring-1 ring-slate-200 dark:ring-slate-700 lg:rounded-tr-[2rem]">
              <img
                alt={categories[1].title}
                src="/appliances.jpg"
                className="h-80 object-cover"
              />
              <div className="p-10">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-sm/4 font-semibold text-slate-500 dark:text-slate-400"
                >
                  {categories[1].title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="mt-2 text-lg font-medium tracking-tight text-slate-900 dark:text-white"
                >
                  {categories[1].title}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="mt-2 max-w-lg text-sm/6 text-slate-600 dark:text-slate-300"
                >
                  {categories[1].description}
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* Third card - 2 columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex p-px lg:col-span-2"
          >
            <div className="overflow-hidden rounded-lg bg-white dark:bg-transparent ring-1 ring-slate-200 dark:ring-slate-700 lg:rounded-bl-[2rem]">
              <img
                alt={categories[2].title}
                src="/hardware.jpg"
                className="h-80 object-cover"
              />
              <div className="p-10">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="text-sm/4 font-semibold text-slate-500 dark:text-slate-400"
                >
                  {categories[2].title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="mt-2 text-lg font-medium tracking-tight text-slate-900 dark:text-white"
                >
                  {categories[2].title}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="mt-2 max-w-lg text-sm/6 text-slate-600 dark:text-slate-300"
                >
                  {categories[2].description}
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* Fourth card - 4 columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex p-px lg:col-span-4"
          >
            <div className="overflow-hidden rounded-lg bg-white dark:bg-transparent ring-1 ring-slate-200 dark:ring-slate-700 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]">
              <img
                alt={categories[3].title}
                src="/medicinecabinets.jpg"
                className="h-80 object-cover object-left"
              />
              <div className="p-10">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="text-sm/4 font-semibold text-slate-500 dark:text-slate-400"
                >
                  {categories[3].title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="mt-2 text-lg font-medium tracking-tight text-slate-900 dark:text-white"
                >
                  {categories[3].title}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="mt-2 max-w-lg text-sm/6 text-slate-600 dark:text-slate-300"
                >
                  {categories[3].description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
