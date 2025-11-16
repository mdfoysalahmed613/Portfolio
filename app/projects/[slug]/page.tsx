import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, ExternalLink, Calendar, User, Layers } from 'lucide-react'
import type { Metadata } from 'next'
import { projects } from '@/lib/projects'
import { notFound } from 'next/navigation'
import { FaGithub } from 'react-icons/fa6'

type Props = {
   params: Promise<{ slug: string }>
}

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

export default async function ProjectPage({ params }: Props) {
   const { slug } = await params
   const project = projects.find((p) => p.slug === slug)

   if (!project) {
      notFound()
   }

   return (
      <div className='min-h-screen py-20'>
         <div className='max-w-5xl mx-auto'>
            {/* Back Button */}
            <Button variant='ghost' size='sm' className='mb-8' asChild>
               <Link href='/#projects'>
                  <ArrowLeft className='w-4 h-4 mr-2' />
                  Back to Projects
               </Link>
            </Button>
            {/* Hero Section */}
            <div className='flex flex-col gap-6 mb-12'>
               <h1 className='font-bold text-4xl lg:text-5xl'>{project.title}</h1>
               <p className='text-xl text-muted-foreground'>
                  {project.description}
               </p>

               {/* Meta Info */}
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

               {/* Action Buttons */}
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

            {/* Main Image */}
            <div className='relative aspect-video rounded-lg overflow-hidden mb-12 border'>
               <Image
                  src={project.image}
                  alt={`${project.title} Platform Screenshot`}
                  fill
                  className='object-cover'
                  priority
               />
            </div>

            {/* Content Sections */}
            <div className='flex flex-col gap-12'>
               {/* Overview */}
               <section>
                  <h2 className='text-2xl font-bold mb-4'>Overview</h2>
                  <p className='text-muted-foreground leading-relaxed'>
                     {project.overview}
                  </p>
               </section>

               {/* Tech Stack */}
               <section>
                  <h2 className='text-2xl font-bold mb-6'>Tech Stack</h2>
                     <Card>
                        <CardContent className='p-6'>
                           <h3 className='font-semibold mb-3'>Technologies Used</h3>
                           <div className='flex flex-wrap gap-2'>
                              {project.tags.map((tag, i) => (
                                 <Badge key={i}>{tag}</Badge>
                              ))}
                           </div>
                        </CardContent>
                     </Card>
               </section>

               {/* Problem */}
               <section>
                  <h2 className='text-2xl font-bold mb-4'>The Problem</h2>
                  <p className='text-muted-foreground leading-relaxed'>
                     {project.problem}
                  </p>
               </section>

               {/* Solution */}
               <section>
                  <h2 className='text-2xl font-bold mb-4'>The Solution</h2>
                  <p className='text-muted-foreground leading-relaxed'>
                     {project.solution}
                  </p>
               </section>

               {/* Key Features */}
               <section>
                  <h2 className='text-2xl font-bold mb-4'>Key Features</h2>
                  <div className='grid md:grid-cols-2 gap-4'>
                     {project.features.map((feature, i) => (
                        <Card key={i}>
                           <CardContent className='p-4'>
                              <p className='text-sm'>{feature}</p>
                           </CardContent>
                        </Card>
                     ))}
                  </div>
               </section>

               {/* Results */}
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

               {/* Learnings */}
               <section>
                  <h2 className='text-2xl font-bold mb-4'>What I Learned</h2>
                  <div className='space-y-3'>
                     {project.learnings.map((learning, i) => (
                        <div key={i} className='flex items-start gap-3'>
                           <div className='w-2 h-2 rounded-full bg-primary mt-2' />
                           <p className='text-muted-foreground'>{learning}</p>
                        </div>
                     ))}
                  </div>
               </section>

               {/* CTA */}
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
