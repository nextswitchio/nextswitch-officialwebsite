"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import aboutherobg from '@/public/pictures/aboutherobg.png';
import { useParallax } from "@/lib/animations/hooks/useParallax";
import { motion } from "framer-motion";

const AboutHero = () => {
  const { ref, y } = useParallax({ speed: 0.5 });

  return (
    <section ref={ref} className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden bg-[#0A0A0A]/50">
      {/* Background Image with Overlay */}
      <motion.div
        className="absolute top-0 bottom-0 right-0 left-0 bg-cover bg-bottom z-0"
        style={{
          backgroundImage: `url(${aboutherobg.src})`,
          y,
        }}
      />

      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/10 to-transparent z-0" />

      <div className="container relative mx-auto px-4 lg:px-12 z-10\">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-white" />
            <span className="text-sm text-white/80 font-medium tracking-wide">About Us</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-7xl font-semibold text-white mb-12 leading-tight tracking-tight">
            Join us in Shaping
            <br />
            Africa <span className="text-[#00F0FF] font-serif italic">Ideas</span>
          </h1>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 w-full sm:w-auto">
            <Button
              className="bg-[#00F0FF] hover:bg-[#00d0de] text-black font-semibold rounded-full px-8 h-12 text-base border-none transition-all hover:shadow-lg"
            >
              Explore Our Solutions
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>

            <Button
              variant="outline"
              className="bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white rounded-full px-8 h-12 text-base"
            >
              Partner with Us
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
