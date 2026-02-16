"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/common/project-card";
import { IProject } from "@/lib/projects";
import { motion } from "framer-motion";

interface ProjectsProps {
   projects: IProject[];
   limit?: number;
   showViewAll?: boolean;
}

const Projects = ({ projects, limit, showViewAll = false }: ProjectsProps) => {
   const displayedProjects = limit ? projects.slice(0, limit) : projects;

   return (
      <section id="projects" className="py-20 max-w-6xl mx-auto">
         {/* Header */}
         <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl text-center lg:text-5xl font-bold mb-4">
            Client Work
         </motion.h2>
         <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Websites built for real businesses
         </motion.p>

         {/* Projects Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedProjects.map((project, index) => (
               <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
               >
                  <ProjectCard project={project} />
               </motion.div>
            ))}
         </div>

         {showViewAll && (
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 0.3 }}
               className="flex justify-center mt-10"
            >
               <Button size="lg" variant="outline" asChild>
                  <Link href="/projects">
                     View All Projects
                     <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
               </Button>
            </motion.div>
         )}
      </section>
   );
};

export default Projects;
