
import { skills } from '@/config/skills'
import Skill from './skill-card'
import { Button } from '../ui/button'
import Link from 'next/dist/client/link'
import { ChevronDown } from 'lucide-react'
const Skills = () => {
  return (
    <div className='my-10' id='skills' >
      <h1 className='font-bold text-center text-2xl md:text-4xl lg:text-5xl'>Skills</h1>
      <p className='py-4 text-center'>Key skills that define my professional identity.</p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6'>
        {skills.slice(0, 6).map((skill) => (
          <Skill key={skill.name} {...skill} />
        ))}
      </div>
      <div className='flex justify-center items-center my-6'>
        <Button variant='outline' asChild>
          <Link href='/skills'>
            <ChevronDown />View More
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default Skills