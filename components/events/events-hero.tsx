"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { AnimatedSection } from "@/components/animations/AnimatedSection";

const EventsHero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-[#050616]">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#050616] via-[#050616] to-[#141432]" />
        <div
          className="absolute -right-[15%] top-1/4 h-[140%] w-[70%] opacity-80"
          style={{
            background:
              "linear-gradient(210deg, rgba(59,130,246,0.9) 0%, rgba(59,130,246,0.3) 40%, transparent 100%)",
            filter: "blur(90px)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-12 relative z-10">
        <AnimatedSection variant="fadeInUp" className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-white" />
            <span className="text-white/80 text-sm font-medium">Our Events</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold text-white leading-tight mb-6 tracking-tight">
            Grow your <span className="text-[#00e5ff] italic font-serif">Skills</span>
            <br />
            with our events
          </h1>

          <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Attend Next Switch events and learn from industry leaders. We welcome curious minds and
            ambitious innovators.
          </p>

          <div className="flex justify-center">
            <Link href="#events">
              <Button className="bg-[#00e5ff] hover:bg-[#00b8cc] text-[#050616] rounded-full px-8 h-12 text-base font-semibold">
                Check our events
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default EventsHero;
