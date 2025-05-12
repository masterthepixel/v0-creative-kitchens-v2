"use client"

import Script from "next/script"
import { useEffect } from "react"

export function Analytics() {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

  useEffect(() => {
    if (measurementId) {
      // Initialize Google Analytics
      window.dataLayer = window.dataLayer || []
      function gtag(...args: any[]) {
        window.dataLayer.push(args)
      }
      gtag("js", new Date())
      gtag("config", measurementId)
    }
  }, [measurementId])

  if (!measurementId) {
    return null
  }

  return (
    <>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} />
    </>
  )
}

export default Analytics
