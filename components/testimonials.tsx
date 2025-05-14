"use client"

import { useLanguage } from "./language-provider"
import { useState, useEffect } from "react"
import { InfiniteMovingCards } from "./ui/infinite-moving-cards"

// Import the reviews data
import { reviewsData } from "@/data/reviews-data"

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

export default function Testimonials() {
  const { language } = useLanguage()
  const [title, setTitle] = useState("")
  const [subtitle, setSubtitle] = useState("")

  useEffect(() => {
    if (language === "en") {
      setTitle("Testimonials")
      setSubtitle(`What our customers say about ${reviewsData.businessInfo.business_name}`)
    } else {
      setTitle("Testimonios")
      setSubtitle(`Lo que dicen nuestros clientes sobre ${reviewsData.businessInfo.business_name_es}`)
    }
  }, [language])

  // Transform the reviews data into the format expected by InfiniteMovingCards
  const testimonialItems = reviewsData.reviews
    .map((review, index) => {
      // Filter out Ruben L. explicitly
      if (review.name === "Ruben L.") return null

      return {
        quote: language === "en" ? review.text : review.text_es || review.text,
        name: review.name,
        title: review.location || (language === "en" ? "Customer" : "Cliente"),
        rating: 5, // Assuming all reviews are 5-star
        imageUrl: faceImages[index % faceImages.length], // Add back the portrait images
      }
    })
    .filter(Boolean) // Remove null items (Ruben's review)

  return (
    <div className="relative isolate py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-base/7 font-semibold text-primary">{title}</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-balance text-gray-900 dark:text-white sm:text-5xl">
            {subtitle}
          </p>
        </div>

        <div className="mt-6">
          <InfiniteMovingCards
            items={testimonialItems}
            direction="right"
            speed="slow"
            pauseOnHover={true}
            className="py-4"
          />
        </div>
      </div>
    </div>
  )
}
