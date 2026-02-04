import { cookies } from "next/headers"
import { sql } from "@/lib/db"
import bcrypt from "bcryptjs"

export type User = {
  id: number
  email: string
  name: string
  role: string
}

export type Session = {
  user: User
}

const SESSION_COOKIE = "admin_session"
const SESSION_DURATION = 60 * 60 * 24 * 7 // 7 days in seconds

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12)
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword)
}

export async function createSession(userId: number): Promise<string> {
  // Generate a simple session token
  const sessionToken = crypto.randomUUID()
  const expiresAt = new Date(Date.now() + SESSION_DURATION * 1000)
  
  // Store session in database
  await sql`
    UPDATE admin_users 
    SET session_token = ${sessionToken}, session_expires = ${expiresAt.toISOString()}
    WHERE id = ${userId}
  `
  
  // Set cookie
  const cookieStore = await cookies()
  cookieStore.set(SESSION_COOKIE, sessionToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    expires: expiresAt,
    path: "/",
  })
  
  return sessionToken
}

export async function getSession(): Promise<Session | null> {
  const cookieStore = await cookies()
  const sessionToken = cookieStore.get(SESSION_COOKIE)?.value
  
  if (!sessionToken) {
    return null
  }
  
  try {
    const users = await sql`
      SELECT id, email, name, role, session_expires
      FROM admin_users 
      WHERE session_token = ${sessionToken}
    `
    
    if (users.length === 0) {
      return null
    }
    
    const user = users[0] as { id: number; email: string; name: string; role: string; session_expires: string }
    
    // Check if session has expired
    if (new Date(user.session_expires) < new Date()) {
      await destroySession()
      return null
    }
    
    return {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
    }
  } catch (error) {
    console.error("Error getting session:", error)
    return null
  }
}

export async function destroySession(): Promise<void> {
  const cookieStore = await cookies()
  const sessionToken = cookieStore.get(SESSION_COOKIE)?.value
  
  if (sessionToken) {
    // Clear session from database
    await sql`
      UPDATE admin_users 
      SET session_token = NULL, session_expires = NULL
      WHERE session_token = ${sessionToken}
    `
  }
  
  // Delete cookie
  cookieStore.delete(SESSION_COOKIE)
}

export async function login(email: string, password: string): Promise<{ success: boolean; error?: string }> {
  try {
    const users = await sql`
      SELECT id, email, name, role, password_hash
      FROM admin_users 
      WHERE email = ${email}
    `
    
    if (users.length === 0) {
      return { success: false, error: "Invalid email or password" }
    }
    
    const user = users[0] as { id: number; password_hash: string }
    const passwordValid = await verifyPassword(password, user.password_hash)
    
    if (!passwordValid) {
      return { success: false, error: "Invalid email or password" }
    }
    
    await createSession(user.id)
    return { success: true }
  } catch (error) {
    console.error("Login error:", error)
    return { success: false, error: "An error occurred during login" }
  }
}
