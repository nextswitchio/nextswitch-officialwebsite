"use client";

/**
 * ImageWithLoader Component
 * 
 * An image component that displays a blur-up placeholder while loading
 * and smoothly transitions to the full image once loaded. Provides a
 * better user experience than showing empty space or a sudden image pop-in.
 * 
 * Features:
 * - Blur-up placeholder effect (low-quality blur to high-quality sharp)
 * - Smooth fade transition on image load
 * - Respects reduced motion preferences
 * - Built on Next.js Image for optimization
 * - Full TypeScript support
 * 
 * Requirements: 6.2
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <ImageWithLoader
 *   src="/images/hero.jpg"
 *   alt="Hero image"
 *   width={800}
 *   height={600}
 * />
 * 
 * // With custom placeholder
 * <ImageWithLoader
 *   src="/images/hero.jpg"
 *   alt="Hero image"
 *   width={800}
 *   height={600}
 *   blurDataURL="data:image/jpeg;base64,..."
 * />
 * 
 * // With fill layout
 * <ImageWithLoader
 *   src="/images/hero.jpg"
 *   alt="Hero image"
 *   fill
 *   className="object-cover"
 * />
 * ```
 */

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/lib/animations/hooks/useReducedMotion";

/**
 * Props for the ImageWithLoader component
 * Extends Next.js Image props with additional loading state controls
 */
export interface ImageWithLoaderProps extends Omit<ImageProps, "onLoad" | "onLoadingComplete"> {
  /**
   * Additional CSS classes to apply to the container
   */
  className?: string;
  
  /**
   * Additional CSS classes to apply to the image element
   */
  imageClassName?: string;
  
  /**
   * Callback fired when image loading completes
   */
  onLoadingComplete?: () => void;
  
  /**
   * Duration of the fade transition in seconds
   * Default: 0.3
   */
  transitionDuration?: number;
}

/**
 * ImageWithLoader component with blur-up placeholder effect
 * 
 * This component displays a blurred placeholder while the image loads,
 * then smoothly transitions to the full-quality image. The blur effect
 * is achieved using Next.js Image's built-in placeholder feature combined
 * with Framer Motion animations.
 * 
 * @param props - Component props
 * @returns Animated image with loading placeholder
 */
export function ImageWithLoader({
  src,
  alt,
  className = "",
  imageClassName = "",
  onLoadingComplete,
  transitionDuration = 0.3,
  placeholder,
  blurDataURL,
  ...imageProps
}: ImageWithLoaderProps): React.JSX.Element {
  // Track loading state
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Detect reduced motion preference
  const prefersReducedMotion = useReducedMotion();

  // Handle image load completion
  const handleLoadingComplete = () => {
    setIsLoaded(true);
    onLoadingComplete?.();
  };
  
  // Determine if we should use blur placeholder
  // Only use blur if blurDataURL is provided or if it's a static import
  const shouldUseBlur = placeholder === "blur" && blurDataURL;
  const imagePlaceholder = shouldUseBlur ? "blur" : "empty";

  // Animation variants for the image
  const imageVariants = {
    loading: {
      opacity: 0,
      scale: 1.05,
    },
    loaded: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: prefersReducedMotion ? 0 : transitionDuration,
        ease: [0.4, 0, 0.2, 1] as const, // easeOut cubic bezier
      },
    },
  };

  // Animation variants for the placeholder
  const placeholderVariants = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : transitionDuration,
        ease: [0.4, 0, 0.2, 1] as const, // easeOut cubic bezier
      },
    },
  };

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Blur placeholder - shown while loading */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            className="absolute inset-0 bg-muted"
            variants={placeholderVariants}
            initial="visible"
            animate="visible"
            exit="hidden"
            aria-hidden="true"
          >
            {/* Optional: Add a subtle pulse animation to the placeholder */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-muted-foreground/5 to-transparent animate-pulse" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Actual image */}
      <motion.div
        variants={imageVariants}
        initial="loading"
        animate={isLoaded ? "loaded" : "loading"}
      >
        <Image
          src={src}
          alt={alt}
          className={cn(imageClassName)}
          onLoadingComplete={handleLoadingComplete}
          placeholder={imagePlaceholder}
          blurDataURL={blurDataURL}
          {...imageProps}
        />
      </motion.div>
    </div>
  );
}
