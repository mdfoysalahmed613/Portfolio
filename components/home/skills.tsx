'use client'
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
  SiReactquery,
  SiClerk,
  SiGit,
  SiGithub,
  SiPrisma,
  SiPostgresql,
  SiSupabase,
  SiUbuntu,
  SiVercel,
  SiPostman,
  SiDocker,
} from "react-icons/si"
import { motion } from 'framer-motion'
import { TbBrandFramerMotion } from 'react-icons/tb'


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
    { icon: TbBrandFramerMotion , label: 'Motion' },
  ]

  const BACKEND = [
    { icon: SiNodedotjs, label: 'Node.js' },
    { icon: SiExpress, label: 'Express.js' },
    { icon: SiSupabase, label: 'Supabase' },
  ]

  const DATABASES = [
    { icon: SiMongodb, label: 'MongoDB' },
    { icon: SiPostgresql, label: 'PostgreSQL' },
    { icon: SiPrisma, label: 'Prisma' },
  ]

  const TOOLS = [
    { icon: SiGit, label: 'Git' },
    { icon: SiGithub, label: 'GitHub' },
    { icon: SiDocker, label: 'Docker' },
    { icon: SiPostman, label: 'Postman' },
    { icon: SiVercel, label: 'Vercel' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    },
    
  }

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0
    },
  }

  return (
    <section className='py-20' id='skills' >
      <motion.h1
        className='font-bold text-center text-4xl lg:text-5xl'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h1>
      <motion.p
        className='py-4 text-center text-muted-foreground'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Key skills that define my professional identity.
      </motion.p>

      {/* All my skills by categorized */}
      <div className='max-w-7xl mx-auto mt-8 py-16'>
        <div className='grid md:grid-cols-2 gap-8'>
          {/* Frontend */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={categoryVariants}
            transition={{ duration: 0.6 }}
          >
            <h2 className='font-bold text-2xl text-primary mb-3'>Frontend</h2>
            <motion.div
              className='flex flex-wrap gap-4'
              variants={containerVariants}
            >
              {FRONTEND.map((t) => (
                <motion.div key={t.label} variants={itemVariants} transition={{ duration: 0.5 }} >
                  <Tech icon={t.icon} label={t.label} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Backend */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={categoryVariants}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className='font-bold text-2xl text-primary mb-3'>Backend & Authentication</h3>
            <motion.div
              className='flex flex-wrap gap-4'
              variants={containerVariants}
            >
              {BACKEND.map((t) => (
                <motion.div key={t.label} variants={itemVariants} transition={{ duration: 0.5 }}>
                  <Tech icon={t.icon} label={t.label} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>          { /* Databases & ORMs */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={categoryVariants}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className='font-bold text-2xl text-primary mb-3'>Databases & ORMs</h3>
            <motion.div
              className='flex flex-wrap gap-4'
              variants={containerVariants}
            >
              {DATABASES.map((t) => (
                <motion.div key={t.label} variants={itemVariants} transition={{ duration: 0.5 }}>
                  <Tech icon={t.icon} label={t.label} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Tools & Services */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={categoryVariants}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className='font-bold text-2xl text-primary mb-3'>Tools & Services</h3>
            <motion.div
              className='flex flex-wrap gap-4'
              variants={containerVariants}
            >
              {TOOLS.map((t) => (
                <motion.div key={t.label} variants={itemVariants} transition={{ duration: 0.5 }}>
                  <Tech icon={t.icon} label={t.label} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills