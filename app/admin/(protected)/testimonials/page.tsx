import Link from "next/link"
import { sql, Testimonial } from "@/lib/db"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Edit, Trash2, MessageSquare, Star } from "lucide-react"
import { deleteTestimonial } from "./actions"

async function getTestimonials() {
  try {
    const testimonials = await sql`SELECT * FROM testimonials ORDER BY created_at DESC`
    return testimonials as Testimonial[]
  } catch (error) {
    console.error("Error fetching testimonials:", error)
    return []
  }
}

export default async function TestimonialsAdminPage() {
  const testimonials = await getTestimonials()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-navy font-serif">Testimonials</h2>
          <p className="text-muted-foreground">Manage client reviews and feedback.</p>
        </div>
        <Button asChild className="bg-gold hover:bg-gold-dark text-navy">
          <Link href="/admin/testimonials/new">
            <Plus className="h-4 w-4 mr-2" />
            Add Testimonial
          </Link>
        </Button>
      </div>

      {testimonials.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id}>
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div className="flex text-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < testimonial.rating ? "fill-current" : "text-gray-300"}`} 
                      />
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button asChild variant="ghost" size="icon" className="h-8 w-8">
                      <Link href={`/admin/testimonials/${testimonial.id}/edit`}>
                        <Edit className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Link>
                    </Button>
                    <form action={deleteTestimonial.bind(null, testimonial.id)}>
                      <Button variant="ghost" size="icon" type="submit" className="h-8 w-8 text-red-600 hover:text-red-700 hover:bg-red-50">
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </form>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-2">
                  <span className="font-semibold text-navy">{testimonial.client_name}</span>
                  {testimonial.client_position && (
                    <span className="text-sm text-muted-foreground">, {testimonial.client_position}</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground line-clamp-3 italic">"{testimonial.content}"</p>
                {testimonial.featured && (
                  <div className="mt-2 text-xs font-semibold text-gold uppercase tracking-wider">
                    Featured Review
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="py-16 text-center">
            <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground mb-4">No testimonials yet.</p>
            <Button asChild className="bg-gold hover:bg-gold-dark text-navy">
              <Link href="/admin/testimonials/new">
                <Plus className="h-4 w-4 mr-2" />
                Add Your First Testimonial
              </Link>
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
