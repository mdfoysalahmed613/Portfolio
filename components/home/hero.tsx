'use client'
import Image from 'next/image'
import { Button } from '../ui/button'
import { Download, Phone } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ProfileImage } from '@/assets/images'

const HeroSection = () => {
   return (
      <section className='flex flex-col items-center gap-3 md:gap-6 justify-center my-20 text-center'>
         <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
         >
            <Image src={ProfileImage} alt="Foysal Ahmed - Full Stack Developer Portfolio" className='rounded-full object-cover aspect-square max-w-64 border-8 border-primary' />
         </motion.div>

         <motion.h1 initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className='font-bold text-3xl md:text-4xl xl:text-6xl'>Md Foysal Ahmed
         </motion.h1>
         
         <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            className='font-bold text-lg md:text-2xl'>Full Stack Developer
         </motion.h2>
         
         <motion.p initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
            className='text-muted-foreground max-w-2xl'>Building high-performance web applications with modern technologies.
         </motion.p>
         
         <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }} className='flex gap-5 xl:gap-6'>
            <Button className='hidden md:flex' size={"lg"} asChild>
               <Link href="https://wa.me/+8801581633810" target='_blank' >
                  Hire Me
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
         </motion.div>
      </section>
   )
}

export default HeroSection