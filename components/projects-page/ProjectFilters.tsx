'use client';

import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/animations/hooks/useReducedMotion";

interface Category {
  id: string;
  label: string;
}

interface ProjectFiltersProps {
  categories: Category[];
  activeCategory: string;
  onFilterChange: (category: string) => void;
}

export default function ProjectFilters({
  categories,
  activeCategory,
  onFilterChange
}: ProjectFiltersProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
      {categories.map((category) => {
        const isActive = activeCategory === category.id;
        
        return (
          <motion.button
            key={category.id}
            onClick={() => onFilterChange(category.id)}
            className={`
              px-6 py-3 rounded-full font-medium text-sm md:text-base
              transition-all duration-300
              ${isActive
                ? 'bg-[#006FF5] text-white shadow-lg shadow-[#006FF5]/30'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }
            `}
            whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
            transition={{ duration: 0.2 }}
            aria-label={`Filter by ${category.label}`}
            aria-pressed={isActive}
            data-active={isActive}
          >
            {category.label}
          </motion.button>
        );
      })}
    </div>
  );
}
