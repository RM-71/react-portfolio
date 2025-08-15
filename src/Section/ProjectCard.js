import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ProjectCard({ p, i }) {
  const [showModal, setShowModal] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const screens = p.screens || [p.cover] // fallback to cover if no screens

  const prevSlide = () => setActiveIndex((activeIndex - 1 + screens.length) % screens.length)
  const nextSlide = () => setActiveIndex((activeIndex + 1) % screens.length)

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5, delay: i * 0.1 }}
        className="group glass rounded-3xl overflow-hidden flex flex-col"
      >
        <div className="relative aspect-[16/9] overflow-hidden">
          <img src={p.cover} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
        <div className="p-5 flex-1 flex flex-col gap-3">
          <h3 className="text-xl font-semibold">{p.title}</h3>
          <p className="text-slate-300 text-sm flex-1">{p.description}</p>
          <div className="flex flex-wrap gap-2">
            {p.tags.map(t => <span key={t} className="px-2 py-1 text-xs rounded-full bg-white/5 border border-white/10">{t}</span>)}
          </div>
          <div className="mt-3 flex gap-3">
            <button
              onClick={() => setShowModal(true)}
              className="rounded-xl px-4 py-2 bg-gradient-to-r from-cyan-500 to-violet-500 text-slate-900 font-semibold"
            >
              More
            </button>
          </div>
        </div>
      </motion.article>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-gray-900 rounded-2xl p-8 max-w-xl w-full relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-white text-2xl"
              aria-label="Close"
            >
              &times;
            </button>
            {/* Carousel */}
            <div className="w-full aspect-[16/9] mb-4 overflow-hidden rounded-lg relative flex items-center justify-center">
              <img
                src={screens[activeIndex]}
                alt={p.title}
                className="w-full h-full object-cover"
              />
              {screens.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white px-2 py-1 rounded-full"
                  >
                    &#8592;
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white px-2 py-1 rounded-full"
                  >
                    &#8594;
                  </button>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                    {screens.map((_, idx) => (
                      <span
                        key={idx}
                        className={`w-2 h-2 rounded-full ${idx === activeIndex ? 'bg-white' : 'bg-gray-500'}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
            <h2 className="text-2xl font-bold mb-2">{p.title}</h2>
            <p className="text-slate-300 mb-4">{p.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tags.map(t => (
                <span key={t} className="px-2 py-1 text-xs rounded-full bg-white/5 border border-white/10">{t}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}