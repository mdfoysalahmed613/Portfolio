import { blogs } from "@/lib/blogs";
export function generateStaticParams() {
   return blogs.map((blog) => ({
      slug: blog.slug,
   }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
   const { slug } = await params;

   // Dynamic import based on slug
   const { default: Blog } = await import(`@/content/${slug}.mdx`)

   return <article className="prose prose-lg dark:prose-invert mx-auto py-8 px-4">
      <Blog />
   </article>;
}
