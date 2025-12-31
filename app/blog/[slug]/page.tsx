import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogBySlug, getAllBlogSlugs } from "@/lib/blogs";
import BlogArticle from "./_components/blog-article";

export function generateStaticParams() {
   return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata | {}> {
   const { slug } = await params;
   const blog = getBlogBySlug(slug);

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
               url: blog.image,
               alt: blog.title,
            }
         ],
         type: "article",
      },
   };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
   const { slug } = await params;
   const blog = getBlogBySlug(slug);

   if (!blog) {
      return notFound();
   }

   return <BlogArticle blog={blog} />;
}
