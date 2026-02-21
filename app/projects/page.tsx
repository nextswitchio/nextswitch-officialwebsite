import { type Metadata } from "next";
import ProjectsHero from "@/components/projects-page/ProjectsHero";
import ProjectGrid from "@/components/projects-page/ProjectGrid";
import { projects } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: 'Our Projects | Next Switch',
  description: 'Explore Next Switch\'s portfolio of innovative web development, mobile apps, custom software solutions, and cutting-edge research projects.',
  openGraph: {
    title: 'Our Projects | Next Switch',
    description: 'Explore Next Switch\'s portfolio of innovative solutions that have helped businesses transform digitally and achieve their goals.',
    images: ['/og-projects.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Projects | Next Switch',
    description: 'Explore Next Switch\'s portfolio of innovative solutions.',
    images: ['/og-projects.jpg'],
  },
};

export default function ProjectsPage() {
  // JSON-LD structured data for portfolio
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Next Switch Projects Portfolio',
    description: 'A showcase of innovative projects by Next Switch including web development, mobile apps, and custom software solutions.',
    url: 'https://nextswitch.com/projects',
    publisher: {
      '@type': 'Organization',
      name: 'Next Switch',
      url: 'https://nextswitch.com',
    },
    hasPart: projects.map(project => ({
      '@type': 'CreativeWork',
      name: project.title,
      description: project.description,
      image: project.image,
      datePublished: `${project.year}-01-01`,
      author: {
        '@type': 'Organization',
        name: 'Next Switch',
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <ProjectsHero />
        <ProjectGrid projects={projects} />
      </main>
    </>
  );
}
