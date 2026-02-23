"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, BadgeCheck } from "lucide-react";
import { AnimatedSection } from "@/components/animations/AnimatedSection";

const benefits = [
  "Gain hands-on experience",
  "Learn operational systems",
  "Work in a structured tech environment",
  "Receive mentorship",
  "Build career-ready competence",
];

const Internship = () => {
  return (
    <section className="bg-[#f5f7ff] py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-12">
        <AnimatedSection variant="fadeInUp">
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_minmax(0,1fr)] gap-10 lg:gap-14 items-stretch">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#e3ecff] px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#0046b3]">
                <span className="h-2 w-2 rounded-full bg-[#006ff5]" />
                <span>Next Switch Internship</span>
              </div>

              <div className="space-y-3">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#00153a]">
                  Next Switch Internship
                </h2>
                <div className="inline-flex items-center gap-3 rounded-full bg-[#006ff5] px-4 py-1.5 text-xs md:text-sm font-semibold text-white shadow-md">
                  <span>Cohort 2026</span>
                </div>
                <div className="flex items-center gap-2 text-sm md:text-base font-semibold text-[#001f3f]">
                  <BadgeCheck className="h-5 w-5 text-[#006ff5]" />
                  <span>Interns (Tech &amp; Business Roles)</span>
                </div>
              </div>

              <p className="max-w-2xl text-sm md:text-base text-[#1a2a4d]/80">
                At Next Switch Ltd, we do not just offer internships. We develop professionals.
              </p>

              <div className="rounded-2xl bg-white p-6 shadow-[0_18px_45px_rgba(0,35,102,0.08)] border border-[#d4e0ff] space-y-4">
                <h3 className="text-sm md:text-base font-semibold tracking-wide text-[#001f3f]">
                  Selected interns will:
                </h3>
                <ul className="space-y-2 text-sm md:text-base text-[#1a2a4d]">
                  {benefits.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#e6f0ff] text-[10px] text-[#006ff5]">
                        ●
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-2xl bg-[#006ff5] px-6 py-5 text-white shadow-lg">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
                    Vision
                  </p>
                  <p className="text-sm md:text-base font-semibold">
                    We are building the next generation of builders.
                  </p>
                </div>

                <div className="flex flex-col justify-between rounded-2xl bg-[#00e0b8] px-6 py-5 text-[#001f3f] shadow-lg">
                  <div className="space-y-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#004a3b]">
                      Applications
                    </p>
                    <p className="text-sm md:text-base font-semibold">
                      Send CV + Portfolio to:
                    </p>
                    <a
                      href="mailto:hr@nextswitch.org"
                      className="text-sm md:text-base font-semibold text-[#001f3f] underline underline-offset-4"
                    >
                      hr@nextswitch.org
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 pt-2 sm:flex-row">
                <Link href="/internship" className="w-full sm:w-auto">
                  <Button className="flex w-full items-center justify-center gap-2 rounded-full bg-[#006ff5] px-6 py-5 text-sm font-semibold text-white shadow-md hover:bg-[#0056c4]">
                    View Internship Details
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <div className="inline-flex items-center gap-2 text-xs md:text-sm font-medium text-[#c53030]">
                  <span className="inline-flex h-2 w-2 rounded-full bg-[#c53030]" />
                  <span>Limited slots available</span>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl p-8 text-white shadow-[0_28px_70px_rgba(0,22,71,0.7)]">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop&crop=faces"
                alt="Next Switch interns collaborating on a project"
                fill
                sizes="(min-width: 1024px) 420px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#001f3f]/90 via-[#003a80]/85 to-[#00b9ff]/80" />
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                    Next Switch
                  </p>
                  <p className="text-xl md:text-2xl font-bold leading-snug">
                    Start your journey into tech and business with real-world projects.
                  </p>
                </div>
                <div className="mt-8 space-y-3">
                  <p className="text-sm text-white/80">
                    Join a cohort designed to help you grow, build, and ship impactful work alongside experienced mentors.
                  </p>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-medium">
                    <Mail className="h-4 w-4" />
                    <span>Questions? Email hr@nextswitch.org</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Internship;
