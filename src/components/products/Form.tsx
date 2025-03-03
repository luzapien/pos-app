import { createNewProduct } from '@/api/products'
import { productSchema, type Product } from '@/schemas/product'
import { addToast, Button, Form, Input, Select, SelectItem } from '@heroui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useCategories } from '@/hooks/categories/useCategories'

export const ProductsForm = () => {
  const form = useForm<Product>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: '',
      category_id: '',
      packaging: '',
      price: 0,
    },
  })

  const { newCategoriesValue } = useCategories()

  const errors = form.formState.errors

  const onSubmit = form.handleSubmit(async (values) => {
    try {
      const newProduct = {
        name: values.name,
        category_id: values.category_id,
        packaging: values.packaging,
        price: values.price,
      }
      const respose = await createNewProduct(newProduct)
      if (respose) {
        addToast({
          title: 'Success',
          description: 'Product created successfully',
          color: 'success',
        })
      }
      form.reset()
    } catch (error) {
      console.log('error in form submit', error)
      addToast({
        title: 'Error',
        description: 'Error creating product',
        color: 'danger',
      })
    }
  })

  return (
    <Form className="gap-8" onSubmit={onSubmit}>
      <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2">
        <Input label="Name" placeholder="Ex. Milk" {...form.register('name')} isRequired />
        {errors.name && <span>{errors.name.message}</span>}
        <Select label="Category" {...form.register('category_id')} placeholder="Select a Category">
          {newCategoriesValue.map((newValue) => (
            <SelectItem key={newValue.key}>{newValue.label}</SelectItem>
          ))}
        </Select>
        {errors.category_id && <span>This field is required</span>}
        <Input label="Packaging" placeholder="Ex. 1 L bottle" {...form.register('packaging')} />
        {errors.name && <span>This field is required</span>}
        <Input
          type="number"
          label="Price"
          placeholder="0.00"
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-small text-default-400">$</span>
            </div>
          }
          {...form.register('price')}
        />
        {errors.price && <span>{errors.price.message}</span>}
      </div>
      <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2">
        <div />
        <Button type="submit" color="primary" variant="bordered">
          Save
        </Button>
      </div>
    </Form>
  )
}
