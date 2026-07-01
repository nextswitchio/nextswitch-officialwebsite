export type ContentType = "article" | "press-release" | "research-report" | "leadership-essay" | "impact-story" | "event" | "featured-story"

export interface InsightContent {
  slug: string
  type: ContentType
  title: string
  date: string
  excerpt: string
  body: string
  author?: { name: string; role: string }
  topic?: string
  readTime?: string
  category?: string
  pages?: string
  location?: string
  eventType?: "Upcoming" | "Past"
  metric?: string
  metricLabel?: string
  publication?: string
  image?: string
}

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
}

const items: Omit<InsightContent, "slug">[] = [
  {
    type: "featured-story",
    title: "Next Switch Launches Innovation Lab to Support 10,000 Young African Innovators",
    date: "Apr 15, 2026",
    excerpt: "The new facility in Lagos will provide mentorship, technical resources, and funding for young innovators tackling Africa's most pressing challenges through technology and entrepreneurship.",
    body: "Next Switch has announced the launch of its flagship Innovation Lab in Lagos, Nigeria — a state-of-the-art facility designed to support 10,000 young African innovators over the next three years.\n\nThe Innovation Lab will provide mentorship from industry leaders, technical resources including prototyping equipment and cloud computing credits, and seed funding for promising ventures. The lab focuses on five key areas: agricultural technology, financial inclusion, education technology, healthcare innovation, and climate resilience.\n\n\"Africa's greatest resource is its young people,\" said Dr. Akinwale Oladipo, Founder & CEO of Next Switch. \"This lab is our commitment to ensuring they have the tools, mentorship, and capital needed to turn their ideas into solutions that transform communities.\"\n\nPartners include leading technology companies, academic institutions, and development organizations. The lab will operate on a cohort model, with each 6-month cycle supporting approximately 1,500 innovators.\n\nApplications for the first cohort open June 1, 2026.",
  },
  {
    type: "press-release",
    title: "Next Switch Ventures Expands to Three New African Markets",
    date: "Apr 10, 2026",
    category: "Company News",
    excerpt: "Strategic expansion into Ghana, Kenya, and Rwanda extends Next Switch's reach across the continent.",
    body: "Next Switch Ventures, the investment and venture-building arm of Next Switch, today announced its expansion into three new African markets: Ghana, Kenya, and Rwanda.\n\nThis expansion brings Next Switch's total presence to eight countries across the continent. Each new market will house a full-service team focused on identifying and nurturing local innovation opportunities.\n\n\"We've seen tremendous demand for our model of redemptive innovation across Africa,\" said Kojo Asante, Chief Strategy Officer. \"These new markets represent some of the continent's most dynamic innovation ecosystems, and we're excited to support local founders and organizations.\"\n\nThe expansion will create approximately 200 new jobs across the three markets, with positions ranging from investment analysts to program managers and community coordinators.",
  },
  {
    type: "press-release",
    title: "Next Switch Academy Partners with 10 Universities Across Africa",
    date: "Mar 28, 2026",
    category: "Partnerships",
    excerpt: "Strategic academic partnerships will expand access to technology education and create pathways for students into the digital economy.",
    body: "Next Switch Academy has signed partnership agreements with 10 universities across Africa to deliver joint technology education programs, research collaborations, and student exchange opportunities.\n\nThe partner institutions span Nigeria, Ghana, Kenya, South Africa, Rwanda, and Ethiopia. The collaboration will see Next Switch Academy curriculum integrated into existing computer science and engineering programs, as well as the creation of specialized certificate programs in emerging technologies.\n\n\"Education is the foundation of Africa's digital future,\" said Dr. Akinwale Oladipo. \"By partnering with leading universities, we're creating a pipeline of talent that is ready to solve Africa's most pressing challenges.\"\n\nThe partnership includes faculty development programs, joint research initiatives, and internship placement for students at Next Switch portfolio companies.",
  },
  {
    type: "press-release",
    title: "Next Switch Labs Launches AI Research Division",
    date: "Mar 15, 2026",
    category: "Product Launches",
    excerpt: "New division will focus on developing AI solutions tailored to African languages, contexts, and challenges.",
    body: "Next Switch Labs today announced the launch of its AI Research Division, dedicated to developing artificial intelligence solutions that address Africa's unique linguistic, cultural, and economic contexts.\n\nLed by Dr. Amina Diallo as Chief AI Officer, the division will focus on four key areas: natural language processing for African languages, computer vision for agricultural and healthcare applications, predictive analytics for financial inclusion, and ethical AI frameworks.\n\n\"Africa cannot afford to be a passive consumer of AI technology developed elsewhere,\" said Dr. Diallo. \"We must build AI that understands our languages, respects our values, and solves our problems.\"\n\nThe division has already begun work on a Swahili-language large language model, in partnership with universities across East Africa.",
  },
  {
    type: "press-release",
    title: "Next Switch CoWork Opens in Nairobi",
    date: "Mar 5, 2026",
    category: "Company News",
    excerpt: "New collaborative workspace in Nairobi's innovation district strengthens Next Switch's pan-African presence.",
    body: "Next Switch CoWork has opened its newest location in Nairobi, Kenya's thriving innovation district. The space spans 15,000 square feet and features private offices, collaborative workspaces, event venues, and a prototyping lab.\n\n\"Nairobi is one of Africa's most dynamic innovation hubs,\" said the CoWork team. \"This space is designed to foster the collisions and collaborations that lead to breakthrough ideas.\"\n\nThe Nairobi location joins existing CoWork spaces in Lagos and Accra, with plans for additional locations across the continent.",
  },
  {
    type: "press-release",
    title: "Next Switch Wins African Innovation Award 2026",
    date: "Feb 20, 2026",
    category: "Awards",
    excerpt: "Next Switch recognized for outstanding contribution to technology innovation and talent development across Africa.",
    body: "Next Switch has been awarded the African Innovation Award 2026, recognizing the organization's outstanding contribution to technology innovation, talent development, and institution building across the continent.\n\nThe award, presented at the annual African Innovation Summit in Kigali, Rwanda, honors organizations that have demonstrated exceptional impact in advancing Africa's digital transformation.\n\n\"This award belongs to every innovator, every founder, every learner who has trusted us to be part of their journey,\" said Dr. Akinwale Oladipo. \"It's a recognition that the work of building Africa's digital future is bearing fruit.\"",
  },
  {
    type: "press-release",
    title: "GUESTLY Platform Reaches 500,000 Users",
    date: "Feb 10, 2026",
    category: "Product Launches",
    excerpt: "Next Switch-backed event discovery platform achieves major milestone, demonstrating demand for African hospitality and experiences.",
    body: "GUESTLY, the event discovery, booking, and experience platform built by Next Switch Labs, has reached 500,000 registered users across 15 African countries.\n\nThe platform connects event organizers with attendees, offering ticketing, promotion, and analytics tools. Since its launch, GUESTLY has facilitated over 2 million ticket transactions and generated significant revenue for event organizers.\n\n\"GUESTLY proves that there is tremendous demand for platforms built by Africans, for Africans,\" said the GUESTLY team. \"We're just getting started.\"",
  },
  {
    type: "article",
    title: "Why Redemptive Innovation Matters for Africa's Future",
    date: "Apr 8, 2026",
    topic: "Technology",
    readTime: "8 min read",
    excerpt: "Moving beyond disruption toward technology that heals, restores, and builds lasting value.",
    body: "The concept of innovation has been dominated by a Silicon Valley mindset: move fast and break things, disrupt industries, capture value. But for Africa, this model falls short.\n\nRedemptive innovation is a different framework. It asks not just 'does it work?' but 'does it heal? Does it restore? Does it build lasting value for communities?'\n\nAt Next Switch, we believe technology should serve human flourishing. This means building solutions that:\n\n1. Create economic opportunity, not just extract value\n2. Strengthen institutions, not bypass them\n3. Preserve cultural identity while enabling progress\n4. Reach the marginalized, not just the connected\n\nAfrica has the opportunity to build an innovation ecosystem rooted in purpose — one that measures success not just in valuation, but in lives transformed.\n\nRedemptive innovation is not a slogan. It is a framework for building the future we want to see.",
  },
  {
    type: "article",
    title: "Building AI Systems That Understand African Contexts",
    date: "Mar 25, 2026",
    topic: "AI",
    readTime: "12 min read",
    excerpt: "Why context-aware AI is critical for Africa's digital transformation and how we're building it.",
    body: "Artificial intelligence holds immense promise for Africa, but only if it is built to understand African contexts. Too often, AI systems developed elsewhere fail when deployed on the continent because they don't account for linguistic diversity, cultural norms, or infrastructure constraints.\n\nOur AI Research Division is taking a different approach. We're building systems that:\n\nUnderstand African Languages: Most AI language models support only a handful of African languages. We're working to change that, starting with Swahili, Hausa, Yoruba, and Amharic.\n\nRespect Cultural Context: AI systems must understand local customs, social norms, and community structures to be truly useful.\n\nWork Within Constraints: Many AI applications assume reliable internet and abundant computing power. We're building for offline-first and low-bandwidth environments.\n\nThe goal is not to replicate what Silicon Valley is doing. It's to build AI that Africa deserves.",
  },
  {
    type: "article",
    title: "The Role of Faith in Technology and Institution Building",
    date: "Mar 18, 2026",
    topic: "Leadership",
    readTime: "10 min read",
    excerpt: "How spiritual conviction and moral purpose shape our approach to building institutions that serve.",
    body: "Technology is often presented as a purely technical endeavor, driven by algorithms and data. But the most transformative innovations are animated by conviction — a belief in what is possible, and a commitment to what is right.\n\nAt Next Switch, our work is shaped by a conviction that every person is endowed with dignity and creative capacity. Technology, at its best, is a tool for unleashing that capacity in service of others.\n\nThis belief shapes everything we do:\n\n- It's why we prioritize reach over exclusivity\n- It's why we measure success by lives changed, not just revenue\n- It's why we build institutions designed to outlast us\n\nFaith without works is dead. And works without faith lack soul. The intersection is where redemptive innovation happens.",
  },
  {
    type: "article",
    title: "Educating the Next Generation of African Technologists",
    date: "Mar 10, 2026",
    topic: "Education",
    readTime: "7 min read",
    excerpt: "How Next Switch Academy is redefining technology education for the African context.",
    body: "The skills gap in Africa's technology sector is well documented. Millions of young people are eager to participate in the digital economy, but traditional education systems have not kept pace with industry needs.\n\nNext Switch Academy was built to bridge this gap. Our programs combine technical training with leadership development, entrepreneurial thinking, and real-world project experience.\n\nWhat makes our approach different:\n\n1. Project-Based Learning: Students learn by building real products, not just completing exercises.\n2. Mentorship: Every student is paired with an industry mentor who provides guidance and accountability.\n3. Career Pathways: We work with employers to ensure graduates have clear pathways to meaningful work.\n4. Community: Learning happens in community, not in isolation.\n\nSince launching, the Academy has produced over 2,000 graduates, with 85% employed in technology roles within six months of graduation.",
  },
  {
    type: "article",
    title: "Digital Transformation in African Governments: A Playbook",
    date: "Feb 28, 2026",
    topic: "Digital Transformation",
    readTime: "15 min read",
    excerpt: "Lessons learned from modernizing public service delivery across African government agencies.",
    body: "Digital transformation in government is fundamentally different from digital transformation in the private sector. The stakes are higher, the constraints are tighter, and the users include every citizen.\n\nOver the past two years, our team has worked with multiple government agencies across Africa to design and implement digital service platforms. Here's what we've learned:\n\nStart With Users: Understand the citizens' experience before designing solutions. Map every touchpoint, every pain point, every moment of friction.\n\nBuild Trust: Government services require high levels of trust. Security, privacy, and reliability are not optional.\n\nNavigate Constraints: Regulatory requirements, budget cycles, and procurement rules are real. Work within them, not around them.\n\nInvest in Change Management: Technology is the easy part. Helping people adapt to new ways of working is where transformation succeeds or fails.\n\nMeasure What Matters: Track outcomes, not just outputs. Are citizens satisfied? Are services faster? Is access more equitable?\n\nThis playbook is still being written. But the early results are promising: 60% faster processing times, 90% citizen satisfaction, and measurable improvements in transparency and accountability.",
  },
  {
    type: "article",
    title: "How African Startups Can Scale Beyond Borders",
    date: "Feb 14, 2026",
    topic: "Entrepreneurship",
    readTime: "9 min read",
    excerpt: "Strategies for African startups looking to expand across the continent's diverse markets.",
    body: "Africa is not a single market. It is 54 countries with different languages, currencies, regulatory environments, and cultural norms. For startups looking to scale across the continent, this complexity is both a challenge and an opportunity.\n\nHere are strategies we've seen work:\n\n1. Build for Local First: Dominate your home market before expanding. Local credibility is your strongest asset.\n2. Partner Strategically: Find partners who understand local contexts. Don't try to go it alone.\n3. Adapt Your Product: What works in Lagos may not work in Nairobi. Invest in localization.\n4. Build a Pan-African Team: Hire talent from across the continent. Diverse perspectives lead to better decisions.\n5. Navigate Regulation Carefully: Work with local legal experts. Regulatory differences can make or break your expansion.\n\nThe startups that succeed across Africa are those that respect the continent's diversity while finding the common threads that unite it.",
  },
  {
    type: "research-report",
    title: "Digital Infrastructure in Africa 2026",
    date: "Apr 2026",
    topic: "Infrastructure",
    excerpt: "Comprehensive analysis of the state of digital infrastructure across African nations.",
    body: "This report provides a comprehensive analysis of digital infrastructure development across Africa, covering internet connectivity, data center capacity, fiber optic networks, and mobile infrastructure.\n\nKey findings include:\n\n- Internet penetration has reached 45% across the continent, up from 28% in 2022\n- Data center capacity is growing at 35% year-over-year\n- Mobile connectivity remains the primary access point for 85% of users\n- Significant disparities remain between urban and rural areas\n\nThe report identifies priority investments needed to ensure equitable access to digital infrastructure across the continent.",
    pages: "48 pages",
  },
  {
    type: "research-report",
    title: "Redemptive Innovation: A Framework for African Technology",
    date: "Mar 2026",
    topic: "Framework",
    excerpt: "A white paper presenting the redemptive innovation framework for technology development in Africa.",
    body: "This white paper presents the redemptive innovation framework — an approach to technology development that prioritizes human flourishing, institutional strength, and long-term value creation over disruption and extraction.\n\nThe framework is built on four pillars:\n\n1. Human Dignity: Technology should enhance, not diminish, human capacity\n2. Institutional Building: Strong institutions are prerequisites for sustainable development\n3. Contextual Relevance: Solutions must be rooted in local realities\n4. Intergenerational Thinking: Decisions today must account for the needs of future generations",
    pages: "32 pages",
  },
  {
    type: "research-report",
    title: "AI Readiness Across African Economies",
    date: "Feb 2026",
    topic: "AI",
    excerpt: "Assessment of AI readiness factors across major African economies.",
    body: "This research brief assesses AI readiness across 15 African economies, evaluating factors including digital infrastructure, talent availability, regulatory frameworks, research output, and private sector investment.\n\nCountries are classified into three tiers: AI Leaders, AI Adopters, and AI Emerging. The brief provides recommendations for how each tier can advance their AI readiness.",
    pages: "24 pages",
  },
  {
    type: "research-report",
    title: "The Future of Work in Africa: 2026-2030",
    date: "Jan 2026",
    topic: "Work",
    excerpt: "Market insights on how technology is reshaping employment, skills, and work patterns across Africa.",
    body: "This market insight report examines how technology, demographic shifts, and economic transformation are reshaping the world of work across Africa.\n\nKey trends identified:\n\n- Remote work is enabling access to global opportunities for African talent\n- AI and automation are creating new categories of work while transforming existing ones\n- The informal economy is being digitized, creating new pathways to formal employment\n- Skills-based hiring is replacing degree-based hiring in the technology sector\n\nThe report projects that 30 million new technology-related jobs will be created across Africa by 2030.",
    pages: "56 pages",
  },
  {
    type: "leadership-essay",
    title: "Why Redemptive Innovation is Africa's Most Important Economic Framework",
    date: "Apr 2026",
    author: { name: "Dr. Akinwale Oladipo", role: "Founder & CEO" },
    excerpt: "Technology without moral purpose is just machinery. Africa has the opportunity to build something different — an innovation ecosystem rooted in service.",
    body: "For decades, the dominant narrative about technology and innovation has been shaped by a single worldview: disrupt, scale, monetize. This worldview has produced remarkable advances, but it has also produced inequality, extraction, and a growing sense that technology serves the few at the expense of the many.\n\nAfrica has an opportunity to write a different story.\n\nRedemptive innovation is not a rejection of technology. It is a reorientation of technology toward its highest purpose: serving human flourishing. It asks different questions:\n\n- Does this innovation heal what is broken?\n- Does it restore what has been lost?\n- Does it build institutions that will serve future generations?\n- Does it create opportunities for those who have been excluded?\n\nThis framework is not theoretical. It is being tested every day in the work we do — from the AI systems we build to the talent we develop to the institutions we help create. And it is working.\n\nAfrica's moment is not just about catching up. It is about leading the world toward a more redemptive vision of innovation.",
  },
  {
    type: "leadership-essay",
    title: "Democratizing AI Access Across the Continent",
    date: "Mar 2026",
    author: { name: "Dr. Amina Diallo", role: "Chief AI Officer" },
    excerpt: "When we build AI that understands African languages, contexts, and values, we're not just creating technology — we're creating possibility.",
    body: "Artificial intelligence is often described as the most transformative technology of our time. But for most Africans, AI remains abstract — a technology developed elsewhere, for other people's problems.\n\nThis must change.\n\nDemocratizing AI access means ensuring that African developers, entrepreneurs, and citizens can not only use AI but also shape it. It means building AI that speaks African languages, understands African contexts, and serves African priorities.\n\nAt Next Switch Labs, we are committed to:\n\n- Open-sourcing our AI models and datasets\n- Building tools that work offline and on low-bandwidth connections\n- Training African AI researchers and engineers\n- Partnering with universities across the continent\n\nThe goal is not to replicate what Silicon Valley is doing. It's to build an AI ecosystem that reflects Africa's diversity, creativity, and values.",
  },
  {
    type: "leadership-essay",
    title: "Building Infrastructure That Enables Human Flourishing",
    date: "Feb 2026",
    author: { name: "Kojo Asante", role: "Chief Strategy Officer" },
    excerpt: "Infrastructure isn't just about roads and fiber. It's about creating the conditions for talent to emerge, ideas to scale, and lives to change.",
    body: "When we talk about infrastructure, we usually mean physical things: roads, bridges, power grids, fiber optic cables. These are essential, but they are not sufficient.\n\nThe infrastructure that enables human flourishing includes:\n\nInstitutional Infrastructure: Schools, hospitals, courts, and regulatory systems that function reliably and serve everyone equitably.\n\nTalent Infrastructure: Training programs, mentorship networks, and career pathways that help people develop and deploy their abilities.\n\nInnovation Infrastructure: Labs, studios, workshops, and collaborative spaces where ideas can be tested and refined.\n\nCapital Infrastructure: Patient, mission-aligned investment that supports long-term value creation.\n\nAt Next Switch, we are building all of these layers. Because technology alone cannot transform a society. It takes institutions, talent, and capital working in concert.\n\nThat is what it means to build infrastructure that enables human flourishing.",
  },
  {
    type: "impact-story",
    title: "Grace Osei: From Barista to Full-Stack Developer",
    date: "Apr 2026",
    author: { name: "Grace Osei", role: "Tech Fellow, Accra" },
    excerpt: "Through Next Switch Labs, I transitioned from a barista to a full-stack developer. Now I'm building solutions for local businesses in Ghana.",
    body: "Two years ago, Grace Osei was working as a barista in Accra, unsure how to break into the technology industry. Today, she is a full-stack developer building digital solutions for small businesses in Ghana.\n\n\"I had always been curious about technology, but I didn't see a path from where I was to where I wanted to be,\" Grace says. \"The Next Switch Labs fellowship changed everything.\"\n\nThe 6-month fellowship provided Grace with intensive training in web development, mentorship from experienced engineers, and the opportunity to work on real client projects. Upon completion, she was offered a position on the Labs engineering team.\n\nGrace is now building a platform that helps small businesses in Accra digitize their operations. \"I'm not just building technology,\" she says. \"I'm building tools that help other people build better futures.\"",
    metric: "140k+",
    metricLabel: "Lives Impacted",
  },
  {
    type: "impact-story",
    title: "Dr. James Kiprop: Building AI That Speaks Swahili",
    date: "Mar 2026",
    author: { name: "Dr. James Kiprop", role: "AI Researcher, Nairobi" },
    excerpt: "The AI Research Division gave me resources to develop a Swahili-language LLM that's now being adopted by universities across East Africa.",
    body: "Dr. James Kiprop, a computational linguist from Nairobi, had spent years researching how to build natural language processing systems for African languages. But without institutional support and computing resources, his research remained theoretical.\n\n\"Joining the AI Research Division at Next Switch Labs gave me the resources I needed to turn my research into reality,\" Dr. Kiprop says. \"The compute infrastructure alone would have been impossible for me to access otherwise.\"\n\nDr. Kiprop led the development of a Swahili-language large language model, trained on a corpus of over 10 billion tokens. The model is now being adopted by universities across East Africa for research and education.\n\n\"This is just the beginning,\" he says. \"We're already working on models for Hausa, Yoruba, and Amharic.\"",
    metric: "12",
    metricLabel: "Countries Reached",
  },
  {
    type: "impact-story",
    title: "Chioma Eze: From Academy Graduate to Y Combinator Founder",
    date: "Feb 2026",
    author: { name: "Chioma Eze", role: "Academy Graduate, Lagos" },
    excerpt: "The Academy didn't just teach me code — it taught me how to think like a founder. My startup is now in Y Combinator.",
    body: "Chioma Eze enrolled in Next Switch Academy with a background in accounting and a dream of building technology solutions. She left as a founder with a startup accepted into Y Combinator, one of the world's most prestigious startup accelerators.\n\n\"Before the Academy, I thought being a founder meant you had to have a technical degree from a top university,\" Chioma says. \"The Academy showed me that the most important thing is not your background — it's your willingness to learn and your commitment to solving real problems.\"\n\nChioma's startup, which connects small-scale farmers with urban consumers, was built during her final project at the Academy. It has since grown to serve 5,000 farmers across three states in Nigeria.\n\n\"The Academy gave me more than skills,\" she says. \"It gave me a community of builders who believe in me.\"",
    metric: "$8.2M",
    metricLabel: "Funding Raised",
  },
  {
    type: "event",
    title: "Next Switch Annual Summit 2026",
    date: "Jun 15-17, 2026",
    location: "Lagos, Nigeria",
    eventType: "Upcoming",
    excerpt: "Our flagship annual gathering bringing together innovators, leaders, and partners from across Africa.",
    body: "The Next Switch Annual Summit is our flagship event, bringing together innovators, entrepreneurs, policymakers, and partners from across Africa for three days of connection, learning, and collaboration.\n\nThe 2026 summit will feature:\n\n- Keynote addresses from global thought leaders\n- Workshops on AI, product development, and scaling\n- Networking sessions with investors and partners\n- Demo day featuring Next Switch portfolio companies\n- Awards ceremony recognizing innovation excellence\n\nRegistration is open to the public. Early bird tickets are available until May 15.",
  },
  {
    type: "event",
    title: "African AI Ethics Roundtable",
    date: "May 10, 2026",
    location: "Nairobi, Kenya",
    eventType: "Upcoming",
    excerpt: "A convening of researchers, policymakers, and industry leaders to shape ethical AI frameworks for Africa.",
    body: "The African AI Ethics Roundtable brings together leading researchers, policymakers, and industry leaders to develop ethical frameworks for artificial intelligence development and deployment across Africa.\n\nThe roundtable will address critical questions:\n\n- How do we ensure AI systems respect cultural diversity?\n- What regulatory frameworks are needed?\n- How do we prevent algorithmic bias?\n- What role should communities play in AI governance?\n\nOutcomes will inform a white paper on AI ethics for the African context.",
  },
  {
    type: "event",
    title: "Innovation Lab Groundbreaking Ceremony",
    date: "Apr 22, 2026",
    location: "Accra, Ghana",
    eventType: "Past",
    excerpt: "Celebrating the start of construction for our second Innovation Lab in Accra.",
    body: "We broke ground on our second Innovation Lab in Accra, Ghana, marking an important milestone in our commitment to supporting young innovators across the continent.\n\nThe Accra lab, scheduled to open in early 2027, will feature:\n\n- Co-working spaces for 500 innovators\n- Prototyping and fabrication facilities\n- AI and machine learning compute resources\n- Event and training spaces\n\nGovernment officials, community leaders, and partners joined us for the ceremony.",
  },
  {
    type: "event",
    title: "Digital Infrastructure Conference",
    date: "Mar 3-5, 2026",
    location: "Kigali, Rwanda",
    eventType: "Past",
    excerpt: "A conference exploring the future of digital infrastructure development across Africa.",
    body: "The Digital Infrastructure Conference brought together telecommunications companies, government agencies, and technology providers to discuss the future of digital infrastructure in Africa.\n\nKey topics included:\n\n- Expanding broadband access to rural communities\n- Data center development and edge computing\n- Internet governance and digital rights\n- Public-private partnership models for infrastructure investment",
  },
]

export const insightsContent: InsightContent[] = items.map(item => ({
  ...item,
  slug: slugify(item.title),
}))

export function getInsight(slug: string): InsightContent | undefined {
  return insightsContent.find(i => i.slug === slug)
}

export function getInsightsByType(type: ContentType): InsightContent[] {
  return insightsContent.filter(i => i.type === type)
}
