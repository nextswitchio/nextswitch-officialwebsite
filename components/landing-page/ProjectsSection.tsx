"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

const projects = [
  {
    id: 1,
    title: "7 Sevyn Styles",
    description: "7 Sevyn Styles is a fusion of modern and classic styles, offering a curated collection of clothing and accessories for every occasion.",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200&h=800&fit=crop",
  },
  {
    id: 2,
    title: "DgnRave",
    description: "A cutting-edge design platform empowering creators with intuitive tools for stunning visual experiences.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
  },
  {
    id: 3,
    title: "TechFlow",
    description: "Modern tech solutions for seamless digital transformation and enterprise innovation.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=800&fit=crop",
  },
  {
    id: 4,
    title: "FinServe",
    description: "Innovative fintech platform revolutionizing financial services across Africa.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
  },
];

const ProjectsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    // Defer state updates to avoid synchronous setState
    queueMicrotask(() => {
      onSelect();
      setScrollSnaps(emblaApi.scrollSnapList());
    });

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-[#3B5BDB] via-[#5C7CFA] to-[#E8590C]">
      <div className="container mx-auto px-4 lg:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-20 gap-8 relative">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4">
              Projects
            </h2>
            <p className="text-white/80 font-display italic text-xl md:text-2xl">
              Innovation Meets Expertise
            </p>
          </div>

          {/* Navigation Arrows (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all group"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 group-active:scale-90 transition-transform" />
            </button>
            <button
              onClick={scrollNext}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all group"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 group-active:scale-90 transition-transform" />
            </button>
          </div>
        </div>

        {/* Carousel Viewport */}
        <div className="overflow-visible" ref={emblaRef}>
          <div className="flex -ml-4 md:-ml-6">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="flex-[0_0_100%] md:flex-[0_0_75%] lg:flex-[0_0_65%] pl-4 md:pl-6 min-w-0"
                onClick={() => scrollTo(index)}
              >
                <div
                  className={`relative rounded-[2rem] overflow-hidden aspect-[4/3] group transition-all duration-700 ease-out cursor-pointer select-none ${selectedIndex === index
                    ? 'opacity-100 scale-100 shadow-2xl shadow-black/20'
                    : 'opacity-40 scale-[0.92]'
                    }`}
                >
                  <Image
                    height={800}
                    width={1200}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 opacity-80 group-hover:opacity-100" />

                  {/* Project Details */}
                  <div className={`absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-12 transition-all duration-700 ${selectedIndex === index
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                    }`}>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">
                      {project.title}
                    </h3>
                    <p className="text-white/80 text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl font-light">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Controls (Pagination Dots + Mobile Arrows) */}
        <div className="mt-12 flex flex-col items-center gap-8">
          {/* Pagination Dots */}
          <div className="flex items-center gap-3">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`transition-all duration-500 rounded-full h-2 ${selectedIndex === index
                  ? 'w-10 bg-white'
                  : 'w-2 bg-white/30 hover:bg-white/50'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Mobile Navigation Arrows */}
          <div className="flex md:hidden items-center gap-6">
            <button
              onClick={scrollPrev}
              className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={scrollNext}
              className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
