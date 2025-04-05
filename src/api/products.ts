import { axios } from '@/api/axios'
import type { Product, ProductPayload } from '@/types/products'

export const getAllProducts = async () => {
  const { data } = await axios.get<Product[]>('/products')
  return data
}

export const getProductById = async (id: string) => {
  const { data } = await axios.get<Product>(`/products/${id}`)
  return data
}

export const createNewProduct = async (product: ProductPayload) => {
  const { data } = await axios.post<string>('/products', product)
  return data
}

export const editProduct = async (id: string, product: Product) => {
  const { data } = await axios.put<Product>(`/products/${id}`, product)
  return data
}

export const deleteProduct = async (id: string) => {
  const { data } = await axios.delete<Product>(`/products/${id}`)
  return data
}
