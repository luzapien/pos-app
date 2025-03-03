import { z } from 'zod'

const requiredStringField = z.string().min(1, 'This field is required')

export const productSchema = z.object({
  id: z.string(),
  name: requiredStringField,
  category_id: z.string(),
  packaging: z.string(),
  price: z.number({ coerce: true }),
})

export type Product = z.infer<typeof productSchema>

export type NewProduct = Omit<Product, 'id' | 'category'>
