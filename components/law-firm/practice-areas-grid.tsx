"use client"

import React from "react"
import { motion } from "framer-motion"
import { Shield, FileText, GraduationCap, Scale, Users, Briefcase } from "lucide-react"
import type { PracticeArea } from "@/lib/db"
import { StaggerWrap, staggerItem } from "@/components/motion/stagger-wrap"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  shield: Shield,
  "file-text": FileText,
  "graduation-cap": GraduationCap,
  scale: Scale,
  users: Users,
  briefcase: Briefcase,
}

export function PracticeAreasGrid({ areas }: { areas: PracticeArea[] }) {
  return (
    <StaggerWrap className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.06}>
      {areas.map((area) => {
        const IconComponent = iconMap[area.icon] ?? Scale
        return (
          <motion.div
            key={area.id}
            variants={staggerItem}
            className="group bg-background p-8 rounded-lg shadow-sm border border-border hover:border-gold/40 transition-colors duration-300 hover:shadow-[0_0_24px_rgba(201,169,98,0.08)]"
          >
            <div className="mb-5">
              <IconComponent className="h-12 w-12 text-gold" />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3 font-serif group-hover:text-gold transition-colors duration-200">
              {area.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {area.description}
            </p>
          </motion.div>
        )
      })}
    </StaggerWrap>
  )
}
