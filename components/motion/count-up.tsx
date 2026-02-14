"use client"

import { useEffect, useRef, useState } from "react"

function parseValue(value: string): { numeric: number; suffix: string; prefix: string } {
  const match = value.match(/^(\D*)([\d.]+)(\D*)$/)
  if (!match) return { prefix: "", numeric: 0, suffix: value }
  const [, prefix = "", num = "0", suffix = ""] = match
  return { prefix, numeric: parseFloat(num), suffix }
}

export function CountUp({
  value,
  duration = 1200,
  className,
}: {
  value: string
  duration?: number
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(value)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined" || hasAnimated) return
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return
        setHasAnimated(true)
      },
      { threshold: 0.2, rootMargin: "0px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [hasAnimated])

  useEffect(() => {
    if (!hasAnimated) return
    const prefersReduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) {
      setDisplay(value)
      return
    }
    const { prefix, numeric, suffix } = parseValue(value)
    if (numeric === 0) {
      setDisplay(value)
      return
    }
    const start = performance.now()
    const step = (now: number) => {
      const elapsed = now - start
      const t = Math.min(elapsed / duration, 1)
      const eased = 1 - (1 - t) ** 3
      const current = numeric * eased
      const formatted = Number.isInteger(numeric)
        ? Math.round(current).toString()
        : current.toFixed(1)
      setDisplay(`${prefix}${formatted}${suffix}`)
      if (t < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [hasAnimated, value, duration])

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  )
}
