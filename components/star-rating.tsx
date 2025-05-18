import { Star } from "lucide-react"

interface StarRatingProps {
  rating?: number
  maxRating?: number
  size?: "sm" | "md" | "lg"
}

export default function StarRating({ rating = 5, maxRating = 5, size = "sm" }: StarRatingProps) {
  const sizeClasses = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5",
  }

  return (
    <div className="flex">
      {[...Array(maxRating)].map((_, i) => (
        <Star
          key={i}
          className={`${sizeClasses[size]} ${
            i < rating ? "text-yellow-400 fill-yellow-400" : "text-slate-300 dark:text-slate-600"
          }`}
        />
      ))}
    </div>
  )
}
