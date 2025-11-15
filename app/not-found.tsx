import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
   return (
      <div className='flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] text-center px-4'>
         <div className='max-w-md space-y-6'>
            <h1 className='font-bold text-8xl md:text-9xl text-primary'>404</h1>
            <h2 className='font-bold text-3xl md:text-4xl'>Page Not Found</h2>
            <p className='text-muted-foreground text-lg'>
               Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
            </p>
            <div className='flex flex-col sm:flex-row gap-3 justify-center pt-4'>
               <Button size='lg' asChild>
                  <Link href='/'>
                     <Home />
                     Go Home
                  </Link>
               </Button>
               <Button size='lg' variant='outline' asChild>
                  <Link href={'/'} >
                     <ArrowLeft />
                     Go Back
                  </Link>
               </Button>
            </div>
         </div>
      </div>
   )
}
