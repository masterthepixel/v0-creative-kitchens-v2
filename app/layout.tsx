import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import GoogleAnalytics from "@/components/google-analytics"
import AnalyticsRouteTracker from "@/components/analytics-route-tracker"
import { Suspense } from "react"

// Load Inter font with all available weights
const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Creative Kitchens",
  description: "Premium kitchen design and installation",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Get the Google Analytics Measurement ID from environment variables
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ""

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Suspense>
            {children}
            <GoogleAnalytics GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />
            <AnalyticsRouteTracker GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
