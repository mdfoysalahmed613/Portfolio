import ScrollToTop from '@/components/common/scroll-to-top'
import Contact from '@/components/home/contact'
import HeroSection from '@/components/home/hero'
import WorkFlow from '@/components/home/how-i-work'
import Projects from '@/components/home/projects'
import Services from '@/components/home/services'
import Skills from '@/components/home/skills'
import { getFeaturedProjects } from '@/lib/projects'

const Page = () => {
  const projects = getFeaturedProjects()

  return (
    <main>
      <HeroSection />
      <Skills />
      <Services />
      <Projects projects={projects} />
      <WorkFlow />
      <Contact />
      <ScrollToTop />
    </main>
  )
}

export default Page