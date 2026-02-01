"use client"
import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Globe, ShoppingCart, RefreshCw, Code2 } from 'lucide-react'

const services = [
   {
      icon: Globe,
      title: "Business Website Development",
      description: "Professional websites that establish your online presence and attract customers.",
      features: [
         "Custom, responsive design",
         "SEO optimization",
         "Fast loading speeds",
         "Mobile-first approach"
      ]
   },
   {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Complete online stores that drive sales and streamline your business.",
      features: [
         "Product catalog management",
         "Secure payment integration",
         "Inventory tracking",
         "Order management system"
      ]
   },
   {
      icon: RefreshCw,
      title: "Website Redesign & Performance Fix",
      description: "Transform outdated websites into modern, high-performing platforms.",
      features: [
         "UI/UX modernization",
         "Performance optimization",
         "Core Web Vitals improvement",
         "Accessibility compliance"
      ]
   },
   {
      icon: Code2,
      title: "Custom Web Applications",
      description: "Tailored web solutions built to solve your unique business challenges.",
      features: [
         "Full-stack development",
         "API integration",
         "Database design",
         "Scalable architecture"
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
            Services
         </motion.h1>
         <motion.p
            className='py-4 text-center text-muted-foreground max-w-2xl mx-auto'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
         >
            I provide comprehensive web development services to help your business thrive in the digital world.
         </motion.p>

         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 max-w-7xl mx-auto'>
            {services.map((service, index) => {
               const IconComponent = service.icon
               return (
                  <motion.div
                     key={service.title}
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
                           <CardTitle className='text-xl'>{service.title}</CardTitle>
                           <CardDescription>{service.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                           <ul className='space-y-2'>
                              {service.features.map((feature, idx) => (
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
