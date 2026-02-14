"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CountUp } from "@/components/motion/count-up"

const spring = { type: "spring" as const, stiffness: 320, damping: 28 }

export function Hero() {
  const reduceMotion = useReducedMotion()
  return (
    <section className="relative bg-navy min-h-[85vh] lg:min-h-[90vh] overflow-hidden flex items-center">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 75% 25%, rgba(201, 169, 98, 0.12) 0%, transparent 55%),
              radial-gradient(ellipse 60% 70% at 15% 85%, rgba(201, 169, 98, 0.06) 0%, transparent 55%),
              radial-gradient(ellipse 50% 50% at 50% 50%, rgba(36, 48, 68, 0.5) 0%, transparent 70%)
            `,
          }}
        />
        {!reduceMotion && (
          <motion.div
            className="absolute inset-0 opacity-[0.08]"
            animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
            transition={{ duration: 14, repeat: Infinity, repeatType: "reverse" }}
            style={{
              backgroundSize: "200% 200%",
              backgroundImage:
                "linear-gradient(135deg, rgba(201,169,98,0.25) 0%, transparent 45%, rgba(36,48,68,0.4) 100%)",
            }}
          />
        )}
      </div>

      {!reduceMotion && (
        <>
          <motion.div
            className="absolute top-1/4 right-[12%] w-72 h-72 rounded-full bg-gold/8 blur-3xl pointer-events-none"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
            aria-hidden
          />
          <motion.div
            className="absolute bottom-1/4 left-[8%] w-56 h-56 rounded-full bg-gold/5 blur-2xl pointer-events-none"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
            aria-hidden
          />
        </>
      )}

      <div className="container mx-auto px-4 relative z-10 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content - reference style: Welcome, Hello I'm X, Title, paragraph, stat, CTAs */}
          <div className="text-white space-y-6 lg:space-y-8">
            <motion.p
              className="text-gold text-sm font-medium tracking-[0.25em] uppercase"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.1 }}
            >
              Welcome to My Practice
            </motion.p>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] font-serif tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.18 }}
            >
              Hello, I&apos;m{" "}
              <span className="text-gold">John Mehta</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gold-light font-serif font-medium"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.28 }}
            >
              Senior Advocate · Attorney at Law
            </motion.p>
            <motion.p
              className="text-gray-300 max-w-lg leading-relaxed text-base md:text-lg"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.38 }}
            >
              With over 15 years of distinguished legal practice, I am dedicated to upholding justice and protecting your rights. From corporate law to civil litigation and family matters—I bring integrity, expertise, and unwavering commitment to every case.
            </motion.p>
            <motion.div
              className="flex flex-wrap items-center gap-6"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.48 }}
            >
              <div className="flex items-baseline gap-2">
                <span className="text-4xl md:text-5xl font-bold text-gold font-serif">
                  <CountUp value="15+" />
                </span>
                <span className="text-gray-400 font-medium">Years of Experience</span>
              </div>
            </motion.div>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.58 }}
            >
              <Button
                asChild
                className="group bg-gold hover:bg-gold-dark text-navy font-semibold px-8 py-6 text-base rounded-sm shadow-[0_0_28px_rgba(201,169,98,0.3)] hover:shadow-[0_0_40px_rgba(201,169,98,0.45)] transition-all duration-300"
              >
                <Link href="#contact">
                  Book a Consultation
                  <ArrowRight className="ml-2 h-5 w-5 inline-block transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-2 border-gold/60 text-white hover:bg-gold/10 hover:border-gold hover:text-gold px-8 py-6 text-base rounded-sm bg-transparent transition-all duration-300"
              >
                <Link href="#">
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Right image */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.96, x: 32 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ ...spring, delay: 0.35 }}
          >
            <div className="relative max-w-md ml-auto">
              <div className="absolute -inset-2 rounded-xl bg-gold/10 opacity-80" />
              <div className="absolute -inset-5 border border-gold/25 rounded-xl" />
              <img
                src="/images/hero-lawyer.jpg"
                alt="John Mehta - Senior Advocate, Attorney at Law"
                className="relative w-full aspect-3/4 object-cover object-top rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-4 -left-4 bg-navy-light border border-gold/30 rounded-lg px-5 py-3 shadow-xl">
                <p className="text-gold text-xs uppercase tracking-wider font-semibold">Adv. John Mehta</p>
                <p className="text-white text-lg font-serif font-bold"><CountUp value="15" />+ Years</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
