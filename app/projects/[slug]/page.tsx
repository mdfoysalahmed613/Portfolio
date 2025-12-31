import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/projects";
import ProjectArticle from "./_components/project-article";

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

   return <ProjectArticle project={project} />;
}
