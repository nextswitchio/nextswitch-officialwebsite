"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function CareerCta() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.92])

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#010a0e] to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(1,255,240,0.03)_0%,transparent_50%)]" />

      <motion.div style={{ scale }} className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[0.95]">
            Don&apos;t See the Right Role?
            <br />
            <span className="text-gradient">Reach Out Anyway.</span>
          </h2>
          <p className="mt-8 text-lg text-white/30 max-w-2xl mx-auto leading-relaxed">
            We&apos;re always looking for exceptional people. Send us your resume and tell us how you&apos;d contribute to our mission.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:hello@nextswitch.org"
              className="group inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-10 py-5 text-base font-medium text-white transition-all hover:bg-cyan-400/10 hover:border-cyan-400/30 glow-cyan"
            >
              Send Your Resume
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-8 py-5 text-sm font-medium text-white/60 transition-all hover:border-white/20 hover:text-white/80"
            >
              Ask a Question
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
