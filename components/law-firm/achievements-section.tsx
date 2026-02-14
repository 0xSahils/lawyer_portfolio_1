"use client"

import { motion } from "framer-motion"
import { Award, Trophy, Medal, Star, Scale, BookOpen } from "lucide-react"
import { StaggerWrap, staggerItem } from "@/components/motion/stagger-wrap"
import { SectionHeader } from "@/components/law-firm/section-header"

const achievements = [
  { icon: Trophy, year: "2024", title: "Best Criminal Defense Attorney", organization: "National Law Association" },
  { icon: Award, year: "2023", title: "Excellence in Legal Practice", organization: "State Bar Council" },
  { icon: Medal, year: "2022", title: "Pro Bono Champion Award", organization: "Legal Aid Society" },
  { icon: Star, year: "2021", title: "Top 40 Under 40 Lawyers", organization: "Legal Weekly Magazine" },
  { icon: Scale, year: "2020", title: "Landmark Case Victory", organization: "Supreme Court of India" },
  { icon: BookOpen, year: "2019", title: "Legal Scholarship Award", organization: "Indian Law Institute" },
]

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeader
          overline="Recognition"
          title="Milestones of Excellence"
          subtitle="Awards and accolades earned through dedication to justice and legal excellence."
          className="mb-16"
        />

        <StaggerWrap className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.06}>
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="group bg-secondary/80 p-8 rounded-lg border-l-4 border-gold hover:shadow-[0_0_24px_rgba(201,169,98,0.08)] transition-shadow duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-navy rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <achievement.icon className="w-6 h-6 text-gold" />
                </div>
                <div className="min-w-0">
                  <span className="text-gold text-sm font-semibold">{achievement.year}</span>
                  <h3 className="text-lg font-semibold text-navy mt-1 font-serif">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">{achievement.organization}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerWrap>
      </div>
    </section>
  )
}
