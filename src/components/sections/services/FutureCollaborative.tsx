"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function FutureCollaborative() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.92])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3])

  return (
    <section ref={ref} className="relative min-h-[70dvh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(13,71,161,0.04)_0%,transparent_50%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(1,255,240,0.02)_0%,transparent_40%)]" />

      <motion.div
        style={{ scale, opacity }}
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
            The Best Solutions Are{" "}
            <span className="text-gradient">Built Together.</span>
          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-lg text-white/30 leading-relaxed">
            Partnership is not just how we work. It is how we think. The most impactful solutions
            emerge when client expertise meets our capabilities — when vision meets execution,
            and when ambition meets the right partner.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
