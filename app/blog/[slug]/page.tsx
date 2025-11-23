import { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogs } from "@/lib/blogs";
import { Props } from "@/app/projects/[slug]/page";

export function generateStaticParams() {
   return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata | {}> {
   const { slug } = await params;
   const blog = blogs.find((b) => b.slug === slug);

   if (!blog) return {
      title: "Blog Not Found",
   };

   return {
      title: blog.title ,
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

export default async function BlogPost({ params }: Props) {
   const { slug } = await params;

   const blog = blogs.find((b) => b.slug === slug);

   let Content: any = null;

   if (blog?.content) {
      Content = blog.content;
   } else {
      try {
         const mod = await import(`@/content/${slug}.mdx`);
         Content = mod.default;
      } catch (err) {
         return notFound();
      }
   }

   return (
      <article className="max-w-5xl mx-auto py-12 px-6">
      </article>
   );
}
