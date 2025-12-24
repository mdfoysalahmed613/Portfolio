"use client"
import { useState } from 'react'
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { navItems } from '@/components/common/nav-items';
import { motion } from 'framer-motion';

const Hamburger = () => {
   const [showMenu, setShowMenu] = useState(false);
   return (
      <>
         <button
            className="md:hidden transition-transform duration-200 hover:scale-110 active:scale-95"
            onClick={() => setShowMenu(!showMenu)}
            aria-label="Toggle Menu"
         >
            <div className={showMenu ? "rotate-90 transition-transform duration-300" : "transition-transform duration-300"}>
               {showMenu ? <X /> : <Menu />}
            </div>
         </button>
         {showMenu && (
            <>
               <div
                  className="fixed inset-0 z-10 md:hidden"
                  onClick={() => setShowMenu(false)}
               />
               <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute top-20 left-0 w-full bg-background/90 backdrop-blur-md flex flex-col items-center py-4 md:hidden z-20">
                  {navItems?.map((item, index) => (
                     <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.1 }}
                        key={index}
                        onClick={() => setShowMenu(false)}
                     >
                        <Link
                           href={item.href}
                           className="block w-full px-4 py-2 text-lg font-medium text-muted-foreground hover:text-muted-foreground/80 sm:text-sm">
                           {item.title}
                        </Link>
                     </motion.div>

                  ))}
               </motion.div>
            </>
         )}
      </>
   )
}

export default Hamburger