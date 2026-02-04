import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Business Owner",
    content: "John handled my corporate legal matters with exceptional professionalism. His attention to detail and strategic thinking helped my business navigate complex regulatory challenges successfully.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Michael Chen",
    role: "Real Estate Developer",
    content: "I've worked with many attorneys over the years, but John stands out for his dedication and expertise. He made our property transactions smooth and protected our interests at every step.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Emily Rodriguez",
    role: "Family Client",
    content: "During one of the most difficult times in my life, John provided not just legal expertise but genuine compassion. He fought for my family and achieved the best possible outcome.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
]

export function TestimonialsSection() {
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
              key={testimonial.name}
              className="bg-background p-8 rounded-lg shadow-sm hover:shadow-lg transition-all relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <Quote className="h-8 w-8 text-gold/20" />
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-gold"
                />
                <div>
                  <h4 className="font-bold text-navy font-serif">{testimonial.name}</h4>
                  <p className="text-gold text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
