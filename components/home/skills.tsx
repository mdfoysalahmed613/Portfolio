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
  return (
    <div className='my-10' id='skills' >
      <h1 className='font-bold text-center text-2xl md:text-4xl lg:text-5xl'>Skills</h1>
      <p className='py-4 text-center'>Key skills that define my professional identity.</p>

      {/* All my skills by categorized */}
      <div className='max-w-7xl mx-auto mt-8 py-8'>
        <div className='grid md:grid-cols-2 gap-8'>
          {/* Frontend */}
          <div className='py-3'>
            <h2 className='font-bold text-2xl text-primary mb-3'>Frontend</h2>
            <div className='flex flex-wrap gap-4'>
              <span className='inline-flex items-center gap-2 text-lg font-medium text-popover-foreground'>
                <SiNextdotjs className='w-4 h-4' /> Next.js
              </span>
              <span className='inline-flex items-center gap-2 text-lg font-medium text-popover-foreground'>
                <SiReact className='w-4 h-4' /> React
              </span>
              <span className='inline-flex items-center gap-2 text-lg font-medium text-popover-foreground'>
                <SiTypescript className='w-4 h-4' /> TypeScript
              </span>
              <span className='inline-flex items-center gap-2  text-lg font-medium text-popover-foreground'>
                <SiTailwindcss className='w-4 h-4' /> Tailwind CSS
              </span>
              <span className='inline-flex items-center gap-2  text-lg font-medium text-popover-foreground'>
                <SiShadcnui className='w-4 h-4' /> Shadcn UI
              </span>
              <span className='inline-flex items-center gap-2  text-lg font-medium text-popover-foreground'>
                <SiReactquery className='w-4 h-4' /> TanStack Query
              </span>
              <span className='inline-flex items-center gap-2  text-lg font-medium text-popover-foreground'>
                <SiReacthookform className='w-4 h-4' /> React Hook Form
              </span>
            </div>
          </div>

          {/* Backend */}
          <div className='py-3'>
            <h3 className='font-bold text-2xl text-primary mb-3'>Backend & Authentication</h3>
            <div className='flex flex-wrap gap-4'>
              <span className='inline-flex items-center gap-2 text-lg font-medium text-popover-foreground'>
                <SiNodedotjs className='w-4 h-4' /> Node.js
              </span>
              <span className='inline-flex items-center gap-2  text-lg font-medium text-popover-foreground'>
                <SiExpress className='w-4 h-4' /> Express.js
              </span>

              <span className='inline-flex items-center gap-2  text-lg font-medium text-popover-foreground'>
                <SiFirebase className='w-4 h-4' /> Firebase
              </span>
              <span className='inline-flex items-center gap-2  text-lg font-medium text-popover-foreground'>
                <SiClerk className='w-4 h-4' /> Clerk
              </span>
              <span className='inline-flex items-center gap-2  text-lg font-medium text-popover-foreground'>
                <SiSupabase className='w-4 h-4' /> Supabase
              </span>
              
            </div>
          </div>

          { /* Databases & ORMs */}
          <div className='space-y-3'>
            <h3 className='font-bold text-2xl text-primary mb-3'>Databases & ORMs</h3>
            <div className='flex flex-wrap gap-4'>
              <span className='inline-flex items-center gap-2  text-lg font-medium text-popover-foreground'>
                <SiMongodb className='w-4 h-4' /> MongoDB
              </span>
              <span className='inline-flex items-center gap-2  text-lg font-medium text-popover-foreground'>
                <SiMongoose className='w-4 h-4' /> Mongoose
              </span>
              <span className='inline-flex items-center gap-2  text-lg font-medium text-popover-foreground'>
                <SiPostgresql className='w-4 h-4' /> PostgreSQL
              </span>
              <span className='inline-flex items-center gap-2  text-lg font-medium text-popover-foreground'>
                <SiPrisma className='w-4 h-4' /> Prisma
              </span>
            </div>
          </div>

          {/* Tools & Services */}
          <div className='space-y-3'>
            <h3 className='font-bold text-2xl text-primary mb-3'>Tools & Services</h3>
            <div className='flex flex-wrap gap-4'>
              <span className='inline-flex items-center gap-2  text-lg font-medium text-popover-foreground'>
                <SiGit className='w-4 h-4' /> Git
              </span>
              <span className='inline-flex items-center gap-2  text-lg font-medium text-popover-foreground'>
                <SiGithub className='w-4 h-4' /> GitHub
              </span>
              <span className='inline-flex items-center gap-2  text-lg font-medium text-popover-foreground'>
                <SiPostman className='w-4 h-4' /> Postman
              </span>
              <span className='inline-flex items-center gap-2  text-lg font-medium text-popover-foreground'>
                <SiUbuntu className='w-4 h-4' /> Ubuntu
              </span>
              <span className='inline-flex items-center gap-2  text-lg font-medium text-popover-foreground'>
                <SiVercel className='w-4 h-4' /> Vercel
              </span>

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Skills