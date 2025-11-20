import Footer from '@/components/common/footer'
import Navbar from '@/components/common/nav'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
   return (
      <div className='overflow-x-hidden'>
         <Navbar />
         {children}
         <Footer />
      </div>
   )
}

export default Layout