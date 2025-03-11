import { getAllProducts } from '@/api/products'
import { useQuery } from '@tanstack/react-query'

export const useProducts = () => {
  const query = useQuery({ queryKey: ['products'], queryFn: getAllProducts })

  return query
}
