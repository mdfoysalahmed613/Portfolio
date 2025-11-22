'use client'

import { useState } from 'react'
import { Button } from '../ui/button'
import { Card, CardContent } from '../ui/card'
import { Mail, MapPin, Send, } from 'lucide-react'
import Link from 'next/link'
import { toast } from 'sonner'
import { FaFacebook, FaGithub, FaLinkedin, FaSquareWhatsapp } from 'react-icons/fa6'
import { motion } from 'framer-motion'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Reset form
    setFormData({ name: '', email: '', message: '' })
    setIsSubmitting(false)
    toast.success('Message sent! I\'ll get back to you soon.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const copyEmail = () => {
    navigator.clipboard.writeText('contact@foysal.me')
    toast.success('Email copied to clipboard!')
  }

  return (
    <section className='py-20 overflow-hidden' id="contact" aria-labelledby="contact-heading">
      <motion.h2
        id="contact-heading"
        className='font-bold text-center text-4xl lg:text-5xl'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Get In Touch
      </motion.h2>
      <motion.p
        className='py-4 text-center text-muted-foreground max-w-2xl mx-auto'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        I'm open for freelance work, collaborations, and internships. Let's work together to create something amazing!
      </motion.p>

      <div className='max-w-5xl mx-auto mt-8 grid md:grid-cols-3 gap-6 px-4'>
        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='md:col-span-1'
        >
          <Card className='h-full'>
            <CardContent className='p-6 flex flex-col gap-6'>
              <div className='flex items-center gap-3'>
                <div className='p-2 rounded-lg bg-primary/10'>
                  <Mail className='w-5 h-5 text-primary' />
                </div>
                <div>
                  <p className='font-semibold text-sm'>Email</p>
                  <button
                    onClick={copyEmail}
                    className='text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer'
                  >
                    contact@foysal.me
                  </button>
                </div>
              </div>

              <div className='flex items-center gap-3'>
                <div className='p-2 rounded-lg bg-primary/10'>
                  <MapPin className='w-5 h-5 text-primary' />
                </div>
                <div>
                  <p className='font-semibold text-sm'>Location</p>
                  <p className='text-sm text-muted-foreground'>Dhaka, Bangladesh</p>
                </div>
              </div>

              <div className='pt-4 border-t'>
                <p className='text-sm font-semibold mb-2'>Response Time</p>
                <p className='text-sm text-muted-foreground'>Usually within 12 hours</p>
              </div>

              <div className='pt-4 border-t'>
                <p className='text-sm font-semibold mb-4'>Follow Me</p>
                <div className='flex gap-5'>
                  <Link
                    href='https://github.com/mdfoysalahmed613'
                    target='_blank'
                    rel='noopener'
                    aria-label='GitHub'
                  >
                    <FaGithub className='w-5 h-5 text-primary' />
                  </Link>
                  <Link
                    href='https://www.linkedin.com/in/mdfoysalahmed613'
                    target='_blank'
                    rel='noopener'
                    aria-label='LinkedIn'
                  >
                    <FaLinkedin className='w-5 h-5 text-primary' />
                  </Link>
                  <Link
                    href='https://www.facebook.com/foysal613'
                    target='_blank'
                    rel='noopener'
                    aria-label='Facebook'
                  >
                    <FaFacebook className='w-5 h-5 text-primary' />
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='md:col-span-2'
        >
          <Card className='h-full'>
            <CardContent className='p-6'>
              <form onSubmit={handleSubmit} className='space-y-4'>
                <div className='grid md:grid-cols-2 gap-4'>
                  <div className='space-y-2'>
                    <label htmlFor='name' className='text-sm font-medium'>
                      Name
                    </label>
                    <input
                      id='name'
                      name='name'
                      type='text'
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className='w-full px-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all'
                      placeholder='Your name'
                    />
                  </div>

                  <div className='space-y-2'>
                    <label htmlFor='email' className='text-sm font-medium'>
                      Email
                    </label>
                    <input
                      id='email'
                      name='email'
                      type='email'
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className='w-full px-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all'
                      placeholder='your.email@example.com'
                    />
                  </div>
                </div>

                <div className='space-y-2'>
                  <label htmlFor='message' className='text-sm font-medium'>
                    Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className='w-full px-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none'
                    placeholder='Tell me about your project or inquiry...'
                  />
                </div>

                <Button
                  type='submit'
                  size='lg'
                  disabled={isSubmitting}
                  className='w-full md:w-auto'
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      <Send className='w-4 h-4' />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact