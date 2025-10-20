"use client"
import React from 'react'
import { Norican } from "next/font/google";
import Link from 'next/link';
import { motion } from "framer-motion";
const norican = Norican({
   weight: ["400"],
   style: ["normal"],
   subsets: ["latin"],
   display: "swap",
});
// Animation variants for the navigation items
const navItmes = [
   {
      title: "Skills",
      href: "/skills",
   },
   {
      title: "Projects",
      href: "/projects",
   },
   {
      title: "Experience",
      href: "/experience",
   },
   {
      title: "Contact",
      href: "/contact",
   },
]
const navItemVariants = {
   hidden: { opacity: 0, y: -20 },
   visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
         delay: 0.1 * i,
         duration: 0.5,
         ease: "easeOut",
      },
   }),
};
const Navbar = () => {
   return (
      <div className="flex gap-6 md:gap-10">
         <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
         >
         <Link href="/" className="hidden items-center space-x-2 md:flex">
            <span className={`${norican.className} text-2xl`}>
               Foysal Ahmed
            </span>
            </Link>
         </motion.div>
         <nav className="hidden gap-6 md:flex items-center">
            {navItmes?.map((item, index) => (
               <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={navItemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
               >
                  <Link
                     href={item.href}
                     className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm">
                     {item.title}
                  </Link>
               </motion.div>
            ))}
         </nav>
      </div>
   )
}

export default Navbar