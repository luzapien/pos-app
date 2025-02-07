import { Button } from '@heroui/react'
import { useNavigate } from 'react-router'
import { ProductsTable } from '@/components/products/Table'

export const ProductsView = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <h1>Products</h1>
        <Button color="primary" size="sm" onPress={() => navigate('/products/new')}>
          Add New Product
        </Button>
      </div>
      <ProductsTable />
    </div>
  )
}
