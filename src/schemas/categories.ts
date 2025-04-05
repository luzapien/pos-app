import { z } from 'zod'

const requiredStringField = z.string().min(1, 'This field is required')

export const categorySchema = z.object({
  name: requiredStringField,
})
