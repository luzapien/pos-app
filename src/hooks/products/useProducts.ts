import { useCallback, useEffect, useState } from 'react'
import { getAllProducts } from '@/api/products'
import type { Product } from '@/types/products'

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([])

  const getProducts = useCallback(() => {
    getAllProducts().then((data) => {
      setProducts(data)
    })
  }, [])

  useEffect(() => {
    getProducts()
  }, [getProducts])
  return { products, getProducts }
}
