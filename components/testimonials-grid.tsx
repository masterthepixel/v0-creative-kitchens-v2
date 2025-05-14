"use client"

import { useRef } from "react"
import "../app/testimonial-grid.css"

type TestimonialItem = {
  name: string
  title: string
  heading: string
  text: string
  imageUrl: string
}

export function TestimonialsGrid({ testimonials }: { testimonials: TestimonialItem[] }) {
  const quotationRef = useRef<SVGSVGElement>(null)

  // Make sure we have exactly 5 testimonials
  const displayTestimonials = testimonials.slice(0, 5)

  // Fill with placeholders if we have less than 5
  while (displayTestimonials.length < 5) {
    displayTestimonials.push({
      name: "Customer",
      title: "Verified Customer",
      heading: "Great experience with Creative Kitchens",
      text: "The team was professional and delivered quality work. I'm very satisfied with my new kitchen.",
      imageUrl: "https://randomuser.me/api/portraits/women/1.jpg",
    })
  }

  return (
    <div className="container">
      <section className="testimonial-grid">
        {displayTestimonials.map((testimonial, index) => (
          <div key={index} className="card" id={`card-${index + 1}`}>
            {index === 0 && (
              <svg ref={quotationRef} width="104" height="102" xmlns="http://www.w3.org/2000/svg" className="quotation">
                <path
                  d="M104 102V59.727H84.114c0-5.871.689-11.182 2.068-15.933 1.379-4.75 3.42-9.287 6.125-13.61C95.01 25.86 98.909 22.257 104 19.375V0c-9.758 4.27-17.712 9.874-23.864 16.813-6.151 6.939-10.712 14.545-13.681 22.818C63.485 47.904 62 59.941 62 75.74V102h42zm-62 0V59.727H22.114c0-5.871.689-11.182 2.068-15.933 1.379-4.75 3.42-9.287 6.125-13.61C33.01 25.86 36.909 22.257 42 19.375V0c-9.652 4.27-17.58 9.874-23.784 16.813C12.01 23.752 7.424 31.358 4.455 39.631 1.485 47.904 0 59.941 0 75.74V102h42z"
                  fill="#A775F1"
                  fillRule="nonzero"
                  opacity=".07"
                />
              </svg>
            )}
            <div className="profile-content">
              <img
                src={testimonial.imageUrl || "/placeholder.svg"}
                alt={`Profile image of ${testimonial.name}`}
                className={`profile-img ${index === 0 ? "purple" : ""}`}
              />
              <div className="profile-text">
                <h3 className={index === 2 || index === 3 ? "white-card" : ""}>{testimonial.name}</h3>
                <p className={index === 2 || index === 3 ? "white-card" : ""}>{testimonial.title}</p>
              </div>
            </div>
            <h1 className={`card-heading ${index === 2 || index === 3 ? "white-card" : ""}`}>{testimonial.heading}</h1>
            <h2 className="card-subheading">"{testimonial.text}"</h2>
          </div>
        ))}
      </section>
    </div>
  )
}
