export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
  tags: string[];
  techstack: string[];
  role: string;
  year: string;
  category: string;
  overview: string;
  challengesAndSolutions: string;
  features: string[];
  results: string[];
  learnings: string[];
}

export const projects: Project[] = [
  {
    slug: "quickblog",
    title: "QuickBlog",
    description:
      "A modern blogging platform built with Next.js and MongoDB, featuring real-time updates and user authentication.",
    image: "/QuickBlog.png",
    liveUrl: "https://quickblog.foysal.me",
    githubUrl: "https://github.com/mdfoysalahmed613/quickblog",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    techstack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "clerk",
      "NodeJs",
      "Express",
      "Tiptap",
      "Shadcn UI",
    ],
    role: "Full Stack Developer",
    year: "2024-2025",
    category: "Web Application",
    overview:
      "QuickBlog is a full-featured blogging platform that allows users to create, edit, and publish blog posts with a modern, intuitive interface. Built with performance and user experience in mind, it leverages the power of Next.js 15 for server-side rendering and optimal performance. The platform features a clean, minimalist design that puts content first while providing all the tools needed for effective blogging.",
    features: [
      "User authentication and authorization with secure session management",
      "Rich text editor for creating and formatting blog posts",
      "Real-time content updates and notifications",
      "Responsive design that works seamlessly across all devices",
      "SEO-optimized with meta tags and dynamic sitemap generation",
      "Comment system for reader engagement",
      "Category and tag-based organization",
      "Search functionality for easy content discovery",
      "Admin dashboard for content management",
    ],
    challengesAndSolutions:
      "Many existing blogging platforms are either too complex for beginners or lack modern features and performance optimization. There was a need for a fast, user-friendly blogging solution that provides real-time capabilities, a clean interface, and excellent SEO support without overwhelming users with unnecessary features. I developed QuickBlog using Next.js 15 for optimal performance with server-side rendering and MongoDB for flexible data storage. The platform implements real-time features for instant content updates and provides an intuitive dashboard for content management. The solution focuses on simplicity without sacrificing power, making it easy for anyone to start blogging while offering advanced features for experienced users.",

    results: [
      "Achieved 95+ Lighthouse performance score",
      "Successfully deployed and serving real users",
      "Fast page load times with optimized images and code splitting",
      "Positive user feedback on interface and usability",
    ],
    learnings: [
      "Advanced Next.js 15 features including App Router and Server Components",
      "MongoDB schema design and optimization for blog content",
      "Implementing real-time features with efficient polling strategies",
      "Best practices for SEO in modern web applications",
      "Performance optimization techniques for large content platforms",
    ],
  },
];
