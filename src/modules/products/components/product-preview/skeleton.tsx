import { clx, Container, Text } from "@medusajs/ui"
import React from "react"

const ProductPreviewSkeleton = ({ size = "full", isFeatured = false }) => {
  return (
    <div data-testid="product-wrapper">
      <Container
        className={clx(
          "relative w-full overflow-hidden p-4 bg-ui-bg-subtle shadow-elevation-card-rest rounded-large group-hover:shadow-elevation-card-hover transition-shadow ease-in-out",
          "animate-pulse", // Add pulsing animation
          {
            "aspect-[11/14]": isFeatured,
            "aspect-[9/16]": !isFeatured && size !== "square",
            "aspect-[1/1]": size === "square",
            "w-[180px]": size === "small",
            "w-[290px]": size === "medium",
            "w-[440px]": size === "large",
            "w-full": size === "full",
          }
        )}
      >
        {/* Skeleton for image */}
        <div className="absolute inset-0 bg-ui-bg-base opacity-50"></div>
      </Container>
      <div className="flex flex-col items-center txt-compact-medium mt-4 justify-center text-center">
        <div
          className="w-2/3 h-4 bg-ui-bg-base opacity-50 rounded animate-pulse mb-2"
          data-testid="product-title"
        ></div>
        <div className="flex items-center gap-x-2">
          <div className="w-16 h-4 bg-ui-bg-base opacity-50 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}

export default ProductPreviewSkeleton
