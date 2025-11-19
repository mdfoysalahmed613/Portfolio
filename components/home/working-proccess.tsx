"use client"
import { motion } from 'framer-motion'
import { MessageSquare, FileSearch, Code2, TestTube, Rocket, HeadphonesIcon } from 'lucide-react'

const processSteps = [
   {
      icon: MessageSquare,
      step: "01",
      title: "Discovery & Consultation",
      description: "We discuss your goals, target audience, and required features to define a clear project scope."
   },
   {
      icon: FileSearch,
      step: "02",
      title: "Planning & Proposal",
      description: "I create a project plan with timelines, milestones, and a transparent cost estimate."
   },
   {
      icon: Code2,
      step: "03",
      title: "Design & Development",
      description: "I design the UI and develop the frontend/backend using clean, modern code. You’ll receive regular updates"
   },
   {
      icon: TestTube,
      step: "04",
      title: "Testing & Refinement",
      description: "I test across devices, fix issues, and refine the website based on your feedback."
   },
   {
      icon: Rocket,
      step: "05",
      title: "Launch & Deployment",
      description: "I deploy your website securely with proper configuration for performance and reliability."
   },
   {
      icon: HeadphonesIcon,
      step: "06",
      title: "Support & Maintenance",
      description: "Ongoing support for updates, fixes, and enhancements after launch."
   }
]

const WorkingProcess = () => {
   return (
      <section className='py-20' id='working-process'>
         <motion.h1
            className='font-bold text-center text-4xl lg:text-5xl'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
         >
            Working Process
         </motion.h1>
         <motion.p
            className='py-4 text-center text-muted-foreground max-w-2xl mx-auto'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
         >
            A transparent and efficient workflow designed to deliver quality results. Here's how we'll work together to bring your project to life.
         </motion.p>

         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12 max-w-7xl mx-auto'>
            {processSteps.map((process, index) => {
               const IconComponent = process.icon
               return (
                  <motion.div
                     key={process.step}
                     className='relative group'
                     initial={{ opacity: 0, y: 50 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                     <div className='bg-card border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 h-full'>
                        {/* Step Number Badge */}
                        <div className='absolute -top-3 -left-3 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg shadow-lg'>
                           {process.step}
                        </div>

                        {/* Icon */}
                        <div className='w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mt-2 group-hover:bg-primary/20 transition-colors duration-300'>
                           <IconComponent className='w-7 h-7 text-primary' />
                        </div>

                        {/* Content */}
                        <h3 className='font-bold text-xl mb-3'>{process.title}</h3>
                        <p className='text-muted-foreground text-sm leading-relaxed'>
                           {process.description}
                        </p>
                     </div>

                     {/* Connector Line (hidden on mobile and last items in rows) */}
                     {index < processSteps.length - 1 && (
                        <div className='hidden lg:block absolute top-16 -right-4 w-8 h-0.5 bg-border group-hover:bg-primary/30 transition-colors duration-300 lg:last:hidden [&:nth-child(3n)]:hidden' />
                     )}
                  </motion.div>
               )
            })}
         </div>

         {/* Call to Action */}
         <motion.div
            className='text-center mt-12'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
         >
            <p className='text-muted-foreground'>
               Ready to start your project?{' '}
               <a href="#contact" className='text-primary font-semibold hover:underline'>
                  Let's talk
               </a>
            </p>
         </motion.div>
      </section>
   )
}

export default WorkingProcess