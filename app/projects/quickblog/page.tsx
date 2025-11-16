import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, ExternalLink, Github, Calendar, User, Layers } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
   title: 'QuickBlog - Modern Blogging Platform | Foysal Ahmed',
   description: 'A modern blogging platform built with Next.js and MongoDB, featuring real-time updates, user authentication, and a beautiful interface. Case study by Foysal Ahmed.',
   openGraph: {
      title: 'QuickBlog - Modern Blogging Platform',
      description: 'A modern blogging platform built with Next.js and MongoDB, featuring real-time updates and user authentication.',
      images: ['/QuickBlog.png'],
      type: 'article',
   },
}

export default function QuickBlogProject() {
   return (
      <div className='min-h-screen py-20'>
         <div className='max-w-5xl mx-auto'>
            {/* Back Button */}
            <Link href='/#projects'>
               <Button variant='ghost' size='sm' className='mb-8'>
                  <ArrowLeft className='w-4 h-4 mr-2' />
                  Back to Projects
               </Button>
            </Link>

            {/* Hero Section */}
            <div className='space-y-6 mb-12'>
               <h1 className='font-bold text-4xl lg:text-5xl'>QuickBlog</h1>
               <p className='text-xl text-muted-foreground'>
                  A modern blogging platform built with Next.js and MongoDB, featuring real-time updates and user authentication.
               </p>

               {/* Meta Info */}
               <div className='flex flex-wrap gap-4 text-sm text-muted-foreground'>
                  <div className='flex items-center gap-2'>
                     <Calendar className='w-4 h-4' />
                     <span>2 months</span>
                  </div>
                  <div className='flex items-center gap-2'>
                     <User className='w-4 h-4' />
                     <span>Full Stack Developer</span>
                  </div>
                  <div className='flex items-center gap-2'>
                     <Layers className='w-4 h-4' />
                     <span>Full Stack</span>
                  </div>
               </div>

               {/* Action Buttons */}
               <div className='flex gap-4'>
                  <Button size='lg' asChild>
                     <Link href='https://quickblog.foysal.me' target='_blank' rel='noopener noreferrer'>
                        <ExternalLink className='w-4 h-4 mr-2' />
                        View Live Site
                     </Link>
                  </Button>
                  <Button size='lg' variant='outline' asChild>
                     <Link href='https://github.com/mdfoysalahmed613/quickblog' target='_blank' rel='noopener noreferrer'>
                        <Github className='w-4 h-4 mr-2' />
                        View Code
                     </Link>
                  </Button>
               </div>
            </div>

            {/* Main Image */}
            <div className='relative aspect-video rounded-lg overflow-hidden mb-12 border'>
               <Image
                  src='/QuickBlog.png'
                  alt='QuickBlog Platform Screenshot'
                  fill
                  className='object-cover'
                  priority
               />
            </div>

            {/* Content Sections */}
            <div className='space-y-12'>
               {/* Overview */}
               <section>
                  <h2 className='text-2xl font-bold mb-4'>Overview</h2>
                  <p className='text-muted-foreground leading-relaxed'>
                     QuickBlog is a full-featured blogging platform that allows users to create, edit, and publish blog posts with a modern, intuitive interface. Built with performance and user experience in mind, it leverages the power of Next.js 15 for server-side rendering and optimal performance. The platform features a clean, minimalist design that puts content first while providing all the tools needed for effective blogging.
                  </p>
               </section>

               {/* Tech Stack */}
               <section>
                  <h2 className='text-2xl font-bold mb-6'>Tech Stack</h2>
                  <div className='grid md:grid-cols-2 gap-6'>
                     <Card>
                        <CardContent className='p-6'>
                           <h3 className='font-semibold mb-3'>Frontend</h3>
                           <div className='flex flex-wrap gap-2'>
                              <Badge>Next.js 15</Badge>
                              <Badge>React</Badge>
                              <Badge>TypeScript</Badge>
                              <Badge>Tailwind CSS</Badge>
                              <Badge>Shadcn UI</Badge>
                           </div>
                        </CardContent>
                     </Card>
                     <Card>
                        <CardContent className='p-6'>
                           <h3 className='font-semibold mb-3'>Backend & Database</h3>
                           <div className='flex flex-wrap gap-2'>
                              <Badge>Next.js API Routes</Badge>
                              <Badge>MongoDB</Badge>
                              <Badge>Mongoose</Badge>
                           </div>
                        </CardContent>
                     </Card>
                  </div>
               </section>

               {/* Problem */}
               <section>
                  <h2 className='text-2xl font-bold mb-4'>The Problem</h2>
                  <p className='text-muted-foreground leading-relaxed'>
                     Many existing blogging platforms are either too complex for beginners or lack modern features and performance optimization. There was a need for a fast, user-friendly blogging solution that provides real-time capabilities, a clean interface, and excellent SEO support without overwhelming users with unnecessary features.
                  </p>
               </section>

               {/* Solution */}
               <section>
                  <h2 className='text-2xl font-bold mb-4'>The Solution</h2>
                  <p className='text-muted-foreground leading-relaxed mb-6'>
                     I developed QuickBlog using Next.js 15 for optimal performance with server-side rendering and MongoDB for flexible data storage. The platform implements real-time features for instant content updates and provides an intuitive dashboard for content management. The solution focuses on simplicity without sacrificing power, making it easy for anyone to start blogging while offering advanced features for experienced users.
                  </p>
               </section>

               {/* Key Features */}
               <section>
                  <h2 className='text-2xl font-bold mb-4'>Key Features</h2>
                  <div className='grid md:grid-cols-2 gap-4'>
                     {[
                        'User authentication and authorization with secure session management',
                        'Rich text editor for creating and formatting blog posts',
                        'Real-time content updates and notifications',
                        'Responsive design that works seamlessly across all devices',
                        'SEO-optimized with meta tags and dynamic sitemap generation',
                        'Comment system for reader engagement',
                        'Category and tag-based organization',
                        'Search functionality for easy content discovery',
                        'Admin dashboard for content management'
                     ].map((feature, i) => (
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
                     <div className='flex items-start gap-3'>
                        <div className='w-2 h-2 rounded-full bg-primary mt-2' />
                        <p className='text-muted-foreground'>Achieved 95+ Lighthouse performance score</p>
                     </div>
                     <div className='flex items-start gap-3'>
                        <div className='w-2 h-2 rounded-full bg-primary mt-2' />
                        <p className='text-muted-foreground'>Successfully deployed and serving real users</p>
                     </div>
                     <div className='flex items-start gap-3'>
                        <div className='w-2 h-2 rounded-full bg-primary mt-2' />
                        <p className='text-muted-foreground'>Fast page load times with optimized images and code splitting</p>
                     </div>
                     <div className='flex items-start gap-3'>
                        <div className='w-2 h-2 rounded-full bg-primary mt-2' />
                        <p className='text-muted-foreground'>Positive user feedback on interface and usability</p>
                     </div>
                  </div>
               </section>

               {/* Learnings */}
               <section>
                  <h2 className='text-2xl font-bold mb-4'>What I Learned</h2>
                  <div className='space-y-3'>
                     <div className='flex items-start gap-3'>
                        <div className='w-2 h-2 rounded-full bg-primary mt-2' />
                        <p className='text-muted-foreground'>Advanced Next.js 15 features including App Router and Server Components</p>
                     </div>
                     <div className='flex items-start gap-3'>
                        <div className='w-2 h-2 rounded-full bg-primary mt-2' />
                        <p className='text-muted-foreground'>MongoDB schema design and optimization for blog content</p>
                     </div>
                     <div className='flex items-start gap-3'>
                        <div className='w-2 h-2 rounded-full bg-primary mt-2' />
                        <p className='text-muted-foreground'>Implementing real-time features with efficient polling strategies</p>
                     </div>
                     <div className='flex items-start gap-3'>
                        <div className='w-2 h-2 rounded-full bg-primary mt-2' />
                        <p className='text-muted-foreground'>Best practices for SEO in modern web applications</p>
                     </div>
                     <div className='flex items-start gap-3'>
                        <div className='w-2 h-2 rounded-full bg-primary mt-2' />
                        <p className='text-muted-foreground'>Performance optimization techniques for large content platforms</p>
                     </div>
                  </div>
               </section>

               {/* CTA */}
               <section className='border-t pt-12'>
                  <div className='text-center space-y-6'>
                     <h2 className='text-2xl font-bold'>Check It Out</h2>
                     <p className='text-muted-foreground max-w-2xl mx-auto'>
                        Visit the live site to see QuickBlog in action, or explore the source code on GitHub to see how it's built.
                     </p>
                     <div className='flex justify-center gap-4'>
                        <Button size='lg' asChild>
                           <Link href='https://quickblog.foysal.me' target='_blank' rel='noopener noreferrer'>
                              <ExternalLink className='w-4 h-4 mr-2' />
                              Visit Live Site
                           </Link>
                        </Button>
                        <Button size='lg' variant='outline' asChild>
                           <Link href='https://github.com/mdfoysalahmed613/quickblog' target='_blank' rel='noopener noreferrer'>
                              <Github className='w-4 h-4 mr-2' />
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
