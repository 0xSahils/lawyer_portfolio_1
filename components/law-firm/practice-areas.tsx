import { sql, type PracticeArea } from "@/lib/db"
import { SectionHeader } from "@/components/law-firm/section-header"
import { PracticeAreasGrid } from "@/components/law-firm/practice-areas-grid"

async function getPracticeAreas(): Promise<PracticeArea[]> {
  try {
    const areas = await sql`SELECT * FROM practice_areas ORDER BY id ASC LIMIT 6`
    return areas as PracticeArea[]
  } catch (error) {
    console.error("Error fetching practice areas:", error)
    return []
  }
}

export async function PracticeAreas() {
  const areas = await getPracticeAreas()

  return (
    <section id="practice-areas" className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <SectionHeader
          overline="Our Expertise"
          title="Practice Areas"
          subtitle="Comprehensive legal solutions tailored to your unique situation and needs."
          className="mb-16"
        />
        <PracticeAreasGrid areas={areas} />
      </div>
    </section>
  )
}
