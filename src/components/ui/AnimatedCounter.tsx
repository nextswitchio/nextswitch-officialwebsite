"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

interface AnimatedCounterProps {
  from: number
  to: number
  duration?: number
  delay?: number
  format?: (n: number) => string
}

export default function AnimatedCounter({
  from,
  to,
  duration = 2,
  delay = 0,
  format,
}: AnimatedCounterProps) {
  const [display, setDisplay] = useState(format ? format(from) : Math.floor(from).toString())
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const startedRef = useRef(false)

  useEffect(() => {
    if (!isInView || startedRef.current) return
    startedRef.current = true

    const startTime = performance.now() + delay * 1000
    let rafId: number

    function animate(time: number) {
      if (time < startTime) {
        rafId = requestAnimationFrame(animate)
        return
      }

      const elapsed = (time - startTime) / 1000
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = from + (to - from) * eased

      if (format) {
        setDisplay(format(current))
      } else {
        setDisplay(Math.floor(current).toString())
      }

      if (progress < 1) {
        rafId = requestAnimationFrame(animate)
      }
    }

    rafId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafId)
  }, [isInView, from, to, duration, delay, format])

  return <span ref={ref}>{display}</span>
}
