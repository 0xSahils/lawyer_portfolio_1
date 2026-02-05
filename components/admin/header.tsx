"use client"

import { User } from "@/lib/auth"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"
import { logout } from "@/app/admin/actions"
import { MobileSidebar } from "./mobile-sidebar"

export function AdminHeader({ user }: { user: User }) {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-40">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <MobileSidebar />
          <h1 className="text-xl font-semibold text-navy font-serif">Dashboard</h1>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-sm font-medium text-navy">{user.name}</p>
            <p className="text-xs text-muted-foreground">{user.role}</p>
          </div>
          <form action={logout}>
            <Button variant="ghost" size="icon" type="submit" className="text-muted-foreground hover:text-navy">
              <LogOut className="h-5 w-5" />
              <span className="sr-only">Logout</span>
            </Button>
          </form>
        </div>
      </div>
    </header>
  )
}
