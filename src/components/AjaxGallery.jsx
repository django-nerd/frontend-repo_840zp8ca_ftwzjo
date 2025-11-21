import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ITEMS = [
  { id: 'neon', title: 'Neon Commerce', cover: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1400&auto=format&fit=crop' },
  { id: 'folio', title: 'Studio Folio', cover: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1400&auto=format&fit=crop' },
  { id: 'orbit', title: 'Orbit SaaS', cover: 'https://images.unsplash.com/photo-1662242742653-13f0f76de431?ixlib=rb-4.1.0&w=2000&auto=format&fit=crop&q=80' },
  { id: 'aurora', title: 'Aurora Brand', cover: 'https://images.unsplash.com/photo-1542759564-7ccbb6dc09d2?q=80&w=1600&auto=format&fit=crop' }
]

export default function AjaxGallery() {
  const [active, setActive] = useState(null)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)

  useEffect(() => {
    if (!active) return
    setLoading(true)
    const t = setTimeout(() => {
      setData({
        id: active,
        description: 'Case study full of motion, parallax and delightful details. Built with React and Framer Motion.'
      })
      setLoading(false)
    }, 600)
    return () => clearTimeout(t)
  }, [active])

  return (
    <section id="work" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Motion Gallery</h2>
            <p className="text-slate-300/80 mt-2">Click a card to fetch a mini case study (simulated AJAX) with an immersive transition.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ITEMS.map((it, i) => (
            <motion.button
              key={it.id}
              onClick={() => setActive(it.id)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              viewport={{ once: true, amount: 0.2 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-left"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={it.cover} alt="" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 grid place-items-center">
                <span className="rounded-full bg-white/10 px-3 py-1 text-white/90 text-sm">Apri</span>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl bg-[radial-gradient(closest-side,rgba(217,70,239,0.18),transparent)]" />
              <div className="absolute bottom-3 left-3 right-3 text-white font-medium">{it.title}</div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Overlay detail */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[65] bg-slate-950/80 backdrop-blur"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', stiffness: 120, damping: 18 }}
              className="absolute inset-x-0 bottom-0 mx-auto max-w-3xl rounded-t-3xl border border-white/10 bg-white/5 p-6 md:p-10"
              onClick={(e) => e.stopPropagation()}
            >
              {loading ? (
                <div className="h-40 grid place-items-center text-slate-300">Loading…</div>
              ) : (
                data && (
                  <div>
                    <h3 className="text-white text-2xl font-semibold mb-2">{ITEMS.find(i => i.id === active)?.title}</h3>
                    <p className="text-slate-300/85">{data.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {['UI', 'Motion', 'Parallax'].map(t => (
                        <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-white/80">{t}</span>
                      ))}
                    </div>
                  </div>
                )
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
