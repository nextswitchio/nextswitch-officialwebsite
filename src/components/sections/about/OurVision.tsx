"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function OurVision() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.92])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.4, 1, 1, 0.4])

  return (
    <section id="vision" ref={ref} className="relative min-h-dvh flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#010a0e] to-black" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(13,71,161,0.06)_0%,transparent_50%)]" />

      <motion.div
        style={{ scale, opacity }}
        className="relative z-10 mx-auto max-w-5xl px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-white/20 uppercase mb-6">
            Our Vision
          </span>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05]">
            <span className="text-gradient">Lighting Africa.</span>
            <br />
            <span className="text-white/90">Building The Future.</span>
          </h2>
          <p className="mt-10 max-w-3xl mx-auto text-xl text-white/30 leading-relaxed">
            To become Africa&apos;s most trusted platform for innovation, technology,
            talent development, and institution building.
          </p>

          <motion.div
            className="mt-12 h-px max-w-xs mx-auto bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
