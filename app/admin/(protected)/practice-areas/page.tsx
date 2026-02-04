import React from "react"
import Link from "next/link"
import { sql, type PracticeArea } from "@/lib/db"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Edit, Trash2, Shield, FileText, GraduationCap, Scale, Users, Briefcase } from "lucide-react"
import { deletePracticeArea } from "./actions"

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
    const areas = await sql`SELECT * FROM practice_areas ORDER BY id ASC`
    return areas as PracticeArea[]
  } catch (error) {
    console.error("Error fetching practice areas:", error)
    return []
  }
}

export default async function PracticeAreasAdminPage() {
  const areas = await getPracticeAreas()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-navy font-serif">Practice Areas</h2>
          <p className="text-muted-foreground">Manage your law firm's practice areas.</p>
        </div>
        <Button asChild className="bg-gold hover:bg-gold-dark text-navy">
          <Link href="/admin/practice-areas/new">
            <Plus className="h-4 w-4 mr-2" />
            Add Practice Area
          </Link>
        </Button>
      </div>

      {areas.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area) => {
            const IconComponent = iconMap[area.icon] || Scale
            return (
              <Card key={area.id}>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-gold" />
                    </div>
                    <div className="flex gap-2">
                      <Button asChild variant="ghost" size="icon" className="h-8 w-8">
                        <Link href={`/admin/practice-areas/${area.id}/edit`}>
                          <Edit className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Link>
                      </Button>
                      <form action={deletePracticeArea.bind(null, area.id)}>
                        <Button variant="ghost" size="icon" type="submit" className="h-8 w-8 text-red-600 hover:text-red-700 hover:bg-red-50">
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </form>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-lg text-navy font-serif mb-2">{area.title}</CardTitle>
                  <p className="text-sm text-muted-foreground line-clamp-2">{area.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      ) : (
        <Card>
          <CardContent className="py-16 text-center">
            <Scale className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground mb-4">No practice areas yet.</p>
            <Button asChild className="bg-gold hover:bg-gold-dark text-navy">
              <Link href="/admin/practice-areas/new">
                <Plus className="h-4 w-4 mr-2" />
                Add Your First Practice Area
              </Link>
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
