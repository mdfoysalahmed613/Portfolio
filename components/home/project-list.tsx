import { Projects } from "@/config/projects"
import ProjectCard from "./project-card"
import { Button } from "../ui/button"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

const ProjectList = () => {

   return (
      <div className='my-10 ' id="projects">
         <h1 className='font-bold text-center text-4xl lg:text-5xl'>Projects</h1>
         <p className='py-4 text-center'>Showcasing impactful projects and technical achievements.</p>

         <div className='flex justify-center gap-4 mt-6'>
            {Projects.map((project) => (
               <ProjectCard key={project.Name} project={project} />
            ))}
         </div>
         <div className='flex justify-center items-center my-6'>
            <Button variant='outline' asChild>
               <Link href='/projects'>
                  <ChevronDown /> View More
               </Link>
            </Button>
         </div>
      </div>
   )
}

export default ProjectList