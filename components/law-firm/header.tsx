"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Practice", href: "#practice-areas" },
  { label: "Cases", href: "#cases" },
  { label: "Achievements", href: "#achievements" },
  { label: "Gallery", href: "#gallery" },
  { label: "Blog", href: "#blogs" },
  { label: "Contact", href: "#contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-navy-light sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gold rounded-sm flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-navy" fill="currentColor">
                <path d="M12 2L2 7v2h20V7L12 2zm0 2.5L18 7H6l6-2.5zM4 10v9h2v-7h2v7h2v-7h2v7h2v-7h2v7h2v-9H4zm-2 11v2h20v-2H2z"/>
              </svg>
            </div>
            <div>
              <h1 className="text-white text-xl font-bold tracking-wider font-serif">JOHN MEHTA</h1>
              <p className="text-gold text-[10px] tracking-widest uppercase">Attorney at Law</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "px-4 py-2 text-sm text-white hover:text-gold transition-colors",
                  item.label === "Home" && "text-gold"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions - Free Consultation Button */}
          <div className="flex items-center gap-4">
            <Link href="#contact" className="hidden md:block">
              <Button className="bg-gold hover:bg-gold-dark text-navy font-semibold px-6">
                Free Consultation
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white hover:text-gold hover:bg-transparent"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden pb-4 border-t border-navy">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block px-4 py-3 text-white hover:text-gold hover:bg-navy transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-gold hover:bg-gold-dark text-navy font-semibold">
                  Free Consultation
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
