import { Metadata } from "next";

export const metadata: Metadata = {
   title: "Blog",
   description: "Read my latest articles and thoughts on web development, design, and technology.",
};

export default function BlogPage() {
   return (
      <section className="max-w-5xl mx-auto py-12 px-6">
         <h1 className="text-4xl font-bold mb-8">Blog</h1>
      </section>
   );
}
