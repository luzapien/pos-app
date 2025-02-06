import { StrictMode } from 'react'
import { HeroUIProvider } from '@heroui/react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './globals.css'

createRoot(document.getElementById('root') as Element).render(
  <StrictMode>
    <HeroUIProvider>
      <App />
    </HeroUIProvider>
  </StrictMode>,
)
