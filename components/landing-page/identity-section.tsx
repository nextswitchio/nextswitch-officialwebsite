'use client'

import { useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Play, Star, Phone } from "lucide-react";
import Image from "next/image";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { StaggerContainer } from "@/components/animations/StaggerContainer";
import { CountUpNumber } from "@/components/animations/CountUpNumber";
import { motion } from "framer-motion";


const IdentitySection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const stats = [
    { value: 500, suffix: "+", label: "Project Delivered" },
    { value: 10, suffix: "k+", label: "People Trained" },
    { value: 10, suffix: "+", label: "Countries Served" },
  ];

  const avatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#00337C] to-[#000916] py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-12">
        {/* Header */}
        <AnimatedSection variant="fadeInUp">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-10 gap-6">
            <div className="max-w-[950px]">
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-[#F4F4F4] mb-6">
                Our <span className="font-display italic text-[#F4F4F4">Identity</span>
              </h2>
              <p className="text-base md:text-lg lg:text-lg text-[#F4F4F4] font-normal font-sans italic leading-relaxed mb-10">
                Next Switch Ltd is at the forefront of Africa&apos;s digital revolution. We combine cutting-edge technology with deep local
                expertise to deliver solutions that transform businesses and empower communities across the continent.
              </p>

              {/* Avatars and Rating Row */}
              <div className="flex md:flex-row flex-col md:items-center items-start gap-4 flex-wrap">
                <div className="flex -md:space-x-3 -space-x-2">
                  {avatars.map((avatar, i) => (
                    <Image
                      key={i}
                      src={avatar}
                      alt={`User ${i + 1}`}
                      className="md:w-16 md:h-16 w-12 h-12 rounded-full border-2 border-background object-cover"
                      width={700}
                      height={700}
                    />
                  ))}
                </div>
                <div className="flex flex-col items-start gap-3">
                  <div className="flex items-center gap-0.5">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                    ))}
                    <Star className="w-8 h-8 text-yellow-400/40" />
                  </div>
                  <span className="text-white font-sans font-light text-md">
                    Join <span className="text-white font-semibold">50,034</span> Others
                  </span>
                </div>
              </div>
            </div>

            <Button
              variant="outline"
              className="gap-2 text-white hover:text-white border-gradient-to-r from-[#F4F4F4] to-[#8E8E8E]  hover:border-white/20 text-lg font-light font-sans bg-white/10 hover:bg-white/20 transition-colors w-fit rounded-full py-4 px-6"
            >
              <Phone className="w-4 h-4" />
              Schedule a call now
            </Button>
          </div>
        </AnimatedSection>

        {/* Video Section */}
        <AnimatedSection variant="fadeInScale" delay={0.2}>
          <div className="relative rounded-2xl overflow-hidden bg-card border border-border/30 shadow-2xl shadow-black/30 h-[373px] md:h-[480px] lg:h-[600px] max-w-5xl mx-auto group">
            <video
              ref={videoRef}
              src="/videos/video1.mp4"
              poster="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=675&fit=crop"
              className="w-full h-full object-cover"
              preload="metadata"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />
            {/* Play Button Overlay */}
            {!isPlaying && (
              <div
                className="absolute inset-0 flex items-center justify-center cursor-pointer transition-opacity duration-300"
                onClick={handlePlayClick}
              >
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 hover:bg-white/30 hover:scale-110 transition-all duration-300">
                  <Play className="w-8 h-8 text-white fill-white/80 ml-1" />
                </div>
              </div>
            )}
          </div>
        </AnimatedSection>

        {/* Stats */}
        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 sm:grid-cols-3 gap-12 lg:gap-20 mt-20 lg:mt-24 max-w-5xl mx-auto text-center text-white">
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-2 tracking-tight">
                <CountUpNumber 
                  end={stat.value} 
                  suffix={stat.suffix}
                  duration={2000}
                  triggerOnView={true}
                />
              </div>
              <div className="text-white/80 text-sm md:text-base lg:text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default IdentitySection;
