import { HttpTypes } from "@medusajs/types"
import { Text } from "@medusajs/ui"

import InteractiveLink from "@modules/common/components/interactive-link"
import ProductPreview from "@modules/products/components/product-preview"

export default function ProductRail({
  collection,
  region,
}: {
  collection: HttpTypes.StoreCollection
  region: HttpTypes.StoreRegion
}) {
  const { products } = collection

  if (!products) {
    return null
  }

  return (
    <div className="content-container py-12 small:py-24">
      <div className="flex justify-between mb-8">
        <Text className="text-xl font-semibold">{collection.title}</Text>
        <InteractiveLink
          className={
            "bg-yellow-400 py-2 px-5 rounded-md text-black font-bold text-center text-sm uppercase"
          }
          href={`/collections/${collection.handle}`}
        >
          Zobacz wszystkie
        </InteractiveLink>
      </div>
      <ul className="grid grid-cols-2 small:grid-cols-6 gap-x-6 gap-y-12 small:gap-y-16">
        {products &&
          products.map((product) => (
            <li key={product.id}>
              {/* @ts-ignore */}
              <ProductPreview product={product} region={region} isFeatured />
            </li>
          ))}
      </ul>
    </div>
  )
}
