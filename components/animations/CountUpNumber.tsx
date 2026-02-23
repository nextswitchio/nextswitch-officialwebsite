"use client";

/**
 * CountUpNumber Component
 * 
 * A component that animates a number counting up from a start value to an end value.
 * By default, the animation triggers when the component enters the viewport.
 * Supports all formatting options from the useCountUp hook.
 * 
 * Features:
 * - Automatic viewport-triggered animation
 * - Manual trigger option
 * - Number formatting with thousands separators
 * - Decimal precision control
 * - Prefix and suffix support (e.g., "$", "+", "K")
 * - Respects reduced motion preferences
 * - Configurable duration and easing
 * 
 * Requirements: 7.1, 7.2, 7.3, 7.4
 * 
 * @example
 * ```tsx
 * // Basic usage - counts from 0 to 1000
 * <CountUpNumber end={1000} />
 * 
 * // With formatting options
 * <CountUpNumber 
 *   end={1500} 
 *   suffix="+" 
 *   duration={2500}
 *   className="text-4xl font-bold"
 * />
 * 
 * // With decimals and prefix
 * <CountUpNumber 
 *   start={0}
 *   end={99.99} 
 *   decimals={2}
 *   prefix="$"
 * />
 * 
 * // Manual trigger (doesn't auto-start on viewport entry)
 * <CountUpNumber 
 *   end={500} 
 *   triggerOnView={false}
 * />
 * ```
 */

import React, { useEffect } from "react";
import { useCountUp } from "@/lib/animations/hooks/useCountUp";
import { useScrollAnimation } from "@/lib/animations/hooks/useScrollAnimation";
import { useReducedMotion } from "@/lib/animations/hooks/useReducedMotion";

/**
 * Props for CountUpNumber component
 */
export interface CountUpNumberProps {
  /**
   * Target value to count up to
   * Required
   */
  end: number;
  
  /**
   * Starting value for the counter
   * Default: 0
   */
  start?: number;
  
  /**
   * Duration of the animation in milliseconds
   * Default: 2000ms (2 seconds)
   */
  duration?: number;
  
  /**
   * Number of decimal places to display
   * Default: 0 (whole numbers)
   */
  decimals?: number;
  
  /**
   * Prefix to add before the number (e.g., "$")
   * Default: ""
   */
  prefix?: string;
  
  /**
   * Suffix to add after the number (e.g., "+", "K")
   * Default: ""
   */
  suffix?: string;
  
  /**
   * Additional CSS classes to apply to the wrapper
   */
  className?: string;
  
  /**
   * Whether to trigger animation when entering viewport
   * If false, animation must be triggered manually
   * Default: true
   */
  triggerOnView?: boolean;
  
  /**
   * Threshold for viewport detection (0 to 1)
   * Only used when triggerOnView is true
   * Default: 0.1
   */
  threshold?: number;
  
  /**
   * Thousands separator character
   * Default: ","
   */
  separator?: string;
  
  /**
   * HTML tag to use for the wrapper element
   * Default: "span"
   */
  as?: keyof React.JSX.IntrinsicElements;
}

/**
 * CountUpNumber component
 * 
 * Displays an animated number that counts up from start to end value.
 * By default, the animation triggers when the component enters the viewport.
 * 
 * @param props - Component props
 * @returns Animated number display
 */
export function CountUpNumber({
  end,
  start = 0,
  duration = 2000,
  decimals = 0,
  prefix = "",
  suffix = "",
  className = "",
  triggerOnView = true,
  threshold = 0.1,
  separator = ",",
  as = "span",
}: CountUpNumberProps): React.JSX.Element {
  // Check if user prefers reduced motion
  const prefersReducedMotion = useReducedMotion();
  
  // Adjust duration for reduced motion (reduce by 50% for essential animations)
  const adjustedDuration = prefersReducedMotion ? duration * 0.5 : duration;
  
  // Set up the counter animation
  const { value, start: startCounter } = useCountUp({
    start,
    end,
    duration: adjustedDuration,
    decimals,
    separator,
    prefix,
    suffix,
  });
  
  // Set up scroll animation for viewport detection
  const { ref, isInView } = useScrollAnimation({
    threshold,
    triggerOnce: true,
  });
  
  // Track if animation has been triggered
  const hasTriggeredRef = React.useRef(false);

  // Trigger animation when entering viewport (if triggerOnView is true)
  useEffect(() => {
    if (triggerOnView && isInView && !hasTriggeredRef.current) {
      startCounter();
      hasTriggeredRef.current = true;
    }
  }, [triggerOnView, isInView, startCounter]);

  // If not triggering on view, start immediately on mount
  useEffect(() => {
    if (!triggerOnView && !hasTriggeredRef.current) {
      startCounter();
      hasTriggeredRef.current = true;
    }
  }, [triggerOnView, startCounter]);

  // Create the element based on the 'as' prop
  const Component = as as React.ElementType;

  return (
    <Component ref={triggerOnView ? ref : undefined} className={className}>
      {value}
    </Component>
  );
}
