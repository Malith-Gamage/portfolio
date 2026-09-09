import skillForgeImg from '../assets/projects/skillforge.jpg';
import byteStoreImg from '../assets/projects/byte-store.jpg';
import project3Img from '../assets/projects/project-3.png';

export const projects = [
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
    id: 'devops-metrics-platform',
    title: 'CloudPulse - DevOps Monitor',
    description: 'Cloud infrastructure observability dashboard featuring live server health indicators, latency telemetry, and instant alert notification triggers.',
    category: 'Full Stack',
    featured: true,
    image: project3Img,
    tags: ['React', 'TypeScript', 'Node.js', 'Docker', 'WebSockets', 'Tailwind'],
    liveUrl: 'https://example.com/cloudpulse',
    githubUrl: 'https://github.com/alexdev/cloudpulse',
    highlights: [
      'Real-time WebSocket telemetry data streams',
      'Interactive multi-region server latency map',
      'Automated Slack & Webhook incident reporting'
    ]
  }
];

export const projectCategories = ['All', 'Full Stack', 'Frontend', 'Mobile/Cloud'];
