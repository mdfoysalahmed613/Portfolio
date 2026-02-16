"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/common/project-card";
import { IProject } from "@/lib/projects";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectListProps {
   projects: IProject[];
   categories: string[];
}

export default function ProjectList({ projects, categories }: ProjectListProps) {
   const [activeCategory, setActiveCategory] = useState<string | null>(null);

   const filteredProjects = activeCategory
      ? projects.filter((p) => p.category === activeCategory)
      : projects;

   return (
      <section className="max-w-6xl mx-auto py-8">
         {/* Header */}
         <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
               Client Work
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
               Websites built for real businesses
            </p>
         </header>

         {/* Category Filter */}
         <div className="flex flex-wrap justify-center gap-2 mb-10">
            <Button
               variant={activeCategory === null ? "default" : "outline"}
               size="sm"
               onClick={() => setActiveCategory(null)}
            >
               All
            </Button>
            {categories.map((category) => (
               <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category)}
               >
                  {category}
               </Button>
            ))}
         </div>

         {/* Projects Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
               {filteredProjects.map((project) => (
                  <motion.div
                     key={project.slug}
                     layout
                     initial={{ opacity: 0, scale: 0.95 }}
                     animate={{ opacity: 1, scale: 1 }}
                     exit={{ opacity: 0, scale: 0.95 }}
                     transition={{ duration: 0.3 }}
                  >
                     <ProjectCard project={project} />
                  </motion.div>
               ))}
            </AnimatePresence>
         </div>

         {filteredProjects.length === 0 && (
            <p className="text-center text-muted-foreground mt-12">
               No projects found in this category.
            </p>
         )}
      </section>
   );
}
