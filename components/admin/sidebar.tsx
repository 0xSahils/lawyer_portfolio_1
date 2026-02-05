"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  LayoutDashboard, 
  Scale, 
  Users, 
  FileText, 
  Trophy, 
  MessageSquare, 
  Settings,
  Mail
} from "lucide-react"
import { cn } from "@/lib/utils"

export const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/practice-areas", label: "Practice Areas", icon: Scale },
  // { href: "/admin/team", label: "Team Members", icon: Users },
  { href: "/admin/blog", label: "Blog Posts", icon: FileText },
  { href: "/admin/case-results", label: "Case Results", icon: Trophy },
  { href: "/admin/testimonials", label: "Testimonials", icon: MessageSquare },
  { href: "/admin/messages", label: "Messages", icon: Mail },
  { href: "/admin/settings", label: "Settings", icon: Settings },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-navy text-white hidden lg:block">
      <div className="p-6 border-b border-navy-light">
        <Link href="/admin" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gold rounded-sm flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-navy" fill="currentColor">
              <path d="M12 2L2 7v2h20V7L12 2zm0 2.5L18 7H6l6-2.5zM4 10v9h2v-7h2v7h2v-7h2v7h2v-7h2v7h2v-9H4zm-2 11v2h20v-2H2z"/>
            </svg>
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-wider font-serif">ADVOKAT</h1>
            <p className="text-gold text-[10px] tracking-widest uppercase">Admin Panel</p>
          </div>
        </Link>
      </div>
      
      <nav className="p-4 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href))
          return (
            <Link
              key={item.href}
              href={item.href}
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
    </aside>
  )
}
