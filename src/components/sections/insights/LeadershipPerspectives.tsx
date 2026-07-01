"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const essays = [
  { author: "Dr. Akinwale Oladipo", role: "Founder & CEO", title: "Why Redemptive Innovation is Africa's Most Important Economic Framework", excerpt: "Technology without moral purpose is just machinery. Africa has the opportunity to build something different — an innovation ecosystem rooted in service...", slug: "why-redemptive-innovation-is-africas-most-important-economic-framework" },
  { author: "Dr. Amina Diallo", role: "Chief AI Officer", title: "Democratizing AI Access Across the Continent", excerpt: "When we build AI that understands African languages, contexts, and values, we're not just creating technology — we're creating possibility...", slug: "democratizing-ai-access-across-the-continent" },
  { author: "Kojo Asante", role: "Chief Strategy Officer", title: "Building Infrastructure That Enables Human Flourishing", excerpt: "Infrastructure isn't just about roads and fiber. It's about creating the conditions for talent to emerge, ideas to scale, and lives to change...", slug: "building-infrastructure-that-enables-human-flourishing" },
]

export default function LeadershipPerspectives() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

      <motion.div style={{ y }} className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
        >
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest text-white/20 uppercase mb-4">Leadership Perspectives</span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Thought <span className="text-gradient">Leadership.</span></h2>
          </div>
          <a href="#" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors shrink-0">
            All Essays <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03]">
          {essays.map((essay, i) => (
            <Link
              key={essay.title}
              href={`/insights/${essay.slug}`}
              className="group bg-black/50 p-8 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/20 flex items-center justify-center">
                  <span className="text-xs font-semibold text-cyan-400">{essay.author.split(" ").map(n => n[0]).join("")}</span>
                </div>
                <div>
                  <span className="text-sm font-medium text-white/80">{essay.author}</span>
                  <span className="block text-xs text-white/30">{essay.role}</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white/80 group-hover:text-white transition-colors leading-snug">{essay.title}</h3>
              <p className="mt-3 text-sm text-white/30 leading-relaxed group-hover:text-white/40 transition-colors duration-300">{essay.excerpt}</p>
              <div className="mt-4 flex items-center gap-1 text-xs font-medium text-cyan-400/60 group-hover:text-cyan-400 transition-colors">
                Read Full Essay <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
