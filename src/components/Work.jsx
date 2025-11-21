import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Neon Shop — E‑commerce Concept',
    description: 'Playful motion and glassy UI for a next-gen shopping flow.',
    image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1200&auto=format&fit=crop',
    tags: ['UI', 'Motion', 'E‑commerce'],
    link: '#'
  },
  {
    title: 'Studio Folio — Agency Website',
    description: 'Bold typography and fluid transitions built for a boutique studio.',
    image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1200&auto=format&fit=crop',
    tags: ['Web', 'Brand', 'Interactions'],
    link: '#'
  },
  {
    title: 'Orbit — SaaS Dashboard',
    description: 'Clean, data-forward design with delightful hover details.',
    image: 'https://images.unsplash.com/photo-1662242742653-13f0f76de431?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxPcmJpdCUyMCVFMiU4MCU5NCUyMFNhYVMlMjBEYXNoYm9hcmR8ZW58MHwwfHx8MTc2MzczOTE4OXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    tags: ['Dashboard', 'Design System', 'UX'],
    link: '#'
  }
]

export default function Work() {
  return (
    <section id="work" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_90%_0%,rgba(14,165,233,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Selected Work</h2>
            <p className="text-slate-300/80 mt-2">A few favorites — smooth, playful, and performant.</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center rounded-lg border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/90 hover:bg-white/15">Start a project</a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              viewport={{ once: true, amount: 0.2 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-white/80">{t}</span>
                  ))}
                </div>
                <h3 className="text-white font-semibold text-lg">{p.title}</h3>
                <p className="text-slate-300/80 text-sm mt-1">{p.description}</p>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
