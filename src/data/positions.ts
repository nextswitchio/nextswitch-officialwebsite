export interface Position {
  slug: string
  title: string
  department: string
  location: string
  type: string
  about: string
  responsibilities: string[]
  requirements: string[]
  niceToHave: string[]
}

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/ — /g, "-")
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
}

const rawPositions = [
  {
    title: "Senior Software Engineer",
    department: "Engineering",
    location: "Lagos, Nigeria",
    type: "Full-time",
    about: "We're looking for a Senior Software Engineer to lead the design and implementation of scalable systems that power our ecosystem of products. You'll work across teams to architect solutions, mentor junior engineers, and drive technical excellence.",
    responsibilities: [
      "Design, build, and maintain scalable backend services and APIs",
      "Collaborate with product and design teams to define technical requirements",
      "Mentor junior engineers through code reviews and pair programming",
      "Contribute to architectural decisions and technical strategy",
      "Write clean, well-tested, and performant code",
      "Participate in on-call rotation and incident response",
    ],
    requirements: [
      "5+ years of experience in software engineering",
      "Strong proficiency in TypeScript, Node.js, or Python",
      "Experience with cloud infrastructure (AWS, GCP, or Azure)",
      "Deep understanding of distributed systems and microservices",
      "Experience with relational and NoSQL databases",
      "Excellent communication and collaboration skills",
    ],
    niceToHave: [
      "Experience with React or Next.js",
      "Knowledge of AI/ML pipelines",
      "Open source contributions",
      "Experience building products for African markets",
    ],
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "Lagos, Nigeria",
    type: "Full-time",
    about: "We're seeking a Product Designer to craft intuitive, beautiful experiences for our suite of digital products. You'll own the end-to-end design process from research to high-fidelity mockups.",
    responsibilities: [
      "Lead product design for key features and new products",
      "Conduct user research and usability testing",
      "Create wireframes, prototypes, and high-fidelity designs",
      "Collaborate with engineers to ensure faithful implementation",
      "Maintain and evolve our design system",
      "Contribute to product strategy and vision",
    ],
    requirements: [
      "3+ years of experience in product design",
      "Strong portfolio demonstrating UX thinking and visual design",
      "Proficiency in Figma and prototyping tools",
      "Understanding of design systems and component libraries",
      "Ability to articulate design decisions clearly",
      "Experience with user research methodologies",
    ],
    niceToHave: [
      "Experience designing for African users and contexts",
      "Motion design or illustration skills",
      "Knowledge of HTML/CSS",
      "Experience with design tokens",
    ],
  },
  {
    title: "AI Research Scientist",
    department: "Labs",
    location: "Nairobi, Kenya",
    type: "Full-time",
    about: "Join our Labs team to research and develop AI solutions that address Africa's unique challenges. You'll work on cutting-edge projects spanning natural language processing, computer vision, and predictive analytics.",
    responsibilities: [
      "Design and conduct research on AI/ML problems relevant to Africa",
      "Build and train models for production deployment",
      "Publish research findings and contribute to the broader AI community",
      "Collaborate with product teams to identify AI opportunities",
      "Stay current with the latest advances in AI and machine learning",
    ],
    requirements: [
      "PhD or MSc in Computer Science, AI, or related field",
      "Strong publication record in top-tier ML conferences",
      "Proficiency in Python and deep learning frameworks (PyTorch, TensorFlow)",
      "Experience with NLP, computer vision, or reinforcement learning",
      "Understanding of model deployment and MLOps",
    ],
    niceToHave: [
      "Experience with African languages or low-resource NLP",
      "Knowledge of edge AI and on-device ML",
      "Open source ML projects",
      "Experience leading research teams",
    ],
  },
  {
    title: "Program Manager — Academy",
    department: "Academy",
    location: "Accra, Ghana",
    type: "Full-time",
    about: "We're looking for a Program Manager to lead our Next Switch Academy programs. You'll oversee curriculum delivery, mentor coordination, and student success from enrollment through graduation.",
    responsibilities: [
      "Manage end-to-end delivery of Academy programs",
      "Coordinate with instructors, mentors, and industry partners",
      "Track student progress and implement support interventions",
      "Develop and refine program curriculum",
      "Measure and report on program outcomes",
      "Plan and execute cohort admissions and orientation",
    ],
    requirements: [
      "4+ years of experience in program or project management",
      "Experience in education, training, or talent development",
      "Strong organizational and leadership skills",
      "Excellent verbal and written communication",
      "Data-driven approach to decision making",
      "Passion for developing young African talent",
    ],
    niceToHave: [
      "Experience in a fast-growing startup or tech company",
      "Background in technology or engineering",
      "Experience with learning management systems",
      "Network across African universities and tech hubs",
    ],
  },
  {
    title: "Digital Marketing Lead",
    department: "Marketing",
    location: "Remote / Lagos",
    type: "Full-time",
    about: "We're seeking a Digital Marketing Lead to own our brand presence across digital channels. You'll develop and execute strategies that tell our story, engage our community, and drive growth.",
    responsibilities: [
      "Develop and execute digital marketing strategy",
      "Manage social media channels and content calendar",
      "Plan and optimize paid advertising campaigns",
      "Track and report on marketing KPIs and ROI",
      "Collaborate with content creators and external agencies",
      "Build and nurture online community engagement",
    ],
    requirements: [
      "4+ years of experience in digital marketing",
      "Proven track record of growing online communities",
      "Experience with SEO, SEM, and social media advertising",
      "Strong copywriting and content creation skills",
      "Proficiency with analytics tools (Google Analytics, etc.)",
      "Understanding of brand strategy and positioning",
    ],
    niceToHave: [
      "Experience marketing to African audiences",
      "Video production and editing skills",
      "Experience with CRM and marketing automation",
      "Knowledge of the African tech ecosystem",
    ],
  },
  {
    title: "Partnerships Associate",
    department: "Business Development",
    location: "Lagos, Nigeria",
    type: "Full-time",
    about: "We're looking for a Partnerships Associate to build and manage relationships with organizations across Africa. You'll identify collaboration opportunities and drive partnerships that advance our mission.",
    responsibilities: [
      "Identify and research potential partnership opportunities",
      "Develop partnership proposals and pitch materials",
      "Manage partner relationships and communication",
      "Coordinate cross-functional partnership execution",
      "Track partnership metrics and report on impact",
      "Represent Next Switch at events and meetings",
    ],
    requirements: [
      "2+ years of experience in business development or partnerships",
      "Excellent relationship-building and negotiation skills",
      "Strong written and verbal communication",
      "Ability to work independently and manage multiple priorities",
      "Understanding of the African innovation ecosystem",
      "Willingness to travel across the continent",
    ],
    niceToHave: [
      "Experience in tech, education, or development sectors",
      "Network of contacts across African organizations",
      "Experience with CRM tools",
      "Fluency in French or Portuguese",
    ],
  },
  {
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    about: "We're seeking a DevOps Engineer to build and maintain the infrastructure that powers our products. You'll ensure reliability, scalability, and security across our cloud environments.",
    responsibilities: [
      "Design and manage cloud infrastructure on AWS/GCP",
      "Implement CI/CD pipelines and automation",
      "Monitor system performance and reliability",
      "Manage containerization and orchestration (Docker, Kubernetes)",
      "Implement security best practices and compliance",
      "Document infrastructure and operational procedures",
    ],
    requirements: [
      "3+ years of experience in DevOps or SRE roles",
      "Strong knowledge of AWS or GCP cloud services",
      "Experience with Terraform, Pulumi, or similar IaC tools",
      "Proficiency in scripting (Bash, Python)",
      "Experience with monitoring and alerting systems",
      "Understanding of network security and access management",
    ],
    niceToHave: [
      "Experience with multi-region infrastructure",
      "Knowledge of compliance frameworks (SOC2, ISO27001)",
      "Experience with serverless architectures",
      "Contributions to open source DevOps tools",
    ],
  },
  {
    title: "Community Manager — CoWork",
    department: "CoWork",
    location: "Nairobi, Kenya",
    type: "Full-time",
    about: "We're looking for a Community Manager to lead our CoWork space in Nairobi. You'll create a vibrant, productive environment where innovators, founders, and creators connect and collaborate.",
    responsibilities: [
      "Manage day-to-day operations of the CoWork space",
      "Plan and host community events and programming",
      "Onboard new members and manage memberships",
      "Foster a culture of collaboration and innovation",
      "Handle facilities management and vendor relationships",
      "Track and report on community engagement metrics",
    ],
    requirements: [
      "3+ years of experience in community management or coworking",
      "Excellent interpersonal and communication skills",
      "Event planning and execution experience",
      "Ability to create inclusive and welcoming environments",
      "Self-starter with strong organizational skills",
      "Passion for entrepreneurship and innovation in Africa",
    ],
    niceToHave: [
      "Experience in the Nairobi tech ecosystem",
      "Knowledge of hospitality or facilities management",
      "Experience with community platforms (Discord, Slack)",
      "Fluency in Swahili",
    ],
  },
]

export const positions: Position[] = rawPositions.map(p => ({
  ...p,
  slug: slugify(p.title),
}))

export function getPosition(slug: string): Position | undefined {
  return positions.find(p => p.slug === slug)
}
