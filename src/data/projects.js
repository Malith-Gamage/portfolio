import bestRouteImg from '../assets/projects/bestroute.jpg';
import skillForgeImg from '../assets/projects/skillforge.jpg';
import byteStoreImg from '../assets/projects/byte-store.jpg';
import hostelSystemImg from '../assets/projects/hostel-system.jpg';

export const projects = [
  {
    id: 'bestroute-journey-planner',
    title: 'BestRoute – Intelligent Multimodal Journey Planner',
    description: 'An intelligent transportation platform designed to simplify public transportation by combining buses, trains, taxis, three-wheelers, and walking into optimized end-to-end journeys. Helps passengers find suitable routes based on travel time, cost, convenience, and personal preferences.',
    category: 'Mobile/Cloud',
    featured: true,
    image: bestRouteImg,
    tags: ['React Native', 'React', 'Node.js', 'Express.js', 'MongoDB', 'Leaflet', 'JWT', 'REST APIs'],
    liveUrl: 'https://github.com/codesplash26-hackathon/codecrushers',
    githubUrl: 'https://github.com/codesplash26-hackathon/codecrushers',
    highlights: [
      'Personalized Route Optimization: Ranks journeys by travel time, cost, walking, transfers & reliability',
      'Connection-Risk Detection: Evaluates transfer times to prevent missed connections',
      'Dynamic Re-routing: Recommends smart alternatives for delays & transit disruptions',
      'Unified Journey Comparison: Consolidated view of duration, total cost, waiting time & transfers'
    ]
  },
  {
    id: 'skillforge-learning-platform',
    title: 'SkillForge – AI-Powered Gamified Learning Platform',
    description: 'An end-to-end educational platform designed to turn self-directed learning goals into structured, AI-generated roadmaps reinforced with micro-tasks, an in-app coin economy, and real-world mentorship.',
    category: 'Full Stack',
    featured: true,
    image: skillForgeImg,
    tags: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS', 'MySQL 8.0', 'OpenAI API', 'JWT (jose)', 'Zod'],
    liveUrl: 'https://skill-forge-three-tawny.vercel.app',
    githubUrl: 'https://github.com/Thidushan/SkillForge',
    highlights: [
      'Dynamic, checkpointed learning roadmaps and daily tasks generated via OpenAI GPT-4o-mini',
      'Adaptive daily task rescheduling with context-aware AI motivational prompts',
      'Full in-app economy featuring an immutable coin transaction ledger, badges, and expert session booking'
    ]
  },
  {
    id: 'byte-computer-store',
    title: 'Byte Computer Store – Modern Tech & Laptop E-Commerce',
    description: 'A clean, high-performance storefront interface for browsing laptop deals and tech hardware, engineered completely with semantic HTML, custom CSS architecture, and vanilla JavaScript DOM manipulation.',
    category: 'Frontend',
    featured: true,
    image: byteStoreImg,
    tags: ['HTML5', 'CSS3', 'JavaScript (Vanilla)', 'Responsive UI', 'Swiper.js'],
    liveUrl: 'https://malith-gamage.github.io/Byte/#',
    githubUrl: 'https://github.com/Malith-Gamage/Byte',
    highlights: [
      'Fully responsive product catalog built with CSS Grid, Flexbox, and auto-aligning card actions',
      'Animated circular mobile hamburger toggle and slide-out navigation menu',
      'Interactive hardware specifications modal popup with zero page reloads',
      'Integrated Swiper.js review carousel and accessible newsletter subscription UI'
    ]
  },
  {
    id: 'hostel-management-system',
    title: 'Hostel Management System',
    description: 'A secure, serverless hostel management system designed to eliminate manual administrative paperwork, automate room allocation, and streamline student services in real time.',
    category: 'Full Stack',
    featured: true,
    image: hostelSystemImg,
    tags: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'AWS DynamoDB', 'Framer Motion'],
    liveUrl: 'https://susl-hostel.spacesolutionsinternational.com',
    githubUrl: 'https://github.com/KalanaYapa/Hostel-System',
    highlights: [
      'Full-stack student & admin dashboards with automated fee tracking and maintenance workflows',
      'Serverless AWS DynamoDB architecture with single-table design and on-demand scaling',
      'End-to-end security using email OTP verification, JWT authentication, and strict rate limiting'
    ]
  }
];

export const projectCategories = ['All', 'Full Stack', 'Frontend', 'Mobile/Cloud'];
