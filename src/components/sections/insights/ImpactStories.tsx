"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { Quote } from "lucide-react"

const stories = [
  { name: "Grace Osei", role: "Tech Fellow, Accra", title: "Grace Osei: From Barista to Full-Stack Developer", story: "Through Next Switch Labs, I transitioned from a barista to a full-stack developer. Now I'm building solutions for local businesses in Ghana.", metric: "140k+", metricLabel: "Lives Impacted", slug: "grace-osei-from-barista-to-full-stack-developer" },
  { name: "Dr. James Kiprop", role: "AI Researcher, Nairobi", title: "Dr. James Kiprop: Building AI That Speaks Swahili", story: "The AI Research Division gave me resources to develop a Swahili-language LLM that's now being adopted by universities across East Africa.", metric: "12", metricLabel: "Countries Reached", slug: "dr-james-kiprop-building-ai-that-speaks-swahili" },
  { name: "Chioma Eze", role: "Academy Graduate, Lagos", title: "Chioma Eze: From Academy Graduate to Y Combinator Founder", story: "The Academy didn't just teach me code — it taught me how to think like a founder. My startup is now in Y Combinator.", metric: "$8.2M", metricLabel: "Funding Raised", slug: "chioma-eze-from-academy-graduate-to-y-combinator-founder" },
]

export default function ImpactStories() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#010a0e] to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(1,255,240,0.015)_0%,transparent_50%)]" />

      <motion.div style={{ y }} className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-white/20 uppercase mb-6">Impact Stories</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">Lives <span className="text-gradient">Transformed.</span></h2>
          <p className="mt-6 max-w-2xl mx-auto text-base text-white/30">
            Real people whose futures have been reshaped by the work we&apos;re doing across the continent.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {stories.map((story, i) => (
            <Link
              key={story.name}
              href={`/insights/${story.slug}`}
              className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500"
            >
              <Quote className="h-6 w-6 text-cyan-400/30 mb-4" />
              <p className="text-sm text-white/50 leading-relaxed group-hover:text-white/60 transition-colors duration-300">
                &ldquo;{story.story}&rdquo;
              </p>
              <div className="mt-6 pt-6 border-t border-white/[0.06]">
                <p className="text-sm font-medium text-white/80">{story.name}</p>
                <p className="text-xs text-white/30 mt-0.5">{story.role}</p>
              </div>
              <div className="mt-6 flex items-center gap-3">
                <span className="text-2xl font-bold text-gradient">{story.metric}</span>
                <span className="text-xs text-white/30">{story.metricLabel}</span>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
