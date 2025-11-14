import { Norican } from "next/font/google";
import Link from 'next/link';
import { Download } from 'lucide-react';
import { Button } from '../ui/button';
import Hamburger from './hamburger';
export const navItems = [
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
   return (
      <nav className="flex justify-between items-center py-6 w-full">
         <div className='flex md:gap-10'>
            <Link href="/" className={`${norican.className} text-2xl font-bold`}>
               Foysal Ahmed
            </Link>
            <div className="hidden gap-6 md:flex items-center">
               {navItems?.map((item, index) => (
                  <div key={index}>
                     <Link
                        href={item.href}
                        className="flex items-center font-medium text-muted-foreground hover:text-muted-foreground/80">
                        {item.title}
                     </Link>
                  </div>
               ))}
            </div>
         </div>
         <Hamburger />
         <Button size='lg' className='hidden md:flex' asChild>
            <Link href="/resume.pdf" target="_blank" download={true}>
               <Download />
               Resume
            </Link>
         </Button>
      </nav>
   )
}
export default Navbar