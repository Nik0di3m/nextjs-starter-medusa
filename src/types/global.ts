import { BaseProductVariant } from "@medusajs/types/dist/http/product/common"
export type FeaturedProduct = {
  id: string
  title: string
  handle: string
  thumbnail?: string
}

export type VariantPrice = {
  calculated_price_number: number
  calculated_price: string
  original_price_number: number
  original_price: string
  currency_code: string
  price_type: string
  percentage_diff: string
}

export type Brand = {
  id: string
  name: string
  description: string
  created_at: string
  updated_at: string
  deleted_at: string | null
}

export type DigitalProduct = {
  id: string

  name: string

  medias?: DigitalProductMedia[]
}

export type DigitalProductMedia = {
  id: string

  fileId: string

  type: "preview" | "main"

  mimeType: string
}

export type VariantWithDigitalProduct = BaseProductVariant & {
  digital_product?: DigitalProduct
}
