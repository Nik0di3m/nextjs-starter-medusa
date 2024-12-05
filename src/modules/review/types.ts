export type ProductReview = {
  id: string
  title: string
  content: string
  status: "draft" | "approved" | "rejected" // Zakładam możliwe wartości statusu
  rating: number
  created_at: string
  updated_at: string
  deleted_at: string | null
  customer_link: Array<{
    customer_id: string
    review_id: string
    id: string
    created_at: string
    updated_at: string
    deleted_at: string | null
  }>
  customer_name: string
}
