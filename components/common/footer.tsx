import Link from 'next/link'
import React from 'react'
import { FaLinkedin } from 'react-icons/fa6'
import { SiFacebook, SiGithub } from 'react-icons/si'

const Footer = () => {
  return (
    <div className='flex justify-center gap-6 md:gap-12 py-12'>
      <Link target='_blank' href='https://github.com/mdfoysalahmed613'><SiGithub size={24} /></Link>
      <Link target='_blank' href='https://www.linkedin.com/in/mdfoysalahmed613'><FaLinkedin size={24} /></Link>
      <Link target='_blank' href='https://www.facebook.com/foysal613'><SiFacebook size={24} /></Link>
    </div>
  )
}

export default Footer