"use client"

import { RadioGroup, Radio } from "@headlessui/react"
import { setShippingMethod } from "@lib/data/cart"
import { cartHasDigitalItems } from "@lib/data/orders"
import { convertToLocale } from "@lib/util/money"
import { CheckCircleSolid } from "@medusajs/icons"
import { HttpTypes } from "@medusajs/types"
import { Button, Heading, Text, clx } from "@medusajs/ui"
import ErrorMessage from "@modules/checkout/components/error-message"
import Divider from "@modules/common/components/divider"
import MedusaRadio from "@modules/common/components/radio"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

type ShippingProps = {
  cart: HttpTypes.StoreCart
  availableShippingMethods: HttpTypes.StoreCartShippingOption[] | null
  hasDigitalItem: {
    is_mixed: boolean
    is_digital: boolean
  }
}

const Shipping: React.FC<ShippingProps> = ({
  cart,
  availableShippingMethods,
  hasDigitalItem,
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [shippingMethodId, setShippingMethodId] = useState<string | null>(
    cart.shipping_methods?.at(-1)?.shipping_option_id || null
  )
  // TODO: Check if cart has digital items and delete shipping method for them
  console.log("cart", cart)

  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const isOpen = searchParams.get("step") === "delivery"

  const selectedShippingMethod = availableShippingMethods?.find(
    // To do: remove the previously selected shipping method instead of using the last one
    (method) => method.id === cart.shipping_methods?.at(-1)?.shipping_option_id
  )

  const handleEdit = () => {
    router.push(pathname + "?step=delivery", { scroll: false })
  }

  const handleSubmit = () => {
    router.push(pathname + "?step=payment", { scroll: false })
  }

  const handleSetShippingMethod = async (id: string) => {
    setError(null)
    let currentId: string | null = null
    setIsLoading(true)
    setShippingMethodId((prev) => {
      currentId = prev
      return id
    })

    await setShippingMethod({ cartId: cart.id, shippingMethodId: id })
      .catch((err) => {
        setShippingMethodId(currentId)
        setError(err.message)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  useEffect(() => {
    setError(null)
  }, [isOpen])

  return (
    <div className="bg-white">
      <div className="flex flex-row items-center justify-between mb-6">
        <Heading
          level="h2"
          className={clx(
            "flex flex-row text-3xl-regular gap-x-2 items-baseline",
            {
              "opacity-50 pointer-events-none select-none":
                !isOpen && cart.shipping_methods?.length === 0,
            }
          )}
        >
          Delivery
          {!isOpen && (cart.shipping_methods?.length ?? 0) > 0 && (
            <CheckCircleSolid />
          )}
        </Heading>
        {!isOpen &&
          cart?.shipping_address &&
          cart?.billing_address &&
          cart?.email && (
            <Text>
              <button
                onClick={handleEdit}
                className="text-ui-fg-interactive hover:text-ui-fg-interactive-hover"
                data-testid="edit-delivery-button"
              >
                Edit
              </button>
            </Text>
          )}
      </div>
      {isOpen ? (
        <div data-testid="delivery-options-container">
          <div className="pb-8">
            <RadioGroup
              value={shippingMethodId}
              onChange={handleSetShippingMethod}
            >
              {availableShippingMethods
                ?.filter((shipping) => {
                  if (hasDigitalItem.is_mixed) {
                    return shipping.provider_id !== "digital_digital"
                  } else if (hasDigitalItem.is_digital) {
                    return shipping.provider_id === "digital_digital"
                  } else if (
                    !hasDigitalItem.is_digital &&
                    !hasDigitalItem.is_mixed
                  ) {
                    return shipping.provider_id !== "digital_digital"
                  }
                })
                .map((option) => {
                  return (
                    <Radio
                      key={option.id}
                      value={option.id}
                      data-testid="delivery-option-radio"
                      className={clx(
                        "flex items-center justify-between text-small-regular cursor-pointer py-4 border rounded-rounded px-8 mb-2 hover:shadow-borders-interactive-with-active",
                        {
                          "border-ui-border-interactive":
                            option.id === shippingMethodId,
                        }
                      )}
                    >
                      <div className="flex items-center gap-x-4">
                        <MedusaRadio checked={option.id === shippingMethodId} />
                        <span className="text-base-regular">{option.name}</span>
                      </div>
                      <span className="justify-self-end text-ui-fg-base">
                        {convertToLocale({
                          amount: option.amount!,
                          currency_code: cart?.currency_code,
                        })}
                      </span>
                    </Radio>
                  )
                })}
            </RadioGroup>
          </div>

          <ErrorMessage
            error={error}
            data-testid="delivery-option-error-message"
          />

          <Button
            size="large"
            className="mt-6"
            onClick={handleSubmit}
            isLoading={isLoading}
            disabled={!cart.shipping_methods?.[0]}
            data-testid="submit-delivery-option-button"
          >
            Continue to payment
          </Button>
        </div>
      ) : (
        <div>
          <div className="text-small-regular">
            {cart && (cart.shipping_methods?.length ?? 0) > 0 && (
              <div className="flex flex-col w-1/3">
                <Text className="txt-medium-plus text-ui-fg-base mb-1">
                  Method
                </Text>
                <Text className="txt-medium text-ui-fg-subtle">
                  {selectedShippingMethod?.name}{" "}
                  {convertToLocale({
                    amount: selectedShippingMethod?.amount!,
                    currency_code: cart?.currency_code,
                  })}
                </Text>
              </div>
            )}
          </div>
        </div>
      )}
      <Divider className="mt-8" />
    </div>
  )
}

export default Shipping
