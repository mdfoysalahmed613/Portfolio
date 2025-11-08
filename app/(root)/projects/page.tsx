import Project from "@/components/project/project"
import { projects } from "@/config/projects"

const page = () => {
   return (
      <div id='projects'>
         <h1 className='font-bold text-4xl lg:text-5xl my-4'>Projects</h1>
         <p className='text-muted-foreground'>Showcasing impactful projects and technical achievements.</p>
         <hr className="my-6" />
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 mx-6'>
            {projects.map((project) => (
               <Project key={project.name} {...project} />
            ))}
         </div>
      </div>
   )
}

export default page