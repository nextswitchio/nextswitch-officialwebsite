/**
 * Dropdown Animation Example
 * 
 * Demonstrates the dropdown animation variants used in the Navbar component.
 * Shows fade in/out, slide animations, and stagger effects.
 * 
 * Requirements: 13.1, 13.2, 13.3
 */

"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { 
  dropdownVariants, 
  dropdownStagger, 
  dropdownItemVariants 
} from "@/lib/animations/variants";
import { useReducedMotion } from "@/lib/animations/hooks/useReducedMotion";

export function DropdownExample() {
  const [isOpen, setIsOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const items = [
    "Web Development",
    "Mobile Development",
    "Tech Training",
    "Innovation Labs",
    "Custom Software Development",
    "IT Consulting"
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-8">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Toggle Dropdown
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute top-full left-0 mt-2 z-50"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={prefersReducedMotion ? undefined : (dropdownVariants as Variants)}
            >
              <motion.div
                className="bg-white border border-gray-200 rounded-xl shadow-2xl py-2 w-72"
                variants={prefersReducedMotion ? undefined : (dropdownStagger as Variants)}
                initial="hidden"
                animate="visible"
              >
                {items.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={prefersReducedMotion ? undefined : (dropdownItemVariants as Variants)}
                  >
                    <button
                      className="block w-full text-left px-6 py-3 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item}
                    </button>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-8 max-w-md text-center text-sm text-gray-600">
        <p className="mb-2">
          <strong>Animation Details:</strong>
        </p>
        <ul className="text-left space-y-1">
          <li>• Fade in/out with slide animation</li>
          <li>• 30ms stagger delay between items</li>
          <li>• Respects reduced motion preferences</li>
          <li>• Smooth chevron rotation</li>
        </ul>
      </div>
    </div>
  );
}
