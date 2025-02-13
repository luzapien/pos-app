import { HomeView } from '@/router/views/home/Home'
import { ProductsView } from '@/router/views/products/Products'
import { Route, Routes } from 'react-router'
import { GeneralLayout } from './layouts/GeneralLayout'
import { ProductsFormView } from './views/products/ProductsForm'

export const AppRoutes = () => (
  <Routes>
    <Route element={<GeneralLayout />}>
      <Route path="/" element={<HomeView />} />
      <Route path="/products" element={<ProductsView />} />
      <Route path="/products/new" element={<ProductsFormView />} />
    </Route>
  </Routes>
)
