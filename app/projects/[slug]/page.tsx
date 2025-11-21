import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, ExternalLink, Calendar, User, Layers } from 'lucide-react'
import type { Metadata } from 'next'
import { projects } from '@/lib/projects'
import { notFound } from 'next/navigation'
import { FaGithub } from 'react-icons/fa6'


export async function generateStaticParams() {
   return projects.map((project) => ({
      slug: project.slug,
   }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
   const { slug } = await params
   const project = projects.find((p) => p.slug === slug)

   if (!project) {
      return {
         title: 'Project Not Found',
      }
   }
   return {
      title: `${project.title} - ${project.category} | Foysal Ahmed`,
      description: project.description,
      openGraph: {
         title: `${project.title} - ${project.category}`,
         description: project.description,
         images: [project.image],
         type: 'article',
      },
   }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string}> }) {
   const { slug } = await params
   const project = projects.find((p) => p.slug === slug)

   if (!project) {
      notFound()
   }

   return (
      <div className='min-h-screen pb-20 pt-10'>
         <div className='max-w-5xl mx-auto'>
            <Button variant='ghost' size='sm' className='mb-8' asChild>
               <Link href='/#projects'>
                  <ArrowLeft className='w-4 h-4 mr-2' />
                  Back to Projects
               </Link>
            </Button>
            <div className='flex flex-col gap-6 mb-12'>
               <h1 className='font-bold text-4xl lg:text-5xl'>{project.title}</h1>
               <p className='text-xl text-muted-foreground'>
                  {project.description}
               </p>
               <div className='flex flex-wrap gap-4 text-sm text-muted-foreground'>
                  <div className='flex items-center gap-2'>
                     <Calendar className='w-4 h-4' />
                     <span>{project.year}</span>
                  </div>
                  <div className='flex items-center gap-2'>
                     <User className='w-4 h-4' />
                     <span>{project.role}</span>
                  </div>
                  <div className='flex items-center gap-2'>
                     <Layers className='w-4 h-4' />
                     <span>{project.category}</span>
                  </div>
               </div>
               <div className='flex gap-4'>
                  <Button size='lg' asChild>
                     <Link href={project.liveUrl} target='_blank' rel='noopener noreferrer'>
                        <ExternalLink className='w-4 h-4 mr-2' />
                        View Live Site
                     </Link>
                  </Button>
                  <Button size='lg' variant='outline' asChild>
                     <Link href={project.githubUrl} target='_blank' rel='noopener noreferrer'>
                        <FaGithub className='w-4 h-4 mr-2' />
                        View Code
                     </Link>
                  </Button>
               </div>
            </div>
            <div className='relative aspect-video rounded-lg overflow-hidden mb-12 border'>
               <Image
                  src={project.image}
                  alt={`${project.title} Platform Screenshot`}
                  fill
                  className='object-cover'
                  priority
               />
            </div>
            <div className='flex flex-col gap-12'>
               <section>
                  <h2 className='text-2xl font-bold mb-4'>Overview</h2>
                  <p className='text-muted-foreground leading-relaxed'>
                     {project.overview}
                  </p>
               </section>
               <section>
                  <h2 className='text-2xl font-bold mb-6'>Tech Stack</h2>
                  <div className='flex flex-wrap gap-3'>
                     {project.techstack.map((techstack, i) => (
                        <Badge
                           key={i}
                           variant="secondary"
                           className='px-4 py-2 text-black text-sm font-medium'
                        >
                           {techstack}
                        </Badge>
                     ))}
                  </div>
               </section>
               <section>
                  <h2 className='text-2xl font-bold mb-4'>Key Features</h2>
                  <div className='grid md:grid-cols-2 gap-4'>
                     {project.features.map((feature, i) => (
                        <div key={i} className='flex items-start gap-3'>
                           <div className='w-2 h-2 rounded-full bg-primary mt-2' />
                           <p>{feature}</p>
                        </div>
                     ))}
                  </div>
               </section>
               <section>
                  <h2 className='text-2xl font-bold mb-4'>Challenges & Solutions</h2>
                  <p className='text-muted-foreground leading-relaxed'>
                     {project.challengesAndSolutions}
                  </p>
               </section>
               <section>
                  <h2 className='text-2xl font-bold mb-4'>Results & Impact</h2>
                  <div className='space-y-3'>
                     {project.results.map((result, i) => (
                        <div key={i} className='flex items-start gap-3'>
                           <div className='w-2 h-2 rounded-full bg-primary mt-2' />
                           <p>{result}</p>
                        </div>
                     ))}
                  </div>
               </section>
               <section>
                  <h2 className='text-2xl font-bold mb-4'>What I Learned</h2>
                  <div className='space-y-3'>
                     {project.learnings.map((learning, i) => (
                        <div key={i} className='flex items-start gap-3'>
                           <div className='w-2 h-2 rounded-full bg-primary mt-2' />
                           <p>{learning}</p>
                        </div>
                     ))}
                  </div>
               </section>
               <section className='border-t pt-12'>
                  <div className='text-center space-y-6'>
                     <h2 className='text-2xl font-bold'>Check It Out</h2>
                     <p className='text-muted-foreground max-w-2xl mx-auto'>
                        Visit the live site to see {project.title} in action, or explore the source code on GitHub to see how it's built.
                     </p>
                     <div className='flex justify-center gap-4'>
                        <Button size='lg' asChild>
                           <Link href={project.liveUrl} target='_blank' rel='noopener noreferrer'>
                              <ExternalLink className='w-4 h-4 mr-2' />
                              Visit Live Site
                           </Link>
                        </Button>
                        <Button size='lg' variant='outline' asChild>
                           <Link href={project.githubUrl} target='_blank' rel='noopener noreferrer'>
                              <FaGithub className='w-4 h-4 mr-2' />
                              View on GitHub
                           </Link>
                        </Button>
                     </div>
                  </div>
               </section>
            </div>
         </div>
      </div>
   )
}
