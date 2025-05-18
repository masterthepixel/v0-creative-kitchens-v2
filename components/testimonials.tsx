"use client"

import { useLanguage } from "./language-provider"
import { useState, useEffect } from "react"
import { InfiniteMovingCards } from "./ui/infinite-moving-cards"

// Import the reviews data
import { reviewsData } from "@/data/reviews-data"

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
    const items = reviewsData.reviews.map((review, index) => {
      // Gender detection based on first name (simple heuristic)
      const maleNames = [
        "Michael", "Brian", "Robert", "Patrick", "Jonathan", "David", "Doug", "Sai", "Rahmat", "Ehab", "Louie", "Ruben", "Muhumed", "Muad"
      ]
      const femaleNames = [
        "Sarah", "Amanda", "Lisa", "Michelle", "Melina", "Amal", "Cynthia", "Jennifer"
      ]
      const faceImages = [
        "https://randomuser.me/api/portraits/men/41.jpg", // Daniel
        "https://randomuser.me/api/portraits/men/32.jpg", // Jonathan
        "https://randomuser.me/api/portraits/women/17.jpg", // Kira
        "https://randomuser.me/api/portraits/women/44.jpg", // Jeanette
        "https://randomuser.me/api/portraits/men/19.jpg", // Patrick
      ]
      let imageUrl = ""
      const firstName = review.name.split(" ")[0].replace(/[^a-zA-Z]/g, "")
      if (maleNames.some((n) => firstName.toLowerCase() === n.toLowerCase())) {
        // Pick a male image (cycle for variety)
        imageUrl = faceImages[[0,1,4][index%3]]
      } else if (femaleNames.some((n) => firstName.toLowerCase() === n.toLowerCase())) {
        // Pick a female image (cycle for variety)
        imageUrl = faceImages[[2,3][index%2]]
      } else {
        // Default fallback
        imageUrl = faceImages[index % faceImages.length]
      }
      return {
        quote: language === "en" ? review.text : review.text_es || review.text,
        name: review.name,
        title: review.location || (language === "en" ? "Verified Customer" : "Cliente Verificado"),
        imageUrl,
      }
    })

    setTestimonialItems(items)
    setIsLoaded(true)
  }, [language])

  // Show a loading state until data is processed
  if (!isLoaded) {
    return (
      <div className="relative isolate py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="h-7 w-32 bg-slate-200 dark:bg-slate-700 animate-pulse rounded"></div>
            <div className="mt-2 h-12 w-full max-w-md bg-slate-200 dark:bg-slate-700 animate-pulse rounded"></div>
          </div>
          <div className="mt-10 h-64 bg-slate-100 dark:bg-slate-800 animate-pulse rounded"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative isolate py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-base/7 font-semibold text-primary">{title}</h2>
          <p className="text-3xl font-semibold tracking-tight text-balance text-slate-900 dark:text-white sm:text-5xl mt-1">
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
