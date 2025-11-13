import HeroSection from '@/components/home/hero-section'
import ProjectsList from '@/components/home/project-list'
import Skills from '@/components/home/skills-list'
const Page = () => {
  return (
    <div>
      <HeroSection />
      <Skills />
      <ProjectsList />
    </div>
  )
}

export default Page