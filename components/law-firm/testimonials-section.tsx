import { Quote, Star } from "lucide-react"
import { sql } from "@/lib/db"

async function getTestimonials() {
  try {
    const testimonials = await sql`
      SELECT * FROM testimonials 
      WHERE rating >= 4 
      ORDER BY featured DESC, created_at DESC 
      LIMIT 6
    `
    return testimonials
  } catch (error) {
    console.error("Error fetching testimonials:", error)
    return []
  }
}

export async function TestimonialsSection() {
  const testimonials = await getTestimonials()

  if (testimonials.length === 0) {
    return null
  }

  return (
    <section id="testimonials" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gold text-sm uppercase tracking-widest mb-2">--- Testimonials ---</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy font-serif">
            What My Clients Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-background p-8 rounded-lg shadow-sm hover:shadow-lg transition-all relative group"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <Quote className="h-8 w-8 text-gold/20" />
              </div>

              {/* Rating */}
              <div className="flex text-gold mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${i < testimonial.rating ? "fill-current" : "text-gray-300"}`} 
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-6 relative z-10 italic">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center text-white font-serif font-bold text-xl">
                  {testimonial.client_name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-navy font-serif">{testimonial.client_name}</h4>
                  {testimonial.client_position && (
                    <p className="text-gold text-sm">{testimonial.client_position}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
