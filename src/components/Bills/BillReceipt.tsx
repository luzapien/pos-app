import { useState } from 'react'
import { Card, CardBody, CardFooter, CardHeader, Divider, Input } from '@heroui/react'
import { ReceiptIcon } from 'lucide-react'
import type { Product } from '@/types/products'

type BillReceiptProps = {
  products: Product[]
}

export const BillReceipt = ({ products }: BillReceiptProps) => {
  const initialTotals = products.reduce(
    (acc, product) => {
      acc[product.id] = product.price
      return acc
    },
    {} as { [key: string]: number },
  )
  const [totalByProduct, setTotalByProduct] = useState<{ [key: string]: number }>(initialTotals)
  const [grandTotal, setGrandTotal] = useState(0)

  const getTotalByProduct = (productId: string, inputValue: string, price: number) => {
    const total = Number(inputValue) * price

    setTotalByProduct((prev) => ({ ...prev, [productId]: total }))
    setTotalByProduct((prev) => {
      const updatedTotals = { ...prev, [productId]: total }

      const newGrandTotal = Object.values(updatedTotals).reduce((sum, val) => sum + val, 0)
      setGrandTotal(newGrandTotal)

      return updatedTotals
    })
  }

  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <ReceiptIcon />
        <div className="flex flex-col">
          <p className="text-md">Receipt</p>
          <p className="text-small text-default-500">Point Of Sale </p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <div className="grid grid-cols-2 gap-2 p-2 sm:grid-cols-4">
          <p>Product</p>
          <p>Quantity</p>
          <p>Price</p>
          <p>Subtotal</p>
        </div>
        {products.map((product) => (
          <div key={product.id} className="grid grid-cols-2 gap-4 p-2 sm:grid-cols-4">
            <p className="content-center">{product.name}</p>
            <Input
              type="number"
              defaultValue="0"
              onChange={(e) => getTotalByProduct(product.id, e.target.value, product.price)}
            />
            <p className="content-center">$ {product.price}</p>
            <p className="content-center">$ {totalByProduct[product.id]}</p>
          </div>
        ))}
      </CardBody>
      <Divider />
      <CardFooter className="justify-end p-6">
        <div className="flex">
          <p>Total: </p>
          <p>${grandTotal}</p>
        </div>
      </CardFooter>
    </Card>
  )
}
