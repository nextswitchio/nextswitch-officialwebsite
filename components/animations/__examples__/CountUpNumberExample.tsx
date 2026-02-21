"use client";

/**
 * CountUpNumber Component Examples
 * 
 * This file demonstrates various usage patterns for the CountUpNumber component.
 * These examples can be used for testing and documentation purposes.
 */

import React from "react";
import { CountUpNumber } from "../CountUpNumber";

export function CountUpNumberExample() {
  return (
    <div className="space-y-12 p-8">
      <section>
        <h2 className="text-2xl font-bold mb-4">Basic Counter</h2>
        <div className="text-6xl font-bold">
          <CountUpNumber end={1000} />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">With Suffix</h2>
        <div className="text-6xl font-bold">
          <CountUpNumber end={500} suffix="+" />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">With Prefix</h2>
        <div className="text-6xl font-bold">
          <CountUpNumber end={99.99} decimals={2} prefix="$" />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Large Number</h2>
        <div className="text-6xl font-bold">
          <CountUpNumber end={1234567} />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">With Decimals</h2>
        <div className="text-6xl font-bold">
          <CountUpNumber end={98.7} decimals={1} suffix="%" />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Fast Animation</h2>
        <div className="text-6xl font-bold">
          <CountUpNumber end={750} duration={1000} suffix="+" />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Slow Animation</h2>
        <div className="text-6xl font-bold">
          <CountUpNumber end={300} duration={4000} />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Custom Start Value</h2>
        <div className="text-6xl font-bold">
          <CountUpNumber start={50} end={100} suffix="%" />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Stats Grid</h2>
        <div className="grid grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-blue-600">
              <CountUpNumber end={150} suffix="+" />
            </div>
            <p className="text-gray-600 mt-2">Projects Completed</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-green-600">
              <CountUpNumber end={50} suffix="+" />
            </div>
            <p className="text-gray-600 mt-2">Team Members</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-purple-600">
              <CountUpNumber end={98} decimals={0} suffix="%" />
            </div>
            <p className="text-gray-600 mt-2">Client Satisfaction</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Currency Format</h2>
        <div className="text-6xl font-bold text-green-600">
          <CountUpNumber end={1500000} prefix="$" />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">No Auto-Trigger (Manual)</h2>
        <div className="text-6xl font-bold">
          <CountUpNumber end={999} triggerOnView={false} />
        </div>
        <p className="text-sm text-gray-600 mt-2">
          This counter starts immediately on mount, not on viewport entry
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Multiple Counters</h2>
        <div className="flex gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold">
              <CountUpNumber end={25} suffix="K" />
            </div>
            <p className="text-sm text-gray-600">Users</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold">
              <CountUpNumber end={1.5} decimals={1} suffix="M" />
            </div>
            <p className="text-sm text-gray-600">Downloads</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold">
              <CountUpNumber end={99.9} decimals={1} suffix="%" />
            </div>
            <p className="text-sm text-gray-600">Uptime</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CountUpNumberExample;
