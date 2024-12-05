import { getProductOmniprice } from "@lib/data/omniprice"
import { getProductsById } from "@lib/data/products"
import { HttpTypes } from "@medusajs/types"
import ProductActions from "@modules/products/components/product-actions"

/**
 * Fetches real time pricing for a product and renders the product actions component.
 */
export default async function ProductActionsWrapper({
  id,
  region,
  isDisabledByAvailableAt,
}: {
  id: string
  region: HttpTypes.StoreRegion
  isDisabledByAvailableAt?: boolean
}) {
  const [product] = await getProductsById({
    ids: [id],
    regionId: region.id,
  })
  const productVaraintId = product.variants?.map((v) => v.id) || []
  const omniPriceData = await getProductOmniprice({
    product_variant_id: productVaraintId,
    region_id: region.id,
  })
  const omniPriceMap = new Map(
    omniPriceData.data.map((item: any) => [item.product_variant_id, item])
  )
  const updatedPricedProduct = {
    ...product, // Kopiujemy wszystkie właściwości obiektu
    variants: product.variants?.map((variant) => {
      const omniPriceRecord = omniPriceMap.get(variant.id)
      return {
        ...variant,
        omniPrice: omniPriceRecord || null, // Dodajemy pole omniPrice
      }
    }),
  }

  console.log("PRODUCT ACTION>>>", updatedPricedProduct)

  if (!product) {
    return null
  }

  return (
    <ProductActions
      product={updatedPricedProduct as any}
      region={region}
      isDisabledManually={isDisabledByAvailableAt}
    />
  )
}
