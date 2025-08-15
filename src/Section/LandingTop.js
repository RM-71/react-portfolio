import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1600&auto=format&fit=crop"
          alt="Backdrop"
          className="w-full h-full object-cover opacity-40"
        />
        {/* Color gradients */}
        <div className="absolute -top-16 -left-16 w-80 h-80 bg-pink-500 rounded-full blur-3xl opacity-30 animate-blob" />
        <div className="absolute -bottom-20 -right-24 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-30 animate-blob" />
        <div className="absolute inset-0 bg-[#0b0b0f]/70 backdrop-blur-xs" />
      </div>

      <div className="relative z-10 section flex flex-col items-start gap-6 py-24">
       

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-5xl mt-5 md:text-7xl font-extrabold leading-tight gradient-text drop-shadow-lg"
        >
          Crafting immersive<br className="hidden md:block"/> web experiences.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-gray-300 max-w-2xl text-lg"
        >
          I blend motion, interaction, and clean aesthetics to build delightful digital products.
        </motion.p>

        <div className="flex items-center gap-4 mt-2">
          <a href="#projects" className="px-6 py-3 rounded-full glass text-sm hover:scale-105 transition">Explore Projects</a>
        </div>

      </div>
    </section>
  )
}