"use client"

import { motion, useReducedMotion } from "framer-motion"

const spring = { type: "spring" as const, stiffness: 320, damping: 28 }

export function SectionReveal({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const reduceMotion = useReducedMotion()
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-48px" }}
      transition={spring}
      className={className}
    >
      {children}
    </motion.div>
  )
}
