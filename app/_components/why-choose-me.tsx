"use client"
import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { MessageSquare, Clock, Target, Headphones, CheckCircle, TrendingUp } from 'lucide-react'

const workingPrinciples = [
   {
      icon: MessageSquare,
      title: "Clear Communication",
      description: "No technical jargon. I explain everything in simple terms and keep you updated throughout the project."
   },
   {
      icon: Clock,
      title: "Fast Delivery",
      description: "Your website will be ready in 2-4 weeks, not months. Quick turnaround so you can start getting customers faster."
   },
   {
      icon: Target,
      title: "Results-Focused",
      description: "Every design decision is made to help you get more customers—not just to look pretty."
   },
   {
      icon: Headphones,
      title: "Ongoing Support",
      description: "After launch, I'm still here. Updates, changes, and questions—I've got you covered."
   },
   {
      icon: CheckCircle,
      title: "No Hidden Costs",
      description: "You get a clear quote upfront. No surprise fees, no scope creep charges without your approval."
   },
   {
      icon: TrendingUp,
      title: "Built for Growth",
      description: "Your website is built to scale with your business. Add new services, locations, or features easily."
   }
]

const WorkFlow = () => {
   return (
      <section className='py-20' id='how-i-work'>
         <div className='max-w-7xl mx-auto px-4'>
            <motion.h2
               className='font-bold text-center text-4xl lg:text-5xl'
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
            >
               Why Choose Me
            </motion.h2>
            <motion.p
               className='py-4 text-center text-muted-foreground max-w-2xl mx-auto text-lg'
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 0.1 }}
            >
               I make getting a professional website simple, affordable, and stress-free for busy business owners.
            </motion.p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
               {workingPrinciples.map((principle, index) => {
                  const Icon = principle.icon
                  return (
                     <motion.div
                        key={principle.title}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                     >
                        <Card className='h-full hover:shadow-lg transition-all duration-300 hover:border-primary/50 hover:-translate-y-1'>
                           <CardHeader>
                              <div className='w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4'>
                                 <Icon className='w-6 h-6 text-primary' />
                              </div>
                              <CardTitle className='text-xl mb-2'>{principle.title}</CardTitle>
                              <CardDescription className='text-base leading-relaxed'>
                                 {principle.description}
                              </CardDescription>
                           </CardHeader>
                        </Card>
                     </motion.div>
                  )
               })}
            </div>

            <motion.div
               className='mt-16 text-center'
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 0.6 }}
            >
               <p className='text-xl font-medium text-foreground'>
                  &quot;Your success is my success. I don&apos;t just build websites—I help you grow your business.&quot;
               </p>
            </motion.div>
         </div>
      </section>
   )
}

export default WorkFlow
