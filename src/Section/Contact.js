import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold">Contact Me</h2>
        <p className="text-slate-300 mt-3">We'd love to hear from you! Whether you have a question, a project in mind, or just want to say hello, feel free to reach out.</p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget
            const data = new FormData(form)
            const name = data.get('name')
            const email = data.get('email')
            const message = data.get('message')
          }}
          className="glass mt-6 rounded-3xl p-6 space-y-4"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm text-slate-300">Name</label>
              <input id="name" name="name" required placeholder="Name" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400/50" />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm text-slate-300">Email</label>
              <input id="email" name="email" type="email" required placeholder="Email" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400/50" />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm text-slate-300">Message</label>
            <textarea id="message" name="message" required rows="5" placeholder="Message" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400/50"></textarea>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xs text-slate-400">This opens your email app to send the message.</p>
            <button type="submit" className="rounded-xl px-6 py-3 bg-gradient-to-r from-cyan-500 to-violet-500 text-slate-900 font-semibold shadow-glow">
              Send
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
