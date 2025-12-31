import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { IBlog } from "@/lib/blogs";

interface BlogListProps {
   blogs: IBlog[];
}

export default function BlogList({ blogs }: BlogListProps) {
   return (
      <section className="max-w-6xl mx-auto py-8">
         {/* Header */}
         <header className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
               Blog
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
               Thoughts, tutorials, and insights on web development
            </p>
         </header>

         {/* Blog Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogs.map((blog) => (
               <BlogCard key={blog.slug} blog={blog} />
            ))}
         </div>
      </section>
   );
}

function BlogCard({ blog }: { blog: IBlog }) {
   return (
      <article
         className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all duration-300"
      >
         <Link href={`/blog/${blog.slug}`} className="block">
            {/* Image */}
            <div className="relative aspect-[40/21] overflow-hidden bg-muted">
               <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
               />
            </div>

            {/* Content */}
            <div className="p-6">
               <time
                  dateTime={blog.publishDate}
                  className="text-sm text-muted-foreground"
               >
                  {new Date(blog.publishDate).toLocaleDateString('en-US', {
                     year: 'numeric',
                     month: 'long',
                     day: 'numeric'
                  })}
               </time>

               {/* Title */}
               <h2 className="text-2xl font-bold mt-2 mb-3 text-foreground group-hover:text-primary transition-colors">
                  {blog.title}
               </h2>

               {/* Description */}
               <p className="text-muted-foreground line-clamp-2">
                  {blog.description}
               </p>

               {/* Read More */}
               <div className="mt-4 flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                  Read article
                  <ChevronRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
               </div>
            </div>
         </Link>
      </article>
   );
}
