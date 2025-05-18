"use client"

import { useEffect, useState } from "react"
import { reviewsData } from "@/data/reviews-data"
import "../app/testimonial-grid.css"

type TestimonialItem = {
  name: string
  title: string
  heading: string
  text: string
  imageUrl: string
  cardType: "purple" | "dark-slate" | "white" | "dark-blue"
}

export default function TestimonialGrid({ language }: { language: string }) {
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>([])

  useEffect(() => {
    // Get the top 5 reviews and format them
    const topReviews = reviewsData.reviews.slice(0, 5).map((review, index) => {
      // Determine card type based on index
      let cardType: "purple" | "dark-slate" | "white" | "dark-blue"
      switch (index) {
        case 0:
          cardType = "purple"
          break
        case 1:
          cardType = "dark-slate"
          break
        case 2:
          cardType = "white"
          break
        case 3:
          cardType = "white"
          break
        case 4:
          cardType = "dark-blue"
          break
        default:
          cardType = "white"
      }

      // Get text based on language
      const text = language === "en" ? review.text : review.text_es || review.text

      // Create heading from first sentence of review
      const firstSentence = text.split(".")[0] + "."

      // Get remaining text
      const remainingText = text.substring(firstSentence.length).trim()

      return {
        name: review.name,
        title: review.location || (language === "en" ? "Verified Customer" : "Cliente Verificado"),
        heading: firstSentence,
        text: remainingText.length > 0 ? remainingText : text,
        imageUrl: `/placeholder.svg?height=50&width=50&text=${review.name.charAt(0)}`,
        cardType,
      }
    })

    setTestimonials(topReviews)
  }, [language])

  return (
    <div className="py-12 md:py-16 bg-[#ECF2F8] dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`card ${
                testimonial.cardType === "purple"
                  ? "bg-[#733FC8] text-white"
                  : testimonial.cardType === "dark-slate"
                    ? "bg-slate-700 text-white"
                    : testimonial.cardType === "dark-blue"
                      ? "bg-slate-800 text-white"
                      : "bg-white text-slate-700"
              }`}
              id={`card-${index + 1}`}
            >
              {index === 0 && (
                <div className="quotation">
                  <svg width="104" height="102" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M104 102V59.727H84.114c0-5.871.689-11.182 2.068-15.933 1.379-4.75 3.42-9.287 6.125-13.61C95.01 25.86 98.909 22.257 104 19.375V0c-9.758 4.27-17.712 9.874-23.864 16.813-6.151 6.939-10.712 14.545-13.681 22.818C63.485 47.904 62 59.941 62 75.74V102h42zm-62 0V59.727H22.114c0-5.871.689-11.182 2.068-15.933 1.379-4.75 3.42-9.287 6.125-13.61C33.01 25.86 36.909 22.257 42 19.375V0c-9.652 4.27-17.58 9.874-23.784 16.813C12.01 23.752 7.424 31.358 4.455 39.631 1.485 47.904 0 59.941 0 75.74V102h42z"
                      fill="#A775F1"
                      fillRule="nonzero"
                      opacity=".07"
                    />
                  </svg>
                </div>
              )}
              <div className="profile-content">
                <div className="profile-img-container">
                  <img
                    src={testimonial.imageUrl || "/placeholder.svg"}
                    alt={`Profile image of ${testimonial.name}`}
                    className={`profile-img ${testimonial.cardType === "purple" ? "purple" : ""}`}
                  />
                </div>
                <div className="profile-text">
                  <h3 className={index === 2 || index === 3 ? "white-card" : "text-white"}>{testimonial.name}</h3>
                  <p className={index === 2 || index === 3 ? "white-card" : "text-white opacity-70"}>
                    {testimonial.title}
                  </p>
                </div>
              </div>
              <h1 className={`card-heading ${index === 2 || index === 3 ? "white-card" : "text-white"}`}>
                {testimonial.heading}
              </h1>
              <h2 className="card-subheading">"{testimonial.text}"</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
