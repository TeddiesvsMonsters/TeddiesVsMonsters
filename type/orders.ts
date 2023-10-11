export interface Order {
  id?: number
  slug?: string
  order_date?: string | null
  name?: string | null
  createdAt?: string | null
  updatedAt?: string | null
  publishedAt?: string | null
  status?: string | null
  payment?: Payment
  order_items?: OrderItem
}
export interface Payment {
  data: {
    id?: number
    attributes: {
      slug?: string
      payment_date?: string | null
      total: number | null
      createdAt?: string | null
      updatedAt?: string | null
      publishedAt?: string | null
    }
  }
}

export interface OrderItem {
  data: {
    id?: number
    slug?: string
    quantity?: number | null
    name?: string | null
    createdAt?: string | null
    updatedAt?: string | null
    publishedAt?: string | null
    product?: Product | null
  }
}
export interface Product {
  id?: number
  slug?: string
  name?: string | null
  description?: string | null
  price?: number | null
  quantity?: number | null
  createdAt?: string | null
  updatedAt?: string | null
  publishedAt?: string | null
}

export interface Products {
  name?: string | null
  quantity?: number | null
}
export interface Orders {
  orderID?: number | null
  date?: string | null
  status?: string | null
  total?: number | null
  products?: Products[] | null
}
