"use client"
import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'

const ScrollToTop = () => {
   const [isVisible, setIsVisible] = useState(false)

   useEffect(() => {
      const toggleVisibility = () => {
         // Show button when page is scrolled down 300px
         if (window.scrollY > 300) {
            setIsVisible(true)
         } else {
            setIsVisible(false)
         }
      }

      window.addEventListener('scroll', toggleVisibility)

      return () => {
         window.removeEventListener('scroll', toggleVisibility)
      }
   }, [])

   const scrollToTop = () => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth'
      })
   }

   return (
      <AnimatePresence>
         {isVisible && (
            <motion.div
               initial={{ opacity: 0, scale: 0.8, y: 20 }}
               animate={{ opacity: 1, scale: 1, y: 0 }}
               exit={{ opacity: 0, scale: 0.8, y: 20 }}
               transition={{ duration: 0.3 }}
               className='fixed bottom-8 right-8 z-50'
            >
               <Button
                  onClick={scrollToTop}
                  size="icon-lg"
                  className='shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1'
                  aria-label='Scroll to top'
               >
                  <ArrowUp className='w-5 h-5' />
               </Button>
            </motion.div>
         )}
      </AnimatePresence>
   )
}

export default ScrollToTop
