import type { Category } from './categories'

export interface Product {
  id: string
  name: string
  packaging: string
  category: Category
  category_id: string
}
