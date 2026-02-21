'use client'

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Connection {
  from: { x: number; y: number };
  to: { x: number; y: number };
  delay: number;
}

const WorldMap = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  // Africa-focused coordinates (positioned on right side)
  const africaCities = [
    { x: 62, y: 48, name: 'Lagos' },
    { x: 66, y: 54, name: 'Nairobi' },
    { x: 63, y: 42, name: 'Cairo' },
    { x: 60, y: 62, name: 'Cape Town' },
    { x: 58, y: 50, name: 'Accra' },
  ];

  // Global connection points
  const globalCities = [
    { x: 20, y: 45, name: 'New York' },
    { x: 50, y: 38, name: 'London' },
    { x: 80, y: 50, name: 'Singapore' },
    { x: 88, y: 60, name: 'Sydney' },
    { x: 28, y: 62, name: 'São Paulo' },
  ];

  const connections: Connection[] = africaCities.flatMap((africa, i) =>
    globalCities.map((global, j) => ({
      from: africa,
      to: global,
      delay: (i + j) * 0.3,
    }))
  );

  useEffect(() => {
    // Preload the SVG map
    const img = new Image();
    img.onload = () => setMapLoaded(true);
    img.src = '/world.svg';
  }, []);

  return (
    <div className="absolute inset-0 opacity-20">
      {/* Base world map from public folder - focused on Africa */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url(/world.svg)',
          backgroundSize: '150%',
          backgroundPosition: '33% 83%',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0) saturate(100%) invert(27%) sepia(98%) saturate(2477%) hue-rotate(193deg) brightness(101%) contrast(101%)',
          opacity: mapLoaded ? 0.3 : 0,
          transition: 'opacity 0.5s ease-in-out'
        }}
      />

      {/* Overlay SVG for animations */}
      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox="0 0 100 100" 
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Gradient definitions */}
        <defs>
          <linearGradient id="africaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#006FF5" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#01FFF0" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#006FF5" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#01FFF0" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#006FF5" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Connection lines from Africa to world */}
        {connections.map((conn, i) => (
          <motion.line
            key={i}
            x1={`${conn.from.x}%`}
            y1={`${conn.from.y}%`}
            x2={`${conn.to.x}%`}
            y2={`${conn.to.y}%`}
            stroke="url(#lineGradient)"
            strokeWidth="0.15"
            strokeDasharray="2,2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 1, 0],
              opacity: [0, 0.6, 0.6, 0]
            }}
            transition={{
              duration: 4,
              delay: conn.delay,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Africa city nodes - larger and more prominent */}
        {africaCities.map((city, i) => (
          <motion.g key={`africa-${i}`}>
            <motion.circle
              cx={`${city.x}%`}
              cy={`${city.y}%`}
              r="0.8"
              fill="#01FFF0"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
            />
            <motion.circle
              cx={`${city.x}%`}
              cy={`${city.y}%`}
              r="1.5"
              fill="none"
              stroke="#01FFF0"
              strokeWidth="0.2"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [1, 1.8, 1],
                opacity: [0.8, 0, 0.8]
              }}
              transition={{
                delay: 0.5 + i * 0.1,
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1
              }}
            />
          </motion.g>
        ))}

        {/* Global city nodes */}
        {globalCities.map((city, i) => (
          <motion.circle
            key={`global-${i}`}
            cx={`${city.x}%`}
            cy={`${city.y}%`}
            r="0.5"
            fill="#006FF5"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.7 }}
            transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
          />
        ))}

        {/* Animated particles along connections */}
        {connections.slice(0, 8).map((conn, i) => (
          <motion.circle
            key={`particle-${i}`}
            r="0.3"
            fill="#01FFF0"
            initial={{ 
              cx: `${conn.from.x}%`,
              cy: `${conn.from.y}%`,
              opacity: 0
            }}
            animate={{
              cx: [`${conn.from.x}%`, `${conn.to.x}%`, `${conn.from.x}%`],
              cy: [`${conn.from.y}%`, `${conn.to.y}%`, `${conn.from.y}%`],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 5,
              delay: conn.delay,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "linear"
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default WorldMap;
