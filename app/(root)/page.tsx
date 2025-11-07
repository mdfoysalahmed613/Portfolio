import HeroSection from '@/components/home/hero-section'
import Projects from '@/components/home/projects'
import Skills from '@/components/home/skills'
import React from 'react'
const Page = () => {
  return (
    <div>
      <HeroSection />
      <Skills />
      <Projects />
    </div>
  )
}

export default Page