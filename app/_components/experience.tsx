"use client"
import { motion } from 'framer-motion'
import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card'
import ProjectCarousel from '@/components/common/project-carousel'

import coreItLogo from '@/public/experience/core-it/logo.png'
import globalItLogo from '@/public/experience/global-it-solutions/logo.png'

type Role = {
   title: string
   duration: string
   description: string
}

type ExperienceEntry = {
   company: string
   website: string
   logo: StaticImageData
   officeImages: string[]
   roles: Role[]
}

const EXPERIENCE: ExperienceEntry[] = [
   {
      company: 'Core IT',
      website: 'https://www.coreitbd.com/',
      logo: coreItLogo,
      officeImages: [
         '/experience/core-it/office/1st.jpeg',
         '/experience/core-it/office/0297f5bf-f349-4072-90ce-2e3fd501c580.jpeg',
         '/experience/core-it/office/369bd4a3-58d1-460f-af67-952a62fcb5a6.jpeg',
         '/experience/core-it/office/47311d36-b5f7-4d21-ab2e-051f3e05a207.jpeg',
         '/experience/core-it/office/6fabcf9f-9d71-40d4-971d-1b9c20fe9fbc.jpeg',
         '/experience/core-it/office/91f750ea-56dd-4c17-beb0-da1d20c4cda6.jpeg',
         '/experience/core-it/office/c3131351-285e-4177-935c-73d95ef68ccf.jpeg',
         '/experience/core-it/office/db1349bb-0ca0-4146-9f11-60e6ce806d87.jpeg',
      ],
      roles: [
         {
            title: 'Founder & CEO',
            duration: 'June 2026 — Present',
            description: 'Founded and lead Core IT, overseeing company strategy, client delivery, and full stack development projects.',
         },
      ],
   },
   {
      company: 'Global IT Solutions',
      website: 'https://www.globalitsolutions.com.bd/',
      logo: globalItLogo,
      officeImages: [
         '/experience/global-it-solutions/office-1.jpg',
         '/experience/global-it-solutions/office-2.jpg',
         '/experience/global-it-solutions/office-3.jpg',
      ],
      roles: [
         {
            title: 'Project Manager',
            duration: 'January 2026 — June 2026',
            description: 'Promoted to manage project delivery, coordinating development teams and client requirements.',
         },
         {
            title: 'Full Stack Developer',
            duration: '2025 — January 2026',
            description: 'Built and maintained full stack web applications using modern JavaScript frameworks.',
         },
      ],
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

         <div className='max-w-7xl mx-auto mt-12 grid gap-8 md:grid-cols-2'>
            {EXPERIENCE.map((entry, index) => (
               <motion.div
                  key={entry.company}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
               >
                  <Card className='h-full hover:shadow-lg transition-all duration-300 hover:border-primary/50'>
                     <CardHeader>
                        <div className='flex items-center gap-4'>
                           <div className='relative w-20 h-20 shrink-0 rounded-xl border bg-background flex items-center justify-center overflow-hidden p-3'>
                              <Image src={entry.logo} alt={`${entry.company} logo`} className='w-full h-full object-contain' />
                           </div>
                           <div>
                              <CardTitle className='text-xl'>
                                 <Link
                                    href={entry.website}
                                    target='_blank'
                                    rel='noopener'
                                    className='hover:text-primary hover:underline'
                                 >
                                    {entry.company}
                                 </Link>
                              </CardTitle>
                              <Link
                                 href={entry.website}
                                 target='_blank'
                                 rel='noopener'
                                 className='inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline mt-1'
                              >
                                 {entry.website.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                                 <ExternalLink className='w-3 h-3' />
                              </Link>
                           </div>
                        </div>
                     </CardHeader>

                     <CardContent className='flex flex-col gap-6'>
                        <ProjectCarousel
                           images={entry.officeImages}
                           title={`${entry.company} office`}
                           showArrows
                           sizes='(max-width: 768px) 100vw, 40vw'
                        />

                        <div className='relative flex flex-col gap-5'>
                           {entry.roles.length > 1 && (
                              <div className='absolute left-1.5 top-2 bottom-2 w-px bg-border' aria-hidden />
                           )}
                           {entry.roles.map((role) => (
                              <div key={role.title} className={entry.roles.length > 1 ? 'relative pl-6' : ''}>
                                 {entry.roles.length > 1 && (
                                    <div className='absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 border-primary bg-background' aria-hidden />
                                 )}
                                 <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1'>
                                    <h3 className='font-bold'>{role.title}</h3>
                                    <span className='text-sm text-muted-foreground'>{role.duration}</span>
                                 </div>
                                 <p className='text-sm text-muted-foreground mt-1'>{role.description}</p>
                              </div>
                           ))}
                        </div>
                     </CardContent>
                  </Card>
               </motion.div>
            ))}
         </div>
      </section>
   )
}

export default Experience
