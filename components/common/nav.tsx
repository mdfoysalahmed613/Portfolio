"use client"
import { useState } from 'react'
import { Norican } from "next/font/google";
import Link from 'next/link';
import { Download, Menu, X } from 'lucide-react';
import { Button } from '../ui/button';
const navItems = [
   {
      title: "Skills",
      href: "#skills",
   },
   {
      title: "Projects",
      href: "#projects",
   },
   {
      title: "About",
      href: "#about",
   },
   {
      title: "Contact",
      href: "#contact",
   },
];
const norican = Norican({
   weight: ["400"],
   style: ["normal"],
   subsets: ["latin"],
   display: "swap",
});

const Navbar = () => {
   const [showMenu, setShowMenu] = useState(false);
   return (
      <div className="flex justify-between items-center w-full">
         <div className='flex md:gap-10'>
         <Link href="/">
            <span className={`${norican.className} text-2xl`}>
               Foysal Ahmed
            </span>
         </Link>
         <nav className="hidden gap-6 md:flex items-center">
            {navItems?.map((item, index) => (
               <div key={index}>
                  <Link
                     href={item.href}
                     className="flex items-center font-medium transition-colors text-muted-foreground hover:text-muted-foreground/80">
                     {item.title}
                  </Link>
               </div>
            ))}
            </nav>
         </div>
         <button
            className="md:hidden"
            onClick={() => setShowMenu(!showMenu)}
         >
            {showMenu ? <X /> : <Menu />}
         </button>
         <Button size='lg' className='hidden md:flex' asChild>
            <Link href="/resume.pdf" target="_blank" download={true}>
               <Download />
               Resume
            </Link>
         </Button>
         {showMenu && (
            <nav
               className="absolute top-20 left-0 w-full bg-background/90 backdrop-blur-md flex flex-col items-center py-4 md:hidden z-20">
               {navItems?.map((item, index) => (
                  <div
                     key={index}
                     onClick={() => setShowMenu(false)}
                  >
                     <Link
                        href={item.href}
                        className="block w-full px-4 py-2 text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm">
                        {item.title}
                     </Link>
                  </div>

               ))}
               <Button className='my-4' size={"lg"} asChild>
                  <Link href="/resume.pdf" target="_blank" download={true}>
                     <Download />
                     Resume
                  </Link>
               </Button >
            </nav>
         )}
      </div>
   )
}

export default Navbar