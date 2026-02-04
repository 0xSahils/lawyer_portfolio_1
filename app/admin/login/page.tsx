import { getSession } from "@/lib/auth"
import { redirect } from "next/navigation"
import { LoginForm } from "@/components/admin/login-form"

export default async function LoginPage() {
  const session = await getSession()
  
  if (session) {
    redirect("/admin")
  }

  return (
    <div className="min-h-screen bg-navy flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gold rounded-sm flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-8 h-8 text-navy" fill="currentColor">
                <path d="M12 2L2 7v2h20V7L12 2zm0 2.5L18 7H6l6-2.5zM4 10v9h2v-7h2v7h2v-7h2v7h2v-7h2v7h2v-9H4zm-2 11v2h20v-2H2z"/>
              </svg>
            </div>
          </div>
          <h1 className="text-2xl font-bold text-white font-serif">ADVOKAT</h1>
          <p className="text-gold text-sm tracking-widest uppercase">Admin Panel</p>
        </div>

        {/* Login Card */}
        <div className="bg-background rounded-lg p-8 shadow-xl">
          <h2 className="text-xl font-bold text-navy font-serif text-center mb-6">Sign In</h2>
          <LoginForm />
        </div>

        <p className="text-center text-gray-400 text-sm mt-6">
          Default credentials: admin@advokat.com / admin123
        </p>
      </div>
    </div>
  )
}
