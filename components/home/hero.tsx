import Image from 'next/image'
import profilePic from '@/public/profile.jpg'
import { Button } from '../ui/button'
import { Download, Phone } from 'lucide-react'
import Link from 'next/link'
const HeroSection = () => {
   return (
      <section className='flex flex-col items-center gap-4 md:gap-6 justify-center my-14 mx-auto max-w-3xl text-center'>
         <Image src={profilePic} alt="Foysal Ahmed - Full Stack Developer Portfolio" className='rounded-full w-[60%] object-cover aspect-square max-w-64 border-8 border-primary' />
         <h1 className='font-bold text-5xl xl:text-6xl'>Md Foysal Ahmed</h1>
         <h3 className='font-bold text-2xl '>Full Stack Developer</h3>
         <p className='text-muted-foreground'>I am Full Stack Developer. This is my portfolio website where you can find all my information.</p>
         <div className='flex gap-5 xl:gap-6'>
            <Button className='hidden md:flex' size={"lg"} asChild>
               <Link href="#projects" >
                  View Projects
               </Link>
            </Button>
            <Button className='md:hidden' size={"lg"} asChild>
               <Link href="/resume.pdf" target="_blank" download={true}>
                  <Download />
                  Resume
               </Link>
            </Button >
            <Button size={"lg"} variant={"outline"} asChild>
               <Link href="#contact" className='flex items-center gap-2' >
                  <Phone />
                  Contact
               </Link>
            </Button>
         </div>
      </section>
   )
}

export default HeroSection