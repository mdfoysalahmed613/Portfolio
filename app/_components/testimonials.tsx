"use client"
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Quote, Star } from 'lucide-react'

const testimonials = [
   {
      name: "Soyaib Evan",
      role: "Founder, Moto Buddy",
      content: "Working with this developer was an absolute pleasure. They delivered a stunning website that exceeded our expectations and significantly improved our online presence.",
      rating: 5,
      image: "/testimonials/soyaib.png"
   },
]

const Testimonials = () => {
   return (
      <section className='py-20' id='testimonials'>
         <motion.h1
            className='font-bold text-center text-4xl lg:text-5xl'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
         >
            What Clients Say
         </motion.h1>
         <motion.p
            className='py-4 text-center text-muted-foreground max-w-2xl mx-auto'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
         >
            Don&apos;t just take my word for it—hear from the clients who have experienced the results firsthand.
         </motion.p>

         <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-5xl mx-auto'>
            {testimonials.map((testimonial, index) => (
               <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
               >
                  <Card className='h-full hover:shadow-lg transition-all duration-300 hover:border-primary/50'>
                     <CardContent className='pt-6'>
                        <div className='flex items-start gap-4'>
                           <div className='flex-shrink-0'>
                              <Quote className='w-8 h-8 text-primary/30' />
                           </div>
                           <div className='flex-1'>
                              <p className='text-muted-foreground mb-4 italic'>
                                 &quot;{testimonial.content}&quot;
                              </p>
                              <div className='flex items-center gap-1 mb-3'>
                                 {Array.from({ length: testimonial.rating }).map((_, i) => (
                                    <Star key={i} className='w-4 h-4 fill-yellow-400 text-yellow-400' />
                                 ))}
                              </div>
                              <div className='flex items-center gap-3'>
                                 <div className='w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center'>
                                    <span className='text-primary font-semibold text-sm'>
                                       {testimonial.name.split(' ').map(n => n[0]).join('')}
                                    </span>
                                 </div>
                                 <div>
                                    <p className='font-semibold text-sm'>{testimonial.name}</p>
                                    <p className='text-xs text-muted-foreground'>{testimonial.role}</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </CardContent>
                  </Card>
               </motion.div>
            ))}
         </div>
      </section>
   )
}

export default Testimonials
