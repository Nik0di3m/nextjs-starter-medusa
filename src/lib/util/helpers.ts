import { HttpTypes } from "@medusajs/types"

interface IVariant {
  calculated_price: {
    calculated_amount: number
  }
}

export const getPriceLabelFromTo = ({
  variants,
}: {
  variants: HttpTypes.StoreProductVariant[]
}) => {
  !variants.length && null
  const prices = variants.map(
    (variant) => variant.calculated_price?.calculated_amount ?? 0
  )
  const minPrice = Math.min(...prices)
  const maxPrice = Math.max(...prices)

  if (minPrice === maxPrice) {
    return `${parseFloat(minPrice.toString()).toFixed(2)}zł`
  }

  return `${parseFloat(minPrice.toString()).toFixed(2)}zł - ${parseFloat(
    maxPrice.toString()
  ).toFixed(2)}zł`
}

export function formatDateAvailableAt(dateNumber: number) {
  const dateString = dateNumber.toString()
  // Sprawdź, czy długość daty to 8 znaków
  if (dateString.length !== 8) return "Invalid date format"

  // Rozdziel datę na dzień, miesiąc i rok
  let day = dateString.slice(0, 2)
  let month = dateString.slice(2, 4)
  let year = dateString.slice(4, 8)

  // Sprawdź, czy dodano zero na początku dnia lub miesiąca, jeśli mają pojedynczą cyfrę
  day = day.length === 1 ? `0${day}` : day
  month = month.length === 1 ? `0${month}` : month

  // Zwróć sformatowaną datę w formacie YYYY-MM-DD
  return `${day}-${month}-${year}`
}

export function isFutureDateAvailableAt(dateNumber: any) {
  // Sprawdź, czy data jest liczbą

  const dateString = dateNumber.toString()
  // Sprawdź, czy długość daty to 8 znaków
  if (dateString.length !== 8) return "Invalid date format"

  // Rozdziel datę na dzień, miesiąc i rok
  let day = dateString.slice(0, 2)
  let month = dateString.slice(2, 4)
  let year = dateString.slice(4, 8)

  // Konwertuj na format yyyy-mm-dd
  const formattedDate = `${year}-${month}-${day}`

  // Utwórz obiekt Date z przekonwertowanej daty
  const date = new Date(formattedDate)
  const now = new Date()

  // Porównaj, czy data jest w przyszłości
  return date > now
}
