import { getFeaturedProjects } from '@/lib/projects'
import HeroSection from './_components/hero'
import Skills from './_components/skills'
import Services from './_components/services'
import Projects from './_components/client-work'
import WorkFlow from './_components/why-choose-me'
import Contact from './_components/contact'
import ScrollToTop from './_components/scroll-to-top'
import Testimonials from './_components/testimonials'

export default function Page() {
  const projects = getFeaturedProjects()

  return (
    <main>
      <HeroSection />
      <Services />
      <Projects projects={projects} />
      <Testimonials />
      <WorkFlow />
      <Skills />
      <Contact />
      <ScrollToTop />
    </main>
  )
}