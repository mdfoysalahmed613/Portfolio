"use client";

import Link from "next/link";
import { ExternalLink, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectCarousel from "@/components/common/project-carousel";
import { IProject } from "@/lib/projects";
import { FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";

interface ProjectsProps {
  projects: IProject[];
}

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <section id="projects" className="py-20 max-w-6xl mx-auto">
      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl text-center lg:text-5xl font-bold mb-4">
        Featured Projects
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
        A selection of projects I&apos;ve worked on, showcasing my skills in
        full-stack development
      </motion.p>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {projects.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectCard key={project.slug} project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

function ProjectCard({ project }: { project: IProject }) {
  return (
    <article className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300"
    >
      {/* Image Carousel */}
      <ProjectCarousel
        images={project.images}
        title={project.title}
        autoplay={true}
        autoplayDelay={3000}
        className="rounded-none border-0"
      />

      {/* Content */}
      <div className="p-6">
        {/* Category & Year */}
        <div className="flex items-center gap-3 mb-3">
          <span className="px-2.5 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full">
            {project.category}
          </span>
          <span className="text-muted-foreground text-xs">{project.year}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          <Link href={`/projects/${project.slug}`}>
            {project.title}
          </Link>
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-0.5 text-primary/70 text-xs">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-2">
          <Button size="sm" asChild>
            <Link href={`/projects/${project.slug}`} className="flex-1">
              <Eye className="w-3.5 h-3.5 mr-1.5" />
              View Details
            </Link>
          </Button>
          {project.liveUrl && (
            <Button size="sm" variant="outline" asChild>
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                Live
              </Link>
            </Button>
          )}
          {project.githubUrl && (
            <Button size="sm" variant="outline" asChild>
              <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <FaGithub className="w-3.5 h-3.5 mr-1.5" />
                Code
              </Link>
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}

export default Projects;