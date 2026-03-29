export const siteData = {
  meta: {
    name: "Indrajith C",
    title: "The Technical Lead",
    tagline: "Engineering Performance. Scaling Architecture.",
    company: "Valoriz Digital",
    github: "https://github.com/indrajithc",
    linkedin: "https://linkedin.com/in/indrajithc",
    year: "2025",
  },
  stats: [
    { value: "12+", label: "Years Exp" },
    { value: "50M+", label: "Users Reached" },
    { value: "0.01%", label: "Error Rate" },
    { value: "A++", label: "Security Audit" },
  ],
  competencies: [
    {
      span: 8,
      icon: "cloud_done",
      title: "Cloud Infrastructure",
      description:
        "Orchestrating resilient multi-cloud environments using Kubernetes and Terraform for enterprise-grade scalability.",
      variant: "default" as const,
    },
    {
      span: 4,
      icon: "bolt",
      title: "Performance",
      description: "Sub-second response times at global scale.",
      variant: "primary" as const,
    },
    {
      span: 4,
      icon: "psychology",
      title: "Tech Strategy",
      description: "Translating business goals into robust technical roadmaps.",
      variant: "high" as const,
    },
  ],
  skills: {
    frontend: {
      title: "Frontend Engineering",
      category: "Core Interface",
      description:
        "Building fluid, accessible, and high-fidelity user experiences with a focus on component modularity and reactive state management.",
      tags: ["Next.js", "React", "Streak JS", "Tailwind CSS", "TypeScript"],
    },
    backend: {
      title: "Backend & DB",
      category: "Infrastructural Root",
      logic: ["Node.js", "Spring Boot"],
      storage: ["MongoDB", "PostgreSQL"],
    },
    devops: {
      title: "Cloud & DevOps",
      category: "Continuum",
      description:
        "Containerization and CI/CD orchestration focused on high-availability and zero-downtime deployments.",
      tools: [
        { name: "AZURE", icon: "cloud" },
        { name: "DOCKER", icon: "package_2" },
        { name: "JENKINS", icon: "settings_suggest" },
        { name: "BUN", icon: "speed" },
      ],
    },
    performance: {
      title: "Performance",
      category: "Optimization",
      items: ["Lighthouse Audits", "Web Workers", "Script Optimization"],
      target: "Target: Sub-100ms LCP",
    },
  },
  experience: [
    {
      role: "Technical Lead",
      company: "Valoriz Digital",
      period: "2022 — PRESENT",
      badge: "Current Role",
      icon: "architecture",
      borderColor: "primary",
      focus: [
        {
          icon: "bolt",
          title: "Azure Automation Architecture",
          description: "Standardized cloud-native workflows across vertical units.",
        },
        {
          icon: "groups",
          description:
            "Mentoring high-performance squads and defining engineering excellence standards.",
        },
      ],
      impact: [
        { label: "System Reliability", value: "99.9%", width: "99.9%" },
        { label: "Cloud Efficiency", value: "40% ↑", width: "75%" },
      ],
    },
    {
      role: "Senior Software Engineer",
      company: "Valoriz Digital",
      period: "2020 — 2022",
      icon: "developer_mode",
      iconColor: "primary",
      achievement: {
        label: "Key Achievement",
        title: "Streak JS R&D",
        description:
          "Pioneered high-performance internal framework development and modular architecture.",
      },
    },
    {
      role: "Software Engineer",
      company: "Valoriz Digital",
      period: "2018 — 2020",
      icon: "code",
      iconColor: "secondary",
      achievement: {
        label: "Key Achievement",
        title: "Lighthouse 98-99",
        description:
          "Sustained near-perfect performance scores across large-scale enterprise portals through aggressive optimization.",
      },
    },
  ],
  pulse: {
    contributions: {
      total: "2,481",
      period: "last year",
      topLanguage: { name: "TypeScript", percentage: 94 },
      avgFrequency: { value: "6.8", label: "Commits per day", trend: "+12% from last month" },
    },
    repos: [
      {
        icon: "terminal",
        name: "Streak-JS",
        description:
          "High-performance internal UI framework built for scalable, reactive component architectures.",
        language: "TypeScript",
        percentage: 94,
        secondaryPercentage: 6,
        secondaryColor: "bg-secondary",
        stars: "1.2k",
        forks: "204",
      },
      {
        icon: "data_object",
        name: "Aether-UI-System",
        description:
          "A deterministic, accessibility-first component library for mission-critical dashboard interfaces.",
        language: "TypeScript",
        percentage: 94,
        secondaryPercentage: 6,
        secondaryColor: "bg-secondary",
        stars: "840",
        forks: "112",
      },
      {
        icon: "settings_input_component",
        name: "WASM-Stream-Relay",
        description:
          "Experimental WebAssembly module for real-time binary stream processing in the browser.",
        language: "C++",
        percentage: 65,
        secondaryPercentage: 35,
        secondaryColor: "bg-zinc-500",
        stars: "45",
        forks: "8",
      },
    ],
    activityLog: [
      {
        icon: "commit",
        title: "Refactored memory allocation in core scheduler",
        hash: "7f3b8a2",
        repo: "streak-js",
        time: "4 HOURS AGO",
        details: [
          "Optimised block size for edge nodes",
          "Reduced heap fragmentation by 14%",
          "Updated safety wrappers for pointer arithmetic",
        ],
      },
      {
        icon: "merge",
        title: "Merged PR #442: Feature/Telemetry-v2",
        hash: "d2e991c",
        repo: "aether-ui",
        time: "1 DAY AGO",
        details: [],
      },
      {
        icon: "new_releases",
        title: "Published Release v1.0.4-beta",
        hash: "stable-lts",
        repo: "wasm-stream",
        time: "3 DAYS AGO",
        details: [],
      },
    ],
  },
};

