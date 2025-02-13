import { useEffect, useState } from 'react'
import { getAllCategories } from '@/api/categories'
import { productSchema, type Product } from '@/schemas/product'
import { Button, Form, Input, Select, SelectItem } from '@heroui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import type { Category } from '@/types/categories'

export const ProductsForm = () => {
  const form = useForm<Product>({
    resolver: zodResolver(productSchema),
  })

  const errors = form.formState.errors

  const [categories, setCastegories] = useState<Category[]>([])

  const onSubmit = form.handleSubmit((values) => {
    console.log('val', values)
  })

  const newCategoriesValue = categories.map((category) => {
    return { key: category.id, label: category.name }
  })

  useEffect(() => {
    getAllCategories().then((data) => {
      setCastegories(data)
    })
  }, [])

  return (
    <Form onSubmit={onSubmit}>
      <div className=" w-full grid grid-cols-2 gap-12">
        <Input label="Name" placeholder="Ex. Milk" {...form.register('name')} isRequired />
        {errors.name && <span>{errors.name.message}</span>}
        <Select
          isRequired
          label="Category"
          {...form.register('category', { required: true })}
          placeholder="Select a Category"
        >
          {newCategoriesValue.map((newValue) => (
            <SelectItem key={newValue.key}>{newValue.label}</SelectItem>
          ))}
        </Select>
        {errors.category && <span>This field is required</span>}
        <Input label="Packaging" placeholder="Ex. 1 L bottle" {...form.register('packaging')} />
        {errors.name && <span>This field is required</span>}
        <Input
          type="number"
          label="Price"
          placeholder="0.00"
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">$</span>
            </div>
          }
          {...form.register('price')}
        />
        {errors.price && <span>{errors.price.message}</span>}
      </div>
      <Button type="submit" variant="bordered">
        Save
      </Button>
    </Form>
  )
}
