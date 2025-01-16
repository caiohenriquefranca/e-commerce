"use client"

import { Search, X } from 'lucide-react'
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export function MobileSearch() {
  const [isExpanded, setIsExpanded] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isExpanded && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isExpanded])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsExpanded(false)
      }
    }

    if (isExpanded) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isExpanded])

  return (
    <div ref={containerRef} className="sm:hidden relative">
      <div
        className={cn(
          "absolute right-0 top-1/2 -translate-y-1/2 flex items-center transition-all duration-200",
          isExpanded ? "w-[180px] opacity-100 pointer-events-auto" : "w-10 opacity-0 pointer-events-none"
        )}
      >
        <Search className="absolute left-2 z-10 h-4 w-4 text-muted-foreground" />
        <Input
          ref={inputRef}
          type="search"
          placeholder="Pesquisar..."
          className="w-full pl-8 pr-8 h-9"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-0 h-9 w-9 p-0"
          onClick={() => setIsExpanded(false)}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsExpanded(true)}
        className={cn(
          "relative transition-opacity duration-200",
          isExpanded && "opacity-0 pointer-events-none"
        )}
      >
        <Search className="h-5 w-5" />
        <span className="sr-only">Pesquisar</span>
      </Button>
    </div>
  )
}

