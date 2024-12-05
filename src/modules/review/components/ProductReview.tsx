"use client"

import React, { useState, useTransition } from "react"
import { Star } from "@medusajs/icons"
import { submitReview } from "../actions"

interface Review {
  id: string
  title: string
  content: string
  status: string
  rating: number
  created_at: string
  customer_name: string
}

interface ProductReviewsProps {
  reviews: Review[]
  customerHeader: {
    authorization: string
  } | null
  productId: string
  onSubmitReview?: (
    review: Omit<Review, "id" | "status" | "created_at" | "customer_name">
  ) => void
}

const formatDate = (dateString: string) => {
  return new Intl.DateTimeFormat("pl-PL", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(dateString))
}

const StarRating: React.FC<{
  rating: number
  onRatingChange?: (rating: number) => void
}> = ({ rating, onRatingChange }) => {
  return (
    <div className="flex" aria-label={`Ocena ${rating} na 5 gwiazdek`}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 cursor-pointer ${
            i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }`}
          onClick={() => onRatingChange && onRatingChange(i + 1)}
        />
      ))}
    </div>
  )
}

export default function ProductReviews({
  reviews,
  customerHeader,
  productId,
  onSubmitReview,
}: ProductReviewsProps) {
  const [newReview, setNewReview] = useState({
    title: "",
    content: "",
    rating: 0,
  })
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    startTransition(async () => {
      const result = await submitReview({
        ...newReview,
        productId,
        jwt: customerHeader?.authorization.split(" ")[1] || null,
      })
      if (result.success) {
        setNewReview({ title: "", content: "", rating: 0 })
      } else {
        setError(result.error as any)
      }
    })
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Recenzje produktu</h2>
      {reviews?.length > 0 ? (
        <div className="space-y-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white shadow rounded-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
                      {review.customer_name.charAt(0).toUpperCase()}
                      {review.customer_name
                        .split(" ")[1]
                        ?.charAt(0)
                        .toUpperCase()}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{review.title}</h3>
                      <p className="text-sm text-gray-600">
                        {review.customer_name}
                      </p>
                    </div>
                  </div>
                  <StarRating rating={review.rating} />
                </div>
                <p className="mt-4">{review.content}</p>
              </div>
              <div className="px-6 pb-6">
                <p className="text-sm text-gray-600">
                  {formatDate(review.created_at)}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Brak recenzji</p>
      )}

      {customerHeader?.authorization && (
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow rounded-lg p-6"
        >
          <h3 className="text-xl font-semibold mb-4">Dodaj recenzję</h3>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Tytuł
              </label>
              <input
                type="text"
                id="title"
                value={newReview.title}
                onChange={(e) =>
                  setNewReview({ ...newReview, title: e.target.value })
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
            <div>
              <label
                htmlFor="content"
                className="block text-sm font-medium text-gray-700"
              >
                Treść recenzji
              </label>
              <textarea
                id="content"
                value={newReview.content}
                onChange={(e) =>
                  setNewReview({ ...newReview, content: e.target.value })
                }
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Ocena
              </label>
              <StarRating
                rating={newReview.rating}
                onRatingChange={(rating) =>
                  setNewReview({ ...newReview, rating })
                }
              />
            </div>
            <button
              type="submit"
              disabled={isPending}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50"
            >
              {isPending ? "Wysyłanie..." : "Dodaj recenzję"}
            </button>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>
        </form>
      )}
    </div>
  )
}
