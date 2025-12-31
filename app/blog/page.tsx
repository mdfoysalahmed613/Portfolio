import { Metadata } from "next";
import { getAllBlogs } from "@/lib/blogs";
import BlogList from "./_components/blog-list";

export const metadata: Metadata = {
   title: "Blog",
   description: "Read my latest articles and thoughts on web development, design, and technology. Insights on React, Next.js, TypeScript, and modern web practices.",
   openGraph: {
      title: "Blog",
      description: "Read my latest articles and thoughts on web development, design, and technology.",
   },
};

export default function BlogPage() {
   const blogs = getAllBlogs();

   return <BlogList blogs={blogs} />;
}
