import Link from "next/link"
import { sql, CaseResult } from "@/lib/db"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Edit, Trash2, Trophy } from "lucide-react"
import { deleteCaseResult } from "./actions"

async function getCaseResults() {
  try {
    const results = await sql`
      SELECT cr.*, pa.title as practice_area_title
      FROM case_results cr
      LEFT JOIN practice_areas pa ON cr.practice_area_id = pa.id
      ORDER BY cr.year DESC, cr.created_at DESC
    `
    return results as (CaseResult & { practice_area_title: string })[]
  } catch (error) {
    console.error("Error fetching case results:", error)
    return []
  }
}

export default async function CaseResultsAdminPage() {
  const results = await getCaseResults()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-navy font-serif">Case Results</h2>
          <p className="text-muted-foreground">Showcase your legal victories.</p>
        </div>
        <Button asChild className="bg-gold hover:bg-gold-dark text-navy">
          <Link href="/admin/case-results/new">
            <Plus className="h-4 w-4 mr-2" />
            Add Case Result
          </Link>
        </Button>
      </div>

      {results.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((result) => (
            <Card key={result.id}>
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div className="bg-gold/10 px-3 py-1 rounded-full text-xs font-semibold text-gold-dark">
                    {result.result}
                  </div>
                  <div className="flex gap-2">
                    <Button asChild variant="ghost" size="icon" className="h-8 w-8">
                      <Link href={`/admin/case-results/${result.id}/edit`}>
                        <Edit className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Link>
                    </Button>
                    <form action={deleteCaseResult.bind(null, result.id)}>
                      <Button variant="ghost" size="icon" type="submit" className="h-8 w-8 text-red-600 hover:text-red-700 hover:bg-red-50">
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </form>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-2 text-sm text-muted-foreground">
                  {result.year} • {result.practice_area_title || "General"}
                </div>
                <CardTitle className="text-lg text-navy font-serif mb-2">{result.title}</CardTitle>
                <p className="text-sm text-muted-foreground line-clamp-3">{result.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="py-16 text-center">
            <Trophy className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground mb-4">No case results yet.</p>
            <Button asChild className="bg-gold hover:bg-gold-dark text-navy">
              <Link href="/admin/case-results/new">
                <Plus className="h-4 w-4 mr-2" />
                Add Your First Case Result
              </Link>
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
