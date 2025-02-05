import { getAllProducts } from '@/api/productApi'

export const fetchAllProducts = async () => {
  try {
    const products = await getAllProducts()
    return products
  } catch (error) {
    console.log('error in service', error)
  }
}
