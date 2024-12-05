import React, { Suspense } from "react"

import ImageGallery from "@modules/products/components/image-gallery"
import ProductActions from "@modules/products/components/product-actions"
import ProductOnboardingCta from "@modules/products/components/product-onboarding-cta"
import ProductTabs from "@modules/products/components/product-tabs"
import RelatedProducts from "@modules/products/components/related-products"
import ProductInfo from "@modules/products/templates/product-info"
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
import { notFound } from "next/navigation"
import ProductActionsWrapper from "./product-actions-wrapper"
import { HttpTypes } from "@medusajs/types"

import { Text } from "@medusajs/ui"
import { Brand } from "types/global"
import { ProductReview } from "@modules/review/types"
import {
  formatDateAvailableAt,
  isFutureDateAvailableAt,
} from "@lib/util/helpers"
import ProductReviews from "@modules/review/components/ProductReview"

type ProductTemplateProps = {
  product: HttpTypes.StoreProduct
  region: HttpTypes.StoreRegion
  countryCode: string
  brand: Brand
  productReviews: {
    reviews: {
      id: string
      review: ProductReview[]
    }[]
    average_rating: number
  }
  customerHeader: {
    authorization: string
  } | null
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({
  product,
  productReviews,
  region,
  countryCode,
  brand,
  customerHeader,
}) => {
  if (!product || !product.id) {
    return notFound()
  }

  console.log("ProductTemplate")

  const reviewFlatMap = productReviews?.reviews?.length
    ? productReviews.reviews.flatMap((review) => review.review)
    : []

  return (
    <>
      <div
        className="content-container flex flex-col small:flex-row small:items-start py-6 relative"
        data-testid="product-container"
      >
        <div className="block w-full relative">
          <ImageGallery images={product?.images || []} />
        </div>
        <div className="flex flex-col small:sticky small:top-48 small:py-0 w-full py-8 gap-y-12">
          {typeof product?.metadata?.availableAt === "number" && (
            <div className="bg-cyan-500 p-1 w-auto self-start flex">
              <Text className="text-sm font-semibold text-white">
                Dostępna od:{" "}
                {formatDateAvailableAt(product.metadata.availableAt)}
              </Text>
            </div>
          )}

          <pre>{/* <code>{JSON.stringify(reviewFlatMap)}</code> */}</pre>

          <ProductInfo
            product={product}
            brand={brand}
            average_rating={productReviews?.average_rating}
          />
          <ProductTabs product={product} brand={brand} />

          {/* <ProductOnboardingCta /> */}
          <Suspense
            fallback={
              <ProductActions
                disabled={true}
                product={product as any}
                region={region}
              />
            }
          >
            <ProductActionsWrapper
              id={product.id}
              region={region}
              isDisabledByAvailableAt={
                product?.metadata?.availableAt &&
                isFutureDateAvailableAt(product?.metadata?.availableAt)
                  ? true
                  : false
              }
            />
          </Suspense>
        </div>
      </div>
      <div className="content-container my-16 small:my-32">
        <ProductReviews
          reviews={reviewFlatMap}
          customerHeader={customerHeader}
          productId={product.id}
        />
      </div>
      <div
        className="content-container my-16 small:my-32"
        data-testid="related-products-container"
      >
        <Suspense fallback={<SkeletonRelatedProducts />}>
          <RelatedProducts product={product} countryCode={countryCode} />
        </Suspense>
      </div>
    </>
  )
}

export default ProductTemplate
