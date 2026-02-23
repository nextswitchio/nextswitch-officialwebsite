'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { type Project } from "@/lib/data/projects";
import { useReducedMotion } from "@/lib/animations/hooks/useReducedMotion";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Link href={`/projects/${project.slug}`}>
      <motion.article
        className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer h-full flex flex-col"
        whileHover={prefersReducedMotion ? {} : { y: -8 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Project Image */}
        <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-gray-900 capitalize">
              {project.category.replace('-', ' ')}
            </span>
          </div>

          {/* View Project Arrow */}
          <motion.div
            className="absolute bottom-4 right-4 z-10 w-12 h-12 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100"
            initial={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowRight className="w-5 h-5 text-gray-900" />
          </motion.div>
        </div>

        {/* Project Info */}
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#006FF5] transition-colors">
            {project.title}
          </h3>
          
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4 flex-1">
            {project.description}
          </p>

          {/* Technology Tags */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.technologies.slice(0, 4).map((tech, index) => (
              <span
                key={index}
                className="inline-block px-3 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-700"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-700">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>

          {/* Year */}
          <div className="mt-4 pt-4 border-t border-gray-100">
            <span className="text-sm text-gray-500">{project.year}</span>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
