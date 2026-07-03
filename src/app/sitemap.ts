import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/utils";
import { caseStudies } from "@/data/case-studies";
import { insightsContent } from "@/data/insights";
import { positions } from "@/data/positions";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = absoluteUrl("");

  const staticPages = [
    { url: baseUrl, changeFrequency: "weekly" as const, priority: 1 },
    { url: `${baseUrl}/about`, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/services`, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/insights`, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/careers`, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/labs`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/contact`, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/booking`, changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${baseUrl}/events`, changeFrequency: "weekly" as const, priority: 0.8 },
  ];

  const insightPages = insightsContent.map((insight) => ({
    url: `${baseUrl}/insights/${insight.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
    lastModified: insight.date ? new Date(insight.date) : undefined,
  }));

  const caseStudyPages = caseStudies.map((study) => ({
    url: `${baseUrl}/case-studies/${study.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const careerPages = positions.map((position) => ({
    url: `${baseUrl}/careers/${position.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...insightPages,
    ...caseStudyPages,
    ...careerPages,
  ];
}
