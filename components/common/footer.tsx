import Link from 'next/link'
import { FaLinkedin } from 'react-icons/fa6'
import { SiFacebook, SiGithub } from 'react-icons/si'
import { MdEmail } from 'react-icons/md'
import { navItems } from '@/lib/nav-items'
const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='border-t border-border/40 mt-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Main Footer Content */}
        <div className='py-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12'>
          {/* Brand Section */}
          <div className='space-y-4'>
            <h1 className='text-lg font-semibold'>Md Foysal Ahmed</h1>
            <h2 className='text-sm text-muted-foreground leading-relaxed'>
              I am a full-stack developer who helps agencies and startups build and maintain production-ready web applications using Next.js and PostgreSQL.
            </h2>
          </div>

          {/* Quick Links */}
          <div className='space-y-4'>
            <h4 className='text-sm font-semibold uppercase tracking-wider text-muted-foreground'>
              Quick Links
            </h4>
            <nav className='flex flex-col space-y-2'>
              {navItems?.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className='text-sm text-foreground/80 hover:text-foreground transition-colors'
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect Section */}
          <div className='space-y-4'>
            <h4 className='text-sm font-semibold uppercase tracking-wider text-muted-foreground'>
              Let's Connect
            </h4>
            <div className='flex gap-4'>
              <Link
                target='_blank'
                href='https://github.com/mdfoysalahmed613'
                className='p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors'
                aria-label='GitHub'
              >
                <SiGithub className='text-primary' size={20} />
              </Link>
              <Link
                target='_blank'
                href='https://www.linkedin.com/in/mdfoysalahmed613'
                className='p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors'
                aria-label='LinkedIn'
              >
                <FaLinkedin className='text-primary' size={20} />
              </Link>
              <Link
                target='_blank'
                href='https://www.facebook.com/foysal613'
                className='p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors'
                aria-label='Facebook'
              >
                <SiFacebook className='text-primary' size={20} />
              </Link>
            </div>
            <p className='text-xs text-muted-foreground pt-2'>
              Available: contract, part-time, long-term • Remote-friendly • GMT+6 (Bangladesh)
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-border/40 py-6'>
          <div className='flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground'>
            <p>© {currentYear} Md Foysal Ahmed. All rights reserved.</p>
            <p className='flex items-center gap-1'>
              Crafted with <span className='text-red-500'>♥</span> using Next.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer