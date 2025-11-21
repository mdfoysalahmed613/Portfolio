"use client"
import { Norican } from "next/font/google";
import Link from 'next/link';
import { Download } from 'lucide-react';
import { Button } from '../ui/button';
import Hamburger from './hamburger';
import { motion } from 'framer-motion';
import { navItems } from '@/lib/nav-items';
const norican = Norican({
   weight: ["400"],
   style: ["normal"],
   subsets: ["latin"],
   display: "swap",
});

const Navbar = () => {
   return (
      <header className="flex justify-between items-center py-6 w-full">
         <div className='flex md:gap-10'>
            <motion.div
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.5, ease: "easeOut" }}
            >
               <Link href="/" className={`${norican.className} text-2xl font-bold`}>
                  Foysal Ahmed
               </Link>
            </motion.div>
            <div className="hidden gap-6 md:flex items-center">
               {navItems?.map((item, index) => (
                  <motion.nav
                     key={index}
                     initial={{ opacity: 0, y: -20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                  >
                     <Link
                        href={item.href}
                        className="flex items-center font-medium text-muted-foreground hover:text-muted-foreground/80">
                        {item.title}
                     </Link>
                  </motion.nav>
               ))}
            </div>
         </div>
         <Hamburger />
         <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className='hidden md:flex'
         >
            <Button size='lg' asChild>
               <Link href="/resume.pdf" target="_blank" download={true}>
                  <Download />
                  Resume
               </Link>
            </Button>
         </motion.div>

      </header>
   )
}
export default Navbar