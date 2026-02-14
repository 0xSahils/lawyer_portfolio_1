"use client"

import { motion } from "framer-motion"
import { Award, Users, Briefcase, Trophy } from "lucide-react"
import { CountUp } from "@/components/motion/count-up"
import { StaggerWrap, staggerItem } from "@/components/motion/stagger-wrap"
import { SectionHeaderLight } from "@/components/law-firm/section-header"

const stats = [
  { icon: Briefcase, value: "500+", label: "Cases Won" },
  { icon: Users, value: "1000+", label: "Happy Clients" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Trophy, value: "50+", label: "Awards Won" },
]

const experience = [
  {
    year: "2020 - Present",
    title: "Senior Partner",
    company: "Private Practice",
    description: "Leading my own legal practice specializing in corporate law, civil litigation, and family matters.",
  },
  {
    year: "2015 - 2020",
    title: "Associate Attorney",
    company: "Morrison & Partners LLP",
    description: "Handled complex corporate cases and civil litigation matters for high-profile clients.",
  },
  {
    year: "2010 - 2015",
    title: "Junior Associate",
    company: "Baker Legal Group",
    description: "Started my legal career focusing on family law and estate planning matters.",
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-navy">
      <div className="container mx-auto px-4">
        <StaggerWrap className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24" staggerDelay={0.08}>
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-gold/20">
                <stat.icon className="h-8 w-8 text-gold" />
              </div>
              <h3 className="text-4xl font-bold text-white font-serif mb-2">
                <CountUp value={stat.value} />
              </h3>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </StaggerWrap>

        <div className="max-w-3xl mx-auto">
          <SectionHeaderLight
            overline="My Journey"
            title="Professional Experience"
            className="mb-16"
          />

          <div className="relative">
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gold/30" />

            <StaggerWrap className="relative" staggerDelay={0.1}>
              {experience.map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={staggerItem}
                  className={`relative flex items-center mb-16 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gold rounded-full border-4 border-navy z-10" />
                  <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                    <span className="text-gold text-sm font-semibold">{item.year}</span>
                    <h3 className="text-xl font-bold text-white font-serif mt-1">{item.title}</h3>
                    <p className="text-gold-light text-sm mb-2">{item.company}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </StaggerWrap>
          </div>
        </div>
      </div>
    </section>
  )
}
