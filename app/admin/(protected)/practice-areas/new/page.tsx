import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { PracticeAreaForm } from "@/components/admin/practice-area-form"

export default function NewPracticeAreaPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Button asChild variant="ghost" size="icon">
          <Link href="/admin/practice-areas">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <div>
          <h2 className="text-2xl font-bold text-navy font-serif">Add Practice Area</h2>
          <p className="text-muted-foreground">Create a new practice area for your law firm.</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-navy font-serif">Practice Area Details</CardTitle>
        </CardHeader>
        <CardContent>
          <PracticeAreaForm />
        </CardContent>
      </Card>
    </div>
  )
}
