import ProjectCard from "@/components/home/project-card"
import { Projects } from "@/config/projects"

const page = () => {
   return (
      <div id='projects'>
         <h1 className='font-bold text-4xl lg:text-5xl my-4'>Projects</h1>
         <p className='text-muted-foreground'>Showcasing impactful projects and technical achievements.</p>
         <hr className="my-6" />
         <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 mx-6'>
            {Projects.map((project) => (
               <ProjectCard key={project.companyName} project={project} />
            ))}
         </div>
      </div>
   )
}

export default page