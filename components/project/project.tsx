import { IProject } from '@/config/projects'
import React from 'react'
import { Card } from '../ui/card'

const Project = ({ name, shortDescription, WebsiteLink, githubLink, techStack }: IProject) => {
  return (
    <Card className='bg-background px-4 '>
      <h2>{name}</h2>
      <p>{shortDescription}</p>
      <a href={WebsiteLink}>Website</a>
      <a href={githubLink}>GitHub</a>
      <p>Technologies: {techStack.join(", ")}</p>
    </Card>
  )
}

export default Project