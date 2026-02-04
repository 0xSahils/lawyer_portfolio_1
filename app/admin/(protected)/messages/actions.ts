"use server"

import { sql } from "@/lib/db"
import { revalidatePath } from "next/cache"

export async function markMessageAsRead(messageId: number) {
  try {
    await sql`UPDATE contact_submissions SET read = true WHERE id = ${messageId}`
    revalidatePath("/admin/messages")
    revalidatePath("/admin")
  } catch (error) {
    console.error("Error marking message as read:", error)
  }
}

export async function deleteMessage(messageId: number) {
  try {
    await sql`DELETE FROM contact_submissions WHERE id = ${messageId}`
    revalidatePath("/admin/messages")
    revalidatePath("/admin")
  } catch (error) {
    console.error("Error deleting message:", error)
  }
}
