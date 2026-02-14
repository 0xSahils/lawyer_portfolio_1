"use client"

import { motion } from "framer-motion"
import { Briefcase, Users, Award, Trophy } from "lucide-react"
import { CountUp } from "@/components/motion/count-up"
import { StaggerWrap, staggerItem } from "@/components/motion/stagger-wrap"

const stats = [
  { icon: Briefcase, value: "500+", label: "Cases Won" },
  { icon: Users, value: "1000+", label: "Happy Clients" },
  { icon: Award, value: "15+", label: "Years of Practice" },
  { icon: Trophy, value: "50+", label: "Awards Won" },
]

export function Features() {
  return (
    <section className="relative bg-navy-light py-16 lg:py-20 -mt-px z-20">
      <div className="container mx-auto px-4">
        <StaggerWrap
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          staggerDelay={0.07}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              className="group text-center"
            >
              <div className="inline-flex w-16 h-16 lg:w-20 lg:h-20 rounded-full border-2 border-gold/30 flex items-center justify-center mb-5 bg-navy/40 group-hover:border-gold/60 group-hover:bg-gold/5 transition-all duration-300">
                <stat.icon className="h-8 w-8 lg:h-9 lg:w-9 text-gold" />
              </div>
              <p className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white font-serif mb-2 tabular-nums">
                <CountUp value={stat.value} />
              </p>
              <p className="text-gray-400 text-sm lg:text-base font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </StaggerWrap>
      </div>
    </section>
  )
}
