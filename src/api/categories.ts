import { axios } from '@/api/axios'
import type { Category, CategoryPayload } from '@/types/categories'

export const getAllCategories = async () => {
  const { data } = await axios.get<Category[]>('/categories')
  return data
}

export const createNewCategory = async (category: CategoryPayload) => {
  const { data } = await axios.post<string>('/categories', category)
  return data
}

export const editCategory = async (id: string, category: CategoryPayload) => {
  const { data } = await axios.put<Category>(`/categories/${id}`, category)
  return data
}
