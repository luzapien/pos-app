import { useState } from 'react'
import { Card, CardBody, CardFooter } from '@heroui/react'
import type { Product } from '@/types/products'
import { useProducts } from '@/hooks/products/useProducts'
import { BillReceipt } from './BillReceipt'

export const NewBill = () => {
  const [productsAdded, setProductsAdded] = useState<Product[]>()

  const { data: products } = useProducts()

  return (
    <>
      <div className="flex gap-4">
        <BillReceipt products={productsAdded || []} />
        <div className="grid grid-cols-2 gap-2 p-2 sm:grid-cols-4">
          {products?.map((item) => (
            /* eslint-disable no-console */
            <Card
              key={item.id}
              isPressable
              shadow="sm"
              onPress={() => setProductsAdded((prev) => [...(prev || []), item])}
            >
              <CardBody className="overflow-visible p-0">
                <div className="w-full content-center p-2">
                  <p>{item.name}</p>
                </div>
              </CardBody>
              <CardFooter className="justify-center text-small">
                <p>${item.price}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  )
}
