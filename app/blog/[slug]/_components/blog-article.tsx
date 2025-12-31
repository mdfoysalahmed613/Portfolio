import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import ShareBlog from "@/app/blog/_components/share-blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import { useMDXComponents } from "@/mdx-components";
import { IBlog } from "@/lib/blogs";

interface BlogArticleProps {
   blog: IBlog;
}

export default async function BlogArticle({ blog }: BlogArticleProps) {
   return (
      <article className="max-w-5xl lg:mx-auto py-16">
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

         <div>
            <MDXRemote
               source={blog.content}
               components={useMDXComponents({})}
               options={{
                  mdxOptions: {
                     remarkPlugins: [remarkGfm],
                     rehypePlugins: [
                        [rehypePrettyCode, {
                           theme: "github-dark",
                           keepBackground: true,
                        }],
                     ],
                  },
               }}
            />
         </div>

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
