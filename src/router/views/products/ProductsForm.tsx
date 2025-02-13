import { Card, CardBody, CardHeader } from '@heroui/react'
import { ProductsForm } from '@/components/products/Form'

export const ProductsFormView = () => {
          return (
    <Card>
      <CardHeader className="flex gap-3">
        <h1>Product Form</h1>
      </CardHeader>
      <CardBody>
        <ProductsForm />
      </CardBody>
    </Card>
  )
}
