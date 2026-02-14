import { sql } from "@/lib/db"
import { SectionHeaderLight } from "@/components/law-firm/section-header"
import { CasesGrid, type CaseResultWithArea } from "@/components/law-firm/cases-grid"

async function getCaseResults(): Promise<CaseResultWithArea[]> {
  try {
    // Use columns from setup-database.sql: result_amount, no year (use created_at)
    const results = await sql`
      SELECT 
        cr.id,
        cr.title,
        cr.result_amount AS result,
        cr.description,
        EXTRACT(YEAR FROM cr.created_at)::text AS year,
        pa.title AS practice_area_title,
        pa.icon AS practice_area_icon
      FROM case_results cr
      LEFT JOIN practice_areas pa ON cr.practice_area_id = pa.id
      ORDER BY cr.created_at DESC
      LIMIT 6
    `
    return results as CaseResultWithArea[]
  } catch (error) {
    console.error("Error fetching case results:", error)
    return []
  }
}

export async function CasesSection() {
  const cases = await getCaseResults()

  if (cases.length === 0) return null

  return (
    <section id="cases" className="py-24 bg-navy">
      <div className="container mx-auto px-4">
        <SectionHeaderLight
          overline="Track Record"
          title="Landmark Legal Victories"
          subtitle="Notable cases that showcase commitment to justice and excellence in legal practice."
          className="mb-16"
        />
        <CasesGrid cases={cases} />
      </div>
    </section>
  )
}
