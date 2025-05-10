"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect } from "react"
import { pageview } from "@/lib/analytics"

export default function AnalyticsRouteTracker({ GA_MEASUREMENT_ID }: { GA_MEASUREMENT_ID: string }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return

    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "")
    pageview(url, GA_MEASUREMENT_ID)
  }, [pathname, searchParams, GA_MEASUREMENT_ID])

  return null
}
