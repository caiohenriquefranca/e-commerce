"use client"

import { useState } from "react"
import { X } from 'lucide-react'

import { Button } from "@/components/ui/button"

export function PromoHeader() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="relative bg-black text-white py-2 text-center text-sm">
      <div className="container flex items-center justify-center px-4">
        <p className="mr-8">
          <span className="inline-flex gap-1.5">
            🎉
            <span className="sm:hidden">-20% at all!</span>
            <span className="hidden sm:inline">Enjoy 20% off storewide!</span>
          </span>
          <span className="hidden sm:inline ml-1.5">
            Use the code: <span className="font-semibold">SAVE20</span>
          </span>
        </p>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 text-white hover:text-white hover:bg-white/20"
          onClick={() => setIsVisible(false)}
          aria-label="Fechar banner promocional"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

