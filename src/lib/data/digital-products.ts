"use server"

import { DigitalProduct } from "../../types/global"
import { getAuthHeaders } from "./cookies"

export const getCustomerDigitalProducts = async () => {
  const authHeaders = await getAuthHeaders()
  const { digital_products } = await fetch(
    `${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL}/store/customers/me/digital-products`,
    {
      credentials: "include",
      headers: {
        ...authHeaders,
        "x-publishable-api-key": process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY,
      },
    }
  ).then((res) => res.json())

  return digital_products as DigitalProduct[]
}

export const getDigitalMediaDownloadLink = async (mediaId: string) => {
  const authHeaders = await getAuthHeaders()
  const { url } = await fetch(
    `${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL}/store/customers/me/digital-products/${mediaId}/download`,
    {
      credentials: "include",

      method: "POST",

      headers: {
        ...authHeaders,
        "x-publishable-api-key": process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY,
      },
    }
  ).then((res) => res.json())

  return url
}
