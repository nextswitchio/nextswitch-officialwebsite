'use client'

import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import StatsBar from "./stats-bar";
import { AnimatedText } from "@/components/animations/AnimatedText";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { AnimatedButton } from "@/components/animations/AnimatedButton";
import { useParallax } from "@/lib/animations/hooks/useParallax";
import { motion } from "framer-motion";
import WorldMap from "@/components/animations/WorldMap";

const HeroSection = () => {
  const { ref: parallaxRef, y } = useParallax({ speed: 0.4 });

  return (
    <section className="relative min-h-[calc(100vh-80px)] bg-black overflow-hidden">
      {/* World Map Background - Africa Focus */}
      <WorldMap />
      
      {/* Aurora Background Effect with Parallax */}
      <motion.div ref={parallaxRef} style={{ y }} className="absolute inset-0">
        <div className="absolute inset-0 aurora-effect animate-aurora-pulse" />
        <div className="absolute top-0 right-1/4 w-[800px] h-[800px] rounded-full bg-blue-500/20 blur-[150px] animate-aurora-pulse" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[600px] rounded-full bg-indigo-500/15 blur-[120px] animate-aurora-pulse" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[100px] animate-aurora-pulse" />
      </motion.div>

      {/* Content */}
      <div className="relative container mx-auto px-6 lg:px-12 py-24 md:py-36">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            className="inline-flex text-white items-center gap-2 px-4 py-2 rounded-full bg-badge border border-border mb-8 animate-fade-in-up"
            style={{ animationDelay: '0.1s' }}
          >
            <div className="w-2 h-2 rounded-full text-white font-light bg-white animate-pulse" />Building Africa&apos;s Digital Future
          </div>

          {/* Main Heading */}
          <AnimatedText 
            text="Lightning Africa" 
            variant="word"
            className="text-5xl md:text-6xl lg:text-7xl font-normal leading-tight mb-4 text-white font-sans"
          />
          <AnimatedText 
            text="Building the Future" 
            variant="word"
            className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-8 font-sans"
            delay={0.3}
          />

          {/* Description */}
          <AnimatedSection variant="fadeInUp" delay={0.5}>
            <p className="text-base md:text-lg lg:text-xl text-white max-w-2xl mb-12 leading-relaxed font-normal">
              We&apos;re a forward-thinking African technology company focused on innovation, digital
              transformation, and intelligent solutions that empower people and businesses.
            </p>
          </AnimatedSection>

          {/* CTA Buttons */}
          <AnimatedSection variant="fadeInUp" delay={0.7}>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <AnimatedButton 
                variant="cta" 
                magnetic
                className="text-[#040404] bg-gradient-to-r from-[#006FF5] to-[#01FFF0] rounded-full sm:w-auto w-full"
              >
                Explore Our Solutions
                <ArrowRight className="w-5 h-5" />
              </AnimatedButton>

              <AnimatedButton 
                variant="secondary"
                className="bg-transparent border-[#F4F4F4] border hover:bg-[#F4F4F4]/10 text-white rounded-full sm:w-auto w-full"
              >
                Partner with Us
                <ArrowUpRight className="w-5 h-5" />
              </AnimatedButton>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <StatsBar />
    </section>
  );
};

export default HeroSection;
