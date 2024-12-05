import { Text } from "@medusajs/ui"

import { getProductPrice } from "@lib/util/get-product-price"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"
import { getProductsById } from "@lib/data/products"
import { HttpTypes } from "@medusajs/types"
import { formatDateAvailableAt, getPriceLabelFromTo } from "@lib/util/helpers"

export default async function ProductPreview({
  product,
  isFeatured,
  region,
}: {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
  region: HttpTypes.StoreRegion
}) {
  const [pricedProduct] = await getProductsById({
    ids: [product.id!],
    regionId: region.id,
  })

  if (!pricedProduct) {
    return null
  }

  const { cheapestPrice, variantPrice } = getProductPrice({
    product: pricedProduct,
  })

  const priceFromTo = pricedProduct.variants
    ? getPriceLabelFromTo({ variants: pricedProduct.variants })
    : null

  return (
    <LocalizedClientLink href={`/products/${product.handle}`} className="group">
      <div data-testid="product-wrapper" className="relative">
        <Thumbnail
          thumbnail={product.thumbnail}
          images={product.images}
          size="full"
          isFeatured={isFeatured}
        />
        <div className="absolute top-2 left-2 z-20 shadow-sm">
          {typeof pricedProduct?.metadata?.availableAt === "number" && (
            <div className="bg-cyan-500 p-1 w-full rounded-sm">
              <Text className="text-sm font-semibold text-white ">
                Dostępna od:{" "}
                {formatDateAvailableAt(pricedProduct.metadata.availableAt)}
              </Text>
            </div>
          )}
        </div>
        <div className="flex flex-col items-center txt-compact-medium mt-4 justify-center text-center">
          <Text className="text-sm font-bold pb-2" data-testid="product-title">
            {product.title}
          </Text>
          {typeof pricedProduct?.metadata?.Author === "string" && (
            <Text className="pb-1 font-medium italic">
              Autor: {pricedProduct.metadata.Author}
            </Text>
          )}
          {/* <div className="flex items-center gap-x-2">
            {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
          </div> */}
          <div>
            {priceFromTo && (
              <Text className="text-sm font-semibold">{priceFromTo}</Text>
            )}
          </div>
        </div>
      </div>
    </LocalizedClientLink>
  )
}
