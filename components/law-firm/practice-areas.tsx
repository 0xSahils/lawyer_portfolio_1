import React from "react"
import { sql, type PracticeArea } from "@/lib/db"
import { Shield, FileText, GraduationCap, Scale, Users, Briefcase } from "lucide-react"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  shield: Shield,
  "file-text": FileText,
  "graduation-cap": GraduationCap,
  scale: Scale,
  users: Users,
  briefcase: Briefcase,
}

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
    <section id="practice-areas" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gold text-sm uppercase tracking-widest mb-2">--- What I Do ---</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy font-serif">
            My Practice Areas
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area) => {
            const IconComponent = iconMap[area.icon] || Scale
            return (
              <div
                key={area.id}
                className="group bg-background p-8 rounded-lg shadow-sm hover:shadow-lg transition-all border-b-2 border-transparent hover:border-gold"
              >
                <div className="mb-4">
                  <IconComponent className="h-12 w-12 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3 font-serif group-hover:text-gold transition-colors">
                  {area.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {area.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
