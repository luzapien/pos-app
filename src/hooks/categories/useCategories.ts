import { getAllCategories } from '@/api/categories'
import { useQuery } from '@tanstack/react-query'

export const useCategories = () => {
  const query = useQuery({ queryKey: ['categories'], queryFn: getAllCategories })

  return query
}
