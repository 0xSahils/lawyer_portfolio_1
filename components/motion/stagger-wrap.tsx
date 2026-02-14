"use client"

import { motion, useReducedMotion } from "framer-motion"

const spring = { type: "spring" as const, stiffness: 320, damping: 28 }

export function StaggerWrap({
  children,
  className,
  staggerDelay = 0.06,
}: {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
}) {
  const reduceMotion = useReducedMotion()
  return (
    <motion.div
      initial={reduceMotion ? "visible" : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={{ once: true, margin: "-32px" }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: staggerDelay, delayChildren: 0.08 },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const staggerItem = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: spring,
  },
}

export const staggerItemNoMotion = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
}
