import QueryString from "qs"

const cache = new Map()
const cacheExpiry = 60000 // 60000 ms = 1 minuta

export const getStrapiContent = async ({
  slug,
  queryObj,
}: {
  slug: string
  queryObj: Record<string, any>
}) => {
  const query = QueryString.stringify(queryObj, {
    addQueryPrefix: true,
    arrayFormat: "indices",
    encodeValuesOnly: true,
  })

  const url = `${process.env.STRAPI_SERVER_URL}/api/${slug}${query}`

  // Sprawdzenie cache z uwzględnieniem wygasania
  if (cache.has(url)) {
    console.log("Znaleziono dane w cache dla URL:", url)
    const cachedEntry = cache.get(url)
    const isExpired = Date.now() - cachedEntry.timestamp > cacheExpiry // 60000 ms = 1 minuta

    if (!isExpired) {
      console.log("Zwracanie danych z cache dla URL:", url)
      return cachedEntry.data
    } else {
      // Usunięcie przeterminowanego wpisu z cache
      cache.delete(url)
    }
  }

  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
    },
  })
    .then((res) => res.json())
    .catch((err) => {
      console.log(err)
      throw new Error("Error fetching content data")
    })

  // Zapisanie wyniku do cache z timestampem
  cache.set(url, { data: res.data, timestamp: Date.now() })

  return res.data
}
