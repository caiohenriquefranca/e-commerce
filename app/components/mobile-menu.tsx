"use client"

import { Menu } from 'lucide-react'
import Link from "next/link"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { 
  Sheet, 
  SheetContent, 
  SheetHeader,
  SheetTitle,
  SheetTrigger 
} from "@/components/ui/sheet"

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-4 py-4">
          <Link
            href="/"
            className="text-sm font-medium"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <div className="flex flex-col gap-2">
            <div className="text-sm font-medium">Women</div>
            <Link
              href="/categories/women-new"
              className="text-sm text-muted-foreground"
              onClick={() => setOpen(false)}
            >
              New Arrivals
            </Link>
            <Link
              href="/categories/women-clothing"
              className="text-sm text-muted-foreground"
              onClick={() => setOpen(false)}
            >
              Clothing
            </Link>
            <Link
              href="/categories/women-shoes"
              className="text-sm text-muted-foreground"
              onClick={() => setOpen(false)}
            >
              Shoes
            </Link>
            <Link
              href="/categories/women-accessories"
              className="text-sm text-muted-foreground"
              onClick={() => setOpen(false)}
            >
              Accessories
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-sm font-medium">Men</div>
            <Link
              href="/categories/men-new"
              className="text-sm text-muted-foreground"
              onClick={() => setOpen(false)}
            >
              New Arrivals
            </Link>
            <Link
              href="/categories/men-clothing"
              className="text-sm text-muted-foreground"
              onClick={() => setOpen(false)}
            >
              Clothing
            </Link>
            <Link
              href="/categories/men-shoes"
              className="text-sm text-muted-foreground"
              onClick={() => setOpen(false)}
            >
              Shoes
            </Link>
            <Link
              href="/categories/men-accessories"
              className="text-sm text-muted-foreground"
              onClick={() => setOpen(false)}
            >
              Accessories
            </Link>
          </div>
          <Link
            href="/sale"
            className="text-sm font-medium text-red-600"
            onClick={() => setOpen(false)}
          >
            Sale
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}

