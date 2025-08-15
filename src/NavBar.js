import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [elevated, setElevated] = useState(false)

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 15)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-3 left-0 right-0 z-50 transition-all`}>
      <nav className="glass mx-auto max-w-6xl rounded-2xl py-3 px-5 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-slate-100">
          <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">My Portfolio</span>
        </a>
        <div className="hidden md:flex items-center gap-6">
          {navItems.map(item => (
            <a key={item.href} href={item.href} className="text-slate-300 hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="rounded-xl px-4 py-2 bg-gradient-to-r from-cyan-500 to-violet-500 text-slate-900 font-semibold shadow-glow">
            Contact
          </a>
        </div>
        <button onClick={() => setOpen(v => !v)} className="md:hidden p-2 rounded-lg hover:bg-white/10">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="glass mx-4 mt-2 rounded-2xl md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {navItems.map(item => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-slate-300 hover:text-white">
                  {item.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="rounded-xl px-4 py-2 bg-gradient-to-r from-cyan-500 to-violet-500 text-slate-900 font-semibold text-center">
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
