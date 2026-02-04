import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative bg-navy min-h-[600px] lg:min-h-[700px] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[600px] lg:min-h-[700px] py-12">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <p className="text-gold text-lg">Need any help?</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-serif text-balance">
              We Fight for Right
            </h2>
            <p className="text-gray-300 max-w-md leading-relaxed">
              We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.
            </p>
            <Button asChild className="bg-gold hover:bg-gold-dark text-navy font-semibold px-8 py-6 text-base">
              <Link href="#contact">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border-2 border-gold/30 rounded-lg" />
              <img
                src="/images/hero-lawyer.jpg"
                alt="John Mehta - Attorney at Law"
                className="w-full max-w-md mx-auto h-[500px] object-cover object-top rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-gold text-white hover:text-navy rounded-full flex items-center justify-center transition-all" aria-label="Previous slide">
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-gold text-white hover:text-navy rounded-full flex items-center justify-center transition-all" aria-label="Next slide">
        <ChevronRight className="h-6 w-6" />
      </button>
    </section>
  )
}
