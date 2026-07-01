"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Check } from "lucide-react"

export default function CaseStudyApproach({ study }: { study: { approach: string[]; technologies: string[] } }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [30, -30])

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#010a0e] to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(1,255,240,0.015)_0%,transparent_50%)]" />

      <motion.div style={{ y }} className="relative z-10 mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid gap-12 lg:grid-cols-2"
        >
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest text-white/20 uppercase mb-4">Our Approach</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">How We <span className="text-gradient">Made It Happen.</span></h2>
            <ul className="mt-8 space-y-4">
              {study.approach.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 mt-0.5">
                    <Check className="h-3 w-3 text-cyan-400" />
                  </span>
                  <span className="text-sm text-white/50 leading-relaxed">{step}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="inline-block text-xs font-semibold tracking-widest text-white/20 uppercase mb-4">Technologies</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Tools We <span className="text-gradient">Used.</span></h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {study.technologies.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="rounded-full border border-white/[0.06] bg-white/[0.02] px-4 py-2 text-sm text-white/60"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
