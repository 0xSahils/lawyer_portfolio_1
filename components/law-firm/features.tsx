import { Award, Scale, ThumbsUp } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "100% Success Rate",
    description: "Proven track record of winning cases with dedication and strategic legal expertise.",
  },
  {
    icon: Scale,
    title: "Expert Legal Services",
    description: "Comprehensive legal solutions tailored to your unique situation and needs.",
  },
  {
    icon: ThumbsUp,
    title: "Highly Recommended",
    description: "Trusted by hundreds of satisfied clients for exceptional legal representation.",
  },
]

export function Features() {
  return (
    <section className="bg-navy-light py-16 -mt-20 relative z-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex items-start gap-4 p-6 bg-navy/50 rounded-lg border border-gold/20 hover:border-gold/40 transition-colors"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-full border-2 border-gold flex items-center justify-center">
                <feature.icon className="h-8 w-8 text-gold" />
              </div>
              <div>
                <h3 className="text-gold font-semibold text-lg mb-2 font-serif">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
