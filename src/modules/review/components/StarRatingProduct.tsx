import type { FC } from "react"

interface StarRatingProps {
  rating: number
  maxRating?: number
}

export const StarRating: FC<StarRatingProps> = ({ rating, maxRating = 5 }) => {
  return (
    <div
      className="flex items-center"
      aria-label={`Ocena ${rating} na ${maxRating} gwiazdek`}
    >
      {[...Array(maxRating)].map((_, index) => {
        const ratingValue = index + 1
        const isFullStar = rating >= ratingValue
        const isPartialStar = ratingValue - 1 < rating && rating < ratingValue

        return (
          <div key={index} className="relative w-5 h-5 mr-1">
            {/* Background star (empty) */}
            <svg
              className="absolute w-full h-full text-gray-200"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>

            {/* Filled star */}
            {(isFullStar || isPartialStar) && (
              <svg
                className="absolute top-0 left-0 w-full h-full text-yellow-400"
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{
                  clipPath: isPartialStar
                    ? `inset(0 ${(1 - (rating % 1)) * 100}% 0 0)`
                    : undefined,
                }}
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            )}
          </div>
        )
      })}
      <span className="ml-2 text-sm text-gray-600">
        {rating ? rating.toFixed(1) : "Produkt nie został jeszcze oceniony"}
      </span>
    </div>
  )
}
