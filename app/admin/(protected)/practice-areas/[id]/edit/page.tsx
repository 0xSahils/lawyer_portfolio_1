import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { PracticeAreaForm } from "@/components/admin/practice-area-form"
import { sql } from "@/lib/db"
import { notFound } from "next/navigation"

async function getPracticeArea(id: string) {
  try {
    const areas = await sql`SELECT * FROM practice_areas WHERE id = ${parseInt(id)}`
    return areas[0]
  } catch (error) {
    console.error("Error fetching practice area:", error)
    return null
  }
}

export default async function EditPracticeAreaPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const practiceArea = await getPracticeArea(id)

  if (!practiceArea) {
    notFound()
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Button asChild variant="ghost" size="icon">
          <Link href="/admin/practice-areas">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <div>
          <h2 className="text-2xl font-bold text-navy font-serif">Edit Practice Area</h2>
          <p className="text-muted-foreground">Update this practice area.</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-navy font-serif">Practice Area Details</CardTitle>
        </CardHeader>
        <CardContent>
          <PracticeAreaForm practiceArea={practiceArea} />
        </CardContent>
      </Card>
    </div>
  )
}
