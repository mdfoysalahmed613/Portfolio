import Skill from '@/components/skills/skill'
import { skills } from '@/config/skills'
import React from 'react'

const page = () => {
  return (
     <div id='skills'>
        <h1 className='font-bold text-4xl lg:text-5xl my-4'>Skills</h1>
      <p className='text-muted-foreground'>Key skills that define my professional identity.</p>
      <hr className="my-6" />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 mx-6'>
        {skills.map((skill) => (
          <Skill key={skill.name} {...skill} />
        ))}
      </div>
    </div>
  )
}

export default page