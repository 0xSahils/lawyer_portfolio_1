import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { TestimonialForm } from "@/components/admin/testimonial-form"

export default function NewTestimonialPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Button asChild variant="ghost" size="icon">
          <Link href="/admin/testimonials">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <div>
          <h2 className="text-2xl font-bold text-navy font-serif">Add Testimonial</h2>
          <p className="text-muted-foreground">Add a new client review.</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-navy font-serif">Testimonial Details</CardTitle>
        </CardHeader>
        <CardContent>
          <TestimonialForm />
        </CardContent>
      </Card>
    </div>
  )
}
