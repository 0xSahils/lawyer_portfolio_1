"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { navItems } from "./sidebar"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function MobileSidebar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden text-navy hover:bg-navy-light/10">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72 bg-navy text-white p-0 border-r-navy-light">
        <SheetHeader className="p-6 border-b border-navy-light">
          <SheetTitle className="text-left text-white">
            <Link href="/admin" className="flex items-center gap-3" onClick={() => setOpen(false)}>
              <div className="w-8 h-8 bg-gold rounded-sm flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-navy" fill="currentColor">
                  <path d="M12 2L2 7v2h20V7L12 2zm0 2.5L18 7H6l6-2.5zM4 10v9h2v-7h2v7h2v-7h2v7h2v-7h2v7h2v-9H4zm-2 11v2h20v-2H2z"/>
                </svg>
              </div>
              <div>
                <h1 className="text-base font-bold tracking-wider font-serif">ADVOKAT</h1>
                <p className="text-gold text-[8px] tracking-widest uppercase">Admin Panel</p>
              </div>
            </Link>
          </SheetTitle>
        </SheetHeader>
        
        <nav className="p-4 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href))
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                  isActive 
                    ? "bg-gold text-navy font-semibold" 
                    : "text-gray-300 hover:bg-navy-light hover:text-white"
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </Link>
            )
          })}
        </nav>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-navy-light">
          <Link 
            href="/" 
            className="flex items-center justify-center gap-2 px-4 py-2 text-sm text-gray-300 hover:text-gold transition-colors"
          >
            View Website
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}
