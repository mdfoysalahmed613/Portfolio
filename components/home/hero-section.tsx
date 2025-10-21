import Image from 'next/image'
import React from 'react'
import profilePic from '@/public/profile.jpg'
import { Button } from '../ui/button'
import { ChevronDown, Download, Phone } from 'lucide-react'
import Link from 'next/link'
const HeroSection = () => {
   return (
      <section className='flex flex-col items-center justify-center min-h-[calc(100vh-6rem)] text-center'>
         <div className='max-w-3xl flex flex-col items-center gap-4 md:gap-6'>
            <Image src={profilePic} alt="Foysal Ahmed - Full Stack Developer Portfolio" className='rounded-full w-[60%] object-cover aspect-square max-w-64 border-8 border-primary' />
            <h1 className='font-bold text-4xl md:text-5xl xl:text-6xl'>Md Foysal Ahmed</h1>
            <h3 className='font-bold text-lg md:text-2xl '>Full Stack Developer</h3>
            <p className='text-muted-foreground md:text-base text-sm'>I am Full Stack Developer. This is my portfolio website where you can find my projects and contact information.</p>
            <div className='flex gap-3 md:gap-5 xl:gap-6'>
               <Link href="/resume.pdf" download={true}>
                  <Button size='lg'>
                     <Download />
                     Download Resume
                  </Button>
               </Link>
               
               <Button size='lg' variant='outline'>
                  <Phone />
                  Contact
               </Button>
            </div>
         </div>
         <Link href="#skills" aria-label="Scroll Down to Skills Section">
            <ChevronDown className='animate-bounce mt-20' />
         </Link>  
      </section>
   )
}

export default HeroSection