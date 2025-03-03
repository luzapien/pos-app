import { useEffect, useState } from 'react'
import { getAllCategories } from '@/api/categories'
import type { Category } from '@/types/categories'

export const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([])

  const newCategoriesValue = categories.map((categorie) => {
    return { key: categorie.id, label: categorie.name }
  })

  useEffect(() => {
    getAllCategories().then((data) => {
      setCategories(data)
    })
  }, [])

  return { categories, newCategoriesValue }
}
