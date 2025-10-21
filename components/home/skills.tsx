import React from 'react'
import { skills } from '@/config/skills'    
import Skill from '../skills/skill'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import Link from 'next/dist/client/link'
import { ChevronDown } from 'lucide-react'
const Skills = () => {
  return (
    <Card>
      <CardHeader className='text-center'>
        <CardTitle className='font-bold text-2xl md:text-4xl lg:text-5xl'>Skills</CardTitle>
        <CardDescription >Key skills that define my professional identity.</CardDescription>
      </CardHeader> 
      <CardContent>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6'> 
        {skills.slice(0, 6).map((skill) => (
          <Skill key={skill.name} {...skill} />
        ))}
        </div>
      </CardContent>
      <CardFooter className='flex justify-center items-center'>
        <Button variant='outline' asChild>
          <Link href='/skills'>
            <ChevronDown />View More 
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default Skills