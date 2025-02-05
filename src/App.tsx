import { HomeView } from '@/components/home/HomeView'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ListProducts } from '@/components/products/ListProducts'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/products" element={<ListProducts />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
