"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, Image as ImageIcon, Users, Boxes, Newspaper } from "lucide-react";

const PressBody = () => {
  const tabs = [
    { id: "news", label: "Featured news", icon: Newspaper },
    { id: "logo", label: "Logo", icon: ImageIcon },
    { id: "team", label: "Team Pictures", icon: Users },
    { id: "featured", label: "Featured Businesses", icon: Boxes },
  ] as const;

  const [active, setActive] = useState<(typeof tabs)[number]["id"]>("logo");

  const resources: Record<(typeof tabs)[number]["id"], { id: string; src: string; alt: string; }[]> = {
    news: [
      { id: "news-1", src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1200&h=800&fit=crop", alt: "News asset" },
      { id: "news-2", src: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=800&fit=crop", alt: "News asset" },
      { id: "news-3", src: "https://images.unsplash.com/photo-1488998427799-e3362cec87c3?w=1200&h=800&fit=crop", alt: "News asset" },
      { id: "news-4", src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=800&fit=crop", alt: "News asset" },
      { id: "news-5", src: "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=1200&h=800&fit=crop", alt: "News asset" },
      { id: "news-6", src: "https://images.unsplash.com/photo-1518602164577-0b2b03efb525?w=1200&h=800&fit=crop", alt: "News asset" },
    ],
    logo: [
      { id: "logo-1", src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=800&fit=crop&crop=faces", alt: "Press asset" },
      { id: "logo-2", src: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=1200&h=800&fit=crop&crop=faces", alt: "Press asset" },
      { id: "logo-3", src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=800&fit=crop", alt: "Press asset" },
      { id: "logo-4", src: "https://images.unsplash.com/photo-1545235617-9465c4b8ba06?w=1200&h=800&fit=crop", alt: "Press asset" },
      { id: "logo-5", src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=800&fit=crop", alt: "Press asset" },
      { id: "logo-6", src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=800&fit=crop", alt: "Press asset" },
    ],
    team: [
      { id: "team-1", src: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=1200&h=800&fit=crop&crop=faces", alt: "Team photo" },
      { id: "team-2", src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200&h=800&fit=crop&crop=faces", alt: "Team photo" },
      { id: "team-3", src: "https://images.unsplash.com/photo-1520686441443-57b3425a98c8?w=1200&h=800&fit=crop&crop=faces", alt: "Team photo" },
      { id: "team-4", src: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=1200&h=800&fit=crop&crop=faces", alt: "Team photo" },
    ],
    featured: [
      { id: "prod-1", src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=800&fit=crop", alt: "Product mockup" },
      { id: "prod-2", src: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=1200&h=800&fit=crop", alt: "Product mockup" },
      { id: "prod-3", src: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=1200&h=800&fit=crop", alt: "Product mockup" },
      { id: "prod-4", src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&h=800&fit=crop", alt: "Product mockup" },
    ],
  };

  const activeResources = resources[active];

  return (
    <section className="py-8 lg:py-12">
      <div className="container mx-auto px-4 lg:px-12">
        <nav className="mb-6 md:mb-8 lg:hidden">
          <div className="flex items-center gap-3 overflow-x-auto whitespace-nowrap scroll-smooth px-1">
            {tabs.map((t) => {
              const Icon = t.icon;
              const activeTab = active === t.id;
              return (
                <button
                  key={t.id}
                  type="button"
                  aria-selected={activeTab}
                  onClick={() => setActive(t.id)}
                  className={[
                    "flex items-center gap-2 rounded-full px-4 py-2 text-sm transition flex-shrink-0",
                    activeTab
                      ? "bg-[#006FF5] text-white"
                      : "bg-white text-[#0f172a] border border-[#e5e7eb] hover:bg-[#f8fafc]",
                  ].join(" ")}
                >
                  <Icon className="h-4 w-4" />
                  <span className="whitespace-nowrap">{t.label}</span>
                </button>
              );
            })}
          </div>
        </nav>


        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:items-start">
          <aside className="hidden h-fit rounded-3xl bg-white p-6 shadow-sm border border-[#e5e7eb] lg:block">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#6b7280]">
              Presskit items
            </p>
            <div className="space-y-2">
              {tabs.map((t) => {
                const Icon = t.icon;
                const activeTab = active === t.id;
                return (
                  <button
                    key={t.id}
                    type="button"
                    aria-selected={activeTab}
                    onClick={() => setActive(t.id)}
                    className={[
                      "flex w-full items-center gap-2 rounded-full px-4 py-2 text-sm transition",
                      activeTab
                        ? "bg-[#006FF5] text-white"
                        : "bg-white text-[#0f172a] border border-[#e5e7eb] hover:bg-[#f8fafc]",
                    ].join(" ")}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{t.label}</span>
                  </button>
                );
              })}
            </div>
          </aside>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#0f172a]">
                {tabs.find((t) => t.id === active)?.label}
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {activeResources.map((item) => (
                <div
                  key={item.id}
                  className="group relative overflow-hidden rounded-3xl bg-white shadow-[0_12px_40px_rgba(0,0,0,0.12)]"
                >
                  <div className="relative h-40 md:h-48 lg:h-56 w-full">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 1024px) 360px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <a
                      href={item.src}
                      download
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button
                        size="sm"
                        variant="outline"
                        className="rounded-full bg-white/90 backdrop-blur px-3 py-1.5 text-[#0f172a] hover:bg-white"
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-semibold text-[#0f172a]">
                Right ways to use our Logo
              </h3>
              <ul className="space-y-2 text-sm md:text-base text-[#334155]">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#006FF5]" />
                  Use provided assets without altering proportions, colors, or spacing.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#006FF5]" />
                  Maintain clear space around the logo for visibility and impact.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#006FF5]" />
                  Ensure contrast with backgrounds; prefer neutral or brand tints.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#006FF5]" />
                  Do not stretch, rotate, or apply effects such as shadows or glows.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#006FF5]" />
                  Keep legibility at small sizes; avoid placing text too close.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#006FF5]" />
                  Use approved color variations only: full-color, white, or dark.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#006FF5]" />
                  Do not place logo over busy imagery without a protective tint.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#006FF5]" />
                  Keep aspect ratio intact and align with other elements cleanly.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#006FF5]" />
                  Avoid using outdated assets; use files from this press kit.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#006FF5]" />
                  Contact our team for approvals on non-standard usage.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PressBody
