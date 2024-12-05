import { Metadata } from "next"
import { notFound } from "next/navigation"
import ProductTemplate from "@modules/products/templates"
import { getRegion, listRegions } from "@lib/data/regions"
import { getProductBrand, getProductByHandle } from "@lib/data/products"
import { sdk } from "@lib/config"
import Hero from "@modules/home/components/hero"
import { getProductReviews } from "@modules/review/lib"
import { getAuthHeaders } from "@lib/data/cookies"

type Props = {
  params: Promise<{ countryCode: string; handle: string }>
}

export async function generateStaticParams() {
  try {
    const countryCodes = await listRegions().then((regions) =>
      regions?.map((r) => r.countries?.map((c) => c.iso_2)).flat()
    )

    if (!countryCodes) {
      return []
    }

    const { products } = await sdk.store.product.list(
      { fields: "handle" },
      { next: { tags: ["products"] } }
    )

    return countryCodes
      .map((countryCode) =>
        products.map((product) => ({
          countryCode,
          handle: product.handle,
        }))
      )
      .flat()
      .filter((param) => param.handle)
  } catch (error) {
    console.error(
      `Failed to generate static paths for product pages: ${
        error instanceof Error ? error.message : "Unknown error"
      }.`
    )
    return []
  }
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params
  const { handle } = params
  const region = await getRegion(params.countryCode)

  if (!region) {
    notFound()
  }

  const product = await getProductByHandle(handle, region.id)

  if (!product) {
    notFound()
  }

  return {
    title: `${product.title} | Medusa Store`,
    description: `${product.title}`,
    openGraph: {
      title: `${product.title} | Medusa Store`,
      description: `${product.title}`,
      images: product.thumbnail ? [product.thumbnail] : [],
    },
  }
}

export default async function ProductPage(props: Props) {
  const params = await props.params
  const region = await getRegion(params.countryCode)

  if (!region) {
    notFound()
  }

  const pricedProduct = await getProductByHandle(params.handle, region.id)
  const [productBrand, productReviews] = await Promise.all([
    getProductBrand({ productId: pricedProduct.id }),
    getProductReviews(pricedProduct.id),
  ])

  if (!pricedProduct) {
    notFound()
  }

  console.log("PRODUCT PAGE>>>", productReviews)
  const auth = await getAuthHeaders()
  console.log("AUTH>>>", auth)

  return (
    <>
      <ProductTemplate
        product={pricedProduct}
        productReviews={productReviews}
        brand={productBrand}
        region={region}
        countryCode={params.countryCode}
        customerHeader={(auth as any) || null}
      />
    </>
  )
}
