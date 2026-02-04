import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { CaseResultForm } from "@/components/admin/case-result-form"
import { sql, PracticeArea, CaseResult } from "@/lib/db"
import { notFound } from "next/navigation"

async function getCaseResult(id: string) {
  try {
    const result = await sql`SELECT * FROM case_results WHERE id = ${parseInt(id)}`
    return result[0] as CaseResult
  } catch (error) {
    console.error("Error fetching case result:", error)
    return null
  }
}

async function getPracticeAreas() {
  try {
    const areas = await sql`SELECT * FROM practice_areas ORDER BY title ASC`
    return areas as PracticeArea[]
  } catch (error) {
    console.error("Error fetching practice areas:", error)
    return []
  }
}

export default async function EditCaseResultPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const caseResult = await getCaseResult(id)
  const practiceAreas = await getPracticeAreas()

  if (!caseResult) {
    notFound()
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Button asChild variant="ghost" size="icon">
          <Link href="/admin/case-results">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <div>
          <h2 className="text-2xl font-bold text-navy font-serif">Edit Case Result</h2>
          <p className="text-muted-foreground">Update this case result.</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-navy font-serif">Case Details</CardTitle>
        </CardHeader>
        <CardContent>
          <CaseResultForm caseResult={caseResult} practiceAreas={practiceAreas} />
        </CardContent>
      </Card>
    </div>
  )
}
