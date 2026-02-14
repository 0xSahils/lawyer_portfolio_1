import { sql } from "@/lib/db"
import { SectionHeader } from "@/components/law-firm/section-header"
import { TestimonialsGrid, type TestimonialItem } from "@/components/law-firm/testimonials-grid"

async function getTestimonials(): Promise<TestimonialItem[]> {
  try {
    const testimonials = await sql`
      SELECT id, content, client_name, client_position, rating
      FROM testimonials 
      WHERE rating >= 4 
      ORDER BY featured DESC, created_at DESC 
      LIMIT 6
    `
    return testimonials as TestimonialItem[]
  } catch (error) {
    console.error("Error fetching testimonials:", error)
    return []
  }
}

export async function TestimonialsSection() {
  const testimonials = await getTestimonials()

  if (testimonials.length === 0) return null

  return (
    <section id="testimonials" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <SectionHeader
          overline="Testimonials"
          title="What Our Clients Say"
          subtitle="Trusted by individuals and businesses for exceptional legal representation."
          className="mb-16"
        />
        <TestimonialsGrid testimonials={testimonials} />
      </div>
    </section>
  )
}
