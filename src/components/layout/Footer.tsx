"use client"

import { ArrowUpRight, Mail, MapPin } from "lucide-react"

const sections = [
  {
    title: "Next Switch",
    links: [
      { label: "Who We Are", href: "#" },
      { label: "What We Build", href: "#" },
      { label: "Our Ecosystem", href: "#" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Next Switch Academy",
    links: [
      { label: "Programs", href: "http://www.nextswitchacademy.com" },
      { label: "Talent Development", href: "http://www.nextswitchacademy.com" },
      { label: "Apply Now", href: "http://www.nextswitchacademy.com" },
    ],
  },
  {
    title: "Next Switch Labs",
    links: [
      { label: "Research", href: "#" },
      { label: "Innovation", href: "#" },
      { label: "Prototypes", href: "#" },
    ],
  },
  {
    title: "Next Switch CoWork",
    links: [
      { label: "Spaces", href: "#" },
      { label: "Community", href: "#" },
      { label: "Membership", href: "#" },
    ],
  },
]

const socialLinks = [
  { label: "Twitter / X", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "Instagram", href: "#" },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(1,255,240,0.03)_0%,transparent_60%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 pt-24 pb-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img src="/Next-Switch-Logo-White.png" alt="Next Switch" className="h-8 w-auto" />
            </div>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              Lighting Africa. Building the Future.
            </p>
            <div className="mt-6 space-y-3">
              <a href="mailto:hello@nextswitch.org" className="flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors">
                <Mail className="h-3.5 w-3.5" />
                hello@nextswitch.org
              </a>
              <div className="flex items-start gap-2 text-sm text-white/40">
                <MapPin className="h-3.5 w-3.5 mt-0.5" />
                <span>Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="text-xs font-semibold tracking-widest text-white/30 uppercase mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/50 hover:text-white/90 transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/5">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
            <div className="flex gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs text-white/30 hover:text-white/70 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <p className="text-xs text-white/20">
              &copy; {new Date().getFullYear()} Next Switch Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
