"use client"

import { motion } from "framer-motion"

const spring = { type: "spring" as const, stiffness: 320, damping: 28 }

export function SectionHeader({
  overline,
  title,
  subtitle,
  className,
}: {
  overline: string
  title: string
  subtitle?: string
  className?: string
}) {
  return (
    <motion.div
      className={["text-center", className].filter(Boolean).join(" ")}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-48px" }}
      transition={spring}
    >
      <p className="text-gold text-sm uppercase tracking-[0.2em] mb-3 font-medium">
        {overline}
      </p>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy font-serif tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

export function SectionHeaderLight({
  overline,
  title,
  subtitle,
  className,
}: {
  overline: string
  title: string
  subtitle?: string
  className?: string
}) {
  return (
    <motion.div
      className={["text-center", className].filter(Boolean).join(" ")}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-48px" }}
      transition={spring}
    >
      <p className="text-gold text-sm uppercase tracking-[0.2em] mb-3 font-medium">
        {overline}
      </p>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-serif tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
