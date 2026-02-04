import { sql } from "@/lib/db"
import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET() {
  try {
    const migrationPath = path.join(process.cwd(), "scripts", "migration-complete-admin.sql")
    const migrationSql = fs.readFileSync(migrationPath, "utf8")

    // Split by semicolons to run multiple statements if needed, or just run as one block if supported
    // Neon usually supports multiple statements in one call
    await sql(migrationSql)

    return NextResponse.json({ success: true, message: "Migration executed successfully" })
  } catch (error) {
    console.error("Migration error:", error)
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 })
  }
}
