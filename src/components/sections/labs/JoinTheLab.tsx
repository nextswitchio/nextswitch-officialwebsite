"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function JoinTheLab() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.92])

  return (
    <section id="join" ref={ref} className="relative min-h-[80dvh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#010a0e] to-black" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(1,255,240,0.04)_0%,transparent_50%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_70%,rgba(13,71,161,0.04)_0%,transparent_40%)]" />

      <motion.div
        style={{ scale }}
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
            The Next Big Idea{" "}
            <br />
            <span className="text-gradient">Could Start Here.</span>
          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-lg text-white/30 leading-relaxed">
            Whether you have an idea, a challenge, a research opportunity, or a vision for the future,
            let&apos;s explore it together.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:hello@nextswitch.org"
              className="group inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-10 py-5 text-base font-medium text-white transition-all hover:bg-cyan-400/10 hover:border-cyan-400/30 glow-cyan"
            >
              Apply To The Lab
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/booking?service=partnership"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-8 py-5 text-sm font-medium text-white/60 transition-all hover:border-white/20 hover:text-white/80"
            >
              Partner With Us
            </a>
          </div>

          <p className="mt-6 text-xs text-white/15">
            Reach out to us at hello@nextswitch.org
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
