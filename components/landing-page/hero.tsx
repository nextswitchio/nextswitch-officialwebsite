import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import StatsBar from "./stats-bar";

const HeroSection = () => {
  return (
    <section className="relative min-h-[calc(100vh-80px)] bg-black overflow-hidden">
      {/* Aurora Background Effect */}
      <div className="absolute inset-0 aurora-effect animate-aurora-pulse" />
      <div className="absolute top-0 right-1/4 w-[800px] h-[800px] rounded-full bg-blue-500/20 blur-[150px] animate-aurora-pulse" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[600px] rounded-full bg-indigo-500/15 blur-[120px] animate-aurora-pulse" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[100px] animate-aurora-pulse" />

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
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-normal leading-tight mb-4 animate-fade-in-up text-white font-sans" style={{ animationDelay: '0.2s' }}>Lightning Africa</h1>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-8 animate-fade-in-up font-sans"
            style={{ animationDelay: '0.3s' }}>
            Building the <span className="font-display text-[#01FFF0] italic">Future</span>
          </h2>

          {/* Description */}
          <p
            className="text-base md:text-lg lg:text-xl text-white max-w-2xl mb-12 leading-relaxed animate-fade-in-up font-normal"
            style={{ animationDelay: '0.4s' }}
          >
            We&apos;re a forward-thinking African technology company focused on innovation, digital
            transformation, and intelligent solutions that empower people and businesses.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-in-up w-full sm:w-auto"
            style={{ animationDelay: '0.5s' }}
          >
            <Button variant="default" size="lg" className="text-[#040404] bg-gradient-to-r from-[#006FF5] to-[#01FFF0] rounded-full sm:w-auto w-full hover:scale-105 hover:shadow-xl transition-all">
              Explore Our Solutions
              <ArrowRight className="w-5 h-5" />
            </Button>

            <Button variant="default" size="lg" className="bg-transparent border-[#F4F4F4] border hover:bg-[#F4F4F4]/10 rounded-full sm:w-auto w-full transition-all">
              Partner with Us
              <ArrowUpRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      <StatsBar />
    </section>
  );
};

export default HeroSection;
