import {
  BrainCircuit,
  CloudCog,
  Code2,
  Database,
  Globe2,
  GraduationCap,
  Layers3,
  Network,
  Rocket,
  ShieldCheck,
  Sparkles,
  TerminalSquare
} from "lucide-react";

export const siteConfig = {
  name: "Shashwat",
  fullName: "Shashwat",
  initials: "S",
  title: "Student Engineer • Frontend Developer • Cloud & AI/ML Learner",
  location: "India",
  timezone: "GMT+5:30",
  availability: "Open to internships",
  email: "your.email@example.com",
  phone: "+91 00000 00000",
  resumeUrl: "/resume.pdf",
  profileImage: "/profile-placeholder.svg",
  url: "https://your-domain.vercel.app",
  keywords: [
    "Frontend Developer",
    "Cloud Engineer Intern",
    "Full Stack Developer",
    "AI ML Student",
    "Next.js Portfolio",
    "India Developer"
  ],
  social: {
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-username",
    x: "https://x.com/your-username",
    leetcode: "https://leetcode.com/your-username",
    instagram: "https://instagram.com/your-username"
  }
};

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

export const hero = {
  eyebrow: "Portfolio / 2026",
  headline: "Building polished interfaces, intelligent systems, and cloud-ready products.",
  description:
    "I am a student engineer focused on frontend development, full-stack foundations, cloud engineering, and practical AI/ML systems. I turn raw ideas into clean, responsive, demo-ready web experiences.",
  primaryCta: "View Projects",
  secondaryCta: "Contact Me",
  scatteredWords: ["Next.js", "Cloud", "AI/ML", "TypeScript", "DevOps", "Networking", "Clean UI", "Systems"],
  stats: [
    { value: "05+", label: "Major projects", description: "Portfolio-ready builds across AI, cloud, frontend, and product design." },
    { value: "03", label: "Target roles", description: "Cloud Engineer, Software Developer, Full-Stack / AI-ML Intern." }
  ]
};

export const about = {
  label: "About",
  title: "A student developer with a product-builder mindset.",
  paragraphs: [
    "I enjoy designing interfaces that look premium but still feel simple to use. My current focus is strengthening frontend engineering, cloud fundamentals, networking, and AI-powered product thinking.",
    "I like working on ideas that can be shown as real products: dashboards, copilots, recommendation platforms, productivity tools, and systems that solve visible problems. I am currently preparing for internship opportunities in top and mid-level CS/IT companies across India.",
    "This portfolio is intentionally built as an editable system. Replace the placeholder details with your real resume, projects, achievements, and links whenever you are ready."
  ],
  focusCards: [
    { title: "Frontend Craft", description: "Responsive pages, smooth motion, accessible components, and sharp visual hierarchy.", icon: Layers3 },
    { title: "Cloud Direction", description: "Learning deployment, networking, Linux, CI/CD, Docker, and scalable application basics.", icon: CloudCog },
    { title: "AI Product Thinking", description: "Designing practical AI features such as copilots, recommendations, RAG, and risk prediction.", icon: BrainCircuit }
  ]
};

export const skills = [
  {
    category: "Frontend Engineering",
    icon: Code2,
    items: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "Framer Motion", "shadcn/ui", "Responsive UI"]
  },
  {
    category: "Backend & Data",
    icon: Database,
    items: ["Node.js", "Express", "FastAPI", "REST APIs", "MongoDB", "PostgreSQL", "Supabase", "Authentication"]
  },
  {
    category: "Cloud & DevOps",
    icon: CloudCog,
    items: ["Vercel", "Render", "Docker", "GitHub Actions", "Linux Basics", "CI/CD", "Environment Variables", "Monitoring Basics"]
  },
  {
    category: "Networking",
    icon: Network,
    items: ["TCP/IP", "DNS", "HTTP/HTTPS", "MPLS Basics", "SD-WAN Basics", "Routing", "Latency", "Packet Loss"]
  },
  {
    category: "AI / ML Foundations",
    icon: BrainCircuit,
    items: ["Python", "Pandas", "NumPy", "Scikit-learn", "RAG Concepts", "LLM Basics", "Anomaly Detection", "Prompting"]
  },
  {
    category: "Tools & Workflow",
    icon: TerminalSquare,
    items: ["Git", "GitHub", "VS Code", "Figma", "Postman", "npm", "Vite", "Documentation"]
  }
];

