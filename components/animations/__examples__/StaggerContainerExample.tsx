"use client";

/**
 * StaggerContainer Example
 * 
 * This example demonstrates the usage of the StaggerContainer component
 * with various configurations and child elements.
 */

import React from "react";
import { motion } from "framer-motion";
import { StaggerContainer } from "../StaggerContainer";

// Define inline variants to avoid type conflicts
const fadeInUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const fadeInScaleVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
};

const slideInLeftVariant = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

/**
 * Example component showcasing StaggerContainer usage
 */
export function StaggerContainerExample(): React.JSX.Element {
  return (
    <div className="space-y-16 p-8">
      {/* Example 1: Basic stagger with default delay */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Basic Stagger (Default 0.1s delay)</h2>
        <StaggerContainer className="space-y-4">
          <motion.div 
            variants={fadeInUpVariant}
            className="p-6 bg-blue-100 rounded-lg"
          >
            Item 1 - Animates first
          </motion.div>
          <motion.div 
            variants={fadeInUpVariant}
            className="p-6 bg-blue-200 rounded-lg"
          >
            Item 2 - Animates 0.1s after Item 1
          </motion.div>
          <motion.div 
            variants={fadeInUpVariant}
            className="p-6 bg-blue-300 rounded-lg"
          >
            Item 3 - Animates 0.1s after Item 2
          </motion.div>
        </StaggerContainer>
      </section>

      {/* Example 2: Custom stagger delay */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Custom Stagger Delay (0.2s)</h2>
        <StaggerContainer staggerDelay={0.2} className="space-y-4">
          <motion.div 
            variants={fadeInScaleVariant}
            className="p-6 bg-green-100 rounded-lg"
          >
            Item 1 - Slower stagger
          </motion.div>
          <motion.div 
            variants={fadeInScaleVariant}
            className="p-6 bg-green-200 rounded-lg"
          >
            Item 2 - 0.2s delay
          </motion.div>
          <motion.div 
            variants={fadeInScaleVariant}
            className="p-6 bg-green-300 rounded-lg"
          >
            Item 3 - 0.2s delay
          </motion.div>
        </StaggerContainer>
      </section>

      {/* Example 3: Grid layout with stagger */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Grid Layout with Stagger</h2>
        <StaggerContainer 
          staggerDelay={0.15} 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <motion.div
              key={num}
              variants={fadeInUpVariant}
              className="p-8 bg-purple-100 rounded-lg text-center"
            >
              <h3 className="text-xl font-semibold">Card {num}</h3>
              <p className="mt-2 text-gray-600">Staggered animation</p>
            </motion.div>
          ))}
        </StaggerContainer>
      </section>

      {/* Example 4: Different variants for children */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Mixed Variants</h2>
        <StaggerContainer staggerDelay={0.12} className="space-y-4">
          <motion.div 
            variants={fadeInUpVariant}
            className="p-6 bg-orange-100 rounded-lg"
          >
            Fade In Up
          </motion.div>
          <motion.div 
            variants={fadeInScaleVariant}
            className="p-6 bg-orange-200 rounded-lg"
          >
            Fade In Scale
          </motion.div>
          <motion.div 
            variants={slideInLeftVariant}
            className="p-6 bg-orange-300 rounded-lg"
          >
            Slide In Left
          </motion.div>
        </StaggerContainer>
      </section>

      {/* Example 5: Fast stagger for many items */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Fast Stagger (0.05s) - Many Items</h2>
        <StaggerContainer 
          staggerDelay={0.05} 
          delayChildren={0.1}
          className="flex flex-wrap gap-3"
        >
          {Array.from({ length: 12 }, (_, i) => (
            <motion.div
              key={i}
              variants={fadeInScaleVariant}
              className="w-20 h-20 bg-pink-200 rounded-lg flex items-center justify-center font-bold"
            >
              {i + 1}
            </motion.div>
          ))}
        </StaggerContainer>
      </section>

      {/* Example 6: List with stagger */}
      <section>
        <h2 className="text-2xl font-bold mb-6">List Items with Stagger</h2>
        <StaggerContainer className="space-y-2">
          {[
            "First list item",
            "Second list item",
            "Third list item",
            "Fourth list item",
            "Fifth list item",
          ].map((text, index) => (
            <motion.div
              key={index}
              variants={slideInLeftVariant}
              className="p-4 bg-gray-100 rounded-lg border-l-4 border-blue-500"
            >
              {text}
            </motion.div>
          ))}
        </StaggerContainer>
      </section>
    </div>
  );
}

export default StaggerContainerExample;
