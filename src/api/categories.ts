import { axios } from '@/api/axios'
import type { Category } from '@/types/products'

export const getAllCategories = async () => {
  const { data } = await axios.get<Category[]>('/categories')
  return data
}
