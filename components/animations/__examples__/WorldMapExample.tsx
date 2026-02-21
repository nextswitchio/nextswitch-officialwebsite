'use client'

import WorldMap from '../WorldMap';

/**
 * WorldMap Example
 * 
 * Demonstrates the interactive world map animation with Africa focus
 * and connectivity lines showing global connections.
 */
export default function WorldMapExample() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">World Map - Africa Focus</h2>
        <p className="text-gray-600 mb-4">
          Interactive world map with animated connectivity lines from Africa to the rest of the world.
          Features pulsing nodes, flowing particles, and gradient effects.
        </p>
      </div>

      {/* Full Screen Example */}
      <div className="relative w-full h-[600px] bg-black rounded-lg overflow-hidden">
        <WorldMap />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-white text-center">
            <h3 className="text-4xl font-bold mb-2">Africa Connected</h3>
            <p className="text-lg opacity-80">Building bridges across continents</p>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <h4 className="font-semibold mb-2">🌍 Africa Focus</h4>
          <p className="text-sm text-gray-600">
            Map positioned with Africa on the right side, highlighting the continent's central role
          </p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <h4 className="font-semibold mb-2">⚡ Animated Connections</h4>
          <p className="text-sm text-gray-600">
            Dynamic lines showing connectivity from African cities to global destinations
          </p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <h4 className="font-semibold mb-2">✨ Particle Effects</h4>
          <p className="text-sm text-gray-600">
            Flowing particles along connection lines with pulsing node animations
          </p>
        </div>
      </div>
    </div>
  );
}
