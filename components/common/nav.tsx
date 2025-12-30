import { Yellowtail } from "next/font/google";
import Link from 'next/link';
import { Download } from 'lucide-react';
import { Button } from '../ui/button';
import Hamburger from './hamburger';
import { navItems } from '@/components/common/nav-items';

const yellowtail = Yellowtail({
   weight: ["400"],
   style: ["normal"],
   subsets: ["latin"],
});

const Navbar = () => {
   return (
      <header className="flex justify-between items-center py-6 w-full">
         <div className='flex md:gap-10'>
            <Link href="/" className={`${yellowtail.className} text-2xl lg:text-3xl font-bold`}>
               Md Foysal Ahmed
            </Link>
            <nav className="hidden gap-6 md:flex items-center">
               {navItems?.map((item, index) => (
                  <Link
                     key={index}
                     href={item.href}
                     className="flex items-center font-medium text-muted-foreground text-sm hover:text-muted-foreground/80">
                     {item.title}
                  </Link>
               ))}
            </nav>
         </div>
         <Hamburger />
         <Button size='lg' className="hidden md:flex" asChild>
            <Link href="/resume.pdf" target="_blank" download={true} prefetch={false}>
               <Download />
               Resume
            </Link>
         </Button>
      </header>
   )
}
export default Navbar