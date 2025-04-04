import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/react'
import { StoreIcon } from 'lucide-react'
import { Outlet, useLocation } from 'react-router'

export const GeneralLayout = () => {
  const { pathname } = useLocation()

  return (
    <>
      <Navbar>
        <NavbarBrand>
          <Link color="foreground" href="/">
            <StoreIcon />
            <p className="font-bold text-inherit">Point Of Sale</p>
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden gap-4 sm:flex" justify="center">
          <NavbarItem isActive={pathname === '/products'}>
            <Link color="foreground" href="/products">
              Products
            </Link>
          </NavbarItem>
          <NavbarItem isActive={pathname === '/categories'}>
            <Link color="foreground" href="/categories">
              Categories
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/bills/new">
              New Bill
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </>
  )
}
