import Contact from '@/components/home/contact'
import HeroSection from '@/components/home/hero'
import Projects from '@/components/home/projects'
import Services from '@/components/home/services'
import Skills from '@/components/home/skills'
import WorkingProcess from '@/components/home/working-proccess'
const Page = () => {
  return (
    <>
      <HeroSection />
      <Skills />
      <Services />
      <Projects />
      <WorkingProcess />
      <Contact />
    </>
  )
}

export default Page