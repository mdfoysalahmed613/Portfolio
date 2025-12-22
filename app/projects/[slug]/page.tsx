import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/projects";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import { useMDXComponents } from "@/mdx-components";
import { Button } from "@/components/ui/button";
import ProjectCarousel from "@/components/common/project-carousel";

export function generateStaticParams() {
   return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata | {}> {
   const { slug } = await params;
   const project = getProjectBySlug(slug);

   if (!project) return {
      title: "Project Not Found",
   };

   return {
      title: project.title,
      description: project.description,
      openGraph: {
         title: project.title,
         description: project.description,
         images: project.images.length > 0 ? [
            {
               url: project.images[0],
               alt: project.title,
            }
         ] : [],
         type: "article",
      },
   };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
   const { slug } = await params;
   const project = getProjectBySlug(slug);

   if (!project) {
      return notFound();
   }

   return (
      <article className="max-w-5xl lg:mx-auto py-16">
         <header className="mb-12">
            {/* Category & Year */}
            <div className="flex items-center gap-3 mb-4">
               <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                  {project.category}
               </span>
               <span className="text-muted-foreground text-sm">{project.year}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground leading-tight">
               {project.title}
            </h1>

            {/* Description */}
            <p className="text-xl text-muted-foreground mb-6">
               {project.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
               {project.liveUrl && (
                  <Button asChild>
                     <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                     </Link>
                  </Button>
               )}
               {project.githubUrl && (
                  <Button variant="outline" asChild>
                     <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                     </Link>
                  </Button>
               )}
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
               {project.technologies.map((tech) => (
                  <span
                     key={tech}
                     className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full"
                  >
                     {tech}
                  </span>
               ))}
            </div>
         </header>

         {/* Hero Carousel */}
         {project.images.length > 0 && (
            <div className="mb-12">
               <ProjectCarousel
                  images={project.images}
                  title={project.title}
                  showArrows={true}
                  autoplay={true}
                  autoplayDelay={4000}
                  sizes="(max-width: 768px) 100vw, 80vw"
                  priority={true}
               />
            </div>
         )}

         <div>
            <MDXRemote
               source={project.content}
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
                  href="/#projects"
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium group"
               >
                  <ArrowLeft className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
                  All projects
               </Link>
            </div>
         </footer>
      </article>
   );
}
