"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { loginAction } from "@/app/admin/login/actions"

export function LoginForm() {
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(formData: FormData) {
    setIsLoading(true)
    setError(null)
    
    const result = await loginAction(formData)
    
    if (result?.error) {
      setError(result.error)
      setIsLoading(false)
    } else {
      router.push("/admin")
      router.refresh()
    }
  }

  return (
    <form action={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="email" className="text-navy">Email Address</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="admin@advokat.com"
          required
          className="border-border focus:border-gold focus:ring-gold"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="password" className="text-navy">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="••••••••"
          required
          className="border-border focus:border-gold focus:ring-gold"
        />
      </div>
      
      {error && (
        <div className="p-3 bg-red-50 text-red-700 text-sm rounded-lg">
          {error}
        </div>
      )}
      
      <Button 
        type="submit" 
        disabled={isLoading}
        className="w-full bg-gold hover:bg-gold-dark text-navy font-semibold py-6"
      >
        {isLoading ? "Signing in..." : "Sign In"}
      </Button>
    </form>
  )
}
