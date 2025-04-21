
// Data for Anuj and Rajat's portfolio website

import { 
  Code, Search, Globe, PenTool, 
  Database, BarChart, MessageSquare, 
  Layout, ShoppingCart, FileText, 
  Server, Tool, Zap, Award, 
  BookOpen, Users, Calendar, 
  Github, Linkedin, Phone, Mail 
} from "lucide-react";

// About data
export const aboutData = {
  anuj: {
    name: "Anuj",
    role: "SEO Specialist",
    age: 25,
    location: "India",
    experience: "1+ year",
    bio: "Passionate SEO specialist with expertise in optimizing websites for search engines. Experienced in on-page and off-page SEO, technical analysis, content strategy, and keyword research. Committed to helping businesses increase their online visibility and drive organic traffic to their websites.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  rajat: {
    name: "Rajat Gupta",
    role: "Web Developer",
    experience: "2.3 years",
    company: "ARA Web Technologies",
    location: "Faridabad, India",
    bio: "Versatile web developer with 2.3 years of experience in full-stack development. Currently working at ARA Web Technologies, specializing in building responsive, user-friendly websites and applications using modern technologies. Proficient in both frontend and backend development, with expertise in creating secure and scalable web solutions.",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  }
};

// Projects data
export const projectsData = {
  seo: [
    {
      title: "E-commerce SEO Campaign",
      description: "Increased organic traffic by 150% for a clothing retailer through technical SEO fixes, content optimization, and strategic link building.",
      tags: ["Technical SEO", "Content Strategy", "Link Building"],
      results: ["150% traffic increase", "75% increase in conversions", "Page 1 ranking for 30+ keywords"],
      tools: ["SEMrush", "Ahrefs", "Google Search Console"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    }
  ],
  web: [
    {
      title: "Apartment Booking Platform",
      description: "Developed a comprehensive apartment booking system with user authentication, booking management, and payment integration.",
      tags: ["Laravel", "MySQL", "Bootstrap", "Razorpay"],
      features: ["User profiles", "Booking calendar", "Payment processing", "Admin dashboard"],
      link: "#",
      image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Clothing E-commerce Store",
      description: "Built a fully-functional e-commerce platform for a clothing brand with product management, cart functionality, and secure checkout.",
      tags: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
      features: ["Product filtering", "User accounts", "Wishlist", "Order tracking"],
      link: "#",
      image: "https://images.unsplash.com/photo-1525328437458-0c4d4db7cab4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Spiritual Courses Website",
      description: "Created a platform for spiritual courses with video content delivery, user progress tracking, and subscription management.",
      tags: ["Laravel", "MySQL", "JavaScript", "Instamojo"],
      features: ["Video lessons", "Progress tracking", "Community forum", "Certificate generation"],
      link: "#",
      image: "https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Q&A Forum Application",
      description: "Developed a community-driven Q&A platform with user reputation system, content moderation, and advanced search capabilities.",
      tags: ["PHP", "MySQL", "Bootstrap", "jQuery"],
      features: ["Question voting", "Answer rating", "User badges", "Topic tagging"],
      link: "#",
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    }
  ]
};

// Services data
export const servicesData = {
  web: [
    {
      title: "Frontend Development",
      description: "Modern, responsive user interfaces built with HTML, CSS, JavaScript, and Bootstrap that look great on all devices.",
      icon: Layout,
    },
    {
      title: "Backend Development",
      description: "Robust server-side applications using PHP, Laravel, and MySQL to handle complex business logic and data management.",
      icon: Server,
    },
    {
      title: "E-commerce Solutions",
      description: "Custom online stores with product management, secure payment integration, and order processing systems.",
      icon: ShoppingCart,
    },
    {
      title: "Custom Dashboards",
      description: "Admin panels and dashboards with user management, analytics, and reporting features tailored to your business needs.",
      icon: BarChart,
    }
  ],
  seo: [
    {
      title: "Technical SEO",
      description: "Comprehensive site audits and fixes for crawlability, indexing, site speed, schema markup, and mobile optimization.",
      icon: Code,
    },
    {
      title: "On-Page Optimization",
      description: "Keyword research, content optimization, meta tag improvements, and internal linking strategies to boost relevance.",
      icon: FileText,
    },
    {
      title: "Local SEO",
      description: "Google Business Profile optimization, local citation building, and geo-targeted content to improve local visibility.",
      icon: Globe,
    },
    {
      title: "Analytics Setup",
      description: "Implementation of Google Analytics, Search Console, and custom reporting dashboards to track SEO performance.",
      icon: BarChart,
    }
  ],
  packages: [
    {
      title: "Startup Package",
      description: "Complete website development with basic SEO setup, perfect for new businesses looking to establish an online presence.",
      features: ["5-page responsive website", "On-page SEO", "Google Business setup", "Basic analytics"],
      price: "Starting at ₹35,000",
    },
    {
      title: "Growth Package",
      description: "Enhanced web presence with comprehensive SEO strategy for businesses looking to expand their reach and traffic.",
      features: ["10-page custom website", "Technical SEO audit", "Content optimization", "Monthly reporting"],
      price: "Starting at ₹60,000",
    },
    {
      title: "E-commerce Package",
      description: "Full-featured online store with SEO optimization designed to drive traffic and convert visitors into customers.",
      features: ["Custom e-commerce site", "Product SEO", "Conversion optimization", "Performance monitoring"],
      price: "Starting at ₹85,000",
    }
  ]
};

// Skills data
export const skillsData = {
  anuj: [
    { name: "On-page SEO", icon: PenTool },
    { name: "Off-page SEO", icon: Globe },
    { name: "Technical SEO", icon: Code },
    { name: "Content Strategy", icon: FileText },
    { name: "Keyword Research", icon: Search },
    { name: "Link Building", icon: Database },
    { name: "Analytics", icon: BarChart },
    { name: "Reporting", icon: FileText },
  ],
  rajat: [
    { name: "HTML/CSS", icon: Code },
    { name: "JavaScript", icon: Code },
    { name: "PHP", icon: Code },
    { name: "MySQL", icon: Database },
    { name: "Laravel", icon: Code },
    { name: "Bootstrap", icon: Layout },
    { name: "Git/GitHub", icon: Github },
    { name: "RESTful APIs", icon: Server },
  ],
  tools: [
    { name: "Ahrefs", type: "seo" },
    { name: "SEMrush", type: "seo" },
    { name: "Google Search Console", type: "seo" },
    { name: "Google Analytics", type: "seo" },
    { name: "Screaming Frog", type: "seo" },
    { name: "SurferSEO", type: "seo" },
    { name: "VS Code", type: "dev" },
    { name: "GitHub", type: "dev" },
    { name: "AdminLTE", type: "dev" },
    { name: "Razorpay", type: "dev" },
    { name: "Instamojo", type: "dev" },
  ]
};

// Blog data
export const blogData = {
  seo: [
    {
      title: "The Ultimate SEO Audit Checklist for 2025",
      excerpt: "Learn how to perform a comprehensive SEO audit with this step-by-step guide covering technical, on-page, and off-page factors.",
      date: "April 10, 2025",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      tags: ["SEO", "Audit", "Technical SEO"],
    },
    {
      title: "How to Fix Google Indexing Issues in 2025",
      excerpt: "Troubleshoot and resolve common indexing problems to ensure your content gets properly indexed and ranked in Google's search results.",
      date: "March 25, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      tags: ["Indexing", "Google", "Technical SEO"],
    },
    {
      title: "Content Strategy That Drives Organic Traffic",
      excerpt: "Develop a content strategy aligned with search intent to attract qualified visitors and improve your search engine rankings.",
      date: "March 12, 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      tags: ["Content", "Strategy", "Traffic"],
    }
  ],
  dev: [
    {
      title: "Integrating Razorpay Payment Gateway in PHP",
      excerpt: "A step-by-step guide to implementing Razorpay payment processing in your PHP applications with secure transaction handling.",
      date: "April 15, 2025",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      tags: ["PHP", "Razorpay", "Payments"],
    },
    {
      title: "Building Admin Panels with AdminLTE in Laravel",
      excerpt: "Learn how to quickly set up and customize powerful admin dashboards using AdminLTE and Laravel framework.",
      date: "April 2, 2025",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      tags: ["Laravel", "AdminLTE", "Dashboard"],
    },
    {
      title: "Creating SEO-Friendly URLs in PHP Applications",
      excerpt: "Implement clean, search engine optimized URLs in your PHP projects to improve user experience and search rankings.",
      date: "March 18, 2025",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      tags: ["PHP", "SEO", "URLs"],
    }
  ]
};

// Contact data
export const contactData = {
  email: "contact@anujrajat.com",
  phone: "+91 9876543210",
  social: {
    linkedin: {
      anuj: "https://linkedin.com/in/anuj",
      rajat: "https://linkedin.com/in/rajat-gupta",
    },
    github: {
      anuj: "https://github.com/anuj",
      rajat: "https://github.com/rajat",
    }
  },
  location: "Faridabad, India",
};
