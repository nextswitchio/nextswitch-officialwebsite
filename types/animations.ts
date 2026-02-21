/**
 * Animation Configuration Types
 * 
 * This file defines TypeScript types for the animation system,
 * including configuration, variants, transitions, and state management.
 */

import type { Transition as FramerTransition, Variant as FramerVariant } from "framer-motion";

/**
 * Global animation configuration
 */
export interface AnimationConfig {
  /** Whether reduced motion is enabled (respects prefers-reduced-motion) */
  reducedMotion: boolean;
  /** Performance mode for animations */
  performanceMode: "high" | "balanced" | "low";
  /** Whether parallax effects are enabled */
  enableParallax: boolean;
  /** Whether magnetic effects are enabled */
  enableMagnetic: boolean;
}

/**
 * Variant type for Framer Motion animations
 * Defines different animation states (hidden, visible, hover, etc.)
 */
export type Variant = {
  [key: string]: {
    opacity?: number;
    x?: number | string;
    y?: number | string;
    scale?: number;
    rotate?: number;
    transition?: Transition;
    [key: string]: any;
  };
};

/**
 * Transition configuration for animations
 */
export interface Transition {
  /** Duration of the animation in seconds */
  duration?: number;
  /** Delay before animation starts in seconds */
  delay?: number;
  /** Easing function (string or cubic bezier array) */
  ease?: string | number[];
  /** Type of animation */
  type?: "tween" | "spring" | "inertia";
  /** Spring stiffness (for spring animations) */
  stiffness?: number;
  /** Spring damping (for spring animations) */
  damping?: number;
  /** Spring mass (for spring animations) */
  mass?: number;
  /** Delay between staggered children animations */
  staggerChildren?: number;
  /** Initial delay before children start animating */
  delayChildren?: number;
}

/**
 * Scroll animation state
 */
export interface ScrollAnimationState {
  /** Whether the element is currently in the viewport */
  isInView: boolean;
  /** Whether the element has already been animated */
  hasAnimated: boolean;
  /** Scroll progress from 0 to 1 */
  progress: number;
}

/**
 * Magnetic effect state
 */
export interface MagneticState {
  /** X translation in pixels */
  x: number;
  /** Y translation in pixels */
  y: number;
  /** Distance from cursor in pixels */
  distance: number;
  /** Whether the magnetic effect is currently active */
  isActive: boolean;
}

/**
 * Performance monitoring metrics
 */
export interface AnimationPerformanceMetrics {
  /** Current frames per second */
  fps: number;
  /** Number of dropped frames */
  frameDrops: number;
  /** Number of active animations */
  animationCount: number;
  /** Timestamp of measurement */
  timestamp: number;
}

/**
 * Performance thresholds for degradation
 */
export interface PerformanceThresholds {
  /** Minimum acceptable FPS (default: 55) */
  minFps: number;
  /** Maximum simultaneous animations (default: 20) */
  maxAnimations: number;
  /** FPS threshold to trigger degradation (default: 45) */
  degradeThreshold: number;
}
