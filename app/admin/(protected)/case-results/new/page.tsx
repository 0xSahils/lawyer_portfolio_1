import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { CaseResultForm } from "@/components/admin/case-result-form"
import { sql, PracticeArea } from "@/lib/db"

async function getPracticeAreas() {
  try {
    const areas = await sql`SELECT * FROM practice_areas ORDER BY title ASC`
    return areas as PracticeArea[]
  } catch (error) {
    console.error("Error fetching practice areas:", error)
    return []
  }
}

export default async function NewCaseResultPage() {
  const practiceAreas = await getPracticeAreas()

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Button asChild variant="ghost" size="icon">
          <Link href="/admin/case-results">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <div>
          <h2 className="text-2xl font-bold text-navy font-serif">Add Case Result</h2>
          <p className="text-muted-foreground">Add a new success story.</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-navy font-serif">Case Details</CardTitle>
        </CardHeader>
        <CardContent>
          <CaseResultForm practiceAreas={practiceAreas} />
        </CardContent>
      </Card>
    </div>
  )
}
