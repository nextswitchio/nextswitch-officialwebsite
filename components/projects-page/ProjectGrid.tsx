'use client';

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { type Project } from "@/lib/data/projects";
import { categories } from "@/lib/data/projects";
import ProjectCard from "./ProjectCard";
import ProjectFilters from "./ProjectFilters";
import { StaggerContainer } from "@/components/animations/StaggerContainer";
import { useReducedMotion } from "@/lib/animations/hooks/useReducedMotion";

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const [activeFilter, setActiveFilter] = useState('all');
  const prefersReducedMotion = useReducedMotion();

  // Filter projects based on active category
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') {
      return projects;
    }
    return projects.filter(project => project.category === activeFilter);
  }, [projects, activeFilter]);

  const handleFilterChange = (category: string) => {
    setActiveFilter(category);
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-12">
        {/* Filters */}
        <div className="mb-12 lg:mb-16">
          <ProjectFilters
            categories={categories}
            activeCategory={activeFilter}
            onFilterChange={handleFilterChange}
          />
        </div>

        {/* Projects Count */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-gray-600 text-sm md:text-base">
            Showing <span className="font-semibold text-gray-900">{filteredProjects.length}</span> {filteredProjects.length === 1 ? 'project' : 'projects'}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? {} : { opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.length > 0 ? (
              <StaggerContainer
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                staggerDelay={0.1}
              >
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={prefersReducedMotion ? {} : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </StaggerContainer>
            ) : (
              <motion.div
                className="text-center py-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-gray-500 text-lg">
                  No projects found in this category.
                </p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

// Export filtering logic for testing
export const filterProjects = (projects: Project[], category: string): Project[] => {
  if (category === 'all') {
    return projects;
  }
  return projects.filter(project => project.category === category);
};
