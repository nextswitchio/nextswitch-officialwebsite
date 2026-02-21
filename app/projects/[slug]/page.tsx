import { type Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { getProjectBySlug, projects } from "@/lib/data/projects";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { AnimatedText } from "@/components/animations/AnimatedText";
import { Button } from "@/components/ui/button";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found | Next Switch',
    };
  }

  return {
    title: `${project.title} | Next Switch Projects`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Next Switch Projects`,
      description: project.description,
      images: [project.image],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | Next Switch Projects`,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.fullDescription,
    image: project.image,
    datePublished: `${project.year}-01-01`,
    author: {
      '@type': 'Organization',
      name: 'Next Switch',
      url: 'https://nextswitch.com',
    },
    keywords: project.technologies.join(', '),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="pt-32 pb-20 bg-white min-h-screen">
        <div className="container mx-auto px-4 lg:px-12 max-w-7xl">
          {/* Back Button */}
          <AnimatedSection variant="fadeInUp">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-[#006FF5] transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Projects</span>
            </Link>
          </AnimatedSection>

          {/* Category Badge */}
          <AnimatedSection variant="fadeInUp" delay={0.1}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white text-sm font-medium text-gray-600 capitalize mb-6">
              <span className="w-2 h-2 rounded-full bg-[#006FF5]"></span>
              {project.category.replace('-', ' ')}
            </span>
          </AnimatedSection>

          {/* Title */}
          <AnimatedText
            text={project.title}
            variant="word"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
            as="h1"
            delay={0.2}
          />

          {/* Meta Info */}
          <AnimatedSection variant="fadeInUp" delay={0.3}>
            <div className="flex flex-wrap items-center gap-6 mb-12 text-gray-600">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Year:</span>
                <span className="text-sm">{project.year}</span>
              </div>
              {project.client && (
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Client:</span>
                  <span className="text-sm">{project.client}</span>
                </div>
              )}
            </div>
          </AnimatedSection>

          {/* Hero Image */}
          <AnimatedSection variant="fadeInScale" delay={0.4}>
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-16 bg-gray-100">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>
          </AnimatedSection>

          {/* Project Description */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2">
              <AnimatedSection variant="fadeInUp" delay={0.5}>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Overview
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {project.fullDescription}
                </p>
              </AnimatedSection>

              {/* Challenge */}
              <AnimatedSection variant="fadeInUp" delay={0.6}>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  The Challenge
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {project.challenge}
                </p>
              </AnimatedSection>

              {/* Solution */}
              <AnimatedSection variant="fadeInUp" delay={0.7}>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Our Solution
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {project.solution}
                </p>
              </AnimatedSection>

              {/* Outcomes */}
              <AnimatedSection variant="fadeInUp" delay={0.8}>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Results & Impact
                </h2>
                <ul className="space-y-3">
                  {project.outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#006FF5]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="w-2 h-2 rounded-full bg-[#006FF5]"></span>
                      </span>
                      <span className="text-gray-600 text-lg">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <AnimatedSection variant="fadeInUp" delay={0.5}>
                <div className="sticky top-32 space-y-8">
                  {/* Technologies */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="inline-block px-3 py-1.5 rounded-full bg-gray-100 text-sm font-medium text-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  {(project.liveUrl || project.caseStudyUrl) && (
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-4">
                        Project Links
                      </h3>
                      <div className="space-y-3">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-[#006FF5] hover:text-[#0056c4] transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span className="text-sm font-medium">Visit Live Site</span>
                          </a>
                        )}
                        {project.caseStudyUrl && (
                          <a
                            href={project.caseStudyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-[#006FF5] hover:text-[#0056c4] transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span className="text-sm font-medium">Read Case Study</span>
                          </a>
                        )}
                      </div>
                    </div>
                  )}

                  {/* CTA */}
                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Interested in a similar project?
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Let's discuss how we can help bring your ideas to life.
                    </p>
                    <Link href="/contact">
                      <Button className="w-full rounded-full bg-[#006FF5] text-white hover:bg-[#0056c4] px-6 py-3 h-auto text-base flex items-center justify-center gap-2">
                        Get in Touch
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Additional Images */}
          {project.images.length > 1 && (
            <AnimatedSection variant="fadeInUp" delay={0.9}>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                Project Gallery
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.images.slice(1).map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-video rounded-xl overflow-hidden bg-gray-100"
                  >
                    <Image
                      src={image}
                      alt={`${project.title} - Image ${index + 2}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ))}
              </div>
            </AnimatedSection>
          )}
        </div>
      </main>
    </>
  );
}
