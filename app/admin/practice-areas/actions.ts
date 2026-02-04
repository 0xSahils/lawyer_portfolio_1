"use server"

import { sql } from "@/lib/db"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function createPracticeArea(formData: FormData) {
  const title = formData.get("title") as string
  const slug = formData.get("slug") as string
  const description = formData.get("description") as string
  const icon = formData.get("icon") as string
  const content = formData.get("content") as string

  try {
    await sql`
      INSERT INTO practice_areas (title, slug, description, icon, content)
      VALUES (${title}, ${slug}, ${description}, ${icon}, ${content || null})
    `
    revalidatePath("/admin/practice-areas")
    revalidatePath("/practice-areas")
    revalidatePath("/")
  } catch (error) {
    console.error("Error creating practice area:", error)
    return { error: "Failed to create practice area" }
  }
  
  redirect("/admin/practice-areas")
}

export async function updatePracticeArea(id: number, formData: FormData) {
  const title = formData.get("title") as string
  const slug = formData.get("slug") as string
  const description = formData.get("description") as string
  const icon = formData.get("icon") as string
  const content = formData.get("content") as string

  try {
    await sql`
      UPDATE practice_areas 
      SET title = ${title}, slug = ${slug}, description = ${description}, icon = ${icon}, content = ${content || null}
      WHERE id = ${id}
    `
    revalidatePath("/admin/practice-areas")
    revalidatePath("/practice-areas")
    revalidatePath("/")
  } catch (error) {
    console.error("Error updating practice area:", error)
    return { error: "Failed to update practice area" }
  }
  
  redirect("/admin/practice-areas")
}

export async function deletePracticeArea(id: number) {
  try {
    await sql`DELETE FROM practice_areas WHERE id = ${id}`
    revalidatePath("/admin/practice-areas")
    revalidatePath("/practice-areas")
    revalidatePath("/")
  } catch (error) {
    console.error("Error deleting practice area:", error)
  }
}
