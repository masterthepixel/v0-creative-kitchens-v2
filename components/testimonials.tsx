"use client"

import { useLanguage } from "./language-provider"
import { useState, useEffect } from "react"
import StarRating from "./star-rating"

// Helper function to combine class names
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

type Review = {
  name: string
  location: string | null
  friends: number | null
  reviews: number
  photos: number
  date: string
  text: string
  text_es: string
  photos_count: number
  photo_captions: string[]
  owner_response: string | null
  owner_response_es: string | null
}

type TestimonialsProps = {
  reviews: Review[]
  businessInfo: {
    owner_name: string
    business_name: string
    business_name_es: string
  }
}

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

export default function Testimonials({ reviews, businessInfo }: TestimonialsProps) {
  const { language } = useLanguage()
  const [title, setTitle] = useState("")
  const [subtitle, setSubtitle] = useState("")

  useEffect(() => {
    if (language === "en") {
      setTitle("Testimonials")
      setSubtitle(`What our customers say about ${businessInfo.business_name}`)
    } else {
      setTitle("Testimonios")
      setSubtitle(`Lo que dicen nuestros clientes sobre ${businessInfo.business_name_es}`)
    }
  }, [language, businessInfo])

  // Assign a random face image to each review
  const reviewsWithImages = reviews.map((review, index) => ({
    ...review,
    imageUrl: faceImages[index % faceImages.length],
  }))

  // Select featured testimonial (using the first review with a longer text)
  const featuredTestimonial =
    reviewsWithImages.find((review) => (language === "en" ? review.text.length : review.text_es.length) > 100) ||
    reviewsWithImages[0]

  // Organize remaining testimonials into the grid structure
  const remainingReviews = reviewsWithImages.filter((review) => review !== featuredTestimonial).slice(0, 8)

  // Create the grid structure similar to the example
  const testimonials = [
    [
      [remainingReviews[0], remainingReviews[1]].filter(Boolean),
      [remainingReviews[2], remainingReviews[3]].filter(Boolean),
    ],
    [
      [remainingReviews[4], remainingReviews[5]].filter(Boolean),
      [remainingReviews[6], remainingReviews[7]].filter(Boolean),
    ],
  ]

  return (
    <div className="relative isolate pt-24 pb-32 sm:pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base/7 font-semibold text-primary">{title}</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-balance text-gray-900 dark:text-white sm:text-5xl">
            {subtitle}
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm/6 text-gray-900 dark:text-gray-100 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          <figure className="rounded-2xl bg-white dark:bg-gray-800 shadow-lg ring-1 ring-gray-900/5 dark:ring-gray-100/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
            <blockquote className="p-6 text-lg font-semibold tracking-tight text-gray-900 dark:text-white sm:p-12 sm:text-xl/8">
              <p>{`"${language === "en" ? featuredTestimonial.text : featuredTestimonial.text_es}"`}</p>
            </blockquote>
            <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 dark:border-gray-100/10 px-6 py-4 sm:flex-nowrap">
              <img
                src={featuredTestimonial.imageUrl || "/placeholder.svg"}
                alt={featuredTestimonial.name}
                className="size-12 flex-none rounded-full object-cover"
              />
              <div className="flex-auto">
                <div className="font-semibold">{featuredTestimonial.name}</div>
                <div className="mt-1">
                  <StarRating size="md" />
                </div>
              </div>
            </figcaption>
          </figure>
          {testimonials.map((columnGroup, columnGroupIdx) => (
            <div key={columnGroupIdx} className="space-y-8 xl:contents xl:space-y-0">
              {columnGroup.map((column, columnIdx) => (
                <div
                  key={columnIdx}
                  className={classNames(
                    (columnGroupIdx === 0 && columnIdx === 0) ||
                      (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1)
                      ? "xl:row-span-2"
                      : "xl:row-start-1",
                    "space-y-8",
                  )}
                >
                  {column.map((testimonial) => (
                    <figure
                      key={testimonial.name}
                      className="rounded-2xl bg-white dark:bg-gray-800 p-6 shadow-lg ring-1 ring-gray-900/5 dark:ring-gray-100/5"
                    >
                      <blockquote className="text-gray-900 dark:text-white">
                        <p>{`"${language === "en" ? testimonial.text : testimonial.text_es}"`}</p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        <img
                          src={testimonial.imageUrl || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="size-10 rounded-full object-cover"
                        />
                        <div>
                          <div className="font-semibold">{testimonial.name}</div>
                          <div className="mt-1">
                            <StarRating />
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
