"use client"

import { motion } from "framer-motion"
import { StaggerWrap, staggerItem } from "@/components/motion/stagger-wrap"
import { SectionHeader } from "@/components/law-firm/section-header"
import { Button } from "@/components/ui/button"
import { Download, Mail, Phone, MapPin, Clock, Scale, GraduationCap, Building2 } from "lucide-react"
import Link from "next/link"

const credentials = [
  { icon: Scale, label: "Enrollment", value: "Bar Council, 1994" },
  { icon: GraduationCap, label: "Degree", value: "LL.M., National Law University" },
  { icon: Building2, label: "Court", value: "Supreme Court of India" },
  { icon: Mail, label: "Mail", value: "john@mehtalaw.com" },
  { icon: Phone, label: "Phone", value: "+1 (020) 930 542" },
  { icon: MapPin, label: "Location", value: "New York, NY" },
  { icon: Clock, label: "Availability", value: "By Appointment" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-48px" }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
          >
            <div className="relative max-w-md">
              <div className="absolute -inset-3 rounded-xl bg-gold/5 border border-gold/20" />
              <img
                src="/images/ceo-portrait.jpg"
                alt="John Mehta - Senior Advocate, Attorney at Law"
                className="relative w-full aspect-3/4 object-cover object-top rounded-lg shadow-xl"
              />
              <div className="absolute left-0 bottom-24 bg-gold text-navy px-4 py-2 font-serif italic text-lg transform -rotate-90 origin-bottom-left font-semibold">
                John Mehta
              </div>
            </div>
          </motion.div>

          <StaggerWrap className="space-y-8 order-1 lg:order-2" staggerDelay={0.06}>
            <motion.div variants={staggerItem}>
              <SectionHeader
                overline="About Me"
                title="John Mehta"
                className="text-left mb-6"
              />
              <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                I&apos;m a lawyer dedicated to my work. With 15+ years as a professional advocate, I have acquired the skills and knowledge necessary to make your case a success. I enjoy every step of the legal process—from discussion and collaboration to arguing before the court.
              </p>
            </motion.div>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              variants={staggerItem}
            >
              {credentials.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-3 p-4 rounded-lg bg-secondary/80 border border-border/60"
                >
                  <item.icon className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gold text-xs font-semibold uppercase tracking-wider">
                      {item.label}
                    </p>
                    <p className="text-foreground text-sm font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </motion.div>
            <motion.div variants={staggerItem}>
              <Button
                asChild
                variant="outline"
                className="border-2 border-gold/60 text-navy hover:bg-gold/10 hover:border-gold px-6 py-5"
              >
                <Link href="#">
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </Link>
              </Button>
            </motion.div>
          </StaggerWrap>
        </div>
      </div>
    </section>
  )
}
