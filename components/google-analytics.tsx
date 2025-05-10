"use client"

import Script from "next/script"
import { useEffect } from "react"

export default function GoogleAnalytics({ GA_MEASUREMENT_ID }: { GA_MEASUREMENT_ID: string }) {
  useEffect(() => {
    // Initialize GA4 only in production
    if (process.env.NODE_ENV === "production") {
      window.dataLayer = window.dataLayer || []
      function gtag(...args: any[]) {
        window.dataLayer.push(args)
      }
      gtag("js", new Date())

      // Check for consent
      const hasConsent = localStorage.getItem("cookieConsent") === "true"

      // Configure with consent mode
      gtag("consent", "default", {
        analytics_storage: hasConsent ? "granted" : "denied",
      })

      gtag("config", GA_MEASUREMENT_ID)
    }
  }, [GA_MEASUREMENT_ID])

  if (process.env.NODE_ENV !== "production") {
    return null
  }

  return (
    <>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            // Default consent mode
            gtag('consent', 'default', {
              'analytics_storage': 'denied'
            });
            
            // Check for existing consent
            const hasConsent = localStorage.getItem('cookieConsent') === 'true';
            if (hasConsent) {
              gtag('consent', 'update', {
                'analytics_storage': 'granted'
              });
            }
            
            gtag('config', '${GA_MEASUREMENT_ID}');
          `,
        }}
      />
    </>
  )
}
