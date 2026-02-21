import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProjectCard from './ProjectCard';
import { type Project } from '@/lib/data/projects';

const mockProject: Project = {
  id: '1',
  slug: 'test-project',
  title: 'Test Project',
  description: 'This is a test project description',
  fullDescription: 'Full description',
  image: 'https://example.com/image.jpg',
  images: ['https://example.com/image.jpg'],
  category: 'web-development',
  technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Node.js'],
  challenge: 'Test challenge',
  solution: 'Test solution',
  outcomes: ['Outcome 1', 'Outcome 2'],
  year: 2024
};

describe('ProjectCard', () => {
  it('should render project title', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('Test Project')).toBeInTheDocument();
  });

  it('should render project description', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('This is a test project description')).toBeInTheDocument();
  });

  it('should render category badge', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('web development')).toBeInTheDocument();
  });

  it('should render year', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('2024')).toBeInTheDocument();
  });

  it('should render first 4 technology tags', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Tailwind CSS')).toBeInTheDocument();
    expect(screen.getByText('Next.js')).toBeInTheDocument();
  });

  it('should show "+X more" when there are more than 4 technologies', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('+1 more')).toBeInTheDocument();
  });

  it('should not show "+X more" when there are 4 or fewer technologies', () => {
    const projectWithFewTechs = {
      ...mockProject,
      technologies: ['React', 'TypeScript', 'Tailwind CSS']
    };
    render(<ProjectCard project={projectWithFewTechs} />);
    expect(screen.queryByText(/\+\d+ more/)).not.toBeInTheDocument();
  });

  it('should have a link to project detail page', () => {
    render(<ProjectCard project={mockProject} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/projects/test-project');
  });

  it('should render project image with correct alt text', () => {
    render(<ProjectCard project={mockProject} />);
    const image = screen.getByAltText('Test Project');
    expect(image).toBeInTheDocument();
  });
});
