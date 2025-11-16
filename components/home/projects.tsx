import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'
import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'

const Projects = () => {
   const projects = [
      {
         title: 'QuickBlog',
         description: 'A modern blogging platform built with Next.js and MongoDB, featuring real-time updates and user authentication.',
         image: '/QuickBlog.png',
         liveUrl: 'https://quickblog.foysal.me',
         githubUrl: 'https://github.com/mdfoysalahmed613/quickblog',
         tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB']
      },
   ]

   return (
      <section className='my-20' id="projects" aria-labelledby="projects-heading">
         <h2 id="projects-heading" className='font-bold text-center text-4xl lg:text-5xl'>Projects</h2>
         <p className='py-4 text-center text-muted-foreground'>Showcasing impactful projects and technical achievements.</p>

         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 max-w-7xl mx-auto'>
            {projects.map((project) => (
               <article
                  key={project.title}
                  className='group border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300'
               >
                  {/* Project Image */}
                  <div className='relative aspect-video overflow-hidden bg-muted'>
                     <Image
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        fill
                        className='object-cover group-hover:scale-105 transition-transform duration-300'
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                     />
                  </div>

                  {/* Project Content */}
                  <div className='p-6 space-y-4'>
                     <h3 className='font-bold text-xl'>{project.title}</h3>
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
                        <Button size='sm' variant='outline' asChild className='w-full'>
                           <Link href={`/projects/${project.title.toLowerCase()}`}>
                              View Case Study
                           </Link>
                        </Button>
                        <div className='flex gap-3'>
                           <Button size='sm' asChild className='flex-1'>
                              <Link href={project.liveUrl} target='_blank' rel='noopener noreferrer'>
                                 <ExternalLink className='w-4 h-4' />
                                 Live Demo
                              </Link>
                           </Button>
                           <Button size='sm' variant='outline' asChild className='flex-1'>
                              <Link href={project.githubUrl} target='_blank' rel='noopener noreferrer'>
                                 <FaGithub className='w-4 h-4' />
                                 Code
                              </Link>
                           </Button>
                        </div>
                     </div>
                  </div>
               </article>
            ))}
         </div>
      </section>
   )
}

export default Projects