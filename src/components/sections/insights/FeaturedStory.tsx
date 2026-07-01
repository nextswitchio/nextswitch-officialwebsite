"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function FeaturedStory() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <section id="latest" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

      <motion.div style={{ y }} className="relative z-10 mx-auto max-w-7xl px-6">
        <Link
          href="/insights/next-switch-launches-innovation-lab-to-support-10000-young-african-innovators"
          className="group block"
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-gradient-to-br from-white/[0.03] to-transparent">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 lg:p-14 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <span className="rounded-full bg-cyan-400/10 border border-cyan-400/20 px-3 py-1 text-xs font-medium text-cyan-400">
                    Featured Story
                  </span>
                  <span className="text-xs text-white/30">Apr 15, 2026</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white/90 group-hover:text-white transition-colors duration-500 leading-[1.05]">
                  Next Switch Launches Innovation Lab to Support 10,000 Young African Innovators
                </h2>
                <p className="mt-6 text-base text-white/30 leading-relaxed group-hover:text-white/40 transition-colors duration-500 max-w-xl">
                  The new facility in Lagos will provide mentorship, technical resources, and funding
                  for young innovators tackling Africa&apos;s most pressing challenges through technology
                  and entrepreneurship.
                </p>
                <div className="mt-8 flex items-center gap-2 text-sm font-medium text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  Read The Full Story
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
              <div className="relative min-h-[300px] lg:min-h-full bg-gradient-to-br from-cyan-400/5 via-blue-500/5 to-transparent">
                <div className="absolute inset-0 flex items-center justify-center p-8 lg:p-14">
                  <div className="grid grid-cols-3 gap-3 w-full max-w-sm">
                    {Array.from({ length: 9 }, (_, i) => (
                      <div
                        key={i}
                        className="aspect-square rounded-xl border border-white/[0.06] bg-white/[0.02] group-hover:border-cyan-400/10 transition-all duration-500"
                      >
                        <div className="w-full h-full rounded-xl bg-gradient-to-br from-white/5 to-transparent" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    </section>
  )
}
