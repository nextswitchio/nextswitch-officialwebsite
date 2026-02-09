'use client'

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Hyperion Tech",
    description: "A leading innovator in creating immersive, next-generation applications for the Apple Vision Pro and other cutting-edge platforms. Pioneers in spatial computing.",
    category: "Fashion",
    stage: "Bootstrap Stage",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Hyperion Tech",
    description: "A leading innovator in creating immersive, next-generation applications for the Apple Vision Pro and other cutting-edge platforms. Pioneers in spatial computing.",
    category: "Fashion",
    stage: "Bootstrap Stage",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Hyperion Tech",
    description: "A leading innovator in creating immersive, next-generation applications for the Apple Vision Pro and other cutting-edge platforms. Pioneers in spatial computing.",
    category: "Fashion",
    stage: "Bootstrap Stage",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&h=400&fit=crop",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const cardCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;

      // Calculate how far the card is from the center of viewport
      const distanceFromCenter = (cardCenter - viewportCenter) / windowHeight;

      // Apply parallax effect (image moves slower than scroll)
      const parallaxOffset = distanceFromCenter * 50; // Adjust multiplier for intensity
      setParallaxY(parallaxOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={cardRef}
      className="flex flex-col lg:flex-row gap-6 lg:gap-10 p-6 bg-[#F8F8F8] rounded-2xl border border-[#E5E5E5] overflow-hidden"
      style={{
        transform: `translateY(${parallaxY * 0.1}px)`,
        transition: 'transform 0.1s ease-out',
      }}
    >
      {/* Left Content */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-[#040404] mb-3">
            {project.title}
          </h3>
          <p className="text-[#040404]/70 text-sm md:text-base leading-relaxed mb-6">
            {project.description}
          </p>
        </div>

        <div>
          <p className="text-[#040404] font-medium mb-1">
            {project.category}
          </p>
          <p className="text-[#040404]/60 text-sm mb-4">
            {project.stage}
          </p>

          <Button
            variant="outline"
            className="rounded-full border-[#040404] text-[#040404] hover:bg-[#040404] hover:text-white px-6"
          >
            Full Project
          </Button>
        </div>
      </div>

      {/* Right Image with Parallax */}
      <div className="lg:w-1/2 relative h-64 lg:h-auto rounded-xl overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            transform: `translateY(${-parallaxY * 0.5}px) scale(1.1)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

const PioneeringInnovation = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#040404] mb-2">
            Pioneering Innovation
          </h2>
          <p className="text-[#040404]/60 text-base">
            Curated List of Projects
          </p>
        </div>

        {/* Project Cards */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PioneeringInnovation;
