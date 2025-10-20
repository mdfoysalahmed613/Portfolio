import { Button } from "@/components/ui/button";
import Navbar from "@/components/common/nav-bar";
import { ThemeToggle } from "@/components/common/theme-toggle";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
   return (
      <div className="flex min-h-screen flex-col max-w-[1400px] mx-auto w-full px-4 sm:px-6 lg:px-8">
         <nav className="flex h-20 items-center justify-between py-6">
            <Navbar />
            <div className="flex items-center gap-5">
               <Button variant="ghost">
                  <Link
                     href={"https://github.com/mdfoysalahmed613"}
                     target="_blank">
                     <FaGithub className="w-5 h-5" /> 
                  </Link>
               </Button>
               <ThemeToggle />
            </div>
         </nav>
        {children}
      </div>
   );
}
