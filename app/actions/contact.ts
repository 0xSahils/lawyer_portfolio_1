"use server"

import { sql } from "@/lib/db"

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string | null
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  if (!name || !email || !subject || !message) {
    return { success: false, error: "Please fill in all required fields." }
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { success: false, error: "Please enter a valid email address." }
  }

  try {
    await sql`
      INSERT INTO contact_submissions (name, email, phone, subject, message)
      VALUES (${name}, ${email}, ${phone || null}, ${subject}, ${message})
    `
    return { success: true }
  } catch (error) {
    console.error("Error submitting contact form:", error)
    return { success: false, error: "Failed to submit form. Please try again later." }
  }
}
