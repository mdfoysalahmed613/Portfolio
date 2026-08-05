"use client"
import { motion } from 'framer-motion'
import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

import coreItLogoLight from '@/public/experience/core-it/logo-light.png'
import coreItLogoDark from '@/public/experience/core-it/logo-dark.png'
import coreItOffice from '@/public/experience/core-it/office/1st.jpeg'
import globalItLogoLight from '@/public/experience/global-it-solutions/logo-light.png'
import globalItLogoDark from '@/public/experience/global-it-solutions/logo-dark.png'

type ExperienceItem = {
   company: string
   role: string
   duration: string
   website: string
   logoLight: StaticImageData
   logoDark: StaticImageData
   photo?: StaticImageData
}

const EXPERIENCE: ExperienceItem[] = [
   {
      company: 'Core IT',
      role: 'Founder & CEO',
      duration: 'June 2026 — Present',
      website: 'https://www.coreitbd.com/',
      logoLight: coreItLogoLight,
      logoDark: coreItLogoDark,
      photo: coreItOffice,
   },
   {
      company: 'Global IT Solutions',
      role: 'Project Manager',
      duration: 'May 2026 — June 2026',
      website: 'https://www.globalitsolutions.com.bd/',
      logoLight: globalItLogoLight,
      logoDark: globalItLogoDark,
   },
   {
      company: 'Global IT Solutions',
      role: 'Full Stack Developer',
      duration: '2025 — May 2026',
      website: 'https://www.globalitsolutions.com.bd/',
      logoLight: globalItLogoLight,
      logoDark: globalItLogoDark,
   },
]

const Experience = () => {
   return (
      <section className='py-20' id='experience'>
         <motion.h2
            className='font-bold text-center text-4xl lg:text-5xl'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
         >
            Experience
         </motion.h2>
         <motion.p
            className='py-4 text-center text-muted-foreground max-w-2xl mx-auto'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
         >
            My professional journey so far.
         </motion.p>

         <div className='max-w-3xl mx-auto mt-12 relative'>
            <div className='absolute left-6 top-2 bottom-2 w-px bg-border' aria-hidden />

            <div className='flex flex-col gap-10'>
               {EXPERIENCE.map((item, index) => (
                  <motion.div
                     key={`${item.company}-${item.role}`}
                     className='relative pl-16'
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                     <div className='absolute left-0 top-0 w-12 h-12 rounded-xl border bg-background flex items-center justify-center overflow-hidden p-2'>
                        <Image src={item.logoLight} alt={`${item.company} logo`} className='dark:hidden w-full h-full object-contain' />
                        <Image src={item.logoDark} alt='' aria-hidden className='hidden dark:block w-full h-full object-contain' />
                     </div>

                     <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1'>
                        <h3 className='font-bold text-xl'>{item.role}</h3>
                        <span className='text-sm text-muted-foreground'>{item.duration}</span>
                     </div>

                     <Link
                        href={item.website}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center gap-1 text-primary font-medium hover:underline'
                     >
                        {item.company}
                        <ExternalLink className='w-3.5 h-3.5' />
                     </Link>

                     {item.photo && (
                        <div className='relative w-full max-w-sm h-40 rounded-lg overflow-hidden mt-4 border'>
                           <Image
                              src={item.photo}
                              alt={`${item.company} office`}
                              fill
                              sizes='(max-width: 640px) 100vw, 384px'
                              className='object-cover'
                           />
                        </div>
                     )}
                  </motion.div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default Experience
