"use client";

/**
 * Example component demonstrating useCountUp hook usage
 * This is a test/example file to verify the hook works correctly
 */

import { useEffect } from "react";
import { useCountUp } from "../useCountUp";

export function CountUpExample() {
  // Basic counter from 0 to 1000
  const counter1 = useCountUp({ 
    end: 1000,
    duration: 2000,
  });

  // Counter with formatting
  const counter2 = useCountUp({ 
    end: 5000,
    duration: 2000,
    suffix: "+",
    separator: ","
  });

  // Counter with decimals and prefix
  const counter3 = useCountUp({ 
    start: 0,
    end: 99.99,
    duration: 2000,
    decimals: 2,
    prefix: "$",
  });

  // Counter with custom range
  const counter4 = useCountUp({ 
    start: 50,
    end: 150,
    duration: 1500,
    suffix: "%",
  });

  // Auto-start all counters on mount
  useEffect(() => {
    counter1.start();
    counter2.start();
    counter3.start();
    counter4.start();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-2xl font-bold mb-4">useCountUp Hook Examples</h1>
      
      <div className="space-y-4">
        <div className="p-4 border rounded">
          <h2 className="text-sm text-gray-600 mb-2">Basic Counter (0 → 1000)</h2>
          <div className="text-4xl font-bold">{counter1.value}</div>
          <div className="mt-2 space-x-2">
            <button 
              onClick={counter1.start}
              className="px-3 py-1 bg-blue-500 text-white rounded text-sm"
            >
              Start
            </button>
            <button 
              onClick={counter1.reset}
              className="px-3 py-1 bg-gray-500 text-white rounded text-sm"
            >
              Reset
            </button>
          </div>
        </div>

        <div className="p-4 border rounded">
          <h2 className="text-sm text-gray-600 mb-2">With Suffix (0 → 5,000+)</h2>
          <div className="text-4xl font-bold">{counter2.value}</div>
          <div className="mt-2 space-x-2">
            <button 
              onClick={counter2.start}
              className="px-3 py-1 bg-blue-500 text-white rounded text-sm"
            >
              Start
            </button>
            <button 
              onClick={counter2.reset}
              className="px-3 py-1 bg-gray-500 text-white rounded text-sm"
            >
              Reset
            </button>
          </div>
        </div>

        <div className="p-4 border rounded">
          <h2 className="text-sm text-gray-600 mb-2">With Decimals & Prefix (0 → $99.99)</h2>
          <div className="text-4xl font-bold">{counter3.value}</div>
          <div className="mt-2 space-x-2">
            <button 
              onClick={counter3.start}
              className="px-3 py-1 bg-blue-500 text-white rounded text-sm"
            >
              Start
            </button>
            <button 
              onClick={counter3.reset}
              className="px-3 py-1 bg-gray-500 text-white rounded text-sm"
            >
              Reset
            </button>
          </div>
        </div>

        <div className="p-4 border rounded">
          <h2 className="text-sm text-gray-600 mb-2">Custom Range (50% → 150%)</h2>
          <div className="text-4xl font-bold">{counter4.value}</div>
          <div className="mt-2 space-x-2">
            <button 
              onClick={counter4.start}
              className="px-3 py-1 bg-blue-500 text-white rounded text-sm"
            >
              Start
            </button>
            <button 
              onClick={counter4.reset}
              className="px-3 py-1 bg-gray-500 text-white rounded text-sm"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
