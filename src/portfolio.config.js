/**
 * portfolio.config.js
 * ─────────────────────────────────────────────────────────────────────────
 * Single source of truth for ALL portfolio content.
 * To add/edit a project, skill, experience, or achievement entry — change ONLY this file.
 * UI components read from this object and render dynamically.
 * ─────────────────────────────────────────────────────────────────────────
 */

const portfolioConfig = {
  /* ── Profile ─────────────────────────────────────────── */
  profile: {
    name: "Dev Srijit",
    tagline: "Software Engineer",
    quote: '"Showcasing Creativity, Crafting Impact"',
    subquote: "Turning Ideas into Icons",
    /** Bio text. The value of `name` above is auto-bolded by the component. */
    bioText:
      "Hi, I'm Dev Srijit, passionate about web development and diving into the fascinating world of AI and machine learning. Whether I'm coding dynamic websites or exploring cutting-edge AI technologies, I love turning ideas into reality and continuously learning along the way. I always try to be consistent and work hard to achieve my goals. Currently Learning Cloud Computing and Spring Boot.",
    coreSkill: "Java",
    currentlyLearning: "System Design, Building Scalable Systems",
    availableForWork: true,
    heroImage: require('./Images/user.jpg'),
    aboutImage: require('./Images/Backgnd.jpeg'),
  },

  /* ── Navigation ──────────────────────────────────────── */
  nav: {
    logo: require('./Images/applogo.png'),
    links: [
      { label: "Home", sectionId: "home" },
      { label: "About", sectionId: "about" },
      { label: "Services", sectionId: "services" },
      { label: "Portfolio", sectionId: "portfolio" },
      { label: "Achievements", sectionId: "achievements" },
      { label: "Badges", sectionId: "badges" },
      { label: "Contact", sectionId: "contact" },
    ],
  },

  /* ── Marquee text ────────────────────────────────────── */
  marquee: {
    top: "Welcome to  my Portfolio Website! ",
    bottom: "Thank you for Visiting my Portfolio Website! ❤️ Looking forward to Connecting with you! ",
  },

  /* ── Skill badges (About section tabs) ───────────────── */
  skills: [
    { name: "JavaScript", url: "https://img.shields.io/badge/-JavaScript-black?style=flat-square&logo=javascript" },
    { name: "TypeScript", url: "https://img.shields.io/badge/-TypeScript-black?style=flat-square&logo=typescript" },
    { name: "Next.js", url: "https://img.shields.io/badge/-Next.js-black?style=flat-square&logo=next.js" },
    { name: "Python", url: "https://img.shields.io/badge/-Python-black?style=flat-square&logo=python" },
    { name: "Java", url: "https://img.shields.io/badge/-Java-black?style=flat-square&logo=java" },
    { name: "C/C++", url: "https://img.shields.io/badge/-C/C++-black?style=flat-square&logo=c" },
    { name: "React", url: "https://img.shields.io/badge/-React-black?style=flat-square&logo=react" },
    { name: "Node.js", url: "https://img.shields.io/badge/-Node.js-black?style=flat-square&logo=node.js" },
    { name: "Express.js", url: "https://img.shields.io/badge/-Express.js-black?style=flat-square&logo=express" },
    { name: "HTML5", url: "https://img.shields.io/badge/-HTML5-black?style=flat-square&logo=html5" },
    { name: "CSS3", url: "https://img.shields.io/badge/-CSS3-black?style=flat-square&logo=css3" },
    { name: "Django", url: "https://img.shields.io/badge/-Django-black?style=flat-square&logo=django" },
    { name: "MongoDB", url: "https://img.shields.io/badge/-MongoDB-black?style=flat-square&logo=mongodb" },
    { name: "MySQL", url: "https://img.shields.io/badge/-MySQL-black?style=flat-square&logo=mysql" },
    { name: "Figma", url: "https://img.shields.io/badge/-Figma-black?style=flat-square&logo=figma" },
    { name: "Git", url: "https://img.shields.io/badge/-Git-black?style=flat-square&logo=git" },
    { name: "Tailwind CSS", url: "https://img.shields.io/badge/-Tailwind%20CSS-black?style=flat-square&logo=tailwind-css" },
    { name: "Spring Boot", url: "https://img.shields.io/badge/-Spring%20Boot-black?style=flat-square&logo=spring-boot&logoColor=6DB33F" },
  ],

  /* ── Experience ──────────────────────────────────────── */
  experience: [
    { period: "2024 May–Jul", role: "Cyber Security Intern", company: "CISCO" },
    { period: "2025 May–Jun", role: "AIML Intern", company: "Elevate Labs" },
    { period: "2025 Jun–Jul", role: "Frontend Developer Intern", company: "Diggaj Coder" },
  ],

  /* ── Education ───────────────────────────────────────── */
  education: [
    { period: "2023–Present", degree: "B.Tech CSE (CGPA: 8.45)", institution: "Manipal Institute of Technology Bengaluru" },
    { period: "2021–2023", degree: "PUC (+2 Science, 93%)", institution: "Chethana P.U College" },
    { period: "2013–2021", degree: "Schooling (Grade: 95%)", institution: "Presidency School Bangalore North" },
  ],

  /* ── Services ────────────────────────────────────────── */
  services: [
    {
      icon: "fa-solid fa-paint-roller",
      title: "UI/UX Design",
      description:
        "I create modern, human-centric UI/UX designs using Figma with rapid prototyping, design systems, and seamless user experiences.",
      link: "https://www.figma.com/resource-library/difference-between-ui-and-ux/",
      linkLabel: "Learn more",
    },
    {
      icon: "fa-solid fa-photo-film",
      title: "Photography",
      description:
        "I use Creativity and Imagination to take aesthetic and high standard pictures for be it your products or yourself.",
      link: "https://drive.google.com/drive/folders/1YFugaH_1Yv9i9LITMnAHFVpbG93JCnbt",
      linkLabel: "Check it Out!",
    },
    {
      icon: "fa-solid fa-code",
      title: "Web Design & Cloud Deployment",
      description:
        "I design and engineer responsive, production-ready web applications with modern frameworks and scalable cloud deployment pipelines.",
      link: "https://en.wikipedia.org/wiki/Web_design",
      linkLabel: "Learn more",
    },
  ],

  /* ── Projects (Revamped Modern Cards) ─────────────────── */
  projects: [
    {
      id: "outreach-ai",
      title: "OutreachAI",
      subtitle: "AI Recruiter Outreach Automation",
      year: "2026",
      tags: ["Spring Boot", "React", "TypeScript", "Gemini API", "Make.com", "Gmail API"],
      description:
        "A full-stack workflow automation platform automating recruiter lead management, AI-driven personalization, CRM synchronization, and approval-based outreach.",
      image: require('./Images/outreachai.jpg'),
      githubUrl: "https://github.com/Devs7026/OutReachAI",
    },
    {
      id: "sketch2arch",
      title: "Sketch2Arch",
      subtitle: "Vision System for Architecture Diagrams",
      year: "2026",
      tags: ["YOLOv8", "Transformers OCR", "OpenCV", "Mermaid.js", "Python"],
      description:
        "Computer vision pipeline parsing hand-drawn architecture diagrams using custom YOLOv8 models, transformer-based OCR, and spatial heuristics into structured Mermaid.js diagrams.",
      image: require('./Images/Sketch2Archdiag.png'),
      githubUrl: "https://github.com/Devs7026",
    },
    {
      id: "saas-analytics",
      title: "Self-Optimizing SaaS Analytics",
      subtitle: "Event-Driven Telemetry & Autoscaling",
      year: "2026",
      tags: ["Apache Kafka", "PostgreSQL", "FastAPI", "LSTM", "React.js", "Microservices"],
      description:
        "Event-driven platform utilizing Kafka and PostgreSQL for real-time telemetry processing, LSTM traffic forecasting models, and intelligent AI autoscaling for Kubernetes.",
      image: require('./Images/saas analyser.png'),
      githubUrl: "https://github.com/Devs7026/self-optimizing-saas",
    },
    {
      id: "url-shortener",
      title: "URL Shortener",
      subtitle: "RESTful Service & Redirection Engine",
      year: "2026",
      tags: ["Java", "Spring Boot", "PostgreSQL", "REST APIs", "DTOs", "Insomnia"],
      description:
        "Built a URL shortener service using Java, Spring Boot, and PostgreSQL with RESTful APIs. Implemented unique short code generation, URL redirection, persistent storage of URL mappings, and layered architecture (Controllers, Services, Repositories, DTOs).",
      image: require('./Images/urlshortener.jpg'),
      githubUrl: "https://github.com/Devs7026/URL-Shortener",
    },
    {
      id: "healthcare-app",
      title: "AI Healthcare App",
      subtitle: "RAG Nutrition & Health Assistant",
      year: "2025",
      tags: ["Gemini API", "RAG", "Pinecone Vector DB", "Next.js", "REST APIs"],
      description:
        "Context-aware assistant combining Gemini API with Pinecone vector search for retrieval-augmented generation on dietary tracking and symptom correlation.",
      image: require('./Images/aihealthcare.jpg'),
      githubUrl: "https://github.com/Devs7026/HealthCare",
    },
    {
      id: "stock-predictor",
      title: "Stock Price Predictor",
      subtitle: "Time-Series Forecasting Dashboard",
      year: "2025",
      tags: ["Python", "LSTM", "Pandas", "NumPy", "Time Series"],
      description:
        "End-to-end data processing pipelines and LSTM-based price prediction models achieving >90% directional accuracy with interactive dashboard visualization.",
      image: require('./Images/stockpredictor.jpg'),
      githubUrl: "https://github.com/Devs7026/AIML-Projects",
    },
  ],

  /* ── Achievements (Dynamic Cards) ────────────────────── */
  achievements: [
    {
      id: "aptiv-ideathon-2025",
      title: "Aptiv Abilities Network 2025",
      subtitle: "Design for Accessibility X Ideathon",
      category: "Ideathon Winner",
      badge: "Winner",
      badgeType: "gold",
      highlight: "Winner among 300+ participating teams",
      description:
        "Awarded 1st place in the national ideathon for architecting inclusive accessibility technologies and human-centered assistive solutions.",
      icon: "fa-solid fa-trophy",
      year: "2025",
    },
    {
      id: "tally-code-brewers-2026",
      title: "Tally Code Brewers 2026",
      subtitle: "National Engineering Hackathon",
      category: "National Hackathon",
      badge: "Top 20 Finalist",
      badgeType: "accent",
      highlight: "Top 20 Finalists out of 5,000+ teams nationwide",
      description:
        "Selected as a top 20 finalist across all participating engineering teams in India for building high-concurrency systems and resilient architectures.",
      icon: "fa-solid fa-award",
      year: "2026",
    },
    {
      id: "leetcode-badge",
      title: "LeetCode 365 Days Streak",
      subtitle: "Algorithms & Problem Solving",
      category: "Competitive Programming",
      badge: "365 Badge",
      badgeType: "accent",
      highlight: "400+ Problems • 250+ Active Days • 1500+ Rating",
      description:
        "Earned the official 365 Days Badge, consistently maintaining 250+ active days, solving over 400 algorithmic problems, and securing a 1500+ rating.",
      icon: "fa-solid fa-fire",
      year: "2025–Present",
      link: "https://leetcode.com/u/7ICNbRHRSu/",
      linkLabel: "View my Leetcode Profile",
    },
    {
      id: "hackerrank-stars",
      title: "HackerRank 5-Star Coder",
      subtitle: "Core Foundations & Querying",
      category: "Skill Assessment",
      badge: "5-Star Gold",
      badgeType: "gold",
      highlight: "5 Stars in Java, SQL & Problem Solving",
      description:
        "Demonstrated gold-tier algorithmic problem solving, object-oriented design in Java, and relational database querying across HackerRank assessments.",
      icon: "fa-solid fa-star",
      year: "2024–Present",
      link: "https://www.hackerrank.com/profile/d2twins2607",
      linkLabel: "View my Hackerrank Profile",
    },
    {
      id: "algouniversity-fellowship",
      title: "AlgoUniversity Tech Fellowship (ATF)",
      subtitle: "National Engineering Selection",
      category: "Fellowship",
      badge: "Top 16%",
      badgeType: "accent",
      highlight: "Ranked among top 4,000 out of 25,000+ students",
      description:
        "Selected via nationwide technical screening among the top 4,000 engineering candidates for rigorous data structures, systems, and mentorship.",
      icon: "fa-solid fa-graduation-cap",
      year: "2024",
    },
  ],

  /* ── Badges Section (Horizontal Draggable Showcase) ── */
  /**
   * Add any badge here anytime. Each badge item supports:
   *  - id: (string) unique identifier
   *  - title: (string) badge title (e.g., "LeetCode 365 Days")
   *  - issuer: (string) issuing organization/platform
   *  - image: (optional require/URL) badge image file
   *  - iconType: ('leetcode' | 'hackerrank' | 'meta' | 'aws') fallback icon preset
   *  - link: (optional string) profile or credential verification link
   */
  badges: [
    {
      id: "leetcode-365",
      title: "LeetCode 365 Days",
      issuer: "LeetCode",
      image: require('./Images/Badges/Leetcode 365 Days Badge.gif'),
    },
    {
      id: "leetcode-100-2025",
      title: "LeetCode 100 Days 2025",
      issuer: "LeetCode",
      image: require('./Images/Badges/Leetcode 100 Day Badge 2025.gif'),
    },
    {
      id: "leetcode-50-2025",
      title: "LeetCode 50 Days 2025",
      issuer: "LeetCode",
      image: require('./Images/Badges/Leetcode 50 Day Badge 2025.gif'),
    },
    {
      id: "aws-cloud-foundations",
      title: "AWS Cloud Foundations",
      issuer: "AWS Academy",
      image: require('./Images/Badges/aws-academy-graduate-cloud-foundations-training-bad.png'),
    },
    {
      id: "aws-data-engineering",
      title: "AWS Data Engineering",
      issuer: "AWS Academy",
      image: require('./Images/Badges/aws-academy-graduate-data-engineering-training-badg.png'),
    },
    {
      id: "cisco-ccna-networks",
      title: "CCNA: Intro to Networks",
      issuer: "Cisco Networking Academy",
      image: require('./Images/Badges/ccna-introduction-to-networks.png'),
    },
    {
      id: "cisco-champions-league",
      title: "Cisco Champions League",
      issuer: "Cisco",
      image: require('./Images/Badges/Cisco Champions League Badge.png'),
    },
    {
      id: "ibm-linuxone-intermediate",
      title: "IBM LinuxONE Intermediate",
      issuer: "IBM",
      image: require('./Images/Badges/linux-on-ibm-linuxone-technical-sales-intermediate.png'),
    },
    {
      id: "gssoc-contributor",
      title: "GSSoC Contributor",
      issuer: "GirlScript Foundation",
      image: require('./Images/Badges/GSSoC_contributor.png'),
    },
    {
      id: "gssoc-ai",
      title: "GSSoC AI Track",
      issuer: "GirlScript Foundation",
      image: require('./Images/Badges/GSSoC_ai.png'),
    },
    {
      id: "gssoc-open-source-2026",
      title: "GSSoC Open Source 2026",
      issuer: "GirlScript Foundation",
      image: require('./Images/Badges/GSSoC_2026_OpenSourceTrack.png'),
    },
    {
      id: "hackerrank-problem-solving",
      title: "5-Star Problem Solving",
      issuer: "HackerRank",
      iconType: "hackerrank",
    },
    {
      id: "hackerrank-java",
      title: "5-Star Java",
      issuer: "HackerRank",
      iconType: "hackerrank",
    },
    {
      id: "hackerrank-sql",
      title: "5-Star SQL",
      issuer: "HackerRank",
      iconType: "hackerrank",
    },
  ],

  /* ── Social / Contact ────────────────────────────────── */
  social: {
    email: "devsrijit260705@gmail.com",
    phone: "+91 8088067470",
    github: "https://github.com/Devs7026",
    leetcode: "https://leetcode.com/u/7ICNbRHRSu/",
    hackerrank: "https://www.hackerrank.com/profile/d2twins2607",
    instagram: "https://www.instagram.com/dev_o_o_2607?igsh=MXB0eTAwbWc1ZjY3OQ==",
    twitter: "https://x.com/Dev2607x?t=il1cE-1OF6F_0GaDavYjEg&s=08",
    linkedin: "https://www.linkedin.com/in/dev-srijit-7a8353295",
  },

  /* ── Skill logo marquee (LogoLoop) ───────────────────── */
  skillLoop: [
    { name: "JavaScript", logoUrl: "https://img.shields.io/badge/-JavaScript-black?style=flat-square&logo=javascript" },
    { name: "TypeScript", logoUrl: "https://img.shields.io/badge/-TypeScript-black?style=flat-square&logo=typescript" },
    { name: "React", logoUrl: "https://img.shields.io/badge/-React-black?style=flat-square&logo=react" },
    { name: "Next.js", logoUrl: "https://img.shields.io/badge/-Next.js-black?style=flat-square&logo=next.js" },
    { name: "Node.js", logoUrl: "https://img.shields.io/badge/-Node.js-black?style=flat-square&logo=node.js" },
    { name: "Python", logoUrl: "https://img.shields.io/badge/-Python-black?style=flat-square&logo=python" },
    { name: "Java", logoUrl: "https://img.shields.io/badge/-Java-black?style=flat-square&logo=java" },
    { name: "MongoDB", logoUrl: "https://img.shields.io/badge/-MongoDB-black?style=flat-square&logo=mongodb" },
    { name: "MySQL", logoUrl: "https://img.shields.io/badge/-MySQL-black?style=flat-square&logo=mysql" },
    { name: "Figma", logoUrl: "https://img.shields.io/badge/-Figma-black?style=flat-square&logo=figma" },
    { name: "Git", logoUrl: "https://img.shields.io/badge/-Git-black?style=flat-square&logo=git" },
    { name: "Tailwind CSS", logoUrl: "https://img.shields.io/badge/-Tailwind%20CSS-black?style=flat-square&logo=tailwind-css" },
  ],

  /* ── Certification slides (ImageSlider) ──────────────── */
  certSlides: [
    { url: require('./Images/certifications/img1.jpg') },
    { url: require('./Images/certifications/img2.jpg') },
    { url: require('./Images/certifications/img3.jpg') },
    { url: require('./Images/certifications/img4.jpg') },
    { url: require('./Images/certifications/img5.jpg') },
    { url: require('./Images/certifications/img6.jpg') },
    { url: require('./Images/certifications/img7.jpg') },
    { url: require('./Images/certifications/img8.jpg') },
    { url: require('./Images/certifications/img9.jpg') },
    { url: require('./Images/certifications/img10.jpg') },
    { url: require('./Images/certifications/img11.jpg') },
    { url: require('./Images/certifications/img12.jpg') },
    { url: require('./Images/certifications/img13.jpg') },
    { url: require('./Images/certifications/img14.jpg') },
    { url: require('./Images/certifications/img15.jpg') },
    { url: require('./Images/certifications/img16.jpg') },
    { url: require('./Images/certifications/img17.JPG') },
    { url: require('./Images/certifications/img20.jpg') },
    { url: require('./Images/certifications/img21.JPG') },
    { url: require('./Images/certifications/img22.JPG') },
  ],

  /* ── Footer ──────────────────────────────────────────── */
  footer: {
    copyright: "©Copyright 2026 Dev Srijit",
  },
};

export default portfolioConfig;
