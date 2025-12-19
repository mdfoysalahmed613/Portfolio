"use client"
import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardDescription } from '../ui/card'
import { Code2, FolderGit2, MessageSquare, GitBranch, ShieldCheck, ListChecks } from 'lucide-react'

const workingPrinciples = [
   {
      icon: Code2,
      title: "Clean, Maintainable Code",
      description: "Write code that your team can understand and maintain months later. No clever tricks—just clear, readable solutions."
   },
   {
      icon: FolderGit2,
      title: "Follow Project Conventions",
      description: "Adapt to your existing codebase structure, naming patterns, and architectural decisions without friction."
   },
   {
      icon: MessageSquare,
      title: "Clear Async Communication",
      description: "Document decisions, share updates proactively, and communicate clearly across time zones without constant oversight."
   },
   {
      icon: GitBranch,
      title: "Proper Git Workflow",
      description: "Small, focused PRs with descriptive commits. Easy code reviews that don't block your team's progress."
   },
   {
      icon: ListChecks,
      title: "Review-Friendly Delivery",
      description: "Ship changes with quick context, clear PR notes, and careful edge-case handling so reviews stay fast and predictable."
   },
   {
      icon: ShieldCheck,
      title: "Long-term Thinking",
      description: "Consider performance implications, data integrity, and security from the start—not as afterthoughts."
   }
]

const WorkFlow = () => {
   return (
      <section className='py-20' id='how-i-work'>
         <div className='max-w-7xl mx-auto px-4'>
            <motion.h2
               className='font-bold text-center text-4xl lg:text-5xl'
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
            >
               How I Work
            </motion.h2>
            <motion.p
               className='py-4 text-center text-muted-foreground max-w-2xl mx-auto text-lg'
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 0.1 }}
            >
               I integrate seamlessly into agency workflows without slowing teams down or creating technical debt.
            </motion.p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
               {workingPrinciples.map((principle, index) => {
                  const Icon = principle.icon
                  return (
                     <motion.div
                        key={principle.title}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                     >
                        <Card className='h-full hover:shadow-lg transition-all duration-300 hover:border-primary/50 hover:-translate-y-1'>
                           <CardHeader>
                              <div className='w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4'>
                                 <Icon className='w-6 h-6 text-primary' />
                              </div>
                              <CardTitle className='text-xl mb-2'>{principle.title}</CardTitle>
                              <CardDescription className='text-base leading-relaxed'>
                                 {principle.description}
                              </CardDescription>
                           </CardHeader>
                        </Card>
                     </motion.div>
                  )
               })}
            </div>

            <motion.div
               className='mt-16 text-center'
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 0.6 }}
            >
               <p className='text-xl font-medium text-foreground'>
                  "I write stable code, work independently, and follow patterns that make future maintenance easy."
               </p>
            </motion.div>
         </div>
      </section>
   )
}

export default WorkFlow