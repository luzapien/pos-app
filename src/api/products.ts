import { axios } from '@/api/axios'
import type { Product } from '@/types/products'

export const getAllProducts = async () => {
  const { data } = await axios.get<Product[]>('/products')
  return data
}
