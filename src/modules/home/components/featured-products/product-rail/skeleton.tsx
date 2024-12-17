import { Text } from "@medusajs/ui"
import ProductPreviewSkeleton from "@modules/products/components/product-preview/skeleton"
import React from "react"

const ProductRailSkeleton = () => {
  return (
    <div className="content-container py-12 small:py-24">
      <div className="flex justify-between mb-8">
        <div className="w-24 h-8 bg-ui-bg-base opacity-50 rounded border border-neutral-200 animate-pulse mb-2"></div>
      </div>
      <ul className="grid grid-cols-2 small:grid-cols-6 gap-x-6 gap-y-12 small:gap-y-16">
        {Array.from({ length: 12 }).map((_, i) => (
          <ProductPreviewSkeleton key={i} />
        ))}
      </ul>
    </div>
  )
}

export default ProductRailSkeleton
