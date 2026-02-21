"use client";

import { TechnologyMarquee } from "../TechnologyMarquee";

const sampleTechnologies = [
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
];

export default function TechnologyMarqueeExample() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div>
          <h1 className="text-4xl font-bold mb-2">Technology Marquee</h1>
          <p className="text-muted-foreground">
            Continuous scrolling marquee with seamless looping and pause on hover
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Default Marquee</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Hover to pause the animation
            </p>
            <div className="bg-card border rounded-lg p-8">
              <TechnologyMarquee technologies={sampleTechnologies} />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Fast Speed</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Speed set to 100 pixels per second
            </p>
            <div className="bg-card border rounded-lg p-8">
              <TechnologyMarquee technologies={sampleTechnologies} speed={100} />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Slow Speed</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Speed set to 25 pixels per second
            </p>
            <div className="bg-card border rounded-lg p-8">
              <TechnologyMarquee technologies={sampleTechnologies} speed={25} />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">No Pause on Hover</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Animation continues even when hovering
            </p>
            <div className="bg-card border rounded-lg p-8">
              <TechnologyMarquee 
                technologies={sampleTechnologies} 
                pauseOnHover={false}
              />
            </div>
          </div>
        </div>

        <div className="mt-12 p-6 bg-muted rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Features</h3>
          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
            <li>Constant speed scrolling (Requirement 14.1)</li>
            <li>Pause on hover (Requirement 14.2)</li>
            <li>Seamless looping without visible jumps (Requirement 14.3)</li>
            <li>Duplicated content for seamless effect (Requirement 14.4)</li>
            <li>Respects reduced motion preferences</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
