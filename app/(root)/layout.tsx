import Footer from "@/components/common/footer";
import Navbar from "@/components/common/nav";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
   return (
      <div className="flex min-h-screen flex-col max-w-[1400px] mx-auto w-full px-4 sm:px-6 lg:px-8">
         <header className="flex h-20 items-center justify-between py-6">
            <Navbar />
            
         </header>
         {children}
         <Footer />
      </div>
   );
}
