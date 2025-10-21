"use client"
import React, { useState } from 'react'
import { Norican } from "next/font/google";
import Link from 'next/link';
import { motion, Variants } from "framer-motion";
import { navItems } from '@/config/nav-items';
import { usePathname } from 'next/dist/client/components/navigation';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
const norican = Norican({
   weight: ["400"],
   style: ["normal"],
   subsets: ["latin"],
   display: "swap",
});

const navItemVariants: Variants = {
   hidden: { opacity: 0, y: -20 },
   visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
         delay: 0.1 * i,
         duration: 0.5,
      },
   }),
};
const Navbar = () => {
   const pathName = usePathname();
   const [showMenu, setShowMenu] = useState(false);
   const isActive = (href: string) => href === pathName;
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
            {navItems?.map((item, index) => (
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
                     className={cn("flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm", isActive(item.href) ? "text-foreground" : "text-foreground/60")}>
                     {item.title}
                  </Link>
               </motion.div>
            ))}
         </nav>
         <motion.button
            className="flex items-center gap-2 md:hidden"
            onClick={() => setShowMenu(!showMenu)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
         >
            {showMenu ? <X /> : <Menu />}
            <span className="font-bold">Menu</span>
         </motion.button>
         {showMenu && (
            <motion.nav
               className="absolute top-20 left-0 w-full bg-background/90 backdrop-blur-md flex flex-col items-center py-4 md:hidden z-50"
               initial={{ opacity: 0, y: -20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.3 }}
            >
               {navItems?.map((item, index) => (
                  <motion.div
                     key={index}
                     custom={index}
                     initial="hidden"
                     animate="visible"
                     variants={navItemVariants}
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     onClick={() => setShowMenu(false)}
                  >
                     <Link
                        href={item.href}
                        className={cn("block w-full px-4 py-2 text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm", isActive(item.href) ? "text-foreground" : "text-foreground/60")}>
                        {item.title}
                     </Link>
                  </motion.div>
               ))}
            </motion.nav>
         )}
      </div>
   )
}

export default Navbar