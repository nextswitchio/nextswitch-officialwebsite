"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  Code, Building2, RefreshCw, Cpu, Rocket, GraduationCap,
  Monitor, Smartphone, Layout, Beaker, Palette, Cable,
  Database, BarChart3, FileCheck, Route, Settings, Target,
  TrendingUp, MessageSquare, Brain, FlaskConical, BookOpen, Users,
  Lightbulb,
} from "lucide-react"

const capabilities = [
  {
    title: "Digital Product Development",
    subtitle: "Products emerging from wireframes into reality",
    icon: Code,
    services: [
      { label: "Web Applications", icon: Monitor },
      { label: "Mobile Applications", icon: Smartphone },
      { label: "SaaS Platforms", icon: Layout },
      { label: "MVP Development", icon: Beaker },
      { label: "Product Design", icon: Palette },
      { label: "UI/UX Design", icon: Palette },
      { label: "Platform Engineering", icon: Cable },
      { label: "API Development", icon: Code },
    ],
  },
  {
    title: "Enterprise & Business Solutions",
    subtitle: "Connected operational systems",
    icon: Building2,
    services: [
      { label: "ERP Solutions", icon: Database },
      { label: "CRM Systems", icon: Users },
      { label: "Workflow Automation", icon: Settings },
      { label: "Internal Platforms", icon: Monitor },
      { label: "Business Intelligence", icon: BarChart3 },
      { label: "Data Systems", icon: Database },
      { label: "Operational Digitization", icon: FileCheck },
    ],
  },
  {
    title: "Digital Transformation",
    subtitle: "Organizations evolving through technology",
    icon: RefreshCw,
    services: [
      { label: "Technology Strategy", icon: Route },
      { label: "Process Optimization", icon: Settings },
      { label: "Change Enablement", icon: Users },
      { label: "Digital Roadmaps", icon: Route },
      { label: "Innovation Programs", icon: Lightbulb },
      { label: "Technology Adoption", icon: TrendingUp },
    ],
  },
  {
    title: "AI & Emerging Technology",
    subtitle: "Human centered intelligence systems",
    icon: Cpu,
    services: [
      { label: "AI Strategy", icon: Target },
      { label: "AI Integration", icon: Cable },
      { label: "Intelligent Automation", icon: Settings },
      { label: "Conversational AI", icon: MessageSquare },
      { label: "Predictive Systems", icon: Brain },
      { label: "Emerging Technology", icon: FlaskConical },
    ],
  },
  {
    title: "Innovation & Venture Building",
    subtitle: "Ideas becoming ventures",
    icon: Rocket,
    services: [
      { label: "Startup Incubation", icon: Rocket },
      { label: "Product Validation", icon: Target },
      { label: "Venture Design", icon: Palette },
      { label: "Innovation Labs", icon: FlaskConical },
      { label: "Research & Development", icon: Brain },
      { label: "Ecosystem Building", icon: Users },
    ],
  },
  {
    title: "Training & Talent Development",
    subtitle: "Knowledge flowing through communities",
    icon: GraduationCap,
    services: [
      { label: "Technology Training", icon: Monitor },
      { label: "Corporate Upskilling", icon: TrendingUp },
      { label: "Digital Literacy", icon: BookOpen },
      { label: "Leadership Development", icon: Users },
      { label: "Innovation Workshops", icon: Lightbulb },
      { label: "Talent Programs", icon: GraduationCap },
    ],
  },
]

export default function Capabilities() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

      <motion.div style={{ y }} className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-white/20 uppercase mb-6">
            Our Capabilities
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            What We Bring{" "}
            <span className="text-gradient">To The Table.</span>
          </h2>
        </motion.div>

        <div className="mt-20 space-y-24">
          {capabilities.map((cap, i) => {
            const CapIcon = cap.icon
            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="grid gap-10 lg:grid-cols-5">
                  <div className="lg:col-span-2">
                    <div className="sticky top-32">
                      <span className="text-xs font-semibold tracking-widest text-cyan-400/60 uppercase">
                        Capability {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="mt-4 mb-5 inline-flex rounded-xl bg-white/5 p-3 ring-1 ring-white/[0.06]">
                        <CapIcon className="h-6 w-6 text-cyan-400" />
                      </div>
                      <h3 className="text-3xl sm:text-4xl font-bold text-white/90">
                        {cap.title}
                      </h3>
                      <p className="mt-3 text-base text-white/30 max-w-sm">
                        {cap.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-3">
                    <div className="grid gap-3 sm:grid-cols-2">
                      {cap.services.map((svc) => {
                        const SvcIcon = svc.icon
                        return (
                          <div
                            key={svc.label}
                            className="group rounded-xl border border-white/[0.04] bg-white/[0.01] px-5 py-4 flex items-center gap-3 hover:bg-white/[0.03] hover:border-white/[0.08] transition-all duration-500"
                          >
                            <div className="rounded-lg bg-white/5 p-2 ring-1 ring-white/[0.06] group-hover:ring-cyan-400/20 transition-all duration-500 shrink-0">
                              <SvcIcon className="h-3.5 w-3.5 text-cyan-400" />
                            </div>
                            <span className="text-sm font-medium text-white/70 group-hover:text-white/90 transition-colors">
                              {svc.label}
                            </span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>

                {i < capabilities.length - 1 && (
                  <div className="mt-16 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                )}
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
