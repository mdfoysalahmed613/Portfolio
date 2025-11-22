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
];
