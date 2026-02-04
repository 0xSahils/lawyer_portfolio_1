export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative">
              {/* Main Image */}
              <img
                src="/images/ceo-portrait.jpg"
                alt="John Mehta - Attorney at Law"
                className="w-full max-w-md h-[500px] object-cover object-top rounded-lg shadow-xl"
              />
              {/* Name Tag */}
              <div className="absolute left-0 bottom-20 bg-gold text-navy px-4 py-2 font-serif italic text-lg transform -rotate-90 origin-bottom-left">
                John Mehta
              </div>
              {/* Decorative Border */}
              <div className="absolute top-4 left-4 right-4 bottom-4 border-2 border-gold/30 rounded-lg pointer-events-none" />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <div>
              <p className="text-gold text-sm uppercase tracking-widest mb-2">About Me</p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy font-serif text-balance">
                Welcome to My Legal Practice
              </h2>
            </div>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                With over 15 years of experience in the legal field, I have dedicated my career to providing exceptional legal representation to individuals and businesses alike. My practice is built on the principles of integrity, dedication, and unwavering commitment to my clients.
              </p>
              <p>
                I specialize in corporate law, civil litigation, and family law matters. My approach combines thorough legal expertise with a deep understanding of my clients&apos; needs, ensuring personalized solutions that achieve the best possible outcomes.
              </p>
            </div>

            {/* Signature */}
            <div className="pt-4">
              <p className="font-serif italic text-3xl text-navy mb-1" style={{ fontFamily: 'cursive' }}>
                John Mehta
              </p>
              <p className="text-gold text-sm font-semibold">Attorney at Law</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
