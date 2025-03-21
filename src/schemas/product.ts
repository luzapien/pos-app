import { z } from 'zod'

const requiredStringField = z.string().min(1, 'This field is required')

export const productSchema = z.object({
  name: requiredStringField,
  category_id: z.string(),
  packaging: z.string(),
  price: z.number({ coerce: true }),
})
