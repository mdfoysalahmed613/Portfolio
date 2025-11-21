import { Metadata } from "next";

export const metadata: Metadata = {
   title: "Getting Started with Next.js 15",
   description: "Learn how to build modern web applications with Next.js 15 and React Server Components.",
};

export default function BlogPostLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <article className="min-h-screen py-20 px-6 md:px-12 lg:px-24">
         <div className="max-w-3xl mx-auto prose prose-lg dark:prose-invert">
            {children}
         </div>
      </article>
   );
}
