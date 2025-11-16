export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
  tags: string[];
  role: string;
  year: string;
  category: string;
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
    role: "Full Stack Developer",
    year: "2024-2025",
    category: "Web Application",
  },
];
