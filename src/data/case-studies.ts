export interface CaseStudy {
  slug: string
  client: string
  tagline: string
  industry: string
  duration: string
  challenge: string
  challengeDetail: string
  strategy: string
  strategyDetail: string
  outcome: string
  outcomeDetail: string
  impact: string
  metrics: { label: string; value: string }[]
  approach: string[]
  technologies: string[]
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "financial-services-platform",
    client: "Financial Services Platform",
    tagline: "Digital transformation for a leading African bank",
    industry: "Financial Services",
    duration: "18 months",
    challenge: "Legacy systems limited customer experience and operational efficiency.",
    challengeDetail:
      "The bank was operating on a decades-old core banking system that couldn't keep pace with the rapidly evolving digital landscape. Customers faced long wait times, limited self-service options, and a fragmented experience across channels. Internally, manual processes created bottlenecks, and the lack of real-time data made it difficult to personalize offerings or respond to market changes.",
    strategy: "Designed and built a modern digital banking platform with mobile-first experience.",
    strategyDetail:
      "Our team partnered with the bank's leadership to design a greenfield digital banking platform from the ground up. We adopted a mobile-first approach, building a cross-platform application using React Native for the front-end and a microservices architecture on the back-end. The platform was rolled out in phases, starting with core banking features, then expanding to include savings, loans, investments, and financial literacy content. We also implemented an AI-powered customer support chatbot and real-time analytics dashboard.",
    outcome: "2M+ users onboarded in 18 months. Customer satisfaction up 45%.",
    outcomeDetail:
      "The platform exceeded adoption targets within the first year. Customer acquisition cost dropped by 60% as word-of-mouth referrals drove organic growth. The bank saw a 45% improvement in customer satisfaction scores and a 30% increase in digital transaction volume. Operational costs were reduced by 25% through automation of manual processes. The platform now serves as the bank's primary customer engagement channel.",
    impact: "Industry benchmark for digital banking in the region.",
    metrics: [
      { label: "Users Onboarded", value: "2M+" },
      { label: "Satisfaction Increase", value: "45%" },
      { label: "Acquisition Cost Drop", value: "60%" },
      { label: "Transaction Volume", value: "+30%" },
    ],
    approach: [
      "Deep discovery and stakeholder alignment across 12 departments",
      "Iterative MVP development with bi-weekly customer testing",
      "Phased rollout across 3 regions with localized features",
      "Continuous performance optimization and security auditing",
    ],
    technologies: ["React Native", "Node.js", "PostgreSQL", "AWS", "Kubernetes", "TensorFlow"],
  },
  {
    slug: "edtech-venture",
    client: "EdTech Venture",
    tagline: "From idea to 100,000 learners in 12 months",
    industry: "Education Technology",
    duration: "12 months",
    challenge: "Founders had vision but needed product, technology, and go-to-market strategy.",
    challengeDetail:
      "The founding team consisted of experienced educators with a compelling vision for democratizing access to quality education across Africa. However, they lacked the technical capacity to build the platform, the product expertise to design an engaging learning experience, and the strategic framework to reach their target audience. They needed a partner who could take them from concept to launch and beyond.",
    strategy: "Built MVP in 8 weeks, validated with early users, then scaled platform iteratively.",
    strategyDetail:
      "We ran a 2-week design sprint to define the core product and user flows, then built a functional MVP in 8 weeks using Next.js and a serverless architecture. The platform launched with 20 courses and 3 learning paths, targeting university students and young professionals. We established feedback loops through in-app surveys, community channels, and usage analytics to guide each iteration. As the platform grew, we added AI-powered course recommendations, gamification, and a peer-learning community feature.",
    outcome: "100K+ active learners, 500+ courses, partnerships with 30 institutions.",
    outcomeDetail:
      "Within 12 months of launch, the platform crossed 100,000 active learners and expanded to 500+ courses across 15 subject areas. Strategic partnerships with 30 universities and training institutions provided certified credentialing, which became a major growth driver. The venture secured seed funding and was accepted into a leading accelerator program. Monthly active users continue to grow at 25% month-over-month.",
    impact: "One of the fastest growing EdTech platforms in West Africa.",
    metrics: [
      { label: "Active Learners", value: "100K+" },
      { label: "Courses", value: "500+" },
      { label: "Institution Partners", value: "30" },
      { label: "MoM Growth", value: "25%" },
    ],
    approach: [
      "2-week design sprint to validate product-market fit",
      "8-week MVP build using lean methodology",
      "Data-informed feature prioritization and iteration",
      "Strategic partnership development with educational institutions",
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Vercel", "Stripe", "OpenAI API"],
  },
  {
    slug: "government-innovation-program",
    client: "Government Innovation Program",
    tagline: "Modernizing public service delivery",
    industry: "Government & Public Sector",
    duration: "14 months",
    challenge: "Manual processes created bottlenecks in citizen service delivery.",
    challengeDetail:
      "A state government agency responsible for business registration, permits, and licenses relied on paper-based processes spread across multiple physical offices. Citizens often waited weeks for approvals, corruption was enabled by lack of transparency, and the agency had no reliable data on processing times or application volumes. Leadership recognized the urgent need for digital transformation but faced internal resistance and complex regulatory constraints.",
    strategy: "Designed digital service platform with workflow automation and analytics.",
    strategyDetail:
      "We designed a comprehensive digital services platform that digitized the entire application lifecycle — from submission to approval to certificate issuance. The platform featured role-based dashboards for agency staff, automated workflow routing, real-time status tracking for citizens, and an analytics engine for leadership. We worked closely with legal and compliance teams to ensure the platform met all regulatory requirements while introducing modern user experience standards. Change management and staff training were integrated into the rollout plan.",
    outcome: "60% reduction in processing time. 90% citizen satisfaction rate.",
    outcomeDetail:
      "Average processing time for business registration dropped from 14 days to 3 days. Citizen satisfaction surveys showed a 90% approval rating for the new digital experience. The platform eliminated physical queues and reduced in-person visits by 70%. Transparency metrics improved significantly, with 100% of applications now trackable in real-time. The agency reported a 40% reduction in operational costs and redeployed 30 staff to higher-value functions.",
    impact: "Model for digital government transformation across the region.",
    metrics: [
      { label: "Processing Time Reduction", value: "60%" },
      { label: "Citizen Satisfaction", value: "90%" },
      { label: "In-Person Visits Cut", value: "70%" },
      { label: "Cost Reduction", value: "40%" },
    ],
    approach: [
      "Regulatory and compliance discovery with legal stakeholders",
      "Human-centered design with citizen and staff input",
      "Phased rollout across 5 pilot departments",
      "Comprehensive training and change management program",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Docker", "Azure", "Power BI"],
  },
]

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find(s => s.slug === slug)
}
