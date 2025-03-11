import { HeroUIProvider, ToastProvider } from '@heroui/react'
import { useHref, useNavigate } from 'react-router'

type ProvidersProps = {
  children: React.ReactNode
}

export const Providers = ({ children }: ProvidersProps) => {
  const navigate = useNavigate()
  return (
    <HeroUIProvider navigate={navigate} useHref={useHref}>
      <ToastProvider placement='top-right' />
      {children}
    </HeroUIProvider>
  )
}
