"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const articles = [
  { title: "Why Redemptive Innovation Matters for Africa's Future", topic: "Technology", date: "Apr 8, 2026", readTime: "8 min read", slug: "why-redemptive-innovation-matters-for-africas-future" },
  { title: "Building AI Systems That Understand African Contexts", topic: "AI", date: "Mar 25, 2026", readTime: "12 min read", slug: "building-ai-systems-that-understand-african-contexts" },
  { title: "The Role of Faith in Technology and Institution Building", topic: "Leadership", date: "Mar 18, 2026", readTime: "10 min read", slug: "the-role-of-faith-in-technology-and-institution-building" },
  { title: "Educating the Next Generation of African Technologists", topic: "Education", date: "Mar 10, 2026", readTime: "7 min read", slug: "educating-the-next-generation-of-african-technologists" },
  { title: "Digital Transformation in African Governments: A Playbook", topic: "Digital Transformation", date: "Feb 28, 2026", readTime: "15 min read", slug: "digital-transformation-in-african-governments-a-playbook" },
  { title: "How African Startups Can Scale Beyond Borders", topic: "Entrepreneurship", date: "Feb 14, 2026", readTime: "9 min read", slug: "how-african-startups-can-scale-beyond-borders" },
]

export default function InsightsGrid() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [30, -30])

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
            <span className="inline-block text-xs font-semibold tracking-widest text-white/20 uppercase mb-4">Insights</span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Ideas Worth <span className="text-gradient">Exploring.</span></h2>
          </div>
          <a href="#" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors shrink-0">
            View All Articles <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, i) => (
            <Link
              key={article.title}
              href={`/insights/${article.slug}`}
              className="group bg-black/50 p-8 transition-all duration-500"
            >
              <span className="text-xs font-medium text-cyan-400/60 uppercase tracking-wider">{article.topic}</span>
              <h3 className="mt-3 text-base font-semibold text-white/80 group-hover:text-white transition-colors leading-snug">{article.title}</h3>
              <div className="mt-4 flex items-center gap-3 text-xs text-white/20">
                <span>{article.date}</span>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <span>{article.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
