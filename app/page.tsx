import ScrollToTop from '@/components/common/scroll-to-top'
import Contact from '@/components/home/contact'
import HeroSection from '@/components/home/hero'
import Projects from '@/components/home/projects'
import Services from '@/components/home/services'
import Skills from '@/components/home/skills'
import WorkingProcess from '@/components/home/work-flow'
const Page = () => {
  return (
    <main>
      <HeroSection />
      <Skills />
      <Services />
      {/* <Projects /> */}
      <WorkingProcess />
      <Contact />
      <ScrollToTop />
    </main>
  )
}

export default Page