'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '../ui/navigation-menu';
import { usePathname } from 'next/navigation';

type Props = {
  cartString?: string;
};

const navLinks: { title: string; href: string }[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Shop',
    href: '/shop',
  },
  {
    title: 'About',
    href: '/about',
  },
];

function NavMenu({ cartString = 'Cart' }: Props) {
  const pathname = usePathname();
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navLinks.map((link) => (
          <NavigationMenuItem key={`nav_${link.title}`}>
            <Link href={link.href} legacyBehavior passHref>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle({
                  className: cn(
                    'bg-muted',
                    'hover:bg-white',
                    pathname == link.href && 'bg-white',
                  ),
                })}
              >
                {link.title}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
        <NavigationMenuItem key={`nav_cart`}>
          <Link href={'/cart'} legacyBehavior passHref>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle({
                className: cn(
                  'bg-muted',
                  'hover:bg-white',
                  pathname == '/cart' && 'bg-white',
                ),
              })}
            >
              {cartString}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default NavMenu;
