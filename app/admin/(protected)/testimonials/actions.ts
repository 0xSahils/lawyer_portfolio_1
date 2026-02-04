"use server"

import { sql } from "@/lib/db"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function createTestimonial(formData: FormData) {
  const client_name = formData.get("client_name") as string
  const client_position = formData.get("client_position") as string
  const content = formData.get("content") as string
  const rating = parseInt(formData.get("rating") as string)
  const featured = formData.get("featured") === "on"

  try {
    await sql`
      INSERT INTO testimonials (client_name, client_position, content, rating, featured)
      VALUES (${client_name}, ${client_position || null}, ${content}, ${rating}, ${featured})
    `
    revalidatePath("/admin/testimonials")
    revalidatePath("/")
  } catch (error) {
    console.error("Error creating testimonial:", error)
    return { error: "Failed to create testimonial" }
  }
  
  redirect("/admin/testimonials")
}

export async function updateTestimonial(id: number, formData: FormData) {
  const client_name = formData.get("client_name") as string
  const client_position = formData.get("client_position") as string
  const content = formData.get("content") as string
  const rating = parseInt(formData.get("rating") as string)
  const featured = formData.get("featured") === "on"

  try {
    await sql`
      UPDATE testimonials 
      SET client_name = ${client_name}, client_position = ${client_position || null}, content = ${content}, rating = ${rating}, featured = ${featured}
      WHERE id = ${id}
    `
    revalidatePath("/admin/testimonials")
    revalidatePath("/")
  } catch (error) {
    console.error("Error updating testimonial:", error)
    return { error: "Failed to update testimonial" }
  }
  
  redirect("/admin/testimonials")
}

export async function deleteTestimonial(id: number) {
  try {
    await sql`DELETE FROM testimonials WHERE id = ${id}`
    revalidatePath("/admin/testimonials")
    revalidatePath("/")
  } catch (error) {
    console.error("Error deleting testimonial:", error)
  }
}
