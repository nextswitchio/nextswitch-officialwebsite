export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  images: string[];
  category: 'web-development' | 'mobile-development' | 'custom-software' | 'innovation-labs';
  technologies: string[];
  challenge: string;
  solution: string;
  outcomes: string[];
  liveUrl?: string;
  caseStudyUrl?: string;
  client?: string;
  year: number;
}

export const projects: Project[] = [
  {
    id: '1',
    slug: '7-sevyn-styles',
    title: '7 Sevyn Styles',
    description: 'A fusion of modern and classic styles, offering a curated collection of clothing and accessories for every occasion.',
    fullDescription: '7 Sevyn Styles is a premium e-commerce platform that bridges the gap between contemporary fashion and timeless elegance. The platform offers a seamless shopping experience with advanced filtering, personalized recommendations, and secure payment processing.',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&h=800&fit=crop'
    ],
    category: 'web-development',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'PostgreSQL'],
    challenge: 'The client needed a modern e-commerce platform that could handle high traffic during sales events while providing a luxurious shopping experience that reflects their brand identity.',
    solution: 'We built a high-performance Next.js application with server-side rendering for optimal SEO, integrated Stripe for secure payments, and implemented a custom design system that captures the brand\'s elegant aesthetic.',
    outcomes: [
      '50% increase in online sales within first quarter',
      '99.9% uptime during peak shopping seasons',
      '40% improvement in page load times',
      '4.8/5 average customer satisfaction rating'
    ],
    liveUrl: 'https://7sevynstyles.com',
    client: '7 Sevyn Styles',
    year: 2024
  },
  {
    id: '2',
    slug: 'dgnrave',
    title: 'DgnRave',
    description: 'A cutting-edge design platform empowering creators with intuitive tools for stunning visual experiences.',
    fullDescription: 'DgnRave is a collaborative design platform that enables teams to create, share, and iterate on designs in real-time. With powerful vector editing tools and cloud-based collaboration features, it\'s revolutionizing how creative teams work together.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=800&fit=crop'
    ],
    category: 'web-development',
    technologies: ['React', 'WebGL', 'Node.js', 'WebSockets', 'MongoDB', 'Redis'],
    challenge: 'Creating a real-time collaborative design tool that could handle complex vector graphics while maintaining smooth performance across multiple concurrent users.',
    solution: 'We developed a custom rendering engine using WebGL for hardware-accelerated graphics, implemented operational transformation for conflict-free collaboration, and optimized data synchronization using WebSockets and Redis.',
    outcomes: [
      '10,000+ active users within 6 months',
      'Real-time collaboration with <50ms latency',
      '95% user retention rate',
      'Featured in top design publications'
    ],
    liveUrl: 'https://dgnrave.com',
    client: 'DgnRave Inc.',
    year: 2023
  },
  {
    id: '3',
    slug: 'techflow-mobile',
    title: 'TechFlow Mobile',
    description: 'Modern mobile app for seamless digital transformation and enterprise innovation on the go.',
    fullDescription: 'TechFlow Mobile brings enterprise-grade project management and collaboration tools to iOS and Android devices. The app enables teams to manage workflows, track progress, and communicate effectively from anywhere.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=800&fit=crop'
    ],
    category: 'mobile-development',
    technologies: ['React Native', 'TypeScript', 'GraphQL', 'Firebase', 'Redux'],
    challenge: 'Building a cross-platform mobile app that provides native performance while maintaining a single codebase and integrating with existing enterprise systems.',
    solution: 'We leveraged React Native with custom native modules for performance-critical features, implemented offline-first architecture with local data persistence, and created a seamless sync mechanism with the backend.',
    outcomes: [
      '100,000+ downloads in first year',
      '4.7/5 rating on App Store and Google Play',
      '60% reduction in development time vs native apps',
      'Offline functionality with automatic sync'
    ],
    client: 'TechFlow Solutions',
    year: 2024
  },
  {
    id: '4',
    slug: 'finserve-app',
    title: 'FinServe',
    description: 'Innovative fintech mobile platform revolutionizing financial services across Africa.',
    fullDescription: 'FinServe is a comprehensive mobile banking solution that provides accessible financial services to underserved communities. The app offers mobile money transfers, bill payments, savings accounts, and microloans with a focus on security and ease of use.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&h=800&fit=crop'
    ],
    category: 'mobile-development',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Blockchain', 'Biometric Auth'],
    challenge: 'Creating a secure, reliable mobile banking app that works in areas with limited internet connectivity and provides financial inclusion to millions of users.',
    solution: 'We built a Flutter-based app with robust offline capabilities, implemented end-to-end encryption, integrated biometric authentication, and designed a simple, intuitive interface for users with varying levels of digital literacy.',
    outcomes: [
      '2 million+ active users',
      '$500M+ in transactions processed',
      '99.99% transaction success rate',
      'Bank-grade security certification'
    ],
    client: 'FinServe Ltd.',
    year: 2023
  },
  {
    id: '5',
    slug: 'inventory-pro',
    title: 'Inventory Pro',
    description: 'Custom inventory management system with real-time tracking and predictive analytics.',
    fullDescription: 'Inventory Pro is an enterprise-grade inventory management system that helps businesses optimize their supply chain operations. With real-time tracking, predictive analytics, and automated reordering, it reduces costs and prevents stockouts.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop'
    ],
    category: 'custom-software',
    technologies: ['Python', 'Django', 'PostgreSQL', 'TensorFlow', 'Docker', 'Kubernetes'],
    challenge: 'The client needed a scalable inventory system that could handle millions of SKUs across multiple warehouses while providing accurate demand forecasting.',
    solution: 'We developed a microservices architecture with real-time data processing, implemented machine learning models for demand prediction, and created an intuitive dashboard for inventory managers.',
    outcomes: [
      '30% reduction in inventory holding costs',
      '95% forecast accuracy for demand prediction',
      'Processing 1M+ transactions daily',
      '50% reduction in stockout incidents'
    ],
    client: 'Global Retail Corp',
    year: 2024
  },
  {
    id: '6',
    slug: 'healthtrack-system',
    title: 'HealthTrack',
    description: 'Comprehensive healthcare management system for hospitals and clinics.',
    fullDescription: 'HealthTrack is a complete hospital management system that streamlines patient care, appointment scheduling, electronic health records, billing, and reporting. It improves operational efficiency while ensuring HIPAA compliance.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1200&h=800&fit=crop'
    ],
    category: 'custom-software',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'Angular', 'HL7 FHIR', 'AWS'],
    challenge: 'Building a secure, compliant healthcare system that integrates with existing medical devices and insurance systems while maintaining patient privacy.',
    solution: 'We created a modular system with HL7 FHIR integration for interoperability, implemented role-based access control, and ensured full HIPAA compliance with encrypted data storage and audit trails.',
    outcomes: [
      'Serving 50+ healthcare facilities',
      '100% HIPAA compliance',
      '40% reduction in administrative overhead',
      '99.95% system uptime'
    ],
    client: 'MediCare Network',
    year: 2023
  },
  {
    id: '7',
    slug: 'ai-vision-lab',
    title: 'AI Vision Lab',
    description: 'Cutting-edge computer vision platform for automated quality control in manufacturing.',
    fullDescription: 'AI Vision Lab uses advanced computer vision and deep learning to automate quality inspection in manufacturing processes. The system detects defects with higher accuracy than human inspectors while providing real-time analytics.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&h=800&fit=crop'
    ],
    category: 'innovation-labs',
    technologies: ['Python', 'PyTorch', 'OpenCV', 'FastAPI', 'Edge Computing', 'NVIDIA Jetson'],
    challenge: 'Developing a real-time defect detection system that could run on edge devices in factory environments with 99.9% accuracy.',
    solution: 'We trained custom deep learning models using transfer learning, optimized them for edge deployment, and created a feedback loop for continuous model improvement based on production data.',
    outcomes: [
      '99.9% defect detection accuracy',
      '70% reduction in quality control costs',
      'Real-time processing at 60 FPS',
      'Deployed across 20+ production lines'
    ],
    client: 'Manufacturing Innovations Inc.',
    year: 2024
  },
  {
    id: '8',
    slug: 'smart-energy-grid',
    title: 'Smart Energy Grid',
    description: 'IoT-powered energy management system for smart cities and sustainable infrastructure.',
    fullDescription: 'Smart Energy Grid is an intelligent energy management platform that optimizes power distribution in smart cities. Using IoT sensors and predictive analytics, it reduces energy waste and integrates renewable energy sources.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1200&h=800&fit=crop'
    ],
    category: 'innovation-labs',
    technologies: ['IoT', 'MQTT', 'Time Series DB', 'Machine Learning', 'React', 'Node.js'],
    challenge: 'Creating a scalable IoT platform that could process millions of sensor readings per second and make real-time decisions for energy distribution.',
    solution: 'We built a distributed system with edge computing for local decision-making, implemented time-series databases for efficient data storage, and developed ML models for demand forecasting and load balancing.',
    outcomes: [
      '25% reduction in energy waste',
      'Managing 100,000+ IoT devices',
      'Processing 10M+ data points per second',
      '30% increase in renewable energy integration'
    ],
    client: 'Smart City Initiative',
    year: 2023
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') {
    return projects;
  }
  return projects.filter(project => project.category === category);
};

export const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'web-development', label: 'Web Development' },
  { id: 'mobile-development', label: 'Mobile Development' },
  { id: 'custom-software', label: 'Custom Software' },
  { id: 'innovation-labs', label: 'Innovation Labs' }
];
