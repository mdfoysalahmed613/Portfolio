import { Button } from '../ui/button'
import { Download, Phone } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const HeroSection = () => {
   return (
      <section className='flex flex-col items-center gap-3 md:gap-6 justify-center my-20 text-center'>
         <Image
            src="/profile.webp"
            alt="Foysal Ahmed - Full Stack Developer"
            width={256}
            height={256}
            priority
            fetchPriority='high'
            sizes="(max-width: 768px) 192px, 256px"
            className="rounded-full object-cover aspect-square border-8 border-primary"
         />

         <h1 className='font-bold text-3xl md:text-4xl xl:text-6xl'>Md Foysal Ahmed
         </h1>

         <h2 className='font-bold text-lg md:text-2xl'>Full Stack Developer
         </h2>

         <p className='text-muted-foreground max-w-2xl'>I help agencies and startups build and maintain production-ready web applications using Next.js, PostgreSQL and Supabase.
         </p>

         <div className='flex gap-5 mt-2 xl:gap-6'>
            <Button className='hidden md:flex' size={"lg"} asChild>
               <Link href="https://www.linkedin.com/in/mdfoysalahmed613" target='_blank' >
                  Hire Me
               </Link>
            </Button>
            <Button className='md:hidden' size={"lg"} asChild>
               <Link href="/resume.pdf" target="_blank" download={true} prefetch={false}>
                  <Download />
                  Resume
               </Link>
            </Button >
            <Button size={"lg"} variant={"outline"} asChild>
               <Link href="https://wa.me/+8801581633810" className='flex items-center gap-2' >
                  <Phone />
                  Contact
               </Link>
            </Button>
         </div>
      </section>
   )
}

export default HeroSection