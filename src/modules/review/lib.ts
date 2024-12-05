import next from "next"

export const getProductReviews = async (productId: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL}/store/review/product-review/${productId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-publishable-api-key":
          process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY || "temp",
      },
    }
  )
  console.log("response", response)
  if (!response.ok) {
    return []
  }

  return response.json()
}
