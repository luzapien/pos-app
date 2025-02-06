import { HomeView } from '@/router/views/home/Home'
import { ProductsView } from '@/router/views/products/Products'
import { Route, Routes } from 'react-router'

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomeView />} />
    <Route path="/products" element={<ProductsView />} />
  </Routes>
)
