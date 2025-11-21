"use client"
import { useState } from 'react'
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { navItems } from '@/lib/nav-items';

const Hamburger = () => {
   const [showMenu, setShowMenu] = useState(false);
   return (
      <>
         <button
            className="md:hidden transition-transform duration-200 hover:scale-110 active:scale-95"
            onClick={() => setShowMenu(!showMenu)}
         >
            <div className={showMenu ? "rotate-90 transition-transform duration-300" : "transition-transform duration-300"}>
               {showMenu ? <X /> : <Menu />}
            </div>
         </button>
         {showMenu && (
            <div
               className="absolute top-20 left-0 w-full bg-background/90 backdrop-blur-md flex flex-col items-center py-4 md:hidden z-20">
               {navItems?.map((item, index) => (
                  <div
                     key={index}
                     onClick={() => setShowMenu(false)}
                  >
                     <Link
                        href={item.href}
                        className="block w-full px-4 py-2 text-lg font-medium text-muted-foreground hover:text-muted-foreground/80 sm:text-sm">
                        {item.title}
                     </Link>
                  </div>

               ))}
            </div>
         )}
      </>
   )
}

export default Hamburger