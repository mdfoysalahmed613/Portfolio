import React from 'react'
import {
  SiMongodb,
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiShadcnui,
  SiExpress,
  SiTailwindcss,
  SiFirebase,
  SiReactquery,
  SiMongoose,
  SiClerk,
  SiReacthookform,
  SiGit,
  SiGithub,
  SiPrisma,
  SiPostgresql,
  SiSupabase,
  SiUbuntu,
  SiVercel,
  SiPostman,
} from "react-icons/si"


const Skills = () => {
  const Tech = ({ icon: Icon, label }: { icon: React.ComponentType<any>; label: string }) => (
    <span className='inline-flex items-center gap-2 text-lg font-medium text-popover-foreground'>
      <Icon className='w-4 h-4' />
      {label}
    </span>
  )

  const FRONTEND = [
    { icon: SiNextdotjs, label: 'Next.js' },
    { icon: SiReact, label: 'React' },
    { icon: SiTypescript, label: 'TypeScript' },
    { icon: SiTailwindcss, label: 'Tailwind CSS' },
    { icon: SiShadcnui, label: 'Shadcn UI' },
    { icon: SiReactquery, label: 'TanStack Query' },
    { icon: SiReacthookform, label: 'React Hook Form' },
  ]

  const BACKEND = [
    { icon: SiNodedotjs, label: 'Node.js' },
    { icon: SiExpress, label: 'Express.js' },
    { icon: SiFirebase, label: 'Firebase' },
    { icon: SiClerk, label: 'Clerk' },
    { icon: SiSupabase, label: 'Supabase' },
  ]

  const DATABASES = [
    { icon: SiMongodb, label: 'MongoDB' },
    { icon: SiMongoose, label: 'Mongoose' },
    { icon: SiPostgresql, label: 'PostgreSQL' },
    { icon: SiPrisma, label: 'Prisma' },
  ]

  const TOOLS = [
    { icon: SiGit, label: 'Git' },
    { icon: SiGithub, label: 'GitHub' },
    { icon: SiPostman, label: 'Postman' },
    { icon: SiUbuntu, label: 'Ubuntu' },
    { icon: SiVercel, label: 'Vercel' },
  ]

  return (
    <section className='my-10' id='skills' >
      <h1 className='font-bold text-center text-4xl lg:text-5xl'>Skills</h1>
      <p className='py-4 text-center'>Key skills that define my professional identity.</p>

      {/* All my skills by categorized */}
      <div className='max-w-7xl mx-auto mt-4 py-8'>
        <div className='grid md:grid-cols-2 gap-8'>
          {/* Frontend */}
          <div className='py-3'>
            <h2 className='font-bold text-2xl text-primary mb-3'>Frontend</h2>
            <div className='flex flex-wrap gap-4'>
              {FRONTEND.map((t) => (
                <Tech key={t.label} icon={t.icon} label={t.label} />
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className='py-3'>
            <h3 className='font-bold text-2xl text-primary mb-3'>Backend & Authentication</h3>
            <div className='flex flex-wrap gap-4'>
              {BACKEND.map((t) => (
                <Tech key={t.label} icon={t.icon} label={t.label} />
              ))}
            </div>
          </div>          { /* Databases & ORMs */}
          <div className='space-y-3'>
            <h3 className='font-bold text-2xl text-primary mb-3'>Databases & ORMs</h3>
            <div className='flex flex-wrap gap-4'>
              {DATABASES.map((t) => (
                <Tech key={t.label} icon={t.icon} label={t.label} />
              ))}
            </div>
          </div>

          {/* Tools & Services */}
          <div className='space-y-3'>
            <h3 className='font-bold text-2xl text-primary mb-3'>Tools & Services</h3>
            <div className='flex flex-wrap gap-4'>
              {TOOLS.map((t) => (
                <Tech key={t.label} icon={t.icon} label={t.label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills