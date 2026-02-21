"use client";

/**
 * AnimatedSection Example
 * 
 * This file demonstrates various usage patterns for the AnimatedSection component.
 * It can be used for manual testing and as a reference for developers.
 */

import { AnimatedSection } from "../AnimatedSection";

export function AnimatedSectionExample() {
  return (
    <div className="min-h-screen space-y-[100vh] p-8">
      <div>
        <h1 className="text-4xl font-bold mb-8">AnimatedSection Examples</h1>
        <p className="text-gray-600 mb-4">
          Scroll down to see different animation variants in action.
        </p>
      </div>

      {/* Example 1: Default fadeInUp */}
      <AnimatedSection>
        <div className="bg-blue-100 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Example 1: Default fadeInUp</h2>
          <p>This section uses the default fadeInUp animation variant.</p>
        </div>
      </AnimatedSection>

      {/* Example 2: fadeInScale */}
      <AnimatedSection variant="fadeInScale">
        <div className="bg-green-100 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Example 2: fadeInScale</h2>
          <p>This section fades in while scaling from 95% to 100%.</p>
        </div>
      </AnimatedSection>

      {/* Example 3: slideInLeft */}
      <AnimatedSection variant="slideInLeft">
        <div className="bg-purple-100 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Example 3: slideInLeft</h2>
          <p>This section slides in from the left side.</p>
        </div>
      </AnimatedSection>

      {/* Example 4: slideInRight */}
      <AnimatedSection variant="slideInRight">
        <div className="bg-pink-100 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Example 4: slideInRight</h2>
          <p>This section slides in from the right side.</p>
        </div>
      </AnimatedSection>

      {/* Example 5: With delay */}
      <AnimatedSection variant="fadeInUp" delay={0.3}>
        <div className="bg-yellow-100 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Example 5: With delay (0.3s)</h2>
          <p>This section has a 0.3 second delay before animating.</p>
        </div>
      </AnimatedSection>

      {/* Example 6: Custom threshold */}
      <AnimatedSection variant="fadeInScale" threshold={0.5}>
        <div className="bg-red-100 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Example 6: Custom threshold (0.5)</h2>
          <p>This section only animates when 50% of it is visible in the viewport.</p>
        </div>
      </AnimatedSection>

      {/* Example 7: Multiple sections with staggered delays */}
      <div className="space-y-4">
        <AnimatedSection variant="slideInLeft" delay={0}>
          <div className="bg-indigo-100 p-4 rounded-lg">
            <p>Staggered item 1 (no delay)</p>
          </div>
        </AnimatedSection>
        <AnimatedSection variant="slideInLeft" delay={0.1}>
          <div className="bg-indigo-100 p-4 rounded-lg">
            <p>Staggered item 2 (0.1s delay)</p>
          </div>
        </AnimatedSection>
        <AnimatedSection variant="slideInLeft" delay={0.2}>
          <div className="bg-indigo-100 p-4 rounded-lg">
            <p>Staggered item 3 (0.2s delay)</p>
          </div>
        </AnimatedSection>
        <AnimatedSection variant="slideInLeft" delay={0.3}>
          <div className="bg-indigo-100 p-4 rounded-lg">
            <p>Staggered item 4 (0.3s delay)</p>
          </div>
        </AnimatedSection>
      </div>

      {/* Example 8: With custom className */}
      <AnimatedSection variant="fadeInUp" className="max-w-2xl mx-auto">
        <div className="bg-teal-100 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Example 8: With custom className</h2>
          <p>This section has a custom className applied (max-w-2xl mx-auto).</p>
        </div>
      </AnimatedSection>

      <div className="h-[50vh]" />
    </div>
  );
}
