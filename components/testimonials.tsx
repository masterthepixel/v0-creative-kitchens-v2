"use client"

import { useLanguage } from "./language-provider"
import { useState, useEffect } from "react"
import { InfiniteMovingCards } from "./ui/infinite-moving-cards"

// Import the reviews data
import { reviewsData } from "@/lib/testimonials-data"

// Array of random face images
const faceImages = [
  "https://randomuser.me/api/portraits/women/1.jpg",
  "https://randomuser.me/api/portraits/men/1.jpg",
  "https://randomuser.me/api/portraits/women/2.jpg",
  "https://randomuser.me/api/portraits/men/2.jpg",
  "https://randomuser.me/api/portraits/women/3.jpg",
  "https://randomuser.me/api/portraits/men/3.jpg",
  "https://randomuser.me/api/portraits/women/4.jpg",
  "https://randomuser.me/api/portraits/men/4.jpg",
  "https://randomuser.me/api/portraits/women/5.jpg",
  "https://randomuser.me/api/portraits/men/5.jpg",
  "https://randomuser.me/api/portraits/women/6.jpg",
  "https://randomuser.me/api/portraits/men/6.jpg",
]

// Define the testimonial item type to match what InfiniteMovingCards expects
type TestimonialItem = {
  quote: string
  name: string
  title: string
  imageUrl?: string
}

export default function Testimonials() {
  const { language } = useLanguage()
  const [title, setTitle] = useState("")
  const [subtitle, setSubtitle] = useState("")
  const [testimonialItems, setTestimonialItems] = useState<TestimonialItem[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  // Process data once on mount and when language changes
  useEffect(() => {
    // Set titles based on language
    if (language === "en") {
      setTitle("Testimonials")
      setSubtitle(`What our customers say about ${reviewsData.businessInfo.business_name}`)
    } else {
      setTitle("Testimonios")
      setSubtitle(`Lo que dicen nuestros clientes sobre ${reviewsData.businessInfo.business_name_es}`)
    }

    // Process testimonial items
    const items = reviewsData.reviews
      .filter((review) => review.name !== "Ruben L.") // Filter out Ruben L.
      .map((review, index) => ({
        quote: language === "en" ? review.text : review.text_es || review.text,
        name: review.name,
        title: review.location || (language === "en" ? "Customer" : "Cliente"),
        imageUrl: faceImages[index % faceImages.length], // Add portrait images
      }))

    setTestimonialItems(items)
    setIsLoaded(true)
  }, [language])

  // Show a loading state until data is processed
  if (!isLoaded) {
    return (
      <div className="relative isolate py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="h-7 w-32 bg-gray-200 dark:bg-gray-700 animate-pulse rounded"></div>
            <div className="mt-2 h-12 w-full max-w-md bg-gray-200 dark:bg-gray-700 animate-pulse rounded"></div>
          </div>
          <div className="mt-10 h-64 bg-gray-100 dark:bg-gray-800 animate-pulse rounded"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative isolate py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-base/7 font-semibold text-primary">{title}</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-balance text-gray-900 dark:text-white sm:text-5xl">
            {subtitle}
          </p>
        </div>

        <div className="mt-10">
          {testimonialItems.length > 0 && (
            <InfiniteMovingCards
              items={testimonialItems}
              direction="right"
              speed="slow"
              pauseOnHover={true}
              className="py-4"
            />
          )}
        </div>
      </div>
    </div>
  )
}
