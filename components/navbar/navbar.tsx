'use client'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import Link from 'next/link'
import Logo from '../logo/logo'

const links: { id: number; title: string; href: string }[] = [
  { id: 1, title: 'Home', href: '/' },
  { id: 2, title: 'Portfolio', href: '/portfolio' },
  { id: 3, title: 'About', href: '/about' },
  { id: 4, title: 'Blog', href: '/blog' },
  { id: 5, title: 'Contact', href: '/contact' },
  { id: 6, title: 'Dashboard', href: '/dashboard' },
]

const Navbar = () => {
  return (
    <header className="container flex h-16 items-center justify-between">
      <Link href="/">
        <Logo />
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          {links.map(({ id, title, href }) => (
            <NavigationMenuItem key={id}>
              <Link
                href={href}
                legacyBehavior
                passHref
              >
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  )
}

export default Navbar
