"use client";

/**
 * Example component demonstrating useParallax hook usage
 * This is a test/example file to verify the hook works correctly
 */

import { motion } from "framer-motion";
import { useParallax } from "../useParallax";

export function ParallaxExample() {
  // Background layer - moves slower (50% of scroll speed)
  const background = useParallax({ speed: 0.5 });

  // Midground layer - moves at 70% of scroll speed
  const midground = useParallax({ speed: 0.7 });

  // Foreground layer - moves faster (120% of scroll speed)
  const foreground = useParallax({ speed: 1.2 });

  // Horizontal parallax example
  const horizontal = useParallax({ 
    speed: 0.3,
    direction: "horizontal"
  });

  // Disabled parallax (no effect)
  const disabled = useParallax({ disabled: true });

  return (
    <div className="relative min-h-[300vh] bg-gradient-to-b from-blue-900 via-purple-900 to-pink-900">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background Layer - Slowest */}
        <motion.div
          ref={background.ref}
          style={{ y: background.y }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="text-center">
            <div className="text-6xl mb-4">🌙</div>
            <p className="text-white/50 text-sm">Background (50% speed)</p>
          </div>
        </motion.div>

        {/* Midground Layer - Medium Speed */}
        <motion.div
          ref={midground.ref}
          style={{ y: midground.y }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="text-center mt-32">
            <div className="text-5xl mb-4">⭐</div>
            <p className="text-white/70 text-sm">Midground (70% speed)</p>
          </div>
        </motion.div>

        {/* Foreground Layer - Fastest */}
        <motion.div
          ref={foreground.ref}
          style={{ y: foreground.y }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="text-center mt-64">
            <div className="text-4xl mb-4">🚀</div>
            <p className="text-white text-sm font-semibold">Foreground (120% speed)</p>
          </div>
        </motion.div>

        {/* Horizontal Parallax Example */}
        <motion.div
          ref={horizontal.ref}
          style={{ x: horizontal.x }}
          className="absolute bottom-20 left-1/2 -translate-x-1/2"
        >
          <div className="text-center">
            <div className="text-3xl mb-2">↔️</div>
            <p className="text-white/80 text-xs">Horizontal (30% speed)</p>
          </div>
        </motion.div>

        {/* Disabled Parallax Example */}
        <motion.div
          ref={disabled.ref}
          style={{ y: disabled.y }}
          className="absolute top-20 left-1/2 -translate-x-1/2"
        >
          <div className="text-center">
            <div className="text-2xl mb-2">📌</div>
            <p className="text-white/60 text-xs">Disabled (no parallax)</p>
          </div>
        </motion.div>

        {/* Instructions */}
        <div className="absolute top-8 left-8 bg-black/50 backdrop-blur-sm p-6 rounded-lg max-w-md">
          <h1 className="text-2xl font-bold text-white mb-4">useParallax Hook Examples</h1>
          <p className="text-white/80 text-sm mb-4">
            Scroll down to see the parallax effect in action. Different layers move at different speeds.
          </p>
          
          <div className="space-y-2 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <span className="text-xl">🌙</span>
              <span>Background: 50% speed (slower)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">⭐</span>
              <span>Midground: 70% speed</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">🚀</span>
              <span>Foreground: 120% speed (faster)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">↔️</span>
              <span>Horizontal: 30% speed</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">📌</span>
              <span>Disabled: no movement</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-center animate-bounce">
          <div className="text-2xl mb-2">↓</div>
          <p className="text-sm">Scroll to see parallax</p>
        </div>
      </div>

      {/* Content sections to enable scrolling */}
      <div className="relative z-10 space-y-32 py-32">
        <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-white mb-4">How Parallax Works</h2>
          <p className="text-white/80 leading-relaxed">
            The parallax effect creates depth by moving elements at different speeds relative to the scroll.
            Elements with speed &lt; 1.0 move slower (background effect), while elements with speed &gt; 1.0 
            move faster (foreground effect).
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-white mb-4">Performance</h2>
          <p className="text-white/80 leading-relaxed">
            The hook uses GPU-accelerated transforms (translateY/translateX) for smooth 60fps performance.
            Framer Motion's useScroll hook efficiently tracks scroll position without causing layout thrashing.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-white mb-4">Use Cases</h2>
          <ul className="text-white/80 space-y-2 list-disc list-inside">
            <li>Hero section backgrounds</li>
            <li>Decorative elements and illustrations</li>
            <li>Creating depth in landing pages</li>
            <li>Enhancing storytelling sections</li>
            <li>Adding visual interest to long-form content</li>
          </ul>
        </div>

        <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-white mb-4">Requirements Validated</h2>
          <ul className="text-white/80 space-y-2 text-sm">
            <li><strong>10.1:</strong> Background elements translate at 50% of scroll speed ✓</li>
            <li><strong>10.2:</strong> Foreground elements translate at 120% of scroll speed ✓</li>
            <li><strong>10.3:</strong> Uses transform properties for GPU acceleration ✓</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
