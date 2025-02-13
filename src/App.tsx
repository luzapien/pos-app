import { BrowserRouter } from 'react-router'
import { Providers } from './components/providers'
import { AppRoutes } from './router/routes'

function App() {
  return (
    <BrowserRouter>
      <Providers>
        <AppRoutes />
      </Providers>
    </BrowserRouter>
  )
}

export default App
