"use client";

/**
 * Example component demonstrating useMagneticEffect hook usage
 * This is a test/example file to verify the hook works correctly
 */

import { motion } from "framer-motion";
import { useMagneticEffect } from "../useMagneticEffect";

export function MagneticEffectExample() {
  // Default magnetic effect
  const magnetic1 = useMagneticEffect();

  // Strong magnetic effect
  const magnetic2 = useMagneticEffect({ 
    strength: 0.4,
    radius: 150,
  });

  // Weak magnetic effect
  const magnetic3 = useMagneticEffect({ 
    strength: 0.1,
    radius: 80,
  });

  // Disabled magnetic effect
  const magnetic4 = useMagneticEffect({ 
    disabled: true,
  });

  return (
    <div className="p-8 space-y-6 min-h-screen bg-gray-50">
      <h1 className="text-2xl font-bold mb-4">useMagneticEffect Hook Examples</h1>
      <p className="text-gray-600 mb-8">
        Move your cursor near the buttons to see the magnetic effect in action.
      </p>
      
      <div className="space-y-8">
        <div className="p-8 border rounded bg-white">
          <h2 className="text-sm text-gray-600 mb-4">
            Default (strength: 0.2, radius: 100px)
          </h2>
          <div className="flex justify-center">
            <motion.button
              ref={magnetic1.ref}
              style={{ x: magnetic1.x, y: magnetic1.y }}
              className="px-8 py-4 bg-blue-500 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
            >
              Hover Near Me
            </motion.button>
          </div>
        </div>

        <div className="p-8 border rounded bg-white">
          <h2 className="text-sm text-gray-600 mb-4">
            Strong Effect (strength: 0.4, radius: 150px)
          </h2>
          <div className="flex justify-center">
            <motion.button
              ref={magnetic2.ref}
              style={{ x: magnetic2.x, y: magnetic2.y }}
              className="px-8 py-4 bg-purple-500 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
            >
              Strong Magnetic Pull
            </motion.button>
          </div>
        </div>

        <div className="p-8 border rounded bg-white">
          <h2 className="text-sm text-gray-600 mb-4">
            Weak Effect (strength: 0.1, radius: 80px)
          </h2>
          <div className="flex justify-center">
            <motion.button
              ref={magnetic3.ref}
              style={{ x: magnetic3.x, y: magnetic3.y }}
              className="px-8 py-4 bg-green-500 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
            >
              Subtle Movement
            </motion.button>
          </div>
        </div>

        <div className="p-8 border rounded bg-white">
          <h2 className="text-sm text-gray-600 mb-4">
            Disabled (no magnetic effect)
          </h2>
          <div className="flex justify-center">
            <motion.button
              ref={magnetic4.ref}
              style={{ x: magnetic4.x, y: magnetic4.y }}
              className="px-8 py-4 bg-gray-500 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
            >
              No Magnetic Effect
            </motion.button>
          </div>
        </div>

        <div className="p-8 border rounded bg-white">
          <h2 className="text-sm text-gray-600 mb-4">
            Multiple Magnetic Elements
          </h2>
          <div className="flex justify-center gap-4 flex-wrap">
            {[1, 2, 3, 4].map((num) => {
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const magnetic = useMagneticEffect({ strength: 0.3, radius: 100 });
              return (
                <motion.div
                  key={num}
                  ref={magnetic.ref}
                  style={{ x: magnetic.x, y: magnetic.y }}
                  className="w-20 h-20 bg-gradient-to-br from-pink-500 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg cursor-pointer"
                >
                  {num}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded">
        <h3 className="font-semibold mb-2">How it works:</h3>
        <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
          <li>The element translates toward your cursor when it's within the radius</li>
          <li>Translation is proportional to distance × strength</li>
          <li>Maximum translation is capped at 20px (per requirement 3.5)</li>
          <li>Element returns to center when cursor leaves the area</li>
        </ul>
      </div>
    </div>
  );
}
