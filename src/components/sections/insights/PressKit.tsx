"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Download, FileText, Image, FileJson } from "lucide-react"

const resources = [
  { icon: FileText, label: "Press Release Template", format: "DOCX" },
  { icon: Image, label: "Brand Assets & Logos", format: "ZIP" },
  { icon: FileJson, label: "Executive Bios & Photos", format: "PDF" },
  { icon: FileText, label: "Company Fact Sheet", format: "PDF" },
]

export default function PressKit() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#010a0e] to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(13,71,161,0.04)_0%,transparent_50%)]" />

      <motion.div style={{ y }} className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-center gap-12"
        >
          <div className="flex-1">
            <span className="inline-block text-xs font-semibold tracking-widest text-white/20 uppercase mb-4">Press Kit</span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Media <span className="text-gradient">Resources.</span></h2>
            <p className="mt-6 text-base text-white/30 max-w-lg leading-relaxed">
              Everything journalists and partners need to cover our story — logos, brand assets, executive bios, and company fact sheets.
            </p>
            <a href="#" className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white/[0.06] border border-white/10 px-8 py-4 text-sm font-medium text-white transition-all hover:bg-white/10">
              <Download className="h-4 w-4" />
              Download Complete Press Kit
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-3 min-w-[280px]">
            {resources.map((r, i) => (
              <motion.a
                key={r.label}
                href="#"
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.04)" }}
                className="group/kit rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 text-center transition-all duration-500 hover:border-white/10"
              >
                <r.icon className="mx-auto h-5 w-5 text-white/30 group-hover/kit:text-cyan-400 transition-colors duration-300" />
                <p className="mt-3 text-xs font-medium text-white/60 group-hover/kit:text-white/80 transition-colors">{r.label}</p>
                <span className="mt-1 block text-[10px] text-white/20">{r.format}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
