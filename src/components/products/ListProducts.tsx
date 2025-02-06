import { useEffect, useState } from 'react'
import { getAllProducts } from '@/api/products'
import type { Product } from '@/types/products'

export const ListProducts = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    getAllProducts()
      .then((data) => {
        setProducts(data)
      })
  }, [])

  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  )
}
