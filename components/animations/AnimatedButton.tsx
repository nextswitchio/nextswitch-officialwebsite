"use client";

/**
 * AnimatedButton Component
 * 
 * An enhanced button component with micro-interactions including:
 * - Hover scale and shadow effects
 * - Tap/click scale-down animation
 * - Optional magnetic effect
 * - Support for primary, secondary, and CTA variants
 * 
 * Features:
 * - Smooth hover animations with scale and shadow
 * - Tactile click feedback with scale-down
 * - Optional magnetic cursor attraction
 * - Multiple visual variants (primary, secondary, cta)
 * - Respects reduced motion preferences
 * - Full TypeScript support
 * 
 * Requirements: 3.1, 4.1, 15.1, 15.2, 15.3
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <AnimatedButton variant="primary">
 *   Click me
 * </AnimatedButton>
 * 
 * // With magnetic effect
 * <AnimatedButton variant="cta" magnetic>
 *   Get Started
 * </AnimatedButton>
 * 
 * // Secondary variant
 * <AnimatedButton variant="secondary" onClick={handleClick}>
 *   Learn More
 * </AnimatedButton>
 * ```
 */

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useMagneticEffect } from "@/lib/animations/hooks/useMagneticEffect";
import { useReducedMotion } from "@/lib/animations/hooks/useReducedMotion";

/**
 * Props for the AnimatedButton component
 */
export interface AnimatedButtonProps extends Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>, 
  'onDrag' | 'onDragStart' | 'onDragEnd' | 'onAnimationStart' | 'onAnimationEnd'
> {
  /**
   * Visual variant of the button
   * - primary: Main action button with primary brand color
   * - secondary: Secondary action button with muted styling
   * - cta: Call-to-action button with enhanced styling and pulse animation
   * 
   * Default: "primary"
   */
  variant?: "primary" | "secondary" | "cta";
  
  /**
   * Whether to enable magnetic effect
   * When enabled, button will translate toward cursor when hovered
   * 
   * Default: false
   */
  magnetic?: boolean;
  
  /**
   * Additional CSS classes to apply
   */
  className?: string;
  
  /**
   * Button content
   */
  children: React.ReactNode;
}

/**
 * AnimatedButton component with hover, tap, and optional magnetic effects
 */
export function AnimatedButton({
  variant = "primary",
  magnetic = false,
  className,
  children,
  disabled = false,
  ...props
}: AnimatedButtonProps) {
  // Detect reduced motion preference
  const prefersReducedMotion = useReducedMotion();
  
  // Set up magnetic effect if enabled and not disabled
  const { ref: magneticRef, x, y } = useMagneticEffect({
    strength: 0.3,
    radius: 100,
    disabled: !magnetic || disabled || prefersReducedMotion,
  });

  // Base button styles
  const baseStyles = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
  
  // Variant-specific styles
  const variantStyles = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-primary",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 focus-visible:ring-secondary",
    cta: "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:from-primary/90 hover:to-primary/70 focus-visible:ring-primary shadow-lg",
  };
  
  // Size styles (default size)
  const sizeStyles = "h-10 px-6 py-2";

  // Animation variants for hover and tap
  const buttonAnimationVariants = {
    rest: { 
      scale: 1,
      boxShadow: variant === "cta" 
        ? "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
        : "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    },
    hover: { 
      scale: prefersReducedMotion ? 1 : 1.05,
      boxShadow: variant === "cta"
        ? "0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
        : "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      transition: { 
        duration: prefersReducedMotion ? 0 : 0.2, 
        ease: [0.4, 0, 0.2, 1] as const // easeOut cubic bezier
      }
    },
    tap: { 
      scale: prefersReducedMotion ? 1 : 0.95,
      transition: { 
        duration: prefersReducedMotion ? 0 : 0.1 
      }
    }
  };

  // CTA pulse animation (subtle pulse every 3 seconds)
  const ctaPulseAnimation = variant === "cta" && !prefersReducedMotion ? {
    scale: [1, 1.02, 1],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      repeatDelay: 2.4, // Total cycle: 0.6s animation + 2.4s delay = 3s
      ease: [0.4, 0, 0.6, 1] as const, // easeInOut cubic bezier
    }
  } : undefined;

  return (
    <motion.button
      ref={magneticRef}
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles,
        className
      )}
      variants={buttonAnimationVariants}
      initial="rest"
      whileHover={disabled ? undefined : "hover"}
      whileTap={disabled ? undefined : "tap"}
      animate={ctaPulseAnimation}
      style={magnetic && !disabled && !prefersReducedMotion ? { x, y } : undefined}
      disabled={disabled}
      {...props}
    >
      {children}
    </motion.button>
  );
}
