export interface Product {
  id: string
  name: string
  packaging: string
  category: Category
  category_id: string
}

export interface Category {
  id: string
  name: string
}
