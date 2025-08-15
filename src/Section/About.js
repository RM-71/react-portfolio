import { motion } from 'framer-motion'

export default function About() {
  const skills = ['React', 'TypeScript', 'Tailwind', 'Framer Motion', 'JavaScript', 'C#', 'C++', 'Python']
  const techSkills = [
    { name: 'Web Development', percent: 70 },
    { name: 'UI/UX Design', percent: 60 },
    { name: 'Database Management', percent: 70 },
    { name: 'Project Management', percent: 80 }
  ]

  return (
    <section id="about" className="section">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center" style={{ marginTop: 50 }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <p className="text-slate-300">
            Reymark De Castro, a student front‑end developer from De La Salle Lipa. I specialize in building modern, accessible web apps.
          </p>
          <div className="mt-8 space-y-6">
            <h2 className="text-2xl font-bold">Professional Summary</h2>
            <p className="text-slate-300">
              Driven software architect with expertise in developing scalable, high-performance enterprise solutions. Passionate about leveraging cutting-edge technologies to solve complex business challenges.
            </p>
            <h3 className="font-semibold mt-6 mb-2">Contact Information</h3>
            <ul className="text-slate-300 space-y-2">
              <li>
                <span className="mr-2">📍</span>
                Lipa City, Batangas, Philippines
              </li>
              <li>
                <span className="mr-2">✉️</span>
                decastro_reymark@dlsl.edu.ph
              </li>
              <li>
                <span className="mr-2">📞</span>
                +63 912 345 6789
              </li>
            </ul>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass rounded-3xl p-6 space-y-8"
        >
          <div>
            <h3 className="font-semibold mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map(s => (
                <span key={s} className="px-3 py-1 rounded-full bg-white/5 border border-white/10">{s}</span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Technical Skills</h3>
            <div className="space-y-4">
              {techSkills.map(skill => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.percent}%</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full">
                    <div
                      className="h-2 bg-cyan-500 rounded-full"
                      style={{ width: `${skill.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}