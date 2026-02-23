"use client";

/**
 * AnimatedButton Example
 * 
 * Demonstrates the various features and variants of the AnimatedButton component.
 * This example showcases:
 * - Different button variants (primary, secondary, cta)
 * - Magnetic effect
 * - Hover and tap animations
 * - Disabled state
 */

import React from "react";
import { AnimatedButton } from "../AnimatedButton";

export function AnimatedButtonExample() {
  const [clickCount, setClickCount] = React.useState(0);

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">AnimatedButton Component</h1>
          <p className="text-muted-foreground">
            Interactive buttons with hover, tap, and magnetic effects
          </p>
        </div>

        {/* Click Counter */}
        <div className="p-4 bg-muted rounded-lg">
          <p className="text-sm text-muted-foreground">
            Total clicks: <span className="font-bold text-foreground">{clickCount}</span>
          </p>
        </div>

        {/* Button Variants */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Button Variants</h2>
          <div className="flex flex-wrap gap-4">
            <AnimatedButton 
              variant="primary"
              onClick={() => setClickCount(c => c + 1)}
            >
              Primary Button
            </AnimatedButton>
            
            <AnimatedButton 
              variant="secondary"
              onClick={() => setClickCount(c => c + 1)}
            >
              Secondary Button
            </AnimatedButton>
            
            <AnimatedButton 
              variant="cta"
              onClick={() => setClickCount(c => c + 1)}
            >
              CTA Button (with pulse)
            </AnimatedButton>
          </div>
          <p className="text-sm text-muted-foreground">
            Hover over buttons to see scale and shadow effects. Click to see tap animation.
          </p>
        </section>

        {/* Magnetic Effect */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Magnetic Effect</h2>
          <div className="flex flex-wrap gap-4">
            <AnimatedButton 
              variant="primary"
              magnetic
              onClick={() => setClickCount(c => c + 1)}
            >
              Magnetic Primary
            </AnimatedButton>
            
            <AnimatedButton 
              variant="secondary"
              magnetic
              onClick={() => setClickCount(c => c + 1)}
            >
              Magnetic Secondary
            </AnimatedButton>
            
            <AnimatedButton 
              variant="cta"
              magnetic
              onClick={() => setClickCount(c => c + 1)}
            >
              Magnetic CTA
            </AnimatedButton>
          </div>
          <p className="text-sm text-muted-foreground">
            Move your cursor near these buttons to see the magnetic attraction effect.
          </p>
        </section>

        {/* Disabled State */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Disabled State</h2>
          <div className="flex flex-wrap gap-4">
            <AnimatedButton 
              variant="primary"
              disabled
            >
              Disabled Primary
            </AnimatedButton>
            
            <AnimatedButton 
              variant="secondary"
              disabled
            >
              Disabled Secondary
            </AnimatedButton>
            
            <AnimatedButton 
              variant="cta"
              disabled
            >
              Disabled CTA
            </AnimatedButton>
          </div>
          <p className="text-sm text-muted-foreground">
            Disabled buttons have no animations and reduced opacity.
          </p>
        </section>

        {/* With Icons */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">With Icons</h2>
          <div className="flex flex-wrap gap-4">
            <AnimatedButton 
              variant="primary"
              onClick={() => setClickCount(c => c + 1)}
            >
              <svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
              Confirm
            </AnimatedButton>
            
            <AnimatedButton 
              variant="cta"
              magnetic
              onClick={() => setClickCount(c => c + 1)}
            >
              Get Started
              <svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M13 7l5 5m0 0l-5 5m5-5H6" 
                />
              </svg>
            </AnimatedButton>
          </div>
          <p className="text-sm text-muted-foreground">
            Buttons work seamlessly with icons and other content.
          </p>
        </section>

        {/* Custom Styling */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Custom Styling</h2>
          <div className="flex flex-wrap gap-4">
            <AnimatedButton 
              variant="primary"
              className="rounded-full"
              onClick={() => setClickCount(c => c + 1)}
            >
              Rounded Button
            </AnimatedButton>
            
            <AnimatedButton 
              variant="cta"
              magnetic
              className="px-8 py-3 text-base"
              onClick={() => setClickCount(c => c + 1)}
            >
              Large CTA
            </AnimatedButton>
          </div>
          <p className="text-sm text-muted-foreground">
            Use className prop to customize button appearance.
          </p>
        </section>

        {/* Accessibility Note */}
        <section className="p-6 bg-muted rounded-lg space-y-2">
          <h3 className="text-lg font-semibold">Accessibility</h3>
          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
            <li>Respects prefers-reduced-motion preference</li>
            <li>Maintains focus indicators</li>
            <li>Disabled state prevents interaction</li>
            <li>Magnetic effect disabled when reduced motion is preferred</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
