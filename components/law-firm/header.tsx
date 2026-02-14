"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Download } from "lucide-react"
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
  { label: "Reviews", href: "#google-reviews" },
  { label: "Contact", href: "#contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.header
      className="sticky top-0 z-50"
      initial={false}
      animate={{
        backgroundColor: scrolled ? "rgba(15, 20, 25, 0.95)" : "rgba(36, 48, 68, 1)",
        backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
      }}
      transition={{ duration: 0.25 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gold rounded-sm flex items-center justify-center transition-shadow duration-300 group-hover:shadow-[0_0_16px_rgba(201,169,98,0.4)]">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-navy" fill="currentColor">
                <path d="M12 2L2 7v2h20V7L12 2zm0 2.5L18 7H6l6-2.5zM4 10v9h2v-7h2v7h2v-7h2v7h2v-7h2v7h2v-9H4zm-2 11v2h20v-2H2z"/>
              </svg>
            </div>
            <div>
              <h1 className="text-white text-xl font-bold tracking-wider font-serif">JOHN MEHTA</h1>
              <p className="text-gold text-[10px] tracking-widest uppercase">Attorney at Law</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "group relative px-4 py-2 text-sm text-white hover:text-gold transition-colors duration-200",
                  item.label === "Home" && "text-gold"
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute bottom-0 left-4 right-4 h-0.5 bg-gold scale-x-0 transition-transform duration-200 origin-left",
                    item.label === "Home" ? "scale-x-100" : "group-hover:scale-x-100"
                  )}
                  aria-hidden
                />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="#" className="hidden md:flex items-center gap-2 text-sm text-gray-300 hover:text-gold transition-colors duration-200">
              <Download className="h-4 w-4" />
              <span>Download CV</span>
            </Link>
            <Link href="#contact" className="hidden md:block">
              <Button className="bg-gold hover:bg-gold-dark text-navy font-semibold px-6 shadow-[0_0_0_rgba(201,169,98,0)] hover:shadow-[0_0_20px_rgba(201,169,98,0.35)] transition-all duration-300">
                Free Consultation
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white hover:text-gold hover:bg-white/5 rounded-md transition-colors duration-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              className="lg:hidden overflow-hidden border-t border-white/10"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div className="pb-4 pt-2">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.03 }}
                  >
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-white hover:text-gold hover:bg-white/5 transition-colors rounded-md"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <div className="px-4 pt-4">
                  <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
                    <Button className="w-full bg-gold hover:bg-gold-dark text-navy font-semibold shadow-[0_0_0_rgba(201,169,98,0)] hover:shadow-[0_0_16px_rgba(201,169,98,0.3)] transition-all duration-300">
                      Free Consultation
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
