import { reviewsData } from "@/lib/testimonials-data"
import { TestimonialsGrid } from "./testimonials-grid"

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
]

// Define the testimonial item type
type TestimonialItem = {
  name: string
  title: string
  heading: string
  text: string
  imageUrl: string
}

export default function TestimonialsSection({ language }: { language: string }) {
  // Pre-process testimonial data on the server
  const title = language === "en" ? "Testimonials" : "Testimonios"
  const subtitle =
    language === "en"
      ? `What our customers say about ${reviewsData.businessInfo.business_name}`
      : `Lo que dicen nuestros clientes sobre ${reviewsData.businessInfo.business_name_es}`

  // Get the top 5 reviews
  const topReviews = reviewsData.reviews.slice(0, 5).map((review, index) => {
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
      imageUrl: faceImages[index % faceImages.length],
    }
  })

  return (
    <div className="relative py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-base/7 font-semibold text-primary">{title}</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-balance text-gray-900 dark:text-white sm:text-5xl">
            {subtitle}
          </p>
        </div>

        <div className="mt-10">
          <TestimonialsGrid testimonials={topReviews} />
        </div>
      </div>
    </div>
  )
}
