import { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { blogs } from "@/lib/blogs";

export const metadata: Metadata = {
   title: "Blog",
   description: "Read my latest articles and thoughts on web development, design, and technology.",
};
export default function BlogPage() {
   return (
      <div className="min-h-screen py-20 px-6 md:px-12 lg:px-24">
         <div className="max-w-4xl mx-auto">
            <div className="mb-12">
               <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
               <p className="text-lg text-muted-foreground">
                  Thoughts, tutorials, and insights on web development and design.
               </p>
            </div>

            <div className="grid gap-6">
               {blogs.map((blog) => (
                  <Link key={blog.slug} href={`/blog/${blog.slug}`}>
                     <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                        <div className="flex justify-between items-start mb-2">
                           <h2 className="text-2xl font-semibold hover:text-primary transition-colors">
                              {blog.title}
                           </h2>
                           <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">
                              {blog.readTime}
                           </span>
                        </div>
                        <p className="text-muted-foreground mb-3">{blog.description}</p>
                        <time className="text-sm text-muted-foreground">
                           {new Date(blog.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                           })}
                        </time>
                     </Card>
                  </Link>
               ))}
            </div>
         </div>
      </div>
   );
}
