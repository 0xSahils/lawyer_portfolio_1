"use server"

import { sql } from "@/lib/db"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function createCaseResult(formData: FormData) {
  const title = formData.get("title") as string
  const description = formData.get("description") as string
  const result = formData.get("result") as string
  const year = parseInt(formData.get("year") as string)
  const practice_area_id = formData.get("practice_area_id") ? parseInt(formData.get("practice_area_id") as string) : null

  try {
    await sql`
      INSERT INTO case_results (title, description, result, year, practice_area_id)
      VALUES (${title}, ${description}, ${result}, ${year}, ${practice_area_id})
    `
    revalidatePath("/admin/case-results")
    revalidatePath("/")
  } catch (error) {
    console.error("Error creating case result:", error)
    return { error: "Failed to create case result" }
  }
  
  redirect("/admin/case-results")
}

export async function updateCaseResult(id: number, formData: FormData) {
  const title = formData.get("title") as string
  const description = formData.get("description") as string
  const result = formData.get("result") as string
  const year = parseInt(formData.get("year") as string)
  const practice_area_id = formData.get("practice_area_id") ? parseInt(formData.get("practice_area_id") as string) : null

  try {
    await sql`
      UPDATE case_results 
      SET title = ${title}, description = ${description}, result = ${result}, year = ${year}, practice_area_id = ${practice_area_id}
      WHERE id = ${id}
    `
    revalidatePath("/admin/case-results")
    revalidatePath("/")
  } catch (error) {
    console.error("Error updating case result:", error)
    return { error: "Failed to update case result" }
  }
  
  redirect("/admin/case-results")
}

export async function deleteCaseResult(id: number) {
  try {
    await sql`DELETE FROM case_results WHERE id = ${id}`
    revalidatePath("/admin/case-results")
    revalidatePath("/")
  } catch (error) {
    console.error("Error deleting case result:", error)
  }
}
