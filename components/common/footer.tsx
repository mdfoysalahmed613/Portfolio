import Link from 'next/link'
import React from 'react'
import { FaLinkedin } from 'react-icons/fa6'
import { SiFacebook, SiGithub, SiGmail } from 'react-icons/si'
import { Button } from '../ui/button'

const Footer = () => {
  return (
    <div className='flex justify-center gap-6 md:gap-12 py-12'>
        <Link target='_blank' href='https://github.com/mdfoysalahmed613'><SiGithub size={24} /></Link>
      <Link target='_blank' href='https://www.linkedin.com/in/mdfoysalahmed613'><FaLinkedin size={24} /></Link>
      <Link target='_blank' href='https://www.facebook.com/foysal613'><SiFacebook size={24} /></Link>
      <Link target='_blank' href='https://mail.google.com/mail/?view=cm&fs=1&to=mdfoysalahmed613@gmail.com'><SiGmail size={24} /></Link>
    </div>
  )
}

export default Footer