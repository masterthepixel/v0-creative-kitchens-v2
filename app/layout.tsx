import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/google-analytics"
import ScrollRestoration from "@/components/scroll-restoration"
import type { Metadata } from "next"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Creative Kitchens",
  description: "Premium kitchen and bathroom solutions",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Analytics />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ScrollRestoration />
          <Suspense>{children}</Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
