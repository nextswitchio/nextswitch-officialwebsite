"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { MapPin, Briefcase, ArrowRight } from "lucide-react"

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/ — /g, "-")
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
}

const positions = [
  { title: "Senior Software Engineer", department: "Engineering", location: "Lagos, Nigeria", type: "Full-time" },
  { title: "Product Designer", department: "Design", location: "Lagos, Nigeria", type: "Full-time" },
  { title: "AI Research Scientist", department: "Labs", location: "Nairobi, Kenya", type: "Full-time" },
  { title: "Program Manager — Academy", department: "Academy", location: "Accra, Ghana", type: "Full-time" },
  { title: "Digital Marketing Lead", department: "Marketing", location: "Remote / Lagos", type: "Full-time" },
  { title: "Partnerships Associate", department: "Business Development", location: "Lagos, Nigeria", type: "Full-time" },
  { title: "DevOps Engineer", department: "Engineering", location: "Remote", type: "Full-time" },
  { title: "Community Manager — CoWork", department: "CoWork", location: "Nairobi, Kenya", type: "Full-time" },
]

const departments = ["All", "Engineering", "Design", "Labs", "Academy", "Marketing", "Business Development", "CoWork"]

export default function OpenPositions() {
  const [activeDept, setActiveDept] = useState("All")
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])

  const filtered = activeDept === "All" ? positions : positions.filter(p => p.department === activeDept)

  return (
    <section id="positions" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#010a0e] to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(13,71,161,0.04)_0%,transparent_50%)]" />

      <motion.div style={{ y }} className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-white/20 uppercase mb-4">Open Positions</span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Join the <span className="text-gradient">Team.</span></h2>
          <p className="mt-4 text-base text-white/30 max-w-xl">
            We&apos;re looking for passionate people to help us build Africa&apos;s digital future.
          </p>
        </motion.div>

        <div className="mt-10 flex flex-wrap gap-2">
          {departments.map(dept => (
            <button
              key={dept}
              onClick={() => setActiveDept(dept)}
              className={`rounded-full px-4 py-2 text-xs font-medium transition-all duration-300 ${
                activeDept === dept
                  ? "bg-white/10 text-white border border-white/10"
                  : "text-white/30 border border-white/[0.06] hover:text-white/60 hover:border-white/10"
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {filtered.map((pos, i) => (
              <Link
                key={pos.title}
                href={`/careers/${slugify(pos.title)}`}
                className="group rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-500 hover:border-white/10 block hover:bg-white/[0.03]"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-semibold tracking-wider text-cyan-400/60 uppercase">{pos.department}</span>
                    <h3 className="mt-1 text-base font-semibold text-white/80 group-hover:text-white transition-colors">{pos.title}</h3>
                    <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-white/30">
                      <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" /> {pos.location}</span>
                      <span className="inline-flex items-center gap-1"><Briefcase className="h-3 w-3" /> {pos.type}</span>
                    </div>
                  </div>
                  <ArrowRight className="mt-1 h-4 w-4 text-white/20 group-hover:text-cyan-400 transition-colors shrink-0" />
                </div>
              </Link>
            ))}
          </div>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-sm text-white/20">No open positions in this department right now.</p>
        )}
      </motion.div>
    </section>
  )
}