export const projects = [
  {
    name: "SENTINEL — Air-Gapped Predictive NOC Copilot",
    type: "AI + Networking",
    year: "2026",
    status: "Hackathon Build",
    description:
      "Offline AI copilot concept for secure MPLS/SD-WAN operations that predicts network risk, explains likely causes, and guides NOC teams before user-visible impact.",
    impact: "Built around regulated environments where cloud-connected AI is not allowed.",
    stack: ["Python", "FastAPI", "ML", "Offline RAG", "Networking", "Dashboard UI"],
    links: { live: "#", github: "#" },
    highlights: ["Predictive risk signals", "Natural-language explanations", "Air-gapped architecture", "Operator-first dashboard"]
  },
  {
    name: "AEGIS — Offline AI Project Intelligence Copilot",
    type: "AI Systems",
    year: "2026",
    status: "Ideathon Concept",
    description:
      "An AI-native project intelligence system that connects scattered team data, detects blockers, predicts project failure risk, and recommends preventive action.",
    impact: "Designed for teams using chats, docs, meetings, trackers, and code platforms without connected intelligence.",
    stack: ["Next.js", "RAG", "Agents", "Dashboards", "UX Research", "System Design"],
    links: { live: "#", github: "#" },
    highlights: ["Risk prediction", "Team workload signals", "Decision support", "Offline-first thinking"]
  },
  {
    name: "AniMatch — Anime & Manga Discovery Platform",
    type: "Full-Stack Product",
    year: "2026",
    status: "Product Prototype",
    description:
      "A modern anime/manga discovery platform with recommendation flows, watchlist, Creator Studio, community rooms, AnimeStore concept, admin controls, and AI chatbot planning.",
    impact: "Focuses on personalized discovery, community engagement, and licensed-streaming-ready product architecture.",
    stack: ["React", "Node.js", "MongoDB", "Authentication", "AI Bot", "PWA"],
    links: { live: "#", github: "#" },
    highlights: ["Personalized recommendations", "Admin dashboard", "Creator Studio", "Hindi/English/Hinglish bot roadmap"]
  },
  {
    name: "VAYU — Climate Health & Safety Platform",
    type: "Frontend + AI Assistant",
    year: "2026",
    status: "Prototype",
    description:
      "A climate-health web platform with AQI, weather safety, preventive guidance, remedy monitoring, safety plans, location search, and conversational assistant improvements.",
    impact: "Designed to make weather and air-quality risks easier to understand for everyday users.",
    stack: ["React", "Weather APIs", "AQI", "UX Design", "Chatbot", "Deployment Planning"],
    links: { live: "#", github: "#" },
    highlights: ["AQI-aware safety plan", "Weather visuals", "Advanced chatbot design", "User-focused dashboard"]
  }
];

export const experience = [
  {
    role: "Student Developer & Project Builder",
    company: "Independent / Academic Projects",
    period: "2025 — Present",
    location: "India",
    description:
      "Building portfolio-ready projects across frontend, full-stack, AI systems, cloud deployment, and networking-focused hackathon ideas.",
    bullets: [
      "Designed and iterated multiple product prototypes with modern UI/UX, responsive layouts, and clear user flows.",
      "Created technical roadmaps, architecture plans, and deployment strategies for beginner-to-production transitions.",
      "Practiced building demo-ready dashboards, AI assistant workflows, and product documentation for competitions."
    ],
    stack: ["Next.js", "React", "Tailwind", "Python", "FastAPI", "Cloud Basics", "Git"]
  },
  {
    role: "Hackathon / Ideathon Team Member",
    company: "Delta X / Team Projects",
    period: "2026",
    location: "India",
    description:
      "Worked on AI-native problem statements involving secure network operations, offline copilots, and intelligent work systems.",
    bullets: [
      "Researched problem statements and translated them into product architecture, feature lists, and demo plans.",
      "Focused on UI clarity, beginner-friendly engineering plans, and technical storytelling for judges.",
      "Explored cloud, networking, AI/ML, offline inference, and full-stack deployment fundamentals."
    ],
    stack: ["System Design", "AI/ML Basics", "Networking", "Frontend", "Presentation"]
  }
];

export const education = [
  {
    degree: "Computer Science / IT Student",
    institution: "Your College / University Name",
    period: "2024 — 2028",
    location: "India",
    details: "Replace this with your exact degree, branch, CGPA/percentage, and relevant coursework.",
    courses: ["Data Structures", "Computer Networks", "Operating Systems", "DBMS", "Cloud Computing", "Web Development"]
  }
];

export const certifications = [
  {
    name: "Cloud Computing Fundamentals",
    issuer: "Editable Provider",
    date: "2026",
    link: "#",
    description: "Add your real certificate link here after completion."
  },
  {
    name: "Frontend Development / React",
    issuer: "Editable Provider",
    date: "2026",
    link: "#",
    description: "Use this slot for React, Next.js, JavaScript, or UI certification."
  },
  {
    name: "AI/ML or Python Basics",
    issuer: "Editable Provider",
    date: "2026",
    link: "#",
    description: "Use this slot for Python, machine learning, or data science certification."
  }
];

export const achievements = [
  {
    title: "Built multiple competition-ready project concepts",
    description: "Worked on AI Systems Architect, air-gapped predictive copilot, and production roadmap projects.",
    icon: Rocket
  },
  {
    title: "Strong beginner-to-builder learning discipline",
    description: "Focused on structured learning paths across Java, DSA, networking, cloud, DevOps, and full-stack development.",
    icon: GraduationCap
  },
  {
    title: "Product thinking beyond code",
    description: "Planned features, security, monetization, deployment, user experience, and judge-facing explanations.",
    icon: Sparkles
  },
  {
    title: "Security-aware engineering direction",
    description: "Explored authentication, admin control, offline AI constraints, secret management, and production readiness.",
    icon: ShieldCheck
  }
];

export const contact = {
  title: "Let’s build something useful.",
  description:
    "I am open to internships, learning opportunities, team projects, and frontend/full-stack/cloud/AI-ML roles. Send a message and I will get back soon.",
  preferredRoles: ["Cloud Engineer Intern", "Frontend Developer Intern", "Full-Stack Developer Intern", "AI/ML Project Intern"],
  target: "Top and mid-level CS/IT companies in India"
};

export const footer = {
  quote: "Simple interface. Strong system. Clear impact.",
  links: [
    { label: "GitHub", href: siteConfig.social.github },
    { label: "LinkedIn", href: siteConfig.social.linkedin },
    { label: "Email", href: `mailto:${siteConfig.email}` }
  ]
};

export const designSystem = {
  palette: ["Black", "Grey", "White", "Yellow", "Red", "Dark Blue", "Orange"],
  motion: ["Animated background", "Premium cursor", "Scattering hero words", "Scroll reveal", "Hover lift cards"],
  icons: [Globe2, Code2, BrainCircuit, CloudCog]
};