export const homeData = {
  hero: {
    name: "Indrajith C",
    role: "Principal Frontend Engineer",
    lighthouseScore: 99,
    chips: [
      { icon: "bolt", label: "High Performance" },
      { icon: "architecture", label: "System Design" },
    ],
  },
  engineering: {
    streakJs: {
      tags: ["Streak JS", "Next.js", "R&D"],
    },
  },
  trajectory: [
    {
      period: "NOV 2025 — PRESENT",
      role: "Technical Lead",
      company: "Valoriz Digital",
      description:
        "Directing R&D on Streak JS and maintaining 98-99 Lighthouse scores across flagship products. Implementing Azure-based automated build systems and integrating OpenAI capabilities into frontend architectures.",
      tags: ["Streak JS", "OpenAI Integration", "Lighthouse 99"],
      hasImage: true,
    },
    {
      period: "OCT 2024 — NOV 2025",
      role: "Technical Lead",
      company: "Valoriz Digital",
      description:
        "Spearheading performance optimization focusing on LCP and CLS metrics. Developed Docker and Jenkins-based pipelines to automate critical CSS generation and asset delivery.",
    },
    {
      period: "DEC 2023 — SEP 2024",
      role: "Technical Lead",
      company: "Valoriz Digital",
      description:
        "Architected Next.js headless solutions and implemented secure Azure AD B2C authentication. Managed complex data migration strategies for global client portals.",
    },
    {
      period: "APR 2021 — DEC 2023",
      role: "Senior Software Engineer",
      company: "Valoriz Digital",
      description:
        "Engineered robust POS systems and led major performance/SEO transformations for B2B e-commerce platforms during large-scale migrations.",
    },
    {
      period: "NOV 2019 — MAR 2021",
      role: "Software Engineer",
      company: "Valoriz Digital",
      description:
        "Developed AI-based product recognition UIs using React and Redux, focusing on intuitive interaction patterns and state management.",
    },
  ],
  certifications: [
    {
      icon: "verified",
      title: "Meta Front-End Developer Professional",
      type: "Professional Certificate",
    },
    {
      icon: "code",
      title: "Meta Advanced React",
      type: "Advanced Certification",
    },
  ],
  education: [
    {
      level: "Post-Graduation",
      degree: "MCA",
      institution: "Rajiv Gandhi Institute of Technology",
      period: "2017 — 2019",
    },
    {
      level: "Under-Graduation",
      degree: "BSc CS",
      institution: "University Institute of Technology",
      period: "2013 — 2016",
    },
  ],
  contact: {
    email: "indranspeaks@gmail.com",
    phone: "+91 8281 05 6261",
    location: "Thiruvananthapuram, Kerala, India",
    linkedin: "https://www.linkedin.com/in/indrajithc/",
    github: "https://github.com/indrajithc",
    portfolioUrl: "https://indrajithc.github.io/",
  },
};

export const siteTranslations = {
  "nav.home": "HOME",
  "nav.arsenal": "ARSENAL",
  "nav.experience": "EXPERIENCE",
  "nav.pulse": "PULSE",
  "nav.contact": "CONTACT",
  "nav.brand": "ARCHITECT",
  "hero.cta.primary": "Explore My Impact",
  "hero.cta.secondary": "View Stack",
  "footer.copyright": "© 2025 INDRAJITH C. ENGINEERED FOR PERFORMANCE.",
  "footer.github": "GITHUB",
  "footer.linkedin": "LINKEDIN",
};
