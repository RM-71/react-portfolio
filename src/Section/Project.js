import {projects} from '../Image/ProjectData'
import ProjectCard from './ProjectCard'
import { motion } from 'framer-motion'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
          <a href="https://github.com/yourname" target="_blank" className="text-slate-300 hover:text-white">View GitHub →</a>
        </div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((p, i) => <ProjectCard key={p.title} p={p} i={i} />)}
        </motion.div>
      </div>
    </section>
  )
}
