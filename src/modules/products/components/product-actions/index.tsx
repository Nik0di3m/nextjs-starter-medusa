"use client"

import { Button, clx, Text } from "@medusajs/ui"
import { isEqual } from "lodash"
import { useParams } from "next/navigation"
import { useEffect, useMemo, useRef, useState } from "react"

import { useIntersection } from "@lib/hooks/use-in-view"
import Divider from "@modules/common/components/divider"
import OptionSelect from "@modules/products/components/product-actions/option-select"

import MobileActions from "./mobile-actions"
import ProductPrice from "../product-price"
import { addToCart } from "@lib/data/cart"
import { HttpTypes } from "@medusajs/types"
import { VariantWithDigitalProduct } from "types/global"
import { getDigitalProductPreview } from "@lib/data/products"

type ExtendedProductVariant = HttpTypes.StoreProductVariant & {
  omniPrice?: {
    lower_price: string
  }
}

type ExtendStoreProduct = HttpTypes.StoreProduct & {
  variants: ExtendedProductVariant[]
}

type ProductActionsProps = {
  product: ExtendStoreProduct
  region: HttpTypes.StoreRegion
  disabled?: boolean
  isDisabledManually?: boolean
}

type ExtendedProductVariantOptions =
  HttpTypes.StoreProductVariant["options"] & {
    omniPrice?: {
      lower_price: string
    }
  }

const optionsAsKeymap = (
  variantOptions: ExtendedProductVariantOptions | null
) => {
  return variantOptions?.reduce((acc: Record<string, string>, varopt: any) => {
    acc[varopt.option_id] = varopt.value
    return acc
  }, {})
}

export default function ProductActions({
  product,
  region,
  disabled,
  isDisabledManually,
}: ProductActionsProps) {
  const [options, setOptions] = useState<Record<string, string | undefined>>({})
  const [isAdding, setIsAdding] = useState(false)
  const countryCode = useParams().countryCode as string

  // If there is only 1 variant, preselect the options
  useEffect(() => {
    if (product.variants?.length === 1) {
      const variantOptions = optionsAsKeymap(product.variants[0].options)
      setOptions(variantOptions ?? {})
    }
  }, [product.variants])

  const selectedVariant: ExtendedProductVariant | undefined = useMemo(() => {
    if (!product.variants || product.variants.length === 0) {
      return
    }

    return product.variants.find((v) => {
      const variantOptions = optionsAsKeymap(v.options)
      return isEqual(variantOptions, options)
    })
  }, [product.variants, options]) as VariantWithDigitalProduct

  // update the options when a variant is selected
  const setOptionValue = (optionId: string, value: string) => {
    setOptions((prev) => ({
      ...prev,
      [optionId]: value,
    }))
  }

  // check if the selected variant is in stock
  const inStock = useMemo(() => {
    // If we don't manage inventory, we can always add to cart
    if (selectedVariant && !selectedVariant.manage_inventory) {
      return true
    }

    // If we allow back orders on the variant, we can add to cart
    if (selectedVariant?.allow_backorder) {
      return true
    }

    // If there is inventory available, we can add to cart
    if (
      selectedVariant?.manage_inventory &&
      (selectedVariant?.inventory_quantity || 0) > 0
    ) {
      return true
    }

    // Otherwise, we can't add to cart
    return false
  }, [selectedVariant])

  const actionsRef = useRef<HTMLDivElement>(null)

  const inView = useIntersection(actionsRef, "0px")

  // add the selected variant to the cart
  const handleAddToCart = async () => {
    if (!selectedVariant?.id) return null

    setIsAdding(true)

    await addToCart({
      variantId: selectedVariant.id,
      quantity: 1,
      countryCode,
    })

    setIsAdding(false)
  }

  const handleDownloadPreview = async () => {
    if (!selectedVariant?.digital_product) {
      return
    }

    const downloadUrl = await getDigitalProductPreview({
      id: selectedVariant?.digital_product.id,
    })

    if (downloadUrl.length) {
      window.open(downloadUrl)
    }
  }

  return (
    <>
      <div className="flex flex-col gap-y-2" ref={actionsRef}>
        <div>
          {(product.variants?.length ?? 0) > 1 && (
            <div className="flex flex-col gap-y-4">
              {(product.options || []).map((option) => {
                return (
                  <div key={option.id}>
                    <OptionSelect
                      option={option}
                      current={options[option.id]}
                      updateOption={setOptionValue}
                      title={option.title ?? ""}
                      data-testid="product-options"
                      disabled={!!disabled || isAdding}
                    />
                  </div>
                )
              })}
              <Divider />
            </div>
          )}
        </div>

        <ProductPrice product={product} variant={selectedVariant} />

        {selectedVariant && (
          <div className="">
            <Text>
              Najniższa cena z ostatnich 30 dni:{" "}
              {selectedVariant?.omniPrice?.lower_price ?? "Brak danych"}{" "}
              {selectedVariant.calculated_price?.currency_code}
            </Text>
          </div>
        )}

        {selectedVariant?.digital_product && (
          <Button
            onClick={handleDownloadPreview}
            variant="secondary"
            className="w-full h-10"
          >
            Download Preview
          </Button>
        )}

        <Button
          onClick={handleAddToCart}
          disabled={
            !inStock ||
            !selectedVariant ||
            !!disabled ||
            isAdding ||
            !!isDisabledManually
          }
          variant="primary"
          className={clx(
            "w-full h-10 uppercase bg-[#ffc800] text-black font-bold",
            !selectedVariant && "cursor-not-allowed",
            !inStock && "cursor-not-allowed",
            !!disabled && "cursor-not-allowed",
            isAdding && "cursor-not-allowed"
          )}
          isLoading={isAdding}
          data-testid="add-product-button"
        >
          {!selectedVariant
            ? "Wybierz wariant"
            : !inStock
            ? "Brak w magazynie"
            : "Dodaj do koszyka"}
        </Button>
        <MobileActions
          product={product}
          variant={selectedVariant}
          options={options}
          updateOptions={setOptionValue}
          inStock={inStock}
          handleAddToCart={handleAddToCart}
          isAdding={isAdding}
          show={!inView}
          optionsDisabled={!!disabled || isAdding}
        />
      </div>
    </>
  )
}
