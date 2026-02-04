import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { TestimonialForm } from "@/components/admin/testimonial-form"
import { sql, Testimonial } from "@/lib/db"
import { notFound } from "next/navigation"

async function getTestimonial(id: string) {
  try {
    const testimonial = await sql`SELECT * FROM testimonials WHERE id = ${parseInt(id)}`
    return testimonial[0] as Testimonial
  } catch (error) {
    console.error("Error fetching testimonial:", error)
    return null
  }
}

export default async function EditTestimonialPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const testimonial = await getTestimonial(id)

  if (!testimonial) {
    notFound()
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Button asChild variant="ghost" size="icon">
          <Link href="/admin/testimonials">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <div>
          <h2 className="text-2xl font-bold text-navy font-serif">Edit Testimonial</h2>
          <p className="text-muted-foreground">Update this client review.</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-navy font-serif">Testimonial Details</CardTitle>
        </CardHeader>
        <CardContent>
          <TestimonialForm testimonial={testimonial} />
        </CardContent>
      </Card>
    </div>
  )
}
