"use client"
import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../ui/card'
import { Button } from '../ui/button'
import { Check, Code, Layers, Globe, Rocket } from 'lucide-react'
import Link from 'next/link'

const services = [
   {
      icon: Code,
      title: "Basic Landing Page",
      description: "Perfect for getting your presence online quickly with a clean, single-page design.",
      price: "$50–150",
      features: [
         "Single page design",
         "Responsive layout",
         "Basic SEO optimization",
         "Contact form integration",
         "Fast delivery (3-5 days)"
      ]
   },
   {
      icon: Layers,
      title: "Portfolio Website",
      description: "Showcase your work with a beautiful, multi-page portfolio that stands out.",
      price: "$100–250",
      features: [
         "Multiple pages",
         "Project showcase section",
         "About & contact pages",
         "Smooth animations",
         "Mobile optimized",
         "CMS integration option"
      ]
   },
   {
      icon: Globe,
      title: "Business Website",
      description: "Professional multi-page website for businesses looking to establish credibility.",
      price: "$200–400",
      features: [
         "3-5 custom pages",
         "Advanced SEO",
         "Analytics integration",
         "Blog/News section",
         "Contact forms",
         "Social media integration",
         "Performance optimized"
      ]
   },
   {
      icon: Rocket,
      title: "Full Web Application",
      description: "Complete custom web applications tailored to your specific business needs.",
      price: "Custom Pricing",
      features: [
         "Custom functionality",
         "Database integration",
         "User authentication",
         "Admin dashboard",
         "API development",
         "Scalable architecture",
         "Ongoing support available"
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
            Offering a range of web development services to help bring your ideas to life, from simple landing pages to complex web applications.
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
                     <Card className='h-full shadow-md hover:shadow-xl transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 border-2'>
                        <CardHeader>
                           <div className='w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2'>
                              <IconComponent className='w-6 h-6 text-primary' />
                           </div>
                           <CardTitle className='text-xl'>{service.title}</CardTitle>
                           <CardDescription>{service.description}</CardDescription>
                        </CardHeader>
                        <CardContent className='flex-grow'>
                           <div className='mb-4'>
                              <span className='text-3xl font-bold text-primary'>{service.price}</span>
                           </div>
                           <ul className='space-y-2'>
                              {service.features.map((feature, idx) => (
                                 <li key={idx} className='flex items-start gap-2 text-sm'>
                                    <Check className='w-4 h-4 text-primary mt-0.5 flex-shrink-0' />
                                    <span>{feature}</span>
                                 </li>
                              ))}
                           </ul>
                        </CardContent>
                        <CardFooter>
                           <Button asChild className='w-full' variant={index === 3 ? 'default' : 'outline'}>
                              <Link href="#contact">Get Started</Link>
                           </Button>
                        </CardFooter>
                     </Card>
                  </motion.div>
               )
            })}
         </div>
      </section>
   )
}

export default Services