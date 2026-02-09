'use client'

import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

const LabsHero = () => {
  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-black">
      {/* Aurora Background Effect */}
      <div className="absolute inset-0 aurora-effect animate-aurora-pulse" />
      <div className="absolute top-0 right-1/4 w-[800px] h-[800px] rounded-full bg-blue-500/20 blur-[150px] animate-aurora-pulse" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[600px] rounded-full bg-indigo-500/15 blur-[120px] animate-aurora-pulse" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[100px] animate-aurora-pulse" />

      {/* Content */}
      <div className="relative container mx-auto px-4 lg:px-8 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-sm text-white font-medium">About Us</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
            Reshaping African Tech{" "}
            <span className="block">Ecosystem</span>
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg text-white/70 max-w-xl mb-10 leading-relaxed">
            Delivering Solutions today, built with quality that empowers your tomorrow.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-[#006FF5] hover:bg-[#0056cc] text-white rounded-full px-6"
            >
              Partner with us
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border border-white/30 text-white hover:bg-white/10 rounded-full px-6"
            >
              Learn about Labs
              <ChevronDown className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LabsHero;
