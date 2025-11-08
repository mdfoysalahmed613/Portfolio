import { projects } from "@/config/projects"
import Project from "../project/project"

const Projects = () => {
  return (
     <div className='my-10 bg-card p-8 rounded-md'>
        <h1 className='font-bold text-center text-2xl md:text-4xl lg:text-5xl'>Projects</h1>
        <p className='py-4 text-center'>Showcasing impactful projects and technical achievements.</p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6'>
           {projects.map((project) => (
              <Project key={project.name} {...project} />
           ))}
        </div>
     </div>
  )
}

export default Projects