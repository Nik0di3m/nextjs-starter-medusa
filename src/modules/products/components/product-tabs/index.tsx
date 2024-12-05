"use client"

import Back from "@modules/common/icons/back"
import FastDelivery from "@modules/common/icons/fast-delivery"
import Refresh from "@modules/common/icons/refresh"

import Accordion from "./accordion"
import { HttpTypes } from "@medusajs/types"
import { Text } from "@medusajs/ui"
import { Brand } from "types/global"

type ProductTabsProps = {
  product: HttpTypes.StoreProduct
  brand?: Brand
}

const ProductTabs = ({ product, brand }: ProductTabsProps) => {
  const tabs = [
    {
      label: "Informacje o autorze",
      component: <AutorInfoTab text={brand?.description} />,
      isActive: !!brand?.description,
    },
    {
      label: "Informacje o produkcie",
      component: <ProductInfoTab product={product} />,
      isActive: true,
    },
    {
      label: "Wysyłka i zwroty",
      component: <ShippingInfoTab />,
      isActive: true,
    },
  ]

  return (
    <div className="w-full">
      <Accordion type="multiple">
        {tabs
          .filter((tab) => tab.isActive)
          .map((tab, i) => (
            <Accordion.Item
              key={i}
              title={tab.label}
              headingSize="medium"
              value={tab.label}
            >
              {tab.component}
            </Accordion.Item>
          ))}
      </Accordion>
    </div>
  )
}

const AutorInfoTab = ({ text }: { text?: string }) => {
  if (!text) {
    return null
  }
  return (
    <div>
      <Text
        className="text-medium text-ui-fg-subtle whitespace-pre-line"
        data-testid="product-description"
      >
        {text}
      </Text>
    </div>
  )
}

const ProductInfoTab = ({ product }: ProductTabsProps) => {
  return (
    <div className="text-small-regular py-8">
      <div className="grid grid-cols-2 gap-x-8">
        <div className="flex flex-col gap-y-4">
          <div>
            <span className="font-semibold">Materiał</span>
            <p>{product.material ? product.material : "-"}</p>
          </div>
          <div>
            <span className="font-semibold">Kraj pochodzenia</span>
            <p>{product.origin_country ? product.origin_country : "-"}</p>
          </div>
          <div>
            <span className="font-semibold">Typ</span>
            <p>{product.type ? product.type.value : "-"}</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <div>
            <span className="font-semibold">Waga</span>
            <p>{product.weight ? `${product.weight} g` : "-"}</p>
          </div>
          <div>
            <span className="font-semibold">Wymiary</span>
            <p>
              {product.length && product.width && product.height
                ? `${product.length}L x ${product.width}W x ${product.height}H`
                : "-"}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const ShippingInfoTab = () => {
  return (
    <div className="text-small-regular py-8">
      <div className="grid grid-cols-1 gap-y-8">
        <div className="flex items-start gap-x-2">
          <FastDelivery />
          <div>
            <span className="font-semibold">Szybka dostawa</span>
            <p className="max-w-sm">
              Paczka dotrze w ciągu 3-5 dni roboczych do miejsca odbioru lub w
              zaciszu własnego domu.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-2">
          <Refresh />
          <div>
            <span className="font-semibold">Prosta wymiana</span>
            <p className="max-w-sm">
              Nie trafiony zakup? Nie martw się - wymienimy Twój produkt na
              nowy.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-2">
          <Back />
          <div>
            <span className="font-semibold">Łatwe zwroty</span>
            <p className="max-w-sm">
              Po prostu zwróć produkt, a my zwrócimy Ci pieniądze. Bez pytań -
              dołożymy wszelkich starań, aby upewnić się, że zwrot był
              bezproblemowy.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductTabs
