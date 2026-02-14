"use client"

import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"
import { StaggerWrap, staggerItem } from "@/components/motion/stagger-wrap"

export type TestimonialItem = {
  id: number
  content: string
  client_name: string
  client_position: string | null
  rating: number
}

export function TestimonialsGrid({ testimonials }: { testimonials: TestimonialItem[] }) {
  return (
    <StaggerWrap className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.06}>
      {testimonials.map((testimonial) => (
        <motion.div
          key={testimonial.id}
          variants={staggerItem}
          className="group bg-background p-8 rounded-lg shadow-sm border border-border hover:border-gold/30 hover:shadow-[0_0_24px_rgba(201,169,98,0.06)] transition-all duration-300 relative"
        >
          <div className="absolute top-6 right-6">
            <Quote className="h-8 w-8 text-gold/20" />
          </div>
          <div className="flex text-gold mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < testimonial.rating ? "fill-current" : "text-gray-300"}`}
              />
            ))}
          </div>
          <p className="text-muted-foreground leading-relaxed mb-6 relative z-10 italic">
            &quot;{testimonial.content}&quot;
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center text-white font-serif font-bold text-xl flex-shrink-0">
              {testimonial.client_name.charAt(0)}
            </div>
            <div className="min-w-0">
              <h4 className="font-bold text-navy font-serif">{testimonial.client_name}</h4>
              {testimonial.client_position && (
                <p className="text-gold text-sm">{testimonial.client_position}</p>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </StaggerWrap>
  )
}
