"use client";

import Link from "next/link";
import { ExternalLink, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectCarousel from "@/components/common/project-carousel";
import { IProject } from "@/lib/projects";

export default function ProjectCard({ project }: { project: IProject }) {
   return (
      <article className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300">
         {/* Image Carousel */}
         <ProjectCarousel
            images={project.images}
            title={project.title}
            autoplay={true}
            autoplayDelay={3000}
            className="rounded-none border-0"
         />

         {/* Content */}
         <div className="p-4">
            {/* Category & Year */}
            <div className="flex items-center gap-2 mb-2">
               <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full">
                  {project.category}
               </span>
               <span className="text-muted-foreground text-xs">{project.year}</span>
            </div>

            {/* Title */}
            <h3 className="text-base font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors">
               <Link href={`${project.liveUrl}`} target="_blank" rel="noopener">
                  {project.title}
               </Link>
            </h3>

            {/* Description */}
            <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
               {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-1 mb-4">
               {project.technologies.slice(0, 3).map((tech) => (
                  <span
                     key={tech}
                     className="px-1.5 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded"
                  >
                     {tech}
                  </span>
               ))}
               {project.technologies.length > 3 && (
                  <span className="px-1.5 py-0.5 text-primary/70 text-xs">
                     +{project.technologies.length - 3} more
                  </span>
               )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
               <Button size="sm" className="flex-1" asChild>
                  <Link href={project.liveUrl} target="_blank" rel="noopener">
                     <Eye className="w-3.5 h-3.5 mr-1.5" />
                     Live Preview
                  </Link>
               </Button>

               <Button size="sm" variant="outline" className="flex-1" asChild>
                  <Link href={`/projects/${project.slug}`}>
                     <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                     Details
                  </Link>
               </Button>
            </div>
         </div>
      </article>
   );
}
