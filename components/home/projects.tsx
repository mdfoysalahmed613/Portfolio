"use client"
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'
import { ExternalLink, ArrowRight, FileText } from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'
import { projects } from '@/lib/projects'
import { motion } from 'framer-motion'
const Projects = () => {

   return (
      <section className='py-20' id="projects" aria-labelledby="projects-heading">
         <motion.h2
            id="projects-heading"
            className='font-bold text-center text-4xl lg:text-5xl'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
         >
            Projects
         </motion.h2>
         <motion.p
            className='py-4 text-center text-muted-foreground'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
         >
            Showcasing impactful projects and technical achievements.
         </motion.p>

         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8 max-w-7xl mx-auto justify-items-center'>
            {projects.map((project, index) => (
               <motion.article
                  key={project.slug}
                  className='group border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 w-full max-w-md'
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
               >
                  {/* Project Image - Clickable */}
                  <Link
                     href={`/projects/${project.slug}`}
                     className='relative aspect-video overflow-hidden bg-muted block'
                     aria-label={`View ${project.title} case study`}
                  >
                     <Image
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        fill
                        className='object-cover group-hover:scale-105 transition-transform duration-300'
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                     />
                  </Link>

                  {/* Project Content */}
                  <div className='p-6 space-y-4'>
                     <div>
                        <Link href={`/projects/${project.slug}`}>
                           <h3 className='font-bold text-xl group-hover:text-primary transition-colors'>
                              {project.title}
                           </h3>
                        </Link>
                        {/* Metadata */}
                        <div className='flex flex-wrap items-center gap-2 mt-2 text-xs text-muted-foreground'>
                           <span>{project.role}</span>
                           <span>•</span>
                           <span>{project.year}</span>
                           <span>•</span>
                           <span>{project.category}</span>
                        </div>
                     </div>
                     <p className='text-muted-foreground text-sm line-clamp-2'>
                        {project.description}
                     </p>

                     {/* Tech Stack Tags */}
                     <div className='flex flex-wrap gap-2'>
                        {project.tags.map((tag, i) => (
                           <span
                              key={i}
                              className='text-xs px-2 py-1 rounded-full bg-primary/10 text-primary'
                           >
                              {tag}
                           </span>
                        ))}
                     </div>

                     {/* Action Buttons */}
                     <div className='flex flex-col gap-3 pt-2'>
                        <Button size='sm' variant='outline' asChild className='w-full group/btn'>
                           <Link
                              href={`/projects/${project.slug}`}
                              aria-label={`View detailed case study for ${project.title}`}
                           >
                              <FileText className='w-4 h-4' />
                              View Details
                              <ArrowRight className='w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1' />
                           </Link>
                        </Button>
                        <div className='flex gap-3'>
                           <Button size='sm' asChild className='flex-1'>
                              <Link
                                 href={project.liveUrl}
                                 target='_blank'
                                 rel='noopener noreferrer'
                                 aria-label={`Open ${project.title} live demo in new tab`}
                              >
                                 <ExternalLink className='w-4 h-4' />
                                 Live Demo
                              </Link>
                           </Button>
                           <Button size='sm' variant='outline' asChild className='flex-1'>
                              <Link
                                 href={project.githubUrl}
                                 target='_blank'
                                 rel='noopener noreferrer'
                                 aria-label={`View ${project.title} source code on GitHub in new tab`}
                              >
                                 <FaGithub className='w-4 h-4' />
                                 Code
                              </Link>
                           </Button>
                        </div>
                     </div>
                  </div>
               </motion.article>
            ))}
         </div>
      </section>
   )
}

export default Projects