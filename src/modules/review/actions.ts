"use server"

import { revalidatePath, revalidateTag } from "next/cache"
import { jwtDecode } from "jwt-decode"
import { getAuthHeaders } from "@lib/data/cookies"
interface ReviewSubmission {
  title: string
  content: string
  rating: number
  productId: string
  jwt: string | null
}

export async function submitReview(review: ReviewSubmission) {
  try {
    // Decoding the JWT to get the customer ID
    const authHeaders = await getAuthHeaders()

    if (!authHeaders) {
      throw new Error("Authorization header is missing")
    }
    if (!review.productId) {
      throw new Error("Product ID is missing")
    }

    // Here you would typically interact with your database or API
    // For this example, we'll just simulate a successful submission
    await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate network delay

    // Simulating a response from the server
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL}/store/review/create`,
      {
        method: "POST",
        headers: {
          ...authHeaders,
          "Content-Type": "application/json",
          "x-publishable-api-key":
            process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY || "temp",
        },
        body: JSON.stringify({
          title: review.title,
          content: review.content,
          rating: review.rating,
          product_id: review.productId,
        }),
      }
    ).then((res) => res.json())

    if (res.status !== "success") {
      throw new Error("Failed to submit review")
    }

    // Revalidate the product page to show the new review
    revalidateTag("product")

    return { success: true, review: res }
  } catch (error) {
    console.error("Failed to submit review:", error)
    return {
      success: false,
      error: "Failed to submit review. Please try again.",
    }
  }
}
