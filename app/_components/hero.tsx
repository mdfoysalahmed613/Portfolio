import { Button } from '@/components/ui/button'
import { Phone } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const HeroSection = () => {
   return (
      <section className='flex flex-col items-center gap-3 md:gap-6 justify-center my-20 text-center'>
         <Image
            src="/md-foysal-ahmed.jpg"
            alt="Md Foysal Ahmed"
            width={256}
            height={256}
            priority
            fetchPriority='high'
            sizes="(max-width: 768px) 192px, 256px"
            className="rounded-full object-cover aspect-square border-8 border-primary"
         />

         <h1 className='font-bold text-3xl md:text-4xl xl:text-6xl'>Md Foysal Ahmed
         </h1>

         <h2 className='font-bold text-lg md:text-2xl'>Full stack developer
         </h2>

         <p className='text-muted-foreground max-w-2xl'>I help local businesses and service providers attract more customers with fast, modern websites that look great and convert visitors into paying clients.
         </p>

         <div className='flex gap-5 mt-2 xl:gap-6'>
            <Button size={"lg"} asChild>
               <Link href="/projects">
                  View My Work
               </Link>
            </Button>
            <Button size={"lg"} variant={"outline"} asChild>
               <Link href="#contact" className='flex items-center gap-2' >
                  <Phone />
                  Contact
               </Link>
            </Button>
         </div>
      </section>
   )
}

export default HeroSection
