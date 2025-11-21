import Footer from '@/components/common/footer'
import Navbar from '@/components/common/nav'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
   return (
      <section>
         <Navbar />
         {children}
         <Footer />
      </section>
   )
}

export default Layout