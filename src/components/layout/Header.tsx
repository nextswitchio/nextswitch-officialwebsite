"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Building2, Newspaper, Wrench, FlaskConical, Mail, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "The Company", href: "/about", icon: Building2 },
  { label: "Insights", href: "/insights", icon: Newspaper },
  { label: "Services", href: "/services", icon: Wrench },
  { label: "The Lab", href: "/labs", icon: FlaskConical },
  { label: "Contact", href: "/contact", icon: Mail },
]

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const panelVariants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: { type: "spring" as const, damping: 30, stiffness: 300 },
  },
  exit: {
    x: "100%",
    transition: { type: "spring" as const, damping: 30, stiffness: 300 },
  },
}

const EASE = [0.16, 1, 0.3, 1] as const

const linkVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.1 + i * 0.06, duration: 0.4, ease: EASE },
  }),
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  const close = useCallback(() => setMobileOpen(false), [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-3 group">
          <img src="/Next-Switch-Logo-White.png" alt="Next Switch" className="h-8 w-auto" />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-white/50 transition-colors hover:text-white/90"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/booking"
            className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-white/90 transition-all hover:bg-white/10 hover:border-white/20"
          >
            Start Your Innovation Journey
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
          aria-label="Toggle menu"
        >
          <motion.div
            animate={mobileOpen ? "open" : "closed"}
            className="flex flex-col items-center justify-center gap-1"
          >
            <motion.span
              variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: 45, y: 4 } }}
              className="block h-px w-5 bg-white/60"
            />
            <motion.span
              variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
              className="block h-px w-5 bg-white/60"
            />
            <motion.span
              variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: -45, y: -4 } }}
              className="block h-px w-5 bg-white/60"
            />
          </motion.div>
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.3 }}
            onClick={close}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 right-0 z-40 flex h-dvh w-full max-w-sm flex-col border-l border-white/[0.06] bg-[#0a0a0a] md:hidden"
          >
            <div className="flex items-center justify-between px-6 pt-5 pb-2">
              <span className="text-xs font-medium tracking-widest text-white/20 uppercase">Navigation</span>
              <span className="text-[10px] text-white/15">Menu</span>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6">
              {navLinks.map((link, i) => {
                const Icon = link.icon
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    custom={i}
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                    onClick={close}
                    className="group flex items-center gap-4 rounded-xl px-4 py-4 text-base text-white/50 transition-all duration-300 hover:bg-white/[0.03] hover:text-white/90"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.02] transition-colors group-hover:border-cyan-400/20 group-hover:bg-cyan-400/[0.03]">
                      <Icon className="h-4 w-4 text-white/40 group-hover:text-cyan-400 transition-colors" />
                    </span>
                    <span className="font-medium">{link.label}</span>
                  </motion.a>
                )
              })}
            </div>

            <div className="border-t border-white/[0.06] px-6 py-6">
              <motion.a
                href="/booking"
                onClick={close}
                custom={navLinks.length}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-medium text-white/90 transition-all hover:bg-white/10 hover:border-white/20"
              >
                <span>Start Your Innovation Journey</span>
                <ArrowRight className="h-4 w-4 text-white/30 transition-transform group-hover:translate-x-1" />
              </motion.a>
              <div className="mt-4 flex items-center gap-3 text-xs text-white/20">
                <a href="mailto:hello@nextswitch.org" className="hover:text-white/40 transition-colors">Email</a>
                <span className="h-1 w-1 rounded-full bg-white/10" />
                <a href="#" className="hover:text-white/40 transition-colors">Press</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
