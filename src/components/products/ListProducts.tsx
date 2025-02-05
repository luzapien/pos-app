import { useEffect, useState } from 'react'
import { fetchAllProducts } from '@/services/productService'
import type { Product } from '@/types/products'

const ListProducts = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetchAllProducts().then((data) => {
      setProducts(data)
    })
  }, [])

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  )
}

export { ListProducts }
