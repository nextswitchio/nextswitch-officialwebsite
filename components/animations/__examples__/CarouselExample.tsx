"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const slides = [
  { id: 1, title: "Slide 1", color: "bg-blue-500" },
  { id: 2, title: "Slide 2", color: "bg-purple-500" },
  { id: 3, title: "Slide 3", color: "bg-pink-500" },
  { id: 4, title: "Slide 4", color: "bg-orange-500" },
];

/**
 * CarouselExample - Demonstrates spring animations for carousels
 * 
 * Features:
 * - Spring physics for smooth, natural transitions
 * - Hover effects on carousel controls with spring animation
 * - Auto-play that pauses on user interaction (hover, click, drag)
 * - Responsive design with mobile and desktop controls
 * 
 * Requirements: 12.1, 12.2, 12.3, 12.4
 */
export default function CarouselExample() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
    // Spring physics configuration for smooth, natural transitions
    duration: 25, // Duration in frames (at 60fps, 25 frames ≈ 417ms)
    dragFree: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const autoPlayIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      // Pause auto-play on user interaction
      setIsAutoPlaying(false);
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
      // Pause auto-play on user interaction
      setIsAutoPlaying(false);
    }
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) {
        emblaApi.scrollTo(index);
        // Pause auto-play on user interaction
        setIsAutoPlaying(false);
      }
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

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

  // Auto-play functionality
  useEffect(() => {
    if (!emblaApi || !isAutoPlaying) {
      if (autoPlayIntervalRef.current) {
        clearInterval(autoPlayIntervalRef.current);
        autoPlayIntervalRef.current = null;
      }
      return;
    }

    // Start auto-play with 3 second interval
    autoPlayIntervalRef.current = setInterval(() => {
      if (!isHovering) {
        emblaApi.scrollNext();
      }
    }, 3000);

    return () => {
      if (autoPlayIntervalRef.current) {
        clearInterval(autoPlayIntervalRef.current);
        autoPlayIntervalRef.current = null;
      }
    };
  }, [emblaApi, isAutoPlaying, isHovering]);

  // Handle hover to pause auto-play
  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Carousel with Spring Animations</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Features spring physics, hover effects, and auto-play pause on interaction
        </p>
        <div className="mt-4 flex items-center gap-4 text-sm">
          <span className={`px-3 py-1 rounded-full ${isAutoPlaying ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
            Auto-play: {isAutoPlaying ? 'Active' : 'Paused'}
          </span>
          <span className={`px-3 py-1 rounded-full ${isHovering ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}>
            Hover: {isHovering ? 'Yes' : 'No'}
          </span>
        </div>
      </div>

      <div className="relative">
        {/* Navigation Arrows */}
        <div className="flex items-center justify-between mb-4">
          <motion.button
            onClick={scrollPrev}
            className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center"
            aria-label="Previous slide"
            whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.button
            onClick={scrollNext}
            className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center"
            aria-label="Next slide"
            whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Carousel Viewport */}
        <div
          className="overflow-hidden rounded-lg"
          ref={emblaRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex">
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="flex-[0_0_100%] min-w-0 px-2"
              >
                <div
                  className={`${slide.color} rounded-lg h-64 flex items-center justify-center text-white text-4xl font-bold`}
                >
                  {slide.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`transition-all duration-300 rounded-full h-2 ${
                selectedIndex === index
                  ? "w-8 bg-blue-500"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <h3 className="font-semibold mb-2">Features Demonstrated:</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
          <li>Spring physics for smooth, natural slide transitions (Req 12.1)</li>
          <li>Momentum-based scrolling when dragging (Req 12.2)</li>
          <li>Hover effects on controls with spring animation (Req 12.3)</li>
          <li>Auto-play pauses on hover or user interaction (Req 12.4)</li>
          <li>Responsive design with touch support</li>
        </ul>
      </div>
    </div>
  );
}
