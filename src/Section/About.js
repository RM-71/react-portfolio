import { motion } from 'framer-motion'

export default function About() {
  const skills = ['React', 'TypeScript', 'Tailwind', 'Framer Motion', 'JavaScript', 'C#', 'C++', 'Python']

  return (
    <section id="about" className="section">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center" style={{ marginTop: 100 }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <p className="text-slate-300">
            I’m a student front‑end developer from De La Salle Lipa. I specialize in building modern, accessible web apps.
          </p>
          <p className="text-slate-300">
            My passion lies in creating intuitive user interfaces and delightful experiences through motion and interaction design.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass rounded-3xl p-6"
        >
          <h3 className="font-semibold mb-4">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map(s => (
              <span key={s} className="px-3 py-1 rounded-full bg-white/5 border border-white/10">{s}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
