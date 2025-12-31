import { getFeaturedProjects } from '@/lib/projects'
import HeroSection from './_components/hero'
import Skills from './_components/skills'
import Services from './_components/services'
import Projects from './_components/projects'
import WorkFlow from './_components/how-i-work'
import Contact from './_components/contact'
import ScrollToTop from './_components/scroll-to-top'

export default function Page() {
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