"use client";

/**
 * AnimatedCard Example
 * 
 * This file demonstrates various usage patterns for the AnimatedCard component.
 * It shows how to use the component with different configurations and content types.
 */

import React from "react";
import { AnimatedCard } from "../AnimatedCard";

export default function AnimatedCardExample() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div>
          <h1 className="text-3xl font-bold mb-2">AnimatedCard Examples</h1>
          <p className="text-gray-600 mb-8">
            Hover over the cards to see the lift and image zoom effects
          </p>
        </div>

        {/* Example 1: Basic card with image */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Basic Card with Image</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatedCard className="bg-white rounded-lg overflow-hidden">
              <img
                src="/pictures/image.png"
                alt="Example"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Card Title</h3>
                <p className="text-gray-600">
                  This card has hover lift and image zoom effects enabled.
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard className="bg-white rounded-lg overflow-hidden">
              <img
                src="/pictures/vision_image.png"
                alt="Example"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Another Card</h3>
                <p className="text-gray-600">
                  All effects are enabled by default for smooth interactions.
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard className="bg-white rounded-lg overflow-hidden">
              <img
                src="/pictures/ourevents.png"
                alt="Example"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Third Card</h3>
                <p className="text-gray-600">
                  Hover to see the 8px lift and shadow depth increase.
                </p>
              </div>
            </AnimatedCard>
          </div>
        </section>

        {/* Example 2: Card without lift effect */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Card Without Lift Effect</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatedCard 
              className="bg-white rounded-lg overflow-hidden"
              hoverLift={false}
            >
              <img
                src="/pictures/image.png"
                alt="Example"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">No Lift Effect</h3>
                <p className="text-gray-600">
                  This card only has image zoom, no lift or shadow change.
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard className="bg-white rounded-lg overflow-hidden">
              <img
                src="/pictures/image.png"
                alt="Example"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">With Lift Effect</h3>
                <p className="text-gray-600">
                  Compare this card with the one on the left to see the difference.
                </p>
              </div>
            </AnimatedCard>
          </div>
        </section>

        {/* Example 3: Card without image zoom */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Card Without Image Zoom</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatedCard 
              className="bg-white rounded-lg overflow-hidden"
              imageZoom={false}
            >
              <img
                src="/pictures/vision_image.png"
                alt="Example"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">No Image Zoom</h3>
                <p className="text-gray-600">
                  This card lifts but the image doesn't zoom on hover.
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard className="bg-white rounded-lg overflow-hidden">
              <img
                src="/pictures/vision_image.png"
                alt="Example"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">With Image Zoom</h3>
                <p className="text-gray-600">
                  Compare this card with the one on the left to see the zoom effect.
                </p>
              </div>
            </AnimatedCard>
          </div>
        </section>

        {/* Example 4: Card without any effects */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Card With All Effects Disabled</h2>
          <div className="max-w-md">
            <AnimatedCard 
              className="bg-white rounded-lg overflow-hidden shadow-md"
              hoverLift={false}
              imageZoom={false}
            >
              <img
                src="/pictures/ourevents.png"
                alt="Example"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Static Card</h3>
                <p className="text-gray-600">
                  This card has no hover effects, behaving like a regular card.
                </p>
              </div>
            </AnimatedCard>
          </div>
        </section>

        {/* Example 5: Card without image */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Card Without Image</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatedCard className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2">Text Only Card</h3>
              <p className="text-gray-600">
                This card has no image but still has the lift effect on hover.
              </p>
            </AnimatedCard>

            <AnimatedCard className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-6 text-white">
              <h3 className="text-xl font-semibold mb-2">Gradient Card</h3>
              <p className="text-white/90">
                Cards can have any styling, including gradients.
              </p>
            </AnimatedCard>

            <AnimatedCard className="bg-white rounded-lg p-6 border-2 border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-blue-500 rounded-full" />
                <div>
                  <h3 className="text-lg font-semibold">Icon Card</h3>
                  <p className="text-sm text-gray-500">With avatar</p>
                </div>
              </div>
              <p className="text-gray-600">
                Cards can contain any content structure.
              </p>
            </AnimatedCard>
          </div>
        </section>
      </div>
    </div>
  );
}
