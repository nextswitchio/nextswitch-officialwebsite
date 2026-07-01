"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function InsightsCta() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#010507] to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_80%,rgba(1,255,240,0.03)_0%,transparent_50%)]" />

      <motion.div style={{ y }} className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[0.95]">
            Be Part of the <span className="text-gradient">Story.</span>
          </h2>
          <p className="mt-8 text-lg text-white/30 max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re a journalist, researcher, partner, or innovator — there&apos;s a role for you in shaping what comes next.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/contact" className="group inline-flex items-center gap-2 rounded-full bg-white/10 px-8 py-4 text-sm font-medium text-white transition-all hover:bg-white/15">
              Get in Touch
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#media" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-8 py-4 text-sm font-medium text-white/60 transition-all hover:border-white/20 hover:text-white/80">
              Apply for Press Credentials
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
