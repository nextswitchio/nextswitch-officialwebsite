"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/lib/animations/hooks/useReducedMotion";

interface AnimatedInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  success?: boolean;
}

export function AnimatedInput({
  label,
  error,
  success,
  className,
  onFocus,
  onBlur,
  ...props
}: AnimatedInputProps) {
  const [isFocused, setIsFocused] = React.useState(false);
  const [hasValue, setHasValue] = React.useState(false);
  const [shouldShake, setShouldShake] = React.useState(false);
  const prefersReducedMotion = useReducedMotion();
  const inputRef = React.useRef<HTMLInputElement>(null);

  // Check if input has value
  React.useEffect(() => {
    if (inputRef.current) {
      setHasValue(!!inputRef.current.value);
    }
  }, [props.value, props.defaultValue]);

  // Trigger shake animation when error appears
  React.useEffect(() => {
    if (error) {
      setShouldShake(true);
      const timer = setTimeout(() => setShouldShake(false), 400);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    setHasValue(!!e.target.value);
    onBlur?.(e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasValue(!!e.target.value);
    props.onChange?.(e);
  };

  // Label should float when focused or has value
  const shouldFloat = isFocused || hasValue;

  // Animation durations based on reduced motion preference
  const focusDuration = prefersReducedMotion ? 0.1 : 0.2;
  const shakeDuration = prefersReducedMotion ? 0.2 : 0.4;
  const successDuration = prefersReducedMotion ? 0.1 : 0.3;

  return (
    <div className="relative w-full">
      {/* Input container with shake animation */}
      <motion.div
        className="relative"
        animate={shouldShake ? {
          x: [0, -10, 10, -10, 10, -5, 5, 0],
        } : {}}
        transition={{
          duration: shakeDuration,
          ease: "easeInOut"
        }}
      >
        {/* Input field */}
        <input
          ref={inputRef}
          className={cn(
            "peer w-full rounded-lg border bg-transparent px-4 pt-6 pb-2 text-base outline-none transition-colors",
            "placeholder:text-transparent",
            // Focus state with glow
            isFocused && !error && "border-primary ring-4 ring-primary/20",
            // Error state
            error && "border-destructive ring-4 ring-destructive/20",
            // Success state
            success && !error && "border-green-500 ring-4 ring-green-500/20",
            // Default state
            !isFocused && !error && !success && "border-input",
            className
          )}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          aria-invalid={!!error}
          aria-describedby={error ? `${props.id}-error` : undefined}
          {...props}
        />

        {/* Floating label */}
        <motion.label
          htmlFor={props.id}
          className={cn(
            "absolute left-4 pointer-events-none origin-left transition-colors",
            isFocused && !error && "text-primary",
            error && "text-destructive",
            success && !error && "text-green-500",
            !isFocused && !error && !success && "text-muted-foreground"
          )}
          animate={{
            y: shouldFloat ? -8 : 12,
            scale: shouldFloat ? 0.85 : 1,
          }}
          transition={{
            duration: focusDuration,
            ease: "easeOut"
          }}
        >
          {label}
        </motion.label>

        {/* Success indicator */}
        <AnimatePresence>
          {success && !error && (
            <motion.div
              className="absolute right-4 top-1/2 -translate-y-1/2"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{
                duration: successDuration,
                ease: "easeOut"
              }}
            >
              <svg
                className="w-5 h-5 text-green-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Error message */}
      <AnimatePresence>
        {error && (
          <motion.p
            id={`${props.id}-error`}
            className="mt-1.5 text-sm text-destructive"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{
              duration: focusDuration,
              ease: "easeOut"
            }}
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
