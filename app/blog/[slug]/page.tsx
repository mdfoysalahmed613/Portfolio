
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogs } from "@/lib/blogs";
import { ArrowLeft, Calendar } from "lucide-react";
import ShareBlog from "@/components/common/share-blog";

export function generateStaticParams() {
   return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata | {}> {
   const { slug } = await params;
   const blog = blogs.find((b) => b.slug === slug);

   if (!blog) return {
      title: "Blog Not Found",
   };

   return {
      title: blog.title,
      description: blog.description,
      keywords: blog.keywords,
      openGraph: {
         title: blog.title,
         description: blog.description,
         images: [
            {
               url: blog.image.src,
               width: blog.image.width,
               height: blog.image.height,
               alt: blog.title,
            }
         ],
         type: "article",
      },
   };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
   const { slug } = await params;
   const blog = blogs.find((b) => b.slug === slug);

   if (!blog) {
      return notFound();
   }
   const Content = blog.content;
   return (
      <article className="max-w-5xl mx-auto py-16">
         <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground leading-tight">
               {blog.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6 justify-between">
               <time dateTime={blog.publishDate}>
                  <Calendar className="w-4 h-4 mr-2 inline" />
                  {new Date(blog.publishDate).toLocaleDateString('en-US', {
                     year: 'numeric',
                     month: 'long',
                     day: 'numeric'
                  })}
               </time>
               <ShareBlog />
            </div>

            {/* Description */}
            <p className="text-xl text-muted-foreground mb-6">
               {blog.description}
            </p>
         </header>
         <Content />

         {/* Footer Navigation */}
         <footer className="mt-16 pt-8 border-t border-border">
            <div className="flex justify-between items-center">
               <Link
                  href="/blog"
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium group"
               >
                  <ArrowLeft className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
                  All articles
               </Link>
            </div>
         </footer>
      </article>
   );
}
