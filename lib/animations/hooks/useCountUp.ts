"use client";

/**
 * useCountUp Hook
 * 
 * Implements counter animation with easing for animating numbers from a start
 * value to an end value over a specified duration. Supports formatting options
 * including decimals, separators, prefix, and suffix.
 * 
 * Features:
 * - Smooth counter animation with configurable easing
 * - Number formatting with thousands separators
 * - Decimal precision control
 * - Prefix and suffix support (e.g., "$", "+", "K")
 * - Manual control functions (start, reset)
 * - Automatic cleanup on unmount
 * 
 * Requirements: 7.1, 7.2, 7.3, 7.4
 * 
 * @example
 * ```tsx
 * function StatsCard() {
 *   const { value, start } = useCountUp({ 
 *     end: 1000, 
 *     duration: 2000,
 *     suffix: "+"
 *   });
 *   
 *   const { isInView } = useScrollAnimation();
 *   
 *   useEffect(() => {
 *     if (isInView) start();
 *   }, [isInView, start]);
 *   
 *   return <div>{value}</div>;
 * }
 * ```
 */

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Easing function that decelerates toward the end
 * Exponential ease-out: fast start, slow end
 * 
 * @param t - Progress from 0 to 1
 * @returns Eased value from 0 to 1
 */
function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

/**
 * Options for configuring the count-up animation
 */
export interface UseCountUpOptions {
  /**
   * Starting value for the counter
   * Default: 0
   */
  start?: number;
  
  /**
   * Target value to count up to
   * Required
   */
  end: number;
  
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
   * Thousands separator character
   * Default: ","
   */
  separator?: string;
  
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
   * Custom easing function
   * Takes a value from 0 to 1 and returns an eased value from 0 to 1
   * Default: easeOutExpo (decelerating)
   */
  easing?: (t: number) => number;
}

/**
 * Return value from useCountUp hook
 */
export interface UseCountUpReturn {
  /**
   * Current formatted value as a string
   * Includes prefix, formatted number with separators, and suffix
   */
  value: string;
  
  /**
   * Function to manually start the counter animation
   * Can be called multiple times to restart the animation
   */
  start: () => void;
  
  /**
   * Function to reset the counter to the start value
   * Stops any ongoing animation
   */
  reset: () => void;
}

/**
 * Formats a number with thousands separators and decimal places
 * 
 * @param value - The number to format
 * @param decimals - Number of decimal places
 * @param separator - Thousands separator character
 * @returns Formatted number string
 */
function formatNumber(value: number, decimals: number, separator: string): string {
  // Round to specified decimal places
  const fixed = value.toFixed(decimals);
  
  // Split into integer and decimal parts
  const parts = fixed.split(".");
  const integerPart = parts[0];
  const decimalPart = parts[1];
  
  // Add thousands separators to integer part
  const withSeparators = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
  
  // Combine integer and decimal parts
  if (decimals > 0 && decimalPart) {
    return `${withSeparators}.${decimalPart}`;
  }
  
  return withSeparators;
}

/**
 * Hook for animating numbers with easing and formatting
 * 
 * @param options - Configuration options for the counter animation
 * @returns Object containing formatted value and control functions
 */
export function useCountUp(options: UseCountUpOptions): UseCountUpReturn {
  const {
    start: startValue = 0,
    end: endValue,
    duration = 2000,
    decimals = 0,
    separator = ",",
    prefix = "",
    suffix = "",
    easing = easeOutExpo,
  } = options;

  // Current numeric value (not formatted)
  const [currentValue, setCurrentValue] = useState(startValue);
  
  // Track animation state
  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  /**
   * Cancels any ongoing animation
   */
  const cancelAnimation = useCallback(() => {
    if (animationFrameRef.current !== null) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    startTimeRef.current = null;
  }, []);

  /**
   * Animation loop using requestAnimationFrame
   */
  const animate = useCallback(
    (timestamp: number) => {
      // Initialize start time on first frame
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }

      // Calculate elapsed time and progress (0 to 1)
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      // Apply easing function
      const easedProgress = easing(progress);

      // Calculate current value based on eased progress
      const range = endValue - startValue;
      const newValue = startValue + range * easedProgress;
      
      setCurrentValue(newValue);

      // Continue animation if not complete
      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        // Ensure we end exactly at the target value
        setCurrentValue(endValue);
        animationFrameRef.current = null;
        startTimeRef.current = null;
      }
    },
    [startValue, endValue, duration, easing]
  );

  /**
   * Starts the counter animation
   */
  const start = useCallback(() => {
    // Cancel any ongoing animation
    cancelAnimation();
    
    // Reset to start value
    setCurrentValue(startValue);
    
    // Start new animation
    animationFrameRef.current = requestAnimationFrame(animate);
  }, [startValue, animate, cancelAnimation]);

  /**
   * Resets the counter to the start value
   */
  const reset = useCallback(() => {
    cancelAnimation();
    setCurrentValue(startValue);
  }, [startValue, cancelAnimation]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      cancelAnimation();
    };
  }, [cancelAnimation]);

  // Format the current value with prefix, separators, and suffix
  const formattedValue = `${prefix}${formatNumber(currentValue, decimals, separator)}${suffix}`;

  return {
    value: formattedValue,
    start,
    reset,
  };
}
