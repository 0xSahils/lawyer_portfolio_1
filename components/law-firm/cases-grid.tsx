"use client"

import { motion } from "framer-motion"
import { CheckCircle, Scale, Shield, FileText, GraduationCap, Users, Briefcase } from "lucide-react"
import { StaggerWrap, staggerItem } from "@/components/motion/stagger-wrap"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  shield: Shield,
  "file-text": FileText,
  "graduation-cap": GraduationCap,
  scale: Scale,
  users: Users,
  briefcase: Briefcase,
}

export type CaseResultWithArea = {
  id: number
  title: string
  result: string
  description: string
  year: string
  practice_area_title: string | null
  practice_area_icon: string | null
}

export function CasesGrid({ cases }: { cases: CaseResultWithArea[] }) {
  return (
    <StaggerWrap className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.06}>
      {cases.map((caseItem) => {
        const Icon = caseItem.practice_area_icon
          ? iconMap[caseItem.practice_area_icon] ?? Scale
          : Scale
        return (
          <motion.div
            key={caseItem.id}
            variants={staggerItem}
            className="group bg-navy-light p-8 rounded-lg border border-white/10 hover:border-gold/40 transition-colors duration-300 hover:shadow-[0_0_24px_rgba(201,169,98,0.1)]"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                <Icon className="w-6 h-6 text-gold" />
              </div>
              <span className="text-xs text-gold font-semibold uppercase tracking-wider">
                {caseItem.practice_area_title ?? "Legal Case"}
              </span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2 font-serif">{caseItem.title}</h3>
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
              <span className="text-green-400 text-sm font-medium">{caseItem.result}</span>
            </div>
            <p className="text-gray-400 text-sm mb-4 line-clamp-3">{caseItem.description}</p>
            <div className="pt-4 border-t border-white/10 flex justify-between items-center">
              <span className="text-gray-500 text-sm">Year: {caseItem.year}</span>
            </div>
          </motion.div>
        )
      })}
    </StaggerWrap>
  )
}
