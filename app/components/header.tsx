import Link from "next/link"
import { ShoppingCart, User } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { MobileMenu } from "./mobile-menu"
import { MobileSearch } from "./mobile-search"
import { PromoHeader } from "./promo-header"
import { Search } from 'lucide-react'

export function Header() {
  return (
    <div className="sticky top-0 z-50 w-full">
      <PromoHeader />
      <header className="border-b bg-white">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-4">
            <div className="flex items-center gap-4 lg:gap-6">
              <MobileMenu />
              <Link href="/" className="flex items-center gap-2">
                <span className="text-xl font-black">SHOP.CO</span>
              </Link>
              <NavigationMenu className="hidden md:flex"> 
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Female</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] lg:w-[600px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-4">
                          <Link href="/categories/women-new" legacyBehavior passHref>
                            <NavigationMenuLink className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                              <div className="mb-2 mt-4 text-lg font-medium">New Arrivals</div>
                              <p className="text-sm leading-tight text-muted-foreground">
                                Check out our latest collection for women
                              </p>
                            </NavigationMenuLink>
                          </Link>
                        </li>
                        <li>
                          <Link href="/categories/women-clothing" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Clothing</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Dresses, tops, pants and more
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link href="/categories/women-shoes" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Shoes</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Sneakers, heels, boots and sandals
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link href="/categories/women-accessories" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Accessories</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Bags, jewelry and other accessories
                            </p>
                          </Link>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Male</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] lg:w-[600px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-4">
                          <Link href="/categories/men-new" legacyBehavior passHref>
                            <NavigationMenuLink className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                              <div className="mb-2 mt-4 text-lg font-medium">New Arrivals</div>
                              <p className="text-sm leading-tight text-muted-foreground">
                                Discover our latest collection for men
                              </p>
                            </NavigationMenuLink>
                          </Link>
                        </li>
                        <li>
                          <Link href="/categories/men-clothing" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Clothing</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Shirts, pants, jackets and more
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link href="/categories/men-shoes" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Shoes</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Sneakers, boots, loafers and more
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link href="/categories/men-accessories" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Accessories</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Watches, bags and other accessories
                            </p>
                          </Link>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/sale" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                        Promotions
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <div className="flex items-center gap-2">
              <div className="hidden sm:block relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Pesquisar produtos"
                  className="w-[200px] pl-8 md:w-[200px] lg:w-[300px] border-none bg-[#F0F0F0]"
                />
              </div>
              <div className="flex items-center gap-2">
                <MobileSearch />
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-primary text-xs font-bold text-primary-foreground flex items-center justify-center">
                    3
                  </span>
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <User className="h-5 w-5" />
                      <span className="sr-only">Toggle user menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Orders</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Log out</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

