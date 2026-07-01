"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function ContentCta() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.92])

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#010a0e] to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(1,255,240,0.03)_0%,transparent_50%)]" />

      <motion.div style={{ scale }} className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Stay Informed.</h2>
          <p className="mt-4 text-base text-white/30">Subscribe to our newsletter for the latest insights, research, and stories from across Africa.</p>
          <a
            href="/insights"
            className="group mt-8 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-10 py-5 text-base font-medium text-white transition-all hover:bg-cyan-400/10 hover:border-cyan-400/30 glow-cyan"
          >
            More Insights
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
