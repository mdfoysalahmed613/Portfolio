export interface IBlogs {
   slug: string;
   title: string;
   description: string;
   date: string;
   readTime: string;
}
export const blogs: IBlogs[] = [
   {
      slug: "getting-started-with-nextjs",
      title: "Getting Started with Next.js 15",
      description: "Learn how to build modern web applications with Next.js 15 and React Server Components.",
      date: "2024-01-15",
      readTime: "5 min read",
   },
   {
      slug: "mastering-typescript",
      title: "Mastering TypeScript in 2024",
      description: "Essential TypeScript patterns and best practices for modern web development.",
      date: "2024-01-10",
      readTime: "8 min read",
   },
   {
      slug: "tailwind-css-tips",
      title: "10 Tailwind CSS Tips for Better Development",
      description: "Boost your productivity with these essential Tailwind CSS tips and tricks.",
      date: "2024-01-05",
      readTime: "6 min read",
   },
];
