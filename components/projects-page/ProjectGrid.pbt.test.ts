import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import { filterProjects } from './ProjectGrid';
import { type Project } from '@/lib/data/projects';

// Generator for project category
const categoryArbitrary = fc.constantFrom(
  'web-development',
  'mobile-development',
  'custom-software',
  'innovation-labs'
);

// Generator for a single project
const projectArbitrary = fc.record({
  id: fc.string(),
  slug: fc.string(),
  title: fc.string(),
  description: fc.string(),
  fullDescription: fc.string(),
  image: fc.webUrl(),
  images: fc.array(fc.webUrl()),
  category: categoryArbitrary,
  technologies: fc.array(fc.string(), { minLength: 1, maxLength: 10 }),
  challenge: fc.string(),
  solution: fc.string(),
  outcomes: fc.array(fc.string()),
  year: fc.integer({ min: 2020, max: 2024 }),
  liveUrl: fc.option(fc.webUrl(), { nil: undefined }),
  caseStudyUrl: fc.option(fc.webUrl(), { nil: undefined }),
  client: fc.option(fc.string(), { nil: undefined })
}) as fc.Arbitrary<Project>;

// Generator for array of projects
const projectsArbitrary = fc.array(projectArbitrary, { minLength: 0, maxLength: 20 });

// Generator for filter category (including 'all')
const filterCategoryArbitrary = fc.constantFrom(
  'all',
  'web-development',
  'mobile-development',
  'custom-software',
  'innovation-labs'
);

describe('ProjectGrid - Property-Based Tests', () => {
  describe('Property 1: Project Filtering Correctness', () => {
    it('should only return projects matching the selected category', () => {
      fc.assert(
        fc.property(projectsArbitrary, filterCategoryArbitrary, (projects, category) => {
          const filtered = filterProjects(projects, category);

          if (category === 'all') {
            // When filter is 'all', should return all projects
            return filtered.length === projects.length;
          }

          // When filter is specific category, all filtered projects must match that category
          return filtered.every(p => p.category === category);
        }),
        { numRuns: 100 }
      );
    });

    it('should return all projects when filter is "all"', () => {
      fc.assert(
        fc.property(projectsArbitrary, (projects) => {
          const filtered = filterProjects(projects, 'all');
          return filtered.length === projects.length &&
                 filtered.every((p, i) => p.id === projects[i].id);
        }),
        { numRuns: 100 }
      );
    });

    it('should return empty array when no projects match the category', () => {
      fc.assert(
        fc.property(projectsArbitrary, filterCategoryArbitrary, (projects, category) => {
          // Create projects that don't match the filter category
          const projectsWithoutCategory = projects.filter(p => p.category !== category);
          
          if (category === 'all') {
            // Skip this test for 'all' category
            return true;
          }

          const filtered = filterProjects(projectsWithoutCategory, category);
          return filtered.length === 0;
        }),
        { numRuns: 100 }
      );
    });

    it('should not modify the original projects array', () => {
      fc.assert(
        fc.property(projectsArbitrary, filterCategoryArbitrary, (projects, category) => {
          const originalLength = projects.length;
          const originalIds = projects.map(p => p.id);
          
          filterProjects(projects, category);
          
          // Original array should remain unchanged
          return projects.length === originalLength &&
                 projects.every((p, i) => p.id === originalIds[i]);
        }),
        { numRuns: 100 }
      );
    });

    it('should return subset or equal set of original projects', () => {
      fc.assert(
        fc.property(projectsArbitrary, filterCategoryArbitrary, (projects, category) => {
          const filtered = filterProjects(projects, category);
          
          // Filtered results should be <= original
          if (filtered.length > projects.length) {
            return false;
          }

          // All filtered projects should exist in original
          return filtered.every(fp => 
            projects.some(p => p.id === fp.id)
          );
        }),
        { numRuns: 100 }
      );
    });
  });

  describe('Property 5: Filter State Consistency', () => {
    it('should maintain consistency between filter and results', () => {
      fc.assert(
        fc.property(projectsArbitrary, filterCategoryArbitrary, (projects, category) => {
          const filtered = filterProjects(projects, category);
          
          // If category is 'all', filtered should equal projects
          if (category === 'all') {
            return filtered.length === projects.length;
          }
          
          // If category is specific, all results must match
          return filtered.every(p => p.category === category);
        }),
        { numRuns: 100 }
      );
    });

    it('should produce deterministic results for same inputs', () => {
      fc.assert(
        fc.property(projectsArbitrary, filterCategoryArbitrary, (projects, category) => {
          const filtered1 = filterProjects(projects, category);
          const filtered2 = filterProjects(projects, category);
          
          // Same inputs should produce same outputs
          return filtered1.length === filtered2.length &&
                 filtered1.every((p, i) => p.id === filtered2[i].id);
        }),
        { numRuns: 100 }
      );
    });

    it('should handle edge case of empty projects array', () => {
      fc.assert(
        fc.property(filterCategoryArbitrary, (category) => {
          const filtered = filterProjects([], category);
          return filtered.length === 0;
        }),
        { numRuns: 50 }
      );
    });

    it('should count projects correctly per category', () => {
      fc.assert(
        fc.property(projectsArbitrary, (projects) => {
          const webDevCount = projects.filter(p => p.category === 'web-development').length;
          const mobileCount = projects.filter(p => p.category === 'mobile-development').length;
          const customCount = projects.filter(p => p.category === 'custom-software').length;
          const labsCount = projects.filter(p => p.category === 'innovation-labs').length;
          
          const filteredWeb = filterProjects(projects, 'web-development');
          const filteredMobile = filterProjects(projects, 'mobile-development');
          const filteredCustom = filterProjects(projects, 'custom-software');
          const filteredLabs = filterProjects(projects, 'innovation-labs');
          
          return filteredWeb.length === webDevCount &&
                 filteredMobile.length === mobileCount &&
                 filteredCustom.length === customCount &&
                 filteredLabs.length === labsCount;
        }),
        { numRuns: 100 }
      );
    });
  });
});
