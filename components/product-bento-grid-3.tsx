"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "./language-provider"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

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

  return (
    <div className="space-y-4">
      <div className="text-center mb-8">
        <p className="text-sm font-medium uppercase tracking-wider text-primary">{gridData.tagline}</p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{gridData.heading}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {gridData.categories.slice(0, -1).map((category, index) => (
          <Link href={category.link} key={index} className="group">
            <Card className="overflow-hidden h-full transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{category.title}</h3>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Special CTA card */}
      {gridData.categories.length > 0 && (
        <div className="mt-8">
          <Link href={gridData.categories[gridData.categories.length - 1].link} className="group">
            <Card className="overflow-hidden transition-all hover:shadow-lg bg-primary text-primary-foreground">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">{gridData.categories[gridData.categories.length - 1].title}</h3>
                <p className="text-primary-foreground/80">
                  {gridData.categories[gridData.categories.length - 1].description}
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      )}
    </div>
  )
}
