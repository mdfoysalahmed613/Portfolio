import { ISkill } from '@/config/skills'
import React from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
const Skill = ({ name, description, rating, icon }: ISkill) => {
  const Icon = icon as React.ComponentType<{ size?: number }>;
  return (
    <Card className='hover:shadow-lg transition-shadow duration-300'>
      <CardHeader>
        <Icon size={45} />
      </CardHeader>
      <CardContent>
        <h1 className='font-semibold'>{name}</h1>
        <p className='text-sm text-muted-foreground my-2'>{description}</p>
          {Array.from({ length: 5 }).map((_, index) => (
            <span key={index} className={index < rating ? 'text-yellow-500' : 'text-gray-300'}>
              ★
            </span>
          ))}
      </CardContent>
    </Card>
  )
}

export default Skill