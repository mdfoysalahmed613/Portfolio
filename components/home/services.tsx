"use client"
import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card'
import { Code, LayoutDashboard, Database, Wrench } from 'lucide-react'

const capabilities = [
   {
      icon: Code,
      title: "Frontend & UI Development",
      description: "Modern, performant interfaces built with best practices.",
      features: [
         "Next.js (App Router)",
         "Tailwind, Shadcn UI",
         "Responsive, accessible UI",
         "Performance optimization"
      ]
   },
   {
      icon: LayoutDashboard,
      title: "Admin Dashboards & Internal Tools",
      description: "Efficient internal systems for your operations teams.",
      features: [
         "Role-based access",
         "CRUD systems",
         "Data tables & forms",
         "Clean UX for operations teams"
      ]
   },
   {
      icon: Database,
      title: "Backend & Integrations",
      description: "Robust data layer and third-party integrations.",
      features: [
         "PostgreSQL schema design",
         "Supabase auth & RLS",
         "REST / API integrations"
      ]
   },
   {
      icon: Wrench,
      title: "Ongoing Support",
      description: "Long-term partnership for continuous improvement.",
      features: [
         "Feature development",
         "Bug fixes",
         "Refactoring",
         "Long-term maintenance"
      ]
   }
]

const Services = () => {
   return (
      <section className='py-20' id='services'>
         <motion.h1
            className='font-bold text-center text-4xl lg:text-5xl'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
         >
            How I Support Agencies
         </motion.h1>
         <motion.p
            className='py-4 text-center text-muted-foreground max-w-2xl mx-auto'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
         >
            I help agencies deliver client projects with reliable full-stack development expertise and ongoing technical support.
         </motion.p>

         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 max-w-7xl mx-auto'>
            {capabilities.map((capability, index) => {
               const IconComponent = capability.icon
               return (
                  <motion.div
                     key={capability.title}
                     initial={{ opacity: 0, y: 50 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                     <Card className='h-full hover:shadow-lg transition-all duration-300 hover:border-primary/50 hover:-translate-y-1'>
                        <CardHeader>
                           <div className='w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2'>
                              <IconComponent className='w-6 h-6 text-primary' />
                           </div>
                           <CardTitle className='text-xl'>{capability.title}</CardTitle>
                           <CardDescription>{capability.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                           <ul className='space-y-2'>
                              {capability.features.map((feature, idx) => (
                                 <li key={idx} className='flex items-start gap-2 text-sm text-muted-foreground'>
                                    <span className='text-primary mt-0.5'>•</span>
                                    <span>{feature}</span>
                                 </li>
                              ))}
                           </ul>
                        </CardContent>
                     </Card>
                  </motion.div>
               )
            })}
         </div>
      </section>
   )
}

export default Services