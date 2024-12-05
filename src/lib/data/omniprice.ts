import { cache } from "react"

type OmnipriceData = {
  product_variant_id: string[]
  region_id: string
}

export const getProductOmniprice = cache(async function (
  data?: OmnipriceData
): Promise<any> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL}/store/omniprice`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-publishable-api-key":
            process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY || "temp",
        },
        body: JSON.stringify(data),
      }
    )

    if (!response.ok) {
      throw new Error(
        `Network response was not ok. Status: ${response.status}, StatusText: ${response.statusText}`
      )
    }

    const res = await response.json()

    if (!res) {
      throw new Error("Response data is empty or invalid")
    }

    return res
  } catch (error) {
    console.error("Error fetching omniprice data:", error)
    throw new Error("Failed to fetch product omniprice data")
  }
})
